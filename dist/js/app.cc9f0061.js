(function(e){function t(t){for(var s,r,o=t[0],l=t[1],c=t[2],u=0,f=[];u<o.length;u++)r=o[u],i[r]&&f.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);d&&d(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},i={app:0},n=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("1356"),i=a.n(s);i.a},"05f3":function(e,t,a){"use strict";var s=a("7804"),i=a.n(s);i.a},1356:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),i=a("bb71");a("da64");s["a"].use(i["a"],{iconfont:"sm"});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{dark:""}},[a("v-content",[a("v-container",{attrs:{"pa-2":""}},[a("v-layout",{attrs:{wrap:"","align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"mb-2"},[a("span",{staticClass:"headline font-weight-medium"},[e._v("YEAR IN PIXELS")]),a("span",{staticClass:"ml-2 title font-weight-light grey--text"},[e._v("Lorem ipsum dolor sit amet ?")])])]),a("v-flex",{attrs:{xs12:""}},[a("v-tabs",{attrs:{slot:"extension",color:"grey darken-4","align-with-title":"",height:"28"},slot:"extension",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tabs-slider",{attrs:{color:"cyan"}}),e._l(e.tabs,function(t,s){return a("v-tab",{key:s},[e._v(e._s(t.name))])}),e.tabs.length<6?a("div",{staticClass:"pr-2 pl-2 clickable",staticStyle:{display:"flex"},attrs:{href:"#"},on:{click:e.addTab}},[a("v-icon",{staticClass:"subheading"},[e._v("add")])],1):e._e(),e.tabs.length>0?a("div",{staticClass:"pr-2 pl-2 clickable",staticStyle:{display:"flex"},attrs:{href:"#"},on:{click:e.removeTab}},[a("v-icon",{staticClass:"subheading"},[e._v("clear")])],1):e._e()],2),a("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.tabs,function(t,s){return a("v-tab-item",{key:s},[a("v-card",{attrs:{flat:""}},[a("v-card-text",[a("v-container",{attrs:{"pa-0":"",fluid:"","grid-list-sm":""}},[a("tab",{attrs:{name:t.name,id:t.id,days:t.days},on:{"update:name":function(a){e.$set(t,"name",a)}}})],1)],1)],1)],1)}),1)],1)],1)],1)],1),a("v-footer",{attrs:{app:""}},[a("span",{staticClass:"px-3"},[e._v("@ "+e._s((new Date).getFullYear()))])])],1)},r=[],o=a("75fc"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs4:""}},[a("pick-modes",{attrs:{"pick-modes":e.pickModes,"selected-pick-mode":e.selectedPickMode},on:{"update:selectedPickMode":function(t){e.selectedPickMode=t}}}),a("settings",{attrs:{settings:e.settings,"selected-setting":e.selectedSetting,"default-settings":e.defaultSettings},on:{"update:settings":function(t){e.settings=t},"update:selectedSetting":function(t){e.selectedSetting=t},remove:e.removeSetting}})],1),a("v-flex",{attrs:{xs8:""}},[a("v-expand-transition",[Object.keys(e.selectedDay).length?a("div",[a("v-fade-transition",{attrs:{"leave-absolute":""}},[a("span",{key:e.selectedDay.date},[a("h3",[e._v(e._s(new Date(e.selectedDay.date)))])])]),a("h4",[e._v("Custom message for this day")]),a("message-editor",{attrs:{message:e.selectedDay.message},on:{"update:message":function(t){e.$set(e.selectedDay,"message",t)}}})],1):e._e()]),a("grid",{attrs:{days:e.days,"selected-day":e.selectedDay,"selected-setting":e.selectedSetting,"selected-pick-mode":e.selectedPickMode},on:{"update:selectedDay":function(t){e.selectedDay=t}}})],1)],1)],1)],1)},c=[],d=(a("7f7f"),a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","text-xs-center":""}},[a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-layout",{attrs:{wrap:"","justify-center":""}},[a("div",{staticClass:"day"}),e._l(e.dayNames,function(t){return a("div",{staticClass:"day"},[e._v(e._s(t))])}),e._l(e.daysByWeeks,function(t,s){return a("div",{key:s},[a("v-layout",[a("div",{staticClass:"day"},[e._v(e._s(s))]),e._l(t,function(t,s){return a("div",{key:s},[a("div",{on:{click:function(a){e.select(t)}}},[a("day",{attrs:{date:t.date,"setting-applied":t.settingApplied,message:t.message,selected:t==e.selectedDay},on:{"update:message":function(a){e.$set(t,"message",a)}}})],1)])})],2)],1)})],2)],1),a("v-flex",{attrs:{xs7:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("div",[e._l(e.daysByMonths[0].days,function(t,s){return a("div",[a("div",{staticClass:"day"},[e._v(e._s(s))])])}),a("div",{staticClass:"day"},[e._v("31")])],2),e._l(e.daysByMonths,function(t,s){return a("div",{key:s},[a("div",{staticClass:"day"},[e._v(e._s(e.monthNames[s]))]),e._l(t.days,function(t){return[a("div",{on:{click:function(a){e.select(t)}}},[a("day",{attrs:{date:t.date,"setting-applied":t.settingApplied,message:t.message,selected:t==e.selectedDay},on:{"update:message":function(a){e.$set(t,"message",a)}}})],1)]})],2)})],2)],1)],1)],1)}),u=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{style:"background-color:"+e.getOddBackgroundColor()},[a("v-fade-transition",{attrs:{"leave-absolute":""}},[a("div",{key:e.settingApplied.colorHex,style:"background-color:"+e.settingApplied.colorHex+"!important"},[e.message?a("div",{staticStyle:{position:"absolute"}},[e._v("@")]):e._e(),e.selected?a("div",[a("div",{class:"day selected"})]):a("div",[a("div",{class:"day color"})])])])],1)},v=[],p={props:{date:{type:Number,required:!0},settingApplied:{type:Object,required:!0,default:null},selected:{type:Boolean,required:!0},message:{type:String,required:!1,default:""}},methods:{getOddBackgroundColor:function(){return this.isOddMonth&&this.isOddDay?"rgb(84, 84, 84)":this.isOddMonth&&!this.isOddDay?"rgb(70, 70, 70)":!this.isOddMonth&&this.isOddDay?"rgb(40, 40, 40)":this.isOddMonth||this.isOddDay?"none":"rgb(40, 40, 40)"}},computed:{isOddMonth:function(){return new Date(this.date).getMonth()%2!=0},isOddDay:function(){return new Date(this.date).getDay()%2!=0}}},y=p,m=(a("05f3"),a("2877")),g=a("6544"),h=a.n(g),b=a("0789"),x=Object(m["a"])(y,f,v,!1,null,null,null);x.options.__file="Day.vue";var k=x.exports;h()(x,{VFadeTransition:b["b"]});var _=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],S=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],C=(new Date).getFullYear();function M(e,t){return new Date(t,e,0).getDate()}function V(){for(var e=[],t=0;t<_.length;t++)for(var a=M(t,C),s=0;s<a;s++)e.push({date:new Date(C,t,s+1).getTime(),message:"",selected:!1,settingApplied:{}});return e}Array.prototype.chunk=function(e){var t=this.slice(0),a=[];while(t.length)a.push(t.splice(0,e));return a};var D={components:{Day:k},props:{days:{type:Array,required:!0},selectedSetting:{type:Object,required:!0},selectedPickMode:{type:Object,required:!0},selectedDay:{type:Object,required:!0}},data:function(){return{monthNames:_,dayNames:S}},computed:{daysByMonths:function(){for(var e=this,t=[],a=_,s=function(a){var s=M(a,C),i={monthIndex:a,days:[]};t.push(i);for(var n=function(t){var s=e.days.filter(function(e){return e.date==new Date(C,a,t+1).getTime()})[0];i.days.push(s)},r=0;r<s;r++)n(r)},i=0;i<a.length;i++)s(i);return t},daysByWeeks:function(){return this.days.chunk(7)}},methods:{select:function(e){"selectDay"==this.selectedPickMode.value&&this.$emit("update:selectedDay",e),"selectColor"==this.selectedPickMode.value&&(this.$emit("update:selectedDay",e),e.settingApplied=this.selectedSetting),"selectOnly"==this.selectedPickMode.value&&this.$emit("update:selectedDay",e)}}},O=D,w=(a("9f4b"),a("a523")),P=a("0e8f"),j=a("a722"),$=Object(m["a"])(O,d,u,!1,null,null,null);$.options.__file="Grid.vue";var F=$.exports;h()($,{VContainer:w["a"],VFlex:P["a"],VLayout:j["a"]});var T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"panel mt-1",attrs:{flat:""}},[a("v-card-text",[a("v-layout",[a("v-flex",{attrs:{xs9:""}},[a("div",{staticClass:"body-2 font-weight-light"},[e._v("\n          select or edit a\n          "),a("span",{staticClass:"black pa-1"},[e._v("Color")])])]),a("v-flex",{attrs:{xs3:""}},[e.settings.length<e.maxSettings?a("div",{on:{click:e.addNewSetting}},[a("v-card",{staticClass:"text-xs-center clickable",attrs:{flat:""}},[a("div",{staticClass:"cyan"},[a("v-icon",[e._v("add")]),a("div",[e._v("Add")])],1)])],1):e._e()])],1),a("div",{staticClass:"mt-2"},[a("v-slide-y-transition",{attrs:{group:""}},e._l(e.settings,function(t){return a("div",{key:t.id},[a("v-layout",{key:t.id,attrs:{"align-center":""}},[a("v-flex",{attrs:{xs2:""}},[a("v-card",{class:"setting "+(t==e.selectedSetting?"selected":""),style:"background-color:"+t.colorHex,attrs:{flat:""},on:{click:function(a){e.selectSetting(t)}}})],1),a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{attrs:{small:"",label:"Name",box:"","append-icon":"edit"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"setting.name"}})],1),a("v-flex",{attrs:{xs1:""}},[a("v-btn",{attrs:{fab:"",small:""},on:{click:function(a){e.removeSetting(t)}}},[a("v-icon",{attrs:{small:""}},[e._v("delete")])],1)],1)],1)],1)}),0)],1)],1)],1)},A=[],q=a("7618"),B=a("5d73"),E=a.n(B),H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}]},[a("div",{staticStyle:{position:"relative"}},[a("div",{ref:"me",staticStyle:{position:"absolute",left:"500px"}})])]),a("v-btn",{attrs:{fab:"",small:""},on:{click:e.open}},[a("v-icon",{attrs:{small:""}},[e._v("colorize")])],1)],1)},N=[],I=(a("26bb"),a("c6dc")),L={props:{colorHex:{required:!0,type:String},visible:{required:!0,type:Boolean}},data:function(){return{}},methods:{open:function(){this.$emit("update:visible",!this.visible)},close:function(){this.$emit("update:visible",!1)}},mounted:function(){var e=this,t={mode:"edit",color:e.colorHex,position:"inline",container:this.$refs.me,onChange:function(t){e.$emit("update:colorHex",t)},onHide:function(e){console.log("when colorpicker is hide",e)},colorSets:[{name:"Material",colors:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"]}]};new I["ColorPicker"](t)}},J=L,Y=a("8336"),W=a("132d"),G=Object(m["a"])(J,H,N,!1,null,null,null);G.options.__file="ColorPicker.vue";var z=G.exports;h()(G,{VBtn:Y["a"],VIcon:W["a"]});var K={components:{ColorPicker:z},props:{settings:{type:Array,required:!0},selectedSetting:{type:Object,required:!0},defaultSettings:{type:Array,required:!0}},data:function(){return{maxSettings:7,colorPickerVisible:!1}},methods:{selectSetting:function(e){this.$emit("update:selectedSetting",e)},removeSetting:function(e){e.colorPickerVisible=!1,this.$emit("update:settings",this.settings.filter(function(t){return t.id!=e.id})),this.selectedSetting.id==e.id&&this.$emit("update:selectedSetting",{}),this.$emit("remove",e)},addNewSetting:function(){if(!(this.settings.length>=this.maxSettings)){var e=this.settings.reduce(function(e,t){return e.id>t.id?e:t},{id:1}).id,t=this.getNewSetting();this.$emit("update:settings",[].concat(Object(o["a"])(this.settings),[{name:t.name,id:e+1,colorHex:t.colorHex}]))}},getNewSetting:function(){var e=this,t=!0,a=!1,s=void 0;try{for(var i,n=function(){o=i.value;var t=o.colorHex,a=e.settings.filter(function(e){return e.colorHex==t}).length>0;if(!a)return{v:o}},r=E()(this.defaultSettings);!(t=(i=r.next()).done);t=!0){var o,l=n();if("object"===Object(q["a"])(l))return l.v}}catch(c){a=!0,s=c}finally{try{t||null==r.return||r.return()}finally{if(a)throw s}}}}},R=K,X=(a("ef23"),a("b0af")),Q=a("99d9"),U=a("2677"),Z=Object(m["a"])(R,T,A,!1,null,null,null);Z.options.__file="Settings.vue";var ee=Z.exports;h()(Z,{VBtn:Y["a"],VCard:X["a"],VCardText:Q["a"],VFlex:P["a"],VIcon:W["a"],VLayout:j["a"],VSlideYTransition:b["d"],VTextField:U["a"]});var te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{staticClass:"panel",attrs:{flat:""}},[a("v-card-text",[a("div",{staticClass:"body-2 font-weight-light"},[e._v("\n        select a\n        "),a("span",{staticClass:"black pa-1"},[e._v("PickMode")])]),a("v-layout",{attrs:{"mt-2":""}},[a("v-flex",{attrs:{xs2:""}},[a("v-card",{staticClass:"text-xs-center clickable",attrs:{flat:""}},[a("div",{class:e.selectedPickMode==e.pickModes[0]?"cyan":"",on:{click:function(t){e.selectPickMode(e.pickModes[0])}}},[a("v-icon",[e._v("texture")]),a("div",[e._v("Fill")])],1)])],1),a("v-flex",{attrs:{xs2:""}},[a("v-card",{staticClass:"text-xs-center clickable",attrs:{flat:""}},[a("div",{class:e.selectedPickMode==e.pickModes[1]?"cyan":"",on:{click:function(t){e.selectPickMode(e.pickModes[1])}}},[a("v-icon",[e._v("crop_din")]),a("div",[e._v("Select")])],1)])],1)],1)],1)],1)],1)},ae=[],se={props:{pickModes:{type:Array,required:!0},selectedPickMode:{type:Object,required:!0}},data:function(){return{}},methods:{selectPickMode:function(e){this.$emit("update:selectedPickMode",e)}}},ie=se,ne=Object(m["a"])(ie,te,ae,!1,null,null,null);ne.options.__file="PickModes.vue";var re=ne.exports;h()(ne,{VCard:X["a"],VCardText:Q["a"],VFlex:P["a"],VIcon:W["a"],VLayout:j["a"]});var oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-textarea",{attrs:{box:"",label:"Message","auto-grow":"",rows:2},model:{value:e.messageData,callback:function(t){e.messageData=t},expression:"messageData"}})},le=[],ce={props:{message:{type:String,required:!1,default:""}},computed:{messageData:{get:function(){return this.message},set:function(e){this.$emit("update:message",e)}}}},de=ce,ue=a("a844"),fe=Object(m["a"])(de,oe,le,!1,null,null,null);fe.options.__file="MessageEditor.vue";var ve=fe.exports;h()(fe,{VTextarea:ue["a"]});var pe=[{name:"Sport",id:1,colorHex:"#009688",colorPickerVisible:!1},{name:"Alcool",id:2,colorHex:"#3f51b5",colorPickerVisible:!1},{name:"Cheatmeal",id:3,colorHex:"#2196f3",colorPickerVisible:!1},{name:"Kitesurf",id:4,colorHex:"#c2185b",colorPickerVisible:!1},{name:"Sex",id:5,colorHex:"#4caf50",colorPickerVisible:!1},{name:"Friends",id:6,colorHex:"#f57c00",colorPickerVisible:!1},{name:"AquaPoney",id:7,colorHex:"#e64a19",colorPickerVisible:!1}],ye=[{name:"select color then affect on click",value:"selectColor"},{name:"select day then affect color",value:"selectDay"},{name:"select for edit message",value:"selectOnly"}],me={components:{Grid:F,Settings:ee,PickModes:re,MessageEditor:ve},props:{id:{required:!0,type:Number},name:{required:!0,type:String},days:{required:!0,type:Array}},data:function(){return{selectedDay:{},settings:pe,defaultSettings:pe,selectedSetting:pe[0],pickModes:ye,selectedPickMode:ye[0]}},methods:{removeSetting:function(e){}},computed:{nameComputed:{get:function(){return this.name},set:function(e){this.$emit("update:name",e)}}}},ge=me,he=Object(m["a"])(ge,l,c,!1,null,null,null);he.options.__file="Tab.vue";var be=he.exports;h()(he,{VExpandTransition:b["a"],VFadeTransition:b["b"],VFlex:P["a"],VLayout:j["a"]});var xe=[{id:0,name:"life",days:V()},{id:1,name:"work",days:V()}],ke={name:"App",components:{Tab:be},data:function(){return{tab:null,tabs:xe}},watch:{},methods:{save:function(){},addTab:function(){var e=Math.max.apply(Math,Object(o["a"])(this.tabs.map(function(e){return e.id})))+1;this.tabs.push({id:e,name:"todo",days:V()}),this.tab=e},removeTab:function(){var e=this;this.tabs=this.tabs.filter(function(t){return t.id!=e.tabs[e.tab].id})}}},_e=ke,Se=(a("034f"),a("7496")),Ce=a("549c"),Me=a("553a"),Ve=a("71a3"),De=a("c671"),Oe=a("fe57"),we=a("aac8"),Pe=a("9a96"),je=Object(m["a"])(_e,n,r,!1,null,null,null);je.options.__file="App.vue";var $e=je.exports;h()(je,{VApp:Se["a"],VCard:X["a"],VCardText:Q["a"],VContainer:w["a"],VContent:Ce["a"],VFlex:P["a"],VFooter:Me["a"],VIcon:W["a"],VLayout:j["a"],VTab:Ve["a"],VTabItem:De["a"],VTabs:Oe["a"],VTabsItems:we["a"],VTabsSlider:Pe["a"]}),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e($e)}}).$mount("#app")},6725:function(e,t,a){},7804:function(e,t,a){},"7d2c":function(e,t,a){},"9f4b":function(e,t,a){"use strict";var s=a("6725"),i=a.n(s);i.a},ef23:function(e,t,a){"use strict";var s=a("7d2c"),i=a.n(s);i.a}});
//# sourceMappingURL=app.cc9f0061.js.map