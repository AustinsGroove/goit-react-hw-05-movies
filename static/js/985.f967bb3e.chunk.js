"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[985],{713:function(n,e,r){r.d(e,{$f:function(){return s},M1:function(){return f},TP:function(){return p},rj:function(){return i},tx:function(){return l}});var t=r(861),c=r(757),a=r.n(c),u=r(14),o="en-US",i=function(){var n=(0,t.Z)(a().mark((function n(){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"day",n.prev=1,n.next=4,(0,u.B)("trending/movie/".concat("day","?language=").concat(o));case 4:return e=n.sent,r=e.data,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return!1,1,n.prev=2,n.next=5,(0,u.B)("search/movie?query=".concat(e,"&include_adult=").concat(false,"&language=").concat(o,"&page=").concat(1));case 5:return r=n.sent,t=r.data,n.abrupt("return",t);case 10:n.prev=10,n.t0=n.catch(2),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.B)("movie/".concat(e,"?language=").concat(o));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.B)("movie/".concat(e,"/credits?").concat(o));case 3:return r=n.sent,t=r.data,n.abrupt("return",t);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return 1,n.prev=1,n.next=4,(0,u.B)("movie/".concat(e,"/reviews?").concat(o,"&page=").concat(1));case 4:return r=n.sent,t=r.data,n.abrupt("return",t);case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},14:function(n,e,r){r.d(e,{B:function(){return a},k:function(){return c}});var t=r(294),c="https://image.tmdb.org/t/p/w440_and_h660_face",a=t.Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjlhOGY4ODJlN2VhZTYyMTdiMmIxMzJkYzlmMjVmNyIsInN1YiI6IjY1ODJlNDI3ZjE3NTljM2ZhMjEwY2I2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k6GcLi7AwoXQH8XXcYQTD10rkoTo49Caw6O84bZ_YnU"}})},985:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t=r(861),c=r(439),a=r(757),u=r.n(a),o=r(791),i=r(689),s=r(713),p=r(924),f=(0,p.ZP)("div")((function(){return{margin:"20px 30px 20px 20px",backgroundColor:"#e0ddecc5",borderRadius:"5px",padding:"10px 30px"}})),l=r(184),d=function(n){var e=n.review,r=e.author,t=e.content;return(0,l.jsxs)(f,{children:[(0,l.jsxs)("h3",{children:["Author: ",r]}),(0,l.jsx)("p",{children:t})]})},h=(0,p.ZP)("div")((function(){return{".notFoundMessage":{margin:"20px 30px 20px 20px",backgroundColor:"#e0ddecc5",borderRadius:"5px",padding:"10px 30px"}}})),v=function(){var n=(0,i.UO)().movieId,e=(0,o.useState)([]),r=(0,c.Z)(e,2),a=r[0],p=r[1];return(0,o.useEffect)((function(){if(n){var e=function(){var e=(0,t.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.tx)(n);case 2:r=e.sent,p(r.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[n]),(0,l.jsxs)(h,{children:[0===a.length&&(0,l.jsx)("p",{className:"notFoundMessage",children:"We dont have any reviews for this movie."}),(0,l.jsx)("ul",{children:a.map((function(n){return(0,l.jsx)("li",{children:(0,l.jsx)(d,{review:n})},n.id)}))})]})}}}]);
//# sourceMappingURL=985.f967bb3e.chunk.js.map