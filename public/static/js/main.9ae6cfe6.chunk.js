(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],{63:function(e,t,n){},64:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=64},88:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(23),c=n.n(r),i=(n(63),n(27)),s=n(7),l=n(17),d=n(29),j=n(30),u=n(35),b=n(34),h=n(31),O=n.n(h),f=n(2),g=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).referrer=function(e){console.log(e,a.state.remoteStream),a.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{ownVideo:e})}))},a.state={remoteStream:void 0,ownVideo:void 0},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.peer=new O.a("sdyfugaiufgybiuegfsdg",{host:"192.168.0.104",port:9e3,path:"/peerjs/myapp"}),console.log(this.peer),this.peer.on("connection",(function(e){console.log(e),e.on("data",(function(e){console.log(e)}))}));var e=this,t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;this.peer.on("call",(function(n){t({video:!0,audio:!0},(function(t){console.log(t),n.answer(t),n.on("stream",(function(t){e.state.ownVideo.srcObject=t,e.setState({remoteStream:t})}))}),(function(e){console.log("Failed to get local stream",e)}))}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:["LandingPage",Object(f.jsx)("video",{width:"300px",height:"200px",autoPlay:!0,ref:this.referrer})]})}}]),n}(o.a.Component),p=n(114),x=n(128),v=n(115),m=n(116),w=n(117),y=n(119),S=n(118),F=n(120),C=n(121),k=n(122),B=Object(p.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}));function I(e){var t=B();return Object(f.jsxs)(o.a.Fragment,{children:[Object(f.jsx)(v.a,{}),e.children,Object(f.jsx)(x.a,{position:"fixed",color:"primary",className:t.appBar,children:Object(f.jsxs)(m.a,{children:[Object(f.jsx)(w.a,{edge:"start",color:"inherit","aria-label":"open drawer",children:Object(f.jsx)(S.a,{})}),Object(f.jsx)(y.a,{color:"secondary","aria-label":"add",className:t.fabButton,children:Object(f.jsx)(F.a,{})}),Object(f.jsx)("div",{className:t.grow}),Object(f.jsx)(w.a,{color:"inherit",children:Object(f.jsx)(C.a,{})}),Object(f.jsx)(w.a,{edge:"end",color:"inherit",children:Object(f.jsx)(k.a,{})})]})})]})}var M=n(50),N=n(51),T=n(48),U=n.n(T),D=n(49),P=n(126),L=n(124),E=n(123),G=n(125);function V(e){var t=e.children,n=e.value,a=e.index,o=Object(N.a)(e,["children","value","index"]);return Object(f.jsx)("div",Object(l.a)(Object(l.a)({role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},o),{},{children:n===a&&Object(f.jsx)(G.a,{p:3,children:Object(f.jsx)(E.a,{children:t})})}))}function z(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var H=Object(p.a)((function(e){return{root:{backgroundColor:e.palette.background.default,width:500}}}));function J(){var e=H(),t=Object(D.a)(),n=o.a.useState(0),a=Object(M.a)(n,2),r=a[0],c=a[1];return Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)(x.a,{position:"static",color:"primary",style:{width:"100vw"},children:Object(f.jsxs)(P.a,{value:r,onChange:function(e,t){c(t)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth","aria-label":"full width tabs example",children:[Object(f.jsx)(L.a,Object(l.a)({label:"Home"},z(0))),Object(f.jsx)(L.a,Object(l.a)({label:"Share"},z(1))),Object(f.jsx)(L.a,Object(l.a)({label:"Files"},z(2)))]})}),Object(f.jsxs)(U.a,{axis:"rtl"===t.direction?"x-reverse":"x",index:r,style:{width:"100vw"},onChangeIndex:function(e){c(e)},children:[Object(f.jsx)(V,{value:r,index:0,dir:t.direction,children:"Item One"}),Object(f.jsx)(V,{value:r,index:1,dir:t.direction,children:"Item Two"}),Object(f.jsx)(V,{value:r,index:2,dir:t.direction,children:"Item Three"})]})]})}var _=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;Object(d.a)(this,n),(a=t.call(this,e)).state={},a.peer=new O.a("eugiuesgyfiueghiuesdhgoiursgrtgRTDS",{host:"192.168.0.104",port:9e3,path:"/peerjs/myapp"});var o=a.peer,r=a.peer.connect("sdyfugaiufgybiuegfsdg");return console.log(r,a.peer.id),r.on("open",(function(){console.log("SFFFSS"),r.send("hi!"),window.navigator.getUserMedia({video:!0,audio:!0},(function(e){o.call("sdyfugaiufgybiuegfsdg",e).on("stream",(function(t){console.log(e)}))}),(function(e){console.log("Failed to get local stream",e)}))})),a}return Object(j.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(I,{}),Object(f.jsx)(J,{}),"Home Page"]})}}]),n}(o.a.Component);n(88);var A=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(i.a,{children:Object(f.jsxs)(s.c,{children:[Object(f.jsx)(s.a,{exact:!0,path:"/",render:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(i.b,{to:"/first",children:"First"}),Object(f.jsx)(i.b,{to:"/second",children:"Second"})]})}}),Object(f.jsx)(s.a,{path:"/first",exact:!0,component:g}),Object(f.jsx)(s.a,{path:"/second",component:_})]})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,129)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root")),R()}},[[91,1,2]]]);
//# sourceMappingURL=main.9ae6cfe6.chunk.js.map