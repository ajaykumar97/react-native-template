"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{9387:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var n=a(7294),l=a(6742),i=a(4973);const r=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(l.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var s=a(2263),o=a(907),c=a(9732);function d(e){let{siteTitle:t,versionLabel:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")}function m(e){let{siteTitle:t,versionLabel:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}function u(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label userd to tell the user that he's browsing an unmaintained doc version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}const h=function(){const{siteConfig:{title:e}}=(0,s.Z)(),{pluginId:t}=(0,o.gA)({failfast:!0}),{savePreferredVersionName:a}=(0,c.J)(t),l=(0,o.zu)(t),{latestDocSuggestion:i,latestVersionSuggestion:r}=(0,o.Jo)(t);if(!r)return n.createElement(n.Fragment,null);const h=i??(v=r).docs.find((e=>e.id===v.mainDocId));var v;return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,"current"===l.name?n.createElement(d,{siteTitle:e,versionLabel:l.label}):n.createElement(m,{siteTitle:e,versionLabel:l.label})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:r.label,to:h.path,onClick:()=>a(r.name)})))};var v=a(1217);function p(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement(n.Fragment,null,n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(p,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var b=a(571),f=a(7462),_=a(6010);const L="iconEdit_mS5F",N=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,f.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,_.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function U(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(N,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var k=a(6159);const T="docItemContainer_oiyr",Z="lastUpdated_wj+Z",y="docItemCol_zHA2";const w=function(e){const{content:t}=e,{metadata:a,frontMatter:l}=t,{image:i,keywords:s,hide_title:c,hide_table_of_contents:d}=l,{description:m,title:u,editUrl:p,lastUpdatedAt:E,formattedLastUpdatedAt:f,lastUpdatedBy:L}=a,{pluginId:N}=(0,o.gA)({failfast:!0}),w=(0,o.gB)(N),A=(0,o.zu)(N),C=w.length>1,B=!c&&void 0===t.contentTitle;return n.createElement(n.Fragment,null,n.createElement(v.Z,{title:u,description:m,keywords:s,image:i}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,_.Z)("col",{[y]:!d})},n.createElement(h,null),n.createElement("div",{className:T},n.createElement("article",null,C&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label),n.createElement("div",{className:"markdown"},B&&n.createElement(k.N,null,u),n.createElement(t,null)),(p||E||L)&&n.createElement("footer",{className:"row docusaurus-mt-lg"},n.createElement("div",{className:"col"},p&&n.createElement(U,{editUrl:p})),n.createElement("div",{className:(0,_.Z)("col",Z)},(E||L)&&n.createElement(g,{lastUpdatedAt:E,formattedLastUpdatedAt:f,lastUpdatedBy:L})))),n.createElement(r,{metadata:a}))),!d&&t.toc&&n.createElement("div",{className:"col col--3"},n.createElement(b.Z,{toc:t.toc}))))}},6159:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(7462),l=a(7294),i=a(6010),r=a(4973),s=a(9732);const o="enhancedAnchor_WiXH",c="h1Heading_dC7a",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0,className:c}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...n}=e;const{navbar:{hideOnScroll:c}}=(0,s.LU)();return a?l.createElement(t,n,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor",{[o]:!c}),id:a}),n.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,n)});var t}},571:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010);const i=function(e,t,a){const[l,i]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(n){let a=0,r=!1;const s=document.getElementsByClassName(e);for(;a<s.length&&!r;){const e=s[a],{href:o}=e,c=decodeURIComponent(o.substring(o.indexOf("#")+1));n.id===c&&(l&&l.classList.remove(t),e.classList.add(t),i(e),r=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},r="tableOfContents_vrFS",s="table-of-contents__link";function o(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))))):null}const c=function(e){let{toc:t}=e;return i(s,"table-of-contents__link--active",100),n.createElement("div",{className:(0,l.Z)(r,"thin-scrollbar")},n.createElement(o,{toc:t}))}}}]);