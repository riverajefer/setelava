(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07ff2b60"],{"0789":function(t,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return d}));i("99af");var n=i("d9f7");function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(n))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",i=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:i},origin:{type:String,default:e}},render:function(e,i){var s="transition".concat(i.props.group?"-group":""),a={props:{name:t,mode:i.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=i.props.origin,t.style.webkitTransformOrigin=i.props.origin}}};return i.props.leaveAbsolute&&(a.on.leave=r(a.on.leave,(function(t){return t.style.position="absolute"}))),i.props.hideOnLeave&&(a.on.leave=r(a.on.leave,(function(t){return t.style.display="none"}))),e(s,Object(n["a"])(i.data,a),i.children)}}}function a(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:i}},render:function(i,r){return i("transition",Object(n["a"])(r.data,{props:{name:t},on:e}),r.children)}}}var o=i("ade3"),l=i("80d2"),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e?"width":"height",n="offset".concat(Object(l["p"])(i));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(o["a"])({transition:t.style.transition,visibility:t.style.visibility,overflow:t.style.overflow},i,t.style[i])},enter:function(e){var r=e._initialStyle,s="".concat(e[n],"px");e.style.setProperty("transition","none","important"),e.style.visibility="hidden",e.style.visibility=r.visibility,e.style.overflow="hidden",e.style[i]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[i]=s}))},afterEnter:s,enterCancelled:s,leave:function(t){t._initialStyle=Object(o["a"])({transition:"",visibility:"",overflow:t.style.overflow},i,t.style[i]),t.style.overflow="hidden",t.style[i]="".concat(t[n],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[i]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){var e=t._initialStyle[i];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[i]=e),delete t._initialStyle}},u=(s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("fade-transition")),d=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition"));s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),a("expand-transition",c()),a("expand-x-transition",c("",!0))},"0c18":function(t,e,i){},"132d":function(t,e,i){"use strict";i("7db0"),i("caad"),i("c975"),i("fb6a"),i("45fc"),i("a9e3"),i("2532"),i("498a"),i("c96a");var n,r=i("5530"),s=(i("4804"),i("7e2b")),a=i("a9ad"),o=i("af2b"),l=i("7560"),c=i("80d2"),u=i("2b0e"),d=i("58df");function h(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));var p=Object(d["a"])(s["a"],a["a"],o["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["o"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["l"])(t).find((function(e){return t[e]}));return e&&n[e]||Object(c["d"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(r["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(r["a"])({},t.class,{},this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var i=[],n=this.getDefaultData(),r="material-icons",s=t.indexOf("-"),a=s<=-1;a?i.push(t):(r=t.slice(0,s),h(r)&&(r="")),n.class[r]=!0,n.class[t]=!a;var o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,i)},renderSvgIcon:function(t,e){var i=this.getSize(),n=Object(r["a"])({},this.getDefaultData(),{style:i?{fontSize:i,height:i,width:i}:void 0});n.class["v-icon--svg"]=!0,this.applyColors(n);var s={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:i||"24",width:i||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",n,[e("svg",s,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var i=this.getDefaultData();i.class["v-icon--is-component"]=!0;var n=this.getSize();n&&(i.style={fontSize:n,height:n,width:n}),this.applyColors(i);var r=t.component;return i.props=t.props,i.nativeOn=i.on,e(r,i)}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var i=e.data,n=e.children,r="";return i.domProps&&(r=i.domProps.textContent||i.domProps.innerHTML||r,delete i.domProps.textContent,delete i.domProps.innerHTML),t(p,i,r?[r]:n)}})},2561:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"overflow-hidden",attrs:{id:"about"}},[n("v-row",{staticClass:"white",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-5",attrs:{cols:"12",md:"6"}},[n("base-bubble-1",{staticStyle:{transform:"translate(5%, -5%)"}}),n("base-heading",{staticClass:"info--text"},[t._v(" About Me ")]),n("base-text",{staticClass:"mb-5"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipi"),n("br"),t._v(" scin elit. Etiam vulputate augue vel felis gravida"),n("br"),t._v(" porta. Lorem ipsum dolor sit amet. ")]),n("base-subheading",{staticClass:"info--text"},[t._v(" Skills ")]),n("base-text",{staticClass:"mb-5"},[t._v(" Lorem ipsum dolor sit amet, consecte tur adipi scin e"),n("br"),t._v(" lit. Etiam vulputate augu e vel felis gravida porta. ")]),n("v-alert",{attrs:{outlined:"",color:"info"}},t._l(t.skills,(function(e,i){return n("v-row",{key:i,staticStyle:{color:"#69A1BB"}},[n("v-col",{staticClass:"text-uppercase",attrs:{cols:"6"},domProps:{textContent:t._s(e.name)}}),n("v-col",{staticClass:"text-right",attrs:{cols:"6"},domProps:{textContent:t._s(e.value+"%")}}),n("v-progress-linear",{attrs:{value:e.value,color:"info",height:"8"}})],1)})),1)],1),n("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"6"}},[n("v-img",{attrs:{src:i("a56a"),height:"100%"}})],1)],1)],1)},r=[],s={data:function(){return{skills:[{name:"Web Design",value:100},{name:"Web Development",value:75},{name:"Web Support",value:90}]}}},a=s,o=i("2877"),l=i("6544"),c=i.n(l),u=(i("caad"),i("5530")),d=i("ade3"),h=(i("0c18"),i("10d2")),f=i("afdd"),p=i("9d26"),v=i("f2e7"),m=i("7560"),g=i("2b0e"),b=g["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),y=i("58df"),_=i("d9bd"),C=Object(y["a"])(h["a"],v["a"],b).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(d["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(f["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(p["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(p["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(u["a"])({},h["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||m["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(_["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),x=i("62ad"),B=i("adda"),S=i("8e36"),w=i("0fd9"),O=Object(o["a"])(a,n,r,!1,null,null,null);e["default"]=O.exports;c()(O,{VAlert:C,VCol:x["a"],VImg:B["a"],VProgressLinear:S["a"],VRow:w["a"]})},4804:function(t,e,i){},"6ece":function(t,e,i){},"8e36":function(t,e,i){"use strict";i("a9e3"),i("c7cd");var n=i("5530"),r=i("ade3"),s=(i("6ece"),i("0789")),a=i("a9ad"),o=i("fe6c"),l=i("2b0e");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return l["a"].extend({name:"proxyable",model:{prop:t,event:e},props:Object(r["a"])({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(r["a"])({},t,(function(t){this.internalLazyValue=t}))})}var u=c(),d=u,h=i("7560"),f=i("80d2"),p=i("58df"),v=Object(p["a"])(a["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),d,h["a"]);e["a"]=v.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f["d"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f["d"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(r["a"])(t,this.$vuetify.rtl?"right":"left",Object(f["d"])(this.normalizedValue,"%")),Object(r["a"])(t,"width",Object(f["d"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(n["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?s["a"]:s["b"]},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f["d"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(f["i"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(r["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),i=e.width;this.internalValue=t.offsetX/i*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f["d"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},"9d26":function(t,e,i){"use strict";var n=i("132d");e["a"]=n["a"]},a56a:function(t,e,i){t.exports=i.p+"img/aboutme.f240a572.png"},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]}}]);
//# sourceMappingURL=chunk-07ff2b60.3d8024d6.js.map