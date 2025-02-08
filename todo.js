const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container");


function addTask(){ // function is called in HTML 
    if (inputBox.value === ""){
        alert("Please enter a task");

    }else{
        // li is going to create a list element on the DOM 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // append the li to the list container ( add it to the DOM)
        let span = document.createElement("span"); // create a span element
        span.innerHTML = "\u00d7"; // add the text X to the span element
        li.appendChild(span); // append the span to the li
        
    }
    inputBox.value = "";// clear the input box after adding the task

    saveData(); // call the function to save the data to the local storage

}
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Check if the key pressed is "Enter"
        addTask(); // Call your existing function
    }
});



listContainer.addEventListener("click", function(e){ // event listener for the list container 
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }









},false) // defaults to false 

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask(); // call the function to show the task on the DOM 

