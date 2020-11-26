/*! For license information please see main.beabbafd.chunk.js.LICENSE.txt */
(this.webpackJsonpweb_client=this.webpackJsonpweb_client||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a,c=n(2),i=n(0),r=n.n(i),s=n(10),o=n.n(s),l=(n(97),n(46)),j=n(16),d=n(74),b=n(75),u=n(32),m=n(54),h=n.n(m),x=n(76),O=n(58),p=n(77),f=n.n(p),g=Object(O.a)("commands/fetchCommands",Object(x.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://5fb057bb7edddb0016468450.mockapi.io/commands");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),v=Object(O.b)({name:"commands",initialState:{commands:[],status:"idle",error:null},reducers:{},extraReducers:(a={},Object(u.a)(a,g.pending,(function(e,t){e.status="loading"})),Object(u.a)(a,g.fulfilled,(function(e,t){e.status="succeeded",e.commands=t.payload})),Object(u.a)(a,g.rejected,(function(e,t){e.status="failed",e.error=t.error.message})),a)}),y=function(e){return e.commands.commands};Object(b.a)(v.actions);var N=v.reducer,w=Object(j.c)({commands:N}),k=Object(j.e)(w,Object(j.a)(d.a)),S=n(36),D=n(53),C=n(12),R=n(84),W=n(174),_=n(170),B=n(154),L=n(169),T=n(47),A=Object(B.a)((function(e){return{root:{display:"flex",flexDirection:"column"}}}));function P(){var e=A();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(T.a,{variant:"h6",children:"Home page"})})}var I=r.a.createContext(),E=n(171),H=n(158),J=n(175),F=n(159),K=n(157),M=Object(B.a)((function(e){return{root:{height:"100%"},list:{width:250}}})),$=[{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:""},{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0431\u043e\u0442\u0430",path:"bot_settings"},{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043e\u043c\u0430\u043d\u0434",path:"command_settings"},{title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u044b",path:"keyboard_settings"},{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",path:"statistics"}];function q(e){var t=e.open,n=M(),a=Object(C.f)(),r=Object(i.useContext)(I).toggleDrawer;return Object(c.jsxs)(E.a,{anchor:"left",open:t,onClose:function(){return r()},children:[Object(c.jsx)(K.a,{children:Object(c.jsx)(T.a,{variant:"h6",children:"Dorm bot"})}),Object(c.jsx)(H.a,{className:n.list,children:$.map((function(e){return Object(c.jsx)(J.a,{button:!0,onClick:function(){return t=e.path,a.push("/".concat(t)),void r();var t},children:Object(c.jsx)(F.a,{primary:e.title})},e.path)}))})]})}var z=n(161),G=n(82),Q=n.n(G),U=n(160),V=n(176),X=Object(B.a)((function(e){return{root:{},menuButton:{marginRight:e.spacing(2)},title:{},menu:{marginLeft:"auto"}}}));function Y(){var e=X(),t=Object(i.useContext)(I).toggleDrawer;return Object(c.jsx)(U.a,{color:"inherit",position:"fixed",elevation:0,children:Object(c.jsxs)(K.a,{children:[Object(c.jsx)(z.a,{edge:"start",className:e.menuButton,color:"inherit",onClick:function(){return t()},children:Object(c.jsx)(Q.a,{})}),Object(c.jsx)(T.a,{variant:"h6",className:e.title,children:"Dorm bot"}),Object(c.jsx)("div",{className:e.menu,children:Object(c.jsx)(z.a,{color:"inherit",children:Object(c.jsx)(V.a,{})})})]})})}var Z=Object(B.a)((function(e){return{root:{maxWidth:"100%",display:"flex",flexDirection:"column"}}}));function ee(){var e=Z();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(T.a,{variant:"h6",children:"BotSettingsPage"})})}var te=n(168),ne=n(164),ae=n(165),ce=n(162),ie=n(172),re=n(166),se=n(167),oe=n(173),le=n(4),je=n(83),de=n.n(je),be=n(163),ue=Object(B.a)((function(e){return{root:{padding:e.spacing(2),marginTop:e.spacing(1),marginBottom:e.spacing(1)},header:{display:"flex",alignItems:"center"},title:{marginRight:e.spacing(1)},content:{paddingLeft:0,paddingRight:0},contentSubtitle:{marginTop:e.spacing(2)},actions:{paddingLeft:0,paddingRight:0},synonyms:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1)}},response:{display:"flex",overflow:"auto",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},responseText:{whiteSpace:"pre-line"},active:{marginRight:e.spacing(2)},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));function me(e){var t=e.mainName,n=e.isActive,a=e.priority,r=e.synonyms,s=e.responses,o=ue(),j=Object(i.useState)(!1),d=Object(l.a)(j,2),b=d[0],m=d[1];return Object(c.jsxs)(ce.a,{variant:"outlined",className:o.root,children:[Object(c.jsxs)("div",{className:o.header,children:[Object(c.jsx)(ie.a,{color:"primary",className:o.active,checked:n,onChange:function(e){console.log(e.target.checked)}}),Object(c.jsx)(T.a,{className:o.title,variant:"h6",children:t}),Object(c.jsx)(T.a,{color:"textSecondary",variant:"subtitle2",children:a}),Object(c.jsx)(z.a,{className:Object(le.a)(o.expand,Object(u.a)({},o.expandOpen,b)),onClick:function(){return m(!b)},children:Object(c.jsx)(de.a,{})})]}),Object(c.jsx)(be.a,{in:b,children:Object(c.jsxs)(ne.a,{className:o.content,children:[Object(c.jsx)(T.a,{className:o.contentSubtitle,variant:"subtitle2",children:"\u0421\u0438\u043d\u043e\u043d\u0438\u043c\u044b"}),Object(c.jsx)("div",{className:o.synonyms,children:r.map((function(e){return Object(c.jsx)(oe.a,{label:e},e)}))}),Object(c.jsx)(T.a,{className:o.contentSubtitle,variant:"subtitle2",children:"\u041e\u0442\u0432\u0435\u0442\u044b"}),Object(c.jsx)(H.a,{children:s.map((function(e,t){return Object(c.jsxs)("div",{children:[Object(c.jsx)(J.a,{className:o.response,children:Object(c.jsx)(T.a,{className:o.responseText,children:e})}),t!==s.length-1&&Object(c.jsx)(ae.a,{})]},e)}))})]})}),Object(c.jsxs)(re.a,{className:o.actions,children:[Object(c.jsx)(se.a,{children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(c.jsx)(se.a,{children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})}var he=Object(B.a)((function(e){return{root:{maxWidth:"100%",display:"flex",flexDirection:"column"},info:{marginBottom:e.spacing(4)}}}));function xe(){var e=he(),t=Object(S.b)(),n=Object(S.c)(y),a=Object(S.c)((function(e){return e.commands.status}));return Object(i.useEffect)((function(){"idle"===a&&t(g())}),[a,t]),Object(c.jsxs)("div",{className:e.root,children:[Object(c.jsx)(T.a,{className:e.info,children:"\u041d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0434\u043b\u044f \u0431\u043e\u0442\u0430, \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435."}),"loading"===a&&Object(c.jsx)(te.a,{}),"succeeded"===a&&n.map((function(e){return Object(c.jsx)(me,{mainName:e.mainName,isActive:e.isActive,priority:e.priority,synonyms:e.synonyms,responses:e.responses})}))]})}var Oe=Object(B.a)((function(e){return{root:{maxWidth:"100%",display:"flex",flexDirection:"column"}}}));function pe(){var e=Oe();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(T.a,{variant:"h6",children:"KeyboardSettingsPage"})})}var fe=Object(B.a)((function(e){return{root:{maxWidth:"100%",display:"flex",flexDirection:"column"}}}));function ge(){var e=fe();return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(T.a,{variant:"h6",children:"StatisticsPage"})})}var ve=Object(R.a)({palette:{primary:{main:"#304ffe",light:"#7b7cff",dark:"#0026ca"},secondary:{main:"#1de9b6",light:"#1de9b6",dark:"#00b686"},background:{light:"#f1f3f4"}},typography:{fontFamily:["Roboto","Helvetica","Arial","sans-serif"].join(",")}}),ye=Object(B.a)((function(e){return{root:{},content:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:e.spacing(4)}}}));function Ne(){var e=ye(),t=Object(i.useState)(!1),n=Object(l.a)(t,2),a=n[0],r=n[1];return Object(c.jsx)(S.a,{store:k,children:Object(c.jsx)(L.a,{theme:Object(W.a)(ve),children:Object(c.jsx)(I.Provider,{value:{toggleDrawer:function(){r(!a)}},children:Object(c.jsxs)(D.a,{children:[Object(c.jsx)(Y,{}),Object(c.jsx)(K.a,{}),Object(c.jsx)(q,{open:a}),Object(c.jsx)(_.a,{maxWidth:"md",className:e.content,children:Object(c.jsxs)(C.c,{children:[Object(c.jsx)(C.a,{path:"/",exact:!0,component:P}),Object(c.jsx)(C.a,{path:"/bot_settings",component:ee}),Object(c.jsx)(C.a,{path:"/command_settings",component:xe}),Object(c.jsx)(C.a,{path:"/keyboard_settings",component:pe}),Object(c.jsx)(C.a,{path:"/statistics",component:ge})]})})]})})})})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Ne,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.beabbafd.chunk.js.map