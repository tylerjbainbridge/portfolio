(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{180:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e.n(r),a=(e(32),e(187)),i=e(4),c=e.n(i),l=e(182),u=e(185),d=e.n(u),s=e(184),p=(e(189),e(190)),f=e(186),m=function(t){var n=t.children,e=Object(r.useState)(!0),i=e[0],c=e[1],u=Object.assign({},p.a,i?p.b:p.c);return o.a.createElement(l.StaticQuery,{query:"2994927498",render:function(t){return o.a.createElement(s.a,{theme:u},o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement(f.a,{onClick:function(){return c(!i)}},i?"Light":"Dark"," theme")),o.a.createElement(h,null,o.a.createElement(d.a,{bodyAttributes:{style:"background-color : "+u.backgroundColor}}),o.a.createElement(y,null,n))))},data:a})},h=s.c.div.withConfig({displayName:"layout__SiteWrapper",componentId:"gfnls3-0"})(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n"]),y=s.c.div.withConfig({displayName:"layout__PageContainer",componentId:"gfnls3-1"})(["\n  width: 900px;\n  margin-bottom: 150px;\n"]);m.propTypes={children:c.a.node.isRequired};var g=m,w=e(191);function x(t){var n=t.description,e=t.lang,r=t.meta,a=t.keywords,i=t.title;return o.a.createElement(l.StaticQuery,{query:C,render:function(t){var c=n||t.site.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:e},title:i,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:c}].concat(a.length>0?{name:"keywords",content:a.join(", ")}:[]).concat(r)})},data:w})}x.defaultProps={lang:"en",meta:[],keywords:[]},x.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var b=x,C="1025518380";n.default=function(){return o.a.createElement(g,null,o.a.createElement(b,{title:"404: Not found"}),o.a.createElement("h1",null,"NOT FOUND"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},182:function(t,n,e){"use strict";e.r(n),e.d(n,"graphql",function(){return m}),e.d(n,"StaticQueryContext",function(){return p}),e.d(n,"StaticQuery",function(){return f});var r=e(0),o=e.n(r),a=e(4),i=e.n(a),c=e(181),l=e.n(c);e.d(n,"Link",function(){return l.a}),e.d(n,"withPrefix",function(){return c.withPrefix}),e.d(n,"navigate",function(){return c.navigate}),e.d(n,"push",function(){return c.push}),e.d(n,"replace",function(){return c.replace}),e.d(n,"navigateTo",function(){return c.navigateTo});var u=e(183),d=e.n(u);e.d(n,"PageRenderer",function(){return d.a});var s=e(33);e.d(n,"parsePath",function(){return s.a});var p=o.a.createContext({}),f=function(t){return o.a.createElement(p.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},183:function(t,n,e){var r;t.exports=(r=e(188))&&r.default||r},186:function(t,n,e){"use strict";e.d(n,"b",function(){return o}),e.d(n,"c",function(){return a}),e.d(n,"h",function(){return c}),e.d(n,"f",function(){return l}),e.d(n,"i",function(){return u}),e.d(n,"e",function(){return d}),e.d(n,"d",function(){return s}),e.d(n,"g",function(){return p}),e.d(n,"a",function(){return f});var r=e(184),o=r.c.div.withConfig({displayName:"UI__SectionContainer",componentId:"sc-13hkhez-0"})(["\n  margin-bottom: 30px;\n"]),a=r.c.h2.withConfig({displayName:"UI__SectionHeader",componentId:"sc-13hkhez-1"})(["\n  color: ",";\n  font-family: 'Staatliches';\n  letter-spacing: 2px;\n  font-style: italic;\n  margin-bottom: 25px;\n"],function(t){return t.theme.primaryColor}),i=Object(r.b)(["\n  padding: 1px;\n  color: ",";\n  font-weight: 600;\n"],function(t){return t.theme.contrastColor}),c=r.c.span.withConfig({displayName:"UI__SectionText",componentId:"sc-13hkhez-2"})(["\n  color: ",";\n  font-family: 'Aleo';\n  letter-spacing: 3px;\n  line-height: 34px;\n  font-size: 30px;\n  font-weight: 500;\n  margin-top: 10px;\n  margin-bottom: 5px;\n"],function(t){return t.theme.secondaryFontColor}),l=Object(r.c)(c).withConfig({displayName:"UI__SectionKeywordText",componentId:"sc-13hkhez-3"})(["\n  ","\n  line-height: 25px;\n"],i),u=(Object(r.c)(l).withConfig({displayName:"UI__SectionTextLargeMeta",componentId:"sc-13hkhez-4"})(["\n  color: ",";\n  font-size: 50px;\n  line-height: 52px;\n"],function(t){return t.theme.secondaryFontColor}),Object(r.c)(c).withConfig({displayName:"UI__SectionTextLarge",componentId:"sc-13hkhez-5"})(["\n  color: ",";\n  font-size: 50px;\n  line-height: 52px;\n"],function(t){return t.theme.contrastColor})),d=r.c.a.withConfig({displayName:"UI__SectionKeywordLink",componentId:"sc-13hkhez-6"})(["\n  ","\n  text-decoration: underline;\n"],i),s=r.c.a.withConfig({displayName:"UI__SectionKeywordIconLink",componentId:"sc-13hkhez-7"})(["\n  ","\n"],i),p=r.c.span.withConfig({displayName:"UI__SectionMetaText",componentId:"sc-13hkhez-8"})(["\n  color: ",";\n  font-size: 23px;\n  font-weight: 500;\n  vertical-align: middle;\n  display: flex;\n  align-items: center;\n"],function(t){return t.theme.secondaryFontColor}),f=r.c.span.withConfig({displayName:"UI__InlineButton",componentId:"sc-13hkhez-9"})(["\n  padding: 5px;\n  color: ",";\n  font-family: 'Staatliches';\n  font-size: 12px;\n  letter-spacing: 3px;\n  font-weight: 300;\n  vertical-align: middle;\n  cursor: pointer;\n  /* border-style: solid; */\n  /* border-width: 2px; */\n  /* border-color: ","; */\n"],function(t){return t.theme.primaryColor},function(t){return t.theme.primaryColor})},187:function(t){t.exports={data:{site:{siteMetadata:{title:"Tyler Bainbridge"}}}}},188:function(t,n,e){"use strict";e.r(n);e(32);var r=e(0),o=e.n(r),a=e(4),i=e.n(a),c=e(62),l=e(2),u=function(t){var n=t.location,e=l.default.getResourcesForPathnameSync(n.pathname);return o.a.createElement(c.a,Object.assign({location:n,pageResources:e},e.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},n.default=u},189:function(t,n,e){},190:function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"c",function(){return o}),e.d(n,"b",function(){return a});var r={primaryColor:"#F9CE6D",lightGreyColor:"#f2f2f2"},o={backgroundColor:"#FFF",primaryFontColor:"#1D1D20",secondaryFontColor:"#808080",contrastColor:"#000"},a={backgroundColor:"#1D1D20",primaryFontColor:"#FFF",secondaryFontColor:"#d9d9d9",contrastColor:"#FFF"}},191:function(t){t.exports={data:{site:{siteMetadata:{title:"Tyler Bainbridge",description:"Portfolio",author:"Tyler Bainbridge"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-jsx-046ac1da9180769fc9b6.js.map