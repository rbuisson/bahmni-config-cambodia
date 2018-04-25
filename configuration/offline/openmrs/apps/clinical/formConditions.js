Bahmni.ConceptSet.FormConditions.rules = {
    'Diastolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            };
        } else {
            return {
                disable: ["Posture"]
            };
        }
    },
    'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            };
        } else {
            return {
                disable: ["Posture"]
            };
        }
    },
    'Cambodia_Head Circumference' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var sections = {
            "show": [],
            "hide": []
        };

        if (patientAge < 5) {
            return {
                show: ["Cambodia_Head Circumference"]
            };
        } else {
            return {
                hide: ["Cambodia_Head Circumference"]
            };
        }
    },
    'Cambodia_Newborn Immunizations Set' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        };

        if (patientAge < 1) {
            return {
                show: ["Cambodia_Newborn Immunizations Set"]
            };
        } else if (patientAge >= 1 && patientAge < 16) {
            return {
                hide: ["Cambodia_Newborn Immunizations Set"]
            };
        } else if (patientAge >= 16 && patientGender == 'F') {
            return {
                hide: ["Cambodia_Newborn Immunizations Set"]
            };
        } else {
            return {
                hide: ["Cambodia_Newborn Immunizations Set"]
            };
        }
    },
    'Cambodia_Child Immunizations Set' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        };

        if (patientAge < 1) {
            return {
                hide: ["Cambodia_Child Immunizations Set"]
            };
        } else if (patientAge >= 1 && patientAge < 16) {
            return {
                show: ["Cambodia_Child Immunizations Set"]
            };
        } else if (patientAge >= 16 && patientGender == 'F') {
            return {
                hide: ["Cambodia_Child Immunizations Set"]
            };
        } else {
            return {
                hide: ["Cambodia_Child Immunizations Set"]
            };
        }
    },
    'Cambodia_Pregnant Women Immunizations Set' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        };

        if (patientAge < 1) {
            return {
                hide: ["Cambodia_Pregnant Women Immunizations Set"]
            };
        } else if (patientAge >= 1 && patientAge < 13) {
            return {
                hide: ["Cambodia_Pregnant Women Immunizations Set"]
            };
        } else if (patientAge >= 13 && patientGender == 'F') {
            return {
                show: ["Cambodia_Pregnant Women Immunizations Set"]
            };
        } else {
            return {
                hide: ["Cambodia_Pregnant Women Immunizations Set"]
            };
        }
    },
    'Cambodia_Past Medical History' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Past Medical History'];

        var sections = {
            "show": [],
            "hide": []
        };

        if (fieldValue && fieldValue.indexOf('Cambodia_Cancer') > -1) {
            sections.show.push("Cambodia_Past Cancer Details");
        } else {
            sections.hide.push("Cambodia_Past Cancer Details");
        }

        return sections;
    },
    'Cambodia_BCG' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_BCG'];
        if (fieldValue) {
            return {
                show: ["Cambodia_BCG, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_BCG, Date Given"]
            };
        }
    },
    'Cambodia_HepB at birth' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_HepB at birth'];
        if (fieldValue) {
            return {
                show: ["Cambodia_HepB at birth, time administrered after birth"]
            };
        }
        else {
            return {
                hide: ["Cambodia_HepB at birth, time administrered after birth"]
            };
        }
    },
    'Cambodia_MR***' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_MR***'];
        if (fieldValue) {
            return {
                show: ["Cambodia_MR***, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_MR***, Date Given"]
            };
        }
    },
    'Cambodia_Polio1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Polio1'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Polio1, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_Polio1, Date Given"]
            };
        }
    },
    'Cambodia_Polio2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Polio2'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Polio2, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_Polio2, Date Given"]
            };
        }
    },
    'Cambodia_Polio3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Polio3'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Polio3, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_Polio3, Date Given"]
            };
        }
    },
    'Cambodia_IPV' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_IPV'];
        if (fieldValue) {
            return {
                show: ["Cambodia_IPV, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_IPV, Date Given"]
            };
        }
    },
    'Cambodia_DTP-Hep-Hip1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_DTP-Hep-Hip1'];
        if (fieldValue) {
            return {
                show: ["Cambodia_DTP-Hep-Hip1, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_DTP-Hep-Hip1, Date Given"]
            };
        }
    },'Cambodia_DTP-Hep-Hip2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_DTP-Hep-Hip2'];
        if (fieldValue) {
            return {
                show: ["Cambodia_DTP-Hep-Hip2, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_DTP-Hep-Hip2, Date Given"]
            };
        }
    },
    'Cambodia_DTP-Hep-Hip3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_DTP-Hep-Hip3'];
        if (fieldValue) {
            return {
                show: ["Cambodia_DTP-Hep-Hip3, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_DTP-Hep-Hip3, Date Given"]
            };
        }
    },
    'Cambodia_PCV1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_PCV1'];
        if (fieldValue) {
            return {
                show: ["Cambodia_PCV1, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_PCV1, Date Given"]
            };
        }
    },
    'Cambodia_PCV2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_PCV2'];
        if (fieldValue) {
            return {
                show: ["Cambodia_PCV2, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_PCV2, Date Given"]
            };
        }
    },
    'Cambodia_PCV3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_PCV3'];
        if (fieldValue) {
            return {
                show: ["Cambodia_PCV3, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_PCV3, Date Given"]
            };
        }
    },
    'Cambodia_MR1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_MR1'];
        if (fieldValue) {
            return {
                show: ["Cambodia_MR1, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_MR1, Date Given"]
            };
        }
    },
    'Cambodia_JE' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_JE'];
        if (fieldValue) {
            return {
                show: ["Cambodia_JE, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_JE, Date Given"]
            };
        }
    },
    'Cambodia_Tetanus1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Tetanus1'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Tetanus1, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_Tetanus1, Date Given"]
            };
        }
    },
    'Cambodia_Tetanus2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Tetanus2'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Tetanus2, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_Tetanus2, Date Given"]
            };
        }
    },
    'Cambodia_Tetanus3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Tetanus3'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Tetanus3, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_Tetanus3, Date Given"]
            };
        }
    },
    'Cambodia_Tetanus4' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Tetanus4'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Tetanus4, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_Tetanus4, Date Given"]
            };
        }
    },
    'Cambodia_Tetanus5' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Tetanus5'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Tetanus5, Date Given"]
            };
        }
        else {
            return {
                hide: ["Cambodia_Tetanus5, Date Given"]
            };
        }
    },
    'Cambodia_Genitourinary Female Symptoms' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Genitourinary Female Symptoms'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        };
        if (patientGender == 'M') {
            sections.hide.push("Cambodia_Genitourinary Female Symptoms");
            sections.hide.push("Cambodia_Genitourinary Female Exam Abnormalities");
        } else if (patientGender == 'F') {
            sections.hide.push("Cambodia_Genitourinary Male Symptoms");
            sections.hide.push("Cambodia_Genitourinary Male Exam Abnormalities");
        }
        return sections;
    }
};