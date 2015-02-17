$(function () {
	$( "<img src='http://soleadprod.fr/HRGfiles/postit.png' id='rever' />" ).insertAfter( ".mainContent" );
	//$('#bonjour').replaceWith('<img src="http://soleadprod.fr/HRGfiles/bonjour.png" id="BonjourImg" alt="Bonjour," />');
	$('.menu ul.menuLevel1 a.menuItemLevel1Highlight, .menu ul.menuLevel2 a.menuItemLevel2Highlight').css('background-color', '#00A2E3');
	$('.menu ul.menuLevel1 a.menuVisible:hover, .menu ul.menuLevel2 a.menuVisible:hover')
	$('.menuVisible').css('border-radius', '0px');
	$('.menuPosition').css('background-image', 'url(http://soleadprod.fr/HRGfiles/bg-menu.png)');
	$('head').append('<link rel="stylesheet" type="text/css" href="http://soleadprod.fr/HRGfiles/style.css">');
	$('head').append("<link href=http://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>");
	
});
