/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:33:15.37
*/
gx.evt.autoSkip=!1;gx.define("wcact_responsables2",!0,function(n){this.ServerClass="wcact_responsables2";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV9SDT_RESPONSABLE=gx.fn.getControlValue("vSDT_RESPONSABLE");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.e180d2_client=function(){return this.clearMessages(),this.refreshOutputs([]),gx.$.Deferred().resolve()};this.e120d2_client=function(){return this.executeServerEvent("'PASAR UNO'",!1,null,!1,!1)};this.e130d2_client=function(){return this.executeServerEvent("'PASAR TODO'",!1,null,!1,!1)};this.e140d2_client=function(){return this.executeServerEvent("'RETORNAR UNO'",!1,null,!1,!1)};this.e150d2_client=function(){return this.executeServerEvent("'RETORNAR TODO'",!1,null,!1,!1)};this.e190d2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e200d2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,7,8,9,10,11,12,13,14,15,18,21,24,25,27,28,29,30,31,32,33,34,35,36,37,38,39,41,42,46,47,48];this.GXLastCtrlId=48;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"MAINTABLE",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"TABLE2",grid:0};t[10]={id:10,fld:"",grid:0};t[11]={id:11,fld:"",grid:0};t[12]={id:12,fld:"TABLE3",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"TABLE9",grid:0};t[18]={id:18,fld:"TEXTBLOCK2",format:0,grid:0};t[21]={id:21,fld:"TEXTBLOCK1",format:0,grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vVARLIS_RESUSECOD",gxz:"ZV13VarLis_ResUseCod",gxold:"OV13VarLis_ResUseCod",gxvar:"AV13VarLis_ResUseCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"listbx",v2v:function(n){n!==undefined&&(gx.O.AV13VarLis_ResUseCod=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13VarLis_ResUseCod=n)},v2c:function(){gx.fn.setComboBoxValue("vVARLIS_RESUSECOD",gx.O.AV13VarLis_ResUseCod)},c2v:function(){this.val()!==undefined&&(gx.O.AV13VarLis_ResUseCod=this.val())},val:function(){return gx.fn.getControlValue("vVARLIS_RESUSECOD")},nac:gx.falseFn};t[27]={id:27,fld:"TABLE1",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"PAGEULTIMA",grid:0,evt:"e130d2_client"};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"PAGESIGUIENTE",grid:0,evt:"e120d2_client"};t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"PAGEANTERIOR",grid:0,evt:"e140d2_client"};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"PAGEPRIMERA",grid:0,evt:"e150d2_client"};t[41]={id:41,fld:"",grid:0};t[42]={id:42,lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,multiline:!0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vVARRES_RESUSECOD",gxz:"ZV14VarRes_ResUseCod",gxold:"OV14VarRes_ResUseCod",gxvar:"AV14VarRes_ResUseCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"listbx",v2v:function(n){n!==undefined&&(gx.O.AV14VarRes_ResUseCod=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14VarRes_ResUseCod=n)},v2c:function(){gx.fn.setComboBoxValue("vVARRES_RESUSECOD",gx.O.AV14VarRes_ResUseCod)},c2v:function(){this.val()!==undefined&&(gx.O.AV14VarRes_ResUseCod=this.val())},val:function(){return gx.fn.getControlValue("vVARRES_RESUSECOD")},nac:gx.falseFn};t[46]={id:46,fld:"",grid:0};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"TEXTNRO",format:0,grid:0};this.AV13VarLis_ResUseCod="";this.ZV13VarLis_ResUseCod="";this.OV13VarLis_ResUseCod="";this.AV14VarRes_ResUseCod="";this.ZV14VarRes_ResUseCod="";this.OV14VarRes_ResUseCod="";this.AV13VarLis_ResUseCod="";this.AV14VarRes_ResUseCod="";this.AV9SDT_RESPONSABLE=[];this.Gx_mode="";this.Events={e120d2_client:["'PASAR UNO'",!0],e130d2_client:["'PASAR TODO'",!0],e140d2_client:["'RETORNAR UNO'",!0],e150d2_client:["'RETORNAR TODO'",!0],e190d2_client:["ENTER",!0],e200d2_client:["CANCEL",!0],e180d2_client:["'ELIMINAR DE LISTA'",!1]};this.EvtParms.REFRESH=[[{av:"AV9SDT_RESPONSABLE",fld:"vSDT_RESPONSABLE",pic:""}],[{av:'gx.fn.getCtrlProperty("TEXTNRO","Caption")',ctrl:"TEXTNRO",prop:"Caption"},{ctrl:"vVARLIS_RESUSECOD"},{av:"AV13VarLis_ResUseCod",fld:"vVARLIS_RESUSECOD",pic:""},{ctrl:"vVARRES_RESUSECOD"},{av:"AV14VarRes_ResUseCod",fld:"vVARRES_RESUSECOD",pic:""},{av:"AV9SDT_RESPONSABLE",fld:"vSDT_RESPONSABLE",pic:""}]];this.EvtParms.START=[[{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[{ctrl:"vVARLIS_RESUSECOD"},{av:"AV13VarLis_ResUseCod",fld:"vVARLIS_RESUSECOD",pic:""},{ctrl:"vVARRES_RESUSECOD"},{av:"AV14VarRes_ResUseCod",fld:"vVARRES_RESUSECOD",pic:""},{av:"AV9SDT_RESPONSABLE",fld:"vSDT_RESPONSABLE",pic:""}]];this.EvtParms["'PASAR UNO'"]=[[{ctrl:"vVARLIS_RESUSECOD"},{av:"AV13VarLis_ResUseCod",fld:"vVARLIS_RESUSECOD",pic:""}],[{av:"AV9SDT_RESPONSABLE",fld:"vSDT_RESPONSABLE",pic:""}]];this.EvtParms["'PASAR TODO'"]=[[],[{av:"AV9SDT_RESPONSABLE",fld:"vSDT_RESPONSABLE",pic:""}]];this.EvtParms["'RETORNAR UNO'"]=[[{ctrl:"vVARRES_RESUSECOD"},{av:"AV14VarRes_ResUseCod",fld:"vVARRES_RESUSECOD",pic:""}],[{av:"AV9SDT_RESPONSABLE",fld:"vSDT_RESPONSABLE",pic:""}]];this.EvtParms["'RETORNAR TODO'"]=[[],[{av:"AV9SDT_RESPONSABLE",fld:"vSDT_RESPONSABLE",pic:""}]];this.EvtParms["'ELIMINAR DE LISTA'"]=[[],[]];this.setVCMap("AV9SDT_RESPONSABLE","vSDT_RESPONSABLE",0,"CollSDT_RESPONSABLE",0,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()})