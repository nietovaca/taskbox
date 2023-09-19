import{r as E}from"./index-f1f749bf.js";import{p as o}from"./index-4d501b15.js";var l={},N={get exports(){return l},set exports(e){l=e}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=E,O=Symbol.for("react.element"),D=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,j=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function A(e,s,a){var r,n={},d=null,k=null;a!==void 0&&(d=""+a),s.key!==void 0&&(d=""+s.key),s.ref!==void 0&&(k=s.ref);for(r in s)I.call(s,r)&&!P.hasOwnProperty(r)&&(n[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps,s)n[r]===void 0&&(n[r]=s[r]);return{$$typeof:O,type:e,key:d,ref:k,props:n,_owner:j.current}}u.Fragment=D;u.jsx=A;u.jsxs=A;(function(e){e.exports=u})(N);const i=l.jsx,_=l.jsxs;function m({task:{id:e,title:s,state:a},onArchiveTask:r,onPinTask:n}){return _("div",{className:`list-item ${a}`,children:[_("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[i("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:a==="TASK_ARCHIVED"}),i("span",{className:"checkbox-custom",onClick:()=>r(e)})]}),i("label",{htmlFor:"title","aria-label":s,className:s,children:i("input",{type:"text",value:s,readOnly:!0,name:"title",placeholder:"Input title"})}),a!=="TASK_ARCHIVED"&&i("button",{className:"pin-button",onClick:()=>n(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:i("span",{className:"icon-star"})},`pinTask-${e}`)]})}m.propTypes={task:o.shape({id:o.string.isRequired,title:o.string.isRequired,state:o.string.isRequired}),onArchiveTask:o.func,onPinTask:o.func};m.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1,description:""},onArchiveTask:{type:{name:"func"},required:!1,description:""},onPinTask:{type:{name:"func"},required:!1,description:""}}};const q={component:m,title:"Task",tags:["autodocs"]},t={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},c={args:{task:{...t.args.task,state:"TASK_PINNED"}}},p={args:{task:{...t.args.task,state:"TASK_ARCHIVED"}}};var f,T,g;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX"
    }
  }
}`,...(g=(T=t.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var h,y,x;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED"
    }
  }
}`,...(x=(y=c.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var b,v,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED"
    }
  }
}`,...(S=(v=p.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const $=["Default","Pinned","Archived"],w=Object.freeze(Object.defineProperty({__proto__:null,Archived:p,Default:t,Pinned:c,__namedExportsOrder:$,default:q},Symbol.toStringTag,{value:"Module"}));export{t as D,m as T,i as a,w as b,_ as j};
//# sourceMappingURL=Task.stories-ab06e83e.js.map
