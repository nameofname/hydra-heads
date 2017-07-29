window.onload = initLinks; 

function initLinks ()
{
	document.getElementById("nextlink").onclick = processNext;
	document.getElementById("prevlink").onclick = processPrev; 
}

function processNext()
{
	if (document.images.className == "head")
	{
		document.images.className = "head_on"; 
		i++; 
	}
}
	
//probably dont want to use the for statement, it will only run the number of images there are.