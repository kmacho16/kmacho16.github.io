(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(7),d=c.n(s),i=(c(14),c(5)),r=c.n(i),o=c(8),b=c(2),j=c.p+"static/media/logo.8874eec2.svg",l=(c(16),c(3)),u=c.p+"static/media/crop.0fbaa3bf.jpeg",m=(c(17),c(0)),O=function(e){var t=e.avatar,c=Object(a.useState)(""),n=Object(b.a)(c,2),s=n[0],d=n[1],i=Object(a.useState)(["Backend","Fronted","FullStack"]),r=Object(b.a)(i,2),o=r[0],j=(r[1],Object(a.useState)(0)),O=Object(b.a)(j,2),p=O[0],v=O[1],h=Object(a.useState)(!1),f=Object(b.a)(h,2),x=f[0],A=f[1],N=Object(a.useState)(0),g=Object(b.a)(N,2),Q=g[0],k=g[1],H=0,S=[1e3,1e3,5e3],P="",z=function e(){H<o[p].length?(P+=o[p].charAt(H),d(P),H++,k(H),setTimeout(e,80)):setTimeout((function(){A(!0)}),S[p])},X=function(e){window.open(e,"_blank")},q=function e(){H>0?(P=P.slice(0,-1),H--,d(P),setTimeout(e,100)):(p<o.length-1?v(p+1):v(0),A(!1))};return Object(a.useEffect)((function(){x?(H=Q,P=o[p],q()):(d(""),z())}),[x]),Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{className:"avatar",src:t||u,alt:""}),Object(m.jsxs)("h1",{children:["Hi, I'm Juan",Object(m.jsx)("span",{className:"red-text",children:"Kmacho"})," "]}),Object(m.jsxs)("h1",{children:[Object(m.jsx)("span",{className:"red-text",children:s})," | Developer"]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(l.d,{onClick:function(){X("https://www.linkedin.com/in/juan-kmacho/")},className:"icons",size:"1.5em"}),Object(m.jsx)(l.c,{onClick:function(){X("https://github.com/kmacho16")},className:"icons",size:"1.5em"}),Object(m.jsx)(l.b,{onClick:function(){X("mailto:jccamfer@gmail.com")},className:"icons",size:"1.5em"})]})]})},p=c.p+"static/media/HV-EN.0ae91780.pdf",v=c.p+"static/media/HV-ES.94fb9323.pdf",h=(c(19),function(e){var t=e.paragraph,c=Object(a.useState)("EN"),n=Object(b.a)(c,2),s=n[0],d=n[1],i=Object(a.useState)("Get my CV"),r=Object(b.a)(i,2),o=r[0],j=r[1];return Object(m.jsxs)("div",{className:"about",children:[Object(m.jsx)("h1",{className:"red-text-opaque uppercase",children:"About me"}),Object(m.jsx)("div",{className:"text-body",children:t?t.map((function(e,t){return Object(m.jsx)("p",{children:e},"".concat(t).concat(e[0]))})):""}),Object(m.jsxs)("button",{className:"get-cv-btn",onClick:function(){var e=document.createElement("a");e.href="ES"===s?v:p,e.download="JuanCamacho-".concat(s,".pdf"),e.dispatchEvent(new MouseEvent("click"))},children:[o," ",Object(m.jsx)("span",{children:"\ud83d\ude04"})]}),Object(m.jsxs)("div",{className:"content-switch",children:[Object(m.jsx)("span",{className:"ES"===s?"lan-active":"lan",children:"ES"}),Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{defaultChecked:!0,type:"checkbox",onChange:function(e){e.target.checked?(d("EN"),j("GET MY CV")):(d("ES"),j("Aqu\xed est\xe1 mi HV"))}}),Object(m.jsx)("span",{className:"slider round"})]}),Object(m.jsx)("span",{className:"EN"===s?"lan-active":"lan",children:"EN"})]})]})}),f=(c(20),function(e){var t=e.portofolio,c=void 0===t?[]:t,n=Object(a.useState)(),s=Object(b.a)(n,2),d=s[0],i=s[1],r=Object(a.useState)([]),o=Object(b.a)(r,2),j=o[0],l=o[1],u=Object(a.useRef)(null);return Object(a.useEffect)((function(){c.forEach((function(e){var t,c=new Date(e["date-start"]),a=new Date(e["date-end"]),n={id:e.name,name:e.name[0].text,description:e.description[0].text,techs:(t=e.techs,t[0].text.split(",")),image:e.logo.url,dateStart:"".concat(c.getUTCMonth()+1,"/").concat(c.getUTCFullYear()),dateEnd:"".concat(a.getUTCMonth()+1,"/").concat(a.getUTCFullYear())};l((function(e){return e.concat(n)}))}))}),[c]),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("h1",{className:"red-text-opaque uppercase",children:"Portofolio"}),Object(m.jsx)("div",{className:"cards",children:Object(m.jsxs)("div",{className:"viewer",children:[Object(m.jsxs)("div",{className:"preview",ref:u,children:[" ",d?Object(m.jsxs)("div",{className:"content-prev",children:[Object(m.jsx)("div",{className:"project-image",style:{backgroundImage:"url(".concat(d.image?d.image:"data:image/png;base64,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",")")}}),Object(m.jsxs)("p",{children:[d.dateStart," - ",d.dateEnd]}),Object(m.jsx)("p",{className:"project-description",children:d.description}),Object(m.jsx)("div",{className:"tags",children:d.techs.map((function(e){return Object(m.jsx)("div",{children:e})}))})]}):""]}),Object(m.jsx)("div",{className:"medals",children:j?j.map((function(e){return Object(m.jsx)("div",{className:"medal ".concat(d&&e.id===d.id?"active":""),onClick:function(){i(e),u&&u.current&&u.current.scrollIntoView()},children:Object(m.jsx)("h1",{children:e.name})},e.name)})):""})]})})]})}),x=c(6),A=function(){var e=Object(a.useState)(),t=Object(b.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),d=Object(b.a)(s,2),i=d[0],u=d[1],p=Object(a.useState)(),v=Object(b.a)(p,2),A=v[0],N=v[1],g=x.a.client("https://kmacho-portofolio.cdn.prismic.io/api/v2"),Q=function(){var e=Object(o.a)(r.a.mark((function e(){var t,c,a,n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],c=[],a=j,e.next=5,g.query(x.a.Predicates.at("document.tags",["cv"]));case 5:return(n=e.sent)&&(s=n.results[0],t=s.data.about_me.map((function(e){return e.text})),a=s.data.avatar.url,c=s.data.portafolio),e.abrupt("return",{about:t,avatar:a,portofolio:c});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){Q().then((function(e){n(e.about),u(e.avatar),N(e.portofolio),console.log("adada",e.about)}))}),[]),Object(a.useEffect)((function(){console.log("adada",c)}),[c]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"bg"}),Object(m.jsx)("div",{className:"bg bg2"}),Object(m.jsx)("div",{className:"bg bg3"}),Object(m.jsx)("div",{id:"header",className:"App-Content",children:Object(m.jsx)(O,{avatar:i})}),Object(m.jsx)("div",{className:"scroll-btn",children:Object(m.jsxs)("a",{href:"#about",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("br",{}),Object(m.jsx)(l.e,{size:"2em"})]})}),Object(m.jsx)("div",{id:"about",className:"App-body",children:Object(m.jsx)(h,{paragraph:c})}),Object(m.jsx)("div",{className:"scroll-btn",children:Object(m.jsxs)("a",{href:"#portafolio",children:[Object(m.jsx)(l.a,{}),Object(m.jsx)("br",{}),Object(m.jsx)(l.e,{size:"2em"})]})}),Object(m.jsx)("div",{className:"bg-2"}),Object(m.jsx)("div",{className:"bg bg2"}),Object(m.jsx)("div",{className:"bg bg3"}),Object(m.jsx)("div",{id:"portafolio",className:"App-body-flow",children:Object(m.jsx)(f,{portofolio:A})})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,d=t.getTTFB;c(e),a(e),n(e),s(e),d(e)}))};d.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root")),N()}],[[21,1,2]]]);
//# sourceMappingURL=main.dd31eda7.chunk.js.map