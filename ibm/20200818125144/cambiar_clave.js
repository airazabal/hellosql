/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:35:19.75
*/
gx.evt.autoSkip=!1;gx.define("cambiar_clave",!1,function(){this.ServerClass="cambiar_clave";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e11101_client=function(){return this.clearMessages(),this.call("inicio.aspx",[]),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e13102_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e15102_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33];this.GXLastCtrlId=33;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"LOGIN_BOX",grid:0};n[7]={id:7,fld:"LOGIN_LOGO",grid:0};n[8]={id:8,fld:"IMAGE1",grid:0};n[9]={id:9,fld:"LOGIN_BOX_BODY",grid:0};n[10]={id:10,fld:"TEXTO_AYUDA",format:2,grid:0};n[11]={id:11,fld:"SECTION1",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,lvl:0,type:"svchar",len:64,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSUA_USUARIO",gxz:"ZV13USUA_USUARIO",gxold:"OV13USUA_USUARIO",gxvar:"AV13USUA_USUARIO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13USUA_USUARIO=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13USUA_USUARIO=n)},v2c:function(){gx.fn.setControlValue("vUSUA_USUARIO",gx.O.AV13USUA_USUARIO,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13USUA_USUARIO=this.val())},val:function(){return gx.fn.getControlValue("vUSUA_USUARIO")},nac:gx.falseFn};n[14]={id:14,fld:"ICONUSER",format:2,grid:0};n[15]={id:15,fld:"SECTION2",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,lvl:0,type:"svchar",len:40,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUSUA_CLAVE",gxz:"ZV12USUA_Clave",gxold:"OV12USUA_Clave",gxvar:"AV12USUA_Clave",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12USUA_Clave=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12USUA_Clave=n)},v2c:function(){gx.fn.setControlValue("vUSUA_CLAVE",gx.O.AV12USUA_Clave,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12USUA_Clave=this.val())},val:function(){return gx.fn.getControlValue("vUSUA_CLAVE")},nac:gx.falseFn};n[18]={id:18,fld:"ICONPASS",format:2,grid:0};n[19]={id:19,fld:"SECTION3",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,lvl:0,type:"char",len:64,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNUE1_USEPASS",gxz:"ZV10nue1_UsePass",gxold:"OV10nue1_UsePass",gxvar:"AV10nue1_UsePass",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV10nue1_UsePass=n)},v2z:function(n){n!==undefined&&(gx.O.ZV10nue1_UsePass=n)},v2c:function(){gx.fn.setControlValue("vNUE1_USEPASS",gx.O.AV10nue1_UsePass,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV10nue1_UsePass=this.val())},val:function(){return gx.fn.getControlValue("vNUE1_USEPASS")},nac:gx.falseFn};n[22]={id:22,fld:"ICONPASS1",format:2,grid:0};n[23]={id:23,fld:"SECTION4",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"char",len:64,dec:0,sign:!1,isPwd:!0,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vNUE2_USEPASS",gxz:"ZV11nue2_UsePass",gxold:"OV11nue2_UsePass",gxvar:"AV11nue2_UsePass",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11nue2_UsePass=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11nue2_UsePass=n)},v2c:function(){gx.fn.setControlValue("vNUE2_USEPASS",gx.O.AV11nue2_UsePass,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11nue2_UsePass=this.val())},val:function(){return gx.fn.getControlValue("vNUE2_USEPASS")},nac:gx.falseFn};n[26]={id:26,fld:"ICONPASS2",format:2,grid:0};n[28]={id:28,fld:"TABLE1",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"SALIR",grid:0,evt:"e11101_client"};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"NUEVACLAVE",grid:0,evt:"e13102_client",std:"ENTER"};this.AV13USUA_USUARIO="";this.ZV13USUA_USUARIO="";this.OV13USUA_USUARIO="";this.AV12USUA_Clave="";this.ZV12USUA_Clave="";this.OV12USUA_Clave="";this.AV10nue1_UsePass="";this.ZV10nue1_UsePass="";this.OV10nue1_UsePass="";this.AV11nue2_UsePass="";this.ZV11nue2_UsePass="";this.OV11nue2_UsePass="";this.AV13USUA_USUARIO="";this.AV12USUA_Clave="";this.AV10nue1_UsePass="";this.AV11nue2_UsePass="";this.Events={e13102_client:["ENTER",!0],e15102_client:["CANCEL",!0],e11101_client:["'SALIR'",!1]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[{av:"AV13USUA_USUARIO",fld:"vUSUA_USUARIO",pic:""},{av:"AV12USUA_Clave",fld:"vUSUA_CLAVE",pic:""},{av:"AV8NoCerrarSesion",fld:"vNOCERRARSESION",pic:"ZZZ9"}],[{ctrl:"FORM",prop:"Headerrawhtml"},{av:'gx.fn.getCtrlProperty("ICONUSER","Caption")',ctrl:"ICONUSER",prop:"Caption"},{av:'gx.fn.getCtrlProperty("ICONPASS","Caption")',ctrl:"ICONPASS",prop:"Caption"},{av:'gx.fn.getCtrlProperty("ICONPASS1","Caption")',ctrl:"ICONPASS1",prop:"Caption"},{av:'gx.fn.getCtrlProperty("ICONPASS2","Caption")',ctrl:"ICONPASS2",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTO_AYUDA","Caption")',ctrl:"TEXTO_AYUDA",prop:"Caption"},{av:"AV8NoCerrarSesion",fld:"vNOCERRARSESION",pic:"ZZZ9"},{av:"AV13USUA_USUARIO",fld:"vUSUA_USUARIO",pic:""},{av:"AV12USUA_Clave",fld:"vUSUA_CLAVE",pic:""}]];this.EvtParms.ENTER=[[{av:"AV13USUA_USUARIO",fld:"vUSUA_USUARIO",pic:""},{av:"AV12USUA_Clave",fld:"vUSUA_CLAVE",pic:""},{av:"AV10nue1_UsePass",fld:"vNUE1_USEPASS",pic:""},{av:"AV11nue2_UsePass",fld:"vNUE2_USEPASS",pic:""}],[{av:"AV13USUA_USUARIO",fld:"vUSUA_USUARIO",pic:""},{av:"AV12USUA_Clave",fld:"vUSUA_CLAVE",pic:""},{av:"AV10nue1_UsePass",fld:"vNUE1_USEPASS",pic:""},{av:"AV11nue2_UsePass",fld:"vNUE2_USEPASS",pic:""}]];this.EvtParms["'SALIR'"]=[[],[]];this.EnterCtrl=["NUEVACLAVE"];this.Initialize()});gx.setParentObj(new cambiar_clave)