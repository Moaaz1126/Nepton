(function(e){function t(t){for(var o,r,s=t[0],i=t[1],u=t[2],l=0,h=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);d&&d(t);while(h.length)h.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-36bb47c4":"968e106c","chunk-058c73ff":"34af7f06","chunk-1bcb8c2c":"b4cd023d","chunk-7c6c1cb2":"6873841e","chunk-26ececcb":"03aa9902","chunk-aa8e1d80":"b324a7bf","chunk-588aa41e":"b4896b0b","chunk-7b7c0cb8":"4dd4bce2"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-36bb47c4":1,"chunk-1bcb8c2c":1,"chunk-7c6c1cb2":1,"chunk-26ececcb":1,"chunk-aa8e1d80":1,"chunk-588aa41e":1,"chunk-7b7c0cb8":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-36bb47c4":"c29ff4d4","chunk-058c73ff":"31d6cfe0","chunk-1bcb8c2c":"28403633","chunk-7c6c1cb2":"edd64146","chunk-26ececcb":"fe59508f","chunk-aa8e1d80":"609c2e28","chunk-588aa41e":"1952fafd","chunk-7b7c0cb8":"4dea0105"}[e]+".css",a=i.p+o,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){u=h[s],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var h=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",h.name="ChunkLoadError",h.type=o,h.request=r,n[1](h)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Neptone/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e23":function(e,t,n){},"3df7":function(e,t,n){"use strict";n("0e23")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,a,c){var s=Object(o["z"])("w-nav-links"),i=Object(o["z"])("w-header"),u=Object(o["z"])("router-view"),l=Object(o["z"])("w-nav");return Object(o["r"])(),Object(o["e"])("div",null,[Object(o["i"])(s),Object(o["i"])(i),Object(o["i"])("main",null,[Object(o["i"])(u,null,{default:Object(o["K"])((function(e){var t=e.Component;return[Object(o["i"])(o["b"],{name:"book-flip",mode:"out-in"},{default:Object(o["K"])((function(){return[(Object(o["r"])(),Object(o["e"])(Object(o["A"])(t)))]})),_:2},1024)]})),_:1})]),Object(o["i"])(o["b"],{name:"nav-right"},{default:Object(o["K"])((function(){return[c.isNavShown?(Object(o["r"])(),Object(o["e"])(l,{key:0})):Object(o["f"])("",!0)]})),_:1})])}n("b0c0");var a={key:0,class:"logo create-room"},c={key:1},s={class:"title"},i=Object(o["i"])("button",null,[Object(o["i"])("div",null,[Object(o["i"])("i",{class:"fas fa-angle-left fa-2x"})])],-1),u={key:0},l={key:0,class:"admin-badge"},h={key:1},d={key:2},m={key:2,class:"logo"},b=Object(o["i"])("i",{class:"fas fa-bars fa-2x"},null,-1);function p(e,t,n,r,p,f){var g=Object(o["z"])("router-link");return Object(o["r"])(),Object(o["e"])("header",null,[Object(o["i"])(o["b"],{name:"book-flip",mode:"out-in"},{default:Object(o["K"])((function(){return["/topic-rooms"===p.path?(Object(o["r"])(),Object(o["e"])("span",a,"Create a room")):"/chat"===p.path?(Object(o["r"])(),Object(o["e"])("div",c,[Object(o["i"])("div",s,[Object(o["i"])(g,{to:"/"},{default:Object(o["K"])((function(){return[i]})),_:1}),""===f.room_name?(Object(o["r"])(),Object(o["e"])("h3",u,[f.thePartner.isAdmin?(Object(o["r"])(),Object(o["e"])("i",l)):Object(o["f"])("",!0),Object(o["h"])(" "+Object(o["C"])(f.thePartner.name),1)])):Object(o["f"])("",!0),""===f.room_name?(Object(o["r"])(),Object(o["e"])("span",h,"("+Object(o["C"])(f.thePartner.details.gender)+", "+Object(o["C"])(f.thePartner.age)+", "+Object(o["C"])(f.thePartner.details.country)+")",1)):Object(o["f"])("",!0),""!==f.room_name?(Object(o["r"])(),Object(o["e"])("h3",d,Object(o["C"])(f.room_name),1)):Object(o["f"])("",!0)])])):(Object(o["r"])(),Object(o["e"])("span",m,"Neptone"))]})),_:1}),Object(o["i"])("button",{onClick:t[1]||(t[1]=function(){return f.showNav&&f.showNav.apply(f,arguments)})},[b])])}var f={name:"WHeader",data:function(){return{path:""}},methods:{showNav:function(){this.$store.commit("toggleNav",!0)}},computed:{admins_list:function(){return this.$store.state.admins_list},room_name:function(){return this.$store.state.user.room_name},thePartner:function(){return this.$store.state.partner}},watch:{$route:function(e){this.path=e.path}}};n("5a2c");f.render=p;var g=f,y=Object(o["N"])("data-v-1677bcd7");Object(o["u"])("data-v-1677bcd7");var O={class:"relative"},v=Object(o["i"])("i",{class:"fas fa-times fa-2x"},null,-1),j=Object(o["i"])("i",{class:"fas fa-sign-out-alt fa-2x"},null,-1),k={key:1},w=Object(o["i"])("i",{class:"fas fa-door-open fa-5x"},null,-1),N={class:"settings"},S={class:"themes"},C=Object(o["i"])("i",{class:"fas fa-circle switch"},null,-1),_={key:0,class:"fas fa-moon"},P={key:1,class:"fas fa-sun"},I=Object(o["h"])(" | ");Object(o["s"])();var L=y((function(e,t,n,r,a,c){var s=Object(o["z"])("router-link");return Object(o["r"])(),Object(o["e"])("nav",null,[Object(o["i"])("div",O,[Object(o["i"])("button",{class:"close",onClick:t[1]||(t[1]=function(){return c.closeNav&&c.closeNav.apply(c,arguments)})},[v]),""!==c.isUser?(Object(o["r"])(),Object(o["e"])("button",{key:0,class:"logout",onClick:t[2]||(t[2]=function(){return c.logout&&c.logout.apply(c,arguments)})},[j])):Object(o["f"])("",!0),c.isUser?(Object(o["r"])(),Object(o["e"])("ul",k,[Object(o["i"])("li",null,[Object(o["i"])(s,{to:"/"},{default:y((function(){return[Object(o["h"])(Object(o["C"])(c.appVocubulary.home),1)]})),_:1})]),Object(o["i"])("li",null,[Object(o["i"])(s,{to:"/posts"},{default:y((function(){return[Object(o["h"])(Object(o["C"])(c.appVocubulary.posts),1)]})),_:1})]),Object(o["i"])("li",null,[Object(o["i"])(s,{to:"/about"},{default:y((function(){return[Object(o["h"])(Object(o["C"])(c.appVocubulary.about),1)]})),_:1})]),Object(o["i"])("li",null,[Object(o["i"])(s,{to:"/settings"},{default:y((function(){return[Object(o["h"])(Object(o["C"])(c.appVocubulary.settings),1)]})),_:1})])])):(Object(o["r"])(),Object(o["e"])(s,{key:2,to:"/login"},{default:y((function(){return[w,Object(o["i"])("span",null,Object(o["C"])(c.appVocubulary.login),1)]})),_:1})),Object(o["i"])("div",N,[Object(o["i"])("div",S,[Object(o["i"])("button",{onClick:t[3]||(t[3]=function(){return c.changeTheme&&c.changeTheme.apply(c,arguments)})},[C,"dark"===a.theme?(Object(o["r"])(),Object(o["e"])("i",_)):(Object(o["r"])(),Object(o["e"])("i",P))])]),Object(o["i"])("button",{onClick:t[4]||(t[4]=function(e){return c.changeLang("ar")}),class:"lang"},"Ar"),I,Object(o["i"])("button",{onClick:t[5]||(t[5]=function(e){return c.changeLang("en")}),class:"lang"},"En")])])])})),A={name:"WNav",data:function(){return{version:this.$store.state.Neptone_version,theme:localStorage.getItem("theme")||"light"}},computed:{isUser:function(){return this.$store.state.user.name},lang:function(){return this.$store.state.lang},appVocubulary:function(){return this.$store.state.appVocubulary[this.lang].components.nav}},methods:{closeNav:function(){this.$store.commit("toggleNav",!1)},logout:function(){sessionStorage.removeItem("thisNeptoneUser"),this.$store.commit("resetUser"),document.getElementById("login-link").click()},changeLang:function(e){document.querySelector("html").lang=e,this.$store.commit("changeLang",e),localStorage.setItem("language",e)},changeTheme:function(){document.body.classList.toggle("dark-mode"),localStorage.getItem("theme")&&"light"!==localStorage.getItem("theme")?(localStorage.setItem("theme","light"),this.theme="light"):(localStorage.setItem("theme","dark"),this.theme="dark")}}};n("9559");A.render=L,A.__scopeId="data-v-1677bcd7";var E=A,$=Object(o["N"])("data-v-37bdc90c"),U=$((function(e,t,n,r,a,c){var s=Object(o["z"])("router-link");return Object(o["r"])(),Object(o["e"])("div",null,[Object(o["i"])(s,{to:"/",id:"home-link"}),Object(o["i"])(s,{to:"/about",id:"about-link"}),Object(o["i"])(s,{to:"/login",id:"login-link"}),Object(o["i"])(s,{to:"/settings",id:"settings-link"}),Object(o["i"])(s,{to:"/chat",id:"chat-link"})])})),x={name:"WNavLinks"};n("3df7");x.render=U,x.__scopeId="data-v-37bdc90c";var T=x,q={components:{WNav:E,WNavLinks:T,WHeader:g},watch:{$route:function(){this.$store.commit("toggleNav",!1)}},computed:{isNavShown:function(){return this.$store.state.isNavShown},thePartner:function(){return this.$store.state.partner},thisUser:function(){return this.$store.state.user},socket:function(){return this.$store.state.socket}},mounted:function(){"dark"===localStorage.getItem("theme")&&document.body.classList.add("dark-mode"),localStorage.getItem("language")&&this.$store.commit("changeLang",localStorage.getItem("language")),localStorage.getItem("thisUser")&&localStorage.removeItem("thisUser"),localStorage.getItem("currentUser")&&localStorage.removeItem("currentUser")}};n("d527");q.render=r;var V=q,H=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),W=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-36bb47c4"),n.e("chunk-aa8e1d80")]).then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-7b7c0cb8").then(n.bind(null,"f820"))}},{path:"/settings",name:"Settings",component:function(){return n.e("chunk-588aa41e").then(n.bind(null,"26d3"))}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-36bb47c4"),n.e("chunk-058c73ff"),n.e("chunk-1bcb8c2c")]).then(n.bind(null,"a55b"))}},{path:"/chat",name:"Chat",component:function(){return Promise.all([n.e("chunk-36bb47c4"),n.e("chunk-26ececcb")]).then(n.bind(null,"293a"))}},{path:"/posts",name:"Posts",component:function(){return Promise.all([n.e("chunk-36bb47c4"),n.e("chunk-058c73ff"),n.e("chunk-7c6c1cb2")]).then(n.bind(null,"17c3"))}}],D=Object(H["a"])({history:Object(H["b"])("/Neptone/"),routes:W}),K=D,M=n("5530"),Q=n("5502"),z=n("8e27"),B=n("e6db"),F=n("a4be"),J=Object(Q["a"])({state:{Neptone_version:"2.1.0",backend_link:"https://m-neptone.herokuapp.com/",socket:Object(z["io"])("https://m-neptone.herokuapp.com/",{autoConnect:!1}),isNavShown:!1,connected:0,lang:"en",appVocubulary:{en:B,ar:F},user:Object(M["a"])(Object(M["a"])({name:"",details:{gender:""}},JSON.parse(sessionStorage.getItem("thisNeptoneUser"))),{},{socketId:"",room:""}),partner:{age:"",details:{gender:"",country:""}}},mutations:{updateUserWith:function(e,t){var n=t.updatedProp,o=t.newValue;e.user[n]=o},setupUser:function(e,t){var n=t.origin,o=t.newData;"settings"===n?(e.user.preferences=o.preferences,e.user.interests=o.interests,e.user.matchAnyone=o.matchAnyone):"login"===n&&(e.user={_id:o._id,name:o.name,age:o.age,isAdmin:o.isAdmin||0,details:{gender:o.gender,country:o.country}},o.isAdmin||delete e.user.isAdmin),sessionStorage.setItem("thisNeptoneUser",JSON.stringify(e.user))},updatePartner:function(e,t){e.partner=t},resetUser:function(e){e.user=Object(M["a"])(Object(M["a"])({name:"",details:{gender:""}},JSON.parse(sessionStorage.getItem("thisNeptoneUser"))),{},{id:"",room:""})},setConnectedUsers:function(e,t){e.connected=t},toggleNav:function(e,t){e.isNavShown=t},increaseByOne:function(e,t){e[t]++},changeLang:function(e,t){e.lang=t,document.querySelector("html").lang=t},homeIsVisited:function(e){e.homeVisited=!0}},actions:{},modules:{}}),R=n("9483");Object(R["a"])("".concat("/Neptone/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(o["d"])(V).use(J).use(K).mount("#app")},"5a2c":function(e,t,n){"use strict";n("d7a6")},"72d1":function(e,t,n){},9559:function(e,t,n){"use strict";n("72d1")},a411:function(e,t,n){},a4be:function(e){e.exports=JSON.parse('{"public":{"interests":{"everything":"كل شيء","announce":"إعلانات","question":"سؤال (الدعم الفني)","sports":"الرياضات","music":"الموسيقى","technology":"التكنلوجيا","business":"الأعمال","travelling":"السفر","memes":"الميمز","anime":"الأنمي","society":"المجتمع","gaming":"الألعاب","art":"الفن","design":"التصميم","programming":"البرمجة","movies":"الأفلام"},"movieInterests":{"drama":"دراما","action":"أكشن","horror":"رعب","comedy":"كوميدي","superhero":"الأبطال الخارقين"}},"components":{"nav":{"home":"الرئيسية","about":"حول","settings":"الإعدادات","login":"تسجيل الدخول","posts":"المنشورات"},"popup":{"OK":"حسناً","CANCEL":"إلغاء","CONFIRM":"تأكيد","DELETE":"حذف","YES":"نعم","NO":"لا","SAVE":"حفظ التغييرات"}},"pages":{"Home":{"newChat":"محادثة عشوائية","connecting":"جار الإتصال بالخادم","peopleRConnected":"مستخدم متصل","connectErr":"لديك خطأ في الإتصال مع الخادم, الرجاء إعادة تحميل الصفحة","tip1":"إذا كانت تأخذ وقتاً طويلاً جرب التقليل من خياراتك في الإعدادات"},"About":{"welcome":{"h1":"مرحباً نبتون هنا.","slang":"تحدث بسرية وحافظ على خصوصيتك"},"intro":{"title":"ما هو نبتون ؟","p":"هو تطبيق ويب للمحادثات العشوائية, من هنا يمكنك التحدث مع أناس عشوائيين من حول العالم الذين يشاركونك في الاهتمامات نفسها."},"featuresTitle":"ميزات نبتون","features":[{"title":"تواصل مع الناس","p":"التق بناس من نفس الاهتمامات مع نظام الانتقاء الخاص بنا"},{"title":"حافظ على خصوصيتك","p":"نحن نقدر خصوصيات الجميع, جميع المحادثات السرية ولا نحتفظ بأي معلومات عنك (جميع المعلومات تخزن على جهازك الشخصي)"},{"title":"ابق آمناً","p":"لأسباب تتعلق بخلق بيئة آمنة للجميع فإننا طورنا قاموساً للمحتوى المخل وغير المرغوب كالمحتوى العنيف والجنسي"}],"rulesSection":{"title":"هنا لائحة بأشياء لا نقوم بها هنا","rules":["إرسال أي نوع من المحتوى الجنسي أو العنيف","الإفراط في مشاركة المعلومات الشخصية","مغادرة المحادثة من غير قصد !","إزعاج المستخدمين الآخريرن"]}},"Chat":{"userLeft":"غادر المحادثة","confirmLeave":"مغادرة المحادثة سيؤدي إلى فقدانها للأبد","privacyNote":"رجاءً تذكر أنه يجب عليك عدم مشاركة أي بيانات شخصية هنا"},"Login":{"welcome":{"h1":"أهلاً بك في نبتون","p":"تحدث مع ناس عشوائيين حول العالم يشاركونك اهتماماتك وحافظ على خصوصيتك في نفس الوقت","read":"اقرأ المزيد عن فكرة الموقع"},"username":"اسم المستخدم","password":"كلمة المرور","gender":{"question":"انا ...","male":"ذكر","female":"أنثى"},"countryQuestion":"أين تعيش ؟","ageQuestion":"كم عمرك ؟","login":"تسجيل الدخول","signup":"تسجيل","note":"ملاحظة : نحن لا نحتفظ بأي من بياناتك, كل شيء تكتبه هنا يبقى مخزناً على جهازك الشخصي فقط.","validations":{"username":"اسم المستخدم يجب أن يكون بين 3 و 16 حرفاً باللغة العربية أو حرفاً صغيراً باللغة الإنكليزية","password":"كلمة المرور يجب أن تحوي بين ال 6 وال 20 حرفاً","country":"قم باختيار بلدك قبل التسجيل رجاءً","gender":"قم باختيار جنسك قبل التسجيل رجاءً","age":"نعتذر منك. الأعمار دون ال 16 غير مسموح بها."}},"Posts":{"createPost":"اكتب منشورك !","showName":"أريد إظهار اسمي","post":"انشر","deletePost":"هل أنت متأكد أنك تريد حذف المنشور ؟","deleteComment":"هل أنت متأكد أنك تريد حذف التعليق ؟","topicQuestion":"موضوع منشوري عن :","topicNote":"رجاءً قم باختيار موضوع المنشور بشكل صحيح حتى لا يتم حذفه من قبل المسؤولين","noPosts":"لا يوجد منشورات في هذا القسم حتى الآن"},"Settings":{"welcome":{"h1":"أهلاً في صفحة الإعدادات !","p":"هنا يمكنك تحديد اهتماماتك حتى نستطيع أن نوصلك بأناس من نفس الاهتمامات <br> ملاحظة: إذا كان البحث يأخذ وقتاً طويلاً جرب تقليل تفضيلات البحث."},"anyone":"صلني بأي شخص","gender":{"question":"أريد أن أتواصل مع :","females":"إناث","males":"ذكور","any":"لا يهم"},"country":{"question":"أريد أن أتواصل مع أناس من :","my":"دولتي","any":"أي دولة"},"interestsQuestion":"اهتماماتي","save":"حفظ التغييرات"}}}')},d527:function(e,t,n){"use strict";n("a411")},d7a6:function(e,t,n){},e6db:function(e){e.exports=JSON.parse('{"public":{"interests":{"everything":"everything","announce":"announcements","question":"question (App Support)","sports":"sports","music":"music","technology":"technology","business":"business","travelling":"travelling","memes":"memes","anime":"anime","society":"society","gaming":"gaming","art":"art","design":"design","programming":"programming","movies":"movies"},"movieInterests":{"drama":"drama","action":"action","horror":"horror","comedy":"comedy","superhero":"superhero"}},"components":{"nav":{"home":"Home","about":"About","settings":"Settings","login":"Login","posts":"Posts"},"popup":{"OK":"Ok","CANCEL":"Cancel","CONFIRM":"Confirm","DELETE":"Delete","YES":"Yes","NO":"No","SAVE":"Save"}},"pages":{"Home":{"newChat":"Random Chat","connecting":"Connecting to server","peopleRConnected":"people are connected","connectErr":"there was an error while connecting to server, please reload th page now","tip1":"Tip: If it is taking so long, try reducing your filters"},"About":{"welcome":{"h1":"Hello ! Neptone here.","slang":"Chat anonymously and stay private"},"intro":{"title":"What is Neptone ?","p":"Neptone is a random chat web application, from here you can chat with people from around the world that share the same interests with you"},"featuresTitle":"Neptone features","features":[{"title":"Connect to people","p":"meet people with same interests by using our filter system (you can find it in settings)"},{"title":"Stay private","p":"We value everyone\'s privacy, you have your conversation anonymously, we even don\'t collect any data from you (all the data are stored locally on your machine)"},{"title":"Stay safe","p":"For the reason of keeping the environment safe for everyone we developed a dictionary of restricted content like sexual or violence content"}],"rulesSection":{"title":"Here\'s a list of things we don\'t do here","rules":["Send any kind of sexual or violent content.","Share personal data (for your own safety)","Leave the chat accidentally !","Be toxic with other users.."]}},"Chat":{"userLeft":"left the chat","confirmLeave":"Leaving this screen will lead to lose the conversation forever !","privacyNote":"Please remember not to share any personal data here"},"Login":{"welcome":{"h1":"Welcome to Neptone","p":"Chat with random people with your same interests while you stay safe and secure.","read":"Read more about the website idea."},"username":"username","password":"password","gender":{"question":"I am ..","male":"Male","female":"Female"},"countryQuestion":"where do you live ?","ageQuestion":"How old are you ?","login":"Login","signup":"Sign up","note":"Note: we don\'t have your data, everything you enter here is stored locally on your machine","validations":{"username":"the username must be between 3 and 14 characters and may contain only English small letters or Arabic characters","password":"your password must be between 6 and 20 characters.","country":"Choose your country before submitting please !","gender":"Choose your gender before submitting please !","age":"we are sorry :\'( , only users between 16 and 60 are allowed."}},"Posts":{"createPost":"Create your post !","showName":"show my name","post":"post","deletePost":"Do you really want to delete your post ?","deleteComment":"Do you really want to delete your comment ?","topicQuestion":"I am posting about :","topicNote":"Please choose your post topic correctly so it doesn\'t get deleted","noPosts":"There is no posts in this section yet"},"Settings":{"welcome":{"h1":"Welcome to the settings page !","p":"Here you can set your interests in people so we can match you with people who share the same interests with you !<br />Note: if you take a lot of time to match with people, try reducing the filters used."},"anyone":"match with anyone","gender":{"question":"I want to be matched with: ","females":"females","males":"males","any":"any"},"country":{"question":"I want to be matched with people from: ","my":"my country","any":"any country"},"interestsQuestion":"My interests","save":"save changes"}}}')}});
//# sourceMappingURL=app.9b7b2df4.js.map