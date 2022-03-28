function changeBack(id) {
  if (id == "name") {
    document.getElementsByTagName("input")[0].style.backgroundColor = "white";
  } else if (id == "email") {
    document.getElementsByTagName("input")[1].style.backgroundColor = "white";
  } else if (id == "phNum") {
    document.getElementsByTagName("input")[2].style.backgroundColor = "white";
  } else if (id == "message") {
    document.getElementsByTagName("textarea")[0].style.backgroundColor =
      "white";
  }
}
function normBack(id) {
  if (id == "name") {
    document.getElementsByTagName("input")[0].style.backgroundColor = "unset";
  } else if (id == "email") {
    document.getElementsByTagName("input")[1].style.backgroundColor = "unset";
  } else if (id == "phNum") {
    document.getElementsByTagName("input")[2].style.backgroundColor = "unset";
  } else if (id == "message") {
    document.getElementsByTagName("textarea")[0].style.backgroundColor =
      "unset";
  }
}
