var countInterval;


function startCounter(){
    var number = parseInt(document.getElementById("number").value);

     if(isNaN(number)){
         alert("please enter valid number");
         // This is important for the condition when a counter is running and you entered a wrong input for a new counter
         clearInterval(countInterval);
         return;
     }
     if(number < 1||number > 9){
       alert("Input number out of range!!")
       clearInterval(countInterval);
         return;
     }
     
     var currentNo = document.querySelector(".counter .current");
     var nextNo = document.querySelector(".counter .next");
     var count = 0;

      // If user clicks on 'Start Counter' button again - remove this function and below 2 lines if you don't consider this situation
    resetNumbers(currentNo, nextNo);

    // Clears the previous interval that was running
    clearInterval(countInterval);

    countInterval=setInterval(function(){
        if(count===number){
           countInterval(countInterval);
           alert("Counter reached the bdestination number!!");
            return;
        }
        increaseCount(currentNo, nextNo);
        count++;
    },1000);

    }

    
function resetNumbers(currentNo, nextNo) {
    currentNo.innerText = 0;
    nextNo.innerText = 1;
}

function increaseCount(currentNo, nextNo) {
    nextNo.classList.add("animate");

    setTimeout(function () {
        currentNo.innerText = nextNo.innerText;
        nextNo.classList.remove("animate");
        nextNo.innerText = parseInt(nextNo.innerText) + 1;
    }, 500);

}


