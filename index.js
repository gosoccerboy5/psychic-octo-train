function addFooter () {
  let footer = document.createElement("div");
  footer.id = "footer";
  footer.innerHTML = '<div id="footer"><a href="https://github.com/gosoccerboy5/gosoccerboy5.github.io"><img src="https://github.com/favicon.ico"></a> <a href="https://scratch.mit.edu/users/gosoccerboy5"><img src="https://avatars.githubusercontent.com/u/82768218" width="30" height="30"></a></div>';
  document.body.appendChild(footer);
}
addFooter();
