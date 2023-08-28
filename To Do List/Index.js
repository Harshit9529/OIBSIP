alert(
    "Single click to mark the work as complete, Double click to remove the work."
  );
  let savebox = document.getElementById("savebox");
  let button = document.getElementById("button");
  let todobox = document.getElementById("todobox");
  
  button.addEventListener("click", function () {
    if (savebox.value === "") {
      alert("Please write something.........");
    } else {
      var element = document.createElement("p");
      element.classList.add("paragraph-styling")
      element.innerText = savebox.value;
      todobox.appendChild(element);
      savebox.value = "";
      element.addEventListener("click", function () {
        if (this.style.backgroundColor === "green") {
          this.style.backgroundColor = "";
          this.style.textDecoration = "none";
        } else {
          this.style.backgroundColor = "green";
          this.style.textDecoration = "line-through";
        }
      });
    }
    element.addEventListener("dblclick", function(){
      todobox.removeChild(element);
    });
  });