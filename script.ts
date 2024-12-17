
//listing element

document.getElementById("resumeform")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Type assertion
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement;
    const fullnameElement = document.getElementById("name") as HTMLInputElement;
    const EmailidElement = document.getElementById("email") as HTMLInputElement;
    const mobilenumberElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;


    
    if (profilePictureInput && fullnameElement  && EmailidElement && mobilenumberElement && educationElement && experienceElement && skillsElement) {
        const fullname = fullnameElement.value;
        const EmailId = EmailidElement.value;
        const mobilenumber = mobilenumberElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Picture element
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";


//creat resum autput
const resumeOutput = `
<h2>Resume</h2>
${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture"> `: ""}
<p><strong>full name:</strong> <span id"eidit-full name"class="eidtable">${fullname} </span></p>
<p><strong>Email Id:</strong> <span id"eidit-Email Id"class="eidtable"> ${EmailId} </span></p>
<p><strong>Mobile number:</strong> <span id"eidit-Mobile number"class="eidtable"> ${mobilenumber} </span></p>

<h3>Education</h3>
<p>${education}</p>


<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;
const resumeOutputElement = document.getElementById(`resumeOutput`)

if(resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput;
    makeEditable();  
} 
  
} else {
    console.error(`one or more output element are missing`);
    
}

}); 

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function() {
            const currentElement = element as HTMLElement; 
            const currentValue = currentElement.textContent ||"";

            if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN'){
                const input = document.createElement('input');
                input.type = 'text';
                input.value = currentValue;
                input.classList.add('editing-input');

                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline';
                    input.remove();
                });

                currentElement.style.display = 'none';
                currentElement.parentNode?.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}