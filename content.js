function modifySelectedTextInDocument()
{
    if (window.getSelection)
    {
	var selectedText = window.getSelection();
	if (selectedText != '')
	{
	    var modifiedText =  "<span style=\"color: red; background: gold; text-shadow:1px 1px 1px #000000\">" + selectedText + "</span>";
	    var range = window.getSelection().getRangeAt (0);
	    range.deleteContents ();
	    if (range.createContextualFragment)
            {
                var newText = range.createContextualFragment(modifiedText);
                range.insertNode (newText);
            }
	}

    }

}
window.onmouseup=modifySelectedTextInDocument;