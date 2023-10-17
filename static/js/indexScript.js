document.getElementById("Register").addEventListener("click", function () {
  const userInput = prompt("Enter your age:");
  if (userInput > 13) {
    alert("You can use our store.");
  } else {
    alert("You are too young to use our store.");
  }
});
