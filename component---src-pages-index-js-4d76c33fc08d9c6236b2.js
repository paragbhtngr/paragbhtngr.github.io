"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,l){var a=l(7294),n=l(1883);l(4108);t.Z=e=>{var t,l;let{blueBg:r}=e;const s=(0,n.useStaticQuery)("3257411868"),i=null===(t=s.site.siteMetadata)||void 0===t?void 0:t.author;null===(l=s.site.siteMetadata)||void 0===l||l.social;return a.createElement("div",{className:r?"bg-sky-700":""},a.createElement("div",{className:"bio"},(null==i?void 0:i.name)&&a.createElement("p",{className:r?"text-white":"text-black"},"Written by ",i.name,". ",(null==i?void 0:i.summary)||null)))}},4108:function(e,t,l){var a=l(7294);t.Z=function(e){let{fullWidth:t,className:l,children:n}=e;return a.createElement("div",{className:"w-full px-4 lg:px-10 "+(t?"":"max-w-[42rem] xl:max-w-[80rem]")+" "+l+" m-auto"},n)}},6558:function(e,t,l){l.r(t),l.d(t,{Head:function(){return c}});var a=l(7294),n=l(1883),r=l(8771),s=l(8678),i=l(9357),m=l(4108);t.default=e=>{var t;let{data:l,location:i}=e;const c=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",o=l.allMdx.nodes;return 0===o.length?a.createElement(s.Z,{location:i,title:c},a.createElement(r.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(s.Z,{location:i,title:c},a.createElement(m.Z,null,a.createElement("section",{className:"py-24"},a.createElement("h1",{className:"text-3xl md:text-6xl mb-10 fade-in-up"},"Hi, I'm Parag"),a.createElement("p",{className:"text-2xl fade-in-up"},"I'm a Full-Stack Developer - specialising in Front-end development with React. ",a.createElement(n.Link,{to:"/resume"},"Check out my resume."),a.createElement("br",null),a.createElement("br",null)," I draw and design things occasionally."," ",a.createElement(n.Link,{to:"/portfolio"},"Here's some stuff I'm proud of."),a.createElement("br",null),a.createElement("br",null)," I think a lot about life, work, and what I've learned on my journey so far."," ",a.createElement(n.Link,{to:"/blog"},"Here are some things you might find interesting")))),a.createElement("section",{className:"bg-gradient-to-t from-[#025c8e] to-[#0369a1]"},a.createElement(m.Z,null,a.createElement("h2",{className:"text-white pt-16 mb-0 fade-in-up"},"Some stuff I've written recently"," "),a.createElement("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 pb-10"},o.map(((e,t)=>{const l=e.frontmatter.title||e.frontmatter.slug;return a.createElement("div",{key:e.frontmatter.slug,className:"fade-in-up",style:{animationDelay:.05*t+"s"}},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",{className:"text-base text-white mb-0"},a.createElement(n.Link,{to:e.frontmatter.slug,itemProp:"url"},l)),a.createElement("small",{className:"text-sky-200"},a.createElement("span",{className:"inline-block"},e.frontmatter.date),e.frontmatter.categories?a.createElement(a.Fragment,null,a.createElement("div",{className:"rounded inline-block bg-sky-200 w-1 h-1 mx-1 mb-0.5"}),a.createElement("span",{className:"inline-block"},e.frontmatter.categories.join([", "]))):null)),a.createElement("p",{className:"text-sm text-white",dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})))}))))))};const c=()=>a.createElement(i.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-4d76c33fc08d9c6236b2.js.map