/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:35:36.17
*/
gx.evt.autoSkip=!1;gx.define("wbp_act_tareas_grid",!1,function(){var n,t;this.ServerClass="wbp_act_tareas_grid";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV6TABL_ID=gx.fn.getIntegerValue("vTABL_ID",",");this.AV24TABL_EST_ID=gx.fn.getIntegerValue("vTABL_EST_ID",",");this.AV13PageNro=gx.fn.getIntegerValue("vPAGENRO",",")};this.Validv_Fecha=function(){return this.validCliEvt("Validv_Fecha",0,function(){try{var n=gx.util.balloon.getNew("vFECHA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV11Fecha)==0||new gx.date.gxdate(this.AV11Fecha).compare(gx.date.ymdtod(1753,1,1))>=0))try{n.setError("Campo Fecha fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}this.refreshOutputs([{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tabl_id=function(){var n=gx.fn.currentGridRowImpl(51);return this.validCliEvt("Valid_Tabl_id",51,function(){try{if(gx.fn.currentGridRowImpl(51)===0)return!0;var n=gx.util.balloon.getNew("TABL_ID",gx.fn.currentGridRowImpl(51));this.AnyError=0;this.refreshOutputs([{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.Valid_Tare_proyid=function(){var n=gx.fn.currentGridRowImpl(51);return this.validCliEvt("Valid_Tare_proyid",51,function(){try{if(gx.fn.currentGridRowImpl(51)===0)return!0;var n=gx.util.balloon.getNew("TARE_PROYID",gx.fn.currentGridRowImpl(51));this.AnyError=0;this.refreshOutputs([{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}])}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.s112_client=function(){gx.fn.setCtrlProperty("HTML_SCRIPT","Caption","<script>$('#MYMODAL').modal('toggle')<\/script>")};this.e221o2_client=function(){return this.clearMessages(),this.call("wbp_seg_appweb.aspx",[]),this.refreshOutputs([{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]),gx.$.Deferred().resolve()};this.e111o2_client=function(){return this.executeServerEvent("'VISUALIZAR'",!0,null,!1,!1)};this.e121o2_client=function(){return this.executeServerEvent("'EDITAR'",!0,null,!1,!1)};this.e131o2_client=function(){return this.executeServerEvent("'LIMPIAR'",!0,null,!1,!1)};this.e201o2_client=function(){return this.executeServerEvent("GRID.ONLINEACTIVATE",!0,arguments[0],!1,!1)};this.e151o2_client=function(){return this.executeServerEvent("'PAGE PRIMERA'",!1,null,!1,!1)};this.e161o2_client=function(){return this.executeServerEvent("'PAGE ANTERIOR'",!1,null,!1,!1)};this.e171o2_client=function(){return this.executeServerEvent("'PAGE SIGUIENTE'",!1,null,!1,!1)};this.e181o2_client=function(){return this.executeServerEvent("'PAGE ULTIMA'",!1,null,!1,!1)};this.e231o2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e241o2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,30,32,33,34,35,36,37,38,41,43,44,45,46,47,48,49,50,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,81,83,85,87,89,90,91,92,94,95,96,97];this.GXLastCtrlId=97;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",51,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wbp_act_tareas_grid",[],!1,1,!0,!0,0,!1,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,"e201o2_client",!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridContainer;t.addSingleLineEdit(71,52,"TABL_ID","Tablero Id","","TABL_ID","int",0,"px",10,10,"right",null,[],71,"TABL_ID",!1,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(74,53,"TABL_EST_ID","Id Estado","","TABL_EST_ID","int",0,"px",10,10,"right",null,[],74,"TABL_EST_ID",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(556,54,"TABL_NOMBRE","Tablero","","TABL_NOMBRE","svchar",0,"px",50,50,"left",null,[],556,"TABL_NOMBRE",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(122,55,"TARE_ID","Tarea Id","","TARE_ID","int",0,"px",10,10,"right",null,[],122,"TARE_ID",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(598,56,"TARE_DESCRIPCION","Tarea","","TARE_DESCRIPCION","svchar",0,"px",400,80,"left",null,[],598,"TARE_DESCRIPCION",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(125,57,"TARE_PROYID","Proyecto Id","","TARE_PROYID","svchar",0,"px",20,20,"left",null,[],125,"TARE_PROYID",!1,0,!1,!1,"Attribute",1,"");t.addSingleLineEdit(618,58,"TARE_PROYNOM","Proyecto","","TARE_PROYNOM","svchar",0,"px",140,80,"left",null,[],618,"TARE_PROYNOM",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(124,59,"TARE_USUARIO_REG","Usuario de Registro","","TARE_USUARIO_REG","svchar",0,"px",20,20,"left",null,[],124,"TARE_USUARIO_REG",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(126,60,"TARE_FECHA_REG","Fecha de Registro","","TARE_FECHA_REG","dtime",0,"px",19,19,"right",null,[],126,"TARE_FECHA_REG",!0,8,!1,!1,"Attribute",1,"WWColumn");this.GridContainer.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TXTTITULO",format:2,grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TABLE3",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TABLE1",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,lvl:0,type:"svchar",len:400,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTARE_DESCRIPCION",gxz:"ZV17TARE_DESCRIPCION",gxold:"OV17TARE_DESCRIPCION",gxvar:"AV17TARE_DESCRIPCION",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV17TARE_DESCRIPCION=n)},v2z:function(n){n!==undefined&&(gx.O.ZV17TARE_DESCRIPCION=n)},v2c:function(){gx.fn.setControlValue("vTARE_DESCRIPCION",gx.O.AV17TARE_DESCRIPCION,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV17TARE_DESCRIPCION=this.val())},val:function(){return gx.fn.getControlValue("vTARE_DESCRIPCION")},nac:gx.falseFn};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,lvl:0,type:"date",len:10,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Fecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vFECHA",gxz:"ZV11Fecha",gxold:"OV11Fecha",gxvar:"AV11Fecha",ucs:[],op:[21],ip:[21],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11Fecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11Fecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vFECHA",gx.O.AV11Fecha,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV11Fecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vFECHA")},nac:gx.falseFn};this.declareDomainHdlr(21,function(){});n[22]={id:22,fld:"",grid:0};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,lvl:0,type:"int",len:1,dec:0,sign:!1,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vMOSTRARBLANCOPROY",gxz:"ZV21MostrarBlancoProy",gxold:"OV21MostrarBlancoProy",gxvar:"AV21MostrarBlancoProy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(n){n!==undefined&&(gx.O.AV21MostrarBlancoProy=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV21MostrarBlancoProy=gx.num.intval(n))},v2c:function(){gx.fn.setCheckBoxValue("vMOSTRARBLANCOPROY",gx.O.AV21MostrarBlancoProy,"1");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV21MostrarBlancoProy=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vMOSTRARBLANCOPROY",",")},nac:gx.falseFn,values:[1,0]};this.declareDomainHdlr(25,function(){});n[26]={id:26,fld:"",grid:0};n[27]={id:27,fld:"TABLE5",grid:0};n[30]={id:30,fld:"BTNBUSCAR",format:2,grid:0,evt:"e141o2_client"};n[32]={id:32,fld:"BTNLIMPIAR",format:2,grid:0,evt:"e131o2_client"};n[33]={id:33,fld:"",grid:0};n[34]={id:34,fld:"",grid:0};n[35]={id:35,fld:"TABLE10",grid:0};n[36]={id:36,fld:"",grid:0};n[37]={id:37,fld:"",grid:0};n[38]={id:38,fld:"TABLE4",grid:0};n[41]={id:41,fld:"BTNVISUALIZAR",format:1,grid:0,evt:"e111o2_client"};n[43]={id:43,fld:"BTNEDITAR",format:1,grid:0,evt:"e121o2_client"};n[44]={id:44,fld:"",grid:0};n[45]={id:45,fld:"TEXTBLOCKPAGINADO",format:0,grid:0};n[46]={id:46,fld:"",grid:0};n[47]={id:47,fld:"",grid:0};n[48]={id:48,fld:"TABLE2",grid:0};n[49]={id:49,fld:"",grid:0};n[50]={id:50,fld:"",grid:0};n[52]={id:52,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:this.Valid_Tabl_id,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_ID",gxz:"Z71TABL_ID",gxold:"O71TABL_ID",gxvar:"A71TABL_ID",ucs:[],op:[54,58],ip:[54,58,52,57],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A71TABL_ID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z71TABL_ID=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TABL_ID",n||gx.fn.currentGridRowImpl(51),gx.O.A71TABL_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A71TABL_ID=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TABL_ID",n||gx.fn.currentGridRowImpl(51),",")},nac:gx.falseFn};n[53]={id:53,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_EST_ID",gxz:"Z74TABL_EST_ID",gxold:"O74TABL_EST_ID",gxvar:"A74TABL_EST_ID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A74TABL_EST_ID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z74TABL_EST_ID=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TABL_EST_ID",n||gx.fn.currentGridRowImpl(51),gx.O.A74TABL_EST_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A74TABL_EST_ID=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TABL_EST_ID",n||gx.fn.currentGridRowImpl(51),",")},nac:gx.falseFn};n[54]={id:54,lvl:2,type:"svchar",len:50,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TABL_NOMBRE",gxz:"Z556TABL_NOMBRE",gxold:"O556TABL_NOMBRE",gxvar:"A556TABL_NOMBRE",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",placeholder:"Ingrese el nombre del tablero",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A556TABL_NOMBRE=n)},v2z:function(n){n!==undefined&&(gx.O.Z556TABL_NOMBRE=n)},v2c:function(n){gx.fn.setGridControlValue("TABL_NOMBRE",n||gx.fn.currentGridRowImpl(51),gx.O.A556TABL_NOMBRE,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A556TABL_NOMBRE=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TABL_NOMBRE",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[55]={id:55,lvl:2,type:"int",len:10,dec:0,sign:!1,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARE_ID",gxz:"Z122TARE_ID",gxold:"O122TARE_ID",gxvar:"A122TARE_ID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A122TARE_ID=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z122TARE_ID=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("TARE_ID",n||gx.fn.currentGridRowImpl(51),gx.O.A122TARE_ID,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A122TARE_ID=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("TARE_ID",n||gx.fn.currentGridRowImpl(51),",")},nac:gx.falseFn};n[56]={id:56,lvl:2,type:"svchar",len:400,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARE_DESCRIPCION",gxz:"Z598TARE_DESCRIPCION",gxold:"O598TARE_DESCRIPCION",gxvar:"A598TARE_DESCRIPCION",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",placeholder:"Descripción de la tarea a realizar",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A598TARE_DESCRIPCION=n)},v2z:function(n){n!==undefined&&(gx.O.Z598TARE_DESCRIPCION=n)},v2c:function(n){gx.fn.setGridControlValue("TARE_DESCRIPCION",n||gx.fn.currentGridRowImpl(51),gx.O.A598TARE_DESCRIPCION,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A598TARE_DESCRIPCION=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARE_DESCRIPCION",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[57]={id:57,lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:this.Valid_Tare_proyid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARE_PROYID",gxz:"Z125TARE_PROYID",gxold:"O125TARE_PROYID",gxvar:"A125TARE_PROYID",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",placeholder:"Id del Proyecto",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A125TARE_PROYID=n)},v2z:function(n){n!==undefined&&(gx.O.Z125TARE_PROYID=n)},v2c:function(n){gx.fn.setGridControlValue("TARE_PROYID",n||gx.fn.currentGridRowImpl(51),gx.O.A125TARE_PROYID,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A125TARE_PROYID=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARE_PROYID",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[58]={id:58,lvl:2,type:"svchar",len:140,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARE_PROYNOM",gxz:"Z618TARE_PROYNOM",gxold:"O618TARE_PROYNOM",gxvar:"A618TARE_PROYNOM",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",placeholder:"Nombre del Proyecto",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A618TARE_PROYNOM=n)},v2z:function(n){n!==undefined&&(gx.O.Z618TARE_PROYNOM=n)},v2c:function(n){gx.fn.setGridControlValue("TARE_PROYNOM",n||gx.fn.currentGridRowImpl(51),gx.O.A618TARE_PROYNOM,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A618TARE_PROYNOM=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARE_PROYNOM",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[59]={id:59,lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARE_USUARIO_REG",gxz:"Z124TARE_USUARIO_REG",gxold:"O124TARE_USUARIO_REG",gxvar:"A124TARE_USUARIO_REG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A124TARE_USUARIO_REG=n)},v2z:function(n){n!==undefined&&(gx.O.Z124TARE_USUARIO_REG=n)},v2c:function(n){gx.fn.setGridControlValue("TARE_USUARIO_REG",n||gx.fn.currentGridRowImpl(51),gx.O.A124TARE_USUARIO_REG,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A124TARE_USUARIO_REG=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TARE_USUARIO_REG",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[60]={id:60,lvl:2,type:"dtime",len:10,dec:8,sign:!1,ro:1,isacc:0,grid:51,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TARE_FECHA_REG",gxz:"Z126TARE_FECHA_REG",gxold:"O126TARE_FECHA_REG",gxvar:"A126TARE_FECHA_REG",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99:99",dec:8},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A126TARE_FECHA_REG=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z126TARE_FECHA_REG=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("TARE_FECHA_REG",n||gx.fn.currentGridRowImpl(51),gx.O.A126TARE_FECHA_REG,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A126TARE_FECHA_REG=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("TARE_FECHA_REG",n||gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};n[61]={id:61,fld:"",grid:0};n[62]={id:62,fld:"",grid:0};n[63]={id:63,fld:"TABLE7",grid:0};n[64]={id:64,fld:"",grid:0};n[65]={id:65,fld:"",grid:0};n[66]={id:66,fld:"",grid:0};n[67]={id:67,fld:"",grid:0};n[68]={id:68,lvl:0,type:"int",len:6,dec:0,sign:!1,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTALREGISTROS",gxz:"ZV19TotalRegistros",gxold:"OV19TotalRegistros",gxvar:"AV19TotalRegistros",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV19TotalRegistros=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV19TotalRegistros=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vTOTALREGISTROS",gx.O.AV19TotalRegistros,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV19TotalRegistros=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vTOTALREGISTROS",",")},nac:gx.falseFn};this.declareDomainHdlr(68,function(){});n[69]={id:69,fld:"",grid:0};n[70]={id:70,fld:"",grid:0};n[71]={id:71,fld:"",grid:0};n[72]={id:72,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vPAGEACTUAL",gxz:"ZV12PageActual",gxold:"OV12PageActual",gxvar:"AV12PageActual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV12PageActual=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV12PageActual=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vPAGEACTUAL",gx.O.AV12PageActual,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV12PageActual=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vPAGEACTUAL",",")},nac:gx.falseFn};this.declareDomainHdlr(72,function(){});n[73]={id:73,fld:"",grid:0};n[74]={id:74,fld:"",grid:0};n[75]={id:75,fld:"",grid:0};n[76]={id:76,lvl:0,type:"int",len:8,dec:0,sign:!1,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vTOTALPAGE",gxz:"ZV18TotalPage",gxold:"OV18TotalPage",gxvar:"AV18TotalPage",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV18TotalPage=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.ZV18TotalPage=gx.num.intval(n))},v2c:function(){gx.fn.setControlValue("vTOTALPAGE",gx.O.AV18TotalPage,0);typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(){this.val()!==undefined&&(gx.O.AV18TotalPage=gx.num.intval(this.val()))},val:function(){return gx.fn.getIntegerValue("vTOTALPAGE",",")},nac:gx.falseFn};this.declareDomainHdlr(76,function(){});n[77]={id:77,fld:"",grid:0};n[78]={id:78,fld:"TABLE9",grid:0};n[81]={id:81,fld:"PAGEPRIMERA",grid:0,evt:"e151o2_client"};n[83]={id:83,fld:"PAGEANTERIOR",grid:0,evt:"e161o2_client"};n[85]={id:85,fld:"TEXTPAGINADO",format:0,grid:0};n[87]={id:87,fld:"PAGESIGUIENTE",grid:0,evt:"e171o2_client"};n[89]={id:89,fld:"PAGEULTIMA",grid:0,evt:"e181o2_client"};n[90]={id:90,fld:"",grid:0};n[91]={id:91,fld:"",grid:0};n[92]={id:92,fld:"MYMODAL",grid:0};n[94]={id:94,fld:"HTML_SCRIPT",format:1,grid:0};n[95]={id:95,fld:"",grid:0};n[96]={id:96,fld:"",grid:0};n[97]={id:97,fld:"TEXT_HTML",format:1,grid:0};this.AV17TARE_DESCRIPCION="";this.ZV17TARE_DESCRIPCION="";this.OV17TARE_DESCRIPCION="";this.AV11Fecha=gx.date.nullDate();this.ZV11Fecha=gx.date.nullDate();this.OV11Fecha=gx.date.nullDate();this.AV21MostrarBlancoProy=0;this.ZV21MostrarBlancoProy=0;this.OV21MostrarBlancoProy=0;this.Z71TABL_ID=0;this.O71TABL_ID=0;this.Z74TABL_EST_ID=0;this.O74TABL_EST_ID=0;this.Z556TABL_NOMBRE="";this.O556TABL_NOMBRE="";this.Z122TARE_ID=0;this.O122TARE_ID=0;this.Z598TARE_DESCRIPCION="";this.O598TARE_DESCRIPCION="";this.Z125TARE_PROYID="";this.O125TARE_PROYID="";this.Z618TARE_PROYNOM="";this.O618TARE_PROYNOM="";this.Z124TARE_USUARIO_REG="";this.O124TARE_USUARIO_REG="";this.Z126TARE_FECHA_REG=gx.date.nullDate();this.O126TARE_FECHA_REG=gx.date.nullDate();this.AV19TotalRegistros=0;this.ZV19TotalRegistros=0;this.OV19TotalRegistros=0;this.AV12PageActual=0;this.ZV12PageActual=0;this.OV12PageActual=0;this.AV18TotalPage=0;this.ZV18TotalPage=0;this.OV18TotalPage=0;this.AV17TARE_DESCRIPCION="";this.AV11Fecha=gx.date.nullDate();this.AV21MostrarBlancoProy=0;this.AV19TotalRegistros=0;this.AV12PageActual=0;this.AV18TotalPage=0;this.A127TARE_EST_REG="";this.A71TABL_ID=0;this.A556TABL_NOMBRE="";this.A122TARE_ID=0;this.A598TARE_DESCRIPCION="";this.A125TARE_PROYID="";this.A618TARE_PROYNOM="";this.A124TARE_USUARIO_REG="";this.A126TARE_FECHA_REG=gx.date.nullDate();this.AV6TABL_ID=0;this.AV24TABL_EST_ID=0;this.AV13PageNro=0;this.Events={e111o2_client:["'VISUALIZAR'",!0],e121o2_client:["'EDITAR'",!0],e131o2_client:["'LIMPIAR'",!0],e201o2_client:["GRID.ONLINEACTIVATE",!0],e151o2_client:["'PAGE PRIMERA'",!0],e161o2_client:["'PAGE ANTERIOR'",!0],e171o2_client:["'PAGE SIGUIENTE'",!0],e181o2_client:["'PAGE ULTIMA'",!0],e231o2_client:["ENTER",!0],e241o2_client:["CANCEL",!0],e221o2_client:["'IR AL INICIO'",!1]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17TARE_DESCRIPCION",fld:"vTARE_DESCRIPCION",pic:""},{av:"AV11Fecha",fld:"vFECHA",pic:""},{av:"A74TABL_EST_ID",fld:"TABL_EST_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:'gx.fn.getCtrlProperty("TEXT_HTML","Caption")',ctrl:"TEXT_HTML",prop:"Caption"},{av:"AV19TotalRegistros",fld:"vTOTALREGISTROS",pic:"ZZZZZ9"},{av:"AV18TotalPage",fld:"vTOTALPAGE",pic:"ZZZZZZZ9"},{av:"AV12PageActual",fld:"vPAGEACTUAL",pic:"ZZZZZZZ9"},{av:'gx.fn.getCtrlProperty("TEXTPAGINADO","Caption")',ctrl:"TEXTPAGINADO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTBLOCKPAGINADO","Caption")',ctrl:"TEXTBLOCKPAGINADO",prop:"Caption"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms.START=[[{av:"AV27Pgmdesc",fld:"vPGMDESC",pic:""},{av:"AV28Pgmname",fld:"vPGMNAME",pic:""},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:'gx.fn.getCtrlProperty("TXTTITULO","Caption")',ctrl:"TXTTITULO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("BTNBUSCAR","Caption")',ctrl:"BTNBUSCAR",prop:"Caption"},{av:'gx.fn.getCtrlProperty("BTNLIMPIAR","Caption")',ctrl:"BTNLIMPIAR",prop:"Caption"},{av:'gx.fn.getCtrlProperty("BTNEDITAR","Caption")',ctrl:"BTNEDITAR",prop:"Caption"},{av:'gx.fn.getCtrlProperty("BTNVISUALIZAR","Caption")',ctrl:"BTNVISUALIZAR",prop:"Caption"},{av:'gx.fn.getCtrlProperty("HTML_SCRIPT","Caption")',ctrl:"HTML_SCRIPT",prop:"Caption"},{av:"AV17TARE_DESCRIPCION",fld:"vTARE_DESCRIPCION",pic:""},{av:"AV11Fecha",fld:"vFECHA",pic:""},{ctrl:"GRID",prop:"Rows"},{av:'gx.fn.getCtrlProperty("vTOTALREGISTROS","Visible")',ctrl:"vTOTALREGISTROS",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vTOTALPAGE","Visible")',ctrl:"vTOTALPAGE",prop:"Visible"},{av:'gx.fn.getCtrlProperty("vPAGEACTUAL","Visible")',ctrl:"vPAGEACTUAL",prop:"Visible"},{av:"AV27Pgmdesc",fld:"vPGMDESC",pic:""},{av:"AV28Pgmname",fld:"vPGMNAME",pic:""},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms["'VISUALIZAR'"]=[[{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"A74TABL_EST_ID",fld:"TABL_EST_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"A122TARE_ID",fld:"TARE_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:"AV6TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9"},{av:"AV24TABL_EST_ID",fld:"vTABL_EST_ID",pic:"ZZZZZZZZZ9"},{ctrl:"WC"},{av:'gx.fn.getCtrlProperty("HTML_SCRIPT","Caption")',ctrl:"HTML_SCRIPT",prop:"Caption"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms["'EDITAR'"]=[[{av:"A124TARE_USUARIO_REG",fld:"TARE_USUARIO_REG",pic:"",hsh:!0},{av:"AV6TABL_ID",fld:"vTABL_ID",pic:"ZZZZZZZZZ9"},{av:"A122TARE_ID",fld:"TARE_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"AV24TABL_EST_ID",fld:"vTABL_EST_ID",pic:"ZZZZZZZZZ9"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{ctrl:"WC"},{av:'gx.fn.getCtrlProperty("HTML_SCRIPT","Caption")',ctrl:"HTML_SCRIPT",prop:"Caption"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms["'IR AL INICIO'"]=[[{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms["'LIMPIAR'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17TARE_DESCRIPCION",fld:"vTARE_DESCRIPCION",pic:""},{av:"AV11Fecha",fld:"vFECHA",pic:""},{av:"A74TABL_EST_ID",fld:"TABL_EST_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:"AV17TARE_DESCRIPCION",fld:"vTARE_DESCRIPCION",pic:""},{av:"AV11Fecha",fld:"vFECHA",pic:""},{av:'gx.fn.getCtrlProperty("TEXT_HTML","Caption")',ctrl:"TEXT_HTML",prop:"Caption"},{av:"AV19TotalRegistros",fld:"vTOTALREGISTROS",pic:"ZZZZZ9"},{av:"AV18TotalPage",fld:"vTOTALPAGE",pic:"ZZZZZZZ9"},{av:"AV12PageActual",fld:"vPAGEACTUAL",pic:"ZZZZZZZ9"},{av:'gx.fn.getCtrlProperty("TEXTPAGINADO","Caption")',ctrl:"TEXTPAGINADO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTBLOCKPAGINADO","Caption")',ctrl:"TEXTBLOCKPAGINADO",prop:"Caption"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms["GRID.ONLINEACTIVATE"]=[[{av:"A124TARE_USUARIO_REG",fld:"TARE_USUARIO_REG",pic:"",hsh:!0},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:'gx.fn.getCtrlProperty("BTNVISUALIZAR","Caption")',ctrl:"BTNVISUALIZAR",prop:"Caption"},{av:'gx.fn.getCtrlProperty("BTNEDITAR","Caption")',ctrl:"BTNEDITAR",prop:"Caption"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms["'PAGE PRIMERA'"]=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17TARE_DESCRIPCION",fld:"vTARE_DESCRIPCION",pic:""},{av:"AV11Fecha",fld:"vFECHA",pic:""},{av:"A74TABL_EST_ID",fld:"TABL_EST_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"AV13PageNro",fld:"vPAGENRO",pic:"ZZZZZZZ9"},{av:"AV18TotalPage",fld:"vTOTALPAGE",pic:"ZZZZZZZ9"},{av:"AV19TotalRegistros",fld:"vTOTALREGISTROS",pic:"ZZZZZ9"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:"AV13PageNro",fld:"vPAGENRO",pic:"ZZZZZZZ9"},{av:"AV12PageActual",fld:"vPAGEACTUAL",pic:"ZZZZZZZ9"},{av:'gx.fn.getCtrlProperty("TEXTPAGINADO","Caption")',ctrl:"TEXTPAGINADO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTBLOCKPAGINADO","Caption")',ctrl:"TEXTBLOCKPAGINADO",prop:"Caption"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms["'PAGE ANTERIOR'"]=[[{av:"AV12PageActual",fld:"vPAGEACTUAL",pic:"ZZZZZZZ9"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17TARE_DESCRIPCION",fld:"vTARE_DESCRIPCION",pic:""},{av:"AV11Fecha",fld:"vFECHA",pic:""},{av:"A74TABL_EST_ID",fld:"TABL_EST_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"AV13PageNro",fld:"vPAGENRO",pic:"ZZZZZZZ9"},{av:"AV18TotalPage",fld:"vTOTALPAGE",pic:"ZZZZZZZ9"},{av:"AV19TotalRegistros",fld:"vTOTALREGISTROS",pic:"ZZZZZ9"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:"AV13PageNro",fld:"vPAGENRO",pic:"ZZZZZZZ9"},{av:"AV12PageActual",fld:"vPAGEACTUAL",pic:"ZZZZZZZ9"},{av:'gx.fn.getCtrlProperty("TEXTPAGINADO","Caption")',ctrl:"TEXTPAGINADO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTBLOCKPAGINADO","Caption")',ctrl:"TEXTBLOCKPAGINADO",prop:"Caption"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms["'PAGE SIGUIENTE'"]=[[{av:"AV12PageActual",fld:"vPAGEACTUAL",pic:"ZZZZZZZ9"},{av:"AV18TotalPage",fld:"vTOTALPAGE",pic:"ZZZZZZZ9"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17TARE_DESCRIPCION",fld:"vTARE_DESCRIPCION",pic:""},{av:"AV11Fecha",fld:"vFECHA",pic:""},{av:"A74TABL_EST_ID",fld:"TABL_EST_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"AV13PageNro",fld:"vPAGENRO",pic:"ZZZZZZZ9"},{av:"AV19TotalRegistros",fld:"vTOTALREGISTROS",pic:"ZZZZZ9"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:"AV13PageNro",fld:"vPAGENRO",pic:"ZZZZZZZ9"},{av:"AV12PageActual",fld:"vPAGEACTUAL",pic:"ZZZZZZZ9"},{av:'gx.fn.getCtrlProperty("TEXTPAGINADO","Caption")',ctrl:"TEXTPAGINADO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTBLOCKPAGINADO","Caption")',ctrl:"TEXTBLOCKPAGINADO",prop:"Caption"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms["'PAGE ULTIMA'"]=[[{av:"AV18TotalPage",fld:"vTOTALPAGE",pic:"ZZZZZZZ9"},{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV17TARE_DESCRIPCION",fld:"vTARE_DESCRIPCION",pic:""},{av:"AV11Fecha",fld:"vFECHA",pic:""},{av:"A74TABL_EST_ID",fld:"TABL_EST_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"AV13PageNro",fld:"vPAGENRO",pic:"ZZZZZZZ9"},{av:"AV19TotalRegistros",fld:"vTOTALREGISTROS",pic:"ZZZZZ9"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:"AV13PageNro",fld:"vPAGENRO",pic:"ZZZZZZZ9"},{av:"AV12PageActual",fld:"vPAGEACTUAL",pic:"ZZZZZZZ9"},{av:'gx.fn.getCtrlProperty("TEXTPAGINADO","Caption")',ctrl:"TEXTPAGINADO",prop:"Caption"},{av:'gx.fn.getCtrlProperty("TEXTBLOCKPAGINADO","Caption")',ctrl:"TEXTBLOCKPAGINADO",prop:"Caption"},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms.VALIDV_FECHA=[[{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms.VALID_TABL_ID=[[{av:"A556TABL_NOMBRE",fld:"TABL_NOMBRE",pic:""},{av:"A618TARE_PROYNOM",fld:"TARE_PROYNOM",pic:""},{av:"A71TABL_ID",fld:"TABL_ID",pic:"ZZZZZZZZZ9",hsh:!0},{av:"A125TARE_PROYID",fld:"TARE_PROYID",pic:""},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:"A556TABL_NOMBRE",fld:"TABL_NOMBRE",pic:""},{av:"A618TARE_PROYNOM",fld:"TARE_PROYNOM",pic:""},{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.EvtParms.VALID_TARE_PROYID=[[{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}],[{av:"AV21MostrarBlancoProy",fld:"vMOSTRARBLANCOPROY",pic:"9"}]];this.setVCMap("AV6TABL_ID","vTABL_ID",0,"int",10,0);this.setVCMap("AV24TABL_EST_ID","vTABL_EST_ID",0,"int",10,0);this.setVCMap("AV13PageNro","vPAGENRO",0,"int",8,0);t.addRefreshingVar(this.GXValidFnc[17]);t.addRefreshingVar(this.GXValidFnc[21]);t.addRefreshingVar(this.GXValidFnc[25]);t.addRefreshingVar({rfrVar:"A74TABL_EST_ID",rfrProp:"Value",gxAttId:"74"});t.addRefreshingParm(this.GXValidFnc[17]);t.addRefreshingParm(this.GXValidFnc[21]);t.addRefreshingParm(this.GXValidFnc[25]);t.addRefreshingParm({rfrVar:"A74TABL_EST_ID",rfrProp:"Value",gxAttId:"74"});this.Initialize();this.setComponent({id:"WC",GXClass:null,Prefix:"W0093",lvl:1})});gx.wi(function(){gx.createParentObj(wbp_act_tareas_grid)})