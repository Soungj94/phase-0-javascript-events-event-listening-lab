// function addingEventListener() {
//   const button = document.getElementById("button");
//   button.addEventListener("click", function (event) {
//     alert("I was clicked!");
//   });
// }

// document.addEventListener("DOMContentLoaded", addingEventListener);

function addingEventListener() {
  const button = document
    .getElementById("button")
    .addEventListener("click", () => alert("I was clicked!"));
}
addingEventListener();

//Yes, if you include the corrected version of index.js in your HTML file and reference it correctly, you can trigger the addingEventListener() function to add an event listener to the button using the second code block you provided:

//However, it's important to note that in this case, you don't need to pass an argument to the addingEventListener() function. The getElementById() method inside the function already retrieves the button element by its ID, so there's no need to pass an argument to the function.
