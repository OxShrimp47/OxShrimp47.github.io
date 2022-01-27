/*
Name:Tommy Lee Truong
Last Edit:Jan 25 2022
Program Name: My Curriculum Vitae Site

Implements resume tabs
*/

//resume display
function open_resume(resume_name,btn_name){
	var i;
	var x = document.getElementsByClassName("resume");
	var y = document.getElementsByClassName("resume_btn");
	for(i=0; i < x.length; i++){
		x[i].style.display = "none";
		y[i].style.backgroundColor="rgba(0,0,0,0)";
	} 
	document.getElementById(resume_name).style.display ="block";
	document.getElementById(btn_name).style.backgroundColor ="white";
}
function btn_hover(btn_name){
	document.getElementById(btn_name).style.backgroundColor ="rgba(200,200,200,0.7)";
}
function btn_off(resume_name, btn_name){
	var x = document.getElementsByClassName("resume");
	document.getElementById(btn_name).style.backgroundColor ="rgba(105,177,185,0.0)";
	if(document.getElementById(resume_name).style.display =="block"){
		document.getElementById(btn_name).style.backgroundColor ="white";
	} 
}


