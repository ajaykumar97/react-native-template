"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,608],{3616:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ee});var n=a(7294),l=a(3905),o=a(2263),i=a(6291),s=a(2442),r=a(7462),c=a(6010),d=a(9732),m=a(944),u=a(1839),b=a(3783),p=a(7898),h=a(6742),f=a(3919),E=a(5537);const v=e=>n.createElement("svg",(0,r.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var g=a(4478),k=a(8617),_=a(4973);const C="sidebar_a3j0",N="sidebarWithHideableNavbar_VlPv",Z="sidebarHidden_OqfG",I="sidebarLogo_hmkv",S="menu_cyFh",R="menuLinkText_lRH+",y="menuWithAnnouncementBar_+O1J",T="collapseSidebarButton_eoK2",A="collapseSidebarButtonIcon_e+kA",w="sidebarMenuIcon_iZzd",x="sidebarMenuCloseIcon_6kU2";const L=(e,t)=>"link"===e.type?(0,d.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>L(e,t))),M=(0,n.memo)((function(e){let{items:t,...a}=e;return t.map(((e,t)=>n.createElement(B,(0,r.Z)({key:t,item:e},a))))}));function B(e){return"category"===e.item.type?n.createElement(P,e):n.createElement(D,e)}function P(e){let{item:t,onItemClick:a,collapsible:l,activePath:o,...i}=e;const{items:s,label:d}=t,m=L(t,o),u=function(e){const t=(0,n.useRef)(e);return(0,n.useEffect)((()=>{t.current=e}),[e]),t.current}(m),[b,p]=(0,n.useState)((()=>!!l&&(!m&&t.collapsed))),h=(0,n.useRef)(null),[f,E]=(0,n.useState)(void 0),v=function(e){var t;void 0===e&&(e=!0),E(e?`${null==(t=h.current)?void 0:t.scrollHeight}px`:void 0)};(0,n.useEffect)((()=>{m&&!u&&b&&p(!1)}),[m,u,b]);const g=(0,n.useCallback)((e=>{e.preventDefault(),f||v(),setTimeout((()=>p((e=>!e))),100)}),[f]);return 0===s.length?null:n.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":b})},n.createElement("a",(0,r.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":l,"menu__link--active":l&&m,[R]:!l}),onClick:l?g:void 0,href:l?"#!":void 0},i),d),n.createElement("ul",{className:"menu__list",ref:h,style:{height:f},onTransitionEnd:()=>{b||v(!1)}},n.createElement(M,{items:s,tabIndex:b?"-1":"0",onItemClick:a,collapsible:l,activePath:o})))}function D(e){let{item:t,onItemClick:a,activePath:l,collapsible:o,...i}=e;const{href:s,label:d}=t,m=L(t,l);return n.createElement("li",{className:"menu__list-item",key:d},n.createElement(h.Z,(0,r.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":m}),to:s},(0,f.Z)(s)&&{isNavLink:!0,exact:!0,onClick:a},i),(0,f.Z)(s)?d:n.createElement("span",null,d,n.createElement(k.Z,null))))}function H(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",T),onClick:t},n.createElement(v,{className:A}))}function O(e){let{responsiveSidebarOpened:t,onClick:a}=e;return n.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,c.Z)(w,x)},"\xd7"):n.createElement(g.Z,{className:w,height:24,width:24}))}const F=function(e){let{path:t,sidebar:a,sidebarCollapsible:l=!0,onCollapse:o,isHidden:i}=e;const s=function(){const{isAnnouncementBarClosed:e}=(0,m.Z)(),[t,a]=(0,n.useState)(!e);return(0,p.Z)((t=>{let{scrollY:n}=t;e||a(0===n)})),t}(),{navbar:{hideOnScroll:r},hideableSidebar:h}=(0,d.LU)(),{isAnnouncementBarClosed:f}=(0,m.Z)(),{showResponsiveSidebar:v,closeResponsiveSidebar:g,toggleResponsiveSidebar:k}=function(){const[e,t]=(0,n.useState)(!1);(0,u.Z)(e);const a=(0,b.Z)();return(0,n.useEffect)((()=>{a===b.D.desktop&&t(!1)}),[a]),{showResponsiveSidebar:e,closeResponsiveSidebar:(0,n.useCallback)((e=>{e.target.blur(),t(!1)}),[t]),toggleResponsiveSidebar:(0,n.useCallback)((()=>{t((e=>!e))}),[t])}}();return n.createElement("div",{className:(0,c.Z)(C,{[N]:r,[Z]:i})},r&&n.createElement(E.Z,{tabIndex:-1,className:I}),n.createElement("nav",{className:(0,c.Z)("menu","menu--responsive","thin-scrollbar",S,{"menu--show":v,[y]:!f&&s}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(O,{responsiveSidebarOpened:v,onClick:k}),n.createElement("ul",{className:"menu__list"},n.createElement(M,{items:a,onItemClick:g,collapsible:l,activePath:t}))),h&&n.createElement(H,{onClick:o}))};var W=a(7933),z=a(4608),U=a(5977);const q="docPage_lDyR",J="docMainContainer_r8cw",K="docMainContainerEnhanced_SOUu",Y="docSidebarContainer_0YBq",$="docSidebarContainerHidden_Qlt2",j="collapsedDocSidebar_zZpm",G="expandSidebarButtonIcon_cxi8",Q="docItemWrapperEnhanced_aT5H",V="docItemWrapper_NJLN";function X(e){var t;let{currentDocRoute:a,versionMetadata:i,children:r}=e;const{siteConfig:m,isClient:u}=(0,o.Z)(),{pluginId:b,version:p}=i,{sidebarName:h,sidebar:f}=function(e){let{versionMetadata:t,currentDocRoute:a}=e;const{permalinkToSidebar:n,docsSidebars:l}=t,o=n[a.path]||n[(i=a.path,i.endsWith("/")?i:`${i}/`)]||n[function(e){return e.endsWith("/")?e.slice(0,-1):e}(a.path)];var i;return{sidebar:l[o],sidebarName:o}}({versionMetadata:i,currentDocRoute:a}),[E,g]=(0,n.useState)(!1),[k,C]=(0,n.useState)(!1),N=(0,n.useCallback)((()=>{k&&C(!1),g(!E)}),[k]);return n.createElement(s.Z,{key:u,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:p,tag:(0,d.os)(b,p)}},n.createElement("div",{className:q},f&&n.createElement("aside",{className:(0,c.Z)(Y,{[$]:E}),onTransitionEnd:e=>{e.currentTarget.classList.contains(Y)&&E&&C(!0)}},n.createElement(F,{key:h,sidebar:f,path:a.path,sidebarCollapsible:(null==(t=m.themeConfig)?void 0:t.sidebarCollapsible)??!0,onCollapse:N,isHidden:k}),k&&n.createElement("div",{className:j,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},n.createElement(v,{className:G}))),n.createElement("main",{className:(0,c.Z)(J,{[K]:E||!f})},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",V,{[Q]:E})},n.createElement(l.Zo,{components:W.Z},r)))))}const ee=function(e){const{route:{routes:t},versionMetadata:a,location:l}=e,o=t.find((e=>(0,U.LX)(l.pathname,e)));return o?n.createElement(X,{currentDocRoute:o,versionMetadata:a},(0,i.Z)(t)):n.createElement(z.default,e)}},4608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7294),l=a(2442),o=a(4973);const i=function(){return n.createElement(l.Z,{title:(0,o.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);