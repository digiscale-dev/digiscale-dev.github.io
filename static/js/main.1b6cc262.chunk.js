(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{43:function(e,n,t){},61:function(e,n,t){},87:function(e,n,t){},93:function(e,n,t){},94:function(e,n,t){"use strict";t.r(n);var r,c,i,a,o,d,s,l,j,b,u,h,x,O,g=t(0),p=t.n(g),f=t(23),m=t.n(f),w=(t(61),t(5)),y=t(12),v=t(7),k=(t.p,t(44)),C=t(45),S=t(56),N=t(55),T=t(3),z=t(2),F=z.default.div(r||(r=Object(T.a)(["\n    display: flex;\n"]))),D=z.default.div(c||(c=Object(T.a)(["\n    width: 100vw;\n    margin: 0;\n"]))),I=z.default.div(i||(i=Object(T.a)(["\n    display: flex;\n"]))),L=z.default.div(a||(a=Object(T.a)(["\n    display: flex;\n    background: grey;\n    height: 20rem;\n    width: 100%;\n"]))),P=z.default.div(o||(o=Object(T.a)(["\n    display: flex;\n    background: black;\n    min-height: 13rem;\n    width: 100%;\n"]))),A=z.default.span(d||(d=Object(T.a)(["\n    color: green;\n    text-align: center;\n    background-color: #d9d7d7;\n    padding: 1rem;\n    border-radius: 10px;\n    font-size: 1.2rem;\n"]))),M=z.default.div(s||(s=Object(T.a)(["\n    color: green;\n    text-align: center;\n    width: 100%;\n    padding-top: 2rem;\n"]))),B=z.default.div(l||(l=Object(T.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    padding: 1rem 0 1rem 0;\n    min-height: 4rem;\n    max-height: 5rem;\n    background-color: #404040;\n"]))),R=z.default.div(j||(j=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    > a {\n        text-decoration: none;\n        color: white;\n        font-weight: 600;\n    }\n"]))),W=z.default.p(b||(b=Object(T.a)(["\n    width: auto;\n    padding: 0.5rem;\n    border-radius: 50px;\n    background-color: red;\n    justify-content: center;\n"]))),q=(z.default.p(u||(u=Object(T.a)(["\n    width: auto;\n    padding: 0.5rem;\n    border-radius: 50px;\n    background-color: green;\n    justify-content: center;\n"]))),z.default.span(h||(h=Object(T.a)(['\n    padding-right: 0.5rem;\n    display: flex;\n    display: inline-block;\n    color: "black";\n'])))),U=z.default.span(x||(x=Object(T.a)(["\n    padding-left: 0.5rem;\n    display: flex;\n    display: inline-block;\n    color: #128D15;\n"]))),E=t(19),H={bmBurgerButton:{position:"fixed",width:"2.4rem",height:"2rem",left:"1rem",top:"1.25rem"},bmBurgerBars:{background:"white"},bmBurgerBarsHover:{background:"#a90000"},bmCrossButton:{height:"24px",width:"24px"},bmCross:{background:"black"},bmMenuWrap:{position:"fixed",height:"100%"},bmMenu:(O={background:"rgba(255, 255, 255, 0.85)"},Object(E.a)(O,"background","linear-gradient(90deg, rgba(185,195,199,0.75) 2%, rgba(255,255,255,1) 100%)"),Object(E.a)(O,"padding","2.5em 1.5em 0"),Object(E.a)(O,"fontSize","1.15em"),O),bmMorphShape:{fill:"#373a47"},bmItemList:{color:"#b8b7ad",padding:"0.5em"},bmItem:{display:"inline-block",width:"100%",color:"black",textDecoration:"none",fontSize:"1rem",paddingTop:"1.5rem",paddingBottom:"0.5rem",fontWeight:600},bmOverlay:{background:"rgba(0, 0, 0, 0)"}},$=t(28),_=t(29),G=t.n(_),J=t(1),K=function(e){return Object(J.jsxs)($.slide,{id:"sidebar",styles:H,disableAutoFocus:!0,children:[Object(J.jsx)("br",{}),Object(J.jsx)(y.b,{to:"/Home",children:"Home"}),Object(J.jsx)(y.b,{to:"/Home",children:"Settings"}),!e.hideWeightOption&&Object(J.jsxs)("label",{className:H.bmItem,children:[Object(J.jsx)(q,{children:"Kg "}),Object(J.jsx)(G.a,{defaultChecked:!0,icons:!1,onChange:e.handleWeightChange}),Object(J.jsx)(U,{children:" Grams"})]}),Object(J.jsx)(y.b,{to:"/Order",children:"Create an Order"}),Object(J.jsx)(y.b,{to:"/",children:"State Laws"}),Object(J.jsx)(y.b,{to:"/",children:"Digiscale Partners"})]})},Q=t(49),V=t.n(Q),Y=function(e){Object(S.a)(t,e);var n=Object(N.a)(t);function t(e){var r;return Object(k.a)(this,t),(r=n.call(this,e)).setWeightType=function(e){r.setState({weightType:e})},r.handleWeightChange=function(){"kg"===r.state.weightType?r.setWeightType("grams"):r.setWeightType("kg")},r.state={weightType:"grams"},r}return Object(C.a)(t,[{key:"render",value:function(){return Object(J.jsxs)(D,{children:[Object(J.jsx)(I,{children:Object(J.jsx)(K,{handleWeightChange:this.handleWeightChange})}),Object(J.jsx)(B,{children:Object(J.jsx)(R,{children:Object(J.jsx)(y.b,{to:"/",children:Object(J.jsx)(W,{href:"/",children:"Self Destruct"})})})}),Object(J.jsx)(L,{}),Object(J.jsx)(P,{children:Object(J.jsx)(M,{children:Object(J.jsx)(A,{children:"grams"==this.state.weightType?Number((30*this.props.force).toFixed(3))+" "+this.state.weightType:Number((.03*this.props.force).toFixed(6))+" "+this.state.weightType})})})]})}}]),t}(p.a.Component),Z=V()(Y,{polyfill:!1,only:"touch",preventSelect:!0,polyfillSpeedUp:10});t(87);var X,ee,ne,te,re,ce,ie,ae,oe,de,se,le,je,be,ue,he,xe,Oe,ge,pe,fe,me,we,ye,ve,ke,Ce,Se,Ne,Te,ze,Fe,De,Ie,Le,Pe,Ae,Me,Be,Re,We,qe,Ue,Ee,He,$e,_e,Ge,Je,Ke,Qe,Ve,Ye,Ze=z.default.p(X||(X=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    color: white;\n    > button {\n        color: white;\n        font-weight: 600;\n        font-size: 1rem;\n        padding: 0.5rem;\n        border-radius: 15px;\n        border: 1px solid white;\n        background: none;\n    }\n    > a {\n        text-decoration: none;\n        color: white;\n        font-weight: 600;\n        font-size: 1rem;\n        padding: 0.5rem;\n        border-radius: 15px;\n        border: 1px solid white;\n        background: none;\n    }\n"]))),Xe=(z.default.p(ee||(ee=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    color: green;\n    > button {\n        color: green;\n        font-weight: 600;\n        font-size: 1rem;\n        padding: 0.5rem;\n        border-radius: 15px;\n        border: 1px solid white;\n        background: none;\n    }\n    > a {\n        text-decoration: none;\n        color: green;\n        font-weight: 600;\n        font-size: 1rem;\n        padding: 0.5rem;\n        border-radius: 15px;\n        border: 1px solid white;\n        background: none;\n    }\n"]))),z.default.p(ne||(ne=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    color: red;\n    > button {\n        color: red;\n        font-weight: 600;\n        font-size: 1rem;\n        padding: 0.5rem;\n        border-radius: 15px;\n        border: 1px solid white;\n        background: none;\n    }\n    > a {\n        text-decoration: none;\n        color: red;\n        font-weight: 600;\n        font-size: 1rem;\n        padding: 0.5rem;\n        border-radius: 15px;\n        border: 1px solid white;\n        background: none;\n    }\n"])))),en=z.default.div(te||(te=Object(T.a)(["\n    width: 100%;\n    justify-content: center;\n    text-align: center;\n"]))),nn=z.default.div(re||(re=Object(T.a)(["\n"]))),tn=z.default.div(ce||(ce=Object(T.a)(["\n    width: 100%;\n    // background: linear-gradient(90deg, rgba(185,195,199,0.75) 20%, rgba(255,255,255,0.5) 80%);\n    background: rgba(13,13,13);\n    min-height: 100vh;\n"]))),rn=(z.default.div(ie||(ie=Object(T.a)(["\n    display: flex;\n"]))),z.default.div(ae||(ae=Object(T.a)(["\n    display: flex;\n    width: auto;\n    padding: 0.5rem;\n    justify-content: center;\n    > input {\n        background: none;\n        color: white;\n        padding-bottom: 0.25rem;\n        border: none;\n        border-bottom: 1px solid white;\n        border-radius: 0;\n        text-align: center;\n    }\n"])))),cn=z.default.p(oe||(oe=Object(T.a)(["\n        color: red;\n        text-align: center;\n        font-size: 0.75rem;\n    }\n"]))),an=z.default.div(de||(de=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    text-align: center;\n"]))),on=z.default.p(se||(se=Object(T.a)(["\n    width: auto;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    border-radius: 50px;\n    justify-content: center;\n    color: white;\n    font-weight: 600;\n    font-size: 1.25rem;\n"]))),dn=z.default.p(le||(le=Object(T.a)(["\n    width: auto;\n    border-radius: 50px;\n    justify-content: center;\n    color: green;\n    font-weight: 600;\n    font-size: 1.5rem;\n"]))),sn=z.default.div(je||(je=Object(T.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    padding: 1rem 0 0 0;\n    height: 4rem;\n    // background-color: #404040;\n    // background: linear-gradient(90deg, rgba(185,195,199,0.75) 2%, rgba(255,255,255,1) 100%);\n"]))),ln=z.default.div(be||(be=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    text-align: center;\n"]))),jn=z.default.picture(ue||(ue=Object(T.a)(["\n    width: auto;\n    padding: 0.5rem;\n    border-radius: 50px;\n    justify-content: center;\n    color: green;\n    font-weight: 600;\n    font-size: 2rem;\n"]))),bn=function(e){var n=Object(v.f)(),t=Object(g.useState)(""),r=Object(w.a)(t,2),c=r[0],i=r[1],a=Object(g.useState)(""),o=Object(w.a)(a,2),d=o[0],s=o[1],l=Object(g.useState)(""),j=Object(w.a)(l,2),b=j[0],u=j[1],h=Object(g.useState)(""),x=Object(w.a)(h,2),O=x[0],p=x[1],f=Object(g.useState)(""),m=Object(w.a)(f,2),y=m[0],k=m[1],C=Object(g.useState)(""),S=Object(w.a)(C,2),N=S[0],T=S[1],z=Object(g.useState)(""),F=Object(w.a)(z,2),D=F[0],I=F[1],L=Object(g.useState)(""),P=Object(w.a)(L,2),A=P[0],M=P[1],B=Object(g.useState)(!1),R=Object(w.a)(B,2),W=R[0],q=R[1],U=Object(g.useState)(""),E=Object(w.a)(U,2),H=E[0],$=E[1];return Object(J.jsxs)(tn,{children:[Object(J.jsx)(sn,{children:Object(J.jsx)(ln,{children:Object(J.jsx)(jn,{children:"Digiscale"})})}),e.ageConfirmed?W?Object(J.jsxs)(nn,{children:[Object(J.jsx)(an,{children:Object(J.jsx)(on,{})}),Object(J.jsx)(an,{children:Object(J.jsxs)(on,{children:["Once the background check is complete, we will send you an email with an update of your status.",Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),"A confirmation number will be included if approved.",Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),"Simply click on the Digiscale icon, then input the number to gain access to available pickups in your local area."]})}),Object(J.jsx)(en,{children:Object(J.jsx)(Ze,{children:Object(J.jsx)("a",{onClick:function(){n.push("/Home")},children:"Continue"})})})]}):Object(J.jsxs)(nn,{children:[Object(J.jsx)(an,{children:Object(J.jsx)(dn,{children:"Are you over 21 years of age?"})}),Object(J.jsx)(rn,{children:Object(J.jsx)("input",{type:"text",value:c,placeholder:"First and Last Name",onChange:function(e){i(e.target.value)}})}),Object(J.jsx)(rn,{children:Object(J.jsx)("input",{type:"text",value:d,placeholder:"License/ID Number",onChange:function(e){s(e.target.value)}})}),Object(J.jsx)(rn,{children:Object(J.jsx)("input",{type:"number",value:b,placeholder:"SSN/EIN",onChange:function(e){u(e.target.value)}})}),Object(J.jsx)(rn,{children:Object(J.jsx)("input",{value:O,placeholder:"Address",onChange:function(e){p(e.target.value)}})}),Object(J.jsx)(rn,{children:Object(J.jsx)("input",{value:y,placeholder:"State",onChange:function(e){k(e.target.value)}})}),Object(J.jsx)(rn,{children:Object(J.jsx)("input",{value:N,placeholder:"City/County",onChange:function(e){T(e.target.value)}})}),Object(J.jsx)(rn,{children:Object(J.jsx)("input",{value:D,placeholder:"Zip Code",onChange:function(e){I(e.target.value)}})}),Object(J.jsx)(rn,{children:Object(J.jsx)("input",{value:A,placeholder:"Email Address",onChange:function(e){M(e.target.value)}})}),Object(J.jsx)(cn,{children:Object(J.jsx)("p",{children:H})}),Object(J.jsx)(en,{children:Object(J.jsx)(Ze,{children:Object(J.jsx)("a",{onClick:function(){c.length<3?$("Full Name must be longer."):d.length<5?$("IDNumber not long enough."):b.length<8?$("SSN/EIN must be 9 digits or longer."):A.length<3?$("Email less than minimum length"):q(!0)},children:"Sign Up"})})}),Object(J.jsx)(en,{children:Object(J.jsx)(Xe,{children:Object(J.jsx)("a",{onClick:function(){n.push("/Home")},children:"Skip"})})})]}):Object(J.jsxs)(nn,{children:[Object(J.jsx)(an,{children:Object(J.jsx)(dn,{children:"Are you over 21 years of age?"})}),Object(J.jsx)(en,{children:Object(J.jsx)(Ze,{children:Object(J.jsx)("button",{onClick:function(){e.setAgeConfirmed(!0)},children:"Yes"})})}),Object(J.jsx)(en,{children:Object(J.jsx)(Ze,{children:Object(J.jsx)("button",{href:"https://google.com",onClick:function(){return e.setAgeConfirmed(!1)},children:"No"})})})]})]})},un=t(17),hn=t.n(un),xn=t(21),On=t(18),gn=z.default.div(he||(he=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    width: 100vw;\n"]))),pn=z.default.div(xe||(xe=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    width: 50%;\n    padding: 0.5rem;\n"]))),fn=z.default.img(Oe||(Oe=Object(T.a)(["\n    width: 100%;\n    max-width: 10rem;\n    height: auto;\n    max-height: 10rem;\n    border-radius: 15px;\n    box-shadow: 2px 2px 10px rgb(0,0,0,0.25);\n"]))),mn=z.default.p(ge||(ge=Object(T.a)(["\n    height: 100%;\n    width: 50%;\n    margin: auto;\n    text-align: center;\n    color: white;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0.5rem;\n    margin: auto 0.5rem;\n    border: 1px solid green;\n    border-radius: 10px;\n    box-shadow: 2px 2px 10px rgb(0,0,0,0.5);\n"]))),wn=function(e,n){return Object(J.jsxs)(gn,{onClick:function(){return n(e)},children:[Object(J.jsx)(pn,{children:Object(J.jsx)(fn,{src:e.imageURL})}),Object(J.jsxs)(mn,{children:[e.name+","," ",e.address,Object(J.jsx)("br",{}),"Phone: "," ",e.phone,Object(J.jsx)("br",{}),"Rating: ",e.rating]})]})},yn=z.default.div(pe||(pe=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    width: 100vw;\n"]))),vn=z.default.div(fe||(fe=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    width: 50%;\n    padding: 0.5rem;\n"]))),kn=z.default.img(me||(me=Object(T.a)(["\n    width: 100%;\n    max-width: 6rem;\n    height: auto;\n    max-height: 6rem;\n    border-radius: 15px;\n    box-shadow: 2px 2px 10px rgb(0,0,0,0.25);\n"]))),Cn=z.default.p(we||(we=Object(T.a)(["\n    height: 100%;\n    width: 50%;\n    text-align: center;\n    color: white;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0.5rem;\n    margin: auto 0.5rem;\n    border: 1px solid green;\n    border-radius: 10px;    box-shadow: 2px 2px 10px rgb(0,0,0,0.5);\n"],["\n    height: 100%;\n    width: 50%;\n    text-align: center;\n    color: white;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0.5rem;\n    margin: auto 0.5rem;\n    border: 1px solid green;\n    border-radius: 10px;\\\n    box-shadow: 2px 2px 10px rgb(0,0,0,0.5);\n"]))),Sn=function(e,n){return Object(J.jsxs)(yn,{onClick:function(){return n(e)},children:[Object(J.jsx)(vn,{children:Object(J.jsx)(kn,{src:e.imageURL})}),Object(J.jsxs)(Cn,{children:["$".concat(e.price.dollars,".")+(e.price.cents<10?"0":"")+"".concat(e.price.cents),Object(J.jsx)("br",{}),e.name]}),Object(J.jsxs)(Cn,{children:[e.measurement,Object(J.jsx)("br",{}),e.description]})]})},Nn=z.default.div(ye||(ye=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    width: 100vw;\n"]))),Tn=z.default.div(ve||(ve=Object(T.a)(["\n"]))),zn=z.default.div(ke||(ke=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n    width: 50%;\n    padding: 0.5rem;\n"]))),Fn=z.default.img(Ce||(Ce=Object(T.a)(["\n    width: 100%;\n    max-width: 10rem;\n    height: auto;\n    max-height: 10rem;\n    border-radius: 15px;\n    box-shadow: 2px 2px 10px rgb(0,0,0,0.25);\n"]))),Dn=z.default.p(Se||(Se=Object(T.a)(["\n    height: 100%;\n    width: 50%;\n    text-align: center;\n    color: white;\n    font-size: 14px;\n    font-weight: 700;\n    padding: 0.5rem;\n    margin: auto 0.5rem;\n"]))),In=z.default.p(Ne||(Ne=Object(T.a)(["\n    padding: 1rem;\n    border: 1px solid green;\n    border-radius: 10px;\n    box-shadow: 2px 2px 10px rgb(0,0,0,0.5);\n"]))),Ln=z.default.p(Te||(Te=Object(T.a)(["\n    display: flex;\n    justify-content: center;\n\n    > button {\n        width: 100%;\n    }\n"]))),Pn=z.default.p(ze||(ze=Object(T.a)(["\n    min-height: 2rem;\n    color: white;\n    text-align: center;\n    font-weight: 700;\n    width: 75%;\n    margin: auto;\n    background: #696969;\n    border-radius: 15px;\n    padding: 1rem;\n    box-shadow: 2px 2px 10px rgb(0,0,0,0.5);\n"]))),An=(t(43),t(50)),Mn=function(e,n){return Object(J.jsxs)(Tn,{children:[Object(J.jsxs)(Nn,{children:[Object(J.jsx)(zn,{children:Object(J.jsx)(Fn,{src:e.imageURL})}),Object(J.jsxs)(Dn,{children:[Object(J.jsx)(Ln,{onClick:function(){return n(e)},children:Object(J.jsx)(An.a,{variant:"success",children:"Add to Cart"})}),Object(J.jsx)("br",{}),Object(J.jsxs)(In,{children:["$".concat(e.price.dollars,".")+(e.price.cents<10?"0":"")+"".concat(e.price.cents),Object(J.jsx)("br",{}),e.name,Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),e.measurement,Object(J.jsx)("br",{}),e.description]})]})]}),Object(J.jsx)(Pn,{children:e.longDescription}),Object(J.jsx)("br",{})]})},Bn=z.default.li(Fe||(Fe=Object(T.a)(["\n    display: inline-flex;\n    width: 100%;\n    justify-content: space-between;\n    color: white;\n    margin: 0;\n    padding: 0.75rem 1rem;\n"]))),Rn=z.default.ul(De||(De=Object(T.a)(["\n    list-style: none; \n    margin:0;\n    padding: 0rem 0rem 1rem 0rem;\n"]))),Wn=z.default.div(Ie||(Ie=Object(T.a)(["\n    width: 40%;\n    font-weight: 500;\n"]))),qn=z.default.p(Le||(Le=Object(T.a)(["\n    color: white;\n    text-align: center;\n    font-weight: 700;\n    font-size: 1.5rem;\n"]))),Un=z.default.span(Pe||(Pe=Object(T.a)(["\n    margin: auto 0;\n    color: red;\n"]))),En=z.default.span(Ae||(Ae=Object(T.a)(["\n    color: green;\n    margin: auto 0;\n"]))),Hn=z.default.img(Me||(Me=Object(T.a)(["\n    width: 45%;\n    max-width: 5rem;\n    height: auto;\n    max-height: 5rem;\n    margin: auto 0;\n"]))),$n=z.default.div(Be||(Be=Object(T.a)(["\n    padding: 2rem 1rem 3rem 1rem;\n    border-top: 1px solid #404040;\n    color: white;\n    text-align: center;\n    font-weight: 700;\n"]))),_n=t(22),Gn=function(e,n,t,r){return Object(J.jsxs)(Bn,{children:[Object(J.jsx)(Un,{onClick:function(){r(e.id)},children:Object(J.jsx)(_n.d,{})}),Object(J.jsx)(Hn,{src:e.imageURL}),Object(J.jsxs)(Wn,{children:[e.name,Object(J.jsx)("br",{}),e.measurement,Object(J.jsx)("br",{}),"Quantity: "+e.quantity,Object(J.jsx)("br",{}),"Price: $"+e.price.dollars+"."+(e.price.cents<10?"0":"")+e.price.cents]}),Object(J.jsx)(Un,{children:Object(J.jsx)(_n.a,{onClick:function(){e.quantity>0&&t(-1,e.id)}})}),Object(J.jsx)(En,{children:Object(J.jsx)(_n.b,{onClick:function(){e.quantity>=0&&t(1,e.id)}})})]})},Jn=function(e,n,t,r,c,i,a){return Object(J.jsxs)(g.Fragment,{children:[Object(J.jsx)(qn,{children:" My Cart "}),Object(J.jsx)(Rn,{children:Object.keys(e).map((function(n){return Gn(e[n],0,c,i)}))}),Object(J.jsxs)($n,{children:["Total Number of items: ",n,Object(J.jsx)("br",{}),"Tax:",Object(J.jsx)("br",{}),"Delivery Fee:",Object(J.jsx)("br",{}),"Total Cost: $".concat(t.dollars,".")+(t.cents<10?"0":"")+"".concat(t.cents),Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),Object(J.jsx)(An.a,{variant:"success",disabled:0===n,onClick:function(){a()},children:"Place Order"})]})]})},Kn=t(51),Qn=t.n(Kn),Vn=z.default.p(Re||(Re=Object(T.a)(["\n    color: white;\n    text-align: center;\n    font-weight: 700;\n    font-size: 1.5rem;\n"]))),Yn=z.default.p(We||(We=Object(T.a)(["\n    color: white;\n    text-align: center;\n    font-weight: 500;\n    font-size: 1.25rem;\n"]))),Zn=z.default.div(qe||(qe=Object(T.a)(["\n    padding: 2rem 1rem 1rem 1rem;\n    border-top: 1px solid #404040;\n    color: white;\n    text-align: center;\n    > span {\n        font-size: 1rem;\n        font-weight: 700;\n    }\n"]))),Xn=z.default.div(Ue||(Ue=Object(T.a)(["\n    padding: 2rem 1rem 3rem 1rem;\n    border-top: 1px solid #404040;\n    color: white;\n    text-align: center;\n    font-weight: 700;\n"]))),et=z.default.span(Ee||(Ee=Object(T.a)(["\n    color: red;\n    font-weight: 500;\n"]))),nt=function(e,n,t,r,c,i,a,o,d,s){var l="",j="";if(a)return Object(J.jsxs)(g.Fragment,{children:[Object(J.jsx)(Vn,{children:"Order Confirmed!"}),Object(J.jsx)("br",{}),Object(J.jsxs)(Yn,{children:["Thank you for shopping with us!",Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),Object(J.jsx)(An.a,{variant:"success",onClick:function(){o()},children:"Back to Store"})]})]});var b=function(e,n){var t=Object(On.a)({},d);t[e]=n.target.value,s(t)};return Object(J.jsxs)(g.Fragment,{children:[Object(J.jsx)(Vn,{children:" Confirm Order "}),Object(J.jsxs)(Zn,{children:[Object(J.jsx)("span",{children:"Contact Info"}),Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),Object(J.jsx)(rn,{children:Object(J.jsx)("input",{type:"text",placeholder:"First and Last Name",maxLength:45,onChange:function(e){l=e.target.value}})}),Object(J.jsx)(rn,{children:Object(J.jsx)("input",{type:"tel",placeholder:"Phone",maxLength:11,onChange:function(e){j=e.target.value}})}),Object(J.jsx)(rn,{children:Object(J.jsx)(Qn.a,{cardNumberInputProps:{value:d.cardNumber,onChange:function(e){b("cardNumber",e)}},cardExpiryInputProps:{value:d.expiry,onChange:function(e){b("expiry",e)}},cardCVCInputProps:{value:d.cvc,onChange:function(e){b("cvc",e)}},fieldClassName:"input",inputStyle:{background:"#404040",color:"white"},fieldStyle:{background:"#404040",color:"white"}})}),Object(J.jsx)("br",{}),Object(J.jsx)("br",{})]}),Object(J.jsxs)(Xn,{children:["Total Number of items: ",e,Object(J.jsx)("br",{}),"Tax:",Object(J.jsx)("br",{}),"Delivery Fee:",Object(J.jsx)("br",{}),"Total Cost: $".concat(n.dollars,".")+(n.cents<10?"0":"")+"".concat(n.cents),Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),Object(J.jsx)(An.a,{variant:"success",onClick:Object(xn.a)(hn.a.mark((function e(){return hn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r({name:l,tel:j});case 2:case"end":return e.stop()}}),e)}))),children:"Submit Order"}),Object(J.jsx)("br",{}),Object(J.jsx)("br",{}),Object(J.jsx)(et,{children:c})]})]})},tt=t(99),rt=t(98),ct=(z.default.div(He||(He=Object(T.a)(["\n    display: flex;\n"]))),z.default.div($e||($e=Object(T.a)(["\n    display: inline-flex;\n    width: 50%;\n    margin-left:25%;\n    text-align: center;\n    justify-content: center;\n"])))),it=z.default.div(_e||(_e=Object(T.a)(["\n    width: 100%;\n    padding: 1rem 0 1rem 0;\n    min-height: 4rem;\n    background-color: #404040;\n    margin: 0;\n"]))),at=z.default.div(Ge||(Ge=Object(T.a)(["\n    display: block;\n    background: #202020;\n    min-height: 100vh;\n    width: 100%;\n"]))),ot=z.default.div(Je||(Je=Object(T.a)(["\n    float: right;\n    margin: 1rem;\n"]))),dt=z.default.span(Ke||(Ke=Object(T.a)(["\n    font-size: 1.5rem;\n    color: gold;\n    padding-right: 0.2rem;\n"]))),st=z.default.span(Qe||(Qe=Object(T.a)(["\n    > span {\n        padding: 0.05rem 0.25rem 0.2rem 0.25rem;\n    }\n"]))),lt=z.default.div(Ve||(Ve=Object(T.a)(["\n    background: none;\n    border: none;\n    padding-right: 0.5rem;\n"]))),jt=z.default.div(Ye||(Ye=Object(T.a)(["\n    display: inline-flex;\n    width: 25%;\n    justify-content: flex-end;\n    vertical-align: center;\n"])));function bt(e){var n=[];for(var t in e){var r=t,c=e[t];n.push(r+"="+c)}return n=n.join("&")}function ut(e){return ht.apply(this,arguments)}function ht(){return(ht=Object(xn.a)(hn.a.mark((function e(n){var t,r;return hn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=bt(n),e.next=3,fetch("https://api.stripe.com/v1/charges",{headers:{Authorization:"Bearer sk_test_NMvNeiR9TSqWJtyuPt4tgx2v","Content-Type":"application/x-www-form-urlencoded"},body:t,method:"POST"}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}));case 3:return r=e.sent,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var xt=[{id:1,name:"Blue Dream 1/8 oz",description:"Hybrid",longDescription:"This high quality leaf is meant to give you a calm, relaxing high. This will give you a focused yet calm high throughout the day.",measurement:"24% THC",price:{dollars:40,cents:0},type:"flower",imageURL:t.p+"static/media/blueDream.2cf9a23f.jpg"},{id:2,name:"Nathan's Brownies: Macadamia Nut",description:"Edible",longDescription:"This tasty Brownie is guaranteed to give you a calm, sleepy high. This will help you get a nice, deep sleep.",measurement:"100mg",price:{dollars:19,cents:99},type:"edible",imageURL:t.p+"static/media/brownies.06408e4d.jpg"}],Ot=[{id:"1",name:"Rolling Greens",address:"20 East Street",phone:"555-248-2459",rating:4.5,numOfRatings:100,imageURL:"https://media.timeout.com/images/102035297/image.jpg"},{id:"2",name:"Hamilton's Goods",address:"55 West Road",phone:"555-248-2459",rating:3.5,numOfRatings:200,imageURL:"https://www.tiffany.com/shared/images/Stores/Chevy_Chase.jpg"}],gt=function(){var e=Object(g.useState)({name:"Set Location"}),n=Object(w.a)(e,2),t=n[0],r=n[1],c=Object(g.useState)(null),i=Object(w.a)(c,2),a=i[0],o=i[1],d=Object(g.useState)(!1),s=Object(w.a)(d,2),l=s[0],j=s[1],b=Object(g.useState)("All Products"),u=Object(w.a)(b,2),h=u[0],x=u[1],O=Object(g.useState)(null),p=Object(w.a)(O,2),f=p[0],m=p[1],y=Object(g.useState)(!0),v=Object(w.a)(y,2),k=v[0],C=v[1],S=Object(g.useState)(null),N=Object(w.a)(S,2),T=N[0],z=N[1],F=Object(g.useState)(null),L=Object(w.a)(F,2),P=L[0],A=L[1],M=Object(g.useState)({}),B=Object(w.a)(M,2),R=B[0],W=B[1],q=Object(g.useState)(0),U=Object(w.a)(q,2),H=U[0],$=U[1],_=Object(g.useState)(!1),G=Object(w.a)(_,2),Q=G[0],V=G[1],Y=Object(g.useState)({dollars:0,cents:0}),Z=Object(w.a)(Y,2),X=Z[0],ee=Z[1],ne=Object(g.useState)(!1),te=Object(w.a)(ne,2),re=te[0],ce=te[1],ie=Object(g.useState)(""),ae=Object(w.a)(ie,2),oe=ae[0],de=ae[1],se=Object(g.useState)({}),le=Object(w.a)(se,2),je=le[0],be=le[1],ue=Object(g.useState)(!1),he=Object(w.a)(ue,2),xe=he[0],Oe=he[1],ge=Object(g.useState)({cardNumber:"",cvc:"",expiry:""}),pe=Object(w.a)(ge,2),fe=pe[0],me=pe[1],we=function(e){if(V(!1),ce(!1),0!=H){if(e.id===t.id)return m(P),j(!1),void o(null);W({})}r(e),ye(e)},ye=function(e){A(xt),m(xt),o(null),j(!1)},ve=function(e){if("All Products"===e)m(P);else if("Flower"===e){var n=P.filter((function(e){return"flower"==e.type}));m(n)}else if("Non-Flower"===e){var t=P.filter((function(e){return"flower"!==e.type}));m(t)}else if("Miscellaneous"===e)P.filter((function(e){return"flower"!==e.type&&"edible"!==e.type}));x(e)},ke=function(e){null==e&&(j(!1),o(null),ve("All Products")),j(!0),o(e)},Ce=function(e,n){var t=Object(On.a)({},R);t[n].quantity=t[n].quantity+e>=0?t[n].quantity+e:0;var r={};r.dollars=X.dollars+t[n].price.dollars*e;var c=X.cents+t[n].price.cents*e;c<0?(r.dollars=r.dollars-Math.ceil(Math.abs(c)/100),(c+=100*Math.floor(Math.abs(c)/100))<0&&(c=100+c)):c>=100&&(r.dollars=r.dollars+1,c%=100),r.cents=c;var i=H+e>0?H+e:0;0===t[n].quantity&&delete t[n],$(i),W(t),ee(r)},Se=function(){ce(!0)},Ne=function(){var e=Object(xn.a)(hn.a.mark((function e(n){var t,r,c;return hn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.name&&n.tel&&n.name.length>3&&n.tel.length>9)){e.next=17;break}return t=100*X.dollars+X.cents,r="Name: ".concat(n.name,", Phone: ").concat(n.tel),c={amount:[t],currency:"usd",source:"tok_amex",description:[r]},e.next=6,ut(c);case 6:e.sent,de(""),$(0),W({}),be({}),ee({dollars:0,cents:0}),j(!1),o(null),Oe(!0),e.next=18;break;case 17:de("Please enter your contact information.");case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();Object(g.useEffect)((function(){z(Ot),C(!1)}),[]);return Object(J.jsxs)(D,{children:[Object(J.jsx)(I,{children:Object(J.jsx)(K,{hideWeightOption:!0})}),Object(J.jsxs)(it,{children:[Object(J.jsx)(ct,{children:Q?Object(J.jsx)(An.a,{variant:"success",onClick:function(){V(!1)},children:"Continue Shopping"}):Object(J.jsxs)(tt.a,{children:[Object(J.jsx)(tt.a.Toggle,{variant:"success",id:"dropdown-basic",children:t.name}),Object(J.jsx)(tt.a.Menu,{children:k||null==T?Object(J.jsx)(tt.a.Item,{onClick:function(){we({name:"Default"})},children:"Default"}):Object(J.jsx)(g.Fragment,{children:T.map((function(e){return n=e,Object(J.jsx)(tt.a.Item,{onClick:function(){we(n)},children:n.name});var n}))})})]})}),Object(J.jsx)(jt,{children:Object(J.jsxs)(lt,{onClick:function(){V(!0)},children:[Object(J.jsx)(dt,{children:Object(J.jsx)(_n.c,{})}),Object(J.jsx)(st,{children:Object(J.jsx)(rt.a,{variant:"danger",children:H})})]})})]}),Object(J.jsxs)(at,{children:[!t||"Set Location"!==t.name&&"Default"!==t.name?wn(t,we):Ot.map((function(e){return wn(e,we)})),P&&P.length>0&&"Set Location"!=t&&!l&&!Q&&Object(J.jsxs)(g.Fragment,{children:[Object(J.jsx)(ot,{children:Object(J.jsxs)(tt.a,{children:[Object(J.jsx)(tt.a.Toggle,{variant:"success",id:"dropdown-basic",children:h}),Object(J.jsxs)(tt.a.Menu,{children:[Object(J.jsx)(tt.a.Item,{onClick:function(){ve("All Products")},children:"All Products"}),Object(J.jsx)(tt.a.Item,{onClick:function(){ve("Flower")},children:"Flower"}),Object(J.jsx)(tt.a.Item,{onClick:function(){ve("Non-Flower")},children:"Non-Flower"}),Object(J.jsx)(tt.a.Item,{onClick:function(){ve("Miscellaneous")},children:"Miscellaneous"})]})]})}),f.map((function(e){return Sn(e,ke)}))]}),l&&null!=a&&!Q&&Object(J.jsx)(g.Fragment,{children:Mn(a,(function(e){var n={};n.dollars=X.dollars+e.price.dollars;var t=X.cents+e.price.cents;t>=100?(n.dollars=n.dollars+1,n.cents=t%100):n.cents=t,$(H+1),ee(n);var r=Object(On.a)({},e).id;if(null!=R[r])Ce(1,r);else{var c=Object(E.a)({},r,Object(On.a)(Object(On.a)({},e),{},{quantity:1}));W(Object(On.a)(Object(On.a)({},R),c))}}))}),Q&&!re?Object(J.jsx)(g.Fragment,{children:Jn(R,H,X,0,Ce,(function(e){var n=-1*R[e].quantity;Ce(n,e)}),Se)}):re&&Object(J.jsx)(g.Fragment,{children:nt(H,X,Se,Ne,oe,je,xe,(function(){Oe(!1),ce(!1),V(!1)}),fe,me)})]})]})};t(93);var pt=function(){var e=Object(g.useState)("grams"),n=Object(w.a)(e,2),t=(n[0],n[1],Object(g.useState)(!1)),r=Object(w.a)(t,2),c=r[0],i=r[1];return document.body.style="background: black;",Object(J.jsx)(F,{children:Object(J.jsx)(y.a,{basename:"",children:Object(J.jsxs)(v.c,{children:[Object(J.jsx)(v.a,{path:"/home",children:Object(J.jsx)(Z,{})}),Object(J.jsx)(v.a,{path:"/about",children:Object(J.jsx)(Z,{})}),Object(J.jsx)(v.a,{path:"/order",children:Object(J.jsx)(gt,{})}),Object(J.jsx)(v.a,{path:"/",children:Object(J.jsx)(bn,{ageConfirmed:c,setAgeConfirmed:i})})]})})})};m.a.render(Object(J.jsx)(pt,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.1b6cc262.chunk.js.map