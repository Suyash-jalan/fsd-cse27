// 1. Select the elements
const textarea = document.getElementById('userInput');
const button = document.getElementById('addBtn');
const container = document.getElementById('result-container');

// 2. Add the click event listener
button.addEventListener('click', function() {
  const text = textarea.value.trim(); // Get text and remove extra spaces

  if (text !== "") {
    
    const newDiv = document.createElement('div');
    
    newDiv.textContent = text;
    newDiv.className = 'stored-text'; // class name of created div
    
    //button for delete the created div
    const newButton = document.createElement("button");
    newButton.textContent = 'delete';
    newButton.className = 'delete-button';
    const handleClick = () => {
      console.log("button is clicked inside div");
      newDiv.remove();
    }

    newButton.addEventListener("click",handleClick);
    
    //button for complete task
    const newBtn = document.createElement("button");
    newBtn.textContent = 'Done';
    newBtn.className = 'Done-button';
    const handleClick1 = () => {
      console.log("task is completed");
      
    }
    newBtn.addEventListener("click",handleClick1);


    // adding element in created div6
    newDiv.append(newButton,newBtn);
  
    //Append the new div to the container
    container.appendChild(newDiv);
    
    
    
    textarea.value = ""; // Clear the textarea after adding
  } else {
    alert("Please enter some text first!");
  }
});
