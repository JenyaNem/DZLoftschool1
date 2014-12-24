// JavaScript Document
$(document).ready(function() {
   
	$("#addProject").click(function(event){
		event.preventDefault();
		$("#overlay").fadeIn(400,
			function(){
				$("#modal_window").css("display", "block").animate({opacity: 1, top: "50%"}, 200);
			});
		});
	$("#modal_close, #overlay").click(function(){
		$("#modal_window").animate({opacity: 0, top: "45%"}, 200,
			function(){
				$(this).css("display","none");
				$("#overlay").fadeOut(400);
			});
		});

	$(".file_input").change('document.getElementById("fileName").value=this.value;');

});

