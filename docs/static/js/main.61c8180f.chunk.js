(this["webpackJsonpusers-and-form"]=this["webpackJsonpusers-and-form"]||[]).push([[0],{76:function(e,a,t){e.exports=t(94)},93:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),m=t(13),i=t(46),o=t(24),s=t(132),u=t(133),d=t(125),b=t(131),f=t(40),E=t(41),p=["users"],O=Object(E.get)(p),j=t(45),v=t(130),k=t(136),g=t(63),h=t.n(g),x=t(64),y=t.n(x),_=t(128),D=Object(d.a)({label:{fontWeight:"bold",marginRight:"10px"}}),N=function(e){var a=e.value,t=void 0===a?"":a,n=e.label,l=D();return t?r.a.createElement("p",null,r.a.createElement("span",{className:l.label},"".concat(n,":")),t):null},S=Object(d.a)({collapse:{alignSelf:"flex-start",fontSize:"12px"}}),w=function(e){var a=e.open,t=void 0!==a&&a,n=e.id,l=S(),c=Object(m.c)((function(e){return function(e,a){return O(e)[a]}(e,n)})),i=c.firstname,o=c.lastname,s=c.email,u=c.address,d=c.phone;return r.a.createElement(_.a,{className:l.collapse,in:t},r.a.createElement(N,{value:i,label:"Firstname"}),r.a.createElement(N,{value:o,label:"Lastname"}),r.a.createElement(N,{value:s,label:"Email"}),r.a.createElement(N,{value:u,label:"Address"}),r.a.createElement(N,{value:d,label:"Phone"}))},C=Object(d.a)({item:{display:"flex",flexDirection:"column"},mainInfo:{display:"flex",width:"100%"}}),T=function(e){var a=e.firstname,t=e.lastname,l=e.id,c=C(),m=r.a.useState(!1),i=Object(j.a)(m,2),o=i[0],s=i[1],u=Object(n.useCallback)((function(){s(!o)}),[o]);return r.a.createElement(v.a,{className:c.item,onClick:u},r.a.createElement("div",{className:c.mainInfo},r.a.createElement(k.a,{primary:"".concat(a," ").concat(t)}),o?r.a.createElement(h.a,null):r.a.createElement(y.a,null)),r.a.createElement(w,{open:o,id:l}))},A=Object(d.a)({list:{maxWidth:"300px",margin:"0 auto"}}),R=function(){var e=A(),a=Object(m.c)((function(e){return O(e)}));return r.a.createElement(b.a,{className:e.list},Object(f.map)(a,(function(e,a){var t=e.firstname,n=e.lastname;return r.a.createElement(T,{key:a,id:a,firstname:t,lastname:n})})))},q=t(137),F=Object(q.a)("ADD_USER"),I=[{name:"firstname",label:"First name",required:!0},{name:"lastname",label:"Last name",required:!0},{name:"phone",label:"Phone"},{name:"email",label:"Email"},{name:"address",label:"Address"}],L=["form"],V=Object(E.get)(L),B=Object(q.a)("SET_FIELD"),U=Object(q.a)("RESET_FORM"),K=t(134),W=function(e){var a=e.label,t=e.name,l=e.required,c=void 0!==l&&l,i=Object(m.b)(),o=Object(m.c)((function(e){return function(e,a){return V(e)[a]||""}(e,t)})),s=Object(n.useCallback)((function(e){i(B({name:t,value:e.target.value}))}),[i,t]);return r.a.createElement(K.a,{required:c,label:a,name:t,onChange:s,value:o})},X=Object(d.a)({root:{margin:"0 auto",marginTop:"30px",maxWidth:"300px",padding:"0 10px"},form:{display:"flex",flexDirection:"column",justifyContent:"center",marginTop:"10px"},title:{fontWeight:"bold",textAlign:"center"},controls:{display:"flex",justifyContent:"space-between",marginTop:"10px"}}),M=function(){var e=X(),a=Object(m.b)(),t=Object(m.c)((function(e){return V(e)})),l=Object(m.c)((function(e){return function(e){var a=V(e);return!!Object(f.isEmpty)(a)||I.filter((function(e){return e.required})).some((function(e){return!a[e.name]}))}(e)})),c=Object(n.useCallback)((function(){a(U())}),[a]),i=Object(n.useCallback)((function(e){e.preventDefault(),a(F(t)),c()}),[a,c,t]);return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.title},"Add user"),r.a.createElement("form",{className:e.form,onSubmit:i,noValidate:!0},I.map((function(e){var a=e.name,t=e.label,n=e.required;return r.a.createElement(W,{required:n,label:t,name:a,key:a})})),r.a.createElement("div",{className:e.controls},r.a.createElement(s.a,{variant:"contained",color:"primary",disabled:l,type:"submit"},"Save"),r.a.createElement(s.a,{variant:"contained",onClick:c},"Reset"))))},P=Object(d.a)({appBar:{flexDirection:"row",justifyContent:"center"},menuButton:{color:"#fff"}});var J,z,G=function(){var e=P();return r.a.createElement(i.a,null,r.a.createElement(u.a,{position:"static",className:e.appBar},r.a.createElement(i.b,{to:"/users"},r.a.createElement(s.a,{className:e.menuButton},"Users")),r.a.createElement(i.b,{to:"/form"},r.a.createElement(s.a,{className:e.menuButton},"Form"))),r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/users"},r.a.createElement(R,null)),r.a.createElement(o.b,{path:"/form"},r.a.createElement(M,null)),r.a.createElement(o.a,{from:"/",to:"/users"})))},H=t(21),Q=t(66),Y=t(11),Z=t(44),$=t(135),ee={},ae=Object($.a)((J={},Object(Y.a)(J,"SET_FIELD",(function(e,a){var t=a.payload,n=t.name,r=t.value;return Object(Z.a)({},e,Object(Y.a)({},n,r))})),Object(Y.a)(J,"RESET_FORM",(function(){return ee})),J),ee),te=t(67),ne=Object($.a)(Object(Y.a)({},"ADD_USER",(function(e,a){var t=a.payload;return Object(Z.a)({},e,Object(Y.a)({},Object(te.v4)(),t))})),{"uuid-1":{firstname:"Dmitriy",lastname:"Kondratenko",address:"Akademika Vernadskogo, 21",phone:"+30984599929",email:"dmkndrtnk@gmail.com"},"uuid-2":{firstname:"Dmitriy",lastname:"Kondratenko",address:"Akademika Vernadskogo, 21",phone:"+30984599929",email:"dmkndrtnk@gmail.com"},"uuid-3":{firstname:"Dmitriy",lastname:"Kondratenko",address:"Akademika Vernadskogo, 21",phone:"+30984599929",email:"dmkndrtnk@gmail.com"},"uuid-4":{firstname:"Dmitriy",lastname:"Kondratenko",address:"Akademika Vernadskogo, 21",phone:"+30984599929",email:"dmkndrtnk@gmail.com"}}),re=Object(H.c)((z={},Object(Y.a)(z,"form",ae),Object(Y.a)(z,"users",ne),z)),le=Object(Q.createLogger)({collapsed:!0}),ce=Object(H.a)(le),me=window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:H.d,ie=Object(H.e)(re,me(ce));t(93);c.a.render(r.a.createElement(m.a,{store:ie},r.a.createElement(G,null)),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.61c8180f.chunk.js.map