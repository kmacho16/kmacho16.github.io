(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(7),i=c.n(n),d=(c(14),c.p,c(15),c(2)),r=c(3),b=c.p+"static/media/crop.0fbaa3bf.jpeg",o=(c(16),c(0)),j=function(){var e=Object(s.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(["Backend","Fronted","FullStack"]),i=Object(d.a)(n,2),j=i[0],l=(i[1],Object(s.useState)(0)),u=Object(d.a)(l,2),m=u[0],v=u[1],O=Object(s.useState)(!1),h=Object(d.a)(O,2),p=h[0],x=h[1],f=Object(s.useState)(0),A=Object(d.a)(f,2),Q=A[0],N=A[1],g=0,H=[1e3,1e3,5e3],P="",k=function e(){g<j[m].length?(P+=j[m].charAt(g),a(P),g++,N(g),setTimeout(e,80)):setTimeout((function(){x(!0)}),H[m])},z=function e(){g>0?(P=P.slice(0,-1),g--,a(P),setTimeout(e,100)):(m<j.length-1?v(m+1):v(0),x(!1))};return Object(s.useEffect)((function(){p?(g=Q,P=j[m],z()):(a(""),k())}),[p]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"avatar",src:b,alt:""})}),Object(o.jsxs)("h1",{children:["Hi, I'm Juan",Object(o.jsx)("span",{className:"red-text",children:"Kmacho"})," "]}),Object(o.jsxs)("h1",{children:[Object(o.jsx)("span",{className:"red-text",children:c})," | Developer"]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(r.d,{className:"icons",size:"1.5em"}),Object(o.jsx)(r.c,{className:"icons",size:"1.5em"}),Object(o.jsx)(r.b,{className:"icons",size:"1.5em"})]})]})},l=(c(18),function(){return Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h1",{className:"red-text-opaque uppercase",children:"About me"}),Object(o.jsxs)("div",{className:"text-body",children:[Object(o.jsx)("p",{children:"Telematics Engineer from the University Distrital Francisco Jose de Caldas de Caldas, Software developer with experience in solution problems quickly and effectively. With constant curiosity and craving for continuous learning, aware that work gives best results with envi\x02ronments friendly and communicative."}),Object(o.jsx)("p",{children:"I believe that being immersed in a technological field, the skills\x02learning abilities and self-determination are the key to a good professional development and growth"})]})]})}),u=c(5),m=c.n(u),v=c(8),O=(c(20),c(6)),h=function(){var e=Object(s.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)([]),i=Object(d.a)(n,2),r=i[0],b=i[1],j=O.a.client("https://kmacho-portofolio.cdn.prismic.io/api/v2"),l=function(e){var t=[];return e.forEach((function(e){var c=e.techname[0].text;t.push(c)})),t},u=function(){var e=Object(v.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,j.query(O.a.Predicates.at("document.type","projects"));case 3:return(c=e.sent)&&c.results.forEach((function(e){console.log("ee",e);var c={id:e.id,name:e.data.name[0].text,description:e.data.description[0].text,techs:l(e.data.techs),image:e.data.logo.url};t.push(c)})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){u().then((function(e){b(e)}))}),[]),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("h1",{className:"red-text-opaque uppercase",children:"Portofolio"}),Object(o.jsx)("div",{className:"cards",children:Object(o.jsxs)("div",{className:"viewer",children:[Object(o.jsx)("div",{className:"medals",children:r?r.map((function(e){return Object(o.jsx)("div",{className:"medal ".concat(c&&e.id==c.id?"active":""),onClick:function(){a(e)},children:Object(o.jsx)("h1",{children:e.name})})})):""}),Object(o.jsx)("div",{className:"preview",children:c?Object(o.jsxs)("div",{className:"content-prev",children:[Object(o.jsx)("div",{className:"project-image",style:{backgroundImage:"url(".concat(c.image?c.image:"data:image/png;base64,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",")")}}),Object(o.jsx)("p",{className:"project-description",children:c.description}),Object(o.jsx)("div",{className:"tags",children:c.techs.map((function(e){return Object(o.jsx)("div",{children:e})}))})]}):""})]})})]})};var p=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{class:"bg"}),Object(o.jsx)("div",{class:"bg bg2"}),Object(o.jsx)("div",{class:"bg bg3"}),Object(o.jsx)("div",{id:"header",className:"App-Content",children:Object(o.jsx)(j,{})}),Object(o.jsx)("div",{className:"scroll-btn",children:Object(o.jsxs)("a",{href:"#about",children:[Object(o.jsx)(r.a,{}),Object(o.jsx)("br",{}),Object(o.jsx)(r.e,{size:"2em"})]})}),Object(o.jsx)("div",{id:"about",className:"App-body",children:Object(o.jsx)(l,{})}),Object(o.jsx)("div",{className:"scroll-btn",children:Object(o.jsxs)("a",{href:"#portafolio",children:[Object(o.jsx)(r.a,{}),Object(o.jsx)("br",{}),Object(o.jsx)(r.e,{size:"2em"})]})}),Object(o.jsx)("div",{class:"bg-2"}),Object(o.jsx)("div",{class:"bg bg2"}),Object(o.jsx)("div",{class:"bg bg3"}),Object(o.jsx)("div",{id:"portafolio",className:"App-body-flow",children:Object(o.jsx)(h,{})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),x()}],[[21,1,2]]]);
//# sourceMappingURL=main.58d1e7e1.chunk.js.map