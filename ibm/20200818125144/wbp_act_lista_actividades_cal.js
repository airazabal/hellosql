/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:35:32.26
*/
gx.evt.autoSkip=!1;gx.define("wbp_act_lista_actividades_cal",!1,function(){this.ServerClass="wbp_act_lista_actividades_cal";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV8TABL_ID=gx.fn.getIntegerValue("vTABL_ID",",");this.AV9TABL_NOMBRE=gx.fn.getControlValue("vTABL_NOMBRE");this.AV7TABL_DESCRIPCION=gx.fn.getControlValue("vTABL_DESCRIPCION");this.AV6TABL_COLOR=gx.fn.getControlValue("vTABL_COLOR");this.Gx_mode=gx.fn.getControlValue("vMODE");this.AV10TABL_USUARIO=gx.fn.getControlValue("vTABL_USUARIO");this.AV17TABL_FECHA_VISUALIZACION=gx.fn.getDateValue("vTABL_FECHA_VISUALIZACION")};this.Validv_Tare_act_fecha=function(){return this.validCliEvt("Validv_Tare_act_fecha",0,function(){try{var n=gx.util.balloon.getNew("vTARE_ACT_FECHA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV12TARE_ACT_FECHA)==0||new gx.date.gxdate(this.AV12TARE_ACT_FECHA).compare(gx.date.ymdtod(1753,1,1))>=0))try{n.setError("Campo Fecha fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}this.refreshOutputs([{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Validv_Tare_act_fecha_hasta=function(){return this.validCliEvt("Validv_Tare_act_fecha_hasta",0,function(){try{var n=gx.util.balloon.getNew("vTARE_ACT_FECHA_HASTA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV13TARE_ACT_FECHA_HASTA)==0||new gx.date.gxdate(this.AV13TARE_ACT_FECHA_HASTA).compare(gx.date.ymdtod(1753,1,1))>=0))try{n.setError("Campo TARE_ACT_FECHA_HASTA fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}this.refreshOutputs([{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e181k2_client=function(){return this.clearMessages(),this.call("wbp_seg_appweb.aspx",[]),this.refreshOutputs([{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}]),gx.$.Deferred().resolve()};this.e121k2_client=function(){return this.executeServerEvent("'LIMPIAR'",!0,null,!1,!1)};this.e141k2_client=function(){return this.executeServerEvent("'REALIZAR BUSQUEDA'",!0,null,!1,!1)};this.e151k2_client=function(){return this.executeServerEvent("'VISTA GRID'",!0,null,!1,!1)};this.e161k2_client=function(){return this.executeServerEvent("'VISTA CALENDARIO'",!0,null,!1,!1)};this.e191k2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e201k2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,40,42,44,47,50,51,52,53,54,55,56,57];this.GXLastCtrlId=57;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TXTTITULO",format:2,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TEXTHTML",format:1,grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLE3",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"TABLE1",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,lvl:0,type:"svchar",len:80,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTARE_ACT_DESCRIPCION",gxz:"ZV11TARE_ACT_DESCRIPCION",gxold:"OV11TARE_ACT_DESCRIPCION",gxvar:"AV11TARE_ACT_DESCRIPCION",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11TARE_ACT_DESCRIPCION=n)},v2z:function(n){n!==undefined&&(gx.O.ZV11TARE_ACT_DESCRIPCION=n)},v2c:function(){gx.fn.setControlValue("vTARE_ACT_DESCRIPCION",gx.O.AV11TARE_ACT_DESCRIPCION,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11TARE_ACT_DESCRIPCION=this.val())},val:function(){return gx.fn.getControlValue("vTARE_ACT_DESCRIPCION")},nac:gx.falseFn};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTARE_ACT_USUARIO",gxz:"ZV14TARE_ACT_USUARIO",gxold:"OV14TARE_ACT_USUARIO",gxvar:"AV14TARE_ACT_USUARIO",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"dyncombo",v2v:function(n){n!==undefined&&(gx.O.AV14TARE_ACT_USUARIO=n)},v2z:function(n){n!==undefined&&(gx.O.ZV14TARE_ACT_USUARIO=n)},v2c:function(){gx.fn.setComboBoxValue("vTARE_ACT_USUARIO",gx.O.AV14TARE_ACT_USUARIO)},c2v:function(){this.val()!==undefined&&(gx.O.AV14TARE_ACT_USUARIO=this.val())},val:function(){return gx.fn.getControlValue("vTARE_ACT_USUARIO")},nac:gx.falseFn};n[25]={id:25,fld:"",grid:0};n[26]={id:26,fld:"TABLEFECHA",grid:0};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tare_act_fecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTARE_ACT_FECHA",gxz:"ZV12TARE_ACT_FECHA",gxold:"OV12TARE_ACT_FECHA",gxvar:"AV12TARE_ACT_FECHA",ucs:[],op:[31],ip:[31],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12TARE_ACT_FECHA=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV12TARE_ACT_FECHA=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vTARE_ACT_FECHA",gx.O.AV12TARE_ACT_FECHA,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV12TARE_ACT_FECHA=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vTARE_ACT_FECHA")},nac:gx.falseFn};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tare_act_fecha_hasta,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTARE_ACT_FECHA_HASTA",gxz:"ZV13TARE_ACT_FECHA_HASTA",gxold:"OV13TARE_ACT_FECHA_HASTA",gxvar:"AV13TARE_ACT_FECHA_HASTA",ucs:[],op:[35],ip:[35],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV13TARE_ACT_FECHA_HASTA=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV13TARE_ACT_FECHA_HASTA=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vTARE_ACT_FECHA_HASTA",gx.O.AV13TARE_ACT_FECHA_HASTA,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV13TARE_ACT_FECHA_HASTA=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vTARE_ACT_FECHA_HASTA")},nac:gx.falseFn};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"TABLE5",grid:0};n[40]={id:40,fld:"BTNBUSCAR",format:2,grid:0,evt:"e141k2_client"};n[42]={id:42,fld:"BTNLIMPIAR",format:2,grid:0,evt:"e121k2_client"};n[44]={id:44,fld:"TABLE2",grid:0};n[47]={id:47,fld:"VISTA_HTML",format:2,grid:0};n[50]={id:50,fld:"SECTION1",grid:0};n[51]={id:51,fld:"TXT_SEL_ETIQUETA_INI",format:2,grid:0};n[52]={id:52,fld:"VISTA_GRID",format:1,grid:0,evt:"e151k2_client"};n[53]={id:53,fld:"VISTA_CALENDARIO",format:1,grid:0,evt:"e161k2_client"};n[54]={id:54,fld:"TXT_SEL_ETIQUETA_FIN",format:2,grid:0};n[55]={id:55,fld:"VENTANA_SCRIPT",format:2,grid:0};n[56]={id:56,fld:"",grid:0};n[57]={id:57,fld:"",grid:0};this.AV11TARE_ACT_DESCRIPCION="";this.ZV11TARE_ACT_DESCRIPCION="";this.OV11TARE_ACT_DESCRIPCION="";this.AV14TARE_ACT_USUARIO="";this.ZV14TARE_ACT_USUARIO="";this.OV14TARE_ACT_USUARIO="";this.AV12TARE_ACT_FECHA=gx.date.nullDate();this.ZV12TARE_ACT_FECHA=gx.date.nullDate();this.OV12TARE_ACT_FECHA=gx.date.nullDate();this.AV13TARE_ACT_FECHA_HASTA=gx.date.nullDate();this.ZV13TARE_ACT_FECHA_HASTA=gx.date.nullDate();this.OV13TARE_ACT_FECHA_HASTA=gx.date.nullDate();this.AV11TARE_ACT_DESCRIPCION="";this.AV14TARE_ACT_USUARIO="";this.AV12TARE_ACT_FECHA=gx.date.nullDate();this.AV13TARE_ACT_FECHA_HASTA=gx.date.nullDate();this.AV8TABL_ID=0;this.AV9TABL_NOMBRE="";this.AV7TABL_DESCRIPCION="";this.AV10TABL_USUARIO="";this.AV17TABL_FECHA_VISUALIZACION=gx.date.nullDate();this.AV6TABL_COLOR="";this.Gx_mode="";this.Events={e121k2_client:["'LIMPIAR'",!0],e141k2_client:["'REALIZAR BUSQUEDA'",!0],e151k2_client:["'VISTA GRID'",!0],e161k2_client:["'VISTA CALENDARIO'",!0],e191k2_client:["ENTER",!0],e201k2_client:["CANCEL",!0],e181k2_client:["'IR AL INICIO'",!1]};this.EvtParms.REFRESH=[[{av:"AV9TABL_NOMBRE",fld:"vTABL_NOMBRE",pic:"",hsh:!0},{av:"AV7TABL_DESCRIPCION",fld:"vTABL_DESCRIPCION",pic:"",hsh:!0},{av:"AV10TABL_USUARIO",fld:"vTABL_USUARIO",pic:"",hsh:!0},{av:"AV17TABL_FECHA_VISUALIZACION",fld:"vTABL_FECHA_VISUALIZACION",pic:"",hsh:!0},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}],[{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}]];this.EvtParms.START=[[{av:"AV9TABL_NOMBRE",fld:"vTABL_NOMBRE",pic:"",hsh:!0},{av:"AV7TABL_DESCRIPCION",fld:"vTABL_DESCRIPCION",pic:"",hsh:!0},{av:"AV10TABL_USUARIO",fld:"vTABL_USUARIO",pic:"",hsh:!0},{av:"AV17TABL_FECHA_VISUALIZACION",fld:"vTABL_FECHA_VISUALIZACION",pic:"",hsh:!0},{av:"AV6TABL_COLOR",fld:"vTABL_COLOR",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV22Pgmdesc",fld:"vPGMDESC",pic:""},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}],[{av:'gx.fn.getCtrlProperty("TXTTITULO","Caption")',ctrl:"TXTTITULO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("BTNBUSCAR","Caption")',ctrl:"BTNBUSCAR",prop:"Caption"},{av:'gx.fn.getCtrlProperty("BTNLIMPIAR","Caption")',ctrl:"BTNLIMPIAR",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTHTML","Caption")',ctrl:"TEXTHTML",prop:"Caption"},{av:'gx.fn.getCtrlProperty("VISTA_HTML","Caption")',ctrl:"VISTA_HTML",prop:"Caption"},{av:'gx.fn.getCtrlProperty("VENTANA_SCRIPT","Caption")',ctrl:"VENTANA_SCRIPT",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TXT_SEL_ETIQUETA_INI","Caption")',ctrl:"TXT_SEL_ETIQUETA_INI",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TXT_SEL_ETIQUETA_FIN","Caption")',ctrl:"TXT_SEL_ETIQUETA_FIN",prop:"Caption"},{av:'gx.fn.getCtrlProperty("VISTA_CALENDARIO","Caption")',ctrl:"VISTA_CALENDARIO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("VISTA_GRID","Caption")',ctrl:"VISTA_GRID",prop:"Caption"},{av:"AV11TARE_ACT_DESCRIPCION",fld:"vTARE_ACT_DESCRIPCION",pic:""},{av:"AV12TARE_ACT_FECHA",fld:"vTARE_ACT_FECHA",pic:""},{av:"AV13TARE_ACT_FECHA_HASTA",fld:"vTARE_ACT_FECHA_HASTA",pic:""},{av:'gx.fn.getCtrlProperty("TABLEFECHA","Visible")',ctrl:"TABLEFECHA",prop:"Visible"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV6TABL_COLOR",fld:"vTABL_COLOR",pic:""},{ctrl:"WC"},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}]];this.EvtParms["'IR AL INICIO'"]=[[{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}],[{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}]];this.EvtParms["'LIMPIAR'"]=[[{av:"AV9TABL_NOMBRE",fld:"vTABL_NOMBRE",pic:"",hsh:!0},{av:"AV7TABL_DESCRIPCION",fld:"vTABL_DESCRIPCION",pic:"",hsh:!0},{av:"AV6TABL_COLOR",fld:"vTABL_COLOR",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}],[{av:"AV11TARE_ACT_DESCRIPCION",fld:"vTARE_ACT_DESCRIPCION",pic:""},{av:"AV12TARE_ACT_FECHA",fld:"vTARE_ACT_FECHA",pic:""},{av:"AV13TARE_ACT_FECHA_HASTA",fld:"vTARE_ACT_FECHA_HASTA",pic:""},{av:'gx.fn.getCtrlProperty("TABLEFECHA","Visible")',ctrl:"TABLEFECHA",prop:"Visible"},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV6TABL_COLOR",fld:"vTABL_COLOR",pic:""},{ctrl:"WC"},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}]];this.EvtParms["'REALIZAR BUSQUEDA'"]=[[{av:"AV11TARE_ACT_DESCRIPCION",fld:"vTARE_ACT_DESCRIPCION",pic:""},{av:"AV12TARE_ACT_FECHA",fld:"vTARE_ACT_FECHA",pic:""},{av:"AV13TARE_ACT_FECHA_HASTA",fld:"vTARE_ACT_FECHA_HASTA",pic:""},{av:"AV9TABL_NOMBRE",fld:"vTABL_NOMBRE",pic:"",hsh:!0},{av:"AV7TABL_DESCRIPCION",fld:"vTABL_DESCRIPCION",pic:"",hsh:!0},{av:"AV10TABL_USUARIO",fld:"vTABL_USUARIO",pic:"",hsh:!0},{av:"AV17TABL_FECHA_VISUALIZACION",fld:"vTABL_FECHA_VISUALIZACION",pic:"",hsh:!0},{av:"AV6TABL_COLOR",fld:"vTABL_COLOR",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}],[{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV11TARE_ACT_DESCRIPCION",fld:"vTARE_ACT_DESCRIPCION",pic:""},{av:"AV12TARE_ACT_FECHA",fld:"vTARE_ACT_FECHA",pic:""},{av:"AV13TARE_ACT_FECHA_HASTA",fld:"vTARE_ACT_FECHA_HASTA",pic:""},{av:'gx.fn.getCtrlProperty("TABLEFECHA","Visible")',ctrl:"TABLEFECHA",prop:"Visible"},{av:"AV6TABL_COLOR",fld:"vTABL_COLOR",pic:""},{ctrl:"WC"},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}]];this.EvtParms["'VISTA GRID'"]=[[{av:"AV9TABL_NOMBRE",fld:"vTABL_NOMBRE",pic:"",hsh:!0},{av:"AV7TABL_DESCRIPCION",fld:"vTABL_DESCRIPCION",pic:"",hsh:!0},{av:"AV10TABL_USUARIO",fld:"vTABL_USUARIO",pic:"",hsh:!0},{av:"AV17TABL_FECHA_VISUALIZACION",fld:"vTABL_FECHA_VISUALIZACION",pic:"",hsh:!0},{av:"AV6TABL_COLOR",fld:"vTABL_COLOR",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}],[{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}]];this.EvtParms["'VISTA CALENDARIO'"]=[[{av:"AV9TABL_NOMBRE",fld:"vTABL_NOMBRE",pic:"",hsh:!0},{av:"AV7TABL_DESCRIPCION",fld:"vTABL_DESCRIPCION",pic:"",hsh:!0},{av:"AV10TABL_USUARIO",fld:"vTABL_USUARIO",pic:"",hsh:!0},{av:"AV17TABL_FECHA_VISUALIZACION",fld:"vTABL_FECHA_VISUALIZACION",pic:"",hsh:!0},{av:"AV6TABL_COLOR",fld:"vTABL_COLOR",pic:""},{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}],[{av:"Gx_mode",fld:"vMODE",pic:"@!"},{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}]];this.EvtParms.VALIDV_TARE_ACT_FECHA=[[{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}],[{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}]];this.EvtParms.VALIDV_TARE_ACT_FECHA_HASTA=[[{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}],[{av:"AV8TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{ctrl:"vTARE_ACT_USUARIO"},{av:"AV14TARE_ACT_USUARIO",fld:"vTARE_ACT_USUARIO",pic:""}]];this.setVCMap("AV8TABL_ID","vTABL_ID",0,"int",10,0);this.setVCMap("AV9TABL_NOMBRE","vTABL_NOMBRE",0,"svchar",50,0);this.setVCMap("AV7TABL_DESCRIPCION","vTABL_DESCRIPCION",0,"svchar",600,0);this.setVCMap("AV6TABL_COLOR","vTABL_COLOR",0,"svchar",10,0);this.setVCMap("Gx_mode","vMODE",0,"char",3,0);this.setVCMap("AV10TABL_USUARIO","vTABL_USUARIO",0,"svchar",20,0);this.setVCMap("AV17TABL_FECHA_VISUALIZACION","vTABL_FECHA_VISUALIZACION",0,"date",8,0);this.Initialize();this.setComponent({id:"WC",GXClass:null,Prefix:"W0058",lvl:1})});gx.wi(function(){gx.createParentObj(wbp_act_lista_actividades_cal)})