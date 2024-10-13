document.getElementById('show-ingredients').addEventListener('click', function() {
    document.getElementById('ingredients-list').classList.toggle('hidden');
});

const steps = document.querySelectorAll('#steps p');
let currentStep = 0;

document.getElementById('start-cooking').addEventListener('click', function() {
    if (currentStep < steps.length) {
        steps[currentStep].classList.add('active-step');
        currentStep++;
    }
});
