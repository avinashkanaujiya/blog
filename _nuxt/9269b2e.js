(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{275:function(t,e,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(112).default)("d667e834",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";n(275)},281:function(t,e,n){var r=n(111)(!1);r.push([t.i,'body[data-v-411fb679]{background-color:#fffff8;box-sizing:border-box}.container[data-v-411fb679]{position:absolute;font-family:"Times New Roman";display:flex;width:100vw;flex-direction:column}a[data-v-411fb679]:link{color:#111}a[data-v-411fb679]:link,a[data-v-411fb679]:visited{background-color:transparent}a[data-v-411fb679]:visited{color:grey}.link-container[data-v-411fb679]{padding:20px 0 0;max-width:600px}',""]),t.exports=r},302:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(47),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").sortBy("updatedAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return console.log(t),new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=(n(280),n(48)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.articles,(function(article){return n("div",{key:article.slug,staticClass:"link-container"},[n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[n("div",[t._v(t._s(article.title))])])],1)})),0)}),[],!1,null,"411fb679",null);e.default=component.exports}}]);