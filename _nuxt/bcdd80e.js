(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{275:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("2b9eb6f9",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(275)},281:function(t,e,n){var r=n(111)(!1);r.push([t.i,'body[data-v-d1a8c730]{background-color:#fffff8}.container[data-v-d1a8c730]{font-family:"Times New Roman";display:flex;justify-content:center;align-content:center}a[data-v-d1a8c730]:link{color:#111}a[data-v-d1a8c730]:link,a[data-v-d1a8c730]:visited{background-color:transparent}a[data-v-d1a8c730]:visited{color:grey}.link-container[data-v-d1a8c730]{display:flex;max-width:600px;min-height:50px;align-items:center}.link-container .date-label[data-v-d1a8c730]{margin:0 0 20px 10px;padding:5px;background-color:#b3e2fd;color:#111;text-decoration:none;border-radius:10px;font-size:14px}li[data-v-d1a8c730]::marker{color:#003cff}',""]),t.exports=r},302:function(t,e,n){"use strict";n.r(e);var r=n(9),c=(n(47),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").where({publish:!0}).sortBy("updatedAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return console.log(t),new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=(n(280),n(48)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("ul",t._l(t.articles,(function(article){return n("li",{key:article.slug},[n("div",{staticClass:"link-container"},[n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[n("div",[n("h3",[t._v(t._s(article.title))])]),t._v(" "),n("br")]),t._v(" "),n("p",{staticClass:"date-label"},[t._v(t._s(t.formatDate(article.updatedAt)))])],1)])})),0)])}),[],!1,null,"d1a8c730",null);e.default=component.exports}}]);