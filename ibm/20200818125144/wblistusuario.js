/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:35:10.99
*/
gx.evt.autoSkip=!1;gx.define("wblistusuario",!1,function(){var n,t;this.ServerClass="wblistusuario";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.GxUseCod=gx.fn.getControlValue("vGXUSECOD");this.GxUseNomCo=gx.fn.getControlValue("vGXUSENOMCO")};this.e110a2_client=function(){return this.executeServerEvent("USECOD.CLICK",!0,arguments[0],!1,!1)};this.e120a2_client=function(){return this.executeServerEvent("USENOM.CLICK",!0,arguments[0],!1,!1)};this.e130a2_client=function(){return this.executeServerEvent("USEAPEPAT.CLICK",!0,arguments[0],!1,!1)};this.e140a2_client=function(){return this.executeServerEvent("USEAPEMAT.CLICK",!0,arguments[0],!1,!1)};this.e160a2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e170a2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25];this.GXLastCtrlId=25;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",21,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"wblistusuario",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.Grid1Container;t.addSingleLineEdit(41,22,"USECOD","Usuario","","UseCod","svchar",0,"px",20,20,"left","e110a2_client",[],41,"UseCod",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(350,23,"USENOM","Nombre","","UseNom","char",0,"px",30,30,"left","e120a2_client",[],350,"UseNom",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(351,24,"USEAPEPAT","Apellido Paterno","","UseApePat","char",0,"px",20,20,"left","e130a2_client",[],351,"UseApePat",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(352,25,"USEAPEMAT","Apellido Materno","","UseApeMat","char",0,"px",20,20,"left","e140a2_client",[],352,"UseApeMat",!0,0,!1,!1,"Attribute",1,"WWColumn");this.Grid1Container.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"TABLE2",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TABLE1",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"",grid:0};n[13]={id:13,fld:"",grid:0};n[14]={id:14,lvl:0,type:"svchar",len:20,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vUSECOD",gxz:"ZV6UseCod",gxold:"OV6UseCod",gxvar:"AV6UseCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6UseCod=n)},v2z:function(n){n!==undefined&&(gx.O.ZV6UseCod=n)},v2c:function(){gx.fn.setControlValue("vUSECOD",gx.O.AV6UseCod,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6UseCod=this.val())},val:function(){return gx.fn.getControlValue("vUSECOD")},nac:gx.falseFn};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"",grid:0};n[17]={id:17,fld:"",grid:0};n[18]={id:18,lvl:0,type:"char",len:100,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vUSENOMCO",gxz:"ZV5UseNomCo",gxold:"OV5UseNomCo",gxvar:"AV5UseNomCo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV5UseNomCo=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5UseNomCo=n)},v2c:function(){gx.fn.setControlValue("vUSENOMCO",gx.O.AV5UseNomCo,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV5UseNomCo=this.val())},val:function(){return gx.fn.getControlValue("vUSENOMCO")},nac:gx.falseFn};n[19]={id:19,fld:"",grid:0};n[20]={id:20,fld:"",grid:0};n[22]={id:22,lvl:2,type:"svchar",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USECOD",gxz:"Z41UseCod",gxold:"O41UseCod",gxvar:"A41UseCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A41UseCod=n)},v2z:function(n){n!==undefined&&(gx.O.Z41UseCod=n)},v2c:function(n){gx.fn.setGridControlValue("USECOD",n||gx.fn.currentGridRowImpl(21),gx.O.A41UseCod,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A41UseCod=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USECOD",n||gx.fn.currentGridRowImpl(21))},nac:gx.falseFn,evt:"e110a2_client"};n[23]={id:23,lvl:2,type:"char",len:30,dec:0,sign:!1,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USENOM",gxz:"Z350UseNom",gxold:"O350UseNom",gxvar:"A350UseNom",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A350UseNom=n)},v2z:function(n){n!==undefined&&(gx.O.Z350UseNom=n)},v2c:function(n){gx.fn.setGridControlValue("USENOM",n||gx.fn.currentGridRowImpl(21),gx.O.A350UseNom,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A350UseNom=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USENOM",n||gx.fn.currentGridRowImpl(21))},nac:gx.falseFn,evt:"e120a2_client"};n[24]={id:24,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USEAPEPAT",gxz:"Z351UseApePat",gxold:"O351UseApePat",gxvar:"A351UseApePat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A351UseApePat=n)},v2z:function(n){n!==undefined&&(gx.O.Z351UseApePat=n)},v2c:function(n){gx.fn.setGridControlValue("USEAPEPAT",n||gx.fn.currentGridRowImpl(21),gx.O.A351UseApePat,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A351UseApePat=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USEAPEPAT",n||gx.fn.currentGridRowImpl(21))},nac:gx.falseFn,evt:"e130a2_client"};n[25]={id:25,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:21,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USEAPEMAT",gxz:"Z352UseApeMat",gxold:"O352UseApeMat",gxvar:"A352UseApeMat",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A352UseApeMat=n)},v2z:function(n){n!==undefined&&(gx.O.Z352UseApeMat=n)},v2c:function(n){gx.fn.setGridControlValue("USEAPEMAT",n||gx.fn.currentGridRowImpl(21),gx.O.A352UseApeMat,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A352UseApeMat=this.val(n))},val:function(n){return gx.fn.getGridControlValue("USEAPEMAT",n||gx.fn.currentGridRowImpl(21))},nac:gx.falseFn,evt:"e140a2_client"};this.AV6UseCod="";this.ZV6UseCod="";this.OV6UseCod="";this.AV5UseNomCo="";this.ZV5UseNomCo="";this.OV5UseNomCo="";this.Z41UseCod="";this.O41UseCod="";this.Z350UseNom="";this.O350UseNom="";this.Z351UseApePat="";this.O351UseApePat="";this.Z352UseApeMat="";this.O352UseApeMat="";this.AV6UseCod="";this.AV5UseNomCo="";this.GxUseCod="";this.GxUseNomCo="";this.A666UseEst="";this.A41UseCod="";this.A350UseNom="";this.A351UseApePat="";this.A352UseApeMat="";this.Events={e110a2_client:["USECOD.CLICK",!0],e120a2_client:["USENOM.CLICK",!0],e130a2_client:["USEAPEPAT.CLICK",!0],e140a2_client:["USEAPEMAT.CLICK",!0],e160a2_client:["ENTER",!0],e170a2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6UseCod",fld:"vUSECOD",pic:""},{av:"AV5UseNomCo",fld:"vUSENOMCO",pic:""}],[]];this.EvtParms["USECOD.CLICK"]=[[{av:"A41UseCod",fld:"USECOD",pic:"",hsh:!0},{av:"A352UseApeMat",fld:"USEAPEMAT",pic:"",hsh:!0},{av:"A351UseApePat",fld:"USEAPEPAT",pic:"",hsh:!0},{av:"A350UseNom",fld:"USENOM",pic:"",hsh:!0}],[{av:"GxUseCod",fld:"vGXUSECOD",pic:""},{av:"GxUseNomCo",fld:"vGXUSENOMCO",pic:""}]];this.EvtParms["USENOM.CLICK"]=[[{av:"A41UseCod",fld:"USECOD",pic:"",hsh:!0},{av:"A352UseApeMat",fld:"USEAPEMAT",pic:"",hsh:!0},{av:"A351UseApePat",fld:"USEAPEPAT",pic:"",hsh:!0},{av:"A350UseNom",fld:"USENOM",pic:"",hsh:!0}],[{av:"GxUseCod",fld:"vGXUSECOD",pic:""},{av:"GxUseNomCo",fld:"vGXUSENOMCO",pic:""}]];this.EvtParms["USEAPEPAT.CLICK"]=[[{av:"A41UseCod",fld:"USECOD",pic:"",hsh:!0},{av:"A352UseApeMat",fld:"USEAPEMAT",pic:"",hsh:!0},{av:"A351UseApePat",fld:"USEAPEPAT",pic:"",hsh:!0},{av:"A350UseNom",fld:"USENOM",pic:"",hsh:!0}],[{av:"GxUseCod",fld:"vGXUSECOD",pic:""},{av:"GxUseNomCo",fld:"vGXUSENOMCO",pic:""}]];this.EvtParms["USEAPEMAT.CLICK"]=[[{av:"A41UseCod",fld:"USECOD",pic:"",hsh:!0},{av:"A352UseApeMat",fld:"USEAPEMAT",pic:"",hsh:!0},{av:"A351UseApePat",fld:"USEAPEPAT",pic:"",hsh:!0},{av:"A350UseNom",fld:"USENOM",pic:"",hsh:!0}],[{av:"GxUseCod",fld:"vGXUSECOD",pic:""},{av:"GxUseNomCo",fld:"vGXUSENOMCO",pic:""}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6UseCod",fld:"vUSECOD",pic:""},{av:"AV5UseNomCo",fld:"vUSENOMCO",pic:""}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6UseCod",fld:"vUSECOD",pic:""},{av:"AV5UseNomCo",fld:"vUSENOMCO",pic:""}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6UseCod",fld:"vUSECOD",pic:""},{av:"AV5UseNomCo",fld:"vUSENOMCO",pic:""}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6UseCod",fld:"vUSECOD",pic:""},{av:"AV5UseNomCo",fld:"vUSENOMCO",pic:""}],[]];this.setVCMap("GxUseCod","vGXUSECOD",0,"svchar",20,0);this.setVCMap("GxUseNomCo","vGXUSENOMCO",0,"char",100,0);t.addRefreshingVar(this.GXValidFnc[14]);t.addRefreshingVar(this.GXValidFnc[18]);t.addRefreshingParm(this.GXValidFnc[14]);t.addRefreshingParm(this.GXValidFnc[18]);this.Initialize()});gx.wi(function(){gx.createParentObj(wblistusuario)})