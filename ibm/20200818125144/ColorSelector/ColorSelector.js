function ColorSelector()
{
	this.Color;
	this.Size;
	this.Type;
	this.ResultControlName;
	this.SelectedColor;
	
	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)


		var webapp = location.pathname.substring(0,location.pathname.search(/servlet/gi) ) 
		var imgDir = gx.staticDirectory.substring(1,gx.staticDirectory.length);
		webapp = webapp + imgDir;
		
		CreateColorSelector(webapp, this);		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)

	
	///UserCodeRegionEnd: (do not remove this comment.):
}

var cpns4=document.layers;
var cpie4=document.all;
var cpns6=document.getElementById&&!document.all;
	
//Get Object
function cpGetObj(id)
{
	if (cpns4)
	{
		crossobj=document.layers[id];
	}
	else 
		if (cpns6)
		{
			crossobj=document.getElementById(id);
		}	
		else
		{
			crossobj=document.all[id];
		}	
		
	return crossobj;
}
	
function CreateColorSelector(webapp, cpObject)
{
	var ident = cpObject.ControlName;		
	var initialColor = cpObject.SelectedColor;		
	var controlSize = cpObject.Size;
	initialColor = initialColor.replace(/#/gi,'');
	
	if (initialColor == '')
		initialColor = 'ffffff';
		
	if (cpObject.Type == 'animated')
	{
	
		var htmlColorPicker = '<p><div class="colorSelector'+ controlSize +'" id="' + ident + '"><div class="colorSelector'+ controlSize +'div" style="background-color: #' + initialColor + '"></div></div></p>' ;
		cpObject.setHtml(htmlColorPicker);	
		$('#' + ident).ColorPicker(cpObject,{
			color: '#'+initialColor,
			returnControl: cpObject.ResultControlName,
			objColorSelector: cpObject,
			onShow: function (colpkr) {
				$(colpkr).fadeIn(500);
				return false;
			},
			onHide: function (colpkr) {
				$(colpkr).fadeOut(500);
				return false;
			},
			onChange: function (hsb, hex, rgb) {
				$('#'  + ident+ ' div').css('backgroundColor', '#' + hex);
			}
		});	
	}
	if (cpObject.Type == 'flat')
	{
		htmlColorPicker = '<p id="' + ident + '"></p>';
		cpObject.setHtml(htmlColorPicker);	
		$('#'+ident).ColorPicker(cpObject,{flat: true,color: '#'+initialColor, returnControl: cpObject.ResultControlName ,objColorSelector: cpObject});
	}
	if (cpObject.Type == 'slide')
	{
		htmlColorPicker = '<p><div class="customWidget"><div class="colorSelector'+ controlSize +'S" id="' + ident + 'S"><div class="colorSelector'+ controlSize +'Sdiv" style="background-color: #' + initialColor + '"></div></div><div class="colorSelector'+ controlSize +'H" id="' + ident + 'H"></div></div></p>';		
		cpObject.setHtml(htmlColorPicker);	
		$('#' + ident + 'H').ColorPicker(cpObject,{
			flat: true,
			color: '#' +initialColor,
			returnControl: cpObject.ResultControlName,
			objColorSelector: cpObject,
			onSubmit: function(hsb, hex, rgb) {
				$('#' + ident + 'S'+ ' div').css('backgroundColor', '#' + hex);
			}
		});
		$('#' + ident + 'H' +'>div').css('position', 'absolute');
		var widt = false;
		$('#' + ident + 'S').bind('click', function() {
			$('#' + ident + 'H').stop().animate({height: widt ? 0 : 173}, 500);
			widt = !widt;
		});
	}

}


