(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{14:function(e,t,a){e.exports=a(37)},19:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(13),o=a.n(l),r=a(2),s=(a(19),a(3)),u=a.n(s),i=function(){var e=Object(n.useState)({}),t=Object(r.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),s=Object(r.a)(o,2),i=s[0],m=s[1],d=Object(n.useState)(),h=Object(r.a)(d,2),b=h[0],E=h[1],v=Object(n.useState)(),p=Object(r.a)(v,2),j=p[0],O=p[1],y=Object(n.useState)(),f=Object(r.a)(y,2),g=f[0],S=f[1],C=Object(n.useState)(),D=Object(r.a)(C,2),N=D[0],k=D[1],x=Object(n.useState)(),I=Object(r.a)(x,2),T=I[0],w=I[1],A=Object(n.useState)(),R=Object(r.a)(A,2),B=R[0],F=R[1],J=Object(n.useState)(),L=Object(r.a)(J,2),U=L[0],G=L[1];u.a.get("https://coronavirus-19-api.herokuapp.com/all").then((function(e){l(e.data)})).catch((function(e){console.log(e)})),u.a.get("https://coronavirus-19-api.herokuapp.com/countries").then((function(e){m(e.data)})).catch((function(e){console.log(e)}));return c.a.createElement("div",{className:"main",align:"center"},c.a.createElement("div",{className:"global"},c.a.createElement("h2",null,"Global Coronavirus Information"),c.a.createElement("h3",null,"Cases: ",c.a.createElement("span",{className:"globalC"}," ",a.cases," ")," "),c.a.createElement("h3",null,"Deaths: ",c.a.createElement("span",{className:"globalD"}," ",a.deaths," ")),c.a.createElement("h3",null,"Recovered: ",c.a.createElement("span",{className:"globalR"}," ",a.recovered," ")," ")),c.a.createElement("div",{className:"countries"},c.a.createElement("select",{id:"demo",defaultValue:"DEFAULT",onChange:function(){var e=document.getElementById("demo"),t=e.options[e.selectedIndex].text,a=!0,n=!1,c=void 0;try{for(var l,o=i[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){var r=l.value;r.country===t&&(E(r.cases),O(r.todayCases),S(r.deaths),k(r.todayDeaths),w(r.recovered),F(r.active),G(r.critical))}}catch(s){n=!0,c=s}finally{try{a||null==o.return||o.return()}finally{if(n)throw c}}}},c.a.createElement("option",{value:"DEFAULT",disabled:!0},"Select a Country "),i.map((function(e){return c.a.createElement("option",{id:"op",key:e.country,value:e.country},e.country)}))),c.a.createElement("h3",null,"Cases: ",b),c.a.createElement("h3",null,"Today Cases: ",j),c.a.createElement("h3",null,"Deaths: ",g),c.a.createElement("h3",null,"Today Deaths: ",N),c.a.createElement("h3",null,"Recovered: ",T),c.a.createElement("h3",null,"Active: ",B),c.a.createElement("h3",null,"Critical: ",U)))};o.a.render(c.a.createElement(i,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d1405623.chunk.js.map