
var numnames = 0;
var names = new Array();
function DisplayNames(){
	aname = document.gb.newname.value;
	names[numnames] = aname;
	numnames++;
	names.sort();
	document.getElementById("guests").innerText = names.join("\n");
}


function yourPerspective(){
	var yName = document.getElementById('yName').value;
	$("#perspective").hide();
	document.getElementById("endform").innerText = "Thank you " + yName + " for letting us know! <br> Have fun with this.";
	$("#box").show();
}
$(document).ready(function(){
	$(".home").hide();
	$("#box").hide();
});
// Attempt to Reorder panels.
//function rwidth(wide){
//	if (wide = 0) {
//		$("main").animate({width:'+=20%'});	
//		$("#user").animate({width:'-=18%', padding:'-1%'});
		
//	}
//	if (wide = 1) {
//		$("main").animate({width:'78%'});
//		$("#user").animate({width:'78%'});
//	}
//}
function showHome(){
	$(".home").show();
	$("#homeS").hide();
}
function hideHome(){
	$(".home").hide();
	$("#homeS").show();
}

// Box Controls
function right(){
	$("#box").animate({
		left: '+=20px'
	});
}
function left(){
	$("#box").animate({
		left: '-=20px'
	});
}
function down(){
	$("#box").animate({
		top: '+=20px'
	});
}
function up(){
	$("#box").animate({
		top: '-=20px'
	});
}
//End Box Controls

// Canvas #Icon
//	var icon = document.getElementById("icon");
//	var licon = icon.getContext("2d");
	
//	licon.font = "30px Georgia";
//	licon.fillText("PS", 0, 0);
	
	
//	var c = document.getElementById("icon");
//	var ctx = c.getContext('2d');
//alert("working");	
//	ctx.font = '50px Georgia';
//	ctx.fillStyle = 'black';
//	ctx.textAlign = 'center';
//	ctx.textBaseline = 'middle';
//	ctx.fillText('Hello World!', 10, 50);
//alert("working");		
//End Canvas #Icon	

		
