(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),o=n.n(r),i=(n(13),n(8)),s=n(3),u=(n(14),n(0));var l=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("div",{className:"task__section",children:[t&&Object(u.jsx)("h2",{children:t}),n]})},b=n(2),d=n.n(b),m=n(25);n(18);function j(e){var t=e.onSubmit,n=Object(m.a)(),a=Object(m.a)(),r=Object(c.useState)(""),o=Object(s.a)(r,2),i=o[0],l=o[1],b=Object(c.useState)(""),d=Object(s.a)(b,2),j=d[0],f=d[1],h=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":l(c);break;case"number":f(c);break;default:return}},O=function(){l(""),f("")};return Object(u.jsxs)("form",{className:"contacts__form",onSubmit:function(e){e.preventDefault();var n={id:Object(m.a)(),name:i,number:j};t(n),O()},children:[Object(u.jsxs)("label",{className:"contcts__form-label",htmlFor:n,children:["Name",Object(u.jsx)("input",{className:"contcts__form-input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:i,onChange:h,id:n})]}),Object(u.jsxs)("label",{className:"contcts__form-label",htmlFor:a,children:["Number",Object(u.jsx)("input",{className:"contcts__form-input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:h,id:a})]}),Object(u.jsx)("button",{className:"contacts__form-button",type:"submit",children:"Add contact"})]})}j.PropsType={onSubmit:d.a.func.isRequired};n(19);function f(e){var t=e.value,n=e.onChange;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:"filter__header",children:"Find contacts by name :"}),Object(u.jsx)("input",{type:"text",name:"filter",value:t,onChange:n,className:"filter__input"})]})}n(20);var h=function(e){var t=e.id,n=e.name,c=e.number,a=e.onDeleteContact;return Object(u.jsxs)("li",{className:"contact__list-item",children:[Object(u.jsxs)("div",{children:[n,": ",c]}),Object(u.jsx)("button",{className:"contact__list-delete-button",type:"submit",onClick:function(){return a(t)},children:"Delete"})]})};h.prototype={id:d.a.number.isRequired,name:d.a.string.isRequired,number:d.a.number.isRequired,onDeleteContact:d.a.func.isRequired};var O=h,v=(n(21),function(e){var t=e.findContact,n=e.onDeleteContact;return Object(u.jsx)("ul",{className:"contact__list",children:t().map((function(e){var t=e.id,c=e.name,a=e.number;return Object(u.jsx)(O,{className:"contacts__list-item",id:t,name:c,number:a,onDeleteContact:n},t)}))})});v.prototype={findContact:d.a.func.isRequired,onDeleteContact:d.a.func.isRequired};var p=v;n(22);function _(){var e,t=Object(c.useState)(null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:[]),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),b=Object(s.a)(o,2),d=b[0],m=b[1];Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(a))}),[a]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"header__main",children:"React HW 004 Phonebook"}),Object(u.jsx)(l,{title:"Phonebook",children:Object(u.jsx)(j,{onSubmit:function(e){var t;t=e.name,a.find((function(e){return e.name.toLocaleLowerCase()===t.toLocaleLowerCase()}))?alert("".concat(e.name," is already in contacts")):r([e].concat(Object(i.a)(a)))}})}),Object(u.jsxs)(l,{title:"Contacts",children:[Object(u.jsx)(f,{value:d,onChange:function(e){var t=e.currentTarget.value;m(t)}}),Object(u.jsx)(p,{findContact:function(){var e=d.toLocaleLowerCase();return d.length?a.filter((function(t){return t.name.toLowerCase().includes(e)})):a},onDeleteContact:function(e){r(a.filter((function(t){return t.id!==e})))}})]})]})}o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.dac93d9b.chunk.js.map