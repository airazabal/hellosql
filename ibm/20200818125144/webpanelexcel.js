/*!   GeneXus .NET Core 16_0_8-139369 on 8/6/2020 10:35:37.40
*/
gx.evt.autoSkip=!1;gx.define("webpanelexcel",!1,function(){this.ServerClass="webpanelexcel";this.PackageName="GeneXus.Programs";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.e112c2_client=function(){return this.executeServerEvent("ENTER",!0,null,!1,!1)};this.e132c2_client=function(){return this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];var n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6];this.GXLastCtrlId=6;n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAINTABLE",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"ENTER",grid:0,evt:"e112c2_client",std:"ENTER"};this.Events={e112c2_client:["ENTER",!0],e132c2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[],[]];this.EvtParms.ENTER=[[],[]];this.EnterCtrl=["ENTER"];this.Initialize()});gx.wi(function(){gx.createParentObj(webpanelexcel)})