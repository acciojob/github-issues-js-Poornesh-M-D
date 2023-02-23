//your code here
const pageNumberH3 = document.getElementById("pageNumber");
var pageNumber = 1;
async function fetchData(pageNumber) {
	const response = await fetch(``);
	const data = await response.json();
	console.log("DATA",data);
}

function loadNext(){
	pageNumber++;
	if(pageNumber==2)
	{
		document.getElementById("load_prev").disabled=false;
	}
	pageNumberH3.innerText = pageNumber;
	fetchData(pageNumber);
}

function loadPrev(){
	if(pageNumber==2)
	{
		document.getElementById("load_prev").disabled=true;
	}else
	{
		document.getElementById("load_prev").disabled=false;
	}
	pageNumber--;
	pageNumberH3.innerText = pageNumber;
	fetchData(pageNumber);
}
	fetchData(1);
