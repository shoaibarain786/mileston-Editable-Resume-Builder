//listing element
var _a;
(_a = document.getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Type assertion
    var profilePictureInput = document.getElementById("profilePicture");
    var fullnameElement = document.getElementById("name");
    var EmailidElement = document.getElementById("email");
    var mobilenumberElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput && fullnameElement && EmailidElement && mobilenumberElement && educationElement && experienceElement && skillsElement) {
        var fullname = fullnameElement.value;
        var EmailId = EmailidElement.value;
        var mobilenumber = mobilenumberElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Picture element
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        //creat resum autput
        var resumeOutput = "\n<h2>Resume</h2>\n".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\"> ") : "", "\n<p><strong>full name:</strong> <span id\"eidit-full name\"class=\"eidtable\">").concat(fullname, " </span></p>\n<p><strong>Email Id:</strong> <span id\"eidit-Email Id\"class=\"eidtable\"> ").concat(EmailId, " </span></p>\n<p><strong>Mobile number:</strong> <span id\"eidit-Mobile number\"class=\"eidtable\"> ").concat(mobilenumber, " </span></p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("one or more output element are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
