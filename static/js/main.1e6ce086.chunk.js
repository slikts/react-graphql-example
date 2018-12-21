(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports=a(246)},243:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(100),l=a.n(c),i=a(18),o=a(111),u=a(254),s=a(99),m=a(2),d=a(102),p=a(113),f=new u.a,E=Object(p.a)({cache:f,defaults:{active:!1},resolvers:{}}),h=new d.RestLink({typePatcher:{RatePayload:function(e){return null!=e.rates&&(e.rates=Object.entries(e.rates).map(function(e){var t=Object(o.a)(e,2);return{__typename:"Rate",code:t[0],rate:t[1]}})),e}},uri:"https://api.exchangeratesapi.io/"}),b=m.ApolloLink.from([E,h]),v=new s.a({cache:f,link:b}),y=a(36),w=a(37),k=a.n(w),O=a(57),g=a.n(O),j=a(107),C=window.fetch,x=function(e){return new Promise(function(t){return setTimeout(t,e)})},D=function(){var e=Object(j.a)(g.a.mark(function e(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(500);case 2:throw Error("Simulated network failure");case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),S=function(e){var t=e.target.checked;window.fetch=t?D:C},L=function(e){return e.toISOString().slice(0,10)},P=function(e){var t=e.text,a=e.onClick;return r.a.createElement("button",{onClick:a},t)},R=a(12),N=a(58),q=a(13),A=a(108),$=a(109),I=a(112),J=a(110),Q=a(114),T=function(e){function t(){var e,a;Object(A.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(I.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0},a.close=function(){a.setState({open:!1}),a.props.onDismiss()},a}return Object(Q.a)(t,e),Object($.a)(t,[{key:"render",value:function(){return r.a.createElement("dialog",{open:this.state.open},r.a.createElement("div",{className:"content"},this.props.children),r.a.createElement("footer",null,r.a.createElement(P,{onClick:this.close,text:this.props.dismissLabel})))}}]),t}(r.a.Component);T.defaultProps={dismissLabel:"Close"};var _=T,z=function(e){var t=e.message,a=e.onDismiss,n=e.dismissLabel;return r.a.createElement(_,{onDismiss:a,dismissLabel:n},r.a.createElement("p",{role:"heading",className:Object(q.b)({marginTop:0})},"Error"),r.a.createElement("p",null,t))},B=function(e){var t=e.interval,a=void 0===t?.35:t;return r.a.createElement("div",{role:"alert","aria-busy":"true","aria-label":"Loading",className:Object(q.b)({$nest:{"& span:before":{content:'"\u2022"'},"& span":{fontSize:"3rem",animationDuration:"".concat(a,"s"),animationName:Object(q.a)({from:{opacity:0},to:{opacity:1}}),animationIterationCount:"infinite",animationDirection:"alternate"},"& span:nth-of-type(2)":{animationDelay:"".concat(a/2,"s")},"& span:nth-of-type(3)":{animationDelay:"".concat(a,"s")}}})},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))},F=function(e){var t=e.payload.data,a=t.rates,n=t.base,c=t.date;return r.a.createElement("table",null,r.a.createElement("caption",{className:Object(q.b)({whiteSpace:"nowrap"})},r.a.createElement("span",null,n)," ",r.a.createElement("span",null,c)),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Code"),r.a.createElement("th",null,"Rate"))),r.a.createElement("tbody",null,a.map(function(e){var t=e.code,a=e.rate;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t),r.a.createElement("td",null,a))})))};function G(){var e=Object(y.a)(['\n  query Latest($date: String = "latest") {\n    data(date: $date) @rest(type: "RatePayload", path: "{args.date}") {\n      date\n      base\n      rates\n    }\n  }\n']);return G=function(){return e},e}var H=k()(G()),K=function(){return r.a.createElement(i.Query,{query:H,variables:{date:"latest"},fetchPolicy:"cache-and-network",notifyOnNetworkStatusChange:!0},function(e){var t=e.loading,a=e.error,n=e.data,c=e.refetch,l=e.networkStatus;return t||l===R.a.refetch?r.a.createElement(B,null):a?r.a.createElement(z,{onDismiss:c,dismissLabel:"Retry",message:a.message}):r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement(P,{text:"Previous",onClick:function(){return c({date:L(Object(N.addDays)(new Date(n.data.date),-1))})}}),r.a.createElement(P,{text:"Next",onClick:function(){return c({date:L(Object(N.addDays)(new Date(n.data.date),1))})}}),r.a.createElement(P,{text:"Refresh",onClick:function(){return c()}})),r.a.createElement(F,{payload:n}))})};function M(){var e=Object(y.a)(["\n  {\n    active @client\n  }\n"]);return M=function(){return e},e}var U=k()(M()),V=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Currency Exchange Rates"),r.a.createElement("main",null,r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",onChange:S,defaultChecked:!1}),"Simulate network failure")),r.a.createElement(i.Query,{query:U},function(e){var t=e.data,a=e.client;return t.active?r.a.createElement(K,null):r.a.createElement("p",null,r.a.createElement(P,{text:"Load",onClick:function(){return a.writeData({data:{active:!0}})}}))})))},W=function(){return r.a.createElement(i.ApolloProvider,{client:v},r.a.createElement(V,null))};a(243);l.a.render(r.a.createElement(W,null),document.querySelector("#root"))}},[[116,2,1]]]);
//# sourceMappingURL=main.1e6ce086.chunk.js.map