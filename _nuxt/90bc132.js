(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{312:function(e,t,n){var content=n(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(84).default)("bb881c80",content,!0,{sourceMap:!1})},317:function(e,t,n){"use strict";n(312)},318:function(e,t,n){var r=n(83)(!1);r.push([e.i,".container[data-v-4e3be4fe]{display:flex;justify-content:center;align-content:center;margin:10px}a[data-v-4e3be4fe]:link{color:#000}a[data-v-4e3be4fe]:link,a[data-v-4e3be4fe]:visited{background-color:transparent}a[data-v-4e3be4fe]:visited{color:grey}.link-container[data-v-4e3be4fe]{display:flex}.link-container .date-label[data-v-4e3be4fe]{margin:0 0 20px 10px;padding:5px;background-color:#b3e2fd;color:#000;text-decoration:none;border-radius:10px;font-size:14px}li[data-v-4e3be4fe]::marker{color:#003cff}",""]),e.exports=r},337:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(67),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,t.next=3,n("articles").where({publish:!0}).fetch();case 3:return r=t.sent,t.abrupt("return",{articles:r});case 5:case"end":return t.stop()}}),t)})))()},methods:{formatDate:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=(n(317),n(68)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("ul",e._l(e.articles,(function(article){return n("li",{key:article.slug},[n("div",{staticClass:"link-container"},[n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:article.slug}}}},[n("div",[n("h3",[e._v(e._s(article.title))])]),e._v(" "),n("br")]),e._v(" "),n("p",{staticClass:"date-label"},[e._v(e._s(e.formatDate(article.updatedAt)))])],1)])})),0)])}),[],!1,null,"4e3be4fe",null);t.default=component.exports}}]);