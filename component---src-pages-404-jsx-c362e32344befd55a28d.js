(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{180:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=(n(32),n(187)),i=n(4),c=n.n(i),l=n(182),u=n(185),d=n.n(u),s=n(184),p=(n(189),n(190)),f=n(186),m=function(t){var e=t.children,n=Object(r.useState)(!1),i=n[0],c=n[1],u=Object.assign({},p.a,i?p.b:p.c);return a.a.createElement(l.StaticQuery,{query:"2994927498",render:function(t){return a.a.createElement(s.a,{theme:u},a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},a.a.createElement(f.b,{onClick:function(){return c(!i)}},i?"Light":"Dark"," theme")),a.a.createElement(h,null,a.a.createElement(d.a,{bodyAttributes:{style:"background-color : "+u.backgroundColor}}),a.a.createElement(g,null,e))))},data:o})},h=s.c.div.withConfig({displayName:"layout__SiteWrapper",componentId:"gfnls3-0"})(["display:flex;flex-direction:row;justify-content:center;"]),g=s.c.div.withConfig({displayName:"layout__PageContainer",componentId:"gfnls3-1"})(["max-width:1000px;margin-bottom:150px;"]);m.propTypes={children:c.a.node.isRequired};var y=m,w=n(191);function x(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,i=t.title;return a.a.createElement(l.StaticQuery,{query:C,render:function(t){var c=e||t.site.siteMetadata.description;return a.a.createElement(d.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:w})}x.defaultProps={lang:"en",meta:[],keywords:[]},x.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var b=x,C="1025518380";e.default=function(){return a.a.createElement(y,null,a.a.createElement(b,{title:"404: Not found"}),a.a.createElement("h1",null,"NOT FOUND"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},182:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return m}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(181),l=n.n(c);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var u=n(183),d=n.n(u);n.d(e,"PageRenderer",function(){return d.a});var s=n(33);n.d(e,"parsePath",function(){return s.a});var p=a.a.createContext({}),f=function(t){return a.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},183:function(t,e,n){var r;t.exports=(r=n(188))&&r.default||r},186:function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"d",function(){return o}),n.d(e,"k",function(){return i}),n.d(e,"l",function(){return c}),n.d(e,"i",function(){return u}),n.d(e,"g",function(){return d}),n.d(e,"j",function(){return s}),n.d(e,"f",function(){return p}),n.d(e,"e",function(){return f}),n.d(e,"h",function(){return m}),n.d(e,"b",function(){return h}),n.d(e,"a",function(){return g});var r=n(184),a=r.c.div.withConfig({displayName:"UI__SectionContainer",componentId:"sc-13hkhez-0"})(["margin-bottom:30px;"]),o=r.c.h2.withConfig({displayName:"UI__SectionHeader",componentId:"sc-13hkhez-1"})(["color:",";font-family:'Staatliches';letter-spacing:2px;font-style:italic;margin-bottom:25px;"],function(t){return t.theme.primaryColor}),i=Object(r.b)(["padding:1px;color:",";font-weight:600;"],function(t){return t.theme.contrastColor}),c=Object(r.b)(["color:",";font-family:'Aleo';letter-spacing:3px;line-height:34px;font-size:30px;font-weight:500;margin-top:10px;margin-bottom:5px;"],function(t){return t.theme.secondaryFontColor}),l=Object(r.b)([""," "," line-height:25px;"],c,i),u=r.c.span.withConfig({displayName:"UI__SectionText",componentId:"sc-13hkhez-2"})(["",""],c),d=r.c.span.withConfig({displayName:"UI__SectionKeywordText",componentId:"sc-13hkhez-3"})([""," "," line-height:25px;"],c,i),s=(r.c.span.withConfig({displayName:"UI__SectionTextLargeMeta",componentId:"sc-13hkhez-4"})([""," color:",";font-size:50px;line-height:52px;"],l,function(t){return t.theme.secondaryFontColor}),r.c.span.withConfig({displayName:"UI__SectionTextLarge",componentId:"sc-13hkhez-5"})([""," color:",";font-size:50px;line-height:52px;"],c,function(t){return t.theme.contrastColor})),p=r.c.a.withConfig({displayName:"UI__SectionKeywordLink",componentId:"sc-13hkhez-6"})([""," text-decoration:underline;"],i),f=r.c.a.withConfig({displayName:"UI__SectionKeywordIconLink",componentId:"sc-13hkhez-7"})(["",""],i),m=r.c.span.withConfig({displayName:"UI__SectionMetaText",componentId:"sc-13hkhez-8"})(["color:",";font-size:23px;font-weight:500;vertical-align:middle;display:flex;align-items:center;"],function(t){return t.theme.secondaryFontColor}),h=r.c.span.withConfig({displayName:"UI__InlineButton",componentId:"sc-13hkhez-9"})(["padding:5px;color:",";font-family:'Staatliches';font-size:12px;letter-spacing:3px;font-weight:300;vertical-align:middle;cursor:pointer;"],function(t){return t.theme.primaryColor}),g=r.c.img.withConfig({displayName:"UI__AvatarImage",componentId:"sc-13hkhez-10"})(["width:180px;height:180px;border-radius:0.5;padding-right:15px;"])},187:function(t){t.exports={data:{site:{siteMetadata:{title:"Tyler Bainbridge"}}}}},188:function(t,e,n){"use strict";n.r(e);n(32);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(62),l=n(2),u=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=u},189:function(t,e,n){},190:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return a}),n.d(e,"b",function(){return o});var r={primaryColor:"#EFA19D",lightGreyColor:"#f2f2f2"},a={backgroundColor:"#FFF",primaryFontColor:"#1D1D20",secondaryFontColor:"#808080",contrastColor:"#000"},o={backgroundColor:"#1D1D20",primaryFontColor:"#FFF",secondaryFontColor:"#d9d9d9",contrastColor:"#FFF"}},191:function(t){t.exports={data:{site:{siteMetadata:{title:"Tyler Bainbridge",description:"Portfolio",author:"Tyler Bainbridge"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-jsx-c362e32344befd55a28d.js.map