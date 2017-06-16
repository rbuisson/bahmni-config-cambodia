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
    'Cambodia_Newborn Immunizations Set' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        }

        if (patientAge < 1) {
            return {
                show: ["Cambodia_Newborn Immunizations Set"],
            }
        } else if (patientAge >= 1 && patientAge < 16) {
            return {
                hide: ["Cambodia_Newborn Immunizations Set"]
            }
        } else if (patientAge >= 16 && patientGender == 'F') {
            return {
                hide: ["Cambodia_Newborn Immunizations Set"]
            }
        } else {
            return {
                hide: ["Cambodia_Newborn Immunizations Set"]
            }
        }
    },
    'Cambodia_Child Immunizations Set' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        }

        if (patientAge < 1) {
            return {
                hide: ["Cambodia_Child Immunizations Set"],
            }
        } else if (patientAge >= 1 && patientAge < 16) {
            return {
                show: ["Cambodia_Child Immunizations Set"]
            }
        } else if (patientAge >= 16 && patientGender == 'F') {
            return {
                hide: ["Cambodia_Child Immunizations Set"]
            }
        } else {
            return {
                hide: ["Cambodia_Child Immunizations Set"]
            }
        }
    },
    'Cambodia_Pregnant Women Immunizations Set' : function (formName, formFieldValues, patient) {
        var patientAge = patient['age'];
        var patientGender = patient['gender'];
        var sections = {
            "show": [],
            "hide": []
        }

        if (patientAge < 1) {
            return {
                hide: ["Cambodia_Pregnant Women Immunizations Set"],
            }
        } else if (patientAge >= 1 && patientAge < 16) {
            return {
                hide: ["Cambodia_Pregnant Women Immunizations Set"]
            }
        } else if (patientAge >= 16 && patientGender == 'F') {
            return {
                show: ["Cambodia_Pregnant Women Immunizations Set"]
            }
        } else {
            return {
                hide: ["Cambodia_Pregnant Women Immunizations Set"]
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
    'Cambodia_Has Allergies' : function (formName, formFieldValues) {
        var fieldValue = formFieldValues['Cambodia_Has Allergies'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Allergies"]
            }
        } else {
            return {
                hide: ["Cambodia_Allergies"]
            }
        }
    },
    'Cambodia_BCG' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_BCG'];
        if (fieldValue) {
            return {
                show: ["Cambodia_BCG, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_BCG, Date Given"]
            }
        }
    },
    'Cambodia_HepB at birth' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_HepB at birth'];
        if (fieldValue) {
            return {
                show: ["Cambodia_HepB at birth, time administrered after birth"]
            }
        }
        else {
            return {
                hide: ["Cambodia_HepB at birth, time administrered after birth"]
            }
        }
    },
    'Cambodia_MR***' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_MR***'];
        if (fieldValue) {
            return {
                show: ["Cambodia_MR***, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_MR***, Date Given"]
            }
        }
    },
    'Cambodia_Polio1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Polio1'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Polio1, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_Polio1, Date Given"]
            }
        }
    },
    'Cambodia_Polio2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Polio2'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Polio2, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_Polio2, Date Given"]
            }
        }
    },
    'Cambodia_Polio3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Polio3'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Polio3, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_Polio3, Date Given"]
            }
        }
    },
    'Cambodia_Polio3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Polio3'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Polio3, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_Polio3, Date Given"]
            }
        }
    },
    'Cambodia_DTP-Hep-Hip1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_DTP-Hep-Hip1'];
        if (fieldValue) {
            return {
                show: ["Cambodia_DTP-Hep-Hip1, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_DTP-Hep-Hip1, Date Given"]
            }
        }
    },'Cambodia_DTP-Hep-Hip2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_DTP-Hep-Hip2'];
        if (fieldValue) {
            return {
                show: ["Cambodia_DTP-Hep-Hip2, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_DTP-Hep-Hip2, Date Given"]
            }
        }
    },
    'Cambodia_DTP-Hep-Hip3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_DTP-Hep-Hip3'];
        if (fieldValue) {
            return {
                show: ["Cambodia_DTP-Hep-Hip3, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_DTP-Hep-Hip3, Date Given"]
            }
        }
    },
    'Cambodia_PCV1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_PCV1'];
        if (fieldValue) {
            return {
                show: ["Cambodia_PCV1, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_PCV1, Date Given"]
            }
        }
    },
    'Cambodia_PCV2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_PCV2'];
        if (fieldValue) {
            return {
                show: ["Cambodia_PCV2, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_PCV2, Date Given"]
            }
        }
    },
    'Cambodia_PCV3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_PCV3'];
        if (fieldValue) {
            return {
                show: ["Cambodia_PCV3, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_PCV3, Date Given"]
            }
        }
    },
    'Cambodia_MR1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_MR1'];
        if (fieldValue) {
            return {
                show: ["Cambodia_MR1, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_MR1, Date Given"]
            }
        }
    },
    'Cambodia_JE' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_JE'];
        if (fieldValue) {
            return {
                show: ["Cambodia_JE, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_JE, Date Given"]
            }
        }
    },
    'Cambodia_Tetanus1' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Tetanus1'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Tetanus1, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_Tetanus1, Date Given"]
            }
        }
    },
    'Cambodia_Tetanus2' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Tetanus2'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Tetanus2, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_Tetanus2, Date Given"]
            }
        }
    },
    'Cambodia_Tetanus3' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Tetanus3'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Tetanus3, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_Tetanus3, Date Given"]
            }
        }
    },
    'Cambodia_Tetanus4' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Tetanus4'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Tetanus4, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_Tetanus4, Date Given"]
            }
        }
    },
    'Cambodia_Tetanus5' : function (formName, formFieldValues, patient) {
        var fieldValue = formFieldValues['Cambodia_Tetanus5'];
        if (fieldValue) {
            return {
                show: ["Cambodia_Tetanus5, Date Given"]
            }
        }
        else {
            return {
                hide: ["Cambodia_Tetanus5, Date Given"]
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
                enable: ["Cambodia_Head Exam Details", "Cambodia_Head Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["Cambodia_Head Exam Details", "Cambodia_Head Exam Abnormalities"]
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
                enable: ["Cambodia_Ears Exam Details", "Cambodia_Ears Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["Cambodia_Ears Exam Details", "Cambodia_Ears Exam Abnormalities"]
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
                enable: ["Cambodia_Flank and Back Exam Details", "Cambodia_Flank and Back Exam Abnormalities"]
            }
        } else {
            return {
                disable: ["Cambodia_Flank and Back Exam Details", "Cambodia_Flank and Back Exam Abnormalities"]
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
        sections.enable.push("Cambodia_Musculoskeletal Exam Abnormalities")
        sections.enable.push("Cambodia_Muscle Strength Set")
        sections.enable.push("Cambodia_Deep Tendon Reflex Set")
        sections.enable.push("Cambodia_Musculoskeletal and Neurological Exam Details")
    } else {
        sections.disable.push("Cambodia_Musculoskeletal Exam Abnormalities")
        sections.disable.push("Cambodia_Muscle Strength Set")
        sections.disable.push("Cambodia_Deep Tendon Reflex Set")
        sections.disable.push("Cambodia_Musculoskeletal and Neurological Exam Details")
    }

    return sections
}
};