// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function(){ $(document).foundation(); });

$(function(){
	// Populate email link.
	var e = "info";
	var t = "wildearth";
	var n = ".productions";
	var r = 'mailto:' + e + '@' + t + n;
	$('.ob-ml').attr('href',r);
	// Apply CSS to cached menu.
	$('nav li.selected').removeClass('selected');
    $('nav li a[href="' + window.location.pathname + '"]').parent().addClass('selected');
});

$(function() {
  $("#kevin").click(function() {
    $("#video").hide().html('<iframe width="560" height="315" src="https://www.youtube.com/embed/Q33Xlbmo28k?autoplay=1" frameborder="0" allowfullscreen></iframe>').fadeIn(300);
  });
  $("#anders").click(function() {
    $("#video").hide().html('<iframe width="560" height="315" src="https://www.youtube.com/embed/69rnVurhGFY?autoplay=1" frameborder="0" allowfullscreen></iframe>').fadeIn(300);
  });
});
