var currLink = 0;
function changeBgColor(toLink) {
  var navLinkArr = document.getElementsByClassName("navLink");
  navLinkArr[currLink].style.background = "#f4f4f4";
  navLinkArr[toLink].style.background = "grey";
  currLink = toLink;
}
