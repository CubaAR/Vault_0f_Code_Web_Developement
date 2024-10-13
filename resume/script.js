function updatePreview() {
    document.getElementById('preview-name').textContent = "Name: " + document.getElementById('name').value;
    document.getElementById('preview-email').textContent = "Email: " + document.getElementById('email').value;
    document.getElementById('preview-profile').textContent = "Profile: " + document.getElementById('profile').value;
}
