(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=100},218:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var o=n(8),r=n.n(o),a=n(41),i=n.n(a),s=(n(98),n(86)),u=n(87),c=n(91),l=n(88),g=n(92),f=n(89),p=n.n(f),m=n(90),h=n.n(m),j=n(44),d=n.n(j),v=(n(216),n(218),localStorage.getItem("ghToken"));function w(e){return fetch("https://api.github.com/graphql",{method:"post",headers:{"Content-Type":"application/json",Authorization:"bearer "+v},body:JSON.stringify(e)}).then(function(e){return e.json()})}d.a.formatResult=function(e){return p.a.format(JSON.stringify(e),{parser:"json",plugins:[h.a]})};var b=function(){return r.a.createElement("span",{className:"Toolbar-token"},r.a.createElement("form",{onSubmit:function(e){var t;e.preventDefault(),t=e.target.ghToken.value,v=t,localStorage.setItem("ghToken",t),console.log("New token set")}},r.a.createElement("label",null,r.a.createElement("a",{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},"GitHub token"),": ",r.a.createElement("input",{name:"ghToken",type:"password"}))))};d.a.Toolbar=function(e){return r.a.createElement("div",{className:"toolbar"},e.children,r.a.createElement(b,null))};var O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{fetcher:w})}}]),t}(o.Component);i.a.render(r.a.createElement(O,null),document.getElementById("root"))},79:function(e,t,n){var o={".":26,"./":26,"./GraphQLLanguageService":55,"./GraphQLLanguageService.js":55,"./GraphQLLanguageService.js.flow":178,"./autocompleteUtils":36,"./autocompleteUtils.js":36,"./autocompleteUtils.js.flow":179,"./getAutocompleteSuggestions":31,"./getAutocompleteSuggestions.js":31,"./getAutocompleteSuggestions.js.flow":180,"./getDefinition":37,"./getDefinition.js":37,"./getDefinition.js.flow":181,"./getDiagnostics":39,"./getDiagnostics.js":39,"./getDiagnostics.js.flow":182,"./getHoverInformation":40,"./getHoverInformation.js":40,"./getHoverInformation.js.flow":183,"./getOutline":54,"./getOutline.js":54,"./getOutline.js.flow":184,"./index":26,"./index.js":26,"./index.js.flow":185};function r(e){var t=a(e);return n(t)}function a(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id=79},93:function(e,t,n){e.exports=n(220)},98:function(e,t,n){}},[[93,2,1]]]);
//# sourceMappingURL=main.93ab71a7.chunk.js.map