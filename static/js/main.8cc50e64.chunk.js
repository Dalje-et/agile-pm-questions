(this["webpackJsonpagile-pm-questions"]=this["webpackJsonpagile-pm-questions"]||[]).push([[0],{38:function(e,t,a){e.exports=a(47)},43:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),s=(a(43),a(27)),c=a(28),i=a(18),u=a(33),m=a(32),p=a(4),h=a(81),d=a(88),g=a(85),E=a(86),f=a(87),x=a(31),y=a.n(x),w=a(29),b=a(22),v=a.n(b),k=[{question:"What is my name?",answers:[{text:"Daljeet",correct:!0},{text:"Abodi",correct:!1},{text:"Test",correct:!1},{text:"Uhlalala",correct:!1}]},{question:"How old am I?",answers:[{text:"100",correct:!0},{text:"93",correct:!1},{text:"12",correct:!1},{text:"123",correct:!1}]}],j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={displayedAnswer:n.filterQuestions("")},n.onFilterChange=n.onFilterChange.bind(Object(i.a)(n)),n}return Object(c.a)(a,[{key:"filterQuestions",value:function(e){var t=[];return k.forEach((function(a){(""===e||a.question.includes(e))&&t.push(r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(g.a,{style:{animation:w.animations.popIn}},r.a.createElement(E.a,null,r.a.createElement(f.a,{color:"textPrimary",gutterBottom:!0},a.question),r.a.createElement(f.a,{variant:"body2",component:"p"},"\u2022 ",r.a.createElement("span",{style:{color:y.a[500]}},a.answers[0].text),r.a.createElement("br",null),"\u2022 ",r.a.createElement("span",{style:{color:v.a[500]}},a.answers[1].text),r.a.createElement("br",null),"\u2022 ",r.a.createElement("span",{style:{color:v.a[500]}},a.answers[2].text),r.a.createElement("br",null),"\u2022 ",r.a.createElement("span",{style:{color:v.a[500]}},a.answers[3].text),r.a.createElement("br",null))))))})),t}},{key:"onFilterChange",value:function(e){this.setState({displayedAnswer:this.filterQuestions(e.currentTarget.value)})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{container:!0,spacing:3},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(d.a,{id:"filled-basic",label:"Keyword",variant:"outlined",onChange:this.onFilterChange,fullWidth:!0})),this.state.displayedAnswer))}}]),a}(r.a.Component),q=Object(p.a)((function(e){return{root:{maxWidth:"800px",margin:"0 auto",marginTop:"200px"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}))(j);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.8cc50e64.chunk.js.map