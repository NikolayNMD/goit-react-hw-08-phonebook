"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[244],{9244:function(n,e,r){r.r(e),r.d(e,{default:function(){return A}});var t,o,a,i,c,l,d,u,s=r(168),p=r(9439),x=r(2791),b=r(4894),h=r(4420),f=r(8765),m=r(1686),v=r.n(m),y=r(3890),g=r(3329),j=function(){var n=(0,x.useState)(""),e=(0,p.Z)(n,2),r=e[0],t=e[1],o=(0,x.useState)(""),a=(0,p.Z)(o,2),i=a[0],c=a[1],l=(0,h.I0)(),d=(0,h.v9)(f.jd),u=function(n){var e=n.target,r=e.name,o=e.value;switch(r){case"name":t(o);break;case"number":c(o)}};return(0,g.jsx)("form",{onSubmit:function(n){n.preventDefault();var e={name:r,phone:i};d.find((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?v().Notify.warning("".concat(e.name," is already in contacts.")):(l((0,y.Dk)(e)),v().Notify.success("".concat(e.name," succesfully added!")),t(""),c(""))},children:(0,g.jsxs)(k,{children:["Name",(0,g.jsx)("input",{placeholder:"Enter name",type:"text",name:"name",value:r,onChange:u,required:!0}),"Number",(0,g.jsx)("input",{placeholder:"Enter phone number",type:"tel",name:"number",value:i,onChange:u,required:!0}),(0,g.jsx)(w,{type:"submit",disabled:!(r&&i),children:"Add contact"})]})})},k=b.ZP.label(t||(t=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: aliceblue;\n  padding: 30px 10px;\n"]))),w=b.ZP.button(o||(o=(0,s.Z)(["\n  cursor: pointer;\n  margin: 10px auto 0;\n  width: 100px;\n  border: 1px solid black;\n  border-radius: 2px;\n  background-color: lavender;\n"]))),Z=r(6895),C=function(){var n=(0,h.I0)(),e=(0,h.v9)(Z.zK);return(0,g.jsxs)("label",{style:{color:"white"},children:["Find contacts by name:",(0,g.jsx)(P,{onChange:function(e){n((0,Z.Tv)(e.target.value))},name:"filter",type:"text",placeholder:"Search by name",filter:e})]})},P=b.ZP.input(a||(a=(0,s.Z)(["\n  margin-left: 10px;\n"]))),z=function(){var n=(0,h.I0)();(0,x.useEffect)((function(){n((0,y.K2)())}),[n]);var e=(0,h.v9)(f.jd),r=(0,h.v9)(Z.zK),t=(0,h.v9)(f.Vc),o=(0,h.v9)(f.by),a=e.filter((function(n){return n.name.toLowerCase().includes(r.toLowerCase())}));return(0,g.jsxs)(L,{children:[t&&(0,g.jsx)("p",{children:"Loading..."}),o&&(0,g.jsx)("p",{children:o}),a.map((function(e){return(0,g.jsxs)(N,{children:[e.name,": ",e.phone,(0,g.jsx)(E,{onClick:function(){return r=e.id,n((0,y.nE)(r)),void v().Notify.failure("Contact succesfully deleted!");var r},type:"button",children:"Delete"})]},e.id)}))]})},L=b.zo.ul(i||(i=(0,s.Z)(["\n  border: 2px dotted black;\n  background-color: aliceblue;\n  border-radius: 5px;\n  list-style-type: none;\n  padding: 10px;\n  margin-bottom: 0;\n  height: 100px;\n  overflow-y: auto;\n\n  &::-webkit-scrollbar {\n    overflow: hidden;\n  }\n"]))),N=b.zo.li(c||(c=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 2px;\n"]))),E=b.zo.button(l||(l=(0,s.Z)(["\n  border: 2px solid red;\n  border-radius: 10px;\n\n  &:hover {\n    cursor: pointer;\n    background-color: red;\n    color: white;\n  }\n"]))),S=b.ZP.div(d||(d=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),_=b.ZP.div(u||(u=(0,s.Z)(["\n  padding: 40px;\n  margin: 10px;\n  background-color: rgba(71, 176, 192, 0.7);\n  border-radius: 5px;\n"]))),A=function(){return(0,g.jsx)(S,{children:(0,g.jsxs)(_,{children:[(0,g.jsx)("h1",{style:{textAlign:"center",color:"white"},children:"Phonebook"}),(0,g.jsx)(j,{}),(0,g.jsx)("h2",{style:{textAlign:"center",color:"white"},children:"Contacts"}),(0,g.jsx)(C,{}),(0,g.jsx)(z,{})]})})}}}]);
//# sourceMappingURL=244.65bdbcaa.chunk.js.map