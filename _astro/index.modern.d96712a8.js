function o(){return o=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(s[t]=r[t])}return s},o.apply(this,arguments)}const d=s=>String(s).split(".").map(e=>String(parseInt(e||"0",10))).concat(["0","0"]).slice(0,3).join(".");let y=class{constructor(){this.isSwupPlugin=!0,this.swup=void 0,this.version=void 0,this.requires={},this.handlersToUnregister=[]}mount(){}unmount(){this.handlersToUnregister.forEach(e=>e()),this.handlersToUnregister=[]}_beforeMount(){if(!this.name)throw new Error("You must define a name of plugin when creating a class.")}_afterUnmount(){}_checkRequirements(){return typeof this.requires!="object"||Object.entries(this.requires).forEach(([e,r])=>{if(!function(t,i,u){const g=function(a,h){var c;if(a==="swup")return(c=h.version)!=null?c:"";{var l;const p=h.findPlugin(a);return(l=p?.version)!=null?l:""}}(t,u);return!!g&&((a,h)=>h.every(c=>{const[,l,p]=c.match(/^([\D]+)?(.*)$/)||[];var m,f;return((w,b)=>{const v={"":n=>n===0,">":n=>n>0,">=":n=>n>=0,"<":n=>n<0,"<=":n=>n<=0};return(v[b]||v[""])(w)})((f=p,m=d(m=a),f=d(f),m.localeCompare(f,void 0,{numeric:!0})),l||">=")}))(g,i)}(e,r=Array.isArray(r)?r:[r],this.swup)){const t=`${e} ${r.join(", ")}`;throw new Error(`Plugin version mismatch: ${this.name} requires ${t}`)}}),!0}on(e,r,t={}){var i;r=!(i=r).name.startsWith("bound ")||i.hasOwnProperty("prototype")?r.bind(this):r;const u=this.swup.hooks.on(e,r,t);return this.handlersToUnregister.push(u),u}once(e,r,t={}){return this.on(e,r,o({},t,{once:!0}))}before(e,r,t={}){return this.on(e,r,o({},t,{before:!0}))}replace(e,r,t={}){return this.on(e,r,o({},t,{replace:!0}))}off(e,r){return this.swup.hooks.off(e,r)}};export{y as e};
