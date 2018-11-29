var currentPage = 1;

function start() {
    listeners();
    init();
}

function init() {
    back = document.getElementById("back");
    next = document.getElementById("next");
}

function listeners() {
    back.addEventListener("click", prevPage);
    next.addEventListener("click", nextPage);
}

//TODO add transition effect (fade in/out left/right)
function prevPage() {
    document.getElementById("page_"+currentPage).style.display = "none";
	if(currentPage == 1){
		currentPage = 2;
	}else{
		currentPage--;
	}
	document.getElementById("page_"+currentPage).style.display = "block";
}

function nextPage() {
    document.getElementById("page_"+currentPage).style.display = "none";
	if(currentPage == 2) {
		currentPage = 1;
	} else {
		currentPage++;
	}
	document.getElementById("page_"+currentPage).style.display = "block";
}

window.addEventListener("load", start);