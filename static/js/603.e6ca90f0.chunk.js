"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[603],{7799:function(n,e,t){t.r(e),t.d(e,{ImageContainer:function(){return o},Text:function(){return p}});var i,r,a=t(168),d=t(4709),o=d.Z.div(i||(i=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 100%;\n  margin-top: 50px;\n\n  @media (min-width: 768px) {\n    margin-top: 100px;\n  }\n"]))),p=d.Z.p(r||(r=(0,a.Z)(["\n  margin-top: 24px;\n  color: #000000;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: -0.28px;\n  opacity: 0.5;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 32px;\n    font-size: 24px;\n    letter-spacing: -0.48px;\n  }\n"])))},9063:function(n,e,t){t.d(e,{Z:function(){return g}});var i,r,a,d,o,p=t(168),c=t(4709),x=c.Z.h1(i||(i=(0,p.Z)(["\n  color: var(--page-title-color);\n  font-size: 28px;\n  font-weight: 600;\n  line-height: 1;\n  letter-spacing: -0.56px;\n  padding-top: 35px;\n  padding-bottom: 3px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 32px;\n    letter-spacing: -0.64px;\n    padding-bottom: 6px;\n    padding-top: 46px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 44px;\n    letter-spacing: -0.88px;\n    padding-top: 44px;\n  }\n"]))),s=c.Z.div(r||(r=(0,p.Z)(["\n  position: absolute;\n  top: 0;\n  left: 104px;\n  width: 8px;\n  height: 8px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: var(--accent-color);\n\n  @media screen and (min-width: 768px) {\n    width: 14px;\n    height: 14px;\n  }\n"]))),h=(0,c.Z)(s)(a||(a=(0,p.Z)(["\n  top: 30px;\n  left: 333px;\n\n  @media screen and (min-width: 768px) {\n    top: 13px;\n    left: 694px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 1150px;\n  }\n"]))),l=c.Z.div(d||(d=(0,p.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 241px;\n  width: 6px;\n  height: 6px;\n  transform: rotate(-25deg);\n  flex-shrink: 0;\n  border-radius: 3px;\n  background: var(--background-color-circle);\n\n  @media screen and (min-width: 768px) {\n    width: 12px;\n    height: 12px;\n    border-radius: 3px;\n\n    left: 405px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    left: 707px;\n  }\n"]))),m=c.Z.section(o||(o=(0,p.Z)(["\n  position: relative;\n"]))),u=t(184),g=function(n){var e=n.title;return(0,u.jsxs)(m,{children:[(0,u.jsx)(x,{children:e}),(0,u.jsx)(s,{}),(0,u.jsx)(h,{}),(0,u.jsx)(l,{})]})}},767:function(n,e,t){t.r(e),t.d(e,{default:function(){return en}});var i=t(1413),r=t(5048),a=t(2791),d=t(6277),o=t(4217),p=t(9439);var c,x,s=function(n,e){var t=(0,a.useState)(1),i=(0,p.Z)(t,2),r=i[0],d=i[1],o=Math.ceil(n.length/e);return{next:function(){d((function(n){return Math.min(n+1,o)}))},prev:function(){d((function(n){return Math.max(n-1,1)}))},jump:function(n){var e=Math.max(1,n);d((function(n){return Math.min(e,o)}))},currentData:function(){var t=(r-1)*e,i=t+e;return n.slice(t,i)},page:function(){return r>o&&d((function(n){return n-1})),r},count:o}},h=t(2730),l=t(168),m=t(4709),u=t(7246),g=(0,m.Z)(u.Z)(c||(c=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  & ul {\n    justify-content: center;\n    border-radius: 26px;\n    box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);\n    padding: 10px 8px;\n  }\n  & button {\n    color: #656565;\n    font-weight: 500;\n    &:focus {\n      background-color: transparent;\n    }\n    &:hover {\n      background-color: #ebf3d4;\n    }\n\n    &.Mui-selected {\n      color: black;\n      background-color: #ebf3d4;\n\n      &:hover,\n      &:focus,\n      &:active {\n        background-color: #ebf3d4;\n      }\n    }\n  }\n\n  & .MuiTouchRipple-root {\n    display: none;\n  }\n"]))),f=t(184),w=function(n){var e=n.count,t=n.page,i=n.handleChange,r=(0,a.useState)(window.innerWidth),d=(0,p.Z)(r,2),o=d[0],c=d[1];return(0,a.useEffect)((function(){var n=function(){c(window.innerWidth)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),(0,f.jsx)(g,{count:e,color:"primary",size:"small",siblingCount:o>768?2:1,page:t,onChange:i})},j=t(3239),b=(0,m.Z)(j.Z)(x||(x=(0,l.Z)(["\n  display: block;\n  margin: 50px auto 0;\n  color: var(--accent-color);\n\n  @media (min-width: 768px) {\n    margin-top: 100px;\n  }\n"]))),v=function(){return(0,f.jsx)(b,{size:70})},y=t(536),Z=t(7609),k=t(974);var z,M,C,S=(0,k.Z)("div",{target:"ejyttj10"})({name:"immpl0",styles:"position:relative;padding:14px 9px;background-color:#fff;display:flex;gap:14px;@media screen and (min-width: 768px){padding:28px 24px;gap:24px;}@media screen and (min-width: 1280px){padding:40px 40px;gap:40px;}"}),L=(0,k.Z)("div",{target:"ejyttj9"})({name:"lti8h4",styles:"border-radius:8px;flex-shrink:0;width:124px;height:124px;@media screen and (min-width: 768px){width:228px;height:232px;}@media screen and (min-width: 1280px){width:318px;height:324px;}"}),I=(0,k.Z)("img",{target:"ejyttj8"})({name:"1ouxyjt",styles:"border-radius:8px;width:100%;height:100%;object-fit:cover"}),_=(0,k.Z)("div",{target:"ejyttj7"})({name:"z4gbbw",styles:"width:100%;display:flex;flex-direction:column"}),B=(0,k.Z)("h3",{target:"ejyttj6"})({name:"15vhbfe",styles:"font-size:14px;line-height:1;font-weight:500;margin-bottom:14px;@media screen and (min-width: 768px){font-size:24px;margin-bottom:28px;}@media screen and (min-width: 1280px){margin-bottom:50px;}"}),E=(0,k.Z)("svg",{target:"ejyttj5"})({name:"9rjxf2",styles:"stroke:#000;transition:stroke var(--transition-duration) var(--timing-function);width:14px;height:14px;@media screen and (min-width: 768px){width:22px;height:22px;}@media screen and (min-width: 1280px){width:24px;height:24px;}"}),R=(0,k.Z)("div",{target:"ejyttj4"})("width:24px;height:24px;display:flex;justify-content:center;align-items:center;border-radius:4px;background-color:#ebf3d4;transition:background-color var(--transition-duration) var(--timing-function);cursor:pointer;&:hover{background-color:#8baa36;",E,"{stroke:#fff;}}@media screen and (min-width: 768px){width:38px;height:38px;right:28px;top:24px;}@media screen and (min-width: 1280px){width:44px;height:44px;right:40px;top:40px;}"),T=(0,k.Z)("p",{target:"ejyttj3"})({name:"65har0",styles:"font-size:8px;width:calc(100% - 24px);line-height:1.25;@media screen and (min-width: 768px){font-size:14px;width:calc(100% - 50px);}@media screen and (min-width: 1280px){font-size:18px;width:100%;}"}),Y=(0,k.Z)("span",{target:"ejyttj2"})({name:"11khtws",styles:"font-size:10px;font-weight:500;line-height:1.4;@media screen and (min-width: 768px){font-size:14px;}@media screen and (min-width: 1280px){}"}),D=(0,k.Z)("div",{target:"ejyttj1"})({name:"1gz6c2x",styles:"display:flex;justify-content:space-between;align-items:flex-start;gap:10px"}),F=(0,k.Z)("div",{target:"ejyttj0"})({name:"3b7h8g",styles:"margin-top:auto;display:flex;justify-content:space-between;align-items:flex-end"}),W=function(n){if(n<0)return"0 min";var e=Math.floor(n/60),t=n%60;return 0===e?"".concat(t," min"):0===t?"".concat(e,e>1?" hours":" hour"):"".concat(e," h ").concat(t," min")},X=t(7689),N=t(8257),V=function(n){var e=n._id,t=n.thumb,i=n.title,a=n.description,d=n.time,o=(0,X.s0)(),p=(0,r.I0)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)(S,{children:[(0,f.jsx)(L,{children:(0,f.jsx)(I,{src:t})}),(0,f.jsxs)(_,{children:[(0,f.jsxs)(D,{children:[(0,f.jsx)(B,{children:i}),(0,f.jsx)(R,{onClick:function(){return p((0,N.Z)(e))},children:(0,f.jsx)(E,{width:"30",height:"30",fill:"none",children:(0,f.jsx)("use",{href:"".concat(Z.Z,"#trash")})})})]}),(0,f.jsx)(T,{children:a}),(0,f.jsxs)(F,{children:[(0,f.jsx)(Y,{children:W(Number(d))}),(0,f.jsx)(y.Z,{cofByMedia1280:{padX:3,padY:3.14,font:1.6},cofByMedia768:{padX:2,padY:2.28,font:1.4},fontSize:"10px",padding:{paddingTop:"6px",paddingBottom:"6px",paddingLeft:"14px",paddingRight:"14px"},nameButton:"See recipe",onClick:function(){return o("/recipes/".concat(e))}})]})]})]})})},q=t.p+"static/media/Small.2f56a7b7eabacfd09f2e.png",A=t.p+"static/media/Small@2x.22bf64dcd04d440d3bf8.png",G=t.p+"static/media/Large.3c0232a5f0c7332b77cc.png",H=t.p+"static/media/Large@2x.831629f38acb698698c1.png",J=t(7799),K=J.ImageContainer,O=J.Text,P=function(n){var e=n.children;return(0,f.jsxs)(K,{children:[(0,f.jsxs)("picture",{children:[(0,f.jsx)("source",{srcSet:"".concat(G," 1x, ").concat(H," 2x"),media:"(min-width: 768px)"}),(0,f.jsx)("source",{srcSet:"".concat(q," 1x, ").concat(A," 2x"),media:"(max-width: 767px)"}),(0,f.jsx)("img",{src:q,alt:"vegitable"})]}),(0,f.jsx)(O,{children:e})]})},Q=t(9063),U=m.Z.section(z||(z=(0,l.Z)(["\n  padding: 12px 0 100px;\n\n  @media (min-width: 768px) {\n    padding: 20px 0 200px;\n  }\n  @media (min-width: 1280px) {\n    padding: 55px 0 100px;\n  }\n"]))),$=(0,m.Z)(Q.Z)(M||(M=(0,l.Z)(["\n  margin-bottom: 50px;\n  @media (min-width: 768px) {\n    margin-bottom: 100px;\n  }\n"]))),nn=m.Z.div(C||(C=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  margin: 50px 0 40px;\n\n  @media (min-width: 768px) {\n    gap: 40px;\n    margin: 100px 0 50px;\n  }\n  @media (min-width: 1280px) {\n    gap: 50px;\n  }\n"]))),en=function(){var n=(0,r.v9)(o.dy).userId,e=(0,r.v9)((function(n){return n.recipes})),t=e.isLoading,p=e.error,c=e.ownRecipes,x=(0,a.useRef)(null),l=(0,r.I0)(),m=s(c,3);return(0,a.useLayoutEffect)((function(){l((0,d.Z)(n))}),[l,n]),(0,f.jsx)(U,{children:(0,f.jsxs)(h.t,{children:[(0,f.jsx)($,{title:"My recipes"}),t?(0,f.jsx)(v,{}):p?(0,f.jsx)("div",{children:p}):c.length?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(nn,{ref:x,children:m.currentData().map((function(n){return(0,f.jsx)(V,(0,i.Z)({},n),n._id)}))}),(0,f.jsx)(w,{count:m.count,page:m.page(),handleChange:function(n,e){var t;m.jump(e),null===(t=x.current)||void 0===t||t.scrollIntoView({behavior:"smooth"})}})]}):(0,f.jsx)(P,{children:"You don't have any saved recipes yet."})]})})}}}]);
//# sourceMappingURL=603.e6ca90f0.chunk.js.map