(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ce605fe"],{"132d":function(t,e,s){"use strict";s("7db0"),s("caad"),s("c975"),s("fb6a"),s("45fc"),s("a9e3"),s("2532"),s("498a"),s("c96a");var i,n=s("5530"),a=(s("4804"),s("7e2b")),r=s("a9ad"),o=s("af2b"),l=s("7560"),c=s("80d2"),d=s("2b0e"),u=s("58df");function h(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function v(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var m=Object(u["a"])(a["a"],r["a"],o["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["o"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["l"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(c["d"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(n["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(n["a"])({},t.class,{},this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var s=[],i=this.getDefaultData(),n="material-icons",a=t.indexOf("-"),r=a<=-1;r?s.push(t):(n=t.slice(0,a),h(n)&&(n="")),i.class[n]=!0,i.class[t]=!r;var o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,s)},renderSvgIcon:function(t,e){var s=this.getSize(),i=Object(n["a"])({},this.getDefaultData(),{style:s?{fontSize:s,height:s,width:s}:void 0});i.class["v-icon--svg"]=!0,this.applyColors(i);var a={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:s||"24",width:s||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",i,[e("svg",a,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var s=this.getDefaultData();s.class["v-icon--is-component"]=!0;var i=this.getSize();i&&(s.style={fontSize:i,height:i,width:i}),this.applyColors(s);var n=t.component;return s.props=t.props,s.nativeOn=s.on,e(n,s)}},render:function(t){var e=this.getIcon();return"string"===typeof e?v(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:m,functional:!0,render:function(t,e){var s=e.data,i=e.children,n="";return s.domProps&&(n=s.domProps.textContent||s.domProps.innerHTML||n,delete s.domProps.textContent,delete s.domProps.innerHTML),t(m,s,n?[n]:i)}})},3408:function(t,e,s){},4804:function(t,e,s){},"67e9":function(t,e,s){t.exports=s.p+"img/services.2739f6e4.png"},"76d2":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"overflow-hidden",attrs:{id:"services"}},[i("v-row",{staticClass:"accent",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"6"}},[i("v-img",{attrs:{src:s("67e9"),height:"100%"}})],1),i("v-col",{staticClass:"text-center pa-5",attrs:{cols:"12",md:"6"}},[i("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12"}},[i("base-bubble-2",{staticStyle:{transform:"translateX(55%)"}}),i("base-heading",{staticClass:"info--text"},[t._v(" Services ")]),i("base-text",{staticClass:"mb-5"},[t._v(" Curabitur venenatis tortor erat, quis laoreet nis"),i("br"),t._v(" lobortis eget. Fusce tempor aucto. ")])],1),t._l(t.services,(function(e,s){return i("v-col",{key:s,staticClass:"text-center mb-3",attrs:{md:"6"}},[i("v-avatar",{staticClass:"elevation-6 mb-2",attrs:{color:"#69A1BB",size:"64",tile:""}},[i("v-icon",{attrs:{dark:"",size:"52"},domProps:{textContent:t._s(e.icon)}})],1),i("base-text",[i("div",{staticClass:"mb-2",domProps:{textContent:t._s(e.name)}}),i("div",{domProps:{innerHTML:t._s(e.blurb)}})])],1)}))],2)],1)],1)],1)},n=[],a={name:"Services",data:function(){return{services:[{name:"Research",icon:"mdi-clipboard-text-outline",blurb:"Curabitur et nisi semper,<br> pellent e sque "},{name:"Design",icon:"mdi-pencil-outline",blurb:"Curabitur et nisi semper, <br>pellent."},{name:"Development",icon:"mdi-settings-outline",blurb:"Curabitur et nisi semper, <br>pellent."},{name:"Support",icon:"mdi-account",blurb:"Curabitur et nisi semper, <br>pellent."}]}}},r=a,o=s("2877"),l=s("6544"),c=s.n(l),d=(s("a9e3"),s("5530")),u=(s("3408"),s("a9ad")),h=s("24b2"),v=s("80d2"),m=s("58df"),f=Object(m["a"])(u["a"],h["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes:function(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles:function(){return Object(d["a"])({height:Object(v["d"])(this.size),minWidth:Object(v["d"])(this.size),width:Object(v["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),p=s("62ad"),b=s("132d"),g=s("adda"),C=s("0fd9"),x=Object(o["a"])(r,i,n,!1,null,null,null);e["default"]=x.exports;c()(x,{VAvatar:f,VCol:p["a"],VIcon:b["a"],VImg:g["a"],VRow:C["a"]})}}]);
//# sourceMappingURL=chunk-5ce605fe.56b153d5.js.map