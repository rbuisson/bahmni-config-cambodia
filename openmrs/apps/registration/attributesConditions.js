var showOrHideAdditionalInfoSection = function (patient) {
    var returnValues = {
        show: [],
        hide: []
    };
    //We need to find a better condition to hide the section
    if (patient["age"].years < -1) {
        returnValues.show.push("additionalPatientInformation")
    } else {
        returnValues.hide.push("additionalPatientInformation")
    }
    return returnValues
};
 
Bahmni.Registration.AttributesConditions.rules = {
    'age': function (patient) {
        return showOrHideAdditionalInfoSection(patient);
    }
};