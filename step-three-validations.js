(() => {

    const stepInputs = document.querySelectorAll('#step3-form input');
    const stepSelects = document.querySelectorAll('#step3-form option');

    activateNextButton('step-3-form-next-button', true)
    document.getElementById('step-2-form-next-button').addEventListener('click', () => {
        stepInputs.forEach((input) => {
            input.value = allData[input.name];
        });

        stepSelects.forEach((option) => {
            const current = allData['category'];
            if (option.value == current) option.setAttribute('selected', 'true');
        });

    })

    document.getElementById('step-3-form-back-button').addEventListener('click', () => changeStepCircle('step2'))
    document.getElementById('step-3-form-next-button').addEventListener('click', () => changeStepCircle('step4'))

})()