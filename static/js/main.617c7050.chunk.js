(this["webpackJsonpgoit-react-hw-06-redux-toolkit-phonebook"]=this["webpackJsonpgoit-react-hw-06-redux-toolkit-phonebook"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(8),o=n.n(i),l=n(3),s=(n(24),n(25),n(13)),d=n(14),b=n(5),u=n(10),j=n(15),m=Object(u.b)({name:"phonebook",initialState:{items:null!==(a=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==a?a:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},reducers:{addContact:{reducer:function(e,t){return e.items.find((function(e){return e.name===t.payload.name}))?(alert("".concat(t.payload.name," is already in contacts")),!1):Object(b.a)(Object(b.a)({},e),{},{items:[t.payload].concat(Object(d.a)(e.items))})},prepare:function(e,t){return{payload:{id:Object(j.a)(),name:e,number:t}}}},deleteContact:{reducer:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{items:Object(d.a)(e.items.filter((function(e){return e.id!==t.payload})))})},prepare:function(e){return{payload:e}}},filterContact:{reducer:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{filter:t.payload})},prepare:function(e){return{payload:e}}}}}),p=m.actions,f=p.addContact,O=p.deleteContact,x=p.filterContact,h=m.reducer,g=n(2),y=n(1);var v=Object(g.a)("div",{target:"ebnaqsc3"})({name:"1ppwr9f",styles:"display:flex;flex-direction:column;padding:20px;border:1px solid black;border-radius:5px;width:max-content;align-items:center"}),C=Object(g.a)("form",{target:"ebnaqsc2"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),w=Object(g.a)("label",{target:"ebnaqsc1"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),k=Object(g.a)("button",{target:"ebnaqsc0"})({name:"1ev37ey",styles:"display:block;padding:5px;margin:10px 0px;width:max-content;coursor:pointer;margin:20px auto"});function S(e){var t=e.text;return Object(y.jsx)(k,{children:t})}function z(){var e=Object(l.c)(),t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),o=Object(s.a)(i,2),d=o[0],b=o[1];function u(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":b(a)}}return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(v,{children:[Object(y.jsx)("h1",{children:"Phonebook"}),Object(y.jsxs)(C,{onSubmit:function(t){t.preventDefault(),e(f(a,d)),r(""),b("")},children:[Object(y.jsxs)(w,{children:["Name",Object(y.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Put the name here",autoComplete:"off",value:a,onChange:u,required:!0})]}),Object(y.jsxs)(w,{children:["Number",Object(y.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Put the number here",autoComplete:"off",value:d,onChange:u,required:!0})]}),Object(y.jsx)(S,{type:"submit",text:"Add contact"})]})]})})}var A=Object(g.a)("ul",{target:"e1nlk6z51"})({name:"1xclg2i",styles:"margin:0;padding:0"}),q=Object(g.a)("h2",{target:"e1nlk6z50"})({name:"1azakc",styles:"text-align:center"});var J=Object(g.a)("div",{target:"ef2720y3"})({name:"zjik7",styles:"display:flex"}),N=Object(g.a)("li",{target:"ef2720y2"})(""),E=Object(g.a)("button",{target:"ef2720y1"})({name:"11v8gox",styles:"width:max-content;padding:3px 5px"}),F=Object(g.a)("p",{target:"ef2720y0"})({name:"1hwrxlv",styles:"display:block;width:250px;margin:0"});function I(){var e=Object(l.d)((function(e){return e.contacts.items}),l.b),t=Object(l.d)((function(e){return e.contacts.filter}),l.b),n=Object(l.c)(),a=t.toLowerCase(),c=e.filter((function(e){return e.name.toLowerCase().includes(a)}));return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(A,{children:[0===(null===t||void 0===t?void 0:t.length)&&0===c.length?Object(y.jsx)(q,{children:"You have not contacts saved"}):0!==(null===t||void 0===t?void 0:t.length)&&0===c.length?Object(y.jsx)("h1",{children:" Can not find the Contact"}):Object(y.jsx)(q,{children:"Contacts"}),c.map((function(e){return Object(y.jsx)(N,{children:Object(y.jsxs)(J,{children:[Object(y.jsxs)(F,{children:[e.name,": ",e.number]}),Object(y.jsx)(E,{onClick:function(){return n(O(e.id))},type:"button",children:"Delete"})]})},e.id)}))]})})}var P=Object(g.a)("div",{target:"e1nxw1ai0"})({name:"1y2thb4",styles:"display:flex;flex-direction:column;align-items:center;padding:20px"});var Z=Object(g.a)("label",{target:"e1f8iv6b2"})(""),B=Object(g.a)("p",{target:"e1f8iv6b1"})({name:"48s3pj",styles:"font-weight:500;font-style:italic"}),D=Object(g.a)("input",{target:"e1f8iv6b0"})("");function L(){var e=Object(l.d)((function(e){return e.contacts.filter}),l.b),t=Object(l.c)();return Object(y.jsxs)(Z,{children:[Object(y.jsx)(B,{children:"Find contact by name"}),Object(y.jsx)(D,{type:"text",name:"filter",autoComplete:"off",value:e,onChange:function(e){return t(x(e.target.value))}})]})}function M(){var e=Object(l.d)((function(e){return e.contacts.items}),l.b);return Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(e))}),[e]),Object(y.jsxs)(P,{children:[Object(y.jsx)(z,{}),Object(y.jsx)(L,{}),Object(y.jsx)(I,{})]})}var H=Object(u.a)({reducer:{contacts:h}});o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(l.a,{store:H,children:Object(y.jsx)(M,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.617c7050.chunk.js.map