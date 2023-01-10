var form1 = document.getElementById("form_body");
var form2 = document.getElementById("form_body2");
var form3 = document.getElementById("form_body3");
var form4 = document.getElementById("form_body4");
var form5 = document.getElementById("form_body5");

function one_to_two() {
    if (validate_one()) {
        form1.className = "hide";
        form2.style.animation = "transitionIn 1s";
        form2.className = "show";
    } else {
        callValidateSwal();
    }

}

function validate_one() {
    lastname = document.getElementById("surname");
    othernames = document.getElementById("othername")
    genderM = document.getElementById("radio1");
    genderF = document.getElementById("radio2");
    day = document.getElementById("bday");
    bmonth = document.getElementById("bmonth");
    byear = document.getElementById("byear");
    contact = document.getElementById("phone");
    residence = document.getElementById("residence");
    in_dob = day.value + "/" + bmonth.value + "/" + byear.value;
    default_dob = "1/January/1950";

    if (lastname.value == "" || othernames.value == "" || (!genderM.checked && !genderF.checked) || in_dob ==
        default_dob || contact.value == "" || residence.value == "") {

        return false;

    } else {
        return true;
    }
}

function two_to_one() {
    form2.className = "hide";
    form1.style.animation = "transitionIn 1s";
    form1.className = "show";
}

function validate_two() {
    var hometown = document.getElementById("hometown");
    var homeregion = document.getElementById("homeregion");
    var martialS = document.getElementById("mradio1");
    var maritalM = document.getElementById("mradio2");
    var spouse = document.getElementById("spousename"); //not compulsory
    var edulevel = document.getElementById("myselection");
    var otheredu = document.getElementById("oeducation"); // not compulsory
    var profession = document.getElementById("profession");

    var eduselect = edulevel.options[edulevel.selectedIndex].value;
    var regionselect = homeregion.options[homeregion.selectedIndex].value;
    if (hometown.value == "" || regionselect == "" || (!martialS.checked && !maritalM.checked) || (maritalM.checked &&
            spouse.value == "") || eduselect == "1" || (eduselect == "" && otheredu.value == "" || profession.value == "")) {
        return false;
    } else {
        return true;
    }
}

function two_to_three() {
    if (validate_two()) {
        form2.className = "hide";
        form3.style.animation = "transitionIn 1s";
        form3.className = "show";
    } else {
        callValidateSwal();
    }
}

function validate_three() {
    var fathername = document.getElementById("fathername");
    var father_stats = document.getElementById("guard_status");
    var fatherselect = father_stats.options[father_stats.selectedIndex].value;
    var fathercontact = document.getElementById("fatherphone");
    var mothername = document.getElementById("mothername");
    var mother_stats = document.getElementById("guard_mum");
    var motherselect = mother_stats.options[mother_stats.selectedIndex].value;
    var mothercontact = document.getElementById("motherphone");

    if (fathername.value == "" || (fatherselect == "" && fathercontact.value == "") || (motherselect == "" &&
            mothercontact.value == "")) {
        return false;
    } else {
        return true;
    }

}

function three_to_two() {
    form3.className = "hide";
    form2.style.animation = "transitionIn 1s";
    form2.className = "show";
}

function three_to_four() {
    if (validate_three()) {
        form3.className = "hide";
        form4.style.animation = "transitionIn 1s";
        form4.className = "show";
    } else {
        callValidateSwal();
    }

}

function four_to_three() {
    form4.className = "hide";
    form3.style.animation = "transitionIn 1s";
    form3.className = "show";
}

function validate_four() {
    var baptism_place = document.getElementById("bap_place");
    var baptism = document.getElementById("baptismselection");
    var baptismselect = baptism.options[baptism.selectedIndex].value;
    var otherbaptism = document.getElementById("otherbaptism");
    var role = document.getElementById("roleselection");
    var roleselect = role.options[role.selectedIndex].value;
    var otherole = document.getElementById("otherole");

    if (baptism_place.value == "" || baptismselect == "1" || (baptismselect == "" && otherbaptism.value == "") ||
        roleselect == "null" || (roleselect == "" && otherole.value == "")) {
        return false;
    } else {
        return true;
    }

}

function four_to_five() {
    if (validate_four()) {
        form4.className = "hide";
        form5.style.animation = "transitionIn 1s";
        form5.className = "show";
    } else {
        callValidateSwal();
    }

}

function five_to_four() {
    form5.className = "hide";
    form4.style.animation = "transitionIn 1s";
    form4.className = "show";
}

function showSpouse() {
    document.getElementById("spouse-name").style.display = 'block';
}

function hideSpouse() {
    document.getElementById("spouse-name").style.display = 'none';
}

$(document).ready(function() {
    $('#myselection').on('change', function() {
        var demovalue = $(this).val();
        $("#other").hide();

        $("#other" + demovalue).show();
    });

    $('#guard_status').on('change', function() {
        var demovalue = $(this).val();
        $("#father_contact").hide();

        $("#father_contact" + demovalue).show();
        document.getElementById("father_contact").style.animation = "transitionIn 1s";
    });

    $('#guard_mum').on('change', function() {
        var demovalue = $(this).val();

        $("#mother_contact").hide();


        $("#mother_contact" + demovalue).show();
        document.getElementById("mother_contact").style.animation = "transitionIn 1s";

    });

    $('#baptismselection').on('change', function() {
        var demovalue = $(this).val();
        $("#otherBaptism").hide();

        $("#otherBaptism" + demovalue).show();
        document.getElementById("otherBaptism").style.animation = "transitionIn 1s";
    });

    $('#roleselection').on('change', function() {
        var demovalue = $(this).val();
        $("#other_role").hide();

        $("#other_role" + demovalue).show();
        document.getElementById("other_role").style.animation = "transitionIn 1s";
    });

});

// script for picture
const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text");

inpFile.addEventListener("change", function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        previewDefaultText.style.display = "none";
        previewImage.style.display = "block";


        reader.addEventListener("load", function() {
            previewImage.setAttribute("src", this.result);
        });


        reader.readAsDataURL(file);
    } else {
        previewDefaultText.style.display = null;
        previewImage.style.display = null;

        previewImage.setAttribute("src", "");
    }
});

function callValidateSwal() {
    Swal.fire({
        title: 'Validation Error',
        text: "Compulsory fields cannot be empty",
        icon: 'error',
        cancelButtonColor: '#d33',
    });
}

//swal for confirm details
function callswal() {
    var form = $(this).parents('form');
    Swal.fire({
        title: 'Are you sure?',
        text: "Submiting means you agree that your details are correct, and you will be responsible for inaccurate data provided",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, submit!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'New Member Registered Successfully!',
                'You can append a backend script to save data in database',
                'success'
            );
            
            
        }
    });
}