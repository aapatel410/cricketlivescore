(this.webpackJsonpcricketlivescore=this.webpackJsonpcricketlivescore||[]).push([[0],{47:function(e,t,a){e.exports=a(61)},52:function(e,t,a){},53:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/vs.ce42695b.jpg"},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),o=(a(52),a(23)),i=(a(53),a(80)),u=a(83),m=a(84),s=a(40),E=a(37),f=a.n(E),h=function(){return c.a.createElement(i.a,{position:"static",color:"secondary"},c.a.createElement(u.a,null,c.a.createElement(m.a,{color:"inherit"},c.a.createElement(f.a,null)),c.a.createElement(s.a,{variant:"h6"},"Live Cricket Score")))},p=a(85),d=a(86),g=a(87),v=a(89),y=a(94),j=a(90),b=a(91),k=a(92),S=a(93),O=a(88),w="viqYsABVMMQ6CAcFhuUqgZDpNil1";var C=function(e){var t=e.match,r=Object(n.useState)([]),l=Object(o.a)(r,2),i=l[0],u=l[1],m=Object(n.useState)(!1),E=Object(o.a)(m,2),f=E[0],h=E[1],C=function(e){(function(e){var t="https://cricapi.com/api/cricketScore?apikey=".concat(w,"&unique_id=").concat(e);return fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){console.log(e),u(e),T()})).catch((function(e){return console.log(e)}))},T=function(){h(!0)},q=function(){h(!1)};return c.a.createElement("div",null,c.a.createElement(p.a,{style:{marginTop:10}},c.a.createElement(d.a,null,c.a.createElement(g.a,{container:!0,justify:"center",alignItems:"center",spacing:4},c.a.createElement(g.a,{item:!0},c.a.createElement(s.a,{variant:"h5"},t["team-1"])),c.a.createElement(g.a,{item:!0},c.a.createElement("img",{style:{width:85},src:a(60),alt:""})),c.a.createElement(g.a,{item:!0},c.a.createElement(s.a,{variant:"h5"},t["team-2"])))),c.a.createElement(O.a,null,c.a.createElement(g.a,{container:!0,justify:"center"},c.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:function(){C(t.unique_id)}},"Show Details"),c.a.createElement(v.a,{variant:"outlined",color:"secondary",style:{marginLeft:10}},"Start Time ",new Date(t.dateTimeGMT).toLocaleString())))),c.a.createElement(y.a,{open:f,onClose:q},c.a.createElement(j.a,null,c.a.createElement(b.a,{id:"alert-dialog-title"},"Match Details"),c.a.createElement(k.a,{id:"alert-dialog-description"},c.a.createElement(s.a,null,i.stat),c.a.createElement(s.a,null,"Match: ",c.a.createElement("span",{style:{fontWeight:"bold"}},i.matchStarted?"Started":"Not started")),c.a.createElement(s.a,null,"Score: ",c.a.createElement("span",{style:{fontWeight:"bold"}},i.score)))),c.a.createElement(S.a,null,c.a.createElement(v.a,{onClick:q,color:"primary",autofocus:!0},"Close"))))};var T=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var e="https://cricapi.com/api/matches?apikey=".concat(w);return fetch(e).then((function(e){return e.json()})).catch((function(e){console.log("Error: ",e)}))})().then((function(e){r(e.matches),console.log(e.matches)})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement(s.a,{align:"center",variant:"h3",style:{marginTop:20}},"Welcome to Live cricket score app"),c.a.createElement(g.a,{container:!0,justify:"center"},c.a.createElement(g.a,null,a.map((function(e){return c.a.createElement(n.Fragment,null,"Twenty20"==e.type?c.a.createElement(C,{key:e.unique_id,match:e}):"")})))))};l.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.793884fb.chunk.js.map