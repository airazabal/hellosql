/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:36:14.3
*/
gx.evt.autoSkip=!1;gx.define("gx00e1",!1,function(){var n,t;this.ServerClass="gx00e1";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){this.AV8pTrabCod=gx.fn.getControlValue("vPTRABCOD");this.AV9pTActCod=gx.fn.getControlValue("vPTACTCOD");this.AV8pTrabCod=gx.fn.getControlValue("vPTRABCOD")};this.e134g1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle")),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]),gx.$.Deferred().resolve()};this.e114g1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("TACTCODFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("TACTCODFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCTACTCOD","Visible",!0)):(gx.fn.setCtrlProperty("TACTCODFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCTACTCOD","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TACTCODFILTERCONTAINER","Class")',ctrl:"TACTCODFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCTACTCOD","Visible")',ctrl:"vCTACTCOD",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e124g1_client=function(){return this.clearMessages(),gx.fn.getCtrlProperty("TACTDESFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("TACTDESFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCTACTDES","Visible",!0)):(gx.fn.setCtrlProperty("TACTDESFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCTACTDES","Visible",!1)),this.refreshOutputs([{av:'gx.fn.getCtrlProperty("TACTDESFILTERCONTAINER","Class")',ctrl:"TACTDESFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCTACTDES","Visible")',ctrl:"vCTACTDES",prop:"Visible"}]),gx.$.Deferred().resolve()};this.e164g2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e174g1_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37,38,39,40,41];this.GXLastCtrlId=41;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",34,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00e1",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",35,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(31,36,"TACTCOD","Tipo Actividad","","TActCod","char",0,"px",2,2,"left",null,[],31,"TActCod",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(577,37,"TACTDES","Descripción Tipo de Actividad","","TActDes","svchar",0,"px",50,50,"left",null,[],577,"TActDes",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addSingleLineEdit(4,38,"TRABCOD","Código de Trabajo","","TrabCod","char",0,"px",5,5,"left",null,[],4,"TrabCod",!1,0,!1,!1,"Attribute",1,"");this.Grid1Container.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"ADVANCEDCONTAINER",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[9]={id:9,fld:"TACTCODFILTERCONTAINER",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"LBLTACTCODFILTER",format:1,grid:0,evt:"e114g1_client"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,lvl:0,type:"char",len:2,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCTACTCOD",gxz:"ZV6cTActCod",gxold:"OV6cTActCod",gxvar:"AV6cTActCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV6cTActCod=n)},v2z:function(n){n!==undefined&&(gx.O.ZV6cTActCod=n)},v2c:function(){gx.fn.setControlValue("vCTACTCOD",gx.O.AV6cTActCod,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV6cTActCod=this.val())},val:function(){return gx.fn.getControlValue("vCTACTCOD")},nac:gx.falseFn};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"TACTDESFILTERCONTAINER",grid:0};n[20]={id:20,fld:"",grid:0};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"LBLTACTDESFILTER",format:1,grid:0,evt:"e124g1_client"};n[23]={id:23,fld:"",grid:0};n[24]={id:24,fld:"",grid:0};n[25]={id:25,fld:"",grid:0};n[26]={id:26,lvl:0,type:"svchar",len:50,dec:0,sign:!1,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Grid1Container],fld:"vCTACTDES",gxz:"ZV7cTActDes",gxold:"OV7cTActDes",gxvar:"AV7cTActDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV7cTActDes=n)},v2z:function(n){n!==undefined&&(gx.O.ZV7cTActDes=n)},v2c:function(){gx.fn.setControlValue("vCTACTDES",gx.O.AV7cTActDes,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV7cTActDes=this.val())},val:function(){return gx.fn.getControlValue("vCTACTDES")},nac:gx.falseFn};n[27]={id:27,fld:"",grid:0};n[28]={id:28,fld:"GRIDTABLE",grid:0};n[29]={id:29,fld:"",grid:0};n[30]={id:30,fld:"",grid:0};n[31]={id:31,fld:"BTNTOGGLE",grid:0,evt:"e134g1_client"};n[32]={id:32,fld:"",grid:0};n[33]={id:33,fld:"",grid:0};n[35]={id:35,lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.AV5LinkSelection=n)},v2z:function(n){n!==undefined&&(gx.O.ZV5LinkSelection=n)},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(34),gx.O.AV5LinkSelection,gx.O.AV13Linkselection_GXI)},c2v:function(n){gx.O.AV13Linkselection_GXI=this.val_GXI();this.val(n)!==undefined&&(gx.O.AV5LinkSelection=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(34))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(34))},gxvar_GXI:"AV13Linkselection_GXI",nac:gx.falseFn};n[36]={id:36,lvl:2,type:"char",len:2,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TACTCOD",gxz:"Z31TActCod",gxold:"O31TActCod",gxvar:"A31TActCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A31TActCod=n)},v2z:function(n){n!==undefined&&(gx.O.Z31TActCod=n)},v2c:function(n){gx.fn.setGridControlValue("TACTCOD",n||gx.fn.currentGridRowImpl(34),gx.O.A31TActCod,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A31TActCod=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TACTCOD",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[37]={id:37,lvl:2,type:"svchar",len:50,dec:0,sign:!1,pic:"@!",ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TACTDES",gxz:"Z577TActDes",gxold:"O577TActDes",gxvar:"A577TActDes",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A577TActDes=n)},v2z:function(n){n!==undefined&&(gx.O.Z577TActDes=n)},v2c:function(n){gx.fn.setGridControlValue("TACTDES",n||gx.fn.currentGridRowImpl(34),gx.O.A577TActDes,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A577TActDes=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TACTDES",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[38]={id:38,lvl:2,type:"char",len:5,dec:0,sign:!1,ro:1,isacc:0,grid:34,gxgrid:this.Grid1Container,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"TRABCOD",gxz:"Z4TrabCod",gxold:"O4TrabCod",gxvar:"A4TrabCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A4TrabCod=n)},v2z:function(n){n!==undefined&&(gx.O.Z4TrabCod=n)},v2c:function(n){gx.fn.setGridControlValue("TRABCOD",n||gx.fn.currentGridRowImpl(34),gx.O.A4TrabCod,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A4TrabCod=this.val(n))},val:function(n){return gx.fn.getGridControlValue("TRABCOD",n||gx.fn.currentGridRowImpl(34))},nac:gx.falseFn};n[39]={id:39,fld:"",grid:0};n[40]={id:40,fld:"",grid:0};n[41]={id:41,fld:"BTN_CANCEL",grid:0,evt:"e174g1_client"};this.AV6cTActCod="";this.ZV6cTActCod="";this.OV6cTActCod="";this.AV7cTActDes="";this.ZV7cTActDes="";this.OV7cTActDes="";this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z31TActCod="";this.O31TActCod="";this.Z577TActDes="";this.O577TActDes="";this.Z4TrabCod="";this.O4TrabCod="";this.AV6cTActCod="";this.AV7cTActDes="";this.AV8pTrabCod="";this.AV9pTActCod="";this.AV5LinkSelection="";this.A31TActCod="";this.A577TActDes="";this.A4TrabCod="";this.Events={e164g2_client:["ENTER",!0],e174g1_client:["CANCEL",!0],e134g1_client:["'TOGGLE'",!1],e114g1_client:["LBLTACTCODFILTER.CLICK",!1],e124g1_client:["LBLTACTDESFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cTActCod",fld:"vCTACTCOD",pic:""},{av:"AV7cTActDes",fld:"vCTACTDES",pic:"@!"},{av:"AV8pTrabCod",fld:"vPTRABCOD",pic:""}],[]];this.EvtParms.START=[[],[{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLTACTCODFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("TACTCODFILTERCONTAINER","Class")',ctrl:"TACTCODFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("TACTCODFILTERCONTAINER","Class")',ctrl:"TACTCODFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCTACTCOD","Visible")',ctrl:"vCTACTCOD",prop:"Visible"}]];this.EvtParms["LBLTACTDESFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("TACTDESFILTERCONTAINER","Class")',ctrl:"TACTDESFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("TACTDESFILTERCONTAINER","Class")',ctrl:"TACTDESFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCTACTDES","Visible")',ctrl:"vCTACTDES",prop:"Visible"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION",pic:""}]];this.EvtParms.ENTER=[[{av:"A31TActCod",fld:"TACTCOD",pic:"",hsh:!0}],[{av:"AV9pTActCod",fld:"vPTACTCOD",pic:""}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cTActCod",fld:"vCTACTCOD",pic:""},{av:"AV7cTActDes",fld:"vCTACTDES",pic:"@!"},{av:"AV8pTrabCod",fld:"vPTRABCOD",pic:""}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cTActCod",fld:"vCTACTCOD",pic:""},{av:"AV7cTActDes",fld:"vCTACTDES",pic:"@!"},{av:"AV8pTrabCod",fld:"vPTRABCOD",pic:""}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cTActCod",fld:"vCTACTCOD",pic:""},{av:"AV7cTActDes",fld:"vCTACTDES",pic:"@!"},{av:"AV8pTrabCod",fld:"vPTRABCOD",pic:""}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{ctrl:"GRID1",prop:"Rows"},{av:"AV6cTActCod",fld:"vCTACTCOD",pic:""},{av:"AV7cTActDes",fld:"vCTACTDES",pic:"@!"},{av:"AV8pTrabCod",fld:"vPTRABCOD",pic:""}],[]];this.setVCMap("AV8pTrabCod","vPTRABCOD",0,"char",5,0);this.setVCMap("AV9pTActCod","vPTACTCOD",0,"char",2,0);this.setVCMap("AV8pTrabCod","vPTRABCOD",0,"char",5,0);this.setVCMap("AV8pTrabCod","vPTRABCOD",0,"char",5,0);t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar({rfrVar:"AV8pTrabCod"});t.addRefreshingParm(this.GXValidFnc[16]);t.addRefreshingParm(this.GXValidFnc[26]);t.addRefreshingParm({rfrVar:"AV8pTrabCod"});this.Initialize()});gx.wi(function(){gx.createParentObj(gx00e1)})