$(function(){
	$('table').addClass('table table-striped table-bordered table-hover table-condensed');
	$('pre code').addClass('prettyprint linenums');
	$('pre code').css('border-radius', '4px');
	$('pre code').css('-webkit-border-radius', '4px');
	$('pre code').css('-moz-border-radius', '4px');
	$('pre').css('margin', '0px');
	$('pre').css('padding', '0px');
	$.getScript('https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?skin=sons-of-obsidian');
});
