let count = 0;

function increaseCount(){
     count++;
    displayCount();
    checkCountValue();
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count; //display the curremt count
} //.value is mostly used to set and change the content of form elements like <input>, <select>, and <textarea>
/*
innerHTML is used to get or set the HTML content inside an element. 
It can be used with any HTML element, and it allows you to include HTML tags in the content.
*/

function checkCountValue(){
    if (count === 10){
    alert("Your Instagram post gained 10 followers! Congratulations!");
    }
    else if (count === 20){
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }

}

function resetCount(){
   count = 0;
   displayCount(); //assign count with 0 and call the displayCount function to update the 
   //the value of count with 0
   alert("Followers count has been reset!");
}