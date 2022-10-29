(() => {

    const oneStepInputsObject = {
        firstName: false,
        lastName: false,
        email: false,
    };

    const oneStepInputValues = {};

    const stepOneInputs = document.querySelectorAll('#step1-form .form-input-box');

    activateNextButton('step-1-form-next-button', false)

    stepOneInputs.forEach((input) => {
        const errorMessage = input.querySelector('.form-error-message');
        input.addEventListener('keyup', onValidate(errorMessage));
    });

    function onValidate(errorMessage) {
        return (event) => {
            const { value, name, type } = event.target;
            const isValid = validate(value, type)
            if (!isValid) errorMessage.classList.add('show-message')
            else errorMessage.classList.remove('show-message')
            oneStepInputsObject[name] = isValid;
            oneStepInputValues[name] = value;
            const validationCompleted = isAllValid(oneStepInputsObject);
            activateNextButton('step-1-form-next-button', validationCompleted)
        }
    }

    document.getElementById('step-1-form-next-button').addEventListener('click', () => {
        changeStepCircle('step2')
        allData = { ...allData, ...oneStepInputValues }
    })

})()