var nav_Navigation2 = new Object();

nav_Navigation2.mouseoverBold="true";
nav_Navigation2.selectedBgcolor="";
nav_Navigation2.importedImageMouseOver="";
nav_Navigation2.numLinks="9";
nav_Navigation2.textColor="#000000";
nav_Navigation2.mouseoverBgcolor="#F4CE53";
nav_Navigation2.tabCategory="basic";
nav_Navigation2.border="#B91806";
nav_Navigation2.selectedItalic="false";
nav_Navigation2.graphicMouseover="false";
nav_Navigation2.type="Navigation";
nav_Navigation2.basicTab="White";
nav_Navigation2.horizontalSpacing="12";
nav_Navigation2.horizontalWrap="6";
nav_Navigation2.shinyButton="Shiny_Aqua";
nav_Navigation2.mouseoverEffect="true";
nav_Navigation2.modernButton="Basic_Black";
nav_Navigation2.orientation="horizontal";
nav_Navigation2.funButton="Arts_and_Crafts";
nav_Navigation2.darkButton="Basic_Black";
nav_Navigation2.selectedTextcolor="#585858";
nav_Navigation2.lineWidth="2";
nav_Navigation2.mouseoverTextcolor="#000000";
nav_Navigation2.bold="true";
nav_Navigation2.texturedButton="Brick";
nav_Navigation2.accentStyle="Sphere";
nav_Navigation2.style="text";
nav_Navigation2.holidayButton="Christmas_Ornaments";
nav_Navigation2.textSize="12";
nav_Navigation2.lineColor="#000000";
nav_Navigation2.brightButton="Chicky";
nav_Navigation2.mouseoverUnderline="false";
nav_Navigation2.accentColor="Mustard";
nav_Navigation2.imageHeight="";
nav_Navigation2.background="#999999";
nav_Navigation2.textFont="Comic Sans MS";
nav_Navigation2.hasLinks="true";
nav_Navigation2.sophisticatedButton="Antique";
nav_Navigation2.underline="false";
nav_Navigation2.simpleButton="Autumn_Leaves";
nav_Navigation2.italic="false";
nav_Navigation2.importedImageSelected="";
nav_Navigation2.basicButton="Gray";
nav_Navigation2.navID="nav_Navigation2";
nav_Navigation2.buttonCategory="basic";
nav_Navigation2.dirty="false";
nav_Navigation2.selectedBold="false";
nav_Navigation2.selectedEffect="true";
nav_Navigation2.graphicSelected="false";
nav_Navigation2.version="5";
nav_Navigation2.verticalSpacing="10";
nav_Navigation2.squareTab="Camel";
nav_Navigation2.mouseoverItalic="false";
nav_Navigation2.justification="left";
nav_Navigation2.imageWidth="";
nav_Navigation2.selectedUnderline="false";
nav_Navigation2.accentType="both";
nav_Navigation2.importedImage="";
nav_Navigation2.width="982";
nav_Navigation2.height="70";

nav_Navigation2.navName = "Navigation2";
nav_Navigation2.imagePath = "/~media/elements/LayoutClipart/../LayoutClipart/AccentGraphics/Accent_Sphere_Mustard.gif";
nav_Navigation2.selectedImagePath = "/~media/elements/LayoutClipart/";
nav_Navigation2.mouseOverImagePath = "/~media/elements/LayoutClipart/";
nav_Navigation2.imageWidth = "16";
nav_Navigation2.imageHeight = "16";
nav_Navigation2.fontClass = "size12 ComicSansMS12";
nav_Navigation2.fontFace = "'Comic Sans MS', Arial, Helvetica, sans-serif";


var baseHref = '';
// this will only work if getElementsByTagName works
if (document.getElementsByTagName)
{
    // this will only work if we can find a base tag
    var base = document.getElementsByTagName('base');
    // Verify that the base object exists
    if (base && base.length > 0)
    {
        // if you don't specify a base href, href comes back as undefined
        if (base[0].href != undefined)
        {
            // get the base href
            baseHref = base[0].href;
            // add a trailing slash if base href doesn't already have one
            if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '/')
            {
                baseHref += '/';
            }
        }
    }
}


nav_Navigation2.links=new Array(9);
var nav_Navigation2_Link1 = new Object();
nav_Navigation2_Link1.type = "existing";
nav_Navigation2_Link1.displayName = "Home";
nav_Navigation2_Link1.linkWindow = "_self";
nav_Navigation2_Link1.linkValue = "index.html";
nav_Navigation2_Link1.linkIndex = "1";
nav_Navigation2.links[0] = nav_Navigation2_Link1;
var nav_Navigation2_Link2 = new Object();
nav_Navigation2_Link2.type = "existing";
nav_Navigation2_Link2.displayName = "Books";
nav_Navigation2_Link2.linkWindow = "_self";
nav_Navigation2_Link2.linkValue = "Terry-s-Books.html";
nav_Navigation2_Link2.linkIndex = "2";
nav_Navigation2.links[1] = nav_Navigation2_Link2;
var nav_Navigation2_Link3 = new Object();
nav_Navigation2_Link3.type = "existing";
nav_Navigation2_Link3.displayName = "Author Visits";
nav_Navigation2_Link3.linkWindow = "_self";
nav_Navigation2_Link3.linkValue = "Author-Visits.html";
nav_Navigation2_Link3.linkIndex = "3";
nav_Navigation2.links[2] = nav_Navigation2_Link3;
var nav_Navigation2_Link4 = new Object();
nav_Navigation2_Link4.type = "existing";
nav_Navigation2_Link4.displayName = "Activities and Lesson Plans";
nav_Navigation2_Link4.linkWindow = "_self";
nav_Navigation2_Link4.linkValue = "Teacher-and-Parent-Resources.html";
nav_Navigation2_Link4.linkIndex = "4";
nav_Navigation2.links[3] = nav_Navigation2_Link4;
var nav_Navigation2_Link5 = new Object();
nav_Navigation2_Link5.type = "url";
nav_Navigation2_Link5.displayName = "KCsWildFacts Blog";
nav_Navigation2_Link5.linkWindow = "_self";
nav_Navigation2_Link5.linkValue = "http:\/\/www.kcswildfacts.com\/KCs-Blog.html";
nav_Navigation2_Link5.linkIndex = "5";
nav_Navigation2.links[4] = nav_Navigation2_Link5;
var nav_Navigation2_Link6 = new Object();
nav_Navigation2_Link6.type = "existing";
nav_Navigation2_Link6.displayName = "Gallery";
nav_Navigation2_Link6.linkWindow = "_self";
nav_Navigation2_Link6.linkValue = "Photo-Gallery.html";
nav_Navigation2_Link6.linkIndex = "6";
nav_Navigation2.links[5] = nav_Navigation2_Link6;
var nav_Navigation2_Link7 = new Object();
nav_Navigation2_Link7.type = "existing";
nav_Navigation2_Link7.displayName = "About Me";
nav_Navigation2_Link7.linkWindow = "_self";
nav_Navigation2_Link7.linkValue = "Terry-Catasus-Jennings.html";
nav_Navigation2_Link7.linkIndex = "7";
nav_Navigation2.links[6] = nav_Navigation2_Link7;
var nav_Navigation2_Link8 = new Object();
nav_Navigation2_Link8.type = "existing";
nav_Navigation2_Link8.displayName = "Contact";
nav_Navigation2_Link8.linkWindow = "_self";
nav_Navigation2_Link8.linkValue = "Contact-Us.html";
nav_Navigation2_Link8.linkIndex = "8";
nav_Navigation2.links[7] = nav_Navigation2_Link8;
var nav_Navigation2_Link9 = new Object();
nav_Navigation2_Link9.type = "existing";
nav_Navigation2_Link9.displayName = "Purchase Autographed Books";
nav_Navigation2_Link9.linkWindow = "_self";
nav_Navigation2_Link9.linkValue = "Buy-Books.html";
nav_Navigation2_Link9.linkIndex = "9";
nav_Navigation2.links[8] = nav_Navigation2_Link9;
function backgroundMouseOn(tdElement, newColor)
{
	if(tdElement != null) {
		tdElement.oldBGColor = tdElement.style.backgroundColor;
		tdElement.style.backgroundColor = newColor;
	}
}
function backgroundMouseOff(tdElement)
{
	if(tdElement != null) {
		tdElement.style.backgroundColor = tdElement.oldBGColor;
	}
} 

function doMouseChange(Navigation,tdElement,linkIndex,bisMouseOver) {
	if (Navigation.mouseoverEffect != 'true') {
		return;
	}	
	var link = Navigation.links[linkIndex-1];
	var bIsCurrentPage = isCurrentPage(link);
	var bShowMouseoverBg = !(bIsCurrentPage
			&& 'true' == Navigation.selectedEffect && Navigation.selectedBgcolor);
	var fontElement = getLinkFontElement(tdElement);
	if(fontElement != null) {
		doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver);
	}
	
	if (Navigation.mouseoverBgcolor && bShowMouseoverBg) {
		if(bisMouseOver) {
			backgroundMouseOn(tdElement,Navigation.mouseoverBgcolor);
		} else {
			backgroundMouseOff(tdElement);
		}
	}
}
function addStyle(Navigation, Link, tdElement,vNavTrElement) {
	if (tdElement == null) {
		return;
	}
	var strFontColor = Navigation.textColor;
	if ('true' == Navigation.selectedEffect) {
		if (Navigation.selectedTextcolor) {
			strFontColor = Navigation.selectedTextcolor;
		}
		if (Navigation.selectedBgcolor) {
			if (Navigation.orientation == 'horizontal') {
				tdElement.style.backgroundColor = Navigation.selectedBgcolor;
			} else {
				if (vNavTrElement != null) {
					vNavTrElement.style.backgroundColor = Navigation.selectedBgcolor;
				}
			}
		}
	}
	var fontElement = getLinkFontElement(tdElement);
	if (fontElement != null) {
		fontElement.style.color = strFontColor;
	}
	tdElement.style.color = strFontColor;
	if ('true' == Navigation.selectedEffect) {
		if ('true' == Navigation.selectedBold) {
			tdElement.style.fontWeight = "bold";
		}
		if ('true' == Navigation.selectedItalic) {
			tdElement.style.fontStyle = "italic";
		}
		if ('true' == Navigation.selectedUnderline) {
			tdElement.style.textDecoration = "underline";
		}
	}
}

// Combined escape html and javascript
function escapeHtmlInlineScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	return htmlEncode(escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes));
}

function htmlEncode(s){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '<':
			result += "&lt;";
			break;
		case '>':
			result += "&gt;";
			break;
		case '&':
			result += "&amp;";
			break;
		case '"':
			result += "&quot;";
			break;
		case "'":
			result += "&#39;";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

/* escapes slashes and quotes. the default is to escape quotes,
 * but this can be turned off.
 * this function is used for javascript and also for escaping urls
 * within background-image css.	 
 */
function escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '\'':
			if (escapeSingleQuotes == null || escapeSingleQuotes)
				result += "\\\'";
			break;
		case '\"':
			if (escapeDoubleQuotes == null || escapeDoubleQuotes)
				result += "\\\"";
			break;
		case '\\':
			result += "\\\\";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

//
// This .js file includes utility functions used by both graphical and text navs
// in their rendering.  User pages including a nav element will import this file, along
// with TextNavigation.js and GraphicNavigation.js.  The functions within will
// be called by the [navname].js file generated at publish time.

function fixLinkValue(Link)
{
	if(Link.type!='existing')
	{
		return Link.linkValue;
	}
	else
	{
		return baseHref + strRelativePathToRoot + Link.linkValue;
	}
}

function isCurrentPage(Link)
{
	if(Link.type!='existing')
	{
		return false;
	}
	var strLinkValue = Link.linkValue.toLowerCase();
	return (strRelativePagePath == strLinkValue);
}

function toggleOnMouseChange(fontElement,newColor, bold, underline, italic)
{
	if(fontElement == null) {
		return;
	}
	if(newColor)
	{
		fontElement.style.color=newColor;
	}
	fontElement.style.fontWeight = (bold=='true' ? 'bold' : 'normal');
	fontElement.style.textDecoration = (underline=='true' ? 'underline' : 'none');
	fontElement.style.fontStyle = (italic=='true' ? 'italic' : 'normal');

}

function doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver) {
	if(fontElement == null) {
		return;
	}
	var textColor;
	var baseTextColor = Navigation.textColor;
	var bold;
	var baseBold = Navigation.bold;
	var underline;
	var baseUnderline = Navigation.underline;
	var italic;
	var baseItalic = Navigation.italic;
	if (bIsCurrentPage && 'true' == Navigation.selectedEffect) {
		textColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: (Navigation.mouseoverTextColor ? Navigation.mouseoverTextcolor
						: Navigation.textColor);
		baseTextColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: Navigation.textColor;
		baseBold = bold = Navigation.selectedBold;
		baseUnderline = underline = Navigation.selectedUnderline;
		baseItalic = italic = Navigation.selectedItalic;
	} else {
		textColor = Navigation.mouseoverTextcolor ? Navigation.mouseoverTextcolor
				: Navigation.textColor;
		bold = Navigation.mouseoverBold;
		underline = Navigation.mouseoverUnderline;
		italic = Navigation.mouseoverItalic;
	}
	
	if(bisMouseOver) {
		toggleOnMouseChange(fontElement,textColor,bold,underline,italic);
	} else {
		toggleOnMouseChange(fontElement,baseTextColor,baseBold,baseUnderline,baseItalic);
	}
	

}

function addMouseAndStyleSupportNavigation2(Navigation,navTbId) {
	var startNode;

	if(typeof(nav_element_id) != 'undefined' && document.getElementById(nav_element_id) != null) {
		startNode = document.getElementById(nav_element_id);
			
	} else if(navTbId != null) {
		startNode = document.getElementById(navTbId);
			
	}
	
	if(startNode != null) {
	  searchForCurrentPageTd(Navigation,startNode);
	}
	

}

function searchForCurrentPageTd(Navigation,startNode) {
	
	if(startNode.childNodes != null) {
		for(var i=0;i<startNode.childNodes.length;i++){
			if(addStyleForCurrentPageTd(Navigation,startNode.childNodes[i])){
			   return;	
			} else {
			   searchForCurrentPageTd(Navigation,startNode.childNodes[i]);
			}
		}
	}

}

function addStyleForCurrentPageTd(Navigation,currentNode) {
	if(Navigation.orientation == 'horizontal') {
		if(currentNode.tagName == 'TD' && currentNode.id != '' && currentNode.id.indexOf(Navigation.navName+navTDLinkPart) != -1){
			var currentTDIdPrefix = Navigation.navName+navTDLinkPart;
			var linkId = currentNode.id.substring(currentTDIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true) {
				addStyle(Navigation, Navigation.links[linkId-1],currentNode);
				return true;
			}
		}
	} else {
		if(currentNode.tagName == 'TR' && currentNode.id != '' && currentNode.id.indexOf(navTRLinkPrefix) != -1){	
			var currentTRIdPrefix = navTRLinkPrefix+Navigation.navName;
			var linkId = currentNode.id.substring(currentTRIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true && currentNode.childNodes != null) {
				var currentPageTd;
				for(var i=0;currentNode.childNodes.length;i++) {
					if(typeof(currentNode.childNodes[i].tagName) != 'undefined' && currentNode.childNodes[i].tagName == 'TD' && currentNode.childNodes[i].id.indexOf(Navigation.navName+navTDLinkPart) != -1) {
						currentPageTd = currentNode.childNodes[i];
						addStyle(Navigation, Navigation.links[linkId - 1],currentPageTd,currentNode);
						return true;
					}
				}
			}
		}
	}
	return false;
}

function getChildElementFromTree(startNode,nodesToTraverse) {
	var currentChildNode = startNode;
	
	for(var n= 0;n<nodesToTraverse.length;n++) {
		currentChildNode = getMatchingChildByTag(currentChildNode.childNodes,nodesToTraverse[n]);
	}
	
	return currentChildNode;
}


function getMatchingChildByTag(childNodes,tagName) {
	var child;
	for(var i=0;childNodes.length;i++) {
		if(childNodes[i].tagName == tagName) {
			child = childNodes[i];
			break;
		}
	}
	return child;
}
function getLinkFontElement(tdElement){
	var fontElement;
	var aElement = getChildElementFromTree(tdElement,['A']);
	for(var i=0;i < aElement.childNodes.length;i++) {
		if(aElement.childNodes[i].tagName == 'DIV') {
		 	fontElement = getChildElementFromTree(aElement.childNodes[i],['FONT']);
		 	break;
		} else if(aElement.childNodes[i].tagName == 'FONT'){
		 	fontElement = 	aElement.childNodes[i];
		 	break;
		}
	
	}
	return fontElement;
}



	if(typeof(navTRLinkPrefix) == 'undefined') {
		navTRLinkPrefix = 'vNavTR_Link_';
	}
	if(typeof(navTDLinkPart) == 'undefined') {
		navTDLinkPart = '_Link';
	}
	if(document.getElementById('nav_version') == null) {
	if (typeof(navTBSuffix) == 'undefined') {
	navTBSuffix = 0;
	} else {navTBSuffix++;}
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  CELLSPACING=\"0\" BORDER=\"0\" CELLPADDING=\"0\"><TR HEIGHT=\"2\" BGCOLOR=\"#B91806\"><TD HEIGHT=\"2\" COLSPAN=\"3\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"2\" ALT=\"\"><\/TD><\/TR><TR><TD WIDTH=\"2\" BGCOLOR=\"#B91806\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"2\" ALT=\"\"><\/TD><TD><TABLE ID=\"ntb\" CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\"  BGCOLOR=\"#999999\"><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\"><TR><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation2_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;font-weight: bold;\" onmouseover=\"doMouseChange(nav_Navigation2,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'1\',false);\"><A HREF=\"\/index.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Home\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG NAME=\"IDNavigation21\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><FONT ID=\"Navigation2_f1\" FACE=\"\'Comic Sans MS\', Arial, Helvetica, sans-serif\" CLASS=\"size12 ComicSansMS12\" STYLE=\"color:#000000\">Home<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation21\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation2_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;font-weight: bold;\" onmouseover=\"doMouseChange(nav_Navigation2,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'2\',false);\"><A HREF=\"\/Terry-s-Books.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Books\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG NAME=\"IDNavigation22\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><FONT ID=\"Navigation2_f2\" FACE=\"\'Comic Sans MS\', Arial, Helvetica, sans-serif\" CLASS=\"size12 ComicSansMS12\" STYLE=\"color:#000000\">Books<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation22\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation2_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;font-weight: bold;\" onmouseover=\"doMouseChange(nav_Navigation2,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'3\',false);\"><A HREF=\"\/Author-Visits.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Author Visits\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG NAME=\"IDNavigation23\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><FONT ID=\"Navigation2_f3\" FACE=\"\'Comic Sans MS\', Arial, Helvetica, sans-serif\" CLASS=\"size12 ComicSansMS12\" STYLE=\"color:#000000\">Author&nbsp;Visits<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation23\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation2_Link4\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;font-weight: bold;\" onmouseover=\"doMouseChange(nav_Navigation2,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'4\',false);\"><A HREF=\"\/Teacher-and-Parent-Resources.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Activities and Lesson Plans\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG NAME=\"IDNavigation24\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><FONT ID=\"Navigation2_f4\" FACE=\"\'Comic Sans MS\', Arial, Helvetica, sans-serif\" CLASS=\"size12 ComicSansMS12\" STYLE=\"color:#000000\">Activities&nbsp;and&nbsp;Lesson&nbsp;Plans<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation24\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation2_Link5\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;font-weight: bold;\" onmouseover=\"doMouseChange(nav_Navigation2,this,\'5\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'5\',false);\"><A HREF=\"http:\/\/www.kcswildfacts.com\/KCs-Blog.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"KCsWildFacts Blog\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG NAME=\"IDNavigation25\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><FONT ID=\"Navigation2_f5\" FACE=\"\'Comic Sans MS\', Arial, Helvetica, sans-serif\" CLASS=\"size12 ComicSansMS12\" STYLE=\"color:#000000\">KCsWildFacts&nbsp;Blog<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation25\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation2_Link6\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;font-weight: bold;\" onmouseover=\"doMouseChange(nav_Navigation2,this,\'6\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'6\',false);\"><A HREF=\"\/Photo-Gallery.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Gallery\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG NAME=\"IDNavigation26\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><FONT ID=\"Navigation2_f6\" FACE=\"\'Comic Sans MS\', Arial, Helvetica, sans-serif\" CLASS=\"size12 ComicSansMS12\" STYLE=\"color:#000000\">Gallery<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation26\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\"><TR><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation2_Link7\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;font-weight: bold;\" onmouseover=\"doMouseChange(nav_Navigation2,this,\'7\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'7\',false);\"><A HREF=\"\/Terry-Catasus-Jennings.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"About Me\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG NAME=\"IDNavigation27\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><FONT ID=\"Navigation2_f7\" FACE=\"\'Comic Sans MS\', Arial, Helvetica, sans-serif\" CLASS=\"size12 ComicSansMS12\" STYLE=\"color:#000000\">About&nbsp;Me<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation27\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation2_Link8\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;font-weight: bold;\" onmouseover=\"doMouseChange(nav_Navigation2,this,\'8\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'8\',false);\"><A HREF=\"\/Contact-Us.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Contact\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG NAME=\"IDNavigation28\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><FONT ID=\"Navigation2_f8\" FACE=\"\'Comic Sans MS\', Arial, Helvetica, sans-serif\" CLASS=\"size12 ComicSansMS12\" STYLE=\"color:#000000\">Contact<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation28\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation2_Link9\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;font-weight: bold;\" onmouseover=\"doMouseChange(nav_Navigation2,this,\'9\',true);\" onmouseout=\"doMouseChange(nav_Navigation2,this,\'9\',false);\"><A HREF=\"\/Buy-Books.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Purchase Autographed Books\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG NAME=\"IDNavigation29\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><FONT ID=\"Navigation2_f9\" FACE=\"\'Comic Sans MS\', Arial, Helvetica, sans-serif\" CLASS=\"size12 ComicSansMS12\" STYLE=\"color:#000000\">Purchase&nbsp;Autographed&nbsp;Books<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10\" HEIGHT=\"16\" BORDER=\"0\"><IMG NAME=\"IDNavigation29\" SRC=\"\/~media\/elements\/LayoutClipart\/..\/LayoutClipart\/AccentGraphics\/Accent_Sphere_Mustard.gif\" HEIGHT=\"16\" WIDTH=\"16\" BORDER=\"0\"><IMG SRC=\"\/tp.gif\" WIDTH=\"6.0\" HEIGHT=\"1\" BORDER=\"0\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"5.0\" BORDER=\"0\"><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><\/TABLE><\/TD><TD WIDTH=\"2\" BGCOLOR=\"#B91806\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"2\" ALT=\"\"><\/TD><\/TR><TR HEIGHT=\"2\" BGCOLOR=\"#B91806\"><TD HEIGHT=\"2\" COLSPAN=\"3\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" HEIGHT=\"2\" ALT=\"\"><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportNavigation2(nav_Navigation2,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

