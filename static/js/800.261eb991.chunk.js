"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[800],{9063:function(n,e,t){t.d(e,{Z:function(){return g}});var i,r,o,a,s,d=t(168),p=t(4709),c=p.Z.h1(i||(i=(0,d.Z)(["\n  color: ",";\n  font-size: ","px;\n  font-weight: ",";\n  line-height: ",";\n  letter-spacing: -0.56px;\n  padding-bottom: 3px;\n\n  @media screen and (min-width: 768px) {\n    font-size: ","px;\n    letter-spacing: -0.64px;\n    padding-bottom: 6px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: ","px;\n    letter-spacing: -0.88px;\n  }\n"])),(function(n){return n.theme.colors.pageTitleColor}),(function(n){return n.theme.fontSizes[28]}),(function(n){return n.theme.fontWeights.semibold}),(function(n){return n.theme.lineHeights[1]}),(function(n){return n.theme.fontSizes[32]}),(function(n){return n.theme.fontSizes[44]})),l=p.Z.div(r||(r=(0,d.Z)(["\n  position: absolute;\n  top: 76px;\n  left: 104px;\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: ",";\n\n  @media screen and (min-width: 768px) {\n    left: 187px;\n    width: 14px;\n    height: 14px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 247px;\n  }\n"])),(function(n){return n.theme.colors.accentColor})),x=(0,p.Z)(l)(o||(o=(0,d.Z)(["\n  top: 106px;\n  left: 333px;\n\n  @media screen and (min-width: 768px) {\n    top: 89px;\n    left: 694px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 1150px;\n  }\n"]))),h=p.Z.div(a||(a=(0,d.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 241px;\n  width: 6px;\n  height: 6px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: ",";\n\n  @media screen and (min-width: 768px) {\n    width: 12px;\n    height: 12px;\n    border-radius: 3px;\n\n    left: 405px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 707px;\n  }\n"])),(function(n){return n.theme.colors.backgroundColorCircle})),m=p.Z.section(s||(s=(0,d.Z)(["\n  position: relative;\n  padding-top: 114px;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 136px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 164px;\n  }\n"]))),u=t(184),g=function(n){var e=n.title;return(0,u.jsxs)(m,{children:[(0,u.jsx)(c,{children:e}),(0,u.jsx)(l,{}),(0,u.jsx)(x,{}),(0,u.jsx)(h,{})]})}},5390:function(n,e,t){t.d(e,{X:function(){return i}});var i=function(n){if(n<0)return"0 min";var e=Math.floor(n/60),t=n%60;return 0===e?"".concat(t," min"):0===t?"".concat(e,e>1?" hours":" hour"):"".concat(e," h ").concat(t," min")}},3800:function(n,e,t){t.r(e),t.d(e,{default:function(){return xe}});var i,r=t(2791),o=t(9434),a=t(4543),s=t(6739),d=t(2730),p=t(9439),c=t(5705),l=t(7689),x=t(6727),h=[{id:1,time:"5"},{id:2,time:"10"},{id:3,time:"15"},{id:4,time:"20"},{id:5,time:"40"},{id:6,time:"45"},{id:7,time:"50"},{id:8,time:"60"},{id:9,time:"65"},{id:10,time:"70"},{id:11,time:"80"},{id:12,time:"85"},{id:13,time:"90"},{id:14,time:"95"},{id:15,time:"100"},{id:16,time:"105"},{id:17,time:"110"},{id:18,time:"115"},{id:19,time:"120"}],m=h.map((function(n){return n.time})),u=x.Ry().shape({photo:x.nK().required("You need to provide a file").test("fileSize","To limit the file size to a maximum of 3MB",(function(n){return n.size<=3e6})).test("type","Only the following formats are accepted: .jpeg, .jpg, .bmp, .png, .svg, and .webp",(function(n){return n&&("image/jpeg"===n.type||"image/bmp"===n.type||"image/png"===n.type)})),title:x.Z_().required("Please enter the recipe title").matches(/[\u0430-\u044f\u0410-\u042fa-zA-Z]+/,"Title must contain letters"),about:x.Z_().required("Please describe the recipe").matches(/[\u0430-\u044f\u0410-\u042fa-zA-Z]+/,"Describe must contain letters"),category:x.Z_().required("Please choose a category for your recipe"),time:x.Z_().required("Please select the cooking time").oneOf(m),ingredients:x.IX().of(x.Ry().shape({id:x.Z_().required("Please select an ingredient"),measure:x.Z_().required("Please enter the measure")})),preparation:x.IX().of(x.Z_().required("Please enter the recipe")).test("notEmptyStrings","Please enter the recipe",(function(n){return n&&n[0]&&n[0].length>0&&/[^\s\n]/.test(n[0])&&n.every((function(n){return n&&n.length>0}))}))}),g=t(5600),f=t(3201),b=t(536),v=t(1413),w=t(168),j=t(4709),y=j.Z.p(i||(i=(0,w.Z)(["\n  color: var(--error-color);\n  font-size: 12px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n"]))),Z=t(184),_=function(n){var e=n.name,t=n.style;return(0,Z.jsx)(c.Bc,{name:e,render:function(n){return(0,Z.jsx)(y,{style:t,children:n})}})};var k=t.p+"static/media/sprite.2907ddde8e16a69e5625ef68527eb9d4.svg",z=function(n,e,t,i){var r=e(t,n);return e(i,n)&&r},C=t(5390),q=t(340),F=t(965);var P=(0,q.Z)("div",{target:"e1qs9a0m10"})({name:"1uwh63m",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;padding-bottom:67px;padding-top:97px;@media screen and (min-width: 768px){flex-direction:row;padding-bottom:104px;}"}),N=(0,q.Z)("div",{target:"e1qs9a0m9"})({name:"1shiue1",styles:"margin-bottom:32px;text-align:center;@media screen and (min-width: 768px){margin-right:32px;margin-bottom:0;}transition:scale var(--transition-duration) var(--timing-function);&:focus,&:hover{scale:1.01;}"}),S=(0,q.Z)("div",{target:"e1qs9a0m8"})({name:"1ishykn",styles:"width:279px;height:268px;transition:box-shadow var(--transition-duration) var(--timing-function);@media screen and (min-width: 1280px){width:357px;height:344px;}&.error{box-shadow:0 0 5px var(--error-color);border-radius:8px;}"}),I=(0,q.Z)("label",{target:"e1qs9a0m7"})(""),T=(0,q.Z)("div",{target:"e1qs9a0m6"})({name:"1sxeplg",styles:"width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-shrink:0;background-color:var(--accent-color);border-radius:8px;cursor:pointer;&:active{transform:scale(1.01);}"}),A=(0,q.Z)("img",{target:"e1qs9a0m5"})({name:"1weeyao",styles:"width:100%;height:100%;border-radius:8px"}),E=(0,q.Z)("div",{target:"e1qs9a0m4"})({name:"17io7zi",styles:"display:flex;flex-direction:column;width:100%;@media screen and (min-width: 1280px){width:393px;}"}),O=(0,q.Z)("div",{target:"e1qs9a0m3"})({name:"1ascejt",styles:"position:relative;display:flex;flex-direction:column;height:40px;border-bottom:1px solid var(--input-border-color);transition:box-shadow var(--transition-duration) var(--timing-function);:not(:last-child){margin-bottom:24px;}&:focus,&:hover{box-shadow:0 5px 5px -5px rgba(217, 217, 217, 1);}&.error{box-shadow:0 5px 5px -5px var(--error-color);}@media screen and (min-width: 768px){height:43px;:not(:last-child){margin-bottom:32px;}}@media screen and (min-width: 1280px){:not(:last-child){margin-bottom:40px;}}"}),R=(0,q.Z)(c.gN,{target:"e1qs9a0m2"})({name:"akxvb2",styles:"font-family:'Poppins';font-size:12px;border:none;background-color:transparent;padding:0;color:#000000;height:100%;outline:none;padding-top:23px;@media screen and (min-width: 768px){font-size:14px;}"}),L=(0,q.Z)("label",{target:"e1qs9a0m1"})({name:"5apjh",styles:"position:absolute;top:0;left:0;font-size:14px;color:#797979;pointer-events:none;@media screen and (min-width: 768px){font-size:16px;}"}),M=(0,q.Z)(F.ZP,{target:"e1qs9a0m0"})("position:absolute;top:4px;right:0;.custom-select{&__control{box-shadow:none;background-color:transparent;border:none;min-height:20px;min-width:87px;font-size:12px;line-height:1;font-weight:500;cursor:pointer;&:hover{",O,"{box-shadow:0 5px 5px -5px rgba(217, 217, 217, 1);}}&:hover,&--is-focused{box-shadow:0 0 5px rgba(217, 217, 217, 1);border-radius:6px;}@media screen and (min-width: 768px){font-size:14px;min-width:94px;}}&__input-container{padding:1px;margin:0;}&__menu{font-size:12px;padding:4px 4px 4px 14px;margin:0;width:123px;top:28px;right:0px;box-shadow:0px 6.518518447875977px 7.8222222328186035px 0px rgba(0, 0, 0, 0.03);border:none;border-radius:6px;@media screen and (min-width: 768px){width:132px;font-size:14px;}}&__menu-list{height:calc(6 * 22px + 2px);@media screen and (min-width: 768px){height:calc(6 * 27px);}}&__value-container{padding:0px 8px;}&__single-value{color:#23262a;line-height:1;letter-spacing:-0.28px;}&__option{font-size:12px;padding:3px 0;margin-bottom:4px;font-size:12px;color:#000000;letter-spacing:-0.24px;opacity:0.5;cursor:pointer;@media screen and (min-width: 768px){font-size:14px;}}&__option--is-focused{background-color:rgba(139, 170, 54, 0.2);}&__option--is-selected{background-color:var(--accent-color);}&__indicator-separator{display:none;}&__indicator{padding:0;cursor:pointer;color:var(--accent-color);transition:stroke var(--transition-duration) var(--timing-function);&:hover,&:focus{transform:scale(1.1);color:var(--accent-color);}}&__menu-list::-webkit-scrollbar{width:4px;height:0px;}&__menu-list::-webkit-scrollbar-track{background:transparent;}&__menu-list::-webkit-scrollbar-thumb{padding:4px 0;border-radius:12px;background:#e7e5e5;cursor:pointer;}&__menu-list::-webkit-scrollbar-thumb:hover{background:var(--accent-color);}}"),X=function(n){var e=n.file,t=n.handleFileChange,i=(0,o.v9)(g.DS),r=i.map((function(n){return{value:n._id,label:n.name}})),a=h.map((function(n){return{value:n.time,label:(0,C.X)(n.time)}})),s=(0,c.u6)(),d=s.setFieldValue,p=s.errors,l=s.touched;return(0,Z.jsxs)(P,{children:[(0,Z.jsxs)(N,{children:[(0,Z.jsx)(c.gN,{name:"photo",type:"file",children:function(n){var i=n.field;return(0,Z.jsxs)(S,{className:z("title",c.u9,p,l)?"error":"",children:[(0,Z.jsx)(I,{htmlFor:i.name,children:(0,Z.jsx)(T,{children:e?(0,Z.jsx)(A,{src:URL.createObjectURL(e),alt:"Uploaded"}):(0,Z.jsxs)("svg",{width:64,height:64,children:[(0,Z.jsx)("use",{href:"".concat(k,"#capture")}),(0,Z.jsx)("use",{href:"".concat(k,"#photo-camera"),width:24,height:24,x:20,y:20})]})})}),(0,Z.jsx)("input",{accept:"image/*",type:"file",id:i.name,style:{display:"none"},onChange:function(n){d("photo",n.target.files[0]),t(n)}})]})}}),(0,Z.jsx)(_,{name:"photo",style:{paddingTop:"5px"}})]}),(0,Z.jsxs)(E,{children:[(0,Z.jsxs)(O,{className:z("title",c.u9,p,l)?"error":"",children:[(0,Z.jsx)(L,{htmlFor:"title",children:"Enter item title"}),(0,Z.jsx)(R,{name:"title",id:"title",type:"text"}),(0,Z.jsx)(_,{name:"title",style:{paddingTop:"5px"}})]}),(0,Z.jsxs)(O,{className:z("about",c.u9,p,l)?"error":"",children:[(0,Z.jsx)(L,{htmlFor:"about",children:"Enter about recipe"}),(0,Z.jsx)(R,{name:"about",id:"about",type:"text"}),(0,Z.jsx)(_,{name:"about",style:{paddingTop:"5px"}})]}),(0,Z.jsxs)(O,{className:z("category",c.u9,p,l)?"error":"",children:[(0,Z.jsx)(L,{htmlFor:"category",children:"Category"}),(0,Z.jsx)(M,{name:"category",as:"select",options:r,classNamePrefix:"custom-select",isSearchable:!1,onChange:function(n){d("category",n.label)},children:i.map((function(n){var e=n._id,t=n.name;return(0,Z.jsx)("option",{value:t,children:t},e)}))}),(0,Z.jsx)(_,{name:"category",style:(0,v.Z)({position:"absolute"},window.innerWidth>=768?{bottom:"-21px"}:{bottom:"-19px"})})]}),(0,Z.jsxs)(O,{className:z("time",c.u9,p,l)?"error":"",children:[(0,Z.jsx)(L,{htmlFor:"time",children:"Cooking time"}),(0,Z.jsx)(M,{name:"time",as:"select",options:a,classNamePrefix:"custom-select",onChange:function(n){return d("time",n.value)},isSearchable:!1,children:h.map((function(n){var e=n.id,t=n.time;return(0,Z.jsx)("option",{value:t,children:t},e)}))}),(0,Z.jsx)(_,{name:"time",style:(0,v.Z)({position:"absolute"},window.innerWidth>=768?{bottom:"-21px"}:{bottom:"-19px"})})]})]})]})},Y=t(3433),B=function(n){return n.ingredients.ingredientsList};var U=(0,q.Z)("div",{target:"eftt0nu4"})({name:"19ox3yp",styles:"position:absolute;top:0;right:0;border-radius:18px;border:1px solid rgba(51, 51, 51, 0.3)"}),V=(0,q.Z)("svg",{target:"eftt0nu3"})({name:"ilg561",styles:"stroke:#333333;stroke-opacity:0.3;transition:stroke var(--transition-duration) var(--timing-function);@media screen and (min-width: 768px){width:16px;height:16px;}"}),D=(0,q.Z)("button",{target:"eftt0nu2"})("width:auto;outline:none;height:auto;padding:0;background:none;border:none;transition:box-shadow var(--transition-duration) var(--timing-function);cursor:pointer;&:active{transform:scale(1.01);}&:hover{",V,"{stroke:var(--accent-color);stroke-opacity:1;}}&:focus{box-shadow:0 0 5px rgba(217, 217, 217, 1);border-radius:4px;",V,"{stroke:var(--accent-color);stroke-opacity:1;}}"),W=(0,q.Z)("span",{target:"eftt0nu1"})({name:"ni24c4",styles:"color:#333333;margin-left:14px;margin-right:14px;font-size:14px;line-height:1.3;@media screen and (min-width: 768px){font-size:16px;}"}),J=(0,q.Z)("div",{target:"eftt0nu0"})({name:"1dy5vju",styles:"padding:7px 14px;display:flex"}),G=function(n){var e=n.remove,t=n.push,i=n.ingredients;return(0,Z.jsx)(U,{children:(0,Z.jsxs)(J,{children:[(0,Z.jsx)(D,{type:"button",onClick:function(){i.length>1&&e(i.length-1)},children:(0,Z.jsx)(V,{width:14,height:14,children:(0,Z.jsx)("use",{href:"".concat(k,"#minus")})})}),(0,Z.jsx)(W,{children:i.length}),(0,Z.jsx)(D,{type:"button",onClick:function(){return t({id:"",measure:""})},children:(0,Z.jsx)(V,{width:14,height:14,children:(0,Z.jsx)("use",{href:"".concat(k,"#plus")})})})]})})};var H,K,Q,$,nn,en,tn,rn,on,an,sn,dn,pn,cn,ln,xn,hn,mn,un,gn,fn,bn,vn=(0,q.Z)("div",{target:"e160gzhj9"})({name:"ryfeq5",styles:"position:relative;margin-bottom:100px"}),wn=(0,q.Z)("h2",{target:"e160gzhj8"})({name:"1mjbzy3",styles:"color:#3e4462;font-size:24px;font-weight:600;line-height:1;letter-spacing:-0.48px;margin-bottom:24px;@media screen and (min-width: 768px){margin-bottom:36px;}"}),jn=(0,q.Z)("div",{target:"e160gzhj7"})({name:"w7nyri",styles:"margin-right:14px;min-width:194px;@media screen and (min-width: 768px){margin-right:32px;min-width:398px;}"}),yn=(0,q.Z)("div",{target:"e160gzhj6"})({name:"15zytqm",styles:".error{box-shadow:0 0 5px var(--error-color);border-radius:8px;}transition:stroke var(--transition-duration) var(--timing-function)"}),Zn=(0,q.Z)(F.ZP,{target:"e160gzhj5"})({name:"17z0062",styles:".custom-select{&__control{font-family:'Poppins';border:none;border-radius:6px;background-color:rgba(217, 217, 217, 0.157);font-size:14px;line-height:1;cursor:text;&:hover,&--is-focused{box-shadow:0 0 5px rgba(217, 217, 217, 1);border-radius:6px;}.error{box-shadow:0 0 5px var(--error-color);border-radius:8px;}@media screen and (min-width: 768px){font-size:18px;}}&__menu{padding:4px 4px 4px 18px;margin:0;box-shadow:0px 6.518518447875977px 7.8222222328186035px 0px rgba(0, 0, 0, 0.03);border:none;border-radius:6px;}&__menu-list{height:calc(6 * 24px + 2px);@media screen and (min-width: 768px){height:calc(6 * 27px + 2px);}}&__value-container{padding:12px 8px;}&__single-value{color:#23262a;line-height:1;letter-spacing:-0.28px;}&__option{margin:6px 0;padding:2px 0;font-size:12px;color:#000000;letter-spacing:-0.24px;opacity:0.5;cursor:pointer;@media screen and (min-width: 768px){font-size:14px;}}&__option--is-focused{background-color:rgba(139, 170, 54, 0.2);}&__option--is-selected{background-color:var(--accent-color);}&__indicator-separator{display:none;}&__indicator{cursor:pointer;color:var(--accent-color);transition:stroke var(--transition-duration) var(--timing-function);&:hover,&:focus{transform:scale(1.1);color:var(--accent-color);}}&__menu-list::-webkit-scrollbar{width:4px;height:0px;}&__menu-list::-webkit-scrollbar-track{background:transparent;}&__menu-list::-webkit-scrollbar-thumb{padding:4px 0;border-radius:12px;background:#e7e5e5;cursor:pointer;}&__menu-list::-webkit-scrollbar-thumb:hover{background:var(--accent-color);}}"}),_n=(0,q.Z)("div",{target:"e160gzhj4"})({name:"1d0i03h",styles:"margin-right:8px;width:109px;@media screen and (min-width: 768px){margin-right:40px;width:214px;}"}),kn=(0,q.Z)(c.gN,{target:"e160gzhj3"})({name:"yaj9bd",styles:"outline:none;width:109px;height:54px;padding:0 0 0 5px;border:none;border-radius:6px;background-color:rgba(217, 217, 217, 0.157);color:#23262a;font-size:14px;line-height:1;letter-spacing:-0.28px;font-family:'Poppins';color:#23262a;transition:box-shadow var(--transition-duration) var(--timing-function);cursor:text;&:focus,&:hover{box-shadow:0 0 5px rgba(217, 217, 217, 1);border-radius:6px;}@media screen and (min-width: 768px){font-size:18px;height:59px;width:214px;}&.error{box-shadow:0 0 5px var(--error-color);border-radius:6px;}"}),zn=(0,q.Z)("div",{target:"e160gzhj2"})({name:"1eea9sv",styles:"display:flex;margin-bottom:18px"}),Cn=(0,q.Z)("svg",{target:"e160gzhj1"})({name:"xrsjvm",styles:"stroke:#333333;@media screen and (min-width: 768px){width:20px;height:20px;}transition:stroke var(--transition-duration) var(--timing-function)"}),qn=(0,q.Z)("button",{target:"e160gzhj0"})("padding:0;outline:none;border:none;background-color:transparent;transition:box-shadow var(--transition-duration) var(--timing-function);cursor:pointer;&:active{transform:scale(1.01);}&:hover{",Cn,"{stroke:var(--accent-color);}}&:focus{box-shadow:0 0 5px rgba(217, 217, 217, 1);border-radius:4px;",Cn,"{stroke:var(--accent-color);}}"),Fn=function(){var n=(0,o.v9)(B).map((function(n){return{value:n._id,label:n.name}}));return(0,Z.jsxs)(vn,{children:[(0,Z.jsx)(wn,{children:"Ingredients"}),(0,Z.jsx)(c.F2,{validateOnChange:!0,name:"ingredients",children:function(e){var t=e.push,i=e.remove,r=e.form,o=r.values,a=r.setFieldValue,s=r.errors,d=r.touched,p=o.ingredients;return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(G,{remove:i,push:t,ingredients:p}),p.map((function(e,t){return(0,Z.jsxs)(zn,{children:[(0,Z.jsxs)(jn,{children:[(0,Z.jsx)(yn,{className:z("ingredients[".concat(t,"].measure"),c.u9,s,d)?"error":"",children:(0,Z.jsx)(Zn,{className:z("ingredients[".concat(t,"].id"),c.u9,s,d)?"error":"",classNamePrefix:"custom-select",name:"ingredients[".concat(t,"].id"),placeholder:"Select ingredient",options:n,onChange:function(n){!function(n,e){var t=(0,Y.Z)(p);t[n].id=e.value,a("ingredients",t)}(t,n)}})}),(0,Z.jsx)(_,{name:"ingredients[".concat(t,"].id"),style:{marginTop:"5px"}})]}),(0,Z.jsxs)(_n,{children:[(0,Z.jsx)(kn,{name:"ingredients[".concat(t,"].measure"),type:"text",value:p[t].measure||"",onChange:function(n){!function(n,e){var t=(0,Y.Z)(p);t[n].measure=e,a("ingredients",t)}(t,n.target.value)},placeholder:"Enter measure",className:z("ingredients[".concat(t,"].measure"),c.u9,s,d)?"error":""}),(0,Z.jsx)(_,{name:"ingredients[".concat(t,"].measure"),style:{marginTop:"5px"}})]}),(0,Z.jsx)(qn,{type:"button",onClick:function(){i(t)},children:(0,Z.jsx)(Cn,{width:18,height:18,children:(0,Z.jsx)("use",{href:"".concat(k,"#delete-button")})})})]},t)}))]})}})]})},Pn=(0,j.Z)(wn)(H||(H=(0,w.Z)(["\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),Nn=j.Z.div(K||(K=(0,w.Z)(["\n  margin-bottom: 18px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 32px;\n  }\n"]))),Sn=(0,j.Z)(c.gN)(Q||(Q=(0,w.Z)(["\n  outline: none;\n  width: 100%;\n  height: 154px;\n  resize: none;\n  border: none;\n  border-radius: 6px;\n  box-shadow: 0px 6.518518447875977px 7.8222222328186035px 0px\n    rgba(0, 0, 0, 0.03);\n  background-color: rgba(217, 217, 217, 0.157);\n  padding: 10px 16px;\n\n  color: #23262a;\n  font-family: 'Poppins';\n  font-size: 14px;\n  letter-spacing: -0.28px;\n\n  transition: box-shadow var(--transition-duration) var(--timing-function);\n\n  &::placeholder {\n    color: #000000;\n    opacity: 0.5;\n  }\n\n  &:focus,\n  &:hover {\n    box-shadow: 0 0 5px rgba(217, 217, 217, 1);\n    border-radius: 6px;\n  }\n\n  &.error {\n    box-shadow: 0 0 5px var(--error-color);\n    border-radius: 6px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 505px;\n    height: 224px;\n    font-size: 18px;\n  }\n"]))),In=function(){var n=(0,r.useState)([""]),e=(0,p.Z)(n,2),t=e[0],i=e[1],o=(0,c.u6)(),a=o.errors,s=o.touched;return(0,Z.jsxs)(Nn,{children:[(0,Z.jsx)(Pn,{children:"Recipe Preparation"}),(0,Z.jsx)(Sn,{name:"preparation",as:"textarea",placeholder:"Enter recipe",onChange:function(n){var e=n.target.value;i([e]);var r=t[0].split("\n").map((function(n){return 0===n.length?"\n":n})),a=r.length>1?r:[e];o.setFieldValue("preparation",a)},value:t,className:z("preparation",c.u9,a,s)?"error":""}),a.preparation&&(0,Z.jsx)(_,{name:"preparation"})]})},Tn=t(1953),An={photo:"",title:"",about:"",category:"",time:"",ingredients:[{id:"",measure:""},{id:"",measure:""},{id:"",measure:""}],preparation:[""]},En=function(){var n=(0,r.useState)(null),e=(0,p.Z)(n,2),t=e[0],i=e[1],s=(0,l.s0)(),d=(0,o.v9)(g.F),x=(0,o.v9)(g.zh),h=(0,o.I0)();(0,r.useEffect)((function(){if(!x)return d&&(0,f.U)("Congratulations! You have added a recipe."),d&&s("/recipes/".concat(d)),function(){h((0,Tn.FA)(""))};(0,f.E)("Oops... Something went wrong.")}),[x,d,s,h]);return(0,Z.jsx)(c.J9,{initialValues:An,validationSchema:u,onSubmit:function(n,e){e.resetForm,e.setSubmitting;console.log(n);var i=JSON.stringify({title:n.title,description:n.about,category:n.category,time:n.time,ingredients:n.ingredients,instructions:n.preparation}),r=new FormData;r.append("recipeImg",t),r.append("data",i),h(a.A.addOwnRecipe(r))},children:(0,Z.jsxs)(c.l0,{children:[(0,Z.jsx)(X,{handleFileChange:function(n){var e=n.target.files[0];i(e),console.log(e)},file:t}),(0,Z.jsx)(Fn,{}),(0,Z.jsx)(In,{}),(0,Z.jsx)(b.Z,{nameButton:"Add",type:"submit",cofByMedia768:{font:1,padX:1.17,padY:1.333},cofByMedia1280:{font:1,padX:1.17,padY:1.333}})]})})},On=t(9063),Rn=function(n,e){if(n.length<=e)return n;var t=n.lastIndexOf(" ",e);if(t<=0)return n.slice(0,e-1)+"...";var i=n.slice(0,t);return i[i.length-1].match(/[A-Za-z0-9]/)||(i=i.slice(0,-1)),i+"..."},Ln=function(n,e){return Math.random()-.5},Mn=t(1087),Xn=(0,j.Z)(Mn.OL)($||($=(0,w.Z)(["\noutline: none;\n  width: 343px;\n  padding-bottom: 13px;\n  border-bottom: 1px solid #7070702b;\n  display: flex;\n\n  transition: box-shadow var(--transition-duration) var(--timing-function);\n\n&:focus {\n  box-shadow: 0 0 5px rgba(217, 217, 217, 1);\n  border-radius: 6px;\n}\n\n&:hover {\n  scale: 1.02;\n}\n\ntransition: scale var(--transition-duration) var(--timing-function);\n\n  @media (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 319px;\n    gap: 11px;\n  }\n"]))),Yn=j.Z.div(nn||(nn=(0,w.Z)(["\n  width: 104px;\n  height: 85px;\n  margin-right: 12px;\n  flex-shrink: 0;\n  border-radius: 8px;\n\n  @media (min-width: 768px) {\n    width: 102px;\n  }\n\n  @media (min-width: 1280px) {\n    width: 97px;\n  }\n"]))),Bn=j.Z.img(en||(en=(0,w.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  border-radius: 8px;\n"]))),Un=j.Z.div(tn||(tn=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n"]))),Vn=j.Z.h3(rn||(rn=(0,w.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.25;\n  color: var(--secondary-text-color);\n"]))),Dn=j.Z.p(on||(on=(0,w.Z)(["\n  font-size: 12px;\n  line-height: 1.3;\n  color: #7e7e7e;\n"]))),Wn=function(n){var e=n._id,t=n.title,i=n.description,r=n.thumb;return(0,Z.jsxs)(Xn,{to:"/recipes/".concat(e),children:[(0,Z.jsx)(Yn,{children:(0,Z.jsx)(Bn,{src:r})}),(0,Z.jsxs)(Un,{children:[(0,Z.jsx)(Vn,{children:t}),(0,Z.jsx)(Dn,{children:i})]})]})},Jn=j.Z.svg(an||(an=(0,w.Z)(["\nwidth: 100% ;\nheight: 300px;\nfill: var(--accent-color);\nmargin-bottom: 15px;\n\n@media screen and (min-width: 1280px) {\n    width: 319px;\n    height: 319px;\n  }\n"]))),Gn=(0,j.Z)(Vn)(sn||(sn=(0,w.Z)(["\ntext-align: center;\n"]))),Hn=function(){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(Jn,{children:(0,Z.jsx)("use",{href:"".concat(k,"#cat")})}),(0,Z.jsx)(Gn,{children:"No new popular recipes yet"})]})},Kn=j.Z.ul(dn||(dn=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    gap: 32px;\n  }\n\n  @media (min-width: 1280px) {\n    flex-direction: column;\n    gap: 24px;\n  }\n"]))),Qn=j.Z.li(pn||(pn=(0,w.Z)(["\n  @media (min-width: 768px) and (max-width: 1279px) {\n    &:nth-of-type(3),\n    &:nth-of-type(4) {\n      display: none;\n    }\n  }\n"]))),$n=function(){var n=(0,o.v9)(g.Gn),e=(0,r.useMemo)((function(){return(0,Y.Z)(n).sort(Ln).slice(0,4)}),[n]);return(0,Z.jsx)(Z.Fragment,{children:n.length>0?(0,Z.jsx)(Kn,{children:e.map((function(n){var e=n._id,t=n.title,i=n.description,r=n.thumb;return(0,Z.jsx)(Qn,{children:(0,Z.jsx)(Wn,{_id:e,title:t,description:Rn(i,70),thumb:r})},e)}))}):(0,Z.jsx)(Hn,{})})},ne=t(1122),ee=t(216),te=j.Z.div(cn||(cn=(0,w.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nwidth: 100%;\nheight: 100vh;\n\n@media (min-width: 1280px) {\n    width: 782px;\n    margin-right: 121px;\n}\n"]))),ie=function(){return(0,Z.jsx)(te,{children:(0,Z.jsx)(ee.Z,{})})},re=j.Z.div(ln||(ln=(0,w.Z)(["\n  padding-top: 12px;\n\n  @media (min-width: 768px) {\n    padding-top: 20px;\n  }\n  @media (min-width: 1280px) {\n    padding-top: 55px;\n  }\n"]))),oe=j.Z.div(xn||(xn=(0,w.Z)(["\n  @media (min-width: 1280px) {\n    display: flex;\n  }\n"]))),ae=j.Z.div(hn||(hn=(0,w.Z)(["\n  padding-bottom: 100px;\n\n  @media (min-width: 768px) {\n    padding-bottom: 200px;\n  }\n\n  @media (min-width: 1280px) {\n    padding-top: 100px;\n    margin-left: 121px;\n  }\n"]))),se=j.Z.section(mn||(mn=(0,w.Z)(["\n  padding-bottom: 72px;\n\n  @media (min-width: 768px) {\n    padding-bottom: 100px;\n  }\n  @media (min-width: 1280px) {\n    padding-bottom: 200px;\n  }\n"]))),de=j.Z.section(un||(un=(0,w.Z)(["\n"]))),pe=(0,j.Z)(wn)(gn||(gn=(0,w.Z)(["\n  margin-bottom: 32px;\n"]))),ce=j.Z.section(fn||(fn=(0,w.Z)(["\n  display: none;\n  @media (min-width: 1280px) {\n    display: block;\n    padding-bottom: 100px;\n  }\n"]))),le=(0,j.Z)(wn)(bn||(bn=(0,w.Z)(["\n  margin-bottom: 40px;\n"]))),xe=function(){var n=(0,o.I0)();(0,r.useEffect)((function(){n(s.x.getIngredientsList()),n(a.A.getCategoryList()),n(a.A.getPopularRecipes())}),[n]);var e=(0,o.v9)(B);return(0,Z.jsxs)(d.t,{children:[(0,Z.jsx)(re,{children:(0,Z.jsx)(On.Z,{title:"Add recipe"})}),(0,Z.jsxs)(oe,{children:[(0,Z.jsx)(se,{children:e?(0,Z.jsx)(En,{}):(0,Z.jsx)(ie,{})}),(0,Z.jsxs)(ae,{children:[(0,Z.jsxs)(ce,{children:[(0,Z.jsx)(le,{children:"Follow us"}),(0,Z.jsx)(ne.Z,{wFacebook:26,hFacebook:26,wYoutube:28,hYoutube:22,wTwitter:25,hTwitter:22,wInstagram:24,hInstagram:24,hoverColor:"#1E1F28",flex:"start"})]}),(0,Z.jsxs)(de,{children:[(0,Z.jsx)(pe,{children:"Popular recipe"}),(0,Z.jsx)($n,{})]})]})]})]})}}}]);
//# sourceMappingURL=800.261eb991.chunk.js.map