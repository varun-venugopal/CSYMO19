
function myLoadFunction()
{

	var element = document.getElementById("pageheading");
	element.firstchild.nodeValue = 'New Heading';

	var element = document.getElementById("paragraph");
	element.firstchild.nodeValue = 'New Paragraph Text';

}
document.addEventListener('DOMContentLoaded',myLoadFunction);

