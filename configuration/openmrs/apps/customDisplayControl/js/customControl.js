'use strict';

angular.module('bahmni.common.displaycontrol.custom')
    .directive('immunization', ['observationsService', 'appService', 'spinner', function (observationsService, appService, spinner) {
      var link = function ($scope) {
        var pastImmunizationConcepts = $scope.config.pastImmunizationConcepts;

        $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/immunization.html";

        $scope.immunizations = [];

        spinner.forPromise(observationsService.fetch($scope.patient.uuid, pastImmunizationConcepts, "latest", undefined, undefined, undefined).then(function (response) {
          var pastImmunizations = response.data;

          pastImmunizations = _.map(pastImmunizations, function(item, index) {
            var immunization = {}
            immunization.uuid = item.groupMembers[0].conceptUuid;
            immunization.name = item.groupMembers[0].conceptNameToDisplay;
            immunization.value = item.groupMembers[0].valueAsString;
            immunization.fullySpecifiedName = item.groupMembers[0].concept.name;

            if (item.groupMembers.length > 1) {
              immunization.date = item.groupMembers[1].value;
            }

            return immunization
          });

          var newImmunizationConcepts = $scope.config.newImmunizationConcepts;

          spinner.forPromise(observationsService.fetch($scope.patient.uuid, newImmunizationConcepts, "latest", undefined, undefined, undefined).then(function (response) {
            var newImmunizations = response.data;

            newImmunizations = _.map(newImmunizations, function (item, index) {
              var immunization =  {};
              immunization.uuid = item.value.uuid;
              immunization.name = item.valueAsString;
              immunization.value = "OBS_BOOLEAN_YES_KEY";
              immunization.date = item.observationDateTime;
              immunization.fullySpecifiedName = item.value.name;

              return immunization
            });

            // Remove duplicated items
            var newImmunizationsToRemove = []
            var pastImmunizationsToRemove = []

            var i;
            for (i = pastImmunizations.length - 1; i >= 0; i -= 1) {

              var item1 = pastImmunizations[i]

              var j;
              for (j = newImmunizations.length - 1; j >= 0; j -= 1) {

                var item2 = newImmunizations[j];

                if (item1.uuid == item2.uuid) {
                  if (new Date(item1.date) > new Date(item2.date) ) {
                    newImmunizationsToRemove.push(j);
                  } else {
                    pastImmunizationsToRemove.push(i);
                  }

                }
              }
            }

            pastImmunizationsToRemove.forEach(function (value) {
              pastImmunizations.splice(value, 1);
            })

            newImmunizationsToRemove.forEach(function (value) {
              newImmunizations.splice(value, 1);
            })

            var allImmunizations = pastImmunizations.concat(newImmunizations);

            // Order the immunizations based on the config
            $scope.config.displayedImmunization.forEach(function(item1) {
              allImmunizations.forEach(function (item2) {
                if (item1 == item2.fullySpecifiedName) {
                  $scope.immunizations.push(item2);
                }
              })
            })

          }));

        }));

      };

      return {
        restrict: 'E',
        link: link,
        template: '<ng-include src="contentUrl"/>'
      }
    }])
    .directive('birthCertificate', ['observationsService', 'appService', 'spinner', function (observationsService, appService, spinner) {
            var link = function ($scope) {
                console.log("inside birth certificate");
                var conceptNames = ["HEIGHT"];
                $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/birthCertificate.html";
                spinner.forPromise(observationsService.fetch($scope.patient.uuid, conceptNames, "latest", undefined, $scope.visitUuid, undefined).then(function (response) {
                    $scope.observations = response.data;
                }));
            };

            return {
                restrict: 'E',
                template: '<ng-include src="contentUrl"/>',
                link: link
            }
    }]).directive('deathCertificate', ['observationsService', 'appService', 'spinner', function (observationsService, appService, spinner) {
        var link = function ($scope) {
            var conceptNames = ["WEIGHT"];
            $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/deathCertificate.html";
            spinner.forPromise(observationsService.fetch($scope.patient.uuid, conceptNames, "latest", undefined, $scope.visitUuid, undefined).then(function (response) {
                $scope.observations = response.data;
            }));
        };

        return {
            restrict: 'E',
            link: link,
            template: '<ng-include src="contentUrl"/>'
        }
    }]).directive('customTreatmentChart', ['appService', 'treatmentConfig', 'TreatmentService', 'spinner', '$q', function (appService, treatmentConfig, treatmentService, spinner, $q) {
    var link = function ($scope) {
        var Constants = Bahmni.Clinical.Constants;
        var days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        $scope.contentUrl = appService.configBaseUrl() + "/customDisplayControl/views/customTreatmentChart.html";

        $scope.atLeastOneDrugForDay = function (day) {
            var atLeastOneDrugForDay = false;
            $scope.ipdDrugOrders.getIPDDrugs().forEach(function (drug) {
                if (drug.isActiveOnDate(day.date)) {
                    atLeastOneDrugForDay = true;
                }
            });
            return atLeastOneDrugForDay;
        };

        $scope.getVisitStopDateTime = function () {
            return $scope.visitSummary.stopDateTime || Bahmni.Common.Util.DateUtil.now();
        };

        $scope.getStatusOnDate = function (drug, date) {
            var activeDrugOrders = _.filter(drug.orders, function (order) {
                if ($scope.config.frequenciesToBeHandled.indexOf(order.getFrequency()) !== -1) {
                    return getStatusBasedOnFrequency(order, date);
                } else {
                    return drug.getStatusOnDate(date) === 'active';
                }
            });
            if (activeDrugOrders.length === 0) {
                return 'inactive';
            }
            if (_.every(activeDrugOrders, function (order) {
                    return order.getStatusOnDate(date) === 'stopped';
                })) {
                return 'stopped';
            }
            return 'active';
        };

        var getStatusBasedOnFrequency = function (order, date) {
            var activeBetweenDate = order.isActiveOnDate(date);
            var frequencies = order.getFrequency().split(",").map(function (day) {
                return day.trim();
            });
            var dayNumber = moment(date).day();
            return activeBetweenDate && frequencies.indexOf(days[dayNumber]) !== -1;
        };

        var init = function () {
            var getToDate = function () {
                return $scope.visitSummary.stopDateTime || Bahmni.Common.Util.DateUtil.now();
            };

            var programConfig = appService.getAppDescriptor().getConfigValue("program") || {};

            var startDate = null, endDate = null, getEffectiveOrdersOnly = false;
            if (programConfig.showDetailsWithinDateRange) {
                startDate = $stateParams.dateEnrolled;
                endDate = $stateParams.dateCompleted;
                if (startDate || endDate) {
                    $scope.config.showOtherActive = false;
                }
                getEffectiveOrdersOnly = true;
            }

            return $q.all([treatmentConfig(), treatmentService.getPrescribedAndActiveDrugOrders($scope.config.patientUuid, $scope.config.numberOfVisits,
                $scope.config.showOtherActive, $scope.config.visitUuids || [], startDate, endDate, getEffectiveOrdersOnly)])
                .then(function (results) {
                    var config = results[0];
                    var drugOrderResponse = results[1].data;
                    var createDrugOrderViewModel = function (drugOrder) {
                        return Bahmni.Clinical.DrugOrderViewModel.createFromContract(drugOrder, config);
                    };
                    for (var key in drugOrderResponse) {
                        drugOrderResponse[key] = drugOrderResponse[key].map(createDrugOrderViewModel);
                    }

                    var groupedByVisit = _.groupBy(drugOrderResponse.visitDrugOrders, function (drugOrder) {
                        return drugOrder.visit.startDateTime;
                    });
                    var treatmentSections = [];

                    for (var key in groupedByVisit) {
                        var values = Bahmni.Clinical.DrugOrder.Util.mergeContinuousTreatments(groupedByVisit[key]);
                        treatmentSections.push({visitDate: key, drugOrders: values});
                    }
                    if (!_.isEmpty(drugOrderResponse[Constants.otherActiveDrugOrders])) {
                        var mergedOtherActiveDrugOrders = Bahmni.Clinical.DrugOrder.Util.mergeContinuousTreatments(drugOrderResponse[Constants.otherActiveDrugOrders]);
                        treatmentSections.push({
                            visitDate: Constants.otherActiveDrugOrders,
                            drugOrders: mergedOtherActiveDrugOrders
                        });
                    }
                    $scope.treatmentSections = treatmentSections;
                    if ($scope.visitSummary) {
                        $scope.ipdDrugOrders = Bahmni.Clinical.VisitDrugOrder.createFromDrugOrders(drugOrderResponse.visitDrugOrders, $scope.visitSummary.startDateTime, getToDate());
                    }
                });
        };
        spinner.forPromise(init());
    };

    return {
        restrict: 'E',
        link: link,
        scope: {
            config: "=",
            visitSummary: '='
        },
        template: '<ng-include src="contentUrl"/>'
    }
}]);
