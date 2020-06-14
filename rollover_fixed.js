// this was broken, fixed it like a million years later on 
// 6/14/2020 while sitting up in the Catskills with my 
// wife and baby
window.onload = initLinks;
var thisHead = 0;
var heads = new Array("head1.jpg","head2.jpg","head3.jpg");
function initLinks() {
	document.getElementById("nextlink").onclick = processNext;
	document.getElementById("prevlink").onclick = processPrev;
	setVisibility(new Event('dummy'));
}

function processPrev(e) {
	thisHead = thisHead === 0 ? 2 : --thisHead;
	setVisibility(e);
}
function processNext(e) {
	thisHead = thisHead === 2 ? 0 : ++thisHead;
	setVisibility(e);
}
function setVisibility(e) {
	e.preventDefault();
	var heads = document.querySelectorAll('#heads img')
	for (var i = 0; i < heads.length; i++) {
		var className = i === thisHead ? 'head_on' : 'head';
		heads[i].className = className;
	}
}