(this.webpackJsonpaahvan_new=this.webpackJsonpaahvan_new||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(9),r=t(14),o=t(137),i=t(139),m=t(141),u=t(104),s=t(143),d=t(151),g=t(71),E=t(144),p=t(145),v=t(142),b=t(72),h=t(43),f=t(27),y=t(51),N=t(40),w=(t(93),["http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png","http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png","http://www.icons101.com/icon_png/size_256/id_79394/youtube.png"]),x=(Object(g.a)({palette:{primary:{main:"#D98825"},secondary:{light:"#F2B84B",main:"#D98825",contrastText:"#ffcc00"}}}),Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,zIndex:1,color:"white",opcaity:1},card:{minWidth:275},cardbullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},cardtitle:{fontSize:14},cardpos:{marginBottom:12},gridroot:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:700,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)},registerpaper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},eventroot:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}},TextField:{margin:10},overlay:{position:"absolute",width:"99.09%",height:"90vh",backgroundColor:"black",zIndex:1,opacity:.5},textcontainer:{position:"absolute",top:"45%",left:"30%",right:"30%",color:"white",border:"solid",borderColor:"white",opcaity:1,borderWidth:"thick ",zIndex:2}}})));var S=t(153),C=t(156),O=t(149),k=t(148),j=t(152),I=t(150),T=t(154),F=t(146),L=function(e){var a=e.data;return a.single?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Registration type: Single"),l.a.createElement("p",null,"Name: ",a.name),l.a.createElement("p",null,"Email-id: ",a.email),l.a.createElement("p",null,"Event: ",a.events),l.a.createElement("p",null,"College: ",a.college),l.a.createElement("p",null,"Accommodation wanted: ",a.stay?"Yes":"No")):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Registration type: Team"),l.a.createElement("p",null,"Name (Leader): ",a.name),l.a.createElement("p",null,"Email-id (Leader): ",a.email),l.a.createElement("p",null,"Event: ",a.events),l.a.createElement("p",null,"Members Count: ",a.teamMemberCount),l.a.createElement("p",null,"Members Name:"),a.teamMemberName.map((function(e,a){return l.a.createElement("p",null,"Member ",a+1,": ",e)})),l.a.createElement("p",null,"College: ",a.college),l.a.createElement("p",null,"Accommodation wanted: ",a.stay?"Yes":"No"))},A=function(){var e=Object(o.a)((function(e){return{root:{background:"white",color:"black"},form:{spacing:5},TextField:{padding:0,margin:8,spacing:5,width:"92vw",marginLeft:"4vw"},InputLabel:{padding:5,margin:10,marginLeft:"4vw",spacing:5},Select:{padding:5,margin:5,marginLeft:"4vw",spacing:5,width:"92vw"},Checkbox:{padding:10,margin:10,spacing:10,marginLeft:"4vw"},Button:{marginLeft:"4vw",marginTop:e.spacing(0),spacing:5},formControl:{margin:e.spacing(1),minWidth:120}}}))(),a=Object(n.useState)(""),t=Object(r.a)(a,2),c=t[0],m=t[1],u=Object(n.useState)(""),d=Object(r.a)(u,2),g=d[0],E=d[1],p=Object(n.useState)(""),v=Object(r.a)(p,2),b=v[0],h=v[1],f=Object(n.useState)(!1),y=Object(r.a)(f,2),N=y[0],w=y[1],x=l.a.useState(""),A=Object(r.a)(x,2),B=A[0],M=A[1],_=Object(n.useState)(!0),q=Object(r.a)(_,2),R=q[0],G=q[1],z=Object(n.useState)({}),W=Object(r.a)(z,2),P=W[0],D=W[1],H=l.a.useState(""),V=Object(r.a)(H,2),J=V[0],Y=V[1];return R?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{align:"center"},l.a.createElement(i.a,{color:"secondary"},"TEAM REGISTRATION")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{className:e.root,autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),""!==J){for(var a={name:document.getElementById("name-leader").value,email:document.getElementById("email").value,teamMemberCount:document.getElementById("member-count").value,teamMemberName:[],events:J,college:document.getElementById("college").value,stay:document.getElementById("stay-check").checked},t=0;t<B;t++)a.teamMemberName.push(document.getElementById("member-name".concat(t)).value);D(a),G(!1)}else alert("Please fill the events you want to participate in.")}},l.a.createElement(S.a,{className:e.TextField,id:"name-leader",label:"Name (Leader)",variant:"outlined",required:!0,value:c,onChange:function(e){m(e.target.value)}}),l.a.createElement(S.a,{className:e.TextField,id:"email",label:"Email (Leader)",type:"email",variant:"outlined",required:!0,value:g,onChange:function(e){E(e.target.value)}}),l.a.createElement(S.a,{className:e.TextField,id:"member-count",label:"Members count (excluding leader)",variant:"outlined",type:"number",InputProps:{inputProps:{min:1}},fullWidth:!0,value:B,onChange:function(e){M(e.target.value)},required:!0}),function(a){for(var t=[],n=0;n<a;n++)t.push(l.a.createElement(S.a,{className:e.TextField,required:!0,key:n,id:"member-name".concat(n),label:"Member ".concat(n+1),variant:"outlined",fullWidth:!0}));return t}(B),l.a.createElement(k.a,{required:!0,className:e.formControl},l.a.createElement(T.a,{className:e.InputLabel,id:"event-label"},"Events"),l.a.createElement(I.a,{className:e.Select,labelId:"event-label",id:"events",value:J,onChange:function(e){Y(e.target.value)},input:l.a.createElement(F.a,null)},l.a.createElement(C.a,{value:"",disabled:!0},"Events"),["Event1","Event2","Event3","Event4","Event5","Event6"].map((function(e){return l.a.createElement(C.a,{key:e,value:e},e)})))),l.a.createElement(S.a,{className:e.TextField,id:"college",label:"College",variant:"outlined",required:!0,value:b,onChange:function(e){h(e.target.value)}}),l.a.createElement(O.a,{id:"stay-label",control:l.a.createElement(j.a,{className:e.Checkbox,id:"stay-check",value:"stayNeeded",checked:N,onChange:function(e){w(e.target.checked)}}),label:"Check here if you need accommodation"}),l.a.createElement("br",null),l.a.createElement(s.a,{className:e.Button,variant:"contained",color:"secondary",type:"submit"},"Submit"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{data:P}),l.a.createElement(s.a,{variant:"contained",color:"primary",onClick:function(){G(!0)}},"Edit"),l.a.createElement(s.a,{variant:"contained",color:"secondary",onClick:function(){console.log("Clicked"),console.log(P)}},"Proceed"))},B=function(){var e=Object(o.a)((function(e){return{root:{background:"white",color:"black"},form:{spacing:5},TextField:{padding:0,margin:8,spacing:5,width:"92vw",marginLeft:"4vw"},InputLabel:{padding:5,margin:10,marginLeft:"4vw",spacing:5},Select:{padding:5,margin:5,marginLeft:"4vw",spacing:5,width:"92vw"},Checkbox:{padding:10,margin:10,spacing:10,marginLeft:"4vw"},Button:{marginLeft:"4vw",marginTop:e.spacing(0),spacing:5},formControl:{margin:e.spacing(1),minWidth:120}}}))(),a=l.a.useState(""),t=Object(r.a)(a,2),c=t[0],m=t[1],u=Object(n.useState)(""),d=Object(r.a)(u,2),g=d[0],E=d[1],p=Object(n.useState)(""),v=Object(r.a)(p,2),b=v[0],h=v[1],f=Object(n.useState)(""),y=Object(r.a)(f,2),N=y[0],w=y[1],x=Object(n.useState)(!1),A=Object(r.a)(x,2),B=A[0],M=A[1],_=Object(n.useState)(!0),q=Object(r.a)(_,2),R=q[0],G=q[1],z=Object(n.useState)({}),W=Object(r.a)(z,2),P=W[0],D=W[1];return R?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{align:"center"},l.a.createElement(i.a,{color:"secondary"},"SINGLE REGISTRATION")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{className:e.root,autoComplete:"off",onSubmit:function(e){(e.preventDefault(),""!==c)?(D({single:!0,name:g,email:b,teamMemberCount:0,teamMemberName:null,events:c,college:N,stay:B}),G(!1)):alert("Please fill the events you want to participate in.")}},l.a.createElement(S.a,{className:e.TextField,id:"name",label:"Name",variant:"outlined",required:!0,value:g,onChange:function(e){E(e.target.value)}}),l.a.createElement(S.a,{className:e.TextField,id:"email",label:"Email",type:"email",variant:"outlined",required:!0,value:b,onChange:function(e){h(e.target.value)}}),l.a.createElement(k.a,{required:!0,className:e.formControl},l.a.createElement(T.a,{className:e.InputLabel,id:"event-label"},"Events"),l.a.createElement(I.a,{className:e.Select,labelId:"event-label",id:"events",value:c,onChange:function(e){m(e.target.value)},input:l.a.createElement(F.a,null)},l.a.createElement(C.a,{value:"",disabled:!0},"Events"),["Event1","Event2","Event3","Event4","Event5","Event6"].map((function(e){return l.a.createElement(C.a,{key:e,value:e},e)})))),l.a.createElement(S.a,{className:e.TextField,id:"college",label:"College",variant:"outlined",required:!0,value:N,onChange:function(e){w(e.target.value)}}),l.a.createElement(O.a,{id:"stay-label",control:l.a.createElement(j.a,{className:e.Checkbox,id:"stay-check",value:"stayNeeded",checked:B,onChange:function(e){M(e.target.checked)}}),label:"Check here if you need accommodation"}),l.a.createElement("br",null),l.a.createElement(s.a,{className:e.Button,variant:"contained",color:"secondary",type:"submit"},"Submit"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(L,{data:P}),l.a.createElement(s.a,{variant:"contained",color:"primary",onClick:function(){G(!0)}},"Edit"),l.a.createElement(s.a,{variant:"contained",color:"secondary",onClick:function(){console.log("Clicked"),console.log(P)}},"Proceed"))},M=t(31),_=l.a.createElement(h.a,{basename:"/"},l.a.createElement("div",null,l.a.createElement(M.a,{exact:!0,path:"/",component:function(){var e=l.a.useState(0),a=Object(r.a)(e,2),t=a[0],n=a[1],c=x(),o=l.a.useState("1"),g=Object(r.a)(o,2);return g[0],g[1],l.a.useEffect((function(){var e=setInterval((function(){n(2===t?0:function(e){return e+1})}),3e3);return function(){return clearInterval(e)}}),[t]),l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:c.root},l.a.createElement(i.a,{position:"sticky",color:"secondary"},l.a.createElement(m.a,null,l.a.createElement(u.a,{variant:"h5",className:c.title,align:"center"},"AAHVAAN")))),l.a.createElement("div",{className:"overlay-text-container",align:"center"},l.a.createElement("h1",{className:"overlay-text"},"AAHVAAN")),l.a.createElement("div",{className:"overlay-bg"}),l.a.createElement(b.a,null,l.a.createElement(d.a,{style:{background:"grey",height:"90vh",width:"100%"},index:t,onRequestChange:function(e){n(e)}},w.map((function(e){return l.a.createElement(d.b,{objectFit:"contain",key:e,src:e,className:"image"})})))),l.a.createElement("div",{className:c.root},l.a.createElement(i.a,{position:"sticky",color:"secondary"},l.a.createElement(m.a,null,l.a.createElement(u.a,{variant:"h5",className:c.title,align:"center"},"REGISTER",l.a.createElement("br",null),l.a.createElement(f.a,{icon:y.a}))))),l.a.createElement(v.a,{container:!0,spacing:3},l.a.createElement(v.a,{item:!0,xs:6},l.a.createElement(b.a,{className:c.paper,align:"center"},l.a.createElement(s.a,{component:h.b,to:"/single",variant:"contained",color:"secondary"},l.a.createElement(f.a,{icon:y.b}),"\xa0Single"))),l.a.createElement(v.a,{item:!0,xs:6},l.a.createElement(b.a,{className:c.paper,align:"center"},l.a.createElement(s.a,{component:h.b,to:"/team",variant:"contained",color:"secondary"},l.a.createElement(f.a,{icon:y.c}),"\xa0Team")))),l.a.createElement(b.a,null,l.a.createElement(E.a,null,l.a.createElement(u.a,{variant:"h5",color:"textSecondary",align:"center"},"Our Sponsers"),l.a.createElement(u.a,{variant:"h6",align:"center"},l.a.createElement(f.a,{icon:N.a}),"\xa0\xa0",l.a.createElement(f.a,{icon:N.b}),"\xa0\xa0",l.a.createElement(f.a,{icon:N.c}),"\xa0\xa0",l.a.createElement(f.a,{icon:N.d}),"\xa0\xa0",l.a.createElement(f.a,{icon:N.e}),"\xa0\xa0"))),l.a.createElement(b.a,{align:"center"},l.a.createElement(E.a,{className:c.card},l.a.createElement(p.a,null,l.a.createElement(u.a,{className:c.title,color:"textSecondary",gutterBottom:!0},"Delhi Technological University"),l.a.createElement(u.a,{variant:"h5",component:"h2",color:"textSecondary"},"AAHVAAN"),l.a.createElement(u.a,{className:c.pos,color:"textSecondary"},"@aahvaan"),l.a.createElement(u.a,{variant:"body2",component:"p",color:"textSecondary"},"THIS IS FOOTER",l.a.createElement("br",null),'"sports spirit"')))))}}),l.a.createElement(M.a,{path:"/single",component:B}),l.a.createElement(M.a,{path:"/team",component:A}),l.a.createElement(M.a,{path:"/confirm",component:L})));Object(c.render)(_,document.getElementById("root"))},83:function(e,a,t){e.exports=t(103)},93:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.78ec9f17.chunk.js.map