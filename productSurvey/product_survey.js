function submitFeedback(){
    
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('experience').value;
/*   
    if (!username || !age || !email || !job || !designation || !productType || !feedback || !experience) {
        alert('Please fill out all fields');
        return;  // Exit the function early
    }
        */
 

        alert('Thank you for your valuable feedback')  



    
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userProductChoice2').innerHTML = productType; 
    /* If there are multiple elements with the same ID, it can lead to unexpected results because getElementById will only return the first one it finds, and other JavaScript functions that rely on that ID might not work correctly.  
    Multiple elements can be assigned the same value tho but to different ID, because is supposed to be one unique id per page    */
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperience').innerHTML = experience;
    document.getElementById('userInfo').style.display = "block";
}

const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;
//if the user presses the 'Enter' key, the feedback form should submit,
// similar to clicking the submit button:
document.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){

        submitFeedback();
    }
});
