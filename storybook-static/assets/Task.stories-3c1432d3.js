import{r as S}from"./index-f1f749bf.js";import{p as n}from"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";var l={},b={get exports(){return l},set exports(e){l=e}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=S,I=Symbol.for("react.element"),D=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,q=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function N(e,r,t){var s,a={},d=null,k=null;t!==void 0&&(d=""+t),r.key!==void 0&&(d=""+r.key),r.ref!==void 0&&(k=r.ref);for(s in r)O.call(r,s)&&!P.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps,r)a[s]===void 0&&(a[s]=r[s]);return{$$typeof:I,type:e,key:d,ref:k,props:a,_owner:q.current}}u.Fragment=D;u.jsx=N;u.jsxs=N;(function(e){e.exports=u})(b);const o=l.jsx,f=l.jsxs;function m({task:{id:e,title:r,state:t},onArchiveTask:s,onPinTask:a}){return f("div",{className:`list-item ${t}`,children:[f("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[o("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:t==="TASK_ARCHIVED"}),o("span",{className:"checkbox-custom",onClick:()=>s(e)})]}),o("label",{htmlFor:"title","aria-label":r,className:r,children:o("input",{type:"text",value:r,readOnly:!0,name:"title",placeholder:"Input title"})}),t!=="TASK_ARCHIVED"&&o("button",{className:"pin-button",onClick:()=>a(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:o("span",{className:"icon-star"})},`pinTask-${e}`)]})}m.propTypes={task:n.shape({id:n.string.isRequired,title:n.string.isRequired,state:n.string.isRequired}),onArchiveTask:n.func,onPinTask:n.func};m.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1,description:""},onArchiveTask:{type:{name:"func"},required:!1,description:""},onPinTask:{type:{name:"func"},required:!1,description:""}}};const $={component:m,title:"Task",tags:["autodocs"]},i={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},c={args:{task:{...i.args.task,state:"TASK_PINNED"}}},p={args:{task:{...i.args.task,state:"TASK_ARCHIVED"}}};var _,T,h;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(h=(T=i.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var g,x,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,A,E;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(E=(A=p.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};const w=["Default","Pinned","Archived"];export{p as Archived,i as Default,c as Pinned,w as __namedExportsOrder,$ as default};
//# sourceMappingURL=Task.stories-3c1432d3.js.map
