webpackJsonp([2],{"7QVd":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};n.d(o,"addWords",function(){return d}),n.d(o,"addImages",function(){return f});var a=n("7+uW"),i=n("/ocq");a.default.use(i.a);var r=new i.a({routes:[{path:"/",name:"图片在线合成工具",meta:{},component:function(t){return n.e(0).then(function(){var e=[n("8hXn")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]});r.beforeEach(function(t,e,n){0==t.matched.length?n({path:"/"}):n()});var u=r,s=n("NYxO"),l=n("Dd8w"),c=n.n(l),d=function(t,e){var n={"z-index":t.stage.dancers.length+1};t.stage.dancers.unshift({id:(new Date).getTime(),show:!0,type:"text",text:e,style:c()({},t.textDefaultStyle,n)})},f=function(t,e){var n={width:e.width,height:e.height,"z-index":t.stage.dancers.length+1};t.stage.dancers.unshift({id:(new Date).getTime(),show:!0,type:"img",name:e.name,src:e.src,ow:e.width,oh:e.height,style:c()({},t.imgDeafultStyle,n)})};a.default.use(s.a);var p=new s.a.Store({state:{start:!1,id:"",lockScale:!1,layer:!0,mask:{show:!1,title:"Loading stage..."},stage:{style:{width:500,height:500,"background-color":"#fff","border-bottom-left-radius":0,"border-bottom-right-radius":0,"border-top-left-radius":0,"border-top-right-radius":0},auxiliaryLine:!1,presetLine:[],show:!0,dancers:[]},imgDeafultStyle:{position:"absolute",left:0,top:0,"z-index":1,rotate:0,"object-fit":"unset",opacity:1},textDefaultStyle:{position:"absolute",left:0,top:0,"z-index":1,rotate:0,"text-align":"left","font-family":"","font-weight":"normal","font-style":"normal","text-decoration":"none","font-size":25,"letter-spacing":0,"line-height":25,color:"#000"}},mutations:o}),h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var m=n("VU/8")(null,h,!1,function(t){n("p/x5")},null,null).exports,g=n("b3L9"),v=n.n(g);n("7QVd"),n("P92s");a.default.directive("move",{bind:function(t,e,n){t.onmousedown=function(t){var n=e.value.container,o=t.clientX-n.offsetLeft,a=t.clientY-n.offsetTop;document.onmousemove=function(t){var e=t.clientX-o,i=t.clientY-a;n.style.cssText+=";left:"+e+"px;top:"+i+"px;"},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}}}}),a.default.config.productionTip=!1,a.default.use(v.a),new a.default({el:"#app",router:u,store:p,components:{App:m},template:"<App/>"})},P92s:function(t,e){},"p/x5":function(t,e){}},["NHnr"]);