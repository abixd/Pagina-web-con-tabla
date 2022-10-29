(() => {

    const twoStepInputsObject = {
        password: false,
        confirmPassword: false,
        category: true,
        terms: false,
    };

    const twoStepInputValues = {
        password: null,
        confirmPassword: null,
        category: 'individual'
    };

    const stepInputs = document.querySelectorAll('#step2-form .form-input-box');
    const stepChecks = document.querySelectorAll('#step2-form .form-input-check');
    const stepSelects = document.querySelectorAll('#step2-form select');

    activateNextButton('step-2-form-next-button', false)

    stepInputs.forEach((input) => {
        const errorMessage = input.querySelector('.form-error-message');
        input.addEventListener('keyup', onValidate(errorMessage));
    });

    stepChecks.forEach((input) => {
        input.addEventListener('change', onValidateChecks);
    });

    stepSelects.forEach((input) => {
        input.addEventListener('change', (event) => {
            const { value, name } = event.target;
            twoStepInputValues[name] = value;
        });
    });


    function onValidate(errorMessage) {
        return (event) => {
            const { value, name, type } = event.target;
            let isValid = validate(value, type)
            if (name == 'confirmPassword') {
                if (twoStepInputValues['password'] == value) isValid = true;
                else isValid = false;
            }
            if (!isValid) errorMessage.classList.add('show-message')
            else errorMessage.classList.remove('show-message')
            twoStepInputsObject[name] = isValid;
            twoStepInputValues[name] = value;
            const validationCompleted = isAllValid(twoStepInputsObject);
            activateNextButton('step-2-form-next-button', validationCompleted)
        }
    }

    function onValidateChecks(event) {
        const { name, checked } = event.target;
        if (name == 'spam') return
        twoStepInputsObject[name] = checked;
        twoStepInputValues[name] = checked;
        const validationCompleted = isAllValid(twoStepInputsObject);
        activateNextButton('step-2-form-next-button', validationCompleted)
    }

    document.getElementById('step-2-form-back-button').addEventListener('click', () => {
        changeStepCircle('step1')
    })

    document.getElementById('step-2-form-next-button').addEventListener('click', () => {
        changeStepCircle('step3')
        allData = { ...allData, ...twoStepInputValues }
    })

})()