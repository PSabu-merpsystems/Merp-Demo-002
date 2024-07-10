
// Campaign


let inputValue;
// let myprompt = "Experience the Future with Omantel's 5G Network: Faster, Smarter, Stronger!"
let aiHeadline = document.getElementById('ai-headline');
let aiText = document.getElementById('aiText');


let aiIcon = document.getElementById('aiImage');
function showValue() {
    // Get the value from the text input
    inputValue = document.getElementById('campaign-goals').value;

    // Display the value in the console
    console.log("Input value:", inputValue);

    aiHeadline.style.display = 'inline';
    aiText.style.display = 'inline';
    aiIcon.style.display = 'block';

}


// popup.......

let popup = document.getElementById('myPopUp');
let popups = document.getElementsByClassName('popUp');


// popUp show

function popUpShow(){
    for (let i = 0; i < popups.length; i++) {
        popups[i].style.display = "block";
    }

}




// popUp hide
function popupSubmit() {
    for (let i = 0; i < popups.length; i++) {
        popups[i].style.display = "none";
    }
}






