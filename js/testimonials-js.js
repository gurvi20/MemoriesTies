function commentHover(name) {
  document.getElementsByName(name)[0].style.fontSize = "25px";
  if (name == "com1") {
    document.getElementsByName(name)[0].style.color = "red";
  } else if (name == "com2") {
    document.getElementsByName(name)[0].style.color = "blue";
  } else if (name == "com3") {
    document.getElementsByName(name)[0].style.color = "orange";
  } else if (name == "com4") {
    document.getElementsByName(name)[0].style.color = "yellow";
  } else if (name == "com5") {
    document.getElementsByName(name)[0].style.color = "brown";
  }
}
function commentHoverOut(name) {
  if (
    name == "com1" ||
    name == "com2" ||
    name == "com3" ||
    name == "com4" ||
    name == "com5"
  ) {
    document.getElementsByName(name)[0].style.color = "black";
    document.getElementsByName(name)[0].style.fontSize = "17px";
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function httpRequest() {
  modal.style.display = "block";
  // document.getElementById("aboutMemo").innerHTML = "test OK";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("aboutMemo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "https://www.google.com/", true);
  xhttp.send();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
