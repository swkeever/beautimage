(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(e,t,a){e.exports=a(368)},211:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(29),o=a.n(s),c=a(16),i=(a(211),a(40)),u=a(42),l=a(388),m=a(384),d=a(17),h=a.n(d),p=a(27),g=a(383),f=a(39),b=a(380),E=a(376),v=a(58),O=a(6),w=a.n(O),y=(a(101),w.a.shape({duration:w.a.number.isRequired,smooth:w.a.string.isRequired}),w.a.func,w.a.bool,w.a.number,Object(u.e)(function(e){var t=e.setSearchQuery,a=e.nightMode,s=e.setNightMode,o=e.columns,i=e.setColumns,u=e.loading,m=e.history,d=e.scrollOptions,O=Object(r.useState)(""),w=Object(c.a)(O,2),y=w[0],j=w[1],M=function(){var e=Object(p.a)(h.a.mark(function e(a){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),v.animateScroll.scrollToTop(d),t(y),m.push("/");case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(h.a.mark(function e(){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:j(""),t(""),m.push("/");case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),q="/"===m.location.pathname?function(){return v.animateScroll.scrollToTop(d)}:R;return n.a.createElement(g.a,{borderless:!0,inverted:a,fixed:"top"},n.a.createElement(g.a.Item,{header:!0,onClick:q},n.a.createElement(f.a,{className:"primary",name:"image"}),n.a.createElement(l.a,{minWidth:l.a.onlyMobile.maxWidth},"beaut",n.a.createElement("span",{className:"primary"},"image"))),n.a.createElement(l.a,{minWidth:l.a.onlyMobile.maxWidth},n.a.createElement(g.a,{secondary:!0},n.a.createElement(g.a.Item,{active:1===o,onClick:function(){return i(1)}},n.a.createElement(f.a,{name:"list layout"})),n.a.createElement(g.a.Item,{active:2===o,onClick:function(){return i(2)}},n.a.createElement(f.a,{name:"block layout"})),n.a.createElement(g.a.Item,{active:3===o,onClick:function(){return i(3)}},n.a.createElement(f.a,{name:"grid layout"})))),n.a.createElement(g.a.Item,null,n.a.createElement(b.a,{onSubmit:M},n.a.createElement(E.a,{id:"search-input",loading:u,transparent:!0,size:"small",type:"text",onChange:function(e){var t=e.target;return j(t.value)},value:y,placeholder:"search...",icon:n.a.createElement(f.a,{inverted:a,name:"search",link:!0,onClick:M})}))),n.a.createElement(g.a.Item,{position:"right"},n.a.createElement("a",{href:"https://www.github.com/swkeever/beautimage",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(f.a,{name:"code"}))),n.a.createElement(g.a.Item,{active:a,onClick:function(){return s(!a)}},n.a.createElement(f.a,{name:"moon"})))})),j=a(378),M=a(385),R=a(379),q=a(387),k=a(192),x=a.n(k),_=(w.a.oneOfType([w.a.arrayOf(w.a.node),w.a.node]),w.a.any),P=w.a.arrayOf,C=w.a.bool,S=w.a.number,I=w.a.shape,T=w.a.string,N=I({accepted_tos:C,bio:T,first_name:T,id:T.isRequired,instagram_username:T,last_name:T,links:I({followers:T.isRequired,following:T.isRequired,html:T.isRequired,likes:T.isRequired,photos:T.isRequired,portfolio:T.isRequired,self:T.isRequired}).isRequired,location:T,name:T.isRequired,portfolio_url:T,profile_image:I({large:T.isRequired,medium:T.isRequired,small:T.isRequired}).isRequired,total_collections:S.isRequired,total_likes:S.isRequired,total_photos:S.isRequired,twitter_username:T,updated_at:T.isRequired,username:T.isRequired}),L=(I({alt_description:T,categories:P(T).isRequired,color:T.isRequired,created_at:T.isRequired,current_user_collections:P(_).isRequired,description:T,height:S.isRequired,id:T.isRequired,liked_by_user:C.isRequired,likes:S.isRequired,links:I({download:T.isRequired,download_location:T.isRequired,html:T.isRequired,self:T.isRequired}).isRequired,sponsorship:I({impressions_id:T,sponsor:N.isRequired,tagline:T.isRequired}),updated_at:T.isRequired,urls:I({full:T.isRequired,raw:T.isRequired,regular:T.isRequired,small:T.isRequired,thumb:T.isRequired}).isRequired,user:N.isRequired,width:S.isRequired}),Object(u.e)(function(e){var t=e.children,a=e.photos,r=e.getMorePhotos,s=e.hasMore,o=e.nightMode,c=e.history;return n.a.createElement(x.a,{dataLength:a.length,next:r,scrollableTarget:"iamge-gallery",hasMore:s,endMessage:n.a.createElement(M.a,{inverted:o,textAlign:"center"},"You have seen it all!"," ",n.a.createElement("span",{role:"img","aria-label":"smiley"},"\ud83d\ude04"),"/"===c.location.pathname?null:n.a.createElement(M.a.Subheader,null,"Go"," ",n.a.createElement(i.b,{to:"/"},"home"),"?"))},t)})),A=a(377),D=function(e){var t=e.nightMode,a=e.loading;return n.a.createElement(A.a,{inverted:t,active:a,size:"big",style:{position:"fixed",top:"95%",left:"50%"}})},H=a(196),z=function(e){var t=e.photo;return n.a.createElement(i.b,{to:"/photos/".concat(t.id)},n.a.createElement(H.a,{srcSet:"".concat(t.urls.thumb," 600w, \n            ").concat(t.urls.small," 1000w, \n            ").concat(t.urls.regular," 1500w"),src:t.urls.thumb,alt:t.alt_description,size:"medium",style:{width:"100%",paddingBottom:"0.33rem"}}))},W=function(e){var t=e.photos,a=e.getMorePhotos,r=e.nightMode,s=e.loading,o=e.columns,c=e.hasMore,i=function(e){for(var a=[],r=e;r<t.length;r+=o){var s=t[r];a.push(n.a.createElement(z,{key:s.id,photo:s}))}return n.a.createElement(q.a.Column,{key:"col-".concat(e)},a)},u=n.a.createElement(q.a,{stackable:!0,id:"image-gallery",centered:!0,columns:o,padded:!0},function(){for(var e=[],t=0;t<o;t+=1)e.push(i(t));return e}());return n.a.createElement("div",null,n.a.createElement(L,{nightMode:r,hasMore:c,photos:t,getMorePhotos:a},u),n.a.createElement(D,{nightMode:r,loading:s}))};W.defaultProps={hasMore:!1};var Q=W,B=a(68),J=a.n(B),U="https://api.unsplash.com",F=function(){return{Authorization:"Client-ID ".concat("9e84e0b7fe5d504ff7d78e104977563f463eae55400eb91b3149a3842e4baf2b")}},G={getPhotos:function(){var e=Object(p.a)(h.a.mark(function e(t){var a,r,n,s;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=F(),r={page:t,per_page:12},n="".concat(U,"/photos"),e.next=5,J.a.get(n,{headers:a,params:r});case 5:return s=e.sent,e.abrupt("return",s.data);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getPhotoById:function(){var e=Object(p.a)(h.a.mark(function e(t){var a,r,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=F(),r="".concat(U,"/photos/").concat(t),e.next=4,J.a.get(r,{headers:a});case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),searchPhotos:function(){var e=Object(p.a)(h.a.mark(function e(t,a){var r,n,s,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=F(),n={page:t,per_page:12,query:a},s="".concat(U,"/search/photos"),e.next=5,J.a.get(s,{headers:r,params:n});case 5:return o=e.sent,e.abrupt("return",o.data.results);case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),getUserPhotos:function(){var e=Object(p.a)(h.a.mark(function e(t,a){var r,n,s,o;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=F(),n={page:t,per_page:12},s="".concat(U,"/users/").concat(a,"/photos"),e.next=5,J.a.get(s,{headers:r,params:n});case 5:return o=e.sent,e.abrupt("return",o.data);case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},Y=function(){var e=Object(p.a)(h.a.mark(function e(t){var a,r,n,s,o,c,i,u,l,m,d,p,g;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.isInit,r=t.actionType,n=t.actionData,s=t.photos,o=t.currentPage,c=t.setCurrentPage,i=t.setPhotos,u=t.setLoading,l=t.setMessage,m=t.setHasMore,u(!0),d=a?1:o,p=a?[]:s,e.prev=4,e.t0=r,e.next="photos"===e.t0?8:"search"===e.t0?12:"user"===e.t0?16:20;break;case 8:return e.next=10,G.getPhotos(d);case 10:return g=e.sent,e.abrupt("break",21);case 12:return e.next=14,G.searchPhotos(d,n);case 14:return g=e.sent,e.abrupt("break",21);case 16:return e.next=18,G.getUserPhotos(d,n);case 18:return g=e.sent,e.abrupt("break",21);case 20:throw new Error("invalid type ".concat(r));case 21:m(12===g.length),i(p.concat(g)),c(d+1),e.next=30;break;case 26:e.prev=26,e.t1=e.catch(4),l({type:"error",header:"Error",content:e.t1.message}),m(!1);case 30:u(!1);case 31:case"end":return e.stop()}},e,null,[[4,26]])}));return function(t){return e.apply(this,arguments)}}(),K=function(e){var t=e.nightMode,a=e.columns,s=e.searchQuery,o=Object(r.useState)([]),i=Object(c.a)(o,2),u=i[0],l=i[1],m=Object(r.useState)(1),d=Object(c.a)(m,2),h=d[0],p=d[1],g=Object(r.useState)(!1),b=Object(c.a)(g,2),E=b[0],v=b[1],O=Object(r.useState)(!1),w=Object(c.a)(O,2),y=w[0],q=w[1],k=Object(r.useContext)(ce),x=Object(c.a)(k,2)[1];if(Object(r.useEffect)(function(){Y({isInit:!0,actionType:s?"search":"photos",actionData:s||null,photos:u,currentPage:h,setCurrentPage:p,setPhotos:l,setLoading:v,setMessage:x,setHasMore:q})},[s]),!u.length)return null;return n.a.createElement(j.a,{className:"page"},n.a.createElement(M.a,{inverted:t,as:"h1",textAlign:"center",icon:!0},n.a.createElement(f.a,{name:"image"}),"beaut",n.a.createElement("span",{className:"primary"},"image"),n.a.createElement(M.a.Subheader,null,"a simple way to find beautiful images.")),n.a.createElement(R.a,{inverted:t}),n.a.createElement(Q,{hasMore:y,photos:u,getMorePhotos:function(){return Y({isInit:!1,actionType:s?"search":"photos",actionData:s||null,photos:u,currentPage:h,setCurrentPage:p,setPhotos:l,setLoading:v,setMessage:x,setHasMore:q})},nightMode:t,loading:E,columns:a}))},V=a(193),X=a.n(V),Z=Object(u.e)(function(e){var t=e.photoId,a=e.nightMode,s=e.columns,o=e.scrollOptions,i=e.history,u=Object(r.useState)([]),l=Object(c.a)(u,2),m=l[0],d=l[1],b=Object(r.useState)(1),E=Object(c.a)(b,2),O=E[0],w=E[1],y=Object(r.useState)(!1),q=Object(c.a)(y,2),k=q[0],x=q[1],_=Object(r.useState)(null),P=Object(c.a)(_,2),C=P[0],S=P[1],I=Object(r.useState)(!1),T=Object(c.a)(I,2),N=T[0],L=T[1],D=Object(r.useContext)(ce),z=Object(c.a)(D,2)[1],W=Object(r.useState)(""),B=Object(c.a)(W,2),J=B[0],U=B[1];Object(r.useEffect)(function(){!function(){var e=Object(p.a)(h.a.mark(function e(){var a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),v.animateScroll.scrollToTop(o),e.prev=2,e.next=5,G.getPhotoById(t);case 5:a=e.sent,r=a.tags.slice(0,Math.min(5,a.tags.length)).map(function(e){return e.title}).filter(function(e){return e.length>3}).join(" "),U(r),S(a),Y({isInit:!0,actionType:"search",actionData:r,photos:m,currentPage:O,setPhotos:d,setCurrentPage:w,setLoading:x,setMessage:z,setHasMore:L}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),z({type:"error",header:"Error",content:e.t0.message});case 15:x(!1);case 16:case"end":return e.stop()}},e,null,[[2,12]])}));return function(){return e.apply(this,arguments)}}()()},[t]);if(!C)return n.a.createElement(A.a,null);var F=m.filter(function(e){return e.id!==t}),K=function(e){var t=X.a.get(C,"user.".concat(e,"_username"));return t?n.a.createElement(g.a.Item,{link:!0},n.a.createElement("a",{href:"https://www.".concat(e,".com/").concat(t)},n.a.createElement(f.a,{name:e}),e)):null};return n.a.createElement(j.a,{className:"page"},n.a.createElement(M.a,{textAlign:"left",inverted:a,as:"h2"},function(){var e=C.story.title;return e||(e=C.alt_description)||(e="Photo ".concat(C.id)),e.toLowerCase()}()),n.a.createElement(g.a,{inverted:a,borderless:!0,stackable:!0,secondary:!0,fluid:!0},n.a.createElement(g.a.Item,{header:!0,link:!0,onClick:function(){v.animateScroll.scrollToTop(o),i.push("/users/".concat(C.user.username))}},n.a.createElement(H.a,{style:{paddingRight:"3px"},avatar:!0,src:C.user.profile_image.small}),C.user.first_name.toLowerCase(),"\xa0",n.a.createElement("span",{className:"primary"},C.user.last_name?C.user.last_name.toLowerCase():"")),K("instagram"),K("twitter"),n.a.createElement(g.a.Item,{position:"right",link:!0},n.a.createElement("a",{href:C.links.download,download:!0},n.a.createElement(f.a,{name:"download"}),"download"))),n.a.createElement(H.a,{size:"large",centered:!0,bordered:!0,src:C.urls.thumb,srcSet:"".concat(C.urls.thumb," 200w, \n                      ").concat(C.urls.small," 400w, \n                      ").concat(C.urls.regular," 1080w")}),n.a.createElement(R.a,null),n.a.createElement(M.a,{inverted:a,as:"h2"},"related"," ",n.a.createElement("span",{className:"primary"},"images")),n.a.createElement(Q,{photos:F,getMorePhotos:function(){return Y({isInit:!1,actionType:"search",actionData:J,photos:m,currentPage:O,setPhotos:d,setCurrentPage:w,setLoading:x,setMessage:z,setHasMore:L})},nightMode:a,loading:k,columns:s,photoId:t,hasMore:N}))}),$=a(194),ee=a(382),te=a(195),ae={top:"4rem",width:"100%",marginBottom:"1rem",position:"sticky"},re=function(){var e=Object(r.useContext)(ce),t=Object(c.a)(e,2),a=t[0],s=t[1];setTimeout(function(){s(null)},1e4);var o=a?Object($.a)({},a.type,!0):"";return n.a.createElement(te.AnimateOnChange,{style:ae,animationIn:"bounceIn",animationOut:"fadeOut"},a?n.a.createElement(n.a.Fragment,null,n.a.createElement(ee.a,o,n.a.createElement(ee.a.Header,null,a.header),n.a.createElement("p",null,a.content))):null)},ne=a(381),se=function(e){var t=e.username,a=e.nightMode,s=e.columns,o=Object(r.useState)([]),i=Object(c.a)(o,2),u=i[0],l=i[1],m=Object(r.useState)(!1),d=Object(c.a)(m,2),h=d[0],p=d[1],g=Object(r.useState)(!1),b=Object(c.a)(g,2),E=b[0],v=b[1],O=Object(r.useState)(1),w=Object(c.a)(O,2),y=w[0],R=w[1],q=Object(r.useContext)(ce),k=Object(c.a)(q,2)[1];Object(r.useEffect)(function(){Y({isInit:!0,actionType:"user",actionData:t,photos:u,setPhotos:l,currentPage:y,setCurrentPage:R,setLoading:p,setMessage:k,setHasMore:v})},[t]);var x=function(e){var t=e.url,a=e.iconName;return e.isAvailable?n.a.createElement(ne.a.Item,null,n.a.createElement("a",{href:t},n.a.createElement(f.a,{name:a,link:!0,size:"large"}))):null};if(!u.length)return n.a.createElement(A.a,null);var _=u[0].user;return n.a.createElement(j.a,{className:"page"},n.a.createElement(M.a,{inverted:a,textAlign:"center",as:"h1"},n.a.createElement(H.a,{style:{marginRight:"0.5rem"},centered:!0,circular:!0,src:_.profile_image.large}),_.first_name.toLowerCase(),"\xa0",n.a.createElement("span",{className:"primary"},_.last_name?_.last_name.toLowerCase():"")),n.a.createElement(j.a,{style:{margin:"1.5rem 0"},textAlign:"center"},n.a.createElement(ne.a,{inverted:a,horizontal:!0},x({isAvailable:!!_.portfolio_url,iconName:"briefcase",url:_.portfolio_url}),x({isAvailable:!!_.instagram_username,iconName:"instagram",url:"https://www.instagram.com/".concat(_.instagram_username)}),x({isAvailable:!!_.twitter_username,iconName:"twitter",url:"https://www.twitter.com/".concat(_.twitter_username)}))),n.a.createElement(Q,{photos:u,getMorePhotos:function(){return Y({isInit:!1,actionType:"user",actionData:t,photos:u,setPhotos:l,currentPage:y,setCurrentPage:R,setLoading:p,setMessage:k,setHasMore:v})},nightMode:a,loading:h,columns:s,hasMore:E}))},oe={duration:1e3,smooth:"easeInOutQuint"},ce=n.a.createContext(),ie=function(){var e=Object(r.useState)(function(){var e=window.innerWidth;return e<=l.a.onlyMobile.maxWidth?1:e<=l.a.onlyTablet.maxWidth?2:3}()),t=Object(c.a)(e,2),a=t[0],s=t[1],o=Object(r.useState)(!1),d=Object(c.a)(o,2),h=d[0],p=d[1],g=Object(r.useState)(""),f=Object(c.a)(g,2),b=f[0],E=f[1],v=Object(r.useState)(null),O=Object(c.a)(v,2),w=O[0],j=O[1];return n.a.createElement(ce.Provider,{value:[w,j]},n.a.createElement(m.a,{inverted:h},n.a.createElement(i.a,null,n.a.createElement(re,null),n.a.createElement(y,{searchQuery:b,setSearchQuery:E,nightMode:h,setNightMode:p,columns:a,setColumns:s,scrollOptions:oe}),n.a.createElement(u.a,{exact:!0,path:"/",render:function(){return n.a.createElement(K,{nightMode:h,columns:a,searchQuery:b})}}),n.a.createElement(u.a,{exact:!0,path:"/photos/:id",render:function(e){var t=e.match;return n.a.createElement(Z,{photoId:t.params.id,nightMode:h,columns:a,scrollOptions:oe})}}),n.a.createElement(u.a,{exact:!0,path:"/users/:username",render:function(e){var t=e.match;return n.a.createElement(se,{username:t.params.username,nightMode:h,columns:a})}}))))};o.a.render(n.a.createElement(ie,null),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.434f097d.chunk.js.map