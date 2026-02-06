function validateForm(event) {
    event.preventDefault();
    const firstName = 
    document.getElementById('first-name').value;
    const lastName = 
    document.getElementById('last-name').value;
    const email = 
    document.getElementById('email').value;
    const message = 
    document.getElementById('message').value;
    if (firstName === "" || lastName === "" || email === "" || message === "") {
        alert("Tout les champs doivent être remplis !");
    } else {
        alert("Formulaire envoyé !" + firstName + "!");
    }
}
document.getElementById("contact-form").addEventListener("submit", validateForm);
const projectImages = 
document.getElementById('.project-image');
ptojectImages.forEach(img => {
    img.addEventListener('mouseover', 
        function() {
            img.style.transform = "scale(1.1";
            img.style.transition = "transform 0.3S ease";
        });
        img.addEventListener('mouseout', 
            function() {
                img.style.transform = "scale(1)";
            });

});
function
animateProgressBar(progressId, endValue, duration) {
    const progressBar = 
    document.getElementById(progressId);
    let currentValue = 0
    progressBar.value;
    const step = (endValue - currentValue) / (duration / 100);
    const interval = setInterval(() => {
        if (currentValue >= endValue) {
            clearInterval(interval);
        } else {
            currentValue += step;
            progressBar.value = 
            currentValue;
        }
    }, 100);
}
window.onload = function() {
    animateProgressBar("progress1", 80, 3000);
    animateProgressBar("progress2", 60, 4000);
    animateProgressBar("progress3", 70, 5000);
    animateProgressBar("progress4", 50, 3000);
    animateProgressBar("progress5", 90, 4000);
    animateProgressBar("progress6", 75, 5000);
};
document.querySelector('a[href="#projets"]'). addEventListener('click' ,
    function(e) {
        e.preventDefault();
        document.querySelector('#projets').scrollIntoView({
            behavior: 'smooth'
        });
    }
);
const form = document.getElementById('contactForm');
form.addEventListener('submit',
    function(event) {
        event.preventDefault();
        alert("Message envoyé!");
        form.reset();
    }
);