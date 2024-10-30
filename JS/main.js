// Enable radio button and Disable radio button

// Radio Button - Variable
const medicYes = document.getElementById("medic-yes");
const medicNo = document.getElementById("medic-no"); 
const descrMedic = document.getElementById("d_medic");

function handleRadioChange() {
    descrMedic.disabled = !medicYes.checked;
}

medicYes.addEventListener("change", handleRadioChange);
medicNo.addEventListener("change", handleRadioChange);

// Edit - Variable
const namePatient = document.getElementById('name_patient');
const agePatient = document.getElementById('age_patient');
const dtOfBirth = document.getElementById('dt_birth_patient');
const weighPatient = document.getElementById('weigh_patient');
const heightPatient = document.getElementById('height_patient');
const imcPatient = document.getElementById('imc');
const btnEdit = document.getElementById('edit');

// Functions for enabling/disabling fields
function enableField(field) {
    field.disabled = false;
    field.style.border = "2px solid blue";
}

// Enable fields on edit button click
btnEdit.addEventListener('click', () => {
    enableField(namePatient);
    enableField(agePatient);
    enableField(dtOfBirth);
    enableField(weighPatient);
    enableField(heightPatient);
});
