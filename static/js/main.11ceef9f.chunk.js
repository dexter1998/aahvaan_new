(this.webpackJsonpaahvan_new=this.webpackJsonpaahvan_new||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t(14),i=t(137),o=t(139),m=t(143),s=t(104),u=t(141),d=t(151),p=t(71),g=t(142),E=t(145),v=t(144),b=t(72),h=t(43),f=t(27),y=t(51),x=t(40),N=(t(93),["http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png","http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png","http://www.icons101.com/icon_png/size_256/id_79394/youtube.png"]),w=(Object(p.a)({palette:{primary:{main:"#D98825"},secondary:{light:"#F2B84B",main:"#D98825",contrastText:"#ffcc00"}}}),Object(i.a)((function(e){return{root:{flexGrow:1},avatar:{color:"white",backgroundColor:"gray",border:"4px solid black",padding:"12px",width:"50px",height:"50px",borderRadius:"50%",marginTop:"15px",marginBottom:"14px"},navBar:{padding:"13px",backgroundColor:"black",opacity:"0.76",height:"10vh",zIndex:"1"},navButtonContact:{position:"absolute",top:"2.5vh",minTop:"10px",right:"18px",color:"gold",opacity:"1",fontSize:"20px",zIndex:"2"},navButtonAbout:{position:"absolute",top:"2.5vh",minTop:"10px",right:"183px",color:"gold",opacity:"1",fontSize:"20px",zIndex:"2"},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,zIndex:1,color:"white",opcaity:1},card:{minWidth:275},cardbullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},cardtitle:{fontSize:14},cardpos:{marginBottom:12},gridroot:{flexGrow:1,overflow:"hidden",padding:e.spacing(0,3)},paper:{maxWidth:700,margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(2)},registerpaper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},eventroot:{"& .MuiTextField-root":{margin:e.spacing(1),width:200}},TextField:{margin:10},overlay:{position:"absolute",width:"99.09%",height:"90vh",backgroundColor:"black",zIndex:1,opacity:.5},textcontainer:{position:"absolute",top:"45%",left:"30%",right:"30%",color:"white",border:"solid",borderColor:"white",opcaity:1,borderWidth:"thick ",zIndex:2}}})));var C=t(153),S=t(156),k=t(149),O=t(148),j=t(152),I=t(150),T=t(154),B=t(146),F=function(e){var a=e.data;return a.single?l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Registration type: Single"),l.a.createElement("p",null,"Name: ",a.name),l.a.createElement("p",null,"Email-id: ",a.email),l.a.createElement("p",null,"Event: ",a.events),l.a.createElement("p",null,"College: ",a.college),l.a.createElement("p",null,"Accommodation wanted: ",a.stay?"Yes":"No")):l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Registration type: Team"),l.a.createElement("p",null,"Name (Leader): ",a.name),l.a.createElement("p",null,"Email-id (Leader): ",a.email),l.a.createElement("p",null,"Event: ",a.events),l.a.createElement("p",null,"Members Count: ",a.teamMemberCount),l.a.createElement("p",null,"Members Name:"),a.teamMemberName.map((function(e,a){return l.a.createElement("p",null,"Member ",a+1,": ",e)})),l.a.createElement("p",null,"College: ",a.college),l.a.createElement("p",null,"Accommodation wanted: ",a.stay?"Yes":"No"))},L=function(){var e=Object(i.a)((function(e){return{root:{background:"white",color:"black"},form:{spacing:5},TextField:{padding:0,margin:8,spacing:5,width:"92vw",marginLeft:"4vw"},InputLabel:{padding:5,margin:10,marginLeft:"4vw",spacing:5},Select:{padding:5,margin:5,marginLeft:"4vw",spacing:5,width:"92vw"},Checkbox:{padding:10,margin:10,spacing:10,marginLeft:"4vw"},Button:{marginLeft:"4vw",marginTop:e.spacing(0),spacing:5},formControl:{margin:e.spacing(1),minWidth:120}}}))(),a=Object(n.useState)(""),t=Object(c.a)(a,2),r=t[0],m=t[1],s=Object(n.useState)(""),d=Object(c.a)(s,2),p=d[0],g=d[1],E=Object(n.useState)(""),v=Object(c.a)(E,2),b=v[0],h=v[1],f=Object(n.useState)(!1),y=Object(c.a)(f,2),x=y[0],N=y[1],w=l.a.useState(""),L=Object(c.a)(w,2),A=L[0],q=L[1],M=Object(n.useState)(!0),z=Object(c.a)(M,2),P=z[0],R=z[1],_=Object(n.useState)({}),G=Object(c.a)(_,2),D=G[0],W=G[1],U=l.a.useState(""),H=Object(c.a)(U,2),J=H[0],V=H[1];return P?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{align:"center"},l.a.createElement(o.a,{color:"secondary"},"TEAM REGISTRATION")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{className:e.root,autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),""!==J){for(var a={name:document.getElementById("name-leader").value,email:document.getElementById("email").value,teamMemberCount:document.getElementById("member-count").value,teamMemberName:[],events:J,college:document.getElementById("college").value,stay:document.getElementById("stay-check").checked},t=0;t<A;t++)a.teamMemberName.push(document.getElementById("member-name".concat(t)).value);W(a),R(!1)}else alert("Please fill the events you want to participate in.")}},l.a.createElement(C.a,{className:e.TextField,id:"name-leader",label:"Name (Leader)",variant:"outlined",required:!0,value:r,onChange:function(e){m(e.target.value)}}),l.a.createElement(C.a,{className:e.TextField,id:"email",label:"Email (Leader)",type:"email",variant:"outlined",required:!0,value:p,onChange:function(e){g(e.target.value)}}),l.a.createElement(C.a,{className:e.TextField,id:"member-count",label:"Members count (excluding leader)",variant:"outlined",type:"number",InputProps:{inputProps:{min:1}},fullWidth:!0,value:A,onChange:function(e){q(e.target.value)},required:!0}),function(a){for(var t=[],n=0;n<a;n++)t.push(l.a.createElement(C.a,{className:e.TextField,required:!0,key:n,id:"member-name".concat(n),label:"Member ".concat(n+1),variant:"outlined",fullWidth:!0}));return t}(A),l.a.createElement(O.a,{required:!0,className:e.formControl},l.a.createElement(T.a,{className:e.InputLabel,id:"event-label"},"Events"),l.a.createElement(I.a,{className:e.Select,labelId:"event-label",id:"events",value:J,onChange:function(e){V(e.target.value)},input:l.a.createElement(B.a,null)},l.a.createElement(S.a,{value:"",disabled:!0},"Events"),["Event1","Event2","Event3","Event4","Event5","Event6"].map((function(e){return l.a.createElement(S.a,{key:e,value:e},e)})))),l.a.createElement(C.a,{className:e.TextField,id:"college",label:"College",variant:"outlined",required:!0,value:b,onChange:function(e){h(e.target.value)}}),l.a.createElement(k.a,{id:"stay-label",control:l.a.createElement(j.a,{className:e.Checkbox,id:"stay-check",value:"stayNeeded",checked:x,onChange:function(e){N(e.target.checked)}}),label:"Check here if you need accommodation"}),l.a.createElement("br",null),l.a.createElement(u.a,{className:e.Button,variant:"contained",color:"secondary",type:"submit"},"Submit"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{data:D}),l.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){R(!0)}},"Edit"),l.a.createElement(u.a,{variant:"contained",color:"secondary",onClick:function(){console.log("Clicked"),console.log(D)}},"Proceed"))},A=function(){var e=Object(i.a)((function(e){return{root:{background:"white",color:"black"},form:{spacing:5},TextField:{padding:0,margin:8,spacing:5,width:"92vw",marginLeft:"4vw"},InputLabel:{padding:5,margin:10,marginLeft:"4vw",spacing:5},Select:{padding:5,margin:5,marginLeft:"4vw",spacing:5,width:"92vw"},Checkbox:{padding:10,margin:10,spacing:10,marginLeft:"4vw"},Button:{marginLeft:"4vw",marginTop:e.spacing(0),spacing:5},formControl:{margin:e.spacing(1),minWidth:120}}}))(),a=l.a.useState(""),t=Object(c.a)(a,2),r=t[0],m=t[1],s=Object(n.useState)(""),d=Object(c.a)(s,2),p=d[0],g=d[1],E=Object(n.useState)(""),v=Object(c.a)(E,2),b=v[0],h=v[1],f=Object(n.useState)(""),y=Object(c.a)(f,2),x=y[0],N=y[1],w=Object(n.useState)(!1),L=Object(c.a)(w,2),A=L[0],q=L[1],M=Object(n.useState)(!0),z=Object(c.a)(M,2),P=z[0],R=z[1],_=Object(n.useState)({}),G=Object(c.a)(_,2),D=G[0],W=G[1];return P?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{align:"center"},l.a.createElement(o.a,{color:"secondary"},"SINGLE REGISTRATION")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{className:e.root,autoComplete:"off",onSubmit:function(e){(e.preventDefault(),""!==r)?(W({single:!0,name:p,email:b,teamMemberCount:0,teamMemberName:null,events:r,college:x,stay:A}),R(!1)):alert("Please fill the events you want to participate in.")}},l.a.createElement(C.a,{className:e.TextField,id:"name",label:"Name",variant:"outlined",required:!0,value:p,onChange:function(e){g(e.target.value)}}),l.a.createElement(C.a,{className:e.TextField,id:"email",label:"Email",type:"email",variant:"outlined",required:!0,value:b,onChange:function(e){h(e.target.value)}}),l.a.createElement(O.a,{required:!0,className:e.formControl},l.a.createElement(T.a,{className:e.InputLabel,id:"event-label"},"Events"),l.a.createElement(I.a,{className:e.Select,labelId:"event-label",id:"events",value:r,onChange:function(e){m(e.target.value)},input:l.a.createElement(B.a,null)},l.a.createElement(S.a,{value:"",disabled:!0},"Events"),["Event1","Event2","Event3","Event4","Event5","Event6"].map((function(e){return l.a.createElement(S.a,{key:e,value:e},e)})))),l.a.createElement(C.a,{className:e.TextField,id:"college",label:"College",variant:"outlined",required:!0,value:x,onChange:function(e){N(e.target.value)}}),l.a.createElement(k.a,{id:"stay-label",control:l.a.createElement(j.a,{className:e.Checkbox,id:"stay-check",value:"stayNeeded",checked:A,onChange:function(e){q(e.target.checked)}}),label:"Check here if you need accommodation"}),l.a.createElement("br",null),l.a.createElement(u.a,{className:e.Button,variant:"contained",color:"secondary",type:"submit"},"Submit"))):l.a.createElement(l.a.Fragment,null,l.a.createElement(F,{data:D}),l.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){R(!0)}},"Edit"),l.a.createElement(u.a,{variant:"contained",color:"secondary",onClick:function(){console.log("Clicked"),console.log(D)}},"Proceed"))},q=t(31),M=l.a.createElement(h.a,{basename:"/"},l.a.createElement("div",null,l.a.createElement(q.a,{exact:!0,path:"/",component:function(){var e=l.a.useState(0),a=Object(c.a)(e,2),t=a[0],n=a[1],r=w(),i=l.a.useState("1"),p=Object(c.a)(i,2);return p[0],p[1],l.a.useEffect((function(){var e=setInterval((function(){n(2===t?0:function(e){return e+1})}),3e3);return function(){return clearInterval(e)}}),[t]),l.a.createElement("div",{className:"app"},l.a.createElement("div",null,l.a.createElement(o.a,{className:r.navBar,position:"sticky",color:"secondary"})),l.a.createElement("div",{id:"navbar-content"},l.a.createElement(s.a,{className:r.root},l.a.createElement(u.a,{className:r.navButtonAbout,href:""},"About"),l.a.createElement(u.a,{className:r.navButtonContact,href:""},"Contact Us"))),l.a.createElement("div",{className:"overlay-text-container",align:"center"},l.a.createElement("h1",{className:"overlay-text"},"AAHVAAN")),l.a.createElement("div",{className:"overlay-bg"}),l.a.createElement(b.a,null,l.a.createElement(d.a,{style:{background:"grey",height:"90vh",width:"100%"},index:t,onRequestChange:function(e){n(e)}},N.map((function(e){return l.a.createElement(d.b,{objectFit:"contain",key:e,src:e,className:"image"})})))),l.a.createElement("div",{id:"about"},l.a.createElement(b.a,null,l.a.createElement(g.a,null,l.a.createElement(o.a,{position:"sticky",color:"secondary"},l.a.createElement(m.a,null,l.a.createElement(s.a,{variant:"h5",className:r.title,align:"center"},"ABOUT"))),l.a.createElement("div",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at convallis dui, hendrerit pharetra justo. Duis maximus, dui vitae suscipit lobortis, ipsum diam ultrices quam, vel suscipit ipsum nibh in orci. Curabitur vitae augue eleifend tortor varius varius. Etiam non elementum leo. Phasellus id metus non est mattis ultrices. Praesent vel metus eget velit mollis dictum ac sed nunc. Phasellus mattis, orci sed dictum malesuada, nulla nulla fringilla mauris, at convallis lacus metus vel risus. In sagittis porttitor pharetra. Morbi ut pulvinar metus. Suspendisse quis risus vel ligula dictum volutpat et at dui. Nulla vestibulum dapibus turpis eget feugiat. Suspendisse erat nibh, blandit eget sodales a, fermentum a velit. Nulla consequat iaculis enim eget tincidunt. Pellentesque sapien ipsum, ultricies sodales est non, sollicitudin malesuada erat. Nunc vulputate tempus venenatis. Phasellus tincidunt dignissim enim vitae pretium. Ut tristique, massa a tristique viverra, purus nulla pretium metus, et mattis nisl magna ac lorem. Donec et gravida dolor. Phasellus facilisis risus nec magna vestibulum, et auctor orci maximus.")))),l.a.createElement("div",{className:r.root},l.a.createElement(o.a,{position:"sticky",color:"secondary"},l.a.createElement(m.a,null,l.a.createElement(s.a,{variant:"h5",className:r.title,align:"center"},"REGISTER",l.a.createElement("br",null),l.a.createElement(f.a,{icon:y.a}))))),l.a.createElement(v.a,{container:!0,spacing:3},l.a.createElement(v.a,{item:!0,xs:6},l.a.createElement(b.a,{className:r.paper,align:"center"},l.a.createElement("div",{className:r.avatar},l.a.createElement(f.a,{icon:y.b})),l.a.createElement(u.a,{component:h.b,to:"/single",variant:"contained",color:"secondary"},"Single"))),l.a.createElement(v.a,{item:!0,xs:6},l.a.createElement(b.a,{className:r.paper,align:"center"},l.a.createElement("div",{className:r.avatar},l.a.createElement(f.a,{icon:y.c})),l.a.createElement(u.a,{component:h.b,to:"/team",variant:"contained",color:"secondary"},"Team")))),l.a.createElement(b.a,null,l.a.createElement(g.a,null,l.a.createElement(s.a,{variant:"h5",color:"textSecondary",align:"center"},"Our Sponsers"),l.a.createElement(s.a,{variant:"h6",align:"center"},l.a.createElement("div",{class:"sponsors"},l.a.createElement(f.a,{icon:x.a}),"\xa0\xa0",l.a.createElement(f.a,{icon:x.b}),"\xa0\xa0",l.a.createElement(f.a,{icon:x.c}),"\xa0\xa0",l.a.createElement(f.a,{icon:x.d}),"\xa0\xa0",l.a.createElement(f.a,{icon:x.e}),"\xa0\xa0")))),l.a.createElement(b.a,{align:"center"},l.a.createElement(g.a,{className:r.card},l.a.createElement(E.a,null,l.a.createElement(s.a,{className:r.title,color:"textSecondary",gutterBottom:!0},"Delhi Technological University"),l.a.createElement(s.a,{variant:"h5",component:"h2",color:"textSecondary"},"AAHVAAN"),l.a.createElement(s.a,{className:r.pos,color:"textSecondary"},"@aahvaan"),l.a.createElement(s.a,{variant:"body2",component:"p",color:"textSecondary"},"THIS IS FOOTER",l.a.createElement("br",null),'"sports spirit"')))))}}),l.a.createElement(q.a,{path:"/single",component:A}),l.a.createElement(q.a,{path:"/team",component:L}),l.a.createElement(q.a,{path:"/confirm",component:F})));Object(r.render)(M,document.getElementById("root"))},83:function(e,a,t){e.exports=t(103)},93:function(e,a,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.11ceef9f.chunk.js.map