/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:35:23.99
*/
gx.evt.autoSkip=!1;gx.define("recuperar_clave",!1,function(){this.ServerClass="recuperar_clave";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e14142_client=function(){return this.clearMessages(),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e15142_client=function(){return this.clearMessages(),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e12142_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e16141_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21];this.GXLastCtrlId=21;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"LOGIN_BOX",grid:0};n[7]={id:7,fld:"LOGIN_LOGO",grid:0};n[8]={id:8,fld:"IMAGE1",grid:0};n[9]={id:9,fld:"LOGIN_BOX_BODY",grid:0};n[10]={id:10,fld:"TEXTO_AYUDA",format:2,grid:0};n[11]={id:11,fld:"SECTION1",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,lvl:0,type:"svchar",len:64,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSUA_USUARIO",gxz:"ZV17USUA_USUARIO",gxold:"OV17USUA_USUARIO",gxvar:"AV17USUA_USUARIO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV17USUA_USUARIO=n)},v2z:function(n){n!==undefined&&(gx.O.ZV17USUA_USUARIO=n)},v2c:function(){gx.fn.setControlValue("vUSUA_USUARIO",gx.O.AV17USUA_USUARIO,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV17USUA_USUARIO=this.val())},val:function(){return gx.fn.getControlValue("vUSUA_USUARIO")},nac:gx.falseFn};n[14]={id:14,fld:"ICONUSER",format:2,grid:0};n[16]={id:16,fld:"TABLE1",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"CANCEL",grid:0,evt:"e16141_client"};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"INICIARSESION",grid:0,evt:"e12142_client",std:"ENTER"};this.AV17USUA_USUARIO="";this.ZV17USUA_USUARIO="";this.OV17USUA_USUARIO="";this.AV17USUA_USUARIO="";this.Events={e12142_client:["ENTER",!0],e16141_client:["CANCEL",!0],e14142_client:["'OLVIDE MI CLAVE'",!1],e15142_client:["'NO SOY USUARIO'",!1]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[{av:"AV17USUA_USUARIO",fld:"vUSUA_USUARIO",pic:""},{av:"AV16USUA_CLAVE",fld:"vUSUA_CLAVE",pic:""},{av:"AV13NoCerrarSesion",fld:"vNOCERRARSESION",pic:"ZZZ9"},{av:"AV23Pgmname",fld:"vPGMNAME",pic:""},{av:"AV18VALOR",fld:"vVALOR",pic:""},{av:"Gx_date",fld:"vTODAY",pic:""}],[{ctrl:"FORM",prop:"Headerrawhtml"},{av:'gx.fn.getCtrlProperty("ICONUSER","Caption")',ctrl:"ICONUSER",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTO_AYUDA","Caption")',ctrl:"TEXTO_AYUDA",prop:"Caption"},{av:"AV13NoCerrarSesion",fld:"vNOCERRARSESION",pic:"ZZZ9"},{av:"AV17USUA_USUARIO",fld:"vUSUA_USUARIO",pic:""},{av:"AV16USUA_CLAVE",fld:"vUSUA_CLAVE",pic:""}]];this.EvtParms.ENTER=[[{av:"AV17USUA_USUARIO",fld:"vUSUA_USUARIO",pic:""}],[{av:"AV17USUA_USUARIO",fld:"vUSUA_USUARIO",pic:""}]];this.EvtParms["'OLVIDE MI CLAVE'"]=[[],[]];this.EvtParms["'NO SOY USUARIO'"]=[[],[]];this.EnterCtrl=["INICIARSESION"];this.Initialize()});gx.setParentObj(new recuperar_clave)