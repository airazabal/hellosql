/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:33:9.28
*/
gx.evt.autoSkip=!1;gx.define("wbc_act_eliminar_proyecto",!0,function(n){this.ServerClass="wbc_act_eliminar_proyecto";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV8ProyId=gx.fn.getControlValue("vPROYID");this.AV9ProyNom=gx.fn.getControlValue("vPROYNOM")};this.s112_client=function(){gx.fn.setCtrlProperty("TXT_SCRIPT","Caption","<script>$('#MYMODAL').modal('hide')<\/script>")};this.e111s1_client=function(){return this.clearMessages(),this.s112_client(),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"}]),gx.$.Deferred().resolve()};this.e131s2_client=function(){return this.executeServerEvent("'GUARDAR'",!1,null,!1,!1)};this.e151s2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e161s2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];this.GXLastCtrlId=21;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"MODAL_DIALOG",grid:0};t[7]={id:7,fld:"MODAL_CONTENT",grid:0};t[8]={id:8,fld:"MODAL_HEADER",grid:0};t[9]={id:9,fld:"TXT_CABECERA",format:1,grid:0};t[10]={id:10,fld:"MODAL_BODY",grid:0};t[11]={id:11,fld:"TABLE1",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"MENSAJE_HTML",format:2,grid:0};t[15]={id:15,fld:"MODAL_FOOTER",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"BUTTON2",grid:0,evt:"e111s1_client"};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"BUTTON1",grid:0,evt:"e131s2_client"};t[21]={id:21,fld:"TXT_SCRIPT",format:1,grid:0};this.AV8ProyId="";this.AV9ProyNom="";this.Events={e131s2_client:["'GUARDAR'",!0],e151s2_client:["ENTER",!0],e161s2_client:["CANCEL",!0],e111s1_client:["'SALIR'",!1]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.START=[[{av:"AV12Pgmdesc",fld:"vPGMDESC",pic:""},{av:"AV9ProyNom",fld:"vPROYNOM",pic:""}],[{av:'gx.fn.getCtrlProperty("TXT_CABECERA","Caption")',ctrl:"TXT_CABECERA",prop:"Caption"},{av:'gx.fn.getCtrlProperty("MENSAJE_HTML","Caption")',ctrl:"MENSAJE_HTML",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"}]];this.EvtParms["'GUARDAR'"]=[[{av:"AV8ProyId",fld:"vPROYID",pic:""},{av:"AV9ProyNom",fld:"vPROYNOM",pic:""}],[{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"}]];this.EvtParms["'SALIR'"]=[[],[{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"}]];this.setVCMap("AV8ProyId","vPROYID",0,"svchar",20,0);this.setVCMap("AV9ProyNom","vPROYNOM",0,"svchar",140,0);this.Initialize()})