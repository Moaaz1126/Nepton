(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa8e1d80"],{"585d":function(e,t,n){e.exports=n.p+"img/my-ad.30a85167.jpg"},6067:function(e,t,n){e.exports=n.p+"img/female.060f9a2b.png"},8880:function(e,t,n){e.exports=n.p+"img/male.ba3e7bdc.png"},b27d:function(e,t,n){"use strict";n("f806")},bb51:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),s=n("6067"),a=n.n(s),o=n("8880"),r=n.n(o),i=n("585d"),u=n.n(i),h=Object(c["N"])("data-v-1304560b");Object(c["u"])("data-v-1304560b");var d={class:"page home-page"},p={class:"home-layout"},l={class:"image-ripples"},m={key:0,src:a.a,alt:"female"},b={key:1,src:r.a,alt:"male"},f={key:2},j={key:1,class:"ad-space"},O=Object(c["i"])("a",{href:"https://www.facebook.com/Moneerprofacc/",target:"_blank"},[Object(c["i"])("img",{src:u.a,alt:"ad"})],-1),k=Object(c["i"])("i",{class:"fas fa-times fa-2x"},null,-1),g={key:3,class:"hints"},v=Object(c["i"])("i",{class:"fas fa-circle"},null,-1),w=Object(c["i"])("br",null,null,-1),y={class:"tip"};Object(c["s"])();var U=h((function(e,t,n,s,a,o){var r=Object(c["z"])("w-popup");return Object(c["r"])(),Object(c["e"])("div",d,[Object(c["i"])("div",p,[Object(c["i"])("div",l,["female"===o.thisUser.details.gender?(Object(c["r"])(),Object(c["e"])("img",m)):(Object(c["r"])(),Object(c["e"])("img",b)),a.chatSearching?(Object(c["r"])(),Object(c["e"])("div",f)):Object(c["f"])("",!0)]),!a.chatSearching&&o.readyToMatch?(Object(c["r"])(),Object(c["e"])("button",{key:0,onClick:t[1]||(t[1]=function(e){return o.matchUser(!0)})},[Object(c["i"])("span",null,Object(c["C"])(o.appVocubulary.newChat),1)])):Object(c["f"])("",!0),a.chatSearching?Object(c["f"])("",!0):(Object(c["r"])(),Object(c["e"])("div",j,[O])),a.chatSearching?(Object(c["r"])(),Object(c["e"])("button",{key:2,class:"stop-searching",onClick:t[2]||(t[2]=function(e){return o.matchUser(!1)})},[k])):Object(c["f"])("",!0),a.chatSearching?(Object(c["r"])(),Object(c["e"])("div",g,[v,Object(c["i"])("span",null,Object(c["C"])(o.connected)+" "+Object(c["C"])(o.appVocubulary.peopleRConnected),1),w,Object(c["i"])("span",y,Object(c["C"])(o.appVocubulary.tip1),1)])):Object(c["f"])("",!0)]),Object(c["i"])(c["b"],{name:"opacity"},{default:h((function(){return[Object(c["i"])(r,{ref:"popup"},null,512)]})),_:1})])})),$=n("1da1"),P=(n("b0c0"),n("96cf"),n("ea38")),I={name:"Home",data:function(){return{chatSearching:!1,message:""}},components:{WPopup:P["a"]},computed:{socket:function(){return this.$store.state.socket},thisUser:function(){return this.$store.state.user},readyToMatch:function(){return this.thisUser.socketId},thePartner:function(){return this.$store.state.partner},connected:function(){return this.$store.state.connected},lang:function(){return this.$store.state.lang},appVocubulary:function(){return this.$store.state.appVocubulary[this.lang].pages.Home}},watch:{thePartner:function(e){e.socketId&&document.getElementById("chat-link").click()}},methods:{matchUser:function(e){this.readyToMatch&&(this.chatSearching=e,e?this.socket.emit("matchThisOne",this.thisUser):(this.socket.emit("leaveRoom",{roomId:this.thisUser.room,isPartner:!1}),this.$store.commit("updatePartner",{name:""})))},showPopup:function(e){var t=this;return Object($["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$refs.popup.show(e);case 2:c=n.sent,c&&location.reload();case 4:case"end":return n.stop()}}),n)})))()}},beforeMount:function(){!this.thisUser.socketId&&this.thisUser.name&&(console.log("connect"),this.socket.connect()),""===this.thisUser.name&&document.getElementById("login-link").click(),this.$store.commit("updatePartner",{name:"",age:0,details:{gender:"",country:""}}),this.$store.commit("updateUserWith",{updatedProp:"room",newValue:""}),this.$store.commit("updateUserWith",{updatedProp:"room_name",newValue:""})},mounted:function(){var e=this;this.socket.on("sendConnected",(function(t){e.$store.commit("setConnectedUsers",t)})),this.socket.on("updateId",(function(t){e.$store.commit("updateUserWith",{updatedProp:"socketId",newValue:t})})),this.socket.on("updateRoom",(function(t){e.$store.commit("updateUserWith",{updatedProp:"room",newValue:t})})),this.socket.on("updatePartner",(function(t){var n=t.user1,c=t.user2;if(n.socketId!==e.thisUser.socketId){var s=[c,n];n=s[0],c=s[1]}e.$store.commit("updatePartner",c)}))},unmounted:function(){this.socket.removeAllListeners("sendConnected"),this.socket.removeAllListeners("updateId"),this.socket.removeAllListeners("updateRoom"),this.socket.removeAllListeners("updatePartner")}};n("b27d");I.render=U,I.__scopeId="data-v-1304560b";t["default"]=I},f806:function(e,t,n){}}]);
//# sourceMappingURL=chunk-aa8e1d80.b324a7bf.js.map