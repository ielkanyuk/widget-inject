(function a(){
    const myAnchor = document.getElementById("replace");
	const mySpan = document.createElement("span");
    mySpan.innerHTML = "replaced anchor!";
    myAnchor.parentNode.replaceChild(mySpan, myAnchor);
})();