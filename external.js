var sUserName, targetElement, targetElementLogin, mainPage, btnLogin;

function validateData(){
	sUserName = document.getElementById("input").value;
	targetElement = document.getElementById("element");
	targetElementLogin = document.getElementById("loginScreen");
	mainPage = document.getElementById("mainPage");
	btnLogin = document.getElementById("btnLogin");
	
	if(sUserName.length > 2){
		btnLogin.disabled = false;
	}else{
		btnLogin.disabled = true;
	}
}
function authenticate(){
	targetElementLogin.style.display = "none";
	targetElement.innerHTML = "Hello " + sUserName + " you are good!!";
	mainPage.style.display = "block";
}

function userLogout(){
	targetElementLogin.style.display = "block";
	mainPage.style.display = "none";
	document.getElementById("input").value = ""
}




