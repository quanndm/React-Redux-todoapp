(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{17:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),i=n(6),s=n.n(i),a=(n(17),n(2)),r=n(8),l=n(3),d=n(12),u="ADD_TODO",j="GET_TODO_EDITING_ID",O="ON_EDIT_TODO",b="MARK_COMPLETED",f="CHECK_ALL_TODOS",g="REMOVE_TODO",p="SET_STATUS",h="CLEAR_COMPLETED",m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:u,payload:t}},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:p,payload:t}},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.find((function(t){return!t.isCompleted}))},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";switch(e){case"ACTIVE":return t.filter((function(t){return!t.isCompleted}));case"COMPLETED":return t.filter((function(t){return t.isCompleted}));case"REMOVE":return t.filter((function(t){return!t.id.toString().includes(n)}));default:return t}},C=JSON.parse(localStorage.getItem("todoState")),S={todoList:[],todoEditingId:"",isCheckedAll:!1,status:"ALL"},E=function(){var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C||S,c=arguments.length>1?arguments[1]:void 0,o=n.todoList,i=n.isCheckedAll,s=JSON.parse(JSON.stringify(o));switch(c.type){case u:return e=Object.assign({},n,{todoList:[].concat(Object(d.a)(s),[c.payload])}),localStorage.setItem("todoState",JSON.stringify(e)),e;case j:return e=Object.assign({},n,{todoEditingId:c.payload}),localStorage.setItem("todoState",JSON.stringify(e)),e;case O:return c.payload.index>=0&&s.splice(c.payload.index,1,c.payload.todo),e=Object.assign({},n,{todoList:s,todoEditingId:""}),localStorage.setItem("todoState",JSON.stringify(e)),e;case b:return t=s.map((function(t){return t.id===c.payload?Object(l.a)(Object(l.a)({},t),{},{isCompleted:!t.isCompleted}):t})),e=Object.assign({},n,{todoList:t,isCheckedAll:!y(t)}),localStorage.setItem("todoState",JSON.stringify(e)),e;case f:return t=o.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{isCompleted:!i})})),e=Object.assign({},n,{todoList:t,isCheckedAll:!i}),localStorage.setItem("todoState",JSON.stringify(e)),e;case g:return e=Object.assign({},n,{todoList:v(s,"REMOVE",c.payload)}),localStorage.setItem("todoState",JSON.stringify(e)),e;case p:return e=Object.assign({},n,{status:c.payload}),localStorage.setItem("todoState",JSON.stringify(e)),e;case h:return e=Object.assign({},n,{todoList:v(s,"ACTIVE")}),localStorage.setItem("todoState",JSON.stringify(e)),e;default:return n}},N=Object(r.a)({todos:E}),k=Object(r.b)(N),A=n(4),I=n(1),L=Object(c.memo)((function(){var t=Object(a.b)(),e=Object(c.useState)(""),n=Object(A.a)(e,2),o=n[0],i=n[1];return Object(I.jsxs)("header",{className:"header",children:[Object(I.jsx)("h1",{children:"todos"}),Object(I.jsx)("input",{type:"text",value:o,className:"new-todo",onChange:function(t){return i(t.target.value)},onKeyPress:function(e){return function(){if("Enter"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).key&&o){var e={id:(new Date).valueOf(),text:o,isCompleted:!1};t(m(e)),i("")}}(e)}})]})})),T=Object(c.memo)((function(t){var e=Object(a.b)(),n=t.todo,o=t.index,i=Object(a.c)((function(t){return t.todos.todoEditingId}))===n.id,s=Object(c.useState)(n.text),r=Object(A.a)(s,2),d=r[0],u=r[1],f=function(){e(function(){return{type:O,payload:{todo:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},index:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1}}}(Object(l.a)(Object(l.a)({},n),{},{text:d}),o))};return Object(I.jsx)("li",{className:"".concat(i&&"editing"," ").concat(n.isCompleted&&"completed"),children:i?Object(I.jsx)("input",{className:"edit",type:"text",value:d,onChange:function(t){u(t.target.value)},onKeyPress:function(t){"Enter"===t.key&&f()}}):Object(I.jsxs)("div",{className:"view",children:[Object(I.jsx)("input",{className:"toggle",type:"checkbox",checked:n.isCompleted,onChange:function(){e(function(){return{type:b,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(n.id))}}),Object(I.jsx)("label",{onDoubleClick:function(){return e(function(){return{type:j,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(n.id))},children:n.text}),Object(I.jsx)("button",{className:"destroy",onClick:function(){return e(function(){return{type:g,payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(n.id))}})]})})})),D=Object(c.memo)((function(t){var e=Object(a.b)(),n=Object(a.c)((function(t){return t.todos})),c=n.todoList,o=n.status,i=Object(a.c)((function(t){return t.todos.isCheckedAll}));return Object(I.jsxs)("section",{className:"main",children:[Object(I.jsx)("input",{className:"toggle-all",type:"checkbox",checked:i,readOnly:!0}),Object(I.jsx)("label",{htmlFor:"toggle-all",onClick:function(){return e({type:f})}}),Object(I.jsx)("ul",{className:"todo-list",children:v(c,o).map((function(e,n){return Object(I.jsx)(T,Object(l.a)(Object(l.a)({todo:e},t),{},{index:n}),"todo".concat(e.id))}))})]})})),J=Object(c.memo)((function(){var t=Object(a.b)(),e=Object(a.c)((function(t){return t.todos})),n=e.todoList,o=e.status,i=Object(c.useState)(n.length),s=Object(A.a)(i,2),r=s[0],d=s[1],u=Object(c.useState)(v(n,"ACTIVE").length),j=Object(A.a)(u,2),O=j[0],b=j[1];Object(c.useEffect)((function(){d(n.length),b(v(n,"ACTIVE").length)}),[n]);var f=[{title:"All",isActived:"ALL"===o,onClick:function(){return t(x("ALL"))},link:""},{title:"Active",isActived:"ACTIVE"===o,onClick:function(){return t(x("ACTIVE"))},link:"/active"},{title:"Completed",isActived:"COMPLETED"===o,onClick:function(){return t(x("COMPLETED"))},link:"/completed"}];return Object(I.jsxs)("footer",{className:"footer",children:[Object(I.jsxs)("span",{className:"todo-count",children:[Object(I.jsx)("strong",{children:O}),Object(I.jsx)("span",{children:" "}),Object(I.jsx)("span",{children:O<=1?"item":"items"}),Object(I.jsx)("span",{children:" left"})]}),Object(I.jsx)("ul",{className:"filters",children:f.map((function(t){return Object(I.jsx)(_,Object(l.a)({},t),"btn".concat(t.title))}))}),r>O&&Object(I.jsx)("button",{className:"clear-completed",onClick:function(){return t({type:h})},children:"Clear completed"})]})})),_=Object(c.memo)((function(t){var e=t.title,n=t.isActived,c=t.onClick,o=t.link;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("li",{children:Object(I.jsx)("a",{href:"/#".concat(o),className:"".concat(n?"selected":""),onClick:c,children:e})}),Object(I.jsx)("span",{})]})})),M=J;var V=function(){return Object(I.jsx)(a.a,{store:k,children:Object(I.jsxs)("div",{className:"todoapp",children:[Object(I.jsx)(L,{}),Object(I.jsx)(D,{}),Object(I.jsx)(M,{})]})})};s.a.render(Object(I.jsx)(o.a.StrictMode,{children:Object(I.jsx)(V,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.ca3f0b88.chunk.js.map