/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:33:23.45
*/
gx.evt.autoSkip=!1;gx.define("trn_act_configuracion_tablero_estado",!0,function(n){this.ServerClass="trn_act_configuracion_tablero_estado";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV12TABL_EST_ID=gx.fn.getIntegerValue("vTABL_EST_ID",",");this.A546TABL_EST_SERIAL=gx.fn.getIntegerValue("TABL_EST_SERIAL",",");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",",");this.A77TABL_EST_EST=gx.fn.getControlValue("TABL_EST_EST");this.A556TABL_NOMBRE=gx.fn.getControlValue("TABL_NOMBRE");this.A542TABL_DESCRIPCION=gx.fn.getControlValue("TABL_DESCRIPCION");this.AV14Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Tabl_id=function(){return this.validCliEvt("Valid_Tabl_id",0,function(){try{var n=gx.util.balloon.getNew("TABL_ID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tabl_est_id=function(){return this.validCliEvt("Valid_Tabl_est_id",0,function(){try{var n=gx.util.balloon.getNew("TABL_EST_ID");this.AnyError=0}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tabl_est_nombre=function(){return this.validSrvEvt("Valid_Tabl_est_nombre",0).then(function(n){return n}.closure(this))};this.Valid_Tabl_est_tipo=function(){return this.validCliEvt("Valid_Tabl_est_tipo",0,function(){try{var n=gx.util.balloon.getNew("TABL_EST_TIPO");if(this.AnyError=0,!(this.A545TABL_EST_TIPO==1||this.A545TABL_EST_TIPO==2||this.A545TABL_EST_TIPO==3||0==this.A545TABL_EST_TIPO))try{n.setError("Campo Tipo de Estado fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){gx.fn.setCtrlProperty("TXT_SCRIPT","Caption","<script>$('#MYMODAL').modal('hide')<\/script>")};this.e110t30_client=function(){return this.clearMessages(),this.s112_client(),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"}]),gx.$.Deferred().resolve()};this.e130t2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e140t30_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e150t30_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46];this.GXLastCtrlId=46;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"TABLEMAIN",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"MODAL_DIALOG",grid:0};t[7]={id:7,fld:"MODAL_CONTENT",grid:0};t[8]={id:8,fld:"MODAL_HEADER",grid:0};t[9]={id:9,fld:"TXT_CABECERA",format:1,grid:0};t[10]={id:10,fld:"MODAL_BODY",grid:0};t[11]={id:11,fld:"TABLE1",grid:0};t[12]={id:12,fld:"",grid:0};t[13]={id:13,fld:"",grid:0};t[14]={id:14,fld:"",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Tabl_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_ID",gxz:"Z71TABL_ID",gxold:"O71TABL_ID",gxvar:"A71TABL_ID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A71TABL_ID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z71TABL_ID=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TABL_ID",gx.O.A71TABL_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A71TABL_ID=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TABL_ID",",")},nac:gx.falseFn};this.declareDomainHdlr(16,function(){});t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,fld:"",grid:0};t[20]={id:20,fld:"",grid:0};t[21]={id:21,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabl_est_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_EST_ID",gxz:"Z74TABL_EST_ID",gxold:"O74TABL_EST_ID",gxvar:"A74TABL_EST_ID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A74TABL_EST_ID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z74TABL_EST_ID=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TABL_EST_ID",gx.O.A74TABL_EST_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A74TABL_EST_ID=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TABL_EST_ID",",")},nac:function(){return!(this.Gx_mode=="INS")}};this.declareDomainHdlr(21,function(){});t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,fld:"",grid:0};t[25]={id:25,fld:"",grid:0};t[26]={id:26,lvl:0,type:"svchar",len:80,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabl_est_nombre,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_EST_NOMBRE",gxz:"Z75TABL_EST_NOMBRE",gxold:"O75TABL_EST_NOMBRE",gxvar:"A75TABL_EST_NOMBRE",ucs:[],op:[26],ip:[21,26,16],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A75TABL_EST_NOMBRE=n)},v2z:function(n){n!==undefined&&(gx.O.Z75TABL_EST_NOMBRE=n)},v2c:function(){gx.fn.setControlValue("TABL_EST_NOMBRE",gx.O.A75TABL_EST_NOMBRE,0)},c2v:function(){this.val()!==undefined&&(gx.O.A75TABL_EST_NOMBRE=this.val())},val:function(){return gx.fn.getControlValue("TABL_EST_NOMBRE")},nac:gx.falseFn};t[27]={id:27,fld:"",grid:0};t[28]={id:28,fld:"",grid:0};t[29]={id:29,fld:"",grid:0};t[30]={id:30,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabl_est_tipo,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_EST_TIPO",gxz:"Z545TABL_EST_TIPO",gxold:"O545TABL_EST_TIPO",gxvar:"A545TABL_EST_TIPO",ucs:[],op:[30],ip:[30],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A545TABL_EST_TIPO=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z545TABL_EST_TIPO=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("TABL_EST_TIPO",gx.O.A545TABL_EST_TIPO);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A545TABL_EST_TIPO=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TABL_EST_TIPO",",")},nac:gx.falseFn};this.declareDomainHdlr(30,function(){});t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,fld:"",grid:0};t[34]={id:34,fld:"",grid:0};t[35]={id:35,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_EST_NUEVO_REG",gxz:"Z544TABL_EST_NUEVO_REG",gxold:"O544TABL_EST_NUEVO_REG",gxvar:"A544TABL_EST_NUEVO_REG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A544TABL_EST_NUEVO_REG=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z544TABL_EST_NUEVO_REG=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("TABL_EST_NUEVO_REG",gx.O.A544TABL_EST_NUEVO_REG)},c2v:function(){this.val()!==undefined&&(gx.O.A544TABL_EST_NUEVO_REG=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TABL_EST_NUEVO_REG",",")},nac:gx.falseFn};t[36]={id:36,fld:"",grid:0};t[37]={id:37,fld:"",grid:0};t[38]={id:38,fld:"",grid:0};t[39]={id:39,lvl:0,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_EST_ORDEN",gxz:"Z76TABL_EST_ORDEN",gxold:"O76TABL_EST_ORDEN",gxvar:"A76TABL_EST_ORDEN",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A76TABL_EST_ORDEN=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z76TABL_EST_ORDEN=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TABL_EST_ORDEN",gx.O.A76TABL_EST_ORDEN,0)},c2v:function(){this.val()!==undefined&&(gx.O.A76TABL_EST_ORDEN=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TABL_EST_ORDEN",",")},nac:gx.falseFn};t[40]={id:40,fld:"MODAL_FOOTER",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,fld:"",grid:0};t[43]={id:43,fld:"BTN_CANCEL",grid:0,evt:"e110t30_client"};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"BTN_ENTER",grid:0,evt:"e140t30_client",std:"ENTER"};t[46]={id:46,fld:"TXT_SCRIPT",format:1,grid:0};this.A71TABL_ID=0;this.Z71TABL_ID=0;this.O71TABL_ID=0;this.A74TABL_EST_ID=0;this.Z74TABL_EST_ID=0;this.O74TABL_EST_ID=0;this.A75TABL_EST_NOMBRE="";this.Z75TABL_EST_NOMBRE="";this.O75TABL_EST_NOMBRE="";this.A545TABL_EST_TIPO=0;this.Z545TABL_EST_TIPO=0;this.O545TABL_EST_TIPO=0;this.A544TABL_EST_NUEVO_REG=0;this.Z544TABL_EST_NUEVO_REG=0;this.O544TABL_EST_NUEVO_REG=0;this.A76TABL_EST_ORDEN=0;this.Z76TABL_EST_ORDEN=0;this.O76TABL_EST_ORDEN=0;this.AV14Pgmdesc="";this.A71TABL_ID=0;this.AV12TABL_EST_ID=0;this.AV9WEBSESSION={};this.A74TABL_EST_ID=0;this.A546TABL_EST_SERIAL=0;this.Gx_BScreen=0;this.A556TABL_NOMBRE="";this.A542TABL_DESCRIPCION="";this.A75TABL_EST_NOMBRE="";this.A76TABL_EST_ORDEN=0;this.A545TABL_EST_TIPO=0;this.A544TABL_EST_NUEVO_REG=0;this.A77TABL_EST_EST="";this.Gx_mode="";this.Events={e130t2_client:["AFTER TRN",!0],e140t30_client:["ENTER",!0],e150t30_client:["CANCEL",!0],e110t30_client:["'SALIR'",!1]};this.EvtParms.ENTER=[[{postForm:!0},{sPrefix:!0},{sSFPrefix:!0},{sCompEvt:!0},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{av:"AV12TABL_EST_ID",fld:"vTABL_EST_ID",pic:"ZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[]];this.EvtParms.REFRESH=[[{av:"Gx_mode",fld:"vMODE",pic:"@!"}],[]];this.EvtParms.START=[[{av:"AV14Pgmdesc",fld:"vPGMDESC",pic:""}],[{av:'gx.fn.getCtrlProperty("TXT_CABECERA","Caption")',ctrl:"TXT_CABECERA",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TABL_ID","Visible")',ctrl:"TABL_ID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TABL_EST_ID","Visible")',ctrl:"TABL_EST_ID",prop:"Visible"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"A75TABL_EST_NOMBRE",fld:"TABL_EST_NOMBRE",pic:""}],[{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"}]];this.EvtParms["'SALIR'"]=[[],[{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"}]];this.EvtParms.VALID_TABL_ID=[[],[]];this.EvtParms.VALID_TABL_EST_ID=[[],[]];this.EvtParms.VALID_TABL_EST_NOMBRE=[[{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{av:"A75TABL_EST_NOMBRE",fld:"TABL_EST_NOMBRE",pic:""},{av:"A74TABL_EST_ID",fld:"TABL_EST_ID",pic:"ZZZZZZZZZ9"}],[]];this.EvtParms.VALID_TABL_EST_TIPO=[[{ctrl:"TABL_EST_TIPO"},{av:"A545TABL_EST_TIPO",fld:"TABL_EST_TIPO",pic:"ZZZ9"}],[{ctrl:"TABL_EST_TIPO"},{av:"A545TABL_EST_TIPO",fld:"TABL_EST_TIPO",pic:"ZZZ9"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("AV12TABL_EST_ID","vTABL_EST_ID",0,"int",10,0);this.setVCMap("A546TABL_EST_SERIAL","TABL_EST_SERIAL",0,"int",10,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("A77TABL_EST_EST","TABL_EST_EST",0,"svchar",1,0);this.setVCMap("A556TABL_NOMBRE","TABL_NOMBRE",0,"svchar",50,0);this.setVCMap("A542TABL_DESCRIPCION","TABL_DESCRIPCION",0,"svchar",600,0);this.setVCMap("AV14Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize();this.LvlOlds[30]=["O546TABL_EST_SERIAL"]})