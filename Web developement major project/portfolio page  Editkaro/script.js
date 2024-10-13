document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;

    fetch('AKfycbyooYKJbE3jxTKimrxOyYDIn4Q2hMzz1dytPFik1nw', {
        method: 'POST',
        body: JSON.stringify({ email: email })
    })
    .then(response => response.text())
    .then(data => {
        alert('Thank you for subscribing!');
        document.getElementById('email').value = ''; // Clear input
    });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    fetch('AKfycbyooYKJbE3jxTKimrxOyYDIn4Q2hMzz1dytPFik1nw', {
        method: 'POST',
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert('Thank you for getting in touch!');
        document.getElementById('contact-form').reset(); // Clear form
    });
});

