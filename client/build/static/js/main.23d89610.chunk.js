(this.webpackJsonpgaetaenghome=this.webpackJsonpgaetaenghome||[]).push([[0],{29:function(e,t,n){e.exports=n(51)},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){e.exports=n.p+"static/media/gaetaeng.0bc93d60.gif"},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(25),r=n.n(c),u=(n(34),n(3));n(35),n(36),n(37);var o=function(){var e=Object(a.useState)("Wait! Timer"),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){c((new Date).toLocaleTimeString())}),1e3);return function(){return clearInterval(e)}}),[]),l.a.createElement("div",{id:"timer"},l.a.createElement("div",{id:"menu"},n))};n(38);var i=function(e){var t=e.CheckMenu,n=e.Address,a=e.Content;return l.a.createElement("element",{id:"MenuButton"},l.a.createElement("button",{onClick:function(){return t(a)}},l.a.createElement("div",null,a),"/"!==n?function(){return window.open(n)}:""))};var m=function(e){var t=1,n=Object(a.useState)("180px"),c=Object(u.a)(n,2),r=c[0],m=c[1],s=Object(a.useState)("absolute"),E=Object(u.a)(s,2),d=E[0],f=E[1],b={width:r,height:"92.7vh",position:d},h=function(){var e=window.innerWidth;console.log(e);m(e<800?"0px":"180px");f(e<800?"fixed":"absolute")};return Object(a.useEffect)((function(){h(),window.addEventListener("resize",h)}),[]),l.a.createElement("div",{id:"Navigation",style:b},l.a.createElement(o,null),l.a.createElement("div",{id:"MenuList"},l.a.createElement(i,{MenuIdx:t++,Address:"/",Content:"HOME",CheckMenu:e.CheckMenu}),l.a.createElement("hr",null),l.a.createElement(i,{MenuIdx:t++,Address:"/",Content:"MINIGAME",CheckMenu:e.CheckMenu}),l.a.createElement("hr",null),l.a.createElement(i,{MenuIdx:t++,Address:"/",Content:"BOARD",CheckMenu:e.CheckMenu}),l.a.createElement("hr",null),l.a.createElement(i,{MenuIdx:t++,Address:"https://github.com/GaeTaeng?tab=repositories",Content:"Github",CheckMenu:e.CheckMenu}),l.a.createElement("hr",null),l.a.createElement(i,{MenuIdx:t++,Address:"https://www.linkedin.com/in/tae-hun-kim-434552168/",Content:"LinkedIn",CheckMenu:e.CheckMenu}),l.a.createElement("hr",null),l.a.createElement(i,{MenuIdx:t++,Address:"/",Content:"PatchNote",CheckMenu:e.CheckMenu})))};n(39);var s=function(){return l.a.createElement("div",{id:"banner"},"This Point is Banner(\ube0c\ub8e8\uc2a4 \ubc30\ub108 \uc544\ub2d8)")},E=n(10),d=n.n(E),f=n(14),b=(n(41),n(22));function h(e){var t=e.checkstate,n={title:"",contents:"",writer:""},c=Object(a.useState)(n),r=Object(u.a)(c,2),o=r[0],i=r[1];function m(e){var t,n=e.target,a=n.title,l=n.writer,c=n.contents;i((t={},Object(b.a)(t,a,a),Object(b.a)(t,c,c),Object(b.a)(t,l,l),t))}function s(e){return E.apply(this,arguments)}function E(){return(E=Object(f.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,fetch("http://gaetaeng.com:5000/api/contents",{method:"POST",body:JSON.stringify(o)});case 3:e.sent,i(n),t("GITHUB"),t("BOARD");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:s},"\uc544\uc9c1 \uad6c\ud604 \uc911 !!!! ",l.a.createElement("br",null),"\uc81c\ubaa9 : ",l.a.createElement("input",{value:o.title,type:"text",name:"title",onChange:m}),"\uc791\uc131\uc790 : ",l.a.createElement("input",{value:o.writer,type:"text",name:"writer",onChange:m}),l.a.createElement("br",null),"\ub0b4\uc6a9 : ",l.a.createElement("input",{value:o.contents,type:"text",name:"contents",onChange:m}),l.a.createElement("br",null),l.a.createElement("button",{onClick:s},"\ub4f1\ub85d")," ",l.a.createElement("button",{onClick:function(){i(n),t("GITHUB"),t("BOARD")}},"\ucde8\uc18c")))}var v=n(72),O=n(73),g=n(74),p=n(77),k=n(75),j=n(76),C=n(78),M=n(70),S=Object(M.a)({root:{overflowX:"auto",maxWidth:"100vh",marginLeft:"25%"},table:{minWidth:"100vh"}});function w(){return console.log("Board!!"),l.a.createElement("div",{id:"Board"},l.a.createElement(N,null))}function N(){var e=S(),t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(0),i=Object(u.a)(o,2),m=i[0],s=i[1],E=Object(a.useState)(null),b=Object(u.a)(E,2),M=b[0],w=b[1],N=Object(a.useState)("BOARD"),I=Object(u.a)(N,2),y=I[0],A=I[1];function B(){return(B=Object(f.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://gaetaeng.com:5000/api/contents");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){clearInterval(M),console.log("CLEAR! timer "+M)}function D(){return(D=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert("undefined \uc5d0\ub7ec\uc778 \uac8c\uc2dc\ubb3c\ub4e4\uc744 \uc0ad\uc81c\ud558\uc600\uc2b5\ub2c8\ub2e4."),e.next=3,fetch("http://gaetaeng.com:5000/api/contentsdelete");case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){return w(setInterval((function(){s((function(e){return e>=100?0:e+1}))}),20)),console.log("timer ::: "+M),function(){return B.apply(this,arguments)}().then(r),function(){T()}}),[]);return l.a.createElement("div",null,"BOARD"===y?l.a.createElement(v.a,{className:e.root},l.a.createElement(O.a,null,l.a.createElement(g.a,null,l.a.createElement(k.a,null,"Mysql(MariaDB) + Material UI\ub97c \uc0ac\uc6a9\ud558\uc600\uc2b5\ub2c8\ub2e4."))),l.a.createElement(O.a,{className:e.table},l.a.createElement(g.a,null,l.a.createElement(k.a,null,l.a.createElement(j.a,null,"ID!"),l.a.createElement(j.a,null,"TITLE"),l.a.createElement(j.a,null,"CONTENT"),l.a.createElement(j.a,null,"WRITER"),l.a.createElement(j.a,null," DATE"))),l.a.createElement(p.a,null,c?console.log(c):console.log("posts is Null"),c?c.map((function(e,t){return l.a.createElement(x,{key:t,id:e.id,title:e.title,content:e.content,writer:e.writer,date:e.date,finish:T()})})):l.a.createElement(k.a,null,l.a.createElement(j.a,{colSpan:"5",align:"center"},l.a.createElement(C.a,{variant:"determinate",value:m}))))),l.a.createElement("button",{onClick:function(){A("NEW")}},"\uae00\uc4f0\uae30"),l.a.createElement("button",{onClick:function(){return D.apply(this,arguments)}},"\uc5d0\ub7ec\uc0ad\uc81c")):l.a.createElement("div",{id:"newPost"},l.a.createElement(h,{checkstate:function(e){A(e)}})),console.log(y))}function x(e){return l.a.createElement(k.a,null,l.a.createElement(j.a,null,e.id),l.a.createElement(j.a,null,e.title),l.a.createElement(j.a,null,e.content),l.a.createElement(j.a,null,e.writer),l.a.createElement(j.a,null,e.date))}n(46);var I=n(47);function y(){return l.a.createElement("element",{id:"home"},l.a.createElement("div",{className:"homeGroup"},l.a.createElement("div",{className:"FOOOOO"},"\uacf5 \uc0ac \uc911 !"),l.a.createElement("img",{src:I}),l.a.createElement("div",{className:"taeng"},"Welcome GaeTaeng's House!")," ",l.a.createElement("br",null),"HOME \uba54\uc778 \ud654\uba74\uc785\ub2c8\ub2e4!",l.a.createElement("br",null),"\ub098\uc911\uc5d0 \ub530\ub85c \uc124\uacc4\ud558\uc5ec \uad6c\ud604 \uc608\uc815\uc778 \ud398\uc774\uc9c0\uc785\ub2c8\ub2e4. ",l.a.createElement("br",null)))}n(48),n(49);function A(){var e=Object(a.useState)("\uc2dc\uc791"),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("\uc5ec\uae30\uc5d0 \uc785\ub825\ud558\uc5ec\uc8fc\uc138\uc694!"),o=Object(u.a)(r,2),i=o[0],m=o[1],s=Object(a.useState)(""),E=Object(u.a)(s,2),d=E[0],f=E[1],b=Object(a.useRef)(null),h=Object(a.useState)([]),v=Object(u.a)(h,2),O=v[0],g=(v[1],[]);function p(){n[n.length-1]===i[0]?(f("\uc815\ub2f5!"),c(i),m(""),g.push(i),O.push(i),console.log(O)):(console.log(O.length),f("\uc624\ub2f5!"),m("")),b.current.focus()}return l.a.createElement("element",{id:"Shiritori"},l.a.createElement("div",null,"\ub05d\ub9d0\uc787\uae30 ------"),l.a.createElement("div",{className:"Shiritori"},l.a.createElement("div",null,"\ud604\uc7ac\ub2e8\uc5b4 : "),l.a.createElement("div",{className:"word"},n),l.a.createElement("input",{ref:b,value:i,onChange:function(e){m(e.target.value)},onClick:function(){m("")},onKeyPress:function(e){"Enter"===e.key&&p()},maxLength:"4",minLength:"2"}),l.a.createElement("button",{onClick:p},"PASS!"),l.a.createElement("div",null,d),l.a.createElement("div",null,"\uc815\ub2f5 \uac1c\uc218 : ",O.length),l.a.createElement("div",null,O?O.map((function(e){return l.a.createElement("div",null,e)})):"\uc815\ub2f5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.")))}var B=n(23);n(50);function T(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(u.a)(r,2),i=o[0],m=o[1],s=Object(a.useState)([0,0,0,0,0,0,0,0,0]),E=Object(u.a)(s,2),d=E[0],f=E[1],b=Object(a.useState)([]),h=Object(u.a)(b,2),v=h[0],O=h[1],g=Object(a.useState)([]),p=Object(u.a)(g,2),k=p[0],j=p[1],C=Object(a.useState)([]),M=Object(u.a)(C,2),S=M[0],w=M[1],N=Object(a.useState)([]),x=Object(u.a)(N,2),I=x[0],y=(x[1],Object(a.useRef)(null));function A(){f([0,0,0,0,0,0,0,0,0]);var e=[];console.log("gd");for(var t=1;t<5;){var n=Math.floor(Math.random()*(d.length-1)+1);0===d[n]&&(d[n]=t++,e.push(n),console.log(d))}c(e),O([]),console.log("MakeNumber Strike"),console.log(v),j([]),w([])}function T(){I.push(i),console.log("CheckNumber start Strike"),console.log(v);for(var e=[0,0,0],t=0;t<4;t++){var a=n.indexOf(Number(i[t]));switch(console.log("IDX : "+a+"INPUT : "+i[t]),a){case t:e[0]++;break;case-1:e[2]++;break;default:e[1]++}}O([].concat(Object(B.a)(v),[e[0]])),console.log(e[0]),j([].concat(Object(B.a)(k),[e[1]])),w([].concat(Object(B.a)(S),[e[2]])),console.log("CheckNum : "),console.log(v),console.log(k),console.log(S)}return console.log("WORLD Strike"),console.log(v),void 0===n&&A(),l.a.createElement("element",{id:"Numberbaseball"},l.a.createElement("div",null,"\uc22b\uc790\uc57c\uad6c\uac8c\uc784 ----"),l.a.createElement("div",{className:"Numberbaseball"},l.a.createElement("input",{ref:y,onKeyPress:function(e){"Enter"===e.key&&(T(),m(""))},value:i,onChange:function(e){m(e.target.value),y.current.focus()},maxLength:"4"}),l.a.createElement("button",{onClick:function(){T(),y.current.focus()}},"GO!"),l.a.createElement("button",{onClick:function(){A(),m("")}},"\ucd08\uae30\ud654"),l.a.createElement("button",{onClick:function(e){alert("\ub79c\ub364\ud55c \uc911\ubcf5\ub418\uc9c0\uc54a\ub294 \uc22b\uc790 4\uc790\ub9ac\uac00 \uc9c0\uc815\ub420\uac81\ub2c8\ub2e4.(ex 1245)\n(\uadf8 4\uc790\ub9ac \uc22b\uc790\uc758 \uc704\uce58\uae4c\uc9c0 \uc815\ud655\ud788 \ub9de\ucd94\uba74 \uc815\ub2f5!)\n\uc608\uc0c1\ud558\ub294 \uc22b\uc790\ub97c \uc785\ub825\ud55c \ud6c4 GO! \ud074\ub9ad\n- \uac19\uc740\uc790\ub9ac \uac19\uc740 \uc22b\uc790\uba74 Strike!\n- \ub2e4\ub978\uc790\ub9ac \uac19\uc740 \uc22b\uc790\uba74 Ball!\n- \ub2e4\ub978\uc790\ub9ac \uc5c6\ub294 \uc22b\uc790\uba74 Out!\nex)(1245\uae30\uc900)1437 \uc785\ub825\uc2dc \n1Strike! 1Ball! 2Out!")}},"\uc124\uba85\uc11c"),console.log("MAIN Strike"),console.log(v),l.a.createElement("div",null,v.length>0?v.map((function(e,t){return 4===e?l.a.createElement("div",null,"\uc815\ub2f5 \uc22b\uc790 :: ",n," 4Strike!!!! \ud648\ub7f0\uc785\ub2c8\ub2e4 !!!!",l.a.createElement("br",null),"\ucd08\uae30\ud654 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ub2e4\uc2dc \uc9c4\ud589\ud558\uc5ec \uc8fc\uc138\uc694!"):l.a.createElement("div",null,e,"Strike!",k[t],"Ball!",S[t],"Out! ///   ",I[t])})):"0Strike!")))}function D(){return l.a.createElement("element",{id:"MiniGame"},l.a.createElement("div",{className:"games"},l.a.createElement("div",null,"\uac01 \uac8c\uc784\ub4e4\uc740 js\uac1c\ubc1c \uacf5\ubd80\ub97c \uc704\ud558\uc5ec \ucd94\uac00\ud55c \ub0b4\uc6a9\ub4e4 \uc785\ub2c8\ub2e4. ",l.a.createElement("br",null),"\uc7ac\ubbf8\ub85c \uc774\uc6a9\ud558\uc5ec \uc8fc\uc138\uc694 ^^ ",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement(T,null),l.a.createElement(A,null)))}function G(){return l.a.createElement("element",{id:"patchnote"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("td",null,"\ub0a0\uc9dc"),l.a.createElement("td",null,"\ub0b4\uc6a9")),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"2020\ub144 5\uc6d4 14\uc77c"),l.a.createElement("td",null,"Mysql(MariaDB) - node.js Express \uc5f0\ub3d9 \uc5d0\ub7ec \ud574\uacb0")),l.a.createElement("tr",null,l.a.createElement("td",null,"2020\ub144 5\uc6d4 14\uc77c"),l.a.createElement("td",null,"\uac8c\uc2dc\ud310 UI \uc218\uc815 && \uae00\uc4f0\ub294 \uacf5\uac04 \ub9cc\ub4e4\uae30\ub9cc \ud568.")),l.a.createElement("tr",null,l.a.createElement("td",null,"2020\ub144 5\uc6d4 15\uc77c"),l.a.createElement("td",null,"\ud328\uce58\ub178\ud2b8 \uc0dd\uc131 && \uc774\uc804\uae4c\uc9c0\uc758 \ud328\uce58\ub178\ud2b8\ub294 \uc791\uc131 X")),l.a.createElement("tr",null,l.a.createElement("td",null,"2020\ub144 5\uc6d4 15\uc77c"),l.a.createElement("td",null,"Navigation Bar \ud654\uba74 \ud06c\uae30\uc5d0 \ub530\ub77c width\uac12 \uc870\uc815")),l.a.createElement("tr",null,l.a.createElement("td",null,"2020\ub144 5\uc6d4 15\uc77c"),l.a.createElement("td",null,"video tag\ub97c \uc4f0\uba74 button \ucabd\uc5d0 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud558\uc5ec <img> \ud0dc\uadf8\uc5d0 gif \uc774\ubbf8\uc9c0 \uc0ac\uc6a9")))))}var R=function(e){return l.a.createElement("element",{id:"contents"},l.a.createElement(s,null),l.a.createElement("div",{className:"Checkmenus"},"HOME"===e.CheckMenu?l.a.createElement(y,null):"BOARD"===e.CheckMenu?l.a.createElement(w,null):"MINIGAME"===e.CheckMenu?l.a.createElement(D,null):"PatchNote"===e.CheckMenu?l.a.createElement(G,null):l.a.createElement("div",null,"Start ! ",e.CheckMenu," \ucd94\ud6c4 \uad6c\ud604 \uc608\uc815\uc778 \uba54\ub274\uc785\ub2c8\ub2e4.")))};var L=function(e){var t=Object(a.useState)("HOME"),n=Object(u.a)(t,2),c=n[0],r=n[1];return console.log("Start App"),l.a.createElement("div",{className:"App"},l.a.createElement(m,{CheckMenu:function(e){r(e)}}),l.a.createElement(R,{CheckMenu:c}),l.a.createElement("div",{id:"bottom"},"make with React_Node.js GaeTaeng's Home ",l.a.createElement("br",null),"Naver : nuckly@naver.com ",l.a.createElement("br",null),"GMail : nuckly60@gmail.com ",l.a.createElement("br",null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);
//# sourceMappingURL=main.23d89610.chunk.js.map