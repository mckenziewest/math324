$(document).ready(function(){
	var theTitle = "<title>Linear Algebra</title>"
	var title = "<div id='title'><h1>Math 324 Spring 2020</h1></div>";
    	var nav = "<div id='nav'>\
      		<ul>\
		<a href='./index.html'><li><p>Course Information</p></li></a>\
		<a href='./1920-1-324_Syllabus.pdf'><li><p>Syllabus</p></li></a>\
		<a href='./schedule.html'><li><p>Schedule</p></li></a>\
		<a href='./homework.html'><li><p>Homework</p></li></a>\
		<a href='./materials.html'><li><p>Course Materials</p></li></a>\
      		</ul>\
    		</div>";
	var logo = "<div id='Logo'><img src='../POA_logo.png'></div>";
	$(document.body).prepend(title);
	$(document.body).prepend(logo);
	$(document.body).prepend(nav);
	$(document.head).append(theTitle);
});
