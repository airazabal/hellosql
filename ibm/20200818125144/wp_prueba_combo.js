/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:35:37.75
*/
gx.evt.autoSkip=!1;gx.define("wp_prueba_combo",!1,function(){var t,n;this.ServerClass="wp_prueba_combo";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e132i2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e142i2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5];this.GXLastCtrlId=5;this.CHOSEN1Container=gx.uc.getNew(this,6,0,"Chosen","CHOSEN1Container","Chosen1","CHOSEN1");n=this.CHOSEN1Container;n.setProp("Class","Class","","char");n.setProp("Enabled","Enabled",!0,"boolean");n.setProp("Width","Width","300","str");n.setProp("Height","Height","22","str");n.setProp("Attribute","Attribute","","char");n.addV2CFunction("AV5ChosenData","vCHOSENDATA","SetData");n.addC2VFunction(function(n){n.ParentObject.AV5ChosenData=n.GetData();gx.fn.setControlValue("vCHOSENDATA",n.ParentObject.AV5ChosenData)});n.setProp("Tooltiptext","Hinttext","","str");n.setProp("FocusOnLoad","Focusonload",!1,"bool");n.setProp("Font","Font","Arial","str");n.setProp("FontColor","Fontcolor",gx.color.fromRGB(0,0,0),"color");n.setProp("FontSize","Fontsize",11,"num");n.setProp("Visible","Visible",!0,"bool");n.setC2ShowFunction(function(n){n.show()});this.setUserControl(n);t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};this.AV5ChosenData=[];this.Events={e132i2_client:["ENTER",!0],e142i2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[{ctrl:"FORM",prop:"Headerrawhtml"},{av:"AV5ChosenData",fld:"vCHOSENDATA",pic:""}],[{ctrl:"FORM",prop:"Headerrawhtml"},{av:"AV5ChosenData",fld:"vCHOSENDATA",pic:""}]];this.Initialize()});gx.wi(function(){gx.createParentObj(wp_prueba_combo)})