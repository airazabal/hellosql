/*!   GeneXus .NET Core 16_0_8-139369 on 8/12/2020 12:36:36.82
*/
gx.evt.autoSkip=!1;gx.define("mpg_seg_nuevo",!1,function(){var t,n;this.ServerClass="mpg_seg_nuevo";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.IsMasterPage=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.A41UseCod=gx.fn.getControlValue("USECOD_MPAGE");this.A42ConfSist=gx.fn.getControlValue("CONFSIST_MPAGE");this.AV19RECU_ID=gx.fn.getControlValue("vRECU_ID_MPAGE");this.AV19RECU_ID=gx.fn.getControlValue("vRECU_ID_MPAGE")};this.e130w2_client=function(){return this.setEventParameters([["RECU_ID","vRECU_ID_MPAGE","AV19RECU_ID"]],arguments[2]),this.executeServerEvent("TRACKCONTEXT_GX1_MPAGE",!0,null,!0,!0)};this.e140w2_client=function(){return this.executeServerEvent("REALIZAR CONFIGURACION_MPAGE",!0,null,!1,!1)};this.e160w2_client=function(){return this.executeServerEvent("ENTER_MPAGE",!0,null,!1,!1)};this.e170w2_client=function(){return this.executeServerEvent("CANCEL_MPAGE",!0,null,!1,!1)};this.GXValidFnc=[];t=this.GXValidFnc;this.GXCtrlIds=[2,4,5,6,7,9,11];this.GXLastCtrlId=11;this.SCAMESSAGE1_MPAGEContainer=gx.uc.getNew(this,8,0,"scaMessage","SCAMESSAGE1_MPAGEContainer","Scamessage1","SCAMESSAGE1_MPAGE");n=this.SCAMESSAGE1_MPAGEContainer;n.setProp("Class","Class","","char");n.setProp("Enabled","Enabled",!0,"boolean");n.setProp("Width","Width","312","str");n.setProp("Height","Height","62","str");n.setProp("MessageType","Messagetype","bootstrap","str");n.setProp("AnimationType","Animationtype","fade","str");n.setProp("DelayUntilClose","Delayuntilclose",3e3,"num");n.setProp("AutoClose","Autoclose",!0,"bool");n.setProp("ShowCloseButton","Showclosebutton",!0,"bool");n.setProp("StartPosition","Startposition","TopRight","str");n.setProp("NiftyAnimationType","Niftyanimationtype","md-effect-1","str");n.setProp("NiftyDefaultMessageTitle","Niftydefaultmessagetitle","Message Title","str");n.setProp("NiftyMessageTitleTag","Niftymessagetitletag","#","str");n.setProp("NiftyButtonText","Niftybuttontext","Close me!","str");n.setProp("NiftyMessageBackgroundColor","Niftymessagebackgroundcolor",gx.color.fromRGB(209,91,71),"color");n.setProp("NiftyButtonColor","Niftybuttoncolor",gx.color.fromRGB(165,40,27),"color");n.setProp("NiftyButtonHoverColor","Niftybuttonhovercolor",gx.color.fromRGB(192,57,43),"color");n.setProp("NiftyMessageTextColor","Niftymessagetextcolor",gx.color.fromRGB(255,255,255),"color");n.setProp("NiftyMessageFontFamily","Niftymessagefontfamily","Verdana, Arial","str");n.setProp("AnimationSpeed","Animationspeed",600,"num");n.setProp("DisplayHistoryMenu","Displayhistorymenu",!0,"bool");n.setProp("NextMessagePosition","Nextmessageposition","down","str");n.setProp("DialogDefaultMessageTitle","Dialogdefaultmessagetitle","Message Title","str");n.setProp("DialogMessageTitleTag","Dialogmessagetitletag","#T#","str");n.setProp("Visible","Visible",!0,"bool");n.setC2ShowFunction(function(n){n.show()});this.setUserControl(n);t[2]={id:2,fld:"TEXTHTML",format:2,grid:0};t[4]={id:4,fld:"TEXTHTML2",format:2,grid:0};t[5]={id:5,fld:"ASIDE_CONF1",format:2,grid:0};t[6]={id:6,fld:"ASIDE_CONF2",format:2,grid:0};t[7]={id:7,fld:"TEXTHTML3",format:2,grid:0};t[9]={id:9,fld:"BTNCONFIGURACION",format:1,grid:0,evt:"e140w2_client"};t[11]={id:11,fld:"TXT_SCRIPTMODAL",format:1,grid:0};this.A42ConfSist="";this.A41UseCod="";this.AV19RECU_ID="";this.addContextTracker(null,"",["RECU_ID"],this.e130w2_client);this.Events={e130w2_client:["TRACKCONTEXT_GX1_MPAGE",!0],e140w2_client:["REALIZAR CONFIGURACION_MPAGE",!0],e160w2_client:["ENTER_MPAGE",!0],e170w2_client:["CANCEL_MPAGE",!0]};this.EvtParms.REFRESH_MPAGE=[[{av:"A41UseCod",fld:"USECOD_MPAGE",pic:"",hsh:!0},{av:"A42ConfSist",fld:"CONFSIST_MPAGE",pic:"",hsh:!0}],[{av:'gx.fn.getCtrlProperty("TXT_SCRIPTMODAL_MPAGE","Caption")',ctrl:"TXT_SCRIPTMODAL_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTHTML_MPAGE","Caption")',ctrl:"TEXTHTML_MPAGE",prop:"Caption"},{av:"AV19RECU_ID",fld:"vRECU_ID_MPAGE",pic:"@!"},{av:'gx.fn.getCtrlProperty("TEXTHTML2_MPAGE","Caption")',ctrl:"TEXTHTML2_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("ASIDE_CONF1_MPAGE","Caption")',ctrl:"ASIDE_CONF1_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("ASIDE_CONF2_MPAGE","Caption")',ctrl:"ASIDE_CONF2_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTHTML3_MPAGE","Caption")',ctrl:"TEXTHTML3_MPAGE",prop:"Caption"}]];this.EvtParms.START_MPAGE=[[],[{av:'gx.fn.getCtrlProperty("TXT_SCRIPTMODAL_MPAGE","Caption")',ctrl:"TXT_SCRIPTMODAL_MPAGE",prop:"Caption"},{ctrl:"FORM_MPAGE",prop:"Headerrawhtml"},{av:"AV19RECU_ID",fld:"vRECU_ID_MPAGE",pic:"@!"},{av:'gx.fn.getCtrlProperty("BTNCONFIGURACION_MPAGE","Caption")',ctrl:"BTNCONFIGURACION_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTHTML_MPAGE","Caption")',ctrl:"TEXTHTML_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTHTML2_MPAGE","Caption")',ctrl:"TEXTHTML2_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("ASIDE_CONF1_MPAGE","Caption")',ctrl:"ASIDE_CONF1_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("ASIDE_CONF2_MPAGE","Caption")',ctrl:"ASIDE_CONF2_MPAGE",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTHTML3_MPAGE","Caption")',ctrl:"TEXTHTML3_MPAGE",prop:"Caption"}]];this.EvtParms["REALIZAR CONFIGURACION_MPAGE"]=[[{av:"A41UseCod",fld:"USECOD_MPAGE",pic:"",hsh:!0},{av:"A42ConfSist",fld:"CONFSIST_MPAGE",pic:"",hsh:!0}],[{av:"AV27UseCod",fld:"vUSECOD_MPAGE",pic:""},{ctrl:"WC_MPAGE"},{av:'gx.fn.getCtrlProperty("TXT_SCRIPTMODAL_MPAGE","Caption")',ctrl:"TXT_SCRIPTMODAL_MPAGE",prop:"Caption"}]];this.EvtParms.TRACKCONTEXT_GX1_MPAGE=[[{av:"AV19RECU_ID",fld:"vRECU_ID_MPAGE",pic:"@!"}],[]];this.setVCMap("A41UseCod","USECOD_MPAGE",0,"svchar",20,0);this.setVCMap("A42ConfSist","CONFSIST_MPAGE",0,"svchar",3,0);this.setVCMap("AV19RECU_ID","vRECU_ID_MPAGE",0,"svchar",10,0);this.setVCMap("AV19RECU_ID","vRECU_ID_MPAGE",0,"svchar",10,0);this.Initialize();this.setComponent({id:"WC",GXClass:null,Prefix:"MPW0010",lvl:1})});gx.wi(function(){gx.createMasterPage(mpg_seg_nuevo)})