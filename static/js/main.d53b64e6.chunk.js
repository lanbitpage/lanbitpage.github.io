(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{205:function(e,t,n){},207:function(e,t,n){},209:function(e,t,n){},211:function(e,t,n){},213:function(e,t,n){},215:function(e,t,n){},217:function(e,t,n){},219:function(e,t,n){},221:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"login",function(){return ee});var a={};n.r(a),n.d(a,"view",function(){return ae}),n.d(a,"actions",function(){return r}),n.d(a,"reducer",function(){return ce});var i={};n.r(i),n.d(i,"changeToLogin",function(){return le});var c={};n.r(c),n.d(c,"view",function(){return se}),n.d(c,"actions",function(){return i}),n.d(c,"reducer",function(){return de});var o={};n.r(o),n.d(o,"register",function(){return me});var u={};n.r(u),n.d(u,"view",function(){return he}),n.d(u,"actions",function(){return o}),n.d(u,"reducer",function(){return ge});var s={};n.r(s),n.d(s,"loginSuccess",function(){return ve}),n.d(s,"login",function(){return Ee});var l={};n.r(l),n.d(l,"view",function(){return ye}),n.d(l,"actions",function(){return s}),n.d(l,"reducer",function(){return Oe});var d={};n.r(d),n.d(d,"loginSuccess",function(){return Se}),n.d(d,"sysMenu",function(){return Ne}),n.d(d,"sysNote",function(){return je});var p={};n.r(p),n.d(p,"view",function(){return Ce}),n.d(p,"actions",function(){return d}),n.d(p,"reducer",function(){return we});var m={};n.r(m),n.d(m,"loginSuccess",function(){return Me}),n.d(m,"getAllUsers",function(){return Ae});var f={};n.r(f),n.d(f,"view",function(){return Te}),n.d(f,"actions",function(){return m}),n.d(f,"reducer",function(){return Ie});var h=n(0),g=n.n(h),v=n(87),E=n.n(v),b=n(8),y=n(22),O=n(90),S=n(3),N=n(4),j=n(6),k=n(5),C=n(7),w=n(225),M=n(224),A=n(11),D=n.n(A),T=n(91),I=n.n(T),L=function(e){return JSON.parse(JSON.stringify(e))},P=function(){return{id:I.a.generate(),name:"\u65b0\u5efa\u83dc\u5355",pub:!1,open:!0,edit:!0,child:[]}},U=function e(t,n){for(var r in n){if(n[r].id===t)return void(n[r].edit=!0);n[r].child&&n[r].child.length>0&&e(t,n[r].child)}},R=function e(t,n,r){for(var a in r){if(r[a].id===t)return r[a].name=n,void(r[a].edit=!1);r[a].child&&r[a].child.length>0&&e(t,n,r[a].child)}},x=function(e,t){return F(e,0,t)},_=function(e,t){return F(e,1,t)},F=function e(t,n,r){for(var a in r){if(r[a].id===t)return void r.splice(Number(a)+Number(n),0,P());r[a].child&&r[a].child.length>0&&e(t,n,r[a].child)}},G=function e(t,n){for(var r in n){if(n[r].id===t){var a=n[r].child||[];return a.push(P()),void(n[r].child=a)}n[r].child&&n[r].child.length>0&&e(t,n[r].child)}},J=function e(t,n,r){for(var a in r){if(r[a].id===t)return void(r[a].pub=n);r[a].child&&r[a].child.length>0&&e(t,n,r[a].child)}},H=function e(t,n){for(var r in n){if(n[r].id===t)return void(n[r].child&&n[r].child.length>0?alert("\u8bf7\u5148\u5220\u9664\u5b50\u83dc\u5355!"):n.splice(r,1));n[r].child&&n[r].child.length>0&&e(t,n[r].child)}},B=function(e,t){return Y(e,-1,t)},q=function(e,t){return Y(e,1,t)},Y=function e(t,n,r){for(var a in r){if(r[a].id===t){var i=r.splice(a,1);return void r.splice(Number(a)+Number(n),0,i[0])}r[a].child&&r[a].child.length>0&&e(t,n,r[a].child)}},K=function e(t,n){for(var r in n){if(n[r].id===t)return void(n[r].child&&n[r].child.length>0&&(n[r].open=!n[r].open));n[r].child&&n[r].child.length>0&&e(t,n[r].child)}},z=function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).state={value:""},n.handelChange=function(e){n.setState({value:e.target.value})},n.submit=function(){var e=n.props.submit;e&&e(n.state.value)},n}return Object(C.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.value;this.setState({value:e})}},{key:"render",value:function(){return g.a.createElement("div",{className:"menu-editor"},g.a.createElement("input",{type:"text",onBlur:this.submit,onChange:this.handelChange,value:this.state.value}))}}]),t}(h.Component),W=function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).state={menu:[],actionMenu:"",curr:246,menuDirty:!1},n.showMenu=function(e){n.props.updateMenuState({actionMenu:e})},n.hideMenu=function(){n.props.updateMenuState({actionMenu:""})},n.toggle=function(e){var t=n.props.history,r=L(n.props.menu);K(e.id,r),D.a.setItem("menu",{menu:n.props.menu,curr:e.id,actionMenu:n.props.actionMenu,menuDirty:!0}).then(function(){n.props.updateMenuState({curr:e.id}),t.push("/note/"+e.id)})},n.saveLocal=function(e){D.a.setItem("menu",{menu:e,curr:n.props.curr,actionMenu:n.props.actionMenu,menuDirty:!0}).then(function(){n.props.updateMenuState({menu:e,curr:n.props.curr,actionMenu:n.props.actionMenu})})},n.addFirstMenu=function(){var e=[P()];n.saveLocal(e)},n.reName=function(e){var t=L(n.props.menu);U(e,t),n.saveLocal(t)},n.confirmName=function(e,t){var r=L(n.props.menu);R(e,t,r),n.saveLocal(r)},n.addSiblingBefore=function(e){var t=L(n.props.menu);x(e,t),n.saveLocal(t)},n.addSiblingAfter=function(e){var t=L(n.props.menu);_(e,t),n.saveLocal(t)},n.addChild=function(e){var t=L(n.props.menu);G(e,t),n.saveLocal(t)},n.changePub=function(e,t){var r=L(n.props.menu);J(e,t,r),n.saveLocal(r)},n.delMenu=function(e){var t=L(n.props.menu);H(e,t),D.a.setItem("menu",{menu:t,curr:"",actionMenu:""}).then(function(){D.a.removeItem(e).then(function(){n.setState({menu:t,curr:"",actionMenu:""},function(){n.props.updateMenuState(!0)})})})},n.moveUp=function(e){var t=L(n.props.menu);B(e,t),n.saveLocal(t)},n.moveDown=function(e){var t=L(n.props.menu);q(e,t),n.saveLocal(t)},n.getDD=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],r=function(r){e[r].child&&e[r].child.length>0?t.push(g.a.createElement("dd",{className:"has-child",key:e[r].id},g.a.createElement("i",{style:{float:"left",lineHeight:"37px",marginRight:"2px"},className:"fa fa-folder-open"}),g.a.createElement("dl",null,g.a.createElement("dt",{className:n.props.curr===e[r].id?"active":"",onClick:function(){return n.toggle(e[r])}},e[r].edit?g.a.createElement(z,{value:e[r].name,submit:function(t){n.confirmName(e[r].id,t)}}):e[r].name,g.a.createElement("i",{className:e[r].pub?"fa fa-unlock":"fa fa-lock",onMouseOver:function(){return n.showMenu(e[r].id)},onMouseOut:function(){return n.hideMenu()}},g.a.createElement("ul",{className:n.props.actionMenu===e[r].id?"show":"hide"},g.a.createElement("li",{onClick:function(){return n.reName(e[r].id)}},"\u91cd\u547d\u540d"),e[r].pub?g.a.createElement("li",{onClick:function(){return n.changePub(e[r].id,!1)}},"\u79c1\u6709"):g.a.createElement("li",{onClick:function(){return n.changePub(e[r].id,!0)}},"\u516c\u5f00"),g.a.createElement("hr",null),g.a.createElement("li",{onClick:function(){return n.delMenu(e[r].id)}},"\u5220\u9664"),r>0?g.a.createElement("li",{onClick:function(){return n.moveUp(e[r].id)}},"\u4e0a\u79fb"):"",r<e.length-1?g.a.createElement("li",{onClick:function(){return n.moveDown(e[r].id)}},"\u4e0b\u79fb"):"",g.a.createElement("hr",null),g.a.createElement("li",{onClick:function(){return n.addChild(e[r].id)}},"\u6dfb\u52a0\u5b50\u83dc\u5355"),g.a.createElement("li",{onClick:function(){return n.addSiblingBefore(e[r].id)}},"\u4e0a\u65b9\u6dfb\u52a0\u540c\u7ea7\u83dc\u5355"),g.a.createElement("li",{onClick:function(){return n.addSiblingAfter(e[r].id)}},"\u4e0b\u65b9\u6dfb\u52a0\u540c\u7ea7\u83dc\u5355")))),e[r].open?n.getDD(e[r].child):""))):t.push(g.a.createElement("dd",{key:e[r].id,className:n.props.curr===e[r].id?"active":"",onClick:function(){return n.toggle(e[r])}},e[r].edit?g.a.createElement(z,{value:e[r].name,submit:function(t){n.confirmName(e[r].id,t)}}):e[r].name,g.a.createElement("i",{className:e[r].pub?"fa fa-unlock":"fa fa-lock",onMouseOver:function(){return n.showMenu(e[r].id)},onMouseOut:function(){return n.hideMenu()}},g.a.createElement("ul",{className:n.props.actionMenu===e[r].id?"show":"hide"},g.a.createElement("li",{onClick:function(){return n.reName(e[r].id)}},"\u91cd\u547d\u540d"),e[r].pub?g.a.createElement("li",{onClick:function(){return n.changePub(e[r].id,!1)}},"\u79c1\u6709"):g.a.createElement("li",{onClick:function(){return n.changePub(e[r].id,!0)}},"\u516c\u5f00"),g.a.createElement("hr",null),g.a.createElement("li",{onClick:function(){return n.delMenu(e[r].id)}},"\u5220\u9664"),r>0?g.a.createElement("li",{onClick:function(){return n.moveUp(e[r].id)}},"\u4e0a\u79fb"):"",r<e.length-1?g.a.createElement("li",{onClick:function(){return n.moveDown(e[r].id)}},"\u4e0b\u79fb"):"",g.a.createElement("hr",null),g.a.createElement("li",{onClick:function(){return n.addChild(e[r].id)}},"\u6dfb\u52a0\u5b50\u83dc\u5355"),g.a.createElement("li",{onClick:function(){return n.addSiblingBefore(e[r].id)}},"\u4e0a\u65b9\u6dfb\u52a0\u540c\u7ea7\u83dc\u5355"),g.a.createElement("li",{onClick:function(){return n.addSiblingAfter(e[r].id)}},"\u4e0b\u65b9\u6dfb\u52a0\u540c\u7ea7\u83dc\u5355")))))},a=0;a<e.length;a++)r(a);return t},n.getDL=function(e){for(var t=[],r=function(r){t.push(g.a.createElement("dl",{key:e[r].id},e[r].child&&e[r].child.length>0?g.a.createElement("i",{style:{float:"left",lineHeight:"37px",marginRight:"2px"},className:"fa fa-folder-open"}):"",g.a.createElement("dt",{className:n.props.curr===e[r].id?"active":"",onClick:function(){return n.toggle(e[r])}},e[r].edit?g.a.createElement(z,{value:e[r].name,submit:function(t){n.confirmName(e[r].id,t)}}):e[r].name,g.a.createElement("i",{className:e[r].pub?"fa fa-unlock":"fa fa-lock",onMouseOver:function(){return n.showMenu(e[r].id)},onMouseOut:function(){return n.hideMenu()}},g.a.createElement("ul",{className:n.props.actionMenu===e[r].id?"show":"hide"},g.a.createElement("li",{onClick:function(){return n.reName(e[r].id)}},"\u91cd\u547d\u540d"),e[r].pub?g.a.createElement("li",{onClick:function(){return n.changePub(e[r].id,!1)}},"\u79c1\u6709"):g.a.createElement("li",{onClick:function(){return n.changePub(e[r].id,!0)}},"\u516c\u5f00"),g.a.createElement("hr",null),g.a.createElement("li",{onClick:function(){return n.delMenu(e[r].id)}},"\u5220\u9664"),r>0?g.a.createElement("li",{onClick:function(){return n.moveUp(e[r].id)}},"\u4e0a\u79fb"):"",r<e.length-1?g.a.createElement("li",{onClick:function(){return n.moveDown(e[r].id)}},"\u4e0b\u79fb"):"",g.a.createElement("hr",null),g.a.createElement("li",{onClick:function(){return n.addChild(e[r].id)}},"\u6dfb\u52a0\u5b50\u83dc\u5355"),g.a.createElement("li",{onClick:function(){return n.addSiblingBefore(e[r].id)}},"\u4e0a\u65b9\u6dfb\u52a0\u540c\u7ea7\u83dc\u5355"),g.a.createElement("li",{onClick:function(){return n.addSiblingAfter(e[r].id)}},"\u4e0b\u65b9\u6dfb\u52a0\u540c\u7ea7\u83dc\u5355")))),e[r].open?n.getDD(e[r].child):""))},a=0;a<e.length;a++)r(a);return t},n}return Object(C.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this;D.a.getItem("menu").then(function(t){var n=t||{};e.props.updateMenuState({menu:n.menu||[],curr:n.curr,actionMenu:n.actionMenu})})}},{key:"render",value:function(){return g.a.createElement("div",{className:"menu"},this.props.menu&&this.props.menu.length>0?this.getDD(this.props.menu):g.a.createElement("div",{className:"btn",onClick:this.addFirstMenu},"\u70b9\u51fb\u6dfb\u52a0\u60a8\u7684\u7b2c\u4e00\u4e2a\u83dc\u5355"))}}]),t}(h.Component),X=Object(b.b)(function(e){return{menu:e.notes.menu,actionMenu:e.notes.actionMenu,curr:e.notes.curr,menuDirty:e.notes.menuDirty}},function(e){return{updateMenuState:function(t){e({type:"NOTES/UPDATE_MENU_STATE",values:t})}}})(W),$=n(92),Q=n.n($),V=n(93),Z=n.n(V),ee=function(e){return function(t,n){return fetch("/api/authenticate",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",body:JSON.stringify(e)}).then(function(e){if(200!==e.status)throw new Error("Fail to get response with status "+e.status);e.json().then(function(e){}).catch(function(e){})}).catch(function(e){})}},te=function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).state={text:"",html:"",md5:"",dirty:!1},n.openEdit=function(){var e=n.props.match.params.id,t=new Q.a;t.on("fileChange",function(e){n.setState({text:e.content.text,html:e.content.html})}),t.on("close",function(){var t=Z()(n.state.text),r=n.state;r||t===n.state.md5||(r=!0),D.a.setItem(e,{version:t,type:"NOTE",text:n.state.text,html:n.state.html,dirty:r})}),t.openFile({content:{text:n.state.text}})},n}return Object(C.a)(t,e),Object(N.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this,n=e.match.params.id;D.a.getItem(n).then(function(e){e=e||{},t.setState({text:e.text,html:e.html,md5:e.md5,dirty:e.dirty})})}},{key:"render",value:function(){var e=this;return g.a.createElement("div",{className:"md"},g.a.createElement("span",{className:"edit-note",onClick:function(){return e.openEdit()}},"\u7f16\u8f91\u8be5\u6587\u6863"),g.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.html}}))}}]),t}(h.Component),ne=Object(b.b)(function(e){return{}},function(e){return{login:function(t){e(ee(t))}}})(te),re=function(e){function t(){return Object(S.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this.props.match;return g.a.createElement("div",{className:"notes"},g.a.createElement(X,this.props),g.a.createElement("section",{className:"main"},g.a.createElement(w.a,null,g.a.createElement(M.a,{path:e.path+"note/:id",render:function(e){return g.a.createElement(ne,e)}}))),g.a.createElement("div",{className:"popup"},"xxxxxx"))}}]),t}(h.Component),ae=Object(b.b)(function(e){return{}},function(e){return{login:function(t){e(ee(t))}}})(re),ie=n(12),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{menu:[],actionMenu:"",curr:246,menuDirty:!1,changedNotes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NOTES/UPDATE_MENU_STATE":return Object(ie.a)({},e,t.values);default:return e}},oe=n(222),ue=function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).getMenus=function(){var e=[],t=localStorage.getItem("token"),r=localStorage.getItem("user");return n.props.logined||t&&r?e.push(g.a.createElement("li",{key:1},g.a.createElement(oe.a,{to:"/user"},r))):(e.push(g.a.createElement("li",{key:1},g.a.createElement(oe.a,{to:"/login"},"\u767b\u5f55"))),e.push(g.a.createElement("li",{key:2},g.a.createElement(oe.a,{to:"/register"},"\u6ce8\u518c")))),e},n}return Object(C.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return g.a.createElement("div",{className:"header"},g.a.createElement("span",{className:"title"},g.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"}),"LanBit"),g.a.createElement("ul",{className:"nav"},g.a.createElement("li",null,g.a.createElement(oe.a,{to:"/"},"\u7b14\u8bb0")),g.a.createElement("li",null,g.a.createElement(oe.a,{to:"/sysdata"},"\u6570\u636e\u540c\u6b65"))),g.a.createElement("ul",{className:"topmenu"},this.getMenus()))}}]),t}(h.Component),se=Object(b.b)(function(e){return{logined:e.header.logined}},function(e){return{}})(ue),le=function(){return function(e,t){e({type:"HEADER/CHANGE_TO_LOGIN"})}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{logined:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"HEADER/CHANGE_TO_LOGIN":return Object(ie.a)({},e,{logined:!0});default:return e}},pe=n(43),me=function(e){return function(t,n){return fetch("http://localhost:8080/api/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",body:JSON.stringify(e)}).then(function(e){if(200!==e.status&&201!==e.status)throw new Error("Fail to get response with status "+e.status);t({type:"REGISTER/SUCCESS"})}).catch(function(e){t({type:"REGISTER/UPDATE_ERRS",errs:["\u767b\u5f55\u540d\u6216\u90ae\u7bb1\u5df2\u88ab\u4f7f\u7528"]})})}},fe=function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).submit=function(){n.props.form.validateFields(function(e,t){var r=[];if(!e){if(t.login.length<6&&r.push("\u767b\u5f55\u540d\u957f\u5ea6\u81f3\u5c11\u516d\u4f4d"),t.email.indexOf("@")<2&&r.push("\u90ae\u7bb1\u4e0d\u5408\u6cd5"),t.password.length<6&&r.push("\u5bc6\u7801\u957f\u5ea6\u81f3\u5c11\u516d\u4f4d"),t.password.length!==t.password2.length&&r.push("\u4e24\u6b21\u8f93\u5165\u7684\u5bc6\u7801\u4e0d\u4e00\u81f4"),r.length>0)return void n.props.updateState(r);t.langKey="zh_cn",n.props.register(t)}})},n}return Object(C.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.form,t=e.getFieldProps,n=e.getFieldError,r=this.props.history,a=localStorage.getItem("token"),i=localStorage.getItem("user");return a&&i&&r.push("/"),g.a.createElement("div",{className:"register"},this.props.successed?"\u6ce8\u518c\u6210\u529f,\u8bf7\u6253\u5f00\u90ae\u7bb1\u8fdb\u884c\u9a8c\u8bc1.":g.a.createElement("div",null,g.a.createElement("ul",{className:"top-err"},this.props.errs.map(function(e){return g.a.createElement("li",null,e)})),"\u767b\u5f55\u540d",g.a.createElement("span",{className:"err"},n("login")?"\u5fc5\u987b\u5f55\u5165\u767b\u5f55\u540d":""),g.a.createElement("input",t("login",{onChange:function(){},rules:[{required:!0}]})),"\u90ae\u7bb1",g.a.createElement("span",{className:"err"},n("email")?"\u5fc5\u987b\u5f55\u5165\u90ae\u7bb1":""),g.a.createElement("input",t("email",{onChange:function(){},rules:[{required:!0}]})),"\u5bc6\u7801",g.a.createElement("span",{className:"err"},n("password")?"\u5fc5\u987b\u5f55\u5165\u5bc6\u7801":""),g.a.createElement("input",Object.assign({type:"password"},t("password",{onChange:function(){},rules:[{required:!0},{minLen:5}]}))),"\u91cd\u65b0\u8f93\u5165\u5bc6\u7801",g.a.createElement("span",{className:"err"},n("password2")?"\u5fc5\u987b\u5f55\u5165\u5bc6\u7801":""),g.a.createElement("input",Object.assign({type:"password"},t("password2",{onChange:function(){},rules:[{required:!0}]}))),g.a.createElement("button",{className:"btn btn-success",onClick:this.submit},"\u786e\u5b9a")))}}]),t}(h.Component),he=Object(pe.a)()(Object(b.b)(function(e){return{errs:e.register.errs,successed:e.register.successed}},function(e){return{register:function(t){e(me(t))},updateState:function(t){e({type:"REGISTER/UPDATE_ERRS",errs:t})}}})(fe)),ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errs:[],successed:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER/UPDATE_ERRS":return Object(ie.a)({},e,{errs:t.errs});case"REGISTER/SUCCESS":return Object(ie.a)({},e,{errs:[],successed:!0});default:return e}},ve=function(){return{type:"LOGIN/SUCCESS"}},Ee=function(e){return function(t,n){return fetch("http://localhost:8080/api/authenticate",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors",body:JSON.stringify(e)}).then(function(n){if(200!==n.status)throw new Error("Fail to get response with status "+n.status);n.json().then(function(n){localStorage.setItem("token",n.id_token),localStorage.setItem("user",e.username),t({type:"LOGIN/SUCCESS"}),t(i.changeToLogin())}).catch(function(e){t({type:"LOGIN/FAILED"})})}).catch(function(e){t({type:"LOGIN/FAILED"})})}},be=function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).submit=function(){n.props.form.validateFields(function(e,t){e||(t.rememberMe=!0,n.props.login(t))})},n}return Object(C.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){var t=e.successed,n=e.history;t&&n.push("/")}},{key:"render",value:function(){var e=this.props.history,t=this.props.form,n=t.getFieldProps,r=t.getFieldError,a=localStorage.getItem("token"),i=localStorage.getItem("user");return a&&i&&e.push("/"),g.a.createElement("div",{className:"login"},g.a.createElement("ul",{className:"top-err"},this.props.errs.map(function(e){return g.a.createElement("li",null,e)})),"\u767b\u5f55\u540d",g.a.createElement("span",{className:"err"},r("username")?"\u5fc5\u987b\u5f55\u5165\u767b\u5f55\u540d":""),g.a.createElement("input",n("username",{onChange:function(){},rules:[{required:!0}]})),"\u5bc6\u7801",g.a.createElement("span",{className:"err"},r("password")?"\u5fc5\u987b\u5f55\u5165\u5bc6\u7801":""),g.a.createElement("input",Object.assign({type:"password"},n("password",{onChange:function(){},rules:[{required:!0},{minLen:5}]}))),g.a.createElement("button",{className:"btn btn-success",onClick:this.submit},"\u767b\u5f55"))}}]),t}(h.Component),ye=Object(pe.a)()(Object(b.b)(function(e){return{errs:e.login.errs,successed:e.login.successed}},function(e){return{login:function(t){e(Ee(t))}}})(be)),Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errs:[],successed:!1};switch((arguments.length>1?arguments[1]:void 0).type){case"LOGIN/SUCCESS":return Object(ie.a)({},e,{successed:!0,errs:[]});case"LOGIN/FAILED":return Object(ie.a)({},e,{successed:!1,errs:["\u767b\u5f55\u540d\u6216\u5bc6\u7801\u9519\u8bef"]});default:return e}},Se=function(){return{type:"SYNDATA/SUCCESS"}},Ne=function(e){return e&&e.menuDirty?function(t,n){return fetch("http://localhost:8080/api/note-menus",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},mode:"cors",body:JSON.stringify({content:JSON.stringify(e.menu)})}).then(function(n){if(200!==n.status&&201!==n.status)throw new Error("Fail to get response with status "+n.status);e.menuDirty=!1,D.a.setItem("menu",e).then(function(){return t({type:"SYNDATA/UPDATE_MENU",status:2})})}).catch(function(e){})}:{type:"SYNDATA/UPDATE_MENU",status:2}},je=function(e,t){return t&&t.dirty&&"NOTE"!==t.type?function(n,r){return fetch("http://localhost:8080/api/notes",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("token")},mode:"cors",body:JSON.stringify({uuid:t.uuid,md5:t.md5,md:t.md,permiss:t.permiss})}).then(function(r){if(200!==r.status&&201!==r.status)throw new Error("Fail to get response with status "+r.status);t.dirty=!1,D.a.setItem(e,t).then(function(){return n({type:"SYNDATA/UPDATE_NOTE",value:e})})}).catch(function(e){console.log(e)})}:{type:""}},ke=function(e){function t(){var e,n;Object(S.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(j.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(a)))).sys=function(){D.a.getItem("menu").then(function(e){return n.props.sysMenu(e)}),D.a.keys().then(function(e){for(var t=function(t){D.a.getItem(e[t]).then(function(r){return n.props.sysNote(e[t],r)})},r=0;r<e.length;r++)t(r)}).catch(function(e){console.log(e)})},n}return Object(C.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return g.a.createElement("div",{className:"syndata"},g.a.createElement("ul",null,2===this.props.menu?g.a.createElement("li",null,"\u83dc\u5355\u540c\u6b65\u5b8c\u6bd5"):"",this.props.notes.map(function(e){return g.a.createElement("li",null,"item")})),g.a.createElement("button",{className:"btn btn-success",onClick:this.sys},"\u540c\u6b65"))}}]),t}(h.Component),Ce=Object(b.b)(function(e){return{menu:e.sysData.menu,notes:e.sysData.notes}},function(e){return{sysMenu:function(t){e(Ne(t))},sysNote:function(t,n){e(je(t,n))}}})(ke),we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{menu:0,notes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SYNDATA/UPDATE_MENU":return Object(ie.a)({},e,{menu:t.status});case"SYNDATA/UPDATE_NOTE":var n=e.notes,r=void 0===n?[]:n;return r.push(t.value),Object(ie.a)({},e,{notes:r});default:return e}},Me=function(){return{type:"STACKAPP/SUCCESS"}},Ae=function(){return function(e,t){return fetch("https://api.stackexchange.com/2.2/users?key=RAA6KJkHlTYXSdD9tcE4Kw((&site=stackoverflow&page=1&pagesize=10&order=desc&sort=reputation&filter=default",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},mode:"cors"}).then(function(e){if(200!==e.status)throw new Error("Fail to get response with status "+e.status);e.json().then(function(e){alert(JSON.stringify(e))}).catch(function(e){})}).catch(function(e){})}},De=function(e){function t(){return Object(S.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return g.a.createElement("div",{className:"stackapp"},g.a.createElement("button",{onClick:this.props.getAllUsers},"get all users"))}}]),t}(h.Component),Te=Object(b.b)(function(e){return{}},function(e){return{getAllUsers:function(){e(Ae())}}})(De),Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loginErr:!1,registryErr:!1,user:null};switch((arguments.length>1?arguments[1]:void 0).type){case"STACKAPP/SUCCESS":return Object(ie.a)({},e,{loginErr:!1,registryErr:!1});default:return e}},Le={Header:c,Notes:a,Register:u,Login:l,SynData:p,Stackapp:f},Pe=Object(y.c)({register:Le.Register.reducer,login:Le.Login.reducer,header:Le.Header.reducer,notes:Le.Notes.reducer,sysData:Le.SynData.reducer,statcapp:Le.Stackapp.reducer}),Ue=[O.a],Re=Object(y.d)(y.a.apply(void 0,Ue)),xe=Object(y.e)(Pe,{},Re),_e=(n(205),n(207),n(209),n(211),n(213),n(215),n(217),n(219),n(223)),Fe=function(e){function t(){return Object(S.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return g.a.createElement(_e.a,null,g.a.createElement("div",{className:"app"},g.a.createElement(Le.Header.view,null),g.a.createElement("div",{className:"container"},g.a.createElement(w.a,null,g.a.createElement(M.a,{path:"/register",component:Le.Register.view}),g.a.createElement(M.a,{path:"/login",component:Le.Login.view}),g.a.createElement(M.a,{path:"/sysdata",component:Le.SynData.view}),g.a.createElement(M.a,{path:"/stackapp",component:Le.Stackapp.view}),g.a.createElement(M.a,{path:"/",component:Le.Notes.view})))))}}]),t}(h.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));E.a.render(g.a.createElement(b.a,{store:xe},g.a.createElement(Fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,n){e.exports=n(221)}},[[99,2,1]]]);
//# sourceMappingURL=main.d53b64e6.chunk.js.map