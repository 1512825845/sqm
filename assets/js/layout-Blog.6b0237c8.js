(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{211:function(t,e){},212:function(t,e){},220:function(t,e){},222:function(t,e){},470:function(t,e,n){"use strict";n.r(e);var r=n(2),s=n(1),o=n(274),i=n(324),c=n(272),a=n(279);let h=class extends s.e{constructor(){super(...arguments),this.encryptConfig={}}get encryptOptions(){return this.$themeConfig.encrypt||{}}get currentPathHitKeys(){if(this.encryptOptions&&"object"==typeof this.encryptOptions.config){return Object.keys(this.encryptOptions.config).filter(t=>this.$route.path.startsWith(t)).sort((t,e)=>e.length-t.length)}return[]}get currentPathEncrypted(){if(0!==this.currentPathHitKeys.length){const{config:t}=this.encryptOptions;return 0===this.currentPathHitKeys.filter(e=>{const n=t[e];return 0!==("string"==typeof n?[n]:n).filter(t=>Object(a.compareSync)(this.encryptConfig[e],t)).length}).length}return!1}setPassword(t){const{config:e}=this.$themeConfig.encrypt;for(const n of this.currentPathHitKeys){const r=e[n];if(0!==("string"==typeof r?[r]:r).filter(e=>Object(a.compareSync)(t,e)).length){this.$set(this.encryptConfig,n,t),localStorage.setItem("encryptConfig",JSON.stringify(this.encryptConfig));break}}}mounted(){const t=localStorage.getItem("encryptConfig");t&&(this.encryptConfig=JSON.parse(t))}};h=Object(r.a)([s.a],h);var p=h,f=n(275);let g=class extends(Object(s.b)(p)){};g=Object(r.a)([Object(s.a)({components:{BlogInfo:o.a,BlogPage:i.a,Common:c.a,Password:f.a}})],g);var l=g,u=n(3),y=Object(u.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("Common",{attrs:{sidebar:!1},scopedSlots:this._u([{key:"sidebar-bottom",fn:function(){return[e("BlogInfo")]},proxy:!0}])},[this._v(" "),this.currentPathEncrypted&&!this.globalEncrypted?e("Password",{on:{"password-verify":this.setPassword}}):e("BlogPage")],1)}),[],!1,null,null,null);e.default=y.exports}}]);