const textRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const numberRegex = /^.{4,12}$/;
const passwordRegex = /^\d{7,14}$/;

let allData = {}

const steps = ['step1', 'step2', 'step3', 'step4']
let activeStep = 'step1'

const forms = document.querySelectorAll('.step-form');

forms.forEach((form) => {
    form.addEventListener('submit', (e) => e.preventDefault());
});

function changeStepCircle(newStep) {
    activeStep = newStep;
    steps.forEach((step) => {
        const stepsIndicator = document.getElementById('steps-indicators')
        stepsIndicator.classList.remove('hide')
        const stepCircle = document.getElementById(step + '-circle')
        const form = document.getElementById(step + '-form')
        if (activeStep == step) {
            stepCircle && stepCircle.classList.add('active')
            form.classList.remove('hide')
        } else {
            stepCircle && stepCircle.classList.remove('active')
            form.classList.add('hide')
        }
        if (activeStep == 'step4') stepsIndicator.classList.add('hide')

    })
}

function validate(value, type) {
    switch (type) {
        case 'text': return textRegex.test(value);
        case 'email': return emailRegex.test(value);
        case 'number': return numberRegex.test(value);
        case 'password': return passwordRegex.test(value);
        default: return false;
    }
}

function activateNextButton(id, value) {
    const btn = document.getElementById(id);
    if (value) {
        btn.removeAttribute('disabled');
        btn.classList.remove('disabled')
    } else {
        btn.setAttribute('disabled', true);
        btn.classList.add('disabled')
    }
}

function isAllValid(data) {
    return Object.values(data).every((item) => item)
}

changeStepCircle(activeStep)


