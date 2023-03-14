function addingEventListener() {
  const button = document.getElementById("button");
  button.addEventListener("click", function (event) {
    alert("I was clicked!");
  });
}

document.addEventListener("DOMContentLoaded", addingEventListener);
