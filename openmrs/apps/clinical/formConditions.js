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
    'Cambodia_Past Medical History' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Past Medical History'];

        var sections = {
            "show": [],
            "hide": []
        }

        if (!fieldValue || fieldValue.length == 0) {
            sections.hide.push("Cambodia_Past Medical History Details")
        } else {
            sections.show.push("Cambodia_Past Medical History Details")
        }

        if (fieldValue && fieldValue.indexOf('Cambodia_Cancer') > -1) {
            sections.show.push("Cambodia_Past Cancer Details")
        } else {
            sections.hide.push("Cambodia_Past Cancer Details");
        }

        return sections
    },
    'Cambodia_Medications' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Medications'];
        if (fieldValue) {
            return {
                show: ["Cambodia_List Medications"]
            }
        } else {
            return {
                hide: ["Cambodia_List Medications"]
            }
        }
    },
    'Cambodia_Allergies' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Allergies'];
        if (fieldValue) {
            return {
                show: ["Cambodia_List Allergies"]
            }
        } else {
            return {
                hide: ["Cambodia_List Allergies"]
            }
        }
    },
    'Cambodia_Genitourinary Findings Set' : function (formName, formFieldValues, patient) {
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        }

        if (patientGender == 'M') {
            sections.show.push("Cambodia_Genitourinary Male Findings")
            sections.hide.push("Cambodia_Genitourinary Female Findings")
        } else if (patientGender == 'F') {
            sections.hide.push("Cambodia_Genitourinary Male Findings")
            sections.show.push("Cambodia_Genitourinary Female Findings")
        } else {
            sections.show.push("Cambodia_Genitourinary Male Findings")
            sections.show.push("Cambodia_Genitourinary Female Findings")            
        }

        return sections
    },
    'Cambodia_Skin Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Skin Exam'];
        if (fieldValue == "Cambodia_Abnormal") {
            return {
                enable: ["Cambodia_Skin Exam Abnormalities", "Cambodia_Skin Exam Details"]
            }
        } else {
            return {
                disable: ["Cambodia_Skin Exam Abnormalities", "Cambodia_Skin Exam Details"]
            }
        }
    },
    'Cambodia_Head Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Head Exam'];
        if (fieldValue == "Cambodia_Abnormal") {
            return {
                enable: ["Cambodia_Head Exam Details"]
            }
        } else {
            return {
                disable: ["Cambodia_Head Exam Details"]
            }
        }
    },
    'Cambodia_Neck Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Neck Exam'];
        if (fieldValue == "Cambodia_Abnormal") {
            return {
                enable: ["Cambodia_Neck Exam Details", "Cambodia_Neck Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["Cambodia_Neck Exam Details", "Cambodia_Neck Exam Abnormalities"]
            }
        }
    },
    'Cambodia_Ears Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Ears Exam'];
        if (fieldValue == "Cambodia_Abnormal") {
            return {
                enable: ["Cambodia_Ears Exam Details"]
            }
        } else {
            return {
                disable: ["Cambodia_Ears Exam Details"]
            }
        }
    },
    'Cambodia_Eyes Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Eyes Exam'];
        if (fieldValue == "Cambodia_Abnormal") {
            return {
                enable: ["Cambodia_Eyes Exam Details", "Cambodia_Eyes Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["Cambodia_Eyes Exam Details", "Cambodia_Eyes Exam Abnormalities"]
            }
        }
    },
    'Cambodia_Chest and Lungs Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Chest and Lungs Exam'];
        if (fieldValue == "Cambodia_Abnormal") {
            return {
                enable: ["Cambodia_Chest and Lungs Exam Details", "Cambodia_Chest and Lungs Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["Cambodia_Chest and Lungs Exam Details", "Cambodia_Chest and Lungs Exam Abnormalities"]
            }
        }
    },
    'Cambodia_Cardiovascular Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Cardiovascular Exam'];
        if (fieldValue == "Cambodia_Abnormal") {
            return {
                enable: ["Cambodia_Cardiovascular Exam Details and Other", "Cambodia_Cardiovascular Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["Cambodia_Cardiovascular Exam Details and Other", "Cambodia_Cardiovascular Exam Abnormalities"]
            }
        }
    },
    'Cambodia_Cardiovascular Exam Abnormalities' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Cardiovascular Exam Abnormalities'];

        var sections = {
            "show": [],
            "hide": []
        }

        if (fieldValue && fieldValue.indexOf('Cambodia_Pulses') > -1) {
            sections.show.push("Cambodia_Pulses Intensity")
        } else {
            sections.hide.push("Cambodia_Pulses Intensity")
        }

        if (fieldValue && fieldValue.indexOf('Cambodia_Edema') > -1) {
            sections.show.push("Cambodia_Edema Severity")
        } else {
            sections.hide.push("Cambodia_Edema Severity");
        }

        return sections
    },
    'Cambodia_Abdomen Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Abdomen Exam'];
        if (fieldValue == "Cambodia_Abnormal") {
            return {
                enable: ["Cambodia_Abdomen Exam Details", "Cambodia_Abdomen Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["Cambodia_Abdomen Exam Details", "Cambodia_Abdomen Exam Abnormalities"]
            }
        }
    },
    'Cambodia_Flank and Back Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Flank and Back Exam'];
        if (fieldValue == "Cambodia_Abnormal") {
            return {
                enable: ["Cambodia_Flank and Back Exam Details"]
            }
        } else {
            return {
                disable: ["Cambodia_Flank and Back Exam Details"]
            }
        }
    },
    'Cambodia_Genitourinary Exam' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Genitourinary Exam'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": [],
            "enable": [],
            "disable": []
        }

        if (fieldValue == "Cambodia_Abnormal") {
            sections.enable.push("Cambodia_Genitourinary Exam Details")
            sections.enable.push("Cambodia_Genitourinary Male Exam Abnormalities")
            sections.enable.push("Cambodia_Genitourinary Female Exam Abnormalities")
            if (patientGender == 'M') sections.hide.push("Cambodia_Genitourinary Female Exam Abnormalities")
        } else {
            sections.disable.push("Cambodia_Genitourinary Exam Details")
            sections.disable.push("Cambodia_Genitourinary Male Exam Abnormalities")
            sections.disable.push("Cambodia_Genitourinary Female Exam Abnormalities")
            if (patientGender == 'M') sections.hide.push("Cambodia_Genitourinary Female Exam Abnormalities")

        }

    return sections
    },
    'Cambodia_Musculoskeletal and Neurological Exam' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Musculoskeletal and Neurological Exam'];

        var sections = {
            "enable": [],
            "disable": []
        }

        if (fieldValue && fieldValue.indexOf('Cambodia_Abnormal') > -1) {
            sections.enable.push("Cambodia_Muscle Strength Set")
            sections.enable.push("Cambodia_Deep Tendon Reflex Set")
            sections.enable.push("Cambodia_Musculoskeletal and Neurological Exam Details")
        } else {
            sections.disable.push("Cambodia_Muscle Strength Set")
            sections.disable.push("Cambodia_Deep Tendon Reflex Set")
            sections.disable.push("Cambodia_Musculoskeletal and Neurological Exam Details")
        }

        return sections
    }
};