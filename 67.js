<!DOCTYPE html>

<!--[if lt IE 7 ]> <html class="ie6" xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7" xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8" xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9" xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html class="" xmlns="http://www.w3.org/1999/xhtml" xmlns:fb="http://ogp.me/ns/fb#"> <!--<![endif]-->
<head>
<script>window.NREUM||(NREUM={});NREUM.info={"beacon":"bam-cell.nr-data.net","errorBeacon":"bam-cell.nr-data.net","licenseKey":"6199c4ccac","applicationID":"11952528","transactionName":"dV9XQUIKVQ1TS0xVXldcVVBeAlwSGUoLWUE=","queueTime":0,"applicationTime":101,"agent":""}</script>
<script>(window.NREUM||(NREUM={})).init={ajax:{deny_list:["bam-cell.nr-data.net"]}};(window.NREUM||(NREUM={})).loader_config={xpid:"XAUPV1dUGwIBXVRQAgMP",licenseKey:"6199c4ccac",applicationID:"11952528"};window.NREUM||(NREUM={}),__nr_require=function(t,e,n){function r(n){if(!e[n]){var i=e[n]={exports:{}};t[n][0].call(i.exports,function(e){var i=t[n][1][e];return r(i||e)},i,i.exports)}return e[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<n.length;i++)r(n[i]);return r}({1:[function(t,e,n){function r(t){try{s.console&&console.log(t)}catch(e){}}var i,o=t("ee"),a=t(28),s={};try{i=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,i.indexOf("dev")!==-1&&(s.dev=!0),i.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&o.on("internal-error",function(t){r(t.stack)}),s.dev&&o.on("fn-err",function(t,e,n){r(n.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,e){return t}).join(", ")))},{}],2:[function(t,e,n){function r(t,e,n,r,s){try{p?p-=1:i(s||new UncaughtException(t,e,n),!0)}catch(f){try{o("ierr",[f,c.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,e,n){this.message=t||"Uncaught error with no additional information",this.sourceURL=e,this.line=n}function i(t,e){var n=e?null:c.now();o("err",[t,n])}var o=t("handle"),a=t(29),s=t("ee"),c=t("loader"),f=t("gos"),u=window.onerror,d=!1,l="nr@seenError";if(!c.disabled){var p=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(10),t(9),"addEventListener"in window&&t(6),c.xhrWrappable&&t(11),d=!0)}s.on("fn-start",function(t,e,n){d&&(p+=1)}),s.on("fn-err",function(t,e,n){d&&!n[l]&&(f(n,l,function(){return!0}),this.thrown=!0,i(n))}),s.on("fn-end",function(){d&&!this.thrown&&p>0&&(p-=1)}),s.on("internal-error",function(t){o("ierr",[t,c.now(),!0])})}},{}],3:[function(t,e,n){var r=t("loader");r.disabled||(r.features.ins=!0)},{}],4:[function(t,e,n){function r(){var t=new PerformanceObserver(function(t,e){var n=t.getEntries();s(v,[n])});try{t.observe({entryTypes:["resource"]})}catch(e){}}function i(t){if(s(v,[window.performance.getEntriesByType(w)]),window.performance["c"+l])try{window.performance[h](m,i,!1)}catch(t){}else try{window.performance[h]("webkit"+m,i,!1)}catch(t){}}function o(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var a=t("ee"),s=t("handle"),c=t(10),f=t(9),u=t(5),d=t(19),l="learResourceTimings",p="addEventListener",h="removeEventListener",m="resourcetimingbufferfull",v="bstResource",w="resource",g="-start",y="-end",x="fn"+g,b="fn"+y,E="bstTimer",R="pushState",S=t("loader");if(!S.disabled){S.features.stn=!0,t(8),"addEventListener"in window&&t(6);var O=NREUM.o.EV;a.on(x,function(t,e){var n=t[0];n instanceof O&&(this.bstStart=S.now())}),a.on(b,function(t,e){var n=t[0];n instanceof O&&s("bst",[n,e,this.bstStart,S.now()])}),c.on(x,function(t,e,n){this.bstStart=S.now(),this.bstType=n}),c.on(b,function(t,e){s(E,[e,this.bstStart,S.now(),this.bstType])}),f.on(x,function(){this.bstStart=S.now()}),f.on(b,function(t,e){s(E,[e,this.bstStart,S.now(),"requestAnimationFrame"])}),a.on(R+g,function(t){this.time=S.now(),this.startPath=location.pathname+location.hash}),a.on(R+y,function(t){s("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),u()?(s(v,[window.performance.getEntriesByType("resource")]),r()):p in window.performance&&(window.performance["c"+l]?window.performance[p](m,i,d(!1)):window.performance[p]("webkit"+m,i,d(!1))),document[p]("scroll",o,d(!1)),document[p]("keypress",o,d(!1)),document[p]("click",o,d(!1))}}},{}],5:[function(t,e,n){e.exports=function(){return"PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver}},{}],6:[function(t,e,n){function r(t){for(var e=t;e&&!e.hasOwnProperty(u);)e=Object.getPrototypeOf(e);e&&i(e)}function i(t){s.inPlace(t,[u,d],"-",o)}function o(t,e){return t[1]}var a=t("ee").get("events"),s=t("wrap-function")(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";e.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(i(window),i(f.prototype)),a.on(u+"-start",function(t,e){var n=t[1];if(null!==n&&("function"==typeof n||"object"==typeof n)){var r=c(n,"nr@wrapped",function(){function t(){if("function"==typeof n.handleEvent)return n.handleEvent.apply(n,arguments)}var e={object:t,"function":n}[typeof n];return e?s(e,"fn-",null,e.name||"anonymous"):n});this.wrapped=t[1]=r}}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],7:[function(t,e,n){function r(t,e,n){var r=t[e];"function"==typeof r&&(t[e]=function(){var t=o(arguments),e={};i.emit(n+"before-start",[t],e);var a;e[m]&&e[m].dt&&(a=e[m].dt);var s=r.apply(this,t);return i.emit(n+"start",[t,a],s),s.then(function(t){return i.emit(n+"end",[null,t],s),t},function(t){throw i.emit(n+"end",[t],s),t})})}var i=t("ee").get("fetch"),o=t(29),a=t(28);e.exports=i;var s=window,c="fetch-",f=c+"body-",u=["arrayBuffer","blob","json","text","formData"],d=s.Request,l=s.Response,p=s.fetch,h="prototype",m="nr@context";d&&l&&p&&(a(u,function(t,e){r(d[h],e,f),r(l[h],e,f)}),r(s,"fetch",c),i.on(c+"end",function(t,e){var n=this;if(e){var r=e.headers.get("content-length");null!==r&&(n.rxSize=r),i.emit(c+"done",[null,e],n)}else i.emit(c+"done",[t],n)}))},{}],8:[function(t,e,n){var r=t("ee").get("history"),i=t("wrap-function")(r);e.exports=r;var o=window.history&&window.history.constructor&&window.history.constructor.prototype,a=window.history;o&&o.pushState&&o.replaceState&&(a=o),i.inPlace(a,["pushState","replaceState"],"-")},{}],9:[function(t,e,n){var r=t("ee").get("raf"),i=t("wrap-function")(r),o="equestAnimationFrame";e.exports=r,i.inPlace(window,["r"+o,"mozR"+o,"webkitR"+o,"msR"+o],"raf-"),r.on("raf-start",function(t){t[0]=i(t[0],"fn-")})},{}],10:[function(t,e,n){function r(t,e,n){t[0]=a(t[0],"fn-",null,n)}function i(t,e,n){this.method=n,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,n)}var o=t("ee").get("timer"),a=t("wrap-function")(o),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";e.exports=o,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),o.on(c+u,r),o.on(s+u,i)},{}],11:[function(t,e,n){function r(t,e){d.inPlace(e,["onreadystatechange"],"fn-",s)}function i(){var t=this,e=u.context(t);t.readyState>3&&!e.resolved&&(e.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",s)}function o(t){x.push(t),m&&(E?E.then(a):w?w(a):(R=-R,S.data=R))}function a(){for(var t=0;t<x.length;t++)r([],x[t]);x.length&&(x=[])}function s(t,e){return e}function c(t,e){for(var n in t)e[n]=t[n];return e}t(6);var f=t("ee"),u=f.get("xhr"),d=t("wrap-function")(u),l=t(19),p=NREUM.o,h=p.XHR,m=p.MO,v=p.PR,w=p.SI,g="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],x=[];e.exports=u;var b=window.XMLHttpRequest=function(t){var e=new h(t);try{u.emit("new-xhr",[e],e),e.addEventListener(g,i,l(!1))}catch(n){try{u.emit("internal-error",[n])}catch(r){}}return e};if(c(h,b),b.prototype=h.prototype,d.inPlace(b.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,e){r(t,e),o(e)}),u.on("open-xhr-start",r),m){var E=v&&v.resolve();if(!w&&!v){var R=1,S=document.createTextNode(R);new m(a).observe(S,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===g||a()})},{}],12:[function(t,e,n){function r(t){if(!s(t))return null;var e=window.NREUM;if(!e.loader_config)return null;var n=(e.loader_config.accountID||"").toString()||null,r=(e.loader_config.agentID||"").toString()||null,f=(e.loader_config.trustKey||"").toString()||null;if(!n||!r)return null;var h=p.generateSpanId(),m=p.generateTraceId(),v=Date.now(),w={spanId:h,traceId:m,timestamp:v};return(t.sameOrigin||c(t)&&l())&&(w.traceContextParentHeader=i(h,m),w.traceContextStateHeader=o(h,v,n,r,f)),(t.sameOrigin&&!u()||!t.sameOrigin&&c(t)&&d())&&(w.newrelicHeader=a(h,m,v,n,r,f)),w}function i(t,e){return"00-"+e+"-"+t+"-01"}function o(t,e,n,r,i){var o=0,a="",s=1,c="",f="";return i+"@nr="+o+"-"+s+"-"+n+"-"+r+"-"+t+"-"+a+"-"+c+"-"+f+"-"+e}function a(t,e,n,r,i,o){var a="btoa"in window&&"function"==typeof window.btoa;if(!a)return null;var s={v:[0,1],d:{ty:"Browser",ac:r,ap:i,id:t,tr:e,ti:n}};return o&&r!==o&&(s.d.tk=o),btoa(JSON.stringify(s))}function s(t){return f()&&c(t)}function c(t){var e=!1,n={};if("init"in NREUM&&"distributed_tracing"in NREUM.init&&(n=NREUM.init.distributed_tracing),t.sameOrigin)e=!0;else if(n.allowed_origins instanceof Array)for(var r=0;r<n.allowed_origins.length;r++){var i=h(n.allowed_origins[r]);if(t.hostname===i.hostname&&t.protocol===i.protocol&&t.port===i.port){e=!0;break}}return e}function f(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.enabled}function u(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.exclude_newrelic_header}function d(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&NREUM.init.distributed_tracing.cors_use_newrelic_header!==!1}function l(){return"init"in NREUM&&"distributed_tracing"in NREUM.init&&!!NREUM.init.distributed_tracing.cors_use_tracecontext_headers}var p=t(25),h=t(14);e.exports={generateTracePayload:r,shouldGenerateTrace:s}},{}],13:[function(t,e,n){function r(t){var e=this.params,n=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<l;r++)t.removeEventListener(d[r],this.listener,!1);return e.protocol&&"data"===e.protocol?void g("Ajax/DataUrl/Excluded"):void(e.aborted||(n.duration=a.now()-this.startTime,this.loadCaptureCalled||4!==t.readyState?null==e.status&&(e.status=0):o(this,t),n.cbTime=this.cbTime,s("xhr",[e,n,this.startTime,this.endTime,"xhr"],this)))}}function i(t,e){var n=c(e),r=t.params;r.hostname=n.hostname,r.port=n.port,r.protocol=n.protocol,r.host=n.hostname+":"+n.port,r.pathname=n.pathname,t.parsedOrigin=n,t.sameOrigin=n.sameOrigin}function o(t,e){t.params.status=e.status;var n=v(e,t.lastSize);if(n&&(t.metrics.rxSize=n),t.sameOrigin){var r=e.getResponseHeader("X-NewRelic-App-Data");r&&(t.params.cat=r.split(", ").pop())}t.loadCaptureCalled=!0}var a=t("loader");if(a.xhrWrappable&&!a.disabled){var s=t("handle"),c=t(14),f=t(12).generateTracePayload,u=t("ee"),d=["load","error","abort","timeout"],l=d.length,p=t("id"),h=t(20),m=t(18),v=t(15),w=t(19),g=t(21).recordSupportability,y=NREUM.o.REQ,x=window.XMLHttpRequest;a.features.xhr=!0,t(11),t(7),u.on("new-xhr",function(t){var e=this;e.totalCbs=0,e.called=0,e.cbTime=0,e.end=r,e.ended=!1,e.xhrGuids={},e.lastSize=null,e.loadCaptureCalled=!1,e.params=this.params||{},e.metrics=this.metrics||{},t.addEventListener("load",function(n){o(e,t)},w(!1)),h&&(h>34||h<10)||t.addEventListener("progress",function(t){e.lastSize=t.loaded},w(!1))}),u.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),u.on("open-xhr-end",function(t,e){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&e.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid);var n=f(this.parsedOrigin);if(n){var r=!1;n.newrelicHeader&&(e.setRequestHeader("newrelic",n.newrelicHeader),r=!0),n.traceContextParentHeader&&(e.setRequestHeader("traceparent",n.traceContextParentHeader),n.traceContextStateHeader&&e.setRequestHeader("tracestate",n.traceContextStateHeader),r=!0),r&&(this.dt=n)}}),u.on("send-xhr-start",function(t,e){var n=this.metrics,r=t[0],i=this;if(n&&r){var o=m(r);o&&(n.txSize=o)}this.startTime=a.now(),this.listener=function(t){try{"abort"!==t.type||i.loadCaptureCalled||(i.params.aborted=!0),("load"!==t.type||i.called===i.totalCbs&&(i.onloadCalled||"function"!=typeof e.onload))&&i.end(e)}catch(n){try{u.emit("internal-error",[n])}catch(r){}}};for(var s=0;s<l;s++)e.addEventListener(d[s],this.listener,w(!1))}),u.on("xhr-cb-time",function(t,e,n){this.cbTime+=t,e?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof n.onload||this.end(n)}),u.on("xhr-load-added",function(t,e){var n=""+p(t)+!!e;this.xhrGuids&&!this.xhrGuids[n]&&(this.xhrGuids[n]=!0,this.totalCbs+=1)}),u.on("xhr-load-removed",function(t,e){var n=""+p(t)+!!e;this.xhrGuids&&this.xhrGuids[n]&&(delete this.xhrGuids[n],this.totalCbs-=1)}),u.on("xhr-resolved",function(){this.endTime=a.now()}),u.on("addEventListener-end",function(t,e){e instanceof x&&"load"===t[0]&&u.emit("xhr-load-added",[t[1],t[2]],e)}),u.on("removeEventListener-end",function(t,e){e instanceof x&&"load"===t[0]&&u.emit("xhr-load-removed",[t[1],t[2]],e)}),u.on("fn-start",function(t,e,n){e instanceof x&&("onload"===n&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=a.now()))}),u.on("fn-end",function(t,e){this.xhrCbStart&&u.emit("xhr-cb-time",[a.now()-this.xhrCbStart,this.onload,e],e)}),u.on("fetch-before-start",function(t){function e(t,e){var n=!1;return e.newrelicHeader&&(t.set("newrelic",e.newrelicHeader),n=!0),e.traceContextParentHeader&&(t.set("traceparent",e.traceContextParentHeader),e.traceContextStateHeader&&t.set("tracestate",e.traceContextStateHeader),n=!0),n}var n,r=t[1]||{};"string"==typeof t[0]?n=t[0]:t[0]&&t[0].url?n=t[0].url:window.URL&&t[0]&&t[0]instanceof URL&&(n=t[0].href),n&&(this.parsedOrigin=c(n),this.sameOrigin=this.parsedOrigin.sameOrigin);var i=f(this.parsedOrigin);if(i&&(i.newrelicHeader||i.traceContextParentHeader))if("string"==typeof t[0]||window.URL&&t[0]&&t[0]instanceof URL){var o={};for(var a in r)o[a]=r[a];o.headers=new Headers(r.headers||{}),e(o.headers,i)&&(this.dt=i),t.length>1?t[1]=o:t.push(o)}else t[0]&&t[0].headers&&e(t[0].headers,i)&&(this.dt=i)}),u.on("fetch-start",function(t,e){this.params={},this.metrics={},this.startTime=a.now(),this.dt=e,t.length>=1&&(this.target=t[0]),t.length>=2&&(this.opts=t[1]);var n,r=this.opts||{},o=this.target;if("string"==typeof o?n=o:"object"==typeof o&&o instanceof y?n=o.url:window.URL&&"object"==typeof o&&o instanceof URL&&(n=o.href),i(this,n),"data"!==this.params.protocol){var s=(""+(o&&o instanceof y&&o.method||r.method||"GET")).toUpperCase();this.params.method=s,this.txSize=m(r.body)||0}}),u.on("fetch-done",function(t,e){if(this.endTime=a.now(),this.params||(this.params={}),"data"===this.params.protocol)return void g("Ajax/DataUrl/Excluded");this.params.status=e?e.status:0;var n;"string"==typeof this.rxSize&&this.rxSize.length>0&&(n=+this.rxSize);var r={txSize:this.txSize,rxSize:n,duration:a.now()-this.startTime};s("xhr",[this.params,r,this.startTime,this.endTime,"fetch"],this)})}},{}],14:[function(t,e,n){var r={};e.exports=function(t){if(t in r)return r[t];if(0===(t||"").indexOf("data:"))return{protocol:"data"};var e=document.createElement("a"),n=window.location,i={};e.href=t,i.port=e.port;var o=e.href.split("://");!i.port&&o[1]&&(i.port=o[1].split("/")[0].split("@").pop().split(":")[1]),i.port&&"0"!==i.port||(i.port="https"===o[0]?"443":"80"),i.hostname=e.hostname||n.hostname,i.pathname=e.pathname,i.protocol=o[0],"/"!==i.pathname.charAt(0)&&(i.pathname="/"+i.pathname);var a=!e.protocol||":"===e.protocol||e.protocol===n.protocol,s=e.hostname===document.domain&&e.port===n.port;return i.sameOrigin=a&&(!e.hostname||s),"/"===i.pathname&&(r[t]=i),i}},{}],15:[function(t,e,n){function r(t,e){var n=t.responseType;return"json"===n&&null!==e?e:"arraybuffer"===n||"blob"===n||"json"===n?i(t.response):"text"===n||""===n||void 0===n?i(t.responseText):void 0}var i=t(18);e.exports=r},{}],16:[function(t,e,n){function r(){}function i(t,e,n,r){return function(){return u.recordSupportability("API/"+e+"/called"),o(t+e,[f.now()].concat(s(arguments)),n?null:this,r),n?void 0:this}}var o=t("handle"),a=t(28),s=t(29),c=t("ee").get("tracer"),f=t("loader"),u=t(21),d=NREUM;"undefined"==typeof window.newrelic&&(newrelic=d);var l=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],p="api-",h=p+"ixn-";a(l,function(t,e){d[e]=i(p,e,!0,"api")}),d.addPageAction=i(p,"addPageAction",!0),d.setCurrentRouteName=i(p,"routeName",!0),e.exports=newrelic,d.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(t,e){var n={},r=this,i="function"==typeof e;return o(h+"tracer",[f.now(),t,n],r),function(){if(c.emit((i?"":"no-")+"fn-start",[f.now(),r,i],n),i)try{return e.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],n),t}finally{c.emit("fn-end",[f.now()],n)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,e){m[e]=i(h,e)}),newrelic.noticeError=function(t,e){"string"==typeof t&&(t=new Error(t)),u.recordSupportability("API/noticeError/called"),o("err",[t,f.now(),!1,e])}},{}],17:[function(t,e,n){function r(t){if(NREUM.init){for(var e=NREUM.init,n=t.split("."),r=0;r<n.length-1;r++)if(e=e[n[r]],"object"!=typeof e)return;return e=e[n[n.length-1]]}}e.exports={getConfiguration:r}},{}],18:[function(t,e,n){e.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(e){return}}}},{}],19:[function(t,e,n){var r=!1;try{var i=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}catch(o){}e.exports=function(t){return r?{passive:!0,capture:!!t}:!!t}},{}],20:[function(t,e,n){var r=0,i=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);i&&(r=+i[1]),e.exports=r},{}],21:[function(t,e,n){function r(t,e){var n=[a,t,{name:t},e];return o("storeMetric",n,null,"api"),n}function i(t,e){var n=[s,t,{name:t},e];return o("storeEventMetrics",n,null,"api"),n}var o=t("handle"),a="sm",s="cm";e.exports={constants:{SUPPORTABILITY_METRIC:a,CUSTOM_METRIC:s},recordSupportability:r,recordCustom:i}},{}],22:[function(t,e,n){function r(){return s.exists&&performance.now?Math.round(performance.now()):(o=Math.max((new Date).getTime(),o))-a}function i(){return o}var o=(new Date).getTime(),a=o,s=t(30);e.exports=r,e.exports.offset=a,e.exports.getLastTimestamp=i},{}],23:[function(t,e,n){function r(t){return!(!t||!t.protocol||"file:"===t.protocol)}e.exports=r},{}],24:[function(t,e,n){function r(t,e){var n=t.getEntries();n.forEach(function(t){"first-paint"===t.name?p("timing",["fp",Math.floor(t.startTime)]):"first-contentful-paint"===t.name&&p("timing",["fcp",Math.floor(t.startTime)])})}function i(t,e){var n=t.getEntries();if(n.length>0){var r=n[n.length-1];if(f&&f<r.startTime)return;var i=[r],o=a({});o&&i.push(o),p("lcp",i)}}function o(t){t.getEntries().forEach(function(t){t.hadRecentInput||p("cls",[t])})}function a(t){var e=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(e)return e.type&&(t["net-type"]=e.type),e.effectiveType&&(t["net-etype"]=e.effectiveType),e.rtt&&(t["net-rtt"]=e.rtt),e.downlink&&(t["net-dlink"]=e.downlink),t}function s(t){if(t instanceof w&&!y){var e=Math.round(t.timeStamp),n={type:t.type};a(n),e<=h.now()?n.fid=h.now()-e:e>h.offset&&e<=Date.now()?(e-=h.offset,n.fid=h.now()-e):e=h.now(),y=!0,p("timing",["fi",e,n])}}function c(t){"hidden"===t&&(f=h.now(),p("pageHide",[f]))}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var f,u,d,l,p=t("handle"),h=t("loader"),m=t(27),v=t(19),w=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){u=new PerformanceObserver(r);try{u.observe({entryTypes:["paint"]})}catch(g){}d=new PerformanceObserver(i);try{d.observe({entryTypes:["largest-contentful-paint"]})}catch(g){}l=new PerformanceObserver(o);try{l.observe({type:"layout-shift",buffered:!0})}catch(g){}}if("addEventListener"in document){var y=!1,x=["click","keydown","mousedown","pointerdown","touchstart"];x.forEach(function(t){document.addEventListener(t,s,v(!1))})}m(c)}},{}],25:[function(t,e,n){function r(){function t(){return e?15&e[n++]:16*Math.random()|0}var e=null,n=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(e=r.getRandomValues(new Uint8Array(31)));for(var i,o="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",s=0;s<o.length;s++)i=o[s],"x"===i?a+=t().toString(16):"y"===i?(i=3&t()|8,a+=i.toString(16)):a+=i;return a}function i(){return a(16)}function o(){return a(32)}function a(t){function e(){return n?15&n[r++]:16*Math.random()|0}var n=null,r=0,i=window.crypto||window.msCrypto;i&&i.getRandomValues&&Uint8Array&&(n=i.getRandomValues(new Uint8Array(31)));for(var o=[],a=0;a<t;a++)o.push(e().toString(16));return o.join("")}e.exports={generateUuid:r,generateSpanId:i,generateTraceId:o}},{}],26:[function(t,e,n){function r(t,e){if(!i)return!1;if(t!==i)return!1;if(!e)return!0;if(!o)return!1;for(var n=o.split("."),r=e.split("."),a=0;a<r.length;a++)if(r[a]!==n[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var s=navigator.userAgent,c=s.match(a);c&&s.indexOf("Chrome")===-1&&s.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}e.exports={agent:i,version:o,match:r}},{}],27:[function(t,e,n){function r(t){function e(){t(s&&document[s]?document[s]:document[o]?"hidden":"visible")}"addEventListener"in document&&a&&document.addEventListener(a,e,i(!1))}var i=t(19);e.exports=r;var o,a,s;"undefined"!=typeof document.hidden?(o="hidden",a="visibilitychange",s="visibilityState"):"undefined"!=typeof document.msHidden?(o="msHidden",a="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(o="webkitHidden",a="webkitvisibilitychange",s="webkitVisibilityState")},{}],28:[function(t,e,n){function r(t,e){var n=[],r="",o=0;for(r in t)i.call(t,r)&&(n[o]=e(r,t[r]),o+=1);return n}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],29:[function(t,e,n){function r(t,e,n){e||(e=0),"undefined"==typeof n&&(n=t?t.length:0);for(var r=-1,i=n-e||0,o=Array(i<0?0:i);++r<i;)o[r]=t[e+r];return o}e.exports=r},{}],30:[function(t,e,n){e.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(t,e,n){function r(){}function i(t){function e(t){return t&&t instanceof r?t:t?f(t,c,a):a()}function n(n,r,i,o,a){if(a!==!1&&(a=!0),!p.aborted||o){t&&a&&t(n,r,i);for(var s=e(i),c=m(n),f=c.length,u=0;u<f;u++)c[u].apply(s,r);var l=d[y[n]];return l&&l.push([x,n,r,s]),s}}function o(t,e){g[t]=m(t).concat(e)}function h(t,e){var n=g[t];if(n)for(var r=0;r<n.length;r++)n[r]===e&&n.splice(r,1)}function m(t){return g[t]||[]}function v(t){return l[t]=l[t]||i(n)}function w(t,e){p.aborted||u(t,function(t,n){e=e||"feature",y[n]=e,e in d||(d[e]=[])})}var g={},y={},x={on:o,addEventListener:o,removeEventListener:h,emit:n,get:v,listeners:m,context:e,buffer:w,abort:s,aborted:!1};return x}function o(t){return f(t,c,a)}function a(){return new r}function s(){(d.api||d.feature)&&(p.aborted=!0,d=p.backlog={})}var c="nr@context",f=t("gos"),u=t(28),d={},l={},p=e.exports=i();e.exports.getOrSetContext=o,p.backlog=d},{}],gos:[function(t,e,n){function r(t,e,n){if(i.call(t,e))return t[e];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,e,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return t[e]=r,r}var i=Object.prototype.hasOwnProperty;e.exports=r},{}],handle:[function(t,e,n){function r(t,e,n,r){i.buffer([t],r),i.emit(t,e,n)}var i=t("ee").get("handle");e.exports=r,r.ee=i},{}],id:[function(t,e,n){function r(t){var e=typeof t;return!t||"object"!==e&&"function"!==e?-1:t===window?0:a(t,o,function(){return i++})}var i=1,o="nr@id",a=t("gos");e.exports=r},{}],loader:[function(t,e,n){function r(){if(!T++){var t=O.info=NREUM.info,e=v.getElementsByTagName("script")[0];if(setTimeout(f.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&e))return f.abort();c(R,function(e,n){t[e]||(t[e]=n)});var n=a();s("mark",["onload",n+O.offset],null,"api"),s("timing",["load",n]);var r=v.createElement("script");0===t.agent.indexOf("http://")||0===t.agent.indexOf("https://")?r.src=t.agent:r.src=h+"://"+t.agent,e.parentNode.insertBefore(r,e)}}function i(){"complete"===v.readyState&&o()}function o(){s("mark",["domContent",a()+O.offset],null,"api")}var a=t(22),s=t("handle"),c=t(28),f=t("ee"),u=t(26),d=t(23),l=t(17),p=t(19),h=l.getConfiguration("ssl")===!1?"http":"https",m=window,v=m.document,w="addEventListener",g="attachEvent",y=m.XMLHttpRequest,x=y&&y.prototype,b=!d(m.location);NREUM.o={ST:setTimeout,SI:m.setImmediate,CT:clearTimeout,XHR:y,REQ:m.Request,EV:m.Event,PR:m.Promise,MO:m.MutationObserver};var E=""+location,R={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1215.min.js"},S=y&&x&&x[w]&&!/CriOS/.test(navigator.userAgent),O=e.exports={offset:a.getLastTimestamp(),now:a,origin:E,features:{},xhrWrappable:S,userAgent:u,disabled:b};if(!b){t(16),t(24),v[w]?(v[w]("DOMContentLoaded",o,p(!1)),m[w]("load",r,p(!1))):(v[g]("onreadystatechange",i),m[g]("onload",r)),s("mark",["firstbyte",a.getLastTimestamp()],null,"api");var T=0}},{}],"wrap-function":[function(t,e,n){function r(t,e){function n(e,n,r,c,f){function nrWrapper(){var o,a,u,l;try{a=this,o=d(arguments),u="function"==typeof r?r(o,a):r||{}}catch(p){i([p,"",[o,a,c],u],t)}s(n+"start",[o,a,c],u,f);try{return l=e.apply(a,o)}catch(h){throw s(n+"err",[o,a,h],u,f),h}finally{s(n+"end",[o,a,l],u,f)}}return a(e)?e:(n||(n=""),nrWrapper[l]=e,o(e,nrWrapper,t),nrWrapper)}function r(t,e,r,i,o){r||(r="");var s,c,f,u="-"===r.charAt(0);for(f=0;f<e.length;f++)c=e[f],s=t[c],a(s)||(t[c]=n(s,u?c+r:r,i,c,o))}function s(n,r,o,a){if(!h||e){var s=h;h=!0;try{t.emit(n,r,o,e,a)}catch(c){i([c,n,r,o],t)}h=s}}return t||(t=u),n.inPlace=r,n.flag=l,n}function i(t,e){e||(e=u);try{e.emit("internal-error",t)}catch(n){}}function o(t,e,n){if(Object.defineProperty&&Object.keys)try{var r=Object.keys(t);return r.forEach(function(n){Object.defineProperty(e,n,{get:function(){return t[n]},set:function(e){return t[n]=e,e}})}),e}catch(o){i([o],n)}for(var a in t)p.call(t,a)&&(e[a]=t[a]);return e}function a(t){return!(t&&t instanceof Function&&t.apply&&!t[l])}function s(t,e){var n=e(t);return n[l]=t,o(t,n,u),n}function c(t,e,n){var r=t[e];t[e]=s(r,n)}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;++n)e[n]=arguments[n];return e}var u=t("ee"),d=t(29),l="nr@original",p=Object.prototype.hasOwnProperty,h=!1;e.exports=r,e.exports.wrapFunction=s,e.exports.wrapInPlace=c,e.exports.argsToArray=f},{}]},{},["loader",2,13,4,3]);</script>

  <!-- fonts first: -->
  <link href='/assets/fonts.css?v=2' rel='stylesheet' type='text/css'>
  
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300|Exo:500,700|Exo+2:200,400,500,600,700' rel='stylesheet' type='text/css'>
  


  	<style>
		@font-face { 
		    font-family: 'Rabtus';
		    src: url('/fonts/rabtus/rabtus-webfont.eot');
		    src: url('/fonts/rabtus/rabtus-webfont.eot?#iefix') format('embedded-opentype'),
		         url('/fonts/rabtus/rabtus-webfont.woff2') format('woff2'),
		         url('/fonts/rabtus/rabtus-webfont.woff') format('woff'),
		         url('/fonts/rabtus/rabtus-webfont.ttf') format('truetype'),
		         url('/fonts/rabtus/rabtus-webfont.svg#xoloniumregular') format('svg');
		    font-weight: normal;
		    font-style: normal;
		}
	</style>


  <title>CodeMonkey</title>


  <meta name="og:title" content="CodeMonkey" />
  <meta property="og:image" content="https://app.codemonkey.com/images/screenshot-new.png" />
  <meta property="og:description" content="CodeMonkey is a fun online game that teaches you how to code. Real world programming language. Write code. Catch bananas. Save the world." />
  <meta name="twitter:title" content="CodeMonkey" />
  <meta name="twitter:image" content="https://app.codemonkey.com/images/screenshot-new.png" />
  <meta name="twitter:description" content="CodeMonkey is a fun online game that teaches you how to code. Real world programming language. Write code. Catch bananas. Save the world." />

  <meta name="msapplication-config" content="none"/>
  <meta name="theme-color" content="#87b85b">
  <!-- for tablets, prevents zooming & should prevent the 300ms tap delay on chrome: -->
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <link rel="manifest" href="/manifest.json"></link>

  <script>
//<![CDATA[
window.gon={};gon.forms_token="94ec7bd1c1f35a42";gon.is_development=false;gon.cpp_hostname="cpp-service.playcodemonkey.cn";gon.after_signup_redirect="/challenges/67";gon.geolocation={"country_name":"United States","region_name":"Washington","city":"Auburn","zip_code":"98092","isp":"Washington State K-20 Telecommunications Network"};gon.sessionFlag="unconvertible";gon.android=null;gon.ipad=null;gon.windows_touch=null;gon.tablet=null;gon.locale="en";gon.feature_flags=["skip-solutions-query","demo_classroom","moe-classrooms","family-plan","beaver-performance-send-to-sentry","disable-drafts","validate-recaptcha"];gon.user={"id":4983841,"uid":"118376705653213567522","name":null,"email":"rhoadgav000@auburnsd.org","unconfirmed_email":null,"login":"rhoadgav000@auburnsd.org","role":"","human_name":"GAVIN RHOADES","offer_purchase":false,"avatar_image":"/assets/avatars/small/00.png","student":true,"classroom_name":null,"tal":false,"tal_afterschool":false,"competition":false,"child":false,"parent":false,"ms_edu":false,"signed_up_as":"student","ga_subscriptions":"2021-22","skipper":false,"root_path":"/courses","human_provider_name":"Google","provider":"google_oauth2","moe":false,"skiller":true,"test_feature_enabled":false};gon.session_store={"chinese":false,"chinese_app":false,"junior_engineers":null,"session_id":"759748258037705af158cc6113223caa"};gon.ga_enabled=false;gon.environment_domain="auto";gon.analytics_app_id="UA-47866006-1";gon.offer_desktop=null;gon.configuration={"monkey":{"x":300,"y":160,"rotation":30},"bananas":[{"x":500,"y":390},{"x":530,"y":220},{"x":60,"y":220},{"x":300,"y":430}],"rafts":[{"x":300,"y":220}],"islands":[{"x":300,"y":290},{"x":300,"y":360},{"x":300,"y":430},{"x":370,"y":220},{"x":450,"y":220},{"x":530,"y":220},{"x":220,"y":220},{"x":140,"y":220},{"x":60,"y":220},{"x":380,"y":290},{"x":440,"y":340},{"x":500,"y":390},{"x":300,"y":160}],"fish":false,"bridge":false,"river":false,"eagle":false,"bushes":null,"turtle":false,"lake":true};gon.hints=["Use \u003ccode\u003eturnTo\u003c/code\u003e and \u003ccode\u003edistanceTo\u003c/code\u003e to get each banana.","Return to the \u003ccode\u003eraft\u003c/code\u003e between bananas."];gon.hint_code="if regexCount(code,'raft') \u003c 2\n    return 1\nelse\n    return 0";gon.stars_code="[code.indexOf('for ') != -1, 5]";gon.world_id=5;gon.id=58;gon.first_code="for b in bananas\n    turnTo raft";gon.position=67;gon.win_msg="Excellent!";gon.instructions_unparsed=["Watch your steps here!"];gon.instructions="Watch your steps here!";gon.disable_solution_url=null;gon.learned_methods=[{"id":1,"name":"step","description":"Moves by a number of steps.","created_at":"2014-02-18T19:56:53.774Z","updated_at":"2014-02-24T12:14:38.906Z","example":"\u003cb\u003e Example:\u003c/b\u003e\u003c/br\u003e\u003ccode\u003estep 10\u003c/code\u003e","usage":"step ","language":"coffeescript","index":1},{"id":2,"name":"turn","description":"Rotate by a number of degrees counter-clockwise","created_at":"2014-02-18T19:56:53.814Z","updated_at":"2014-02-24T12:14:38.919Z","example":"\u003cb\u003e Example:\u003c/b\u003e\u003c/br\u003e\u003ccode\u003eturn left\u003c/code\u003e","usage":"turn ","language":"coffeescript","index":2},{"id":5,"name":"turnTo","description":"Rotates to the direction of a given object","created_at":"2014-04-28T12:52:10.852Z","updated_at":"2014-04-28T12:52:10.852Z","example":"\u003cb\u003e Example:\u003c/b\u003e\u003c/br\u003e\u003ccode\u003eturnTo eagle\u003c/code\u003e","usage":"turnTo ","language":"coffeescript","index":5},{"id":7,"name":"distanceTo","description":"Returns the distance to a given object","created_at":"2014-07-13T07:33:27.344Z","updated_at":"2014-07-13T07:33:27.344Z","example":"\u003cb\u003e Example:\u003c/b\u003e\u003c/br\u003e\u003ccode\u003ed = distanceTo banana\u003c/code\u003e","usage":"distanceTo ","language":"coffeescript","index":7},{"id":8,"name":"say","description":"Say something! (Also scares away rats)","created_at":"2014-07-13T07:33:27.377Z","updated_at":"2014-07-13T07:33:27.377Z","example":"\u003cb\u003e Example:\u003c/b\u003e\u003c/br\u003e\u003ccode\u003esay \"Hello World!\"\u003c/code\u003e","usage":"say ","language":"coffeescript","index":8},{"id":9,"name":"for","description":"Loop over elements of an array","created_at":"2014-07-13T07:33:27.382Z","updated_at":"2014-10-07T02:07:43.636Z","example":"\u003cb\u003e Example:\u003c/b\u003e\u003c/br\u003e\u003ccode\u003efor b in bananas\u003c/br\u003e\u0026nbsp\u0026nbsp\u0026nbsp\u0026nbspturnTo b\u003c/code\u003e","usage":"fora\t","language":"coffeescript","index":9}];gon.second_star_hint="Use a \"for\" loop.";gon.world_position=6;gon.chapter="ScarySwamps";gon.ca_part=1;gon.challenge_param="67";gon.next_challenge_text="NEXT CHALLENGE";gon.replay_text="REPLAY";gon.ruler_explain_text=["CLICK to grab","CLICK again to start measuring","USE the number!"];gon.last_in_lesson=false;gon.challenge={"id":58,"configuration":{"monkey":{"x":300,"y":160,"rotation":30},"bananas":[{"x":500,"y":390},{"x":530,"y":220},{"x":60,"y":220},{"x":300,"y":430}],"rafts":[{"x":300,"y":220}],"islands":[{"x":300,"y":290},{"x":300,"y":360},{"x":300,"y":430},{"x":370,"y":220},{"x":450,"y":220},{"x":530,"y":220},{"x":220,"y":220},{"x":140,"y":220},{"x":60,"y":220},{"x":380,"y":290},{"x":440,"y":340},{"x":500,"y":390},{"x":300,"y":160}],"fish":false,"bridge":false,"river":false,"eagle":false,"bushes":null,"turtle":false,"lake":true},"created_at":"2014-06-02T17:07:31.000Z","updated_at":"2020-03-16T13:38:54.784Z","world_id":5,"instructions":["Watch your steps here!"],"hint":["Use \u003ccode\u003eturnTo\u003c/code\u003e and \u003ccode\u003edistanceTo\u003c/code\u003e to get each banana.","Return to the \u003ccode\u003eraft\u003c/code\u003e between bananas."],"win_msg":"Excellent!","first_code":"for b in bananas\n    turnTo raft","hint_code":"if regexCount(code,'raft') \u003c 2\n    return 1\nelse\n    return 0","position":67,"stars_code":"[code.indexOf('for ') != -1, 5]","name":"for_star","star_hint":"Use a \"for\" loop.","attempts_to_hint":6,"super_hint":"for b in bananas\n    turnTo raft\n    step distanceTo raft\n    \n    ","time_to_hint":180000,"user_id":null,"published_at":null,"thumbnail_file_name":"data","thumbnail_content_type":"image/png","thumbnail_file_size":314106,"thumbnail_updated_at":"2018-11-13T13:30:25.276Z","approved_at":null,"views_count":null,"unlock_reach":null,"globally_accessible":false,"classroom_accessible":false,"display_name":null,"drastically_changed_at":null,"language":"coffeescript","type":"ClassicChallenge"};gon.challenge_type="ClassicChallenge";gon.challenges_map_configurations={"disable_purchase_button":true,"user_in_classroom":false,"world_limit":null,"hide_skill_mode_navigation":false,"hide_parts_navigation":false};gon.has_prev_solution_for_older_version=false;gon.is_ca_challenge=true;gon.next_code={"type":"location","location":"/challenges/68"};gon.nag=false;gon.last_in_world=false;gon.video=false;gon.opening_scene=false;gon.video_sources=[];gon.load_next_badge=false;gon.stars_to_badge=28;gon.unlocking_skill=false;gon.challenge_id=58;gon.activity_title="Coding Adventure: Challenge #67";
//]]>
</script>
  <script>
    window.cdnUrlPrefix = 'https://d2j5eocv5gptnv.cloudfront.net';
    window.assetsCdnUrlPrefix = 'https://d3cmcldcieeouj.cloudfront.net';
    if(window.cdnUrlPrefix == ''){
	    window.cdnUrlPrefix = undefined;
    }
    if(window.assestCdnUrlPrefix == ''){
      window.assestCdnUrlPrefix = undefined;
    }

  </script>

  <link rel="stylesheet" media="screen" href="https://d2j5eocv5gptnv.cloudfront.net/assets/application-9a19a1ec8cb3f962971b9fb893747d16b7aaf7ad8ed31597ed7f46592fc1a87b.css" />

  <!--include here to override default css -->
  


  <script src="https://d2j5eocv5gptnv.cloudfront.net/assets/vue/vue.min-99e7fef8942c2021c70b78a80f41261176e457100d3ac565cb832113f1d7fb1d.js"></script>
  <script src="https://d2j5eocv5gptnv.cloudfront.net/assets/application-e7d9d484f4ab3de01e095d4fc0ce2c496b4fff46da22a7ebcd62dbe06e63e411.js"></script>

  <script type="text/javascript">
    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }
    window.onload = function() {
      if(!window.location.hash && !window.jQuery) {
        createCookie("assets", "self", 2);
        window.location = window.location + '#';
        window.location.reload();
      }
    }

    function dismissTrialAlert(){
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", "/preferences/dismiss_trial_alert", true);
      xhttp.send();
      $('#home-container').removeClass('has-flash-message');
    }

    function openSetupWizard() {
      openModal('setup-wizard-modal');
    }
  </script>


  <script src="https://d2j5eocv5gptnv.cloudfront.net/translations/dictionary.js?lang=en&amp;version=16493249301649324930"></script>
  <script src="https://d2j5eocv5gptnv.cloudfront.net/asset_helpers/dictionary.js?version=fcec96fd1cde85b46d41e288180565d1ec03a855"></script>
  <script src="https://d2j5eocv5gptnv.cloudfront.net/assets/angular/all-5bf9a3a36c0c29597a52d4e695b03292d274f08afdfc13b87b5ced63673f4834.js"></script>
  


    <script src="https://d2j5eocv5gptnv.cloudfront.net/assets/raven.min-71079b4baff79f5df044f91754a832d84070c3bb6dc2343ecd304fcc2e6fdd21.js"></script>
    <script type="text/javascript">
      (function(Raven) {
        if (!Raven) {
          return console.log("Raven is undefined");
        }
        Raven.config('https://5a80e135e1de4c7598105cb893e0a7d3@app.getsentry.com/57578').install()
        if (gon.user) {
          Raven.setUserContext({
            id: gon.user.id
          });
        }
        // sending up to 3 error logs per page:
        Raven._ravenSentCounter = 0
        Raven.setShouldSendCallback(function(){
          return Raven._ravenSentCounter++ < 3;
        }) 
      })(window.Raven);
    </script>


    <script src="https://d2j5eocv5gptnv.cloudfront.net/assets/konva-v4.1.2-4195513c578e362c22582ad353968d55a3f2aa7dee5f6e9ffa78f858cf9426d9.js"></script>
    
    <script type="text/javascript">
      window.Kinetic = Konva
    </script>
    <script src="https://d2j5eocv5gptnv.cloudfront.net/assets/challenges/all-5a9d3ac353f10ddef3654c12f5f2fee1d8fcb4d1611c3ae1c34658075e252acf.js"></script>

  
  
  <link rel="stylesheet" media="screen" href="https://d2j5eocv5gptnv.cloudfront.net/assets/game-6bcfe76432b6f09ae2f46d7d2d1576f8a3140e216ef00142bfac191b8ce03125.css" />


  <meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="PyuXZShK8807Y2IrDQC5kjN1zR/8p4JgvUhK1PcxZJyX/umBTCVKMET6Z3qT5c66Ju5r6n7VFf884hKUjcSXMA==" />
  
  
  
  <link rel="shortcut icon" href="/favicon_banana.gif">
  <link rel="canonical" href="https://app.codemonkey.com/challenges/67">
  <link rel="alternate" hreflang="en" href="https://app.codemonkey.com/challenges/67"/>
  <link rel="alternate" hreflang="x-default" href="https://app.codemonkey.com/challenges/67" />

  <meta name="google-site-verification" content="B0y-veFWLGw93b1jZUTtOe6gIEwSxBA1KDLUM5jLHFA" />

  <meta name="description" content="CodeMonkey is a fun online game that teaches you how to code. Real world programming language. Write code. Catch bananas. Save the world." />

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> <!--320-->



  <!-- Facebook connect: -->

  <script type="text/javascript">
    window._gaqVoteForNoah = function(url, page) {
       ga('send', 'event', 'outbound', 'click', url, {
         'transport': 'beacon',
         'hitCallback': function(){document.location = url;},
         'page': page
       });
    }
  </script>



    <meta name="robots" content="noindex">


</head>
<body class="locale-styling-en cm-body  challenge">
  <!-- facebook -->
  <div id="fb-root"></div>
  <div id="challenge-container" ng-app="cm" class=" ">
    <div id="progress_reports"></div>
    <div id="activity_reports"></div>
    

<header id="main-menu" class="navbar navbar-fixed-top" ng-controller="MainMenuController" ng-cloak>
	<div class="navbar-inner">
		<div id="logo-section">
			<div id="logo">
				<a href="/"><img src="https://d2j5eocv5gptnv.cloudfront.net/assets/non_game_misc/site_header_logo-00d955d994a1421664bda0730f1e38f266823f6a51185376b87c8a96089318fc.png?v=2" /></a>
			</div>
		</div>
		<div id='challenge_number' class="uppercase">
			<h1 ng-cloak>
				{{ getActivityTitle() }}
			</h1>
		</div>
		<div id="navbar_links">

			<!-- dropdown menu -->
				<div class="dropdown middle-link" id='menu_link'>
					<a data-toggle="dropdown" class="bright-hover">
						<img id="menu-btn" alt="Main Menu" src="https://d2j5eocv5gptnv.cloudfront.net/assets/non_game_misc/btn_menu-79904eb9880e0bef792739a3cfe614965b60a433028a930e5a30a42a2448de28.png" />
					</a>

					<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">
							<a class="dropdown-link" data-toggle="modal" data-target="#locale-modal">
			  					<li class="seperator">
			  						Language
			  						<div class="locale-letters">en</div>
			  					</li>
			  				</a>
							<a ng-if="isiPadiOS13" class="dropdown-link" ng-click="switchMobileDesktopVersion()">
								<li>{{ i18n.t(tabletMode? 'menu.request_desktop' : 'menu.request_mobile') }}</li>
							</a>

							<a class="dropdown-link" href='/'>
								<li>Home</li>
							</a>

						<a class="dropdown-link" href='/account'>
							<li>My Account</li>
						</a>
						<!-- always show these links -->
							<a class="dropdown-link" href=/plans>
								<li>Pricing</li>
							</a>
						<a class="dropdown-link" href='https://help.codemonkey.com' target='_blank'>
							<li>Help Center</li>
						</a>
						<a class="dropdown-link" href='https://www.codemonkey.com/privacy-policy/' target="_blank">
							<li class="seperator">Privacy Policy</li>
						</a>
						<!-- end -->

							<!-- signed in -->
							<a id="contact-us-link" class="dropdown-link" href='/about/contact-form'>
								<li class="seperator">Contact us</li>
							</a>
									<a class="dropdown-link green-link" href="/users/sign_out" data-method="delete" rel="nofollow">
										<li>
											Sign Out
											<span class="glyphicon glyphicon-log-in"></span>
										</li>
									</a>

					</ul>	
				</div>

			<!-- navbar links -->
				<!-- avatar -->
				<a id='user-login' class='middle-link bright-hover' ng-click="toggleProfileSummary($event)">
					<div>
							<img id="navbar-avatar" src="https://d2j5eocv5gptnv.cloudfront.net/assets/avatars/small/00.png" />
					</div>
				</a>
				<profile-summary-tooltip ng-if="showProfileSummary"></profile-summary-tooltip>

				<!-- map -->
				<a id='map-icon' class="middle-link bright-hover" ng-click="loadMapModal()" ng-controller="LoadChallengesMapController">
					<div>
						<img src="https://d2j5eocv5gptnv.cloudfront.net/assets/non_game_misc/btn_map-92de30d50f58cef030ad466939b8e9b542c2c2c3d92b9feaeb1cef3f0212c063.png" />
					</div>
				</a>

			  <a class="video-icon middle-link bright-hover" ng-click='videoToggle=true'>
    <div>
      <div class="concept-video-img"></div>
    </div>
    <div class="concept-video-title">Watch For Forest tutorial</div>
  </a>
  <div class="video-popup" ng-show="videoToggle" ng-click="videoToggle=false;$event.stopPropagation();">
    <div class="video-container">
      <img class="close-button bright-hover" ng-cdn-src="dashboard/close_upload_modal.png">
      <iframe ng-if="videoToggle" src="https://player.vimeo.com/video/589385093" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>


		</div>
	</div>
</header>
    
    
      <div id="canvas-container"></div>
      
<div id='stream-flashes' class='notification-container'>
</div>
      
<script type='text/javascript'>
$(document).ready(function() {
	solutionSaved = false;

	var playChallenge = function() {
		if (gon.opening_scene) {
			if (gon.video) {
				playVideo(gon.video_sources)
			} else {	
				openModal('scene-modal', true, true);
			}
		} else {
			openModal('instructions-modal');
		}
	}

	playChallenge();
	setHintFeedBackOnClick()

});


// I keep this function defined here so it won't be called
// from the solution view:
function saveSolution(stars, notifyParent){
	var solutionObj = makeSolutionObj(stars)
	var request = $.ajax({
		url: '/solutions',
		data : 'value=' + encodeURIComponent(JSON.stringify(solutionObj)),
		dataType : 'json',
		type : 'POST',
		headers : {
			'X-Transaction' : 'POST',
			'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
		},
		statusCode: {
			401: function() {
				window.winWindow.addNotification('You are not allowed to submit a solution at this time.');
			},
			500: function() {
				window.winWindow.addNotification('Sorry, something went wrong. Please try again later.');
			}
		}
	});

	request.done(function(response, textStatus, jqXHR) {
		if (response.path != null) { // hasn't failed
			ajaxResponse = response;
			var url = document.domain + response.path;
			if(typeof notifyParent != 'undefined') {
				notifyParent.solutionSaved(url);
			}
			window.solutionSaved = true;
			window.winWindow.toggleEvents(true); // enable buttons on win window canvas
		}
	});
}

	var ajaxResponse;

	function openShareWindow(url){
		window.open(url,'mywindow','width=550,height=420,toolbar=no,location=no,directories=no,statu s=no,menubar=no,scrollbars=no,copyhistory=no,resizable=yes');
	}
	function setHintFeedBackOnClick() {
		$("#feedback-container img").click(function(args) {
			$.ajax({
				url: "/hint_feedbacks.json",
				data : {
					challenge_path: document.location.pathname,
					hint_index: $('#hint-modal-text').data('hint-index'),
					input: args.target.id, // "helpful"/"unhelpful"
					code: getUserCode()
				},
				dataType : 'json',
				type : 'POST',
				headers : {
					'X-Transaction' : 'POST',
					'X-CSRF-Token' : $('meta[name="csrf-token"]').attr('content')
			    }
		  	}).done(function(response, textStatus, jqXHR) {
				$("#feedback-container").hide();
				$("#feedback-thanks").show();	
			});
		});
	}

</script>

<!-- code editors section -->
<div id="editors-section" ng-controller='ChallengeCodeEditorController' ng-cloak>
	<div id='see-solution-notice' ng-if='show_solution_notice' class='{{ prev_code_type || "" }}'>
		<p>
			{{ preceding_challenge_code? i18n.t("prev_challenge_code") : i18n.t("you_have_" + prev_code_type)}}
			<a href='javascript:void(0)' onclick="setPreviousSolutionCode()" ng-if="prev_code_type">
				{{ i18n.t("show_your_" + prev_code_type) }}
			</a>
		</p>
		<button class="close" onclick="removeEditorNotice()">×</button>
	</div>
	<div id='see-solution-notice' ng-if='has_prev_solution_for_older_version' class="solution-for-older-version-notice">
		<p>
			{{ i18n.t("this_is_a_new_version_to_challenge") }}
		</p>
		<button class="close" onclick="removeEditorNotice()">×</button>
	</div>
	<div id='test-error' class='test-error-hidden'>
		<p>
			<div id="test-error-animation-container"></div>
			<div id="test-error-text"></div>
		</p>
		<button class="close bright-hover" onclick="removeEditorTestError()">×</button>
	</div>
	<button id="editor-resize-btn" draggable="true" ng-if='tablet'><span class="glyphicon glyphicon-resize-full"></span></button>
	<div id='first-newline-btn' ng-if='tablet'>+</div>
	<div id='code-editor' ng-class='{{ show_solution_notice ? "notice-on-top" : ""}}'></div>
	<div id='newline-btn' class='editor-tablet-btn' ng-if='tablet'></div>
	<div id='delete-btn' class='editor-tablet-btn' ng-if='tablet'></div>
	<div id='narrate-btn' ng-show='showNarration' ng-click='playNarration()' class='editor-narrate-btn narrate-btn' ng-class="{ 'tablet-narrate-btn': tablet, 'editor-tablet-btn': tablet, 'active': playingNarration}">
	</div>
	
	<div id='editor-helper'>
		<div id='editor-helper-popover' class="popover fade bottom out" style="display: block; width: 150px;">
			<div class="arrow">
			</div>
			<div class="popover-content">
				use Tab to switch
			</div>
		</div>
	</div>
	<div id="variables-table-container"></div>
	<div id="learned_methods" ng-controller="LearnedMethodsController" class="row" ng-cloak>
		

	<!-- numbers pad: -->
	<div class="method-col" ng-style="{{ 'short' | methodWidth }}" ng-if="numbersPadMode">
		<div ng-controller="NumbersPadController" id='open-numbers-pad-button' ng-cloak>
			<div class='method-container original'>
				<a class='method-link' ng-click='toggle()' data-container="body">
					<img ng-cdn-src="methods/numbers_pad/method.png" type="button" class="method-image">
				</a>
			</div>


			<div id="numbers-pad" ng-show="visible"> 
				<div id='numbers-pad-buttons-container'>
					<div class='digit-btn' ng-click='digitClicked(1)'> 1 </div>
					<div class='digit-btn' ng-click='digitClicked(2)'> 2 </div>
					<div class='digit-btn' ng-click='digitClicked(3)'> 3 </div>
					<div class='digit-btn' ng-click='digitClicked(4)'> 4 </div>
					<div class='digit-btn' ng-click='digitClicked(5)'> 5 </div>
					<div class='digit-btn' ng-click='digitClicked(6)'> 6 </div>
					<div class='digit-btn' ng-click='digitClicked(7)'> 7 </div>
					<div class='digit-btn' ng-click='digitClicked(8)'> 8 </div>
					<div class='digit-btn' ng-click='digitClicked(9)'> 9 </div>

					<div class='digit-btn' ng-click='minusClicked()'> - </div>
					<div class='digit-btn' ng-click='digitClicked(0)'> 0 </div>
					<div class='digit-btn' ng-click='backspaceClicked()'>
						<img ng-cdn-src="methods/numbers_pad/numbers_pad_backspace.png" id="numbers-pad-backspace">
					</div>
				</div>
			</div>

		</div>

	</div>


    <!-- Uses uniq identifiers for all existing methods (learned and user defined) thus removing an exception raised whenever a user defined a method with name equal to a learned method. -->
	<div ng-repeat="lm in learned_methods track by (lm.name + lm.index)" on-finish-render="ngRepeatFinished" class="method-col" ng-style="{{ lm.name | methodWidth }}" ng-if=" lm.listed ">
		<div class='method-container original' ng-attr-data-id='{{ lm.index }}'>
			<a class='method-link' ng-click='methodClick(lm)' ng-attr-data-usage='{{ lm.usage }}' data-container="body" data-toggle="popover" data-placement="top" ng-attr-data-content="{{ lm | learnedMethodContent }}">

				<div ng-if=" lm.index && challenge_builder " ng-click='remove(lm.index)' class='method-remove'></div>
				<div class="learned-methods-btn" ng-style="{{ lm.name | methodWidth }}">
					<img ng-cdn-src='{{ lm | methodImageFile }}' class='method-icon' />
					<p class='method-text' ng-style="{{ lm.name | methodWidth }}">
						{{ lm.name }}
					</p>
				</div>
			</a>
		</div>
	</div>
	<div ng-if=" challenge_builder " class="method-col" ng-style="{{ 'add' | methodWidth }}">
		<div class='method-container'>
			<a ng-click='openAddModal()'>
				<div class="learned-methods-btn">
					<img ng-cdn-src="methods/plus.png" type="button" class="method-icon plus-icon">
				</div>
			</a>
		</div>
	</div>
</div>
	<div id="btn-floater" ng-controller="GameButtonFloaterController" ng-cloak>
	<a id='test-btn' ng-if='testEnabled' onclick='testCode()' data-toggle='popover' data-content="{{ i18n.t('test_explanation')}}" ng-class="{ 'disabled': disablePlayBtn() }">
		<div id='test-complete'>{{i18n.t('test_complete')}}</div>
		<span class="icon"></span>
		<span class="test-text text">{{i18n.t('test')}}</span>
		<span class="rewind-text text">{{i18n.t('rewind')}}</span>
	</a>
	<div>
		<a id='play-btn' class="play-btn" ng-if='!classicChallengeBuilder()' ng-class="{ 'small': testEnabled, 'disabled': disablePlayBtn() }" onclick='runCode()' data-toggle='popover' data-content="{{ i18n.t('run_explanation')}}" >
			<span class="icon"></span>
			<span ng-if="!userChallengeBuilder()" class="run-text text">{{i18n.t('run')}}</span>
			<span ng-if="userChallengeBuilder()" class="run-text submit-text text">{{i18n.t('builder.submit')}}</span>
			<span class="stop-text text">{{i18n.t('stop')}}</span>
			<img class="processing-text" ng-cdn-src='game_misc/spinner.svg'></img>
		</a>
		<span ng-class="{ 'hidden': !disablePlayBtn(), 'with-test': testEnabled }" id='connecting-notice'>{{i18n.t('connecting')}}</span>
	</div>
	<div class='challenge-builder-buttons' ng-if="classicChallengeBuilder()">
		<button id='preview-btn' class='btn green bright-hover' onclick="ClassicChallengeBuilder.saveAndPreview()">
			<div class='loading-container'>
				<div class="spinny" id='preview-saving-spinner'></div>
				<span class='preview-text'>{{i18n.t('challenge_builder.preview')}}</span>
			</div>
		</button>
		<button id='save-btn' class='btn green bright-hover' onclick="ClassicChallengeBuilder.save()">
			{{i18n.t('save')}}
		</button>
	</div>	
	<div ng-if='!challenge_builder'>
		<a id='reset-code-btn' onclick='openModal("reset-code-modal")' data-toggle='popover' data-content="{{i18n.t('reset_explanation')}}" ng-class="{ 'small': testEnabled }">
			<img ng-cdn-src='game_misc/replay_med.svg'></img>
		</a>
	</div>
	<div id='settings-container' ng-if="!classicChallengeBuilder()">
		<a id='settings-cog'>
		</a>
		<div id='settings-board' data-position='left'>
			<div class="volume-sliders-container">
				<h5>{{i18n.t('adjust_volume')}}</h5>
				<div id="slider-container">
					<!-- this is manipulated by setupVolumeSlider() to create a slider -->
					<div class="slide-fill-mask-empty"></div>
					<div class="slide-fill-mask-full"></div>
					<div class="slide-control">
						<div class="slide-control-button" draggable="true"></div>
					</div>
				</div>
				<div id="global-sound" class="sound-toggle"></div>
				<div class='sound-icons-row'>
					<div class='row-icon'>	
						<h5>{{i18n.t('bg_sounds')}}</h5>
						<div id="bg-sound" class="sound-toggle"></div>
					</div>
					<div class='row-icon' ng-if='narrationSupported'>	
						<h5>{{i18n.t('narration')}}</h5>
						<div id="narration-sound" class="sound-toggle"></div>
					</div>
				</div>
			</div>
			
			<div class="speed-and-language">
				<div class="speed">
					<h5>{{i18n.t('game_speed')}}</h5>
					<!--[if !IE] -->
					<div class="notIE">
						<!-- <![endif]-->
						<span class="fancyArrow"></span>
						<select ng-modal='gameSpeed.selected' id='game-speed'>
							<option ng-repeat='o in [ "0.25", "0.5", "1", "1.5" ]'>
								{{o}}
							</option>	
						</select>	
						<!--[if !IE] -->
					</div>
					<!-- <![endif]-->
				</div>
			</div>
		</div>
	</div>
</div>

</div>

<!-- all following content is modals and absolute positioned elements -->


<!-- For code.org to track our HoC activity: -->

<div ng-controller='ChallengeInstructionsModalController' class="modal fade middle drop" ng-class="{{ explain ? 'explain' : ''}}" id="instructions-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body" ng-class="{'explain': explain}">
            <div id='load-bar-container'>
              <div id="bar">
                <div id="bar-fill"> </div>
              </div>
              <div id="grass-bar"></div>
            </div>
            <img ng-cdn-src="{{ loaderImage }}" id='instructions-bg' />
            <div class='instructions-container'>
                <p id='instructions-text' class='instructions_title'>
                    {{ instructions_title }}
                </p>
                <textarea ng-if='editMode' id='instructions-textarea' class='form-control' maxlength="120" cols="40" rows="3" placeholder="{{i18n.t('write_your_welcome_msg_here')}}" name="instructions-textarea">{{current_instructions}}</textarea>
            </div>    
            <div id="explain-anim-container" ng-if='explain'>
            </div>
              <a class="video-icon middle-link bright-hover" ng-click='videoToggle=true'>
    <div>
      <div class="concept-video-img"></div>
    </div>
    <div class="concept-video-title">Watch For Forest tutorial</div>
  </a>
  <div class="video-popup" ng-show="videoToggle" ng-click="videoToggle=false;$event.stopPropagation();">
    <div class="video-container">
      <img class="close-button bright-hover" ng-cdn-src="dashboard/close_upload_modal.png">
      <iframe ng-if="videoToggle" src="https://player.vimeo.com/video/589385093" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>

            <div id='close-instructions' ng-click= "closeModal()" class="click-on-enter">
                <img ng-cdn-src='instructions/btn_ok_arrow.png' id='ok-arrow' />
                <div id='instructions-ok'>
                    OK
                </div>
            </div>
            <div id="replay-instructions-narration" class='bright-hover narrate-btn' ng-class="{'active': playingNarration}" ng-click='playNarration()' ng-show='showNarration'>
            </div>
        </div>
      </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>
<!--This modal drops down when failing:-->
<div id="alert-modal" class="modal drop" tabindex="-1" ng-controller='DefaultModalController' role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div id="fail-anim-container">
        </div>
        <div id='hint-modal-text-wrapper'>
          <div id='hint-modal-text'></div>  
        </div>
        <button id="try-again" class="btn try_again click-on-enter" data-dismiss="modal" aria-hidden="true" onclick="keepTrying()">{{i18n.t('try_again')}}
        </button>
      </div>
    </div>
  </div>
</div>
<div id="reset-code-modal" ng-controller='DefaultModalController' class="modal fade" tabindex="-1" role="dialog"  aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
        {{i18n.t('are_you_sure?')}}
        </br>
        {{i18n.t('this_will_reset_all_changes')}}
        </br>
        <button data-dismiss="modal" class="btn" id='cancel-reset'>
            {{i18n.t('cancel')}}
        </button>
        <button data-dismiss="modal" class="btn" id='confirm-reset' onclick='resetCode()'>
            {{i18n.t('ok')}}
        </button>
        </div>
      </div>
    </div>
  </div>
<br/>

<div id="super-hint-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" ng-controller='DefaultModalController'>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<div id='try-this-hint' class='uppercase'>
					{{i18n.t('try_this')}}
				</div>
				<div id='super-hint-editor'></div>
				<button data-dismiss="modal" class="super-hint btn uppercase" id='cancel-hint' onclick="_superHintUsageAnalytics.sendEvent('canceled');">
						{{i18n.t('no_thanks')}}
				</button>
				<button data-dismiss="modal" class="super-hint btn uppercase" id='use-hint' onclick="useSuperHint()">
						{{i18n.t('use_code')}}
				</button>
			</div>
		</div>
	</div>
</div>


<div id="win-modal" class="transparent-modal modal fade modal-on-top" tabindex="-1" role="dialog"	aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<div id="win-container">
				</div>
			</div>
		</div>
	</div>
</div>


<div style='text-align: center'>
	<div ng-controller='SceneModalController' id="scene-modal" class="custom-frame-modal modal fade" tabindex="-1" role="dialog"	aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-body">
					<div id="close-modal-button" ng-if="isPythonChallnege" ng-click="close()"></div>
					<img ng-cdn-src='map/white_bg.png' class='white-bg'/>
					<div id='esc-skip'>
						<span ng-if='tablet'>{{i18n.t('tap_to_skip')}}</span>
						<span ng-if='!tablet' ng-class="{ 'black': isPythonChallnege }" >{{i18n.t('press_space_to_skip')}} </span>
					</div>
					<loading-spinner></loading-spinner>
					<div id="scene-container">
					</div>
					<div id="video-play-btn" ng-if='showPlayBtn'><button class="bright-hover"><span class="glyphicon glyphicon-play"></span><span>{{i18n.t("landing.play_video")}}</span></button></div>
					<img class="map-frame top" src="https://d2j5eocv5gptnv.cloudfront.net/assets/map/frame/top-bc10fc6a6d053c6de46ebc83f79911861b8a2847c0bd6c9402bdc041fc6c4cba.png" />
<img class="map-frame bottom" src="https://d2j5eocv5gptnv.cloudfront.net/assets/map/frame/bottom-dc1c381f47e96e8405d2e91cc2f1cc3f75d766b77f49233c630753f0edf26a0a.png" />
<img class="map-frame left" src="https://d2j5eocv5gptnv.cloudfront.net/assets/map/frame/left-8bd61f9a6a971a9689380e4723c8ab9a59286a0e4a3ea7786d11e7da588e4fa1.png" />
<img class="map-frame right" src="https://d2j5eocv5gptnv.cloudfront.net/assets/map/frame/right-59ef6395bbf0ca07f1b1551b64b1998d1c39ea7571c955c2a05706d3ef2208a2.png" />
				</div>
			</div>
		</div>
	</div>
</div>


    <div class="modal fade middle generic-grey-modal" id="locale-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog" ng-controller="LocaleModalController">
		<div class="modal-content unselectable">
			<div class="green-modal-header" align='center'>
				<div class="exit-btn-container" ng-click="close()">
					<img class="close-button-img unselectable" ng-cdn-src="dashboard/close.png">
				</div>
				<div class="title-container" rowspan="2">
					<p> {{ i18n.t('locale.select_preferred_language') }} <p>
				</div>
			</div>
			<div class="modal-body cm-modal-body" align='center'>
				<div id="default-lang-notice" ng-if="userIsTeacher">
					<table>
						<td class="warning-img-container">
							<img ng-cdn-src="locales/warning.png">
						</td>
						<td>
							{{ i18n.t('selected_language_will_be_default') }}
						</td>
					</table>
				</div>
				<ul class="locales-list">
					<li class="list-sub-title">
						<p> {{ i18n.t('locale.available_languages') }} </p>
					</li>
					<li class="list-item" ng-repeat="locale in locales"> 
						<table ng-class="{ selected: locale.selected }">
							<tr ng-click="selectLocale(locale)">
								<td class="locale-name-container">
									<p> {{ prettyPrintLocale(locale.name) }} </p>
								</td>
								<td ng-if="currentLocale==locale" class="checkmark-img-container">
									<img ng-cdn-src="locales/checkmark.png">
								</td>
							</tr>
						</table>
					</li>
				</ul>
				<div class="modal-btns">
					<table>
						<td>
							<div class="cm-default-btn confirm-btn bright-hover" ng-click="close()">
								<img ng-cdn-src="locales/cancel_btn.png">
								<p> {{ i18n.t('cancel') }} </p>
							</div>
						</td>
						<td>
							<div class="cm-default-btn cancel-btn bright-hover" ng-click="setLanguage()">
								<img ng-cdn-src="locales/better_btn.png">
								<p> {{ i18n.t('set_language') }} </p>
							</div>
						</td>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>


      <div style='text-align: center'>
		<!--This modal holds the challenges map-->
<div id="map-modal" class="custom-frame-modal modal fade img-load" ng-controller='MapModalController' tabindex="-1" role="dialog"	aria-labelledby="myModalLabel" aria-hidden="true" ng-class="{'hide-parts-navigation': hidePartsNavigation}">
	<div class="modal-dialog">
		<div class="modal-content">
			<!-- World Name -->
			<img class="bright-hover" id="rewind" src="/assets/map/rewind.png">
			<div id="map-name"></div>
			<img class="bright-hover" id="fast-forward" src="/assets/map/fast_forward.png">
			<!-- Mode Navigation -->
			<ul class="nav nav-pills" ng-class="{'invisible': hideSkillModeNavigation}">
				<li class="active">
      				<a href="#story-mode" data-toggle="tab" onclick="window.setMapNameByStoryMode()">
      					<div id="left" class="apply-text-fill" data-min-font="8" data-explicit-width="95">
      						<span class='uppercase'>{{i18n.t('story_mode')}}</span>
      					</div>
      				</a>
				</li>
				<li>
					<a href="#skill-mode" data-toggle="tab" onclick="window.changeMapName(angular.element($('#skill-mode')).scope().world);">
						<div id="right" class="apply-text-fill" data-min-font="8" data-explicit-width="95">
							<span class='uppercase'>{{i18n.t('skill_mode')}}</span>
						</div>
					</a>
				</li>
			</ul>

			<div class="modal-body tab-content">
				<!-- Classic Challenges Map -->
				<div class="tab-pane active" id="story-mode">
					<img class="white-bg" src="https://d2j5eocv5gptnv.cloudfront.net/assets/map/white_bg-dc8992bbe098267af143fc1b09ffbca5742121466d5d52a6b11b343507ed7043.png" />
					<loading-spinner></loading-spinner>
					<div id="map-container">
					</div>
					<div id='map-modal-frame'>
						<img class="map-frame top" src="https://d2j5eocv5gptnv.cloudfront.net/assets/map/frame/top-bc10fc6a6d053c6de46ebc83f79911861b8a2847c0bd6c9402bdc041fc6c4cba.png" />
<img class="map-frame bottom" src="https://d2j5eocv5gptnv.cloudfront.net/assets/map/frame/bottom-dc1c381f47e96e8405d2e91cc2f1cc3f75d766b77f49233c630753f0edf26a0a.png" />
<img class="map-frame left" src="https://d2j5eocv5gptnv.cloudfront.net/assets/map/frame/left-8bd61f9a6a971a9689380e4723c8ab9a59286a0e4a3ea7786d11e7da588e4fa1.png" />
<img class="map-frame right" src="https://d2j5eocv5gptnv.cloudfront.net/assets/map/frame/right-59ef6395bbf0ca07f1b1551b64b1998d1c39ea7571c955c2a05706d3ef2208a2.png" />
					</div>
					<div class="close-map-modal"></div>
				</div>

				<!-- Skill Challenges Map -->
				<div class="tab-pane" id="skill-mode" ng-controller="SkillMapController" ng-view ng-cloak>
					<div id="bg-fader" ng-style="{'background-color': skillMapBGColor }"></div>
					<img id="skills-map-frame" src="https://d2j5eocv5gptnv.cloudfront.net/assets/map/skills-map/skillmap_frame-d9c8fca97026e580c0bcfbc519586b2f06c7f3906808416f7e95dc76f0609936.png" />
					<header id="title">
						{{i18n.t('skill_mode')}}
					</header>
					<div id="skill-challenges-container" ng-class="{'small-icon-container': challenges.length > 18}">
						<div>
							<div ng-repeat="c in challenges track by $index" class="skill-challenge-box" ng-class="{'small-icon': challenges.length > 18, 'smaller-icon': challenges.length > 24}">
								<div class="skill-challenge" ng-class="challengeClass(c)" ng-click="challengeClick(c)">
									{{ c.position }}
									<div ng-if="c.translated_unlock_message" class='skill-popover'>
										{{ c.translated_unlock_message }}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="nav prev-btn" ng-click="moveToWorld(world-1, true)" ng-class="{hidden: cannotMove(-1)}"></div>
					<div class="nav next-btn" ng-click="moveToWorld(world+1, true)"  ng-class="{hidden: cannotMove(1)}"></div>
					<div class="close-map-modal"></div>

					<!-- hidden backgroung images for asset loading -->
					<div ng-repeat="src in skillMapBGimagesSrc">
						<img ng-cdn-src="{{ src }}" class="bg-image hidden" id="skill-bg-{{ $index + 1 }}">
					</div>
					{{ updateSkillMapBackground(true) }}  <!-- Used to update the first background image after the images are loaded -->
				</div>
                  
			</div> <!-- modal-body -->

			<a id='go-to-part-1' href="/challenges/0">
				<span>
					{{i18n.t('map.coding_adventure_part_i')}}
				</span>
			</a>
			<a id='go-to-part-2' href="/challenges/76" >
				<span>
					{{i18n.t('map.coding_adventure_part_ii')}}
				</span>
			</a>
			<a id='back-to-part-2' href="/challenges/76">
				<span>
					{{i18n.t('map.coding_adventure_part_ii')}}
				</span>
			</a>
			<a id='go-to-part-3' href="/challenges/146">
				<span>
					{{i18n.t('map.coding_adventure_part_iii')}}
				</span>
			</a>
		</div>
	</div>
</div>
</div>



    
  </div>


  <script type="text/javascript">
    // places a data attribute on html tag, containing the current user-agent string
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent || navigator.vendor || window.opera);
  </script>
  <noscript>
  </noscript>
  <!-- End Twitter universal website tag code -->
</body>





</html>