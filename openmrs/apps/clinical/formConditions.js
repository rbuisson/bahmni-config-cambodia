Bahmni.ConceptSet.FormConditions.rules = {
    'Diastolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'Systolic Data' : function (formName, formFieldValues) {
        var systolic = formFieldValues['Systolic'];
        var diastolic = formFieldValues['Diastolic'];
        if (systolic || diastolic) {
            return {
                enable: ["Posture"]
            }
        } else {
            return {
                disable: ["Posture"]
            }
        }
    },
    'CAMBODIA_Past Medical History' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Past Medical History'];

        var sections = {
            "show": [],
            "hide": []
        }

        if (!fieldValue || fieldValue.length == 0) {
            sections.hide.push("CAMBODIA_Past Medical History Details")
        } else {
            sections.show.push("CAMBODIA_Past Medical History Details")
        }

        if (fieldValue && fieldValue.indexOf('CAMBODIA_Cancer') > -1) {
            sections.show.push("CAMBODIA_Past Cancer details")
        } else {
            sections.hide.push("CAMBODIA_Past Cancer details");
        }

        return sections
    },
    'CAMBODIA_Immunizations Set': function (formName, formFieldValues, patient) {
        var patientGender = patient['gender'];
        var patientAge = patient['age'];
        var sections = {
            "show": [],
            "hide": []
        }

        if (patientGender == 'M' && patientAge > 18 ) {
            sections.hide.push("CAMBODIA_Immunizations Set")
        } else {
            sections.show.push("CAMBODIA_Immunizations Set")            
        }

        return sections
    },
    'CAMBODIA_Immunizations complete' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['CAMBODIA_Immunizations complete'];
        var patientAge = patient['age'];

        if (fieldValue == false && patientAge > 18) {
            return {
                show: ["CAMBODIA_List incomplete immunizations"]
            }
        } else if (fieldValue == false && !(patientAge > 18) ) {
            return {
                enable: ["CAMBODIA_Immunizations"] 
            }
        } else if (patientAge > 18) {
            return {
                hide: ["CAMBODIA_Immunizations", "CAMBODIA_List incomplete immunizations"]
            }
        } else {
            return {
                disable: ["CAMBODIA_Immunizations"],
                hide: ["CAMBODIA_List incomplete immunizations"]
            }
        }
    },
    'CAMBODIA_Medications' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Medications'];
        if (fieldValue) {
            return {
                show: ["CAMBODIA_List medications"]
            }
        } else {
            return {
                hide: ["CAMBODIA_List medications"]
            }
        }
    },
    'CAMBODIA_Allergies' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Allergies'];
        if (fieldValue) {
            return {
                show: ["CAMBODIA_List allergies"]
            }
        } else {
            return {
                hide: ["CAMBODIA_List allergies"]
            }
        }
    },
    'CAMBODIA_Genitourinary Findings Set' : function (formName, formFieldValues, patient) {
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        }

        if (patientGender == 'M') {
            sections.show.push("CAMBODIA_Genitourinary Male Findings")
            sections.hide.push("CAMBODIA_Genitourinary Female Findings")
        } else if (patientGender == 'F') {
            sections.hide.push("CAMBODIA_Genitourinary Male Findings")
            sections.show.push("CAMBODIA_Genitourinary Female Findings")
        } else {
            sections.show.push("CAMBODIA_Genitourinary Male Findings")
            sections.show.push("CAMBODIA_Genitourinary Female Findings")            
        }

        return sections
    },
    'CAMBODIA_Skin Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Skin Exam'];
        if (fieldValue == "CAMBODIA_Abnormal") {
            return {
                enable: ["CAMBODIA_Skin Exam Abnormalities", "CAMBODIA_Skin Exam Details"]
            }
        } else {
            return {
                disable: ["CAMBODIA_Skin Exam Abnormalities", "CAMBODIA_Skin Exam Details"]
            }
        }
    },
    'CAMBODIA_Head Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Head Exam'];
        if (fieldValue == "CAMBODIA_Abnormal") {
            return {
                enable: ["CAMBODIA_Head Exam Details"]
            }
        } else {
            return {
                disable: ["CAMBODIA_Head Exam Details"]
            }
        }
    },
    'CAMBODIA_Neck Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Neck Exam'];
        if (fieldValue == "CAMBODIA_Abnormal") {
            return {
                enable: ["CAMBODIA_Neck Exam Details", "CAMBODIA_Neck Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["CAMBODIA_Neck Exam Details", "CAMBODIA_Neck Exam Abnormalities"]
            }
        }
    },
    'CAMBODIA_Ears Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Ears Exam'];
        if (fieldValue == "CAMBODIA_Abnormal") {
            return {
                enable: ["CAMBODIA_Ears Exam Details"]
            }
        } else {
            return {
                disable: ["CAMBODIA_Ears Exam Details"]
            }
        }
    },
    'CAMBODIA_Eyes Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Eyes Exam'];
        if (fieldValue == "CAMBODIA_Abnormal") {
            return {
                enable: ["CAMBODIA_Eyes Exam Details", "CAMBODIA_Eyes Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["CAMBODIA_Eyes Exam Details", "CAMBODIA_Eyes Exam Abnormalities"]
            }
        }
    },
    'CAMBODIA_Chest and Lungs Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Chest and Lungs Exam'];
        if (fieldValue == "CAMBODIA_Abnormal") {
            return {
                enable: ["CAMBODIA_Chest and Lungs Exam Details", "CAMBODIA_Chest and Lungs Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["CAMBODIA_Chest and Lungs Exam Details", "CAMBODIA_Chest and Lungs Exam Abnormalities"]
            }
        }
    },
    'CAMBODIA_Cardiovascular Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Cardiovascular Exam'];
        if (fieldValue == "CAMBODIA_Abnormal") {
            return {
                enable: ["CAMBODIA_Cardiovascular Exam Details and Other", "CAMBODIA_Cardiovascular Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["CAMBODIA_Cardiovascular Exam Details and Other", "CAMBODIA_Cardiovascular Exam Abnormalities"]
            }
        }
    },
    'CAMBODIA_Cardiovascular Exam Abnormalities' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Cardiovascular Exam Abnormalities'];

        var sections = {
            "show": [],
            "hide": []
        }

        if (fieldValue && fieldValue.indexOf('CAMBODIA_Pulses') > -1) {
            sections.show.push("CAMBODIA_Pulses Intensity")
        } else {
            sections.hide.push("CAMBODIA_Pulses Intensity")
        }

        if (fieldValue && fieldValue.indexOf('CAMBODIA_Edema') > -1) {
            sections.show.push("CAMBODIA_Edema Severity")
        } else {
            sections.hide.push("CAMBODIA_Edema Severity");
        }

        return sections
    },
    'CAMBODIA_Abdomen Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Abdomen Exam'];
        if (fieldValue == "CAMBODIA_Abnormal") {
            return {
                enable: ["CAMBODIA_Abdomen Exam Details", "CAMBODIA_Abdomen Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["CAMBODIA_Abdomen Exam Details", "CAMBODIA_Abdomen Exam Abnormalities"]
            }
        }
    },
    'CAMBODIA_Flank and Back Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Flank and Back Exam'];
        if (fieldValue == "CAMBODIA_Abnormal") {
            return {
                enable: ["CAMBODIA_Flank and Back Exam Details"]
            }
        } else {
            return {
                disable: ["CAMBODIA_Flank and Back Exam Details"]
            }
        }
    },
    'CAMBODIA_Genitourinary Exam' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['CAMBODIA_Genitourinary Exam'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": [],
            "enable": [],
            "disable": []
        }

        if (fieldValue == "CAMBODIA_Abnormal") {
            sections.enable.push("CAMBODIA_Genitourinary Exam Details")
            sections.enable.push("CAMBODIA_Genitourinary Male Exam Abnormalities")
            sections.enable.push("CAMBODIA_Genitourinary Female Exam Abnormalities")
            if (patientGender == 'M') sections.hide.push("CAMBODIA_Genitourinary Female Exam Abnormalities")
        } else {
            sections.disable.push("CAMBODIA_Genitourinary Exam Details")
            sections.disable.push("CAMBODIA_Genitourinary Male Exam Abnormalities")
            sections.disable.push("CAMBODIA_Genitourinary Female Exam Abnormalities")
            if (patientGender == 'M') sections.hide.push("CAMBODIA_Genitourinary Female Exam Abnormalities")

        }

    return sections
    },
    'CAMBODIA_Musculoskeletal and Neurological Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['CAMBODIA_Musculoskeletal and Neurological Exam'];

        var sections = {
            "enable": [],
            "disable": []
        }

        if (fieldValue && fieldValue.indexOf('CAMBODIA_Abnormal') > -1) {
            sections.enable.push("CAMBODIA_Muscle Strength Set")
            sections.enable.push("CAMBODIA_Deep Tendon Reflex Set")
            sections.enable.push("CAMBODIA_Musculoskeletal and Neurological Exam Details")
        } else {
            sections.disable.push("CAMBODIA_Muscle Strength Set")
            sections.disable.push("CAMBODIA_Deep Tendon Reflex Set")
            sections.disable.push("CAMBODIA_Musculoskeletal and Neurological Exam Details")
        }

        return sections
    }
};