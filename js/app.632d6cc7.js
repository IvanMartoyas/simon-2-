(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/simon-2/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"20af":function(t,e,n){t.exports=n.p+"media/1.aa68b25c.mp3"},"347b":function(t,e,n){"use strict";var i=n("7c56"),a=n.n(i);a.a},3567:function(t,e,n){"use strict";var i=n("cd0b"),a=n.n(i);a.a},3651:function(t,e,n){t.exports=n.p+"media/2.55d65c90.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n(t.layout,{tag:"component"},[n("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Header"),n("main",[n("router-view")],1),n("Footer")],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("nav",[n("ul",[n("router-link",{staticClass:"link",attrs:{to:"/home"}},[t._v("Главная")]),n("router-link",{staticClass:"link",attrs:{to:"/game"}},[t._v("Игра")])],1)])])},l=[],u=(n("9054"),n("2877")),f={},d=Object(u["a"])(f,c,l,!1,null,"67e26dea",null),p=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[t._v(" Мартояс Иван 2022 ")])},v=[],m=(n("6d4d"),{}),_=Object(u["a"])(m,h,v,!1,null,"f8bfc096",null),b=_.exports,y={name:"App",components:{Header:p,Footer:b}},g=y,w=(n("347b"),Object(u["a"])(g,o,s,!1,null,"16175118",null)),$=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Header"),n("div",{staticClass:"wrapper_inner"},[n("main",[n("router-view")],1),t._m(0)]),n("Footer")],1)},O=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",[n("p",[t._v("Версия игры 2.0")])])}],C={name:"App",components:{Header:p,Footer:b}},x=C,j=(n("3567"),Object(u["a"])(x,k,O,!1,null,"5b20ae16",null)),E=j.exports,S={name:"App",components:{FullWidth:$,Default:E},data:function(){return{}},computed:{layout:function(){return this.$route.meta.layout||"Default"}}},T=S,G=(n("cf25"),Object(u["a"])(T,a,r,!1,null,null,null)),F=G.exports,P=n("8c4f"),H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("div",[n("p",[t._v("Сложность")]),n("form",{staticClass:"radio"},[n("div",{staticClass:"radio__input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.difficlty,expression:"difficlty"}],attrs:{name:"radio",type:"radio",id:"difficlt1",value:"1"},domProps:{checked:t._q(t.difficlty,"1")},on:{change:function(e){t.difficlty="1"}}}),n("label",{attrs:{for:"difficlt1"}},[t._v("Легкий")])]),n("div",{staticClass:"radio__input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.difficlty,expression:"difficlty"}],attrs:{name:"radio",type:"radio",id:"difficlt2",value:"2"},domProps:{checked:t._q(t.difficlty,"2")},on:{change:function(e){t.difficlty="2"}}}),n("label",{attrs:{for:"difficlt2"}},[t._v("Средний")])]),n("div",{staticClass:"radio__input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.difficlty,expression:"difficlty"}],attrs:{name:"radio",type:"radio",id:"difficlt3",value:"3"},domProps:{checked:t._q(t.difficlty,"3")},on:{change:function(e){t.difficlty="3"}}}),n("label",{attrs:{for:"difficlt3"}},[t._v("Сложный")])])])]),n("br"),n("div",[n("div",{staticClass:"panel top-left-panel",class:{hovElloy:t.isElloy},on:{click:function(e){return t.button(1)}}}),n("div",{staticClass:"panel top-right-panel",class:{hovGreen:t.ishovGreen},on:{click:function(e){return t.button(2)}}})]),n("div",{staticClass:"buttons_bottom"},[n("div",{staticClass:"panel bottom-left-panel",class:{hovBlue:t.ishovBlue},on:{click:function(e){return t.button(4)}}}),n("div",{staticClass:"panel bottom-right-panel",class:{hovRed:t.ishovRed},on:{click:function(e){return t.button(3)}}})]),n("div",{staticClass:"center"},[n("div",{staticClass:"game_panel"},[n("h1",{staticClass:"title"},[t._v("Simon")]),n("div",{staticClass:"round"},[t._v("Level "+t._s(t.seriesCount))]),n("div",{staticClass:"start",on:{click:t.startGame}},[t._v("Старт")]),t.gameOver?n("div",{staticClass:"gameOver"},[t._v("Конец игры")]):t._e()])])])},I=[],A={name:"Game",data:function(){return{series:[],count:0,allowInput:!1,seriesCount:1,gameOver:!1,isElloy:!1,ishovGreen:!1,ishovBlue:!1,ishovRed:!1,difficlty:1,time:1500}},watch:{difficlty:function(){1==this.difficlty?this.time=1500:2==this.difficlty?this.time=1e3:this.time=400}},methods:{button:function(t){var e=this;this.allowInput&&(this.makeSound(t),t===this.series[this.count]?(this.count++,this.count==this.series.length&&(this.seriesCount+=1,this.count=0,this.series=[],this.playSeries())):(this.allowInput=!1,this.gameOver=!0,setTimeout((function(){e.gameOver=!1}),4e3)))},reset:function(){this.count=0,this.series=[],this.allowInput=!1,this.seriesCount=1,this.gameOver=!1},resetHov:function(){this.isElloy=!1,this.ishovGreen=!1,this.ishovRed=!1,this.ishovBlue=!1},playSeries:function(){this.allowInput=!1;for(var t=0;t<this.seriesCount;t++)this.series.push(this.getRandomFloat());var e=this,n=0,i=setInterval((function(){switch(n>e.series.length&&clearInterval(i),e.resetHov(),e.makeSound(e.series[n]),e.series[n]){case 1:e.isElloy=!0;break;case 2:e.ishovGreen=!0;break;case 3:e.ishovRed=!0;break;case 4:e.ishovBlue=!0;break}n++}),this.time);this.allowInput=!0},startGame:function(){this.reset(),this.resetHov(),this.playSeries()},getRandomFloat:function(){return Math.floor(4*Math.random()+1)},makeSound:function(t){switch(t){case 1:this.$refs.audio.src=n("20af"),this.$refs.audio.pause(),this.$refs.audio.currentTime=0,this.$refs.audio.play();break;case 2:this.$refs.audio.src=n("3651"),this.$refs.audio.pause(),this.$refs.audio.currentTime=0,this.$refs.audio.play();break;case 3:this.$refs.audio.src=n("d88f"),this.$refs.audio.pause(),this.$refs.audio.currentTime=0,this.$refs.audio.play();break;case 4:this.$refs.audio.src=n("ea84"),this.$refs.audio.pause(),this.$refs.audio.currentTime=0,this.$refs.audio.play();break}}}},R=A,D=(n("657f"),Object(u["a"])(R,H,I,!1,null,"cd89b8d0",null)),M=D.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Оснонвая информация")]),n("ol",[n("li",{on:{click:function(e){t.component="WhatGaming"}}},[t._v("Как играть")]),n("li",{on:{click:function(e){t.component="TechnicalFeatures"}}},[t._v("Технические моменты")]),n("li",{on:{click:function(e){t.component="Technology"}}},[t._v("Технологии которые использовались при создании игры")])]),n("br"),n("hr"),n(t.component,{tag:"component"},[n("router-view")],1)],1)},W=[],q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Технические моменты")]),n("h3",[t._v("Стилистика")]),n("p",[t._v("Стили написаны на препроцессоре SASS")]),n("p",[t._v("Крупную стилистику вынес в отдельные файлы чтобы не засорять компоненты, импортирую их через @import ./assets/style/app_style.sass ")]),n("h3",[t._v("Layouts ")]),n("p",[t._v(" Для удобства поддержки компоненты разбил на лояуты они меняются динамически в зависимости от настроек заданных в роутере { path: '/home', component: Home, meta: {layout: 'Default'} }. В App.vue через computed принимаю значение выбранного в роутере лояута из meta. ")]),n("p",[t._v(" Чтобы можно было удобно подставлять один header на многие лояуты вынес header с footer в отдельную папку components/header-footer ")]),n("pre",[t._v("    computed: {\n        layout() {\n            return (this.$route.meta.layout || 'Default')\n        },\n    }\n\n")]),n("p",[t._v("Для вывода нужного компонента использую динамический компонент.")]),n("pre",[t._v('    <component :is="layout">\n        <router-view/>\n    </component>\n\n')])])}],J={},L=Object(u["a"])(J,q,N,!1,null,null,null),z=L.exports,K=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(" Технологии которые использовались при создании игры ")]),n("p",[t._v("html, SASS, js, vue js, vue-router")])])}],U={},V=Object(u["a"])(U,K,Q,!1,null,null,null),X=V.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Как играть")]),n("p",[n("b",[t._v("Симон говорит")]),t._v(" — это детская игра, в которой участвуют обычно от трёх человек. ")]),n("p",[t._v(" Суть игры в том, что она воспроизводит последовательность нажатий по 4 кнопкам которую надо повторить игроку. ")])])}],tt={},et=Object(u["a"])(tt,Y,Z,!1,null,null,null),nt=et.exports,it={name:"App",components:{TechnicalFeatures:z,Technology:X,WhatGaming:nt},data:function(){return{component:"WhatGaming"}}},at=it,rt=(n("6061"),Object(u["a"])(at,B,W,!1,null,"fb3f99c4",null)),ot=rt.exports,st=[{path:"/",component:ot,meta:{layout:"Default"}},{path:"/home",component:ot,meta:{layout:"Default"}},{path:"/game",component:M,meta:{layout:"Full-width"}}],ct=new P["a"]({routes:st}),lt=ct;i["a"].config.productionTip=!1,i["a"].use(P["a"]),new i["a"]({render:function(t){return t(F)},router:lt}).$mount("#app")},"59f6":function(t,e,n){},6061:function(t,e,n){"use strict";var i=n("8fd8"),a=n.n(i);a.a},"657f":function(t,e,n){"use strict";var i=n("59f6"),a=n.n(i);a.a},"6d4d":function(t,e,n){"use strict";var i=n("edce"),a=n.n(i);a.a},"7c56":function(t,e,n){},"8fd8":function(t,e,n){},9054:function(t,e,n){"use strict";var i=n("9e8b"),a=n.n(i);a.a},"9e8b":function(t,e,n){},cd0b:function(t,e,n){},cf25:function(t,e,n){"use strict";var i=n("fea6"),a=n.n(i);a.a},d88f:function(t,e,n){t.exports=n.p+"media/3.6bf7021e.mp3"},ea84:function(t,e,n){t.exports=n.p+"media/4.05a67d7e.mp3"},edce:function(t,e,n){},fea6:function(t,e,n){}});
//# sourceMappingURL=app.632d6cc7.js.map