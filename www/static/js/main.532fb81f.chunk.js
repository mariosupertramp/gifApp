(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),a=n(7),i=n.n(a),s=n(2),u=n(9),o=function(t){var e=t.setCategorias,n=Object(c.useState)(""),a=Object(s.a)(n,2),i=a[0],o=a[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),o(""))},children:Object(r.jsx)("input",{type:"text",value:i,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var t=Object(p.a)(l.a.mark((function t(e){var n,r,c,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=vz990CvPmgsJZd3M1s7wRW4yv2Q2dJqJ&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.id,n=t.title,c=t.url;return console.log(e,n,c),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{src:c,alt:n}),Object(r.jsxs)("p",{children:[" ",n," "]})]})},O=function(t){var e=t.categoria,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){b(t).then((function(t){a({data:t,loading:!1})}))}),[t]),r}(e),a=n.data,i=n.loading;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:[" ",e," "]}),i&&Object(r.jsx)("p",{children:"loading"}),Object(r.jsx)("div",{className:"card-grid",children:a.map((function(t){return Object(r.jsx)(f,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(c.useState)(["juguetes"]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Gif Expert App"}),Object(r.jsx)(o,{setCategorias:a}),Object(r.jsx)("hr",{}),Object(r.jsx)("ol",{children:n.map((function(t){return Object(r.jsx)(O,{categoria:t},t)}))})]})};n(17);i.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.532fb81f.chunk.js.map