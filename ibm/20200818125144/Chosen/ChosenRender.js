function Chosen($)
{
	this.Font;
	this.FontColor;
	this.FontSize;
	this.Width;
	this.Height;
	this.Attribute;
	this.Data;
	this.Tooltiptext;
	this.FocusOnLoad;

	// Databinding for property Data
	this.SetData = function(data)
	{
		///UserCodeRegionStart:[SetData] (do not remove this comment.)
		this.Data = data;
		
		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	// Databinding for property Data
	this.GetData = function()
	{
		///UserCodeRegionStart:[GetData] (do not remove this comment.)
		return this.Data;
		
		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}

	this.show = function()
	{
		///UserCodeRegionStart:[show] (do not remove this comment.)
		 var containerName = this.ContainerName;
		 
		 if (!this.IsPostBack)
		 {
			if (this.FocusOnLoad == undefined) this.FocusOnLoad=false;
			
			var buffer = '<select data-placeholder="' + this.Tooltiptext + '" class="chzn-select' + containerName + '" multiple style="width:' + this.Width + 'px;">';
			
			//draw main tabs options
			buffer += '<option value=""></option>';
			for (i = 0; this.Data[i] != undefined; i++) {
				var value = 'javascript:void(0);';
				var id = 'javascript:void(0);';
				var selected = "";
				
				if (this.Data[i].Value != "") {
					value = this.Data[i].Value;
					id = this.Data[i].Id;

					if (this.Data[i].Selected == true) { selected = "selected"; }
				}
				buffer += '<option value="' + id + '" ' + selected + '>'+ value +'</option>'
			}
			buffer += '</select>';
			this.setHtml(buffer);			
			
			$(".chzn-select" + containerName).chosen();
			
			$(".chzn-select-deselect").chosen({allow_single_deselect:true});
            var css = {'font-size': this.FontSize ,'color': this.FontColor.Html,'font-family': this.Font};
			$(".chzn-container").css({'font-size': this.FontSize ,'color': this.FontColor.Html,'font-family': this.Font});
			$(".search-field").css( { 'height': this.Height});
			if (this.FocusOnLoad)
				$('.chzn-container').mousedown();
				
			//capturo el evento cuando cambia y lo asigno a attribute
			window[containerName] = this;
			$(".chzn-select" + containerName).chosen().change( function(e){
				var selector = $('#' + window[containerName].ContainerName ).children(':first').attr('id');
				var result =  $('#' + selector).val();
				if(result == null)
					result = '';
				var chosenResult = [];
				var myJSON = "";
				for (var i = 0; i < result.length; i++) {
					var item = {
						"value": result[i]
					};
					chosenResult.push(item);
				}
				myJSON = JSON.stringify({chosenResult: chosenResult});
				window[containerName].Attribute = myJSON;
				if(typeof window[containerName].OnChangeVal == 'function'){
					window[containerName].OnChangeVal();
				}
			} );
		}
		
		
		
		
		///UserCodeRegionEnd: (do not remove this comment.)
	}
	///UserCodeRegionStart:[User Functions] (do not remove this comment.)
	
	
	
	
	///UserCodeRegionEnd: (do not remove this comment.):
}
