var universities = ['Auburn University', 'Bates College', 'Bowdoin College', 'Boston University', 'California Institute of Technology', 'Claremont McKenna College', 'Colby College', 'Connecticut College', 'Duke University', 'Harvey Mudd College', 'Illinois Institute of Technology', 'Massachusetts Institute of Technology', 'Northwestern University', 'Ohio State University', 'Pomona College', 'Samford University', 'Scripps College', 'Stanford University', 'Trinity College', 'Tufts University', 'University of Alabama', 'University of Alabama at Birmingham', 'University of Arizona', 'University of California, Berkeley', 'University of California, Los Angeles', 'University of California, San Diego', 'University of California, Santa Barbara', 'University of Chicago', 'University of Connecticut', 'University of Maine', 'University of Southern California', 'Vanderbilt University', 'Wesleyan University', 'Yale University'];

function makeSelect() {
    var locations = "";
    for (let i = 0; i < universities.length; i++) {
        locations += "<option value=" + i + ">" + universities[i] + "</option>";
    }
    document.getElementById("location").innerHTML += locations;
}

function submitForm() {
    alert("Thanks for applying " + document.getElementById("fname").value + "!\nWe'll get back to you shortly");
}

function validateForm() {
    // Validate phone number if given
    var phoneInput = document.getElementById("phone").value;
    var phoneLength = phoneInput.replace(/\D/g, '').length;
	if (phoneLength != 7 && phoneLength != 10 && phoneInput.length != 0) {
		alert("Improper Phone Number");
		return false;
	}
    // Validate email has @ symbol in it
    var email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".") || !(email.indexOf("@") < email.indexOf("."))) {
        alert("Improper Email");
		return false;
    }
    // Validate Proper Location to Work
    submitForm();
    return true;
}
