/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:33:23.81
*/
gx.evt.autoSkip=!1;gx.define("trn_act_tablero_configuraciones",!0,function(n){this.ServerClass="trn_act_tablero_configuraciones";this.PackageName="GeneXus.Programs";this.setObjectType("trn");this.setCmpContext(n);this.ReadonlyForm=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV7TABL_ID=gx.fn.getIntegerValue("vTABL_ID",",");this.A554TABL_FECHA=gx.fn.getDateTimeValue("TABL_FECHA");this.A72TABL_USUARIO=gx.fn.getControlValue("TABL_USUARIO");this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",",");this.A73TABL_EST_REG=gx.fn.getControlValue("TABL_EST_REG");this.A556TABL_NOMBRE=gx.fn.getControlValue("TABL_NOMBRE");this.A542TABL_DESCRIPCION=gx.fn.getControlValue("TABL_DESCRIPCION");this.AV12Pgmdesc=gx.fn.getControlValue("vPGMDESC");this.Gx_mode=gx.fn.getControlValue("vMODE")};this.Valid_Tabl_id=function(){return this.validSrvEvt("Valid_Tabl_id",0).then(function(n){return n}.closure(this))};this.Valid_Tabl_fecha_visualizacion=function(){return this.validCliEvt("Valid_Tabl_fecha_visualizacion",0,function(){try{var n=gx.util.balloon.getNew("TABL_FECHA_VISUALIZACION");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.A555TABL_FECHA_VISUALIZACION)==0||new gx.date.gxdate(this.A555TABL_FECHA_VISUALIZACION).compare(gx.date.ymdtod(1753,1,1))>=0))try{n.setError("Campo Visualizar desde fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}this.refreshOutputs([{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tabl_tareas_ver=function(){return this.validCliEvt("Valid_Tabl_tareas_ver",0,function(){try{var n=gx.util.balloon.getNew("TABL_TAREAS_VER");if(this.AnyError=0,!(this.A568TABL_TAREAS_VER=="T"||this.A568TABL_TAREAS_VER=="M"||this.A568TABL_TAREAS_VER=="C"||""==this.A568TABL_TAREAS_VER))try{n.setError("Campo Tareas a Visualizar fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}this.refreshOutputs([{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){gx.fn.setCtrlProperty("TXT_SCRIPT","Caption","<script>$('#MYMODAL').modal('hide')<\/script>")};this.e110y29_client=function(){return this.clearMessages(),this.s112_client(),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}]),gx.$.Deferred().resolve()};this.e130y2_client=function(){return this.executeServerEvent("AFTER TRN",!0,null,!1,!1)};this.e140y29_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e150y29_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var t=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49];this.GXLastCtrlId=49;t[2]={id:2,fld:"",grid:0};t[3]={id:3,fld:"TABLEMAIN",grid:0};t[4]={id:4,fld:"",grid:0};t[5]={id:5,fld:"",grid:0};t[6]={id:6,fld:"TEXT_HTML",format:2,grid:0};t[7]={id:7,fld:"",grid:0};t[8]={id:8,fld:"",grid:0};t[9]={id:9,fld:"MODAL_DIALOG",grid:0};t[10]={id:10,fld:"MODAL_CONTENT",grid:0};t[11]={id:11,fld:"MODAL_HEADER",grid:0};t[12]={id:12,fld:"TXT_CABECERA",format:1,grid:0};t[13]={id:13,fld:"MODAL_BODY",grid:0};t[14]={id:14,fld:"TABLE1",grid:0};t[15]={id:15,fld:"",grid:0};t[16]={id:16,fld:"",grid:0};t[17]={id:17,fld:"",grid:0};t[18]={id:18,fld:"",grid:0};t[19]={id:19,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabl_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_ID",gxz:"Z71TABL_ID",gxold:"O71TABL_ID",gxvar:"A71TABL_ID",ucs:[],op:[37,33],ip:[37,33,19],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A71TABL_ID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z71TABL_ID=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("TABL_ID",gx.O.A71TABL_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A71TABL_ID=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TABL_ID",",")},nac:function(){return!(this.Gx_mode=="INS")}};this.declareDomainHdlr(19,function(){});t[20]={id:20,fld:"",grid:0};t[21]={id:21,fld:"",grid:0};t[22]={id:22,fld:"",grid:0};t[23]={id:23,fld:"",grid:0};t[24]={id:24,lvl:0,type:"svchar",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARE_ADMI_PARALELO",gxz:"Z591TARE_ADMI_PARALELO",gxold:"O591TARE_ADMI_PARALELO",gxvar:"A591TARE_ADMI_PARALELO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A591TARE_ADMI_PARALELO=n)},v2z:function(n){n!==undefined&&(gx.O.Z591TARE_ADMI_PARALELO=n)},v2c:function(){gx.fn.setComboBoxValue("TARE_ADMI_PARALELO",gx.O.A591TARE_ADMI_PARALELO)},c2v:function(){this.val()!==undefined&&(gx.O.A591TARE_ADMI_PARALELO=this.val())},val:function(){return gx.fn.getControlValue("TARE_ADMI_PARALELO")},nac:gx.falseFn};t[25]={id:25,fld:"",grid:0};t[26]={id:26,fld:"",grid:0};t[27]={id:27,fld:"",grid:0};t[28]={id:28,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabl_fecha_visualizacion,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_FECHA_VISUALIZACION",gxz:"Z555TABL_FECHA_VISUALIZACION",gxold:"O555TABL_FECHA_VISUALIZACION",gxvar:"A555TABL_FECHA_VISUALIZACION",ucs:[],op:[28],ip:[28],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.A555TABL_FECHA_VISUALIZACION=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z555TABL_FECHA_VISUALIZACION=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("TABL_FECHA_VISUALIZACION",gx.O.A555TABL_FECHA_VISUALIZACION,0)},c2v:function(){this.val()!==undefined&&(gx.O.A555TABL_FECHA_VISUALIZACION=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("TABL_FECHA_VISUALIZACION")},nac:gx.falseFn};t[29]={id:29,fld:"",grid:0};t[30]={id:30,fld:"",grid:0};t[31]={id:31,fld:"",grid:0};t[32]={id:32,fld:"",grid:0};t[33]={id:33,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARE_ESTADO_PLAY",gxz:"Z602TARE_ESTADO_PLAY",gxold:"O602TARE_ESTADO_PLAY",gxvar:"A602TARE_ESTADO_PLAY",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.A602TARE_ESTADO_PLAY=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z602TARE_ESTADO_PLAY=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("TARE_ESTADO_PLAY",gx.O.A602TARE_ESTADO_PLAY);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A602TARE_ESTADO_PLAY=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TARE_ESTADO_PLAY",",")},nac:gx.falseFn};this.declareDomainHdlr(33,function(){});t[34]={id:34,fld:"",grid:0};t[35]={id:35,fld:"",grid:0};t[36]={id:36,fld:"",grid:0};t[37]={id:37,lvl:0,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARE_ESTADO_STOP",gxz:"Z603TARE_ESTADO_STOP",gxold:"O603TARE_ESTADO_STOP",gxvar:"A603TARE_ESTADO_STOP",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.A603TARE_ESTADO_STOP=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z603TARE_ESTADO_STOP=gx.num.intval(n))},v2c:function(){gx.fn.setComboBoxValue("TARE_ESTADO_STOP",gx.O.A603TARE_ESTADO_STOP);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A603TARE_ESTADO_STOP=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("TARE_ESTADO_STOP",",")},nac:gx.falseFn};this.declareDomainHdlr(37,function(){});t[38]={id:38,fld:"",grid:0};t[39]={id:39,fld:"",grid:0};t[40]={id:40,fld:"",grid:0};t[41]={id:41,fld:"",grid:0};t[42]={id:42,lvl:0,type:"svchar",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Tabl_tareas_ver,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_TAREAS_VER",gxz:"Z568TABL_TAREAS_VER",gxold:"O568TABL_TAREAS_VER",gxvar:"A568TABL_TAREAS_VER",ucs:[],op:[42],ip:[42],nacdep:[],ctrltype:"combo",v2v:function(n){n!==undefined&&(gx.O.A568TABL_TAREAS_VER=n)},v2z:function(n){n!==undefined&&(gx.O.Z568TABL_TAREAS_VER=n)},v2c:function(){gx.fn.setComboBoxValue("TABL_TAREAS_VER",gx.O.A568TABL_TAREAS_VER);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.A568TABL_TAREAS_VER=this.val())},val:function(){return gx.fn.getControlValue("TABL_TAREAS_VER")},nac:gx.falseFn};this.declareDomainHdlr(42,function(){});t[43]={id:43,fld:"MODAL_FOOTER",grid:0};t[44]={id:44,fld:"",grid:0};t[45]={id:45,fld:"",grid:0};t[46]={id:46,fld:"BTN_CANCEL",grid:0,evt:"e110y29_client"};t[47]={id:47,fld:"",grid:0};t[48]={id:48,fld:"BTN_ENTER",grid:0,evt:"e140y29_client",std:"ENTER"};t[49]={id:49,fld:"TXT_SCRIPT",format:1,grid:0};this.A71TABL_ID=0;this.Z71TABL_ID=0;this.O71TABL_ID=0;this.A591TARE_ADMI_PARALELO="";this.Z591TARE_ADMI_PARALELO="";this.O591TARE_ADMI_PARALELO="";this.A555TABL_FECHA_VISUALIZACION=gx.date.nullDate();this.Z555TABL_FECHA_VISUALIZACION=gx.date.nullDate();this.O555TABL_FECHA_VISUALIZACION=gx.date.nullDate();this.A602TARE_ESTADO_PLAY=0;this.Z602TARE_ESTADO_PLAY=0;this.O602TARE_ESTADO_PLAY=0;this.A603TARE_ESTADO_STOP=0;this.Z603TARE_ESTADO_STOP=0;this.O603TARE_ESTADO_STOP=0;this.A568TABL_TAREAS_VER="";this.Z568TABL_TAREAS_VER="";this.O568TABL_TAREAS_VER="";this.AV12Pgmdesc="";this.AV7TABL_ID=0;this.AV9WEBSESSION={};this.A71TABL_ID=0;this.A554TABL_FECHA=gx.date.nullDate();this.A72TABL_USUARIO="";this.Gx_BScreen=0;this.A556TABL_NOMBRE="";this.A542TABL_DESCRIPCION="";this.A591TARE_ADMI_PARALELO="";this.A555TABL_FECHA_VISUALIZACION=gx.date.nullDate();this.A602TARE_ESTADO_PLAY=0;this.A603TARE_ESTADO_STOP=0;this.A568TABL_TAREAS_VER="";this.A73TABL_EST_REG="";this.Gx_mode="";this.Events={e130y2_client:["AFTER TRN",!0],e140y29_client:["ENTER",!0],e150y29_client:["CANCEL",!0],e110y29_client:["'SALIR'",!1]};this.EvtParms.ENTER=[[{postForm:!0},{sPrefix:!0},{sSFPrefix:!0},{sCompEvt:!0},{av:"AV7TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}],[{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}]];this.EvtParms.REFRESH=[[{av:"A556TABL_NOMBRE",fld:"TABL_NOMBRE",pic:"",hsh:!0},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"A542TABL_DESCRIPCION",fld:"TABL_DESCRIPCION",pic:""},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}],[{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}]];this.EvtParms.START=[[{av:"AV12Pgmdesc",fld:"vPGMDESC",pic:""},{av:'gx.fn.getCtrlProperty("TEXT_HTML","Caption")',ctrl:"TEXT_HTML",prop:"Caption"},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}],[{av:'gx.fn.getCtrlProperty("TXT_CABECERA","Caption")',ctrl:"TXT_CABECERA",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TABL_ID","Visible")',ctrl:"TABL_ID",prop:"Visible"},{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXT_HTML","Caption")',ctrl:"TEXT_HTML",prop:"Caption"},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}]];this.EvtParms["AFTER TRN"]=[[{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"A556TABL_NOMBRE",fld:"TABL_NOMBRE",pic:"",hsh:!0},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}],[{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}]];this.EvtParms["'SALIR'"]=[[{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}],[{av:'gx.fn.getCtrlProperty("TXT_SCRIPT","Caption")',ctrl:"TXT_SCRIPT",prop:"Caption"},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}]];this.EvtParms.VALID_TABL_ID=[[{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}],[{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}]];this.EvtParms.VALID_TABL_FECHA_VISUALIZACION=[[{av:"A555TABL_FECHA_VISUALIZACION",fld:"TABL_FECHA_VISUALIZACION",pic:""},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}],[{av:"A555TABL_FECHA_VISUALIZACION",fld:"TABL_FECHA_VISUALIZACION",pic:""},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}]];this.EvtParms.VALID_TABL_TAREAS_VER=[[{ctrl:"TABL_TAREAS_VER"},{av:"A568TABL_TAREAS_VER",fld:"TABL_TAREAS_VER",pic:""},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}],[{ctrl:"TABL_TAREAS_VER"},{av:"A568TABL_TAREAS_VER",fld:"TABL_TAREAS_VER",pic:""},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_PLAY"},{av:"A602TARE_ESTADO_PLAY",fld:"TARE_ESTADO_PLAY",pic:"ZZZZZZZZZ9"},{ctrl:"TARE_ESTADO_STOP"},{av:"A603TARE_ESTADO_STOP",fld:"TARE_ESTADO_STOP",pic:"ZZZZZZZZZ9"}]];this.EnterCtrl=["BTN_ENTER"];this.setVCMap("AV7TABL_ID","vTABL_ID",0,"int",10,0);this.setVCMap("A554TABL_FECHA","TABL_FECHA",0,"dtime",10,8);this.setVCMap("A72TABL_USUARIO","TABL_USUARIO",0,"svchar",20,0);this.setVCMap("Gx_BScreen","vGXBSCREEN",0,"int",1,0);this.setVCMap("A73TABL_EST_REG","TABL_EST_REG",0,"svchar",1,0);this.setVCMap("A556TABL_NOMBRE","TABL_NOMBRE",0,"svchar",50,0);this.setVCMap("A542TABL_DESCRIPCION","TABL_DESCRIPCION",0,"svchar",600,0);this.setVCMap("AV12Pgmdesc","vPGMDESC",0,"char",30,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.Initialize()})