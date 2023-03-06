function setupPage() {
    document.getElementById("application").onsubmit = function() { submitForm() };
}

function submitForm() {
    alert("Thanks for applying " + document.getElementById("fname").value + "!\nWe'll get back to you shortly");
}
