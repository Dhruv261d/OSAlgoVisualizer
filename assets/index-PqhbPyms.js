(function(){const Rt=document.createElement("link").relList;if(Rt&&Rt.supports&&Rt.supports("modulepreload"))return;for(const F of document.querySelectorAll('link[rel="modulepreload"]'))v(F);new MutationObserver(F=>{for(const dt of F)if(dt.type==="childList")for(const Et of dt.addedNodes)Et.tagName==="LINK"&&Et.rel==="modulepreload"&&v(Et)}).observe(document,{childList:!0,subtree:!0});function H(F){const dt={};return F.integrity&&(dt.integrity=F.integrity),F.referrerPolicy&&(dt.referrerPolicy=F.referrerPolicy),F.crossOrigin==="use-credentials"?dt.credentials="include":F.crossOrigin==="anonymous"?dt.credentials="omit":dt.credentials="same-origin",dt}function v(F){if(F.ep)return;F.ep=!0;const dt=H(F);fetch(F.href,dt)}})();function Fm(U){return U&&U.__esModule&&Object.prototype.hasOwnProperty.call(U,"default")?U.default:U}var mf={exports:{}},Hi={};var bp;function km(){if(bp)return Hi;bp=1;var U=Symbol.for("react.transitional.element"),Rt=Symbol.for("react.fragment");function H(v,F,dt){var Et=null;if(dt!==void 0&&(Et=""+dt),F.key!==void 0&&(Et=""+F.key),"key"in F){dt={};for(var k in F)k!=="key"&&(dt[k]=F[k])}else dt=F;return F=dt.ref,{$$typeof:U,type:v,key:Et,ref:F!==void 0?F:null,props:dt}}return Hi.Fragment=Rt,Hi.jsx=H,Hi.jsxs=H,Hi}var xp;function $m(){return xp||(xp=1,mf.exports=km()),mf.exports}var h=$m(),hf={exports:{}},P={};var Sp;function Pm(){if(Sp)return P;Sp=1;var U=Symbol.for("react.transitional.element"),Rt=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),Et=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),nt=Symbol.iterator;function Qt(o){return o===null||typeof o!="object"?null:(o=nt&&o[nt]||o["@@iterator"],typeof o=="function"?o:null)}var pt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lt=Object.assign,Qe={};function ne(o,z,O){this.props=o,this.context=z,this.refs=Qe,this.updater=O||pt}ne.prototype.isReactComponent={},ne.prototype.setState=function(o,z){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,z,"setState")},ne.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Ne(){}Ne.prototype=ne.prototype;function Xt(o,z,O){this.props=o,this.context=z,this.refs=Qe,this.updater=O||pt}var ue=Xt.prototype=new Ne;ue.constructor=Xt,Lt(ue,ne.prototype),ue.isPureReactComponent=!0;var ce=Array.isArray;function ee(){}var ut={H:null,A:null,T:null,S:null},Vt=Object.prototype.hasOwnProperty;function le(o,z,O){var w=O.ref;return{$$typeof:U,type:o,key:z,ref:w!==void 0?w:null,props:O}}function Xe(o,z){return le(o.type,z,o.props)}function ge(o){return typeof o=="object"&&o!==null&&o.$$typeof===U}function ae(o){var z={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(O){return z[O]})}var ke=/\/+/g;function we(o,z){return typeof o=="object"&&o!==null&&o.key!=null?ae(""+o.key):z.toString(36)}function ve(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(ee,ee):(o.status="pending",o.then(function(z){o.status==="pending"&&(o.status="fulfilled",o.value=z)},function(z){o.status==="pending"&&(o.status="rejected",o.reason=z)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function x(o,z,O,w,$){var it=typeof o;(it==="undefined"||it==="boolean")&&(o=null);var ht=!1;if(o===null)ht=!0;else switch(it){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(o.$$typeof){case U:case Rt:ht=!0;break;case I:return ht=o._init,x(ht(o._payload),z,O,w,$)}}if(ht)return $=$(o),ht=w===""?"."+we(o,0):w,ce($)?(O="",ht!=null&&(O=ht.replace(ke,"$&/")+"/"),x($,z,O,"",function(Yl){return Yl})):$!=null&&(ge($)&&($=Xe($,O+($.key==null||o&&o.key===$.key?"":(""+$.key).replace(ke,"$&/")+"/")+ht)),z.push($)),1;ht=0;var Ft=w===""?".":w+":";if(ce(o))for(var Ot=0;Ot<o.length;Ot++)w=o[Ot],it=Ft+we(w,Ot),ht+=x(w,z,O,it,$);else if(Ot=Qt(o),typeof Ot=="function")for(o=Ot.call(o),Ot=0;!(w=o.next()).done;)w=w.value,it=Ft+we(w,Ot++),ht+=x(w,z,O,it,$);else if(it==="object"){if(typeof o.then=="function")return x(ve(o),z,O,w,$);throw z=String(o),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return ht}function q(o,z,O){if(o==null)return o;var w=[],$=0;return x(o,w,"","",function(it){return z.call(O,it,$++)}),w}function K(o){if(o._status===-1){var z=o._result;z=z(),z.then(function(O){(o._status===0||o._status===-1)&&(o._status=1,o._result=O)},function(O){(o._status===0||o._status===-1)&&(o._status=2,o._result=O)}),o._status===-1&&(o._status=0,o._result=z)}if(o._status===1)return o._result.default;throw o._result}var Tt=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},mt={map:q,forEach:function(o,z,O){q(o,function(){z.apply(this,arguments)},O)},count:function(o){var z=0;return q(o,function(){z++}),z},toArray:function(o){return q(o,function(z){return z})||[]},only:function(o){if(!ge(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return P.Activity=X,P.Children=mt,P.Component=ne,P.Fragment=H,P.Profiler=F,P.PureComponent=Xt,P.StrictMode=v,P.Suspense=L,P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ut,P.__COMPILER_RUNTIME={__proto__:null,c:function(o){return ut.H.useMemoCache(o)}},P.cache=function(o){return function(){return o.apply(null,arguments)}},P.cacheSignal=function(){return null},P.cloneElement=function(o,z,O){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var w=Lt({},o.props),$=o.key;if(z!=null)for(it in z.key!==void 0&&($=""+z.key),z)!Vt.call(z,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&z.ref===void 0||(w[it]=z[it]);var it=arguments.length-2;if(it===1)w.children=O;else if(1<it){for(var ht=Array(it),Ft=0;Ft<it;Ft++)ht[Ft]=arguments[Ft+2];w.children=ht}return le(o.type,$,w)},P.createContext=function(o){return o={$$typeof:Et,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:dt,_context:o},o},P.createElement=function(o,z,O){var w,$={},it=null;if(z!=null)for(w in z.key!==void 0&&(it=""+z.key),z)Vt.call(z,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&($[w]=z[w]);var ht=arguments.length-2;if(ht===1)$.children=O;else if(1<ht){for(var Ft=Array(ht),Ot=0;Ot<ht;Ot++)Ft[Ot]=arguments[Ot+2];$.children=Ft}if(o&&o.defaultProps)for(w in ht=o.defaultProps,ht)$[w]===void 0&&($[w]=ht[w]);return le(o,it,$)},P.createRef=function(){return{current:null}},P.forwardRef=function(o){return{$$typeof:k,render:o}},P.isValidElement=ge,P.lazy=function(o){return{$$typeof:I,_payload:{_status:-1,_result:o},_init:K}},P.memo=function(o,z){return{$$typeof:_,type:o,compare:z===void 0?null:z}},P.startTransition=function(o){var z=ut.T,O={};ut.T=O;try{var w=o(),$=ut.S;$!==null&&$(O,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(ee,Tt)}catch(it){Tt(it)}finally{z!==null&&O.types!==null&&(z.types=O.types),ut.T=z}},P.unstable_useCacheRefresh=function(){return ut.H.useCacheRefresh()},P.use=function(o){return ut.H.use(o)},P.useActionState=function(o,z,O){return ut.H.useActionState(o,z,O)},P.useCallback=function(o,z){return ut.H.useCallback(o,z)},P.useContext=function(o){return ut.H.useContext(o)},P.useDebugValue=function(){},P.useDeferredValue=function(o,z){return ut.H.useDeferredValue(o,z)},P.useEffect=function(o,z){return ut.H.useEffect(o,z)},P.useEffectEvent=function(o){return ut.H.useEffectEvent(o)},P.useId=function(){return ut.H.useId()},P.useImperativeHandle=function(o,z,O){return ut.H.useImperativeHandle(o,z,O)},P.useInsertionEffect=function(o,z){return ut.H.useInsertionEffect(o,z)},P.useLayoutEffect=function(o,z){return ut.H.useLayoutEffect(o,z)},P.useMemo=function(o,z){return ut.H.useMemo(o,z)},P.useOptimistic=function(o,z){return ut.H.useOptimistic(o,z)},P.useReducer=function(o,z,O){return ut.H.useReducer(o,z,O)},P.useRef=function(o){return ut.H.useRef(o)},P.useState=function(o){return ut.H.useState(o)},P.useSyncExternalStore=function(o,z,O){return ut.H.useSyncExternalStore(o,z,O)},P.useTransition=function(){return ut.H.useTransition()},P.version="19.2.4",P}var Ap;function bf(){return Ap||(Ap=1,hf.exports=Pm()),hf.exports}var Jt=bf();const Im=Fm(Jt);var gf={exports:{}},Bi={},vf={exports:{}},yf={};var zp;function t0(){return zp||(zp=1,(function(U){function Rt(x,q){var K=x.length;x.push(q);t:for(;0<K;){var Tt=K-1>>>1,mt=x[Tt];if(0<F(mt,q))x[Tt]=q,x[K]=mt,K=Tt;else break t}}function H(x){return x.length===0?null:x[0]}function v(x){if(x.length===0)return null;var q=x[0],K=x.pop();if(K!==q){x[0]=K;t:for(var Tt=0,mt=x.length,o=mt>>>1;Tt<o;){var z=2*(Tt+1)-1,O=x[z],w=z+1,$=x[w];if(0>F(O,K))w<mt&&0>F($,O)?(x[Tt]=$,x[w]=K,Tt=w):(x[Tt]=O,x[z]=K,Tt=z);else if(w<mt&&0>F($,K))x[Tt]=$,x[w]=K,Tt=w;else break t}}return q}function F(x,q){var K=x.sortIndex-q.sortIndex;return K!==0?K:x.id-q.id}if(U.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var dt=performance;U.unstable_now=function(){return dt.now()}}else{var Et=Date,k=Et.now();U.unstable_now=function(){return Et.now()-k}}var L=[],_=[],I=1,X=null,nt=3,Qt=!1,pt=!1,Lt=!1,Qe=!1,ne=typeof setTimeout=="function"?setTimeout:null,Ne=typeof clearTimeout=="function"?clearTimeout:null,Xt=typeof setImmediate<"u"?setImmediate:null;function ue(x){for(var q=H(_);q!==null;){if(q.callback===null)v(_);else if(q.startTime<=x)v(_),q.sortIndex=q.expirationTime,Rt(L,q);else break;q=H(_)}}function ce(x){if(Lt=!1,ue(x),!pt)if(H(L)!==null)pt=!0,ee||(ee=!0,ae());else{var q=H(_);q!==null&&ve(ce,q.startTime-x)}}var ee=!1,ut=-1,Vt=5,le=-1;function Xe(){return Qe?!0:!(U.unstable_now()-le<Vt)}function ge(){if(Qe=!1,ee){var x=U.unstable_now();le=x;var q=!0;try{t:{pt=!1,Lt&&(Lt=!1,Ne(ut),ut=-1),Qt=!0;var K=nt;try{e:{for(ue(x),X=H(L);X!==null&&!(X.expirationTime>x&&Xe());){var Tt=X.callback;if(typeof Tt=="function"){X.callback=null,nt=X.priorityLevel;var mt=Tt(X.expirationTime<=x);if(x=U.unstable_now(),typeof mt=="function"){X.callback=mt,ue(x),q=!0;break e}X===H(L)&&v(L),ue(x)}else v(L);X=H(L)}if(X!==null)q=!0;else{var o=H(_);o!==null&&ve(ce,o.startTime-x),q=!1}}break t}finally{X=null,nt=K,Qt=!1}q=void 0}}finally{q?ae():ee=!1}}}var ae;if(typeof Xt=="function")ae=function(){Xt(ge)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,we=ke.port2;ke.port1.onmessage=ge,ae=function(){we.postMessage(null)}}else ae=function(){ne(ge,0)};function ve(x,q){ut=ne(function(){x(U.unstable_now())},q)}U.unstable_IdlePriority=5,U.unstable_ImmediatePriority=1,U.unstable_LowPriority=4,U.unstable_NormalPriority=3,U.unstable_Profiling=null,U.unstable_UserBlockingPriority=2,U.unstable_cancelCallback=function(x){x.callback=null},U.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vt=0<x?Math.floor(1e3/x):5},U.unstable_getCurrentPriorityLevel=function(){return nt},U.unstable_next=function(x){switch(nt){case 1:case 2:case 3:var q=3;break;default:q=nt}var K=nt;nt=q;try{return x()}finally{nt=K}},U.unstable_requestPaint=function(){Qe=!0},U.unstable_runWithPriority=function(x,q){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var K=nt;nt=x;try{return q()}finally{nt=K}},U.unstable_scheduleCallback=function(x,q,K){var Tt=U.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Tt+K:Tt):K=Tt,x){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=K+mt,x={id:I++,callback:q,priorityLevel:x,startTime:K,expirationTime:mt,sortIndex:-1},K>Tt?(x.sortIndex=K,Rt(_,x),H(L)===null&&x===H(_)&&(Lt?(Ne(ut),ut=-1):Lt=!0,ve(ce,K-Tt))):(x.sortIndex=mt,Rt(L,x),pt||Qt||(pt=!0,ee||(ee=!0,ae()))),x},U.unstable_shouldYield=Xe,U.unstable_wrapCallback=function(x){var q=nt;return function(){var K=nt;nt=q;try{return x.apply(this,arguments)}finally{nt=K}}}})(yf)),yf}var _p;function e0(){return _p||(_p=1,vf.exports=t0()),vf.exports}var Tf={exports:{}},ie={};var Ep;function l0(){if(Ep)return ie;Ep=1;var U=bf();function Rt(L){var _="https://react.dev/errors/"+L;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var I=2;I<arguments.length;I++)_+="&args[]="+encodeURIComponent(arguments[I])}return"Minified React error #"+L+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(){}var v={d:{f:H,r:function(){throw Error(Rt(522))},D:H,C:H,L:H,m:H,X:H,S:H,M:H},p:0,findDOMNode:null},F=Symbol.for("react.portal");function dt(L,_,I){var X=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:X==null?null:""+X,children:L,containerInfo:_,implementation:I}}var Et=U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(L,_){if(L==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=v,ie.createPortal=function(L,_){var I=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(Rt(299));return dt(L,_,null,I)},ie.flushSync=function(L){var _=Et.T,I=v.p;try{if(Et.T=null,v.p=2,L)return L()}finally{Et.T=_,v.p=I,v.d.f()}},ie.preconnect=function(L,_){typeof L=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,v.d.C(L,_))},ie.prefetchDNS=function(L){typeof L=="string"&&v.d.D(L)},ie.preinit=function(L,_){if(typeof L=="string"&&_&&typeof _.as=="string"){var I=_.as,X=k(I,_.crossOrigin),nt=typeof _.integrity=="string"?_.integrity:void 0,Qt=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;I==="style"?v.d.S(L,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:X,integrity:nt,fetchPriority:Qt}):I==="script"&&v.d.X(L,{crossOrigin:X,integrity:nt,fetchPriority:Qt,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},ie.preinitModule=function(L,_){if(typeof L=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var I=k(_.as,_.crossOrigin);v.d.M(L,{crossOrigin:I,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&v.d.M(L)},ie.preload=function(L,_){if(typeof L=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var I=_.as,X=k(I,_.crossOrigin);v.d.L(L,I,{crossOrigin:X,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},ie.preloadModule=function(L,_){if(typeof L=="string")if(_){var I=k(_.as,_.crossOrigin);v.d.m(L,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:I,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else v.d.m(L)},ie.requestFormReset=function(L){v.d.r(L)},ie.unstable_batchedUpdates=function(L,_){return L(_)},ie.useFormState=function(L,_,I){return Et.H.useFormState(L,_,I)},ie.useFormStatus=function(){return Et.H.useHostTransitionStatus()},ie.version="19.2.4",ie}var Cp;function a0(){if(Cp)return Tf.exports;Cp=1;function U(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U)}catch(Rt){console.error(Rt)}}return U(),Tf.exports=l0(),Tf.exports}var jp;function i0(){if(jp)return Bi;jp=1;var U=e0(),Rt=bf(),H=a0();function v(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dt(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function Et(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function k(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function L(t){if(dt(t)!==t)throw Error(v(188))}function _(t){var e=t.alternate;if(!e){if(e=dt(t),e===null)throw Error(v(188));return e!==t?null:t}for(var l=t,a=e;;){var i=l.return;if(i===null)break;var n=i.alternate;if(n===null){if(a=i.return,a!==null){l=a;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===l)return L(i),t;if(n===a)return L(i),e;n=n.sibling}throw Error(v(188))}if(l.return!==a.return)l=i,a=n;else{for(var u=!1,c=i.child;c;){if(c===l){u=!0,l=i,a=n;break}if(c===a){u=!0,a=i,l=n;break}c=c.sibling}if(!u){for(c=n.child;c;){if(c===l){u=!0,l=n,a=i;break}if(c===a){u=!0,a=n,l=i;break}c=c.sibling}if(!u)throw Error(v(189))}}if(l.alternate!==a)throw Error(v(190))}if(l.tag!==3)throw Error(v(188));return l.stateNode.current===l?t:e}function I(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=I(t),e!==null)return e;t=t.sibling}return null}var X=Object.assign,nt=Symbol.for("react.element"),Qt=Symbol.for("react.transitional.element"),pt=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),Qe=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),Ne=Symbol.for("react.consumer"),Xt=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),ut=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),le=Symbol.for("react.activity"),Xe=Symbol.for("react.memo_cache_sentinel"),ge=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=ge&&t[ge]||t["@@iterator"],typeof t=="function"?t:null)}var ke=Symbol.for("react.client.reference");function we(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ke?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lt:return"Fragment";case ne:return"Profiler";case Qe:return"StrictMode";case ce:return"Suspense";case ee:return"SuspenseList";case le:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case pt:return"Portal";case Xt:return t.displayName||"Context";case Ne:return(t._context.displayName||"Context")+".Consumer";case ue:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ut:return e=t.displayName||null,e!==null?e:we(t.type)||"Memo";case Vt:e=t._payload,t=t._init;try{return we(t(e))}catch{}}return null}var ve=Array.isArray,x=Rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=H.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},Tt=[],mt=-1;function o(t){return{current:t}}function z(t){0>mt||(t.current=Tt[mt],Tt[mt]=null,mt--)}function O(t,e){mt++,Tt[mt]=t.current,t.current=e}var w=o(null),$=o(null),it=o(null),ht=o(null);function Ft(t,e){switch(O(it,e),O($,t),O(w,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Xs(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Xs(e),t=Zs(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}z(w),O(w,t)}function Ot(){z(w),z($),z(it)}function Yl(t){t.memoizedState!==null&&O(ht,t);var e=w.current,l=Zs(e,t.type);e!==l&&(O($,t),O(w,l))}function p(t){$.current===t&&(z(w),z($)),ht.current===t&&(z(ht),Ri._currentValue=K)}var Q,B;function T(t){if(Q===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Q=e&&e[1]||"",B=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Q+t+B}var R=!1;function J(t,e){if(!t||R)return"";R=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(y){var g=y}Reflect.construct(t,[],A)}else{try{A.call()}catch(y){g=y}t.call(A.prototype)}}else{try{throw Error()}catch(y){g=y}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(y){if(y&&g&&typeof y.stack=="string")return[y.stack,g.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=a.DetermineComponentFrameRoot(),u=n[0],c=n[1];if(u&&c){var f=u.split(`
`),m=c.split(`
`);for(i=a=0;a<f.length&&!f[a].includes("DetermineComponentFrameRoot");)a++;for(;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;if(a===f.length||i===m.length)for(a=f.length-1,i=m.length-1;1<=a&&0<=i&&f[a]!==m[i];)i--;for(;1<=a&&0<=i;a--,i--)if(f[a]!==m[i]){if(a!==1||i!==1)do if(a--,i--,0>i||f[a]!==m[i]){var b=`
`+f[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=i);break}}}finally{R=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?T(l):""}function Y(t,e){switch(t.tag){case 26:case 27:case 5:return T(t.type);case 16:return T("Lazy");case 13:return t.child!==e&&e!==null?T("Suspense Fallback"):T("Suspense");case 19:return T("SuspenseList");case 0:case 15:return J(t.type,!1);case 11:return J(t.type.render,!1);case 1:return J(t.type,!0);case 31:return T("Activity");default:return""}}function D(t){try{var e="",l=null;do e+=Y(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var tt=Object.prototype.hasOwnProperty,Z=U.unstable_scheduleCallback,E=U.unstable_cancelCallback,M=U.unstable_shouldYield,lt=U.unstable_requestPaint,j=U.unstable_now,Mt=U.unstable_getCurrentPriorityLevel,Ze=U.unstable_ImmediatePriority,xf=U.unstable_UserBlockingPriority,Qi=U.unstable_NormalPriority,qp=U.unstable_LowPriority,Sf=U.unstable_IdlePriority,Rp=U.log,Op=U.unstable_setDisableYieldValue,Xa=null,ye=null;function hl(t){if(typeof Rp=="function"&&Op(t),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(Xa,t)}catch{}}var Te=Math.clz32?Math.clz32:Hp,Dp=Math.log,Up=Math.LN2;function Hp(t){return t>>>=0,t===0?32:31-(Dp(t)/Up|0)|0}var Ni=256,wi=262144,Yi=4194304;function Gl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Gi(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var i=0,n=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~n,a!==0?i=Gl(a):(u&=c,u!==0?i=Gl(u):l||(l=c&~t,l!==0&&(i=Gl(l))))):(c=a&~n,c!==0?i=Gl(c):u!==0?i=Gl(u):l||(l=a&~t,l!==0&&(i=Gl(l)))),i===0?0:e!==0&&e!==i&&(e&n)===0&&(n=i&-i,l=e&-e,n>=l||n===32&&(l&4194048)!==0)?e:i}function Za(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Bp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Af(){var t=Yi;return Yi<<=1,(Yi&62914560)===0&&(Yi=4194304),t}function eu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function Va(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qp(t,e,l,a,i,n){var u=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,m=t.hiddenUpdates;for(l=u&~l;0<l;){var b=31-Te(l),A=1<<b;c[b]=0,f[b]=-1;var g=m[b];if(g!==null)for(m[b]=null,b=0;b<g.length;b++){var y=g[b];y!==null&&(y.lane&=-536870913)}l&=~A}a!==0&&zf(t,a,0),n!==0&&i===0&&t.tag!==0&&(t.suspendedLanes|=n&~(u&~e))}function zf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Te(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function _f(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Te(l),i=1<<a;i&e|t[a]&e&&(t[a]|=e),l&=~i}}function Ef(t,e){var l=e&-e;return l=(l&42)!==0?1:lu(l),(l&(t.suspendedLanes|e))!==0?0:l}function lu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function au(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cf(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:dp(t.type))}function jf(t,e){var l=q.p;try{return q.p=t,e()}finally{q.p=l}}var gl=Math.random().toString(36).slice(2),kt="__reactFiber$"+gl,re="__reactProps$"+gl,na="__reactContainer$"+gl,iu="__reactEvents$"+gl,Np="__reactListeners$"+gl,wp="__reactHandles$"+gl,Mf="__reactResources$"+gl,Wa="__reactMarker$"+gl;function nu(t){delete t[kt],delete t[re],delete t[iu],delete t[Np],delete t[wp]}function ua(t){var e=t[kt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[na]||l[kt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=$s(t);t!==null;){if(l=t[kt])return l;t=$s(t)}return e}t=l,l=t.parentNode}return null}function ca(t){if(t=t[kt]||t[na]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Ka(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(v(33))}function fa(t){var e=t[Mf];return e||(e=t[Mf]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Wt(t){t[Wa]=!0}var qf=new Set,Rf={};function Ll(t,e){ra(t,e),ra(t+"Capture",e)}function ra(t,e){for(Rf[t]=e,t=0;t<e.length;t++)qf.add(e[t])}var Yp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Of={},Df={};function Gp(t){return tt.call(Df,t)?!0:tt.call(Of,t)?!1:Yp.test(t)?Df[t]=!0:(Of[t]=!0,!1)}function Li(t,e,l){if(Gp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Xi(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function $e(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function Ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lp(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,n=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(u){l=""+u,n.call(this,u)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(u){l=""+u},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uu(t){if(!t._valueTracker){var e=Uf(t)?"checked":"value";t._valueTracker=Lp(t,e,""+t[e])}}function Hf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=Uf(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Zi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xp=/[\n"\\]/g;function je(t){return t.replace(Xp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function cu(t,e,l,a,i,n,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),e!=null?u==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ce(e)):t.value!==""+Ce(e)&&(t.value=""+Ce(e)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),e!=null?fu(t,u,Ce(e)):l!=null?fu(t,u,Ce(l)):a!=null&&t.removeAttribute("value"),i==null&&n!=null&&(t.defaultChecked=!!n),i!=null&&(t.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+Ce(c):t.removeAttribute("name")}function Bf(t,e,l,a,i,n,u,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||e!=null)){uu(t);return}l=l!=null?""+Ce(l):"",e=e!=null?""+Ce(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),uu(t)}function fu(t,e,l){e==="number"&&Zi(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function oa(t,e,l,a){if(t=t.options,e){e={};for(var i=0;i<l.length;i++)e["$"+l[i]]=!0;for(l=0;l<t.length;l++)i=e.hasOwnProperty("$"+t[l].value),t[l].selected!==i&&(t[l].selected=i),i&&a&&(t[l].defaultSelected=!0)}else{for(l=""+Ce(l),e=null,i=0;i<t.length;i++){if(t[i].value===l){t[i].selected=!0,a&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qf(t,e,l){if(e!=null&&(e=""+Ce(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+Ce(l):""}function Nf(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(v(92));if(ve(a)){if(1<a.length)throw Error(v(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=Ce(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),uu(t)}function sa(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Zp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wf(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Zp.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Yf(t,e,l){if(e!=null&&typeof e!="object")throw Error(v(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var i in e)a=e[i],e.hasOwnProperty(i)&&l[i]!==a&&wf(t,i,a)}else for(var n in e)e.hasOwnProperty(n)&&wf(t,n,e[n])}function ru(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vi(t){return Wp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pe(){}var ou=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pa=null,da=null;function Gf(t){var e=ca(t);if(e&&(t=e.stateNode)){var l=t[re]||null;t:switch(t=e.stateNode,e.type){case"input":if(cu(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+je(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var i=a[re]||null;if(!i)throw Error(v(90));cu(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Hf(a)}break t;case"textarea":Qf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&oa(t,!!l.multiple,e,!1)}}}var pu=!1;function Lf(t,e,l){if(pu)return t(e,l);pu=!0;try{var a=t(e);return a}finally{if(pu=!1,(pa!==null||da!==null)&&(Dn(),pa&&(e=pa,t=da,da=pa=null,Gf(e),t)))for(e=0;e<t.length;e++)Gf(t[e])}}function Ja(t,e){var l=t.stateNode;if(l===null)return null;var a=l[re]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(v(231,e,typeof l));return l}var Ie=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(Ie)try{var Fa={};Object.defineProperty(Fa,"passive",{get:function(){du=!0}}),window.addEventListener("test",Fa,Fa),window.removeEventListener("test",Fa,Fa)}catch{du=!1}var vl=null,mu=null,Wi=null;function Xf(){if(Wi)return Wi;var t,e=mu,l=e.length,a,i="value"in vl?vl.value:vl.textContent,n=i.length;for(t=0;t<l&&e[t]===i[t];t++);var u=l-t;for(a=1;a<=u&&e[l-a]===i[n-a];a++);return Wi=i.slice(t,1<a?1-a:void 0)}function Ki(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ji(){return!0}function Zf(){return!1}function oe(t){function e(l,a,i,n,u){this._reactName=l,this._targetInst=i,this.type=a,this.nativeEvent=n,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Ji:Zf,this.isPropagationStopped=Zf,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ji)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ji)},persist:function(){},isPersistent:Ji}),e}var Xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fi=oe(Xl),ka=X({},Xl,{view:0,detail:0}),Kp=oe(ka),hu,gu,$a,ki=X({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$a&&($a&&t.type==="mousemove"?(hu=t.screenX-$a.screenX,gu=t.screenY-$a.screenY):gu=hu=0,$a=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:gu}}),Vf=oe(ki),Jp=X({},ki,{dataTransfer:0}),Fp=oe(Jp),kp=X({},ka,{relatedTarget:0}),vu=oe(kp),$p=X({},Xl,{animationName:0,elapsedTime:0,pseudoElement:0}),Pp=oe($p),Ip=X({},Xl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),td=oe(Ip),ed=X({},Xl,{data:0}),Wf=oe(ed),ld={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ad={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nd(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=id[t])?!!e[t]:!1}function yu(){return nd}var ud=X({},ka,{key:function(t){if(t.key){var e=ld[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ki(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ad[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(t){return t.type==="keypress"?Ki(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ki(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cd=oe(ud),fd=X({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=oe(fd),rd=X({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),od=oe(rd),sd=X({},Xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),pd=oe(sd),dd=X({},ki,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),md=oe(dd),hd=X({},Xl,{newState:0,oldState:0}),gd=oe(hd),vd=[9,13,27,32],Tu=Ie&&"CompositionEvent"in window,Pa=null;Ie&&"documentMode"in document&&(Pa=document.documentMode);var yd=Ie&&"TextEvent"in window&&!Pa,Jf=Ie&&(!Tu||Pa&&8<Pa&&11>=Pa),Ff=" ",kf=!1;function $f(t,e){switch(t){case"keyup":return vd.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ma=!1;function Td(t,e){switch(t){case"compositionend":return Pf(e);case"keypress":return e.which!==32?null:(kf=!0,Ff);case"textInput":return t=e.data,t===Ff&&kf?null:t;default:return null}}function bd(t,e){if(ma)return t==="compositionend"||!Tu&&$f(t,e)?(t=Xf(),Wi=mu=vl=null,ma=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jf&&e.locale!=="ko"?null:e.data;default:return null}}var xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function If(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xd[t.type]:e==="textarea"}function tr(t,e,l,a){pa?da?da.push(a):da=[a]:pa=a,e=Yn(e,"onChange"),0<e.length&&(l=new Fi("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Ia=null,ti=null;function Sd(t){Qs(t,0)}function $i(t){var e=Ka(t);if(Hf(e))return t}function er(t,e){if(t==="change")return e}var lr=!1;if(Ie){var bu;if(Ie){var xu="oninput"in document;if(!xu){var ar=document.createElement("div");ar.setAttribute("oninput","return;"),xu=typeof ar.oninput=="function"}bu=xu}else bu=!1;lr=bu&&(!document.documentMode||9<document.documentMode)}function ir(){Ia&&(Ia.detachEvent("onpropertychange",nr),ti=Ia=null)}function nr(t){if(t.propertyName==="value"&&$i(ti)){var e=[];tr(e,ti,t,su(t)),Lf(Sd,e)}}function Ad(t,e,l){t==="focusin"?(ir(),Ia=e,ti=l,Ia.attachEvent("onpropertychange",nr)):t==="focusout"&&ir()}function zd(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $i(ti)}function _d(t,e){if(t==="click")return $i(e)}function Ed(t,e){if(t==="input"||t==="change")return $i(e)}function Cd(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var be=typeof Object.is=="function"?Object.is:Cd;function ei(t,e){if(be(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var i=l[a];if(!tt.call(e,i)||!be(t[i],e[i]))return!1}return!0}function ur(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cr(t,e){var l=ur(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=ur(l)}}function fr(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fr(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rr(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Zi(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Zi(t.document)}return e}function Su(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var jd=Ie&&"documentMode"in document&&11>=document.documentMode,ha=null,Au=null,li=null,zu=!1;function or(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;zu||ha==null||ha!==Zi(a)||(a=ha,"selectionStart"in a&&Su(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),li&&ei(li,a)||(li=a,a=Yn(Au,"onSelect"),0<a.length&&(e=new Fi("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ha)))}function Zl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ga={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionrun:Zl("Transition","TransitionRun"),transitionstart:Zl("Transition","TransitionStart"),transitioncancel:Zl("Transition","TransitionCancel"),transitionend:Zl("Transition","TransitionEnd")},_u={},sr={};Ie&&(sr=document.createElement("div").style,"AnimationEvent"in window||(delete ga.animationend.animation,delete ga.animationiteration.animation,delete ga.animationstart.animation),"TransitionEvent"in window||delete ga.transitionend.transition);function Vl(t){if(_u[t])return _u[t];if(!ga[t])return t;var e=ga[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in sr)return _u[t]=e[l];return t}var pr=Vl("animationend"),dr=Vl("animationiteration"),mr=Vl("animationstart"),Md=Vl("transitionrun"),qd=Vl("transitionstart"),Rd=Vl("transitioncancel"),hr=Vl("transitionend"),gr=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Ye(t,e){gr.set(t,e),Ll(e,[t])}var Pi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Me=[],va=0,Cu=0;function Ii(){for(var t=va,e=Cu=va=0;e<t;){var l=Me[e];Me[e++]=null;var a=Me[e];Me[e++]=null;var i=Me[e];Me[e++]=null;var n=Me[e];if(Me[e++]=null,a!==null&&i!==null){var u=a.pending;u===null?i.next=i:(i.next=u.next,u.next=i),a.pending=i}n!==0&&vr(l,i,n)}}function tn(t,e,l,a){Me[va++]=t,Me[va++]=e,Me[va++]=l,Me[va++]=a,Cu|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function ju(t,e,l,a){return tn(t,e,l,a),en(t)}function Wl(t,e){return tn(t,null,null,e),en(t)}function vr(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var i=!1,n=t.return;n!==null;)n.childLanes|=l,a=n.alternate,a!==null&&(a.childLanes|=l),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(i=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,i&&e!==null&&(i=31-Te(l),t=n.hiddenUpdates,a=t[i],a===null?t[i]=[e]:a.push(e),e.lane=l|536870912),n):null}function en(t){if(50<zi)throw zi=0,Qc=null,Error(v(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ya={};function Od(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xe(t,e,l,a){return new Od(t,e,l,a)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tl(t,e){var l=t.alternate;return l===null?(l=xe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function yr(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ln(t,e,l,a,i,n){var u=0;if(a=t,typeof t=="function")Mu(t)&&(u=1);else if(typeof t=="string")u=Qm(t,l,w.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case le:return t=xe(31,l,e,i),t.elementType=le,t.lanes=n,t;case Lt:return Kl(l.children,i,n,e);case Qe:u=8,i|=24;break;case ne:return t=xe(12,l,e,i|2),t.elementType=ne,t.lanes=n,t;case ce:return t=xe(13,l,e,i),t.elementType=ce,t.lanes=n,t;case ee:return t=xe(19,l,e,i),t.elementType=ee,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xt:u=10;break t;case Ne:u=9;break t;case ue:u=11;break t;case ut:u=14;break t;case Vt:u=16,a=null;break t}u=29,l=Error(v(130,t===null?"null":typeof t,"")),a=null}return e=xe(u,l,e,i),e.elementType=t,e.type=a,e.lanes=n,e}function Kl(t,e,l,a){return t=xe(7,t,a,e),t.lanes=l,t}function qu(t,e,l){return t=xe(6,t,null,e),t.lanes=l,t}function Tr(t){var e=xe(18,null,null,0);return e.stateNode=t,e}function Ru(t,e,l){return e=xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var br=new WeakMap;function qe(t,e){if(typeof t=="object"&&t!==null){var l=br.get(t);return l!==void 0?l:(e={value:t,source:e,stack:D(e)},br.set(t,e),e)}return{value:t,source:e,stack:D(e)}}var Ta=[],ba=0,an=null,ai=0,Re=[],Oe=0,yl=null,Ve=1,We="";function el(t,e){Ta[ba++]=ai,Ta[ba++]=an,an=t,ai=e}function xr(t,e,l){Re[Oe++]=Ve,Re[Oe++]=We,Re[Oe++]=yl,yl=t;var a=Ve;t=We;var i=32-Te(a)-1;a&=~(1<<i),l+=1;var n=32-Te(e)+i;if(30<n){var u=i-i%5;n=(a&(1<<u)-1).toString(32),a>>=u,i-=u,Ve=1<<32-Te(e)+i|l<<i|a,We=n+t}else Ve=1<<n|l<<i|a,We=t}function Ou(t){t.return!==null&&(el(t,1),xr(t,1,0))}function Du(t){for(;t===an;)an=Ta[--ba],Ta[ba]=null,ai=Ta[--ba],Ta[ba]=null;for(;t===yl;)yl=Re[--Oe],Re[Oe]=null,We=Re[--Oe],Re[Oe]=null,Ve=Re[--Oe],Re[Oe]=null}function Sr(t,e){Re[Oe++]=Ve,Re[Oe++]=We,Re[Oe++]=yl,Ve=e.id,We=e.overflow,yl=t}var $t=null,Ct=null,st=!1,Tl=null,De=!1,Uu=Error(v(519));function bl(t){var e=Error(v(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ii(qe(e,t)),Uu}function Ar(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[kt]=t,e[re]=a,l){case"dialog":ft("cancel",e),ft("close",e);break;case"iframe":case"object":case"embed":ft("load",e);break;case"video":case"audio":for(l=0;l<Ei.length;l++)ft(Ei[l],e);break;case"source":ft("error",e);break;case"img":case"image":case"link":ft("error",e),ft("load",e);break;case"details":ft("toggle",e);break;case"input":ft("invalid",e),Bf(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":ft("invalid",e);break;case"textarea":ft("invalid",e),Nf(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Gs(e.textContent,l)?(a.popover!=null&&(ft("beforetoggle",e),ft("toggle",e)),a.onScroll!=null&&ft("scroll",e),a.onScrollEnd!=null&&ft("scrollend",e),a.onClick!=null&&(e.onclick=Pe),e=!0):e=!1,e||bl(t,!0)}function zr(t){for($t=t.return;$t;)switch($t.tag){case 5:case 31:case 13:De=!1;return;case 27:case 3:De=!0;return;default:$t=$t.return}}function xa(t){if(t!==$t)return!1;if(!st)return zr(t),st=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||Pc(t.type,t.memoizedProps)),l=!l),l&&Ct&&bl(t),zr(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));Ct=ks(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));Ct=ks(t)}else e===27?(e=Ct,Ul(t.type)?(t=af,af=null,Ct=t):Ct=e):Ct=$t?He(t.stateNode.nextSibling):null;return!0}function Jl(){Ct=$t=null,st=!1}function Hu(){var t=Tl;return t!==null&&(me===null?me=t:me.push.apply(me,t),Tl=null),t}function ii(t){Tl===null?Tl=[t]:Tl.push(t)}var Bu=o(null),Fl=null,ll=null;function xl(t,e,l){O(Bu,e._currentValue),e._currentValue=l}function al(t){t._currentValue=Bu.current,z(Bu)}function Qu(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Nu(t,e,l,a){var i=t.child;for(i!==null&&(i.return=t);i!==null;){var n=i.dependencies;if(n!==null){var u=i.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=i;for(var f=0;f<e.length;f++)if(c.context===e[f]){n.lanes|=l,c=n.alternate,c!==null&&(c.lanes|=l),Qu(n.return,l,t),a||(u=null);break t}n=c.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(v(341));u.lanes|=l,n=u.alternate,n!==null&&(n.lanes|=l),Qu(u,l,t),u=null}else u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===t){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function Sa(t,e,l,a){t=null;for(var i=e,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(v(387));if(u=u.memoizedProps,u!==null){var c=i.type;be(i.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(i===ht.current){if(u=i.alternate,u===null)throw Error(v(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(t!==null?t.push(Ri):t=[Ri])}i=i.return}t!==null&&Nu(e,t,l,a),e.flags|=262144}function nn(t){for(t=t.firstContext;t!==null;){if(!be(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function kl(t){Fl=t,ll=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Pt(t){return _r(Fl,t)}function un(t,e){return Fl===null&&kl(t),_r(t,e)}function _r(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},ll===null){if(t===null)throw Error(v(308));ll=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else ll=ll.next=e;return l}var Dd=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},Ud=U.unstable_scheduleCallback,Hd=U.unstable_NormalPriority,Nt={$$typeof:Xt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wu(){return{controller:new Dd,data:new Map,refCount:0}}function ni(t){t.refCount--,t.refCount===0&&Ud(Hd,function(){t.controller.abort()})}var ui=null,Yu=0,Aa=0,za=null;function Bd(t,e){if(ui===null){var l=ui=[];Yu=0,Aa=Xc(),za={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Yu++,e.then(Er,Er),e}function Er(){if(--Yu===0&&ui!==null){za!==null&&(za.status="fulfilled");var t=ui;ui=null,Aa=0,za=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Qd(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(i){l.push(i)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var i=0;i<l.length;i++)(0,l[i])(e)},function(i){for(a.status="rejected",a.reason=i,i=0;i<l.length;i++)(0,l[i])(void 0)}),a}var Cr=x.S;x.S=function(t,e){ss=j(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Bd(t,e),Cr!==null&&Cr(t,e)};var $l=o(null);function Gu(){var t=$l.current;return t!==null?t:_t.pooledCache}function cn(t,e){e===null?O($l,$l.current):O($l,e.pool)}function jr(){var t=Gu();return t===null?null:{parent:Nt._currentValue,pool:t}}var _a=Error(v(460)),Lu=Error(v(474)),fn=Error(v(542)),rn={then:function(){}};function Mr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function qr(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Pe,Pe),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Or(t),t;default:if(typeof e.status=="string")e.then(Pe,Pe);else{if(t=_t,t!==null&&100<t.shellSuspendCounter)throw Error(v(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var i=e;i.status="fulfilled",i.value=a}},function(a){if(e.status==="pending"){var i=e;i.status="rejected",i.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Or(t),t}throw Il=e,_a}}function Pl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Il=l,_a):l}}var Il=null;function Rr(){if(Il===null)throw Error(v(459));var t=Il;return Il=null,t}function Or(t){if(t===_a||t===fn)throw Error(v(483))}var Ea=null,ci=0;function on(t){var e=ci;return ci+=1,Ea===null&&(Ea=[]),qr(Ea,t,e)}function fi(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function sn(t,e){throw e.$$typeof===nt?Error(v(525)):(t=Object.prototype.toString.call(e),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Dr(t){function e(s,r){if(t){var d=s.deletions;d===null?(s.deletions=[r],s.flags|=16):d.push(r)}}function l(s,r){if(!t)return null;for(;r!==null;)e(s,r),r=r.sibling;return null}function a(s){for(var r=new Map;s!==null;)s.key!==null?r.set(s.key,s):r.set(s.index,s),s=s.sibling;return r}function i(s,r){return s=tl(s,r),s.index=0,s.sibling=null,s}function n(s,r,d){return s.index=d,t?(d=s.alternate,d!==null?(d=d.index,d<r?(s.flags|=67108866,r):d):(s.flags|=67108866,r)):(s.flags|=1048576,r)}function u(s){return t&&s.alternate===null&&(s.flags|=67108866),s}function c(s,r,d,S){return r===null||r.tag!==6?(r=qu(d,s.mode,S),r.return=s,r):(r=i(r,d),r.return=s,r)}function f(s,r,d,S){var V=d.type;return V===Lt?b(s,r,d.props.children,S,d.key):r!==null&&(r.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Vt&&Pl(V)===r.type)?(r=i(r,d.props),fi(r,d),r.return=s,r):(r=ln(d.type,d.key,d.props,null,s.mode,S),fi(r,d),r.return=s,r)}function m(s,r,d,S){return r===null||r.tag!==4||r.stateNode.containerInfo!==d.containerInfo||r.stateNode.implementation!==d.implementation?(r=Ru(d,s.mode,S),r.return=s,r):(r=i(r,d.children||[]),r.return=s,r)}function b(s,r,d,S,V){return r===null||r.tag!==7?(r=Kl(d,s.mode,S,V),r.return=s,r):(r=i(r,d),r.return=s,r)}function A(s,r,d){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=qu(""+r,s.mode,d),r.return=s,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Qt:return d=ln(r.type,r.key,r.props,null,s.mode,d),fi(d,r),d.return=s,d;case pt:return r=Ru(r,s.mode,d),r.return=s,r;case Vt:return r=Pl(r),A(s,r,d)}if(ve(r)||ae(r))return r=Kl(r,s.mode,d,null),r.return=s,r;if(typeof r.then=="function")return A(s,on(r),d);if(r.$$typeof===Xt)return A(s,un(s,r),d);sn(s,r)}return null}function g(s,r,d,S){var V=r!==null?r.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return V!==null?null:c(s,r,""+d,S);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qt:return d.key===V?f(s,r,d,S):null;case pt:return d.key===V?m(s,r,d,S):null;case Vt:return d=Pl(d),g(s,r,d,S)}if(ve(d)||ae(d))return V!==null?null:b(s,r,d,S,null);if(typeof d.then=="function")return g(s,r,on(d),S);if(d.$$typeof===Xt)return g(s,r,un(s,d),S);sn(s,d)}return null}function y(s,r,d,S,V){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return s=s.get(d)||null,c(r,s,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Qt:return s=s.get(S.key===null?d:S.key)||null,f(r,s,S,V);case pt:return s=s.get(S.key===null?d:S.key)||null,m(r,s,S,V);case Vt:return S=Pl(S),y(s,r,d,S,V)}if(ve(S)||ae(S))return s=s.get(d)||null,b(r,s,S,V,null);if(typeof S.then=="function")return y(s,r,d,on(S),V);if(S.$$typeof===Xt)return y(s,r,d,un(r,S),V);sn(r,S)}return null}function N(s,r,d,S){for(var V=null,gt=null,G=r,at=r=0,ot=null;G!==null&&at<d.length;at++){G.index>at?(ot=G,G=null):ot=G.sibling;var vt=g(s,G,d[at],S);if(vt===null){G===null&&(G=ot);break}t&&G&&vt.alternate===null&&e(s,G),r=n(vt,r,at),gt===null?V=vt:gt.sibling=vt,gt=vt,G=ot}if(at===d.length)return l(s,G),st&&el(s,at),V;if(G===null){for(;at<d.length;at++)G=A(s,d[at],S),G!==null&&(r=n(G,r,at),gt===null?V=G:gt.sibling=G,gt=G);return st&&el(s,at),V}for(G=a(G);at<d.length;at++)ot=y(G,s,at,d[at],S),ot!==null&&(t&&ot.alternate!==null&&G.delete(ot.key===null?at:ot.key),r=n(ot,r,at),gt===null?V=ot:gt.sibling=ot,gt=ot);return t&&G.forEach(function(wl){return e(s,wl)}),st&&el(s,at),V}function W(s,r,d,S){if(d==null)throw Error(v(151));for(var V=null,gt=null,G=r,at=r=0,ot=null,vt=d.next();G!==null&&!vt.done;at++,vt=d.next()){G.index>at?(ot=G,G=null):ot=G.sibling;var wl=g(s,G,vt.value,S);if(wl===null){G===null&&(G=ot);break}t&&G&&wl.alternate===null&&e(s,G),r=n(wl,r,at),gt===null?V=wl:gt.sibling=wl,gt=wl,G=ot}if(vt.done)return l(s,G),st&&el(s,at),V;if(G===null){for(;!vt.done;at++,vt=d.next())vt=A(s,vt.value,S),vt!==null&&(r=n(vt,r,at),gt===null?V=vt:gt.sibling=vt,gt=vt);return st&&el(s,at),V}for(G=a(G);!vt.done;at++,vt=d.next())vt=y(G,s,at,vt.value,S),vt!==null&&(t&&vt.alternate!==null&&G.delete(vt.key===null?at:vt.key),r=n(vt,r,at),gt===null?V=vt:gt.sibling=vt,gt=vt);return t&&G.forEach(function(Jm){return e(s,Jm)}),st&&el(s,at),V}function zt(s,r,d,S){if(typeof d=="object"&&d!==null&&d.type===Lt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Qt:t:{for(var V=d.key;r!==null;){if(r.key===V){if(V=d.type,V===Lt){if(r.tag===7){l(s,r.sibling),S=i(r,d.props.children),S.return=s,s=S;break t}}else if(r.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Vt&&Pl(V)===r.type){l(s,r.sibling),S=i(r,d.props),fi(S,d),S.return=s,s=S;break t}l(s,r);break}else e(s,r);r=r.sibling}d.type===Lt?(S=Kl(d.props.children,s.mode,S,d.key),S.return=s,s=S):(S=ln(d.type,d.key,d.props,null,s.mode,S),fi(S,d),S.return=s,s=S)}return u(s);case pt:t:{for(V=d.key;r!==null;){if(r.key===V)if(r.tag===4&&r.stateNode.containerInfo===d.containerInfo&&r.stateNode.implementation===d.implementation){l(s,r.sibling),S=i(r,d.children||[]),S.return=s,s=S;break t}else{l(s,r);break}else e(s,r);r=r.sibling}S=Ru(d,s.mode,S),S.return=s,s=S}return u(s);case Vt:return d=Pl(d),zt(s,r,d,S)}if(ve(d))return N(s,r,d,S);if(ae(d)){if(V=ae(d),typeof V!="function")throw Error(v(150));return d=V.call(d),W(s,r,d,S)}if(typeof d.then=="function")return zt(s,r,on(d),S);if(d.$$typeof===Xt)return zt(s,r,un(s,d),S);sn(s,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,r!==null&&r.tag===6?(l(s,r.sibling),S=i(r,d),S.return=s,s=S):(l(s,r),S=qu(d,s.mode,S),S.return=s,s=S),u(s)):l(s,r)}return function(s,r,d,S){try{ci=0;var V=zt(s,r,d,S);return Ea=null,V}catch(G){if(G===_a||G===fn)throw G;var gt=xe(29,G,null,s.mode);return gt.lanes=S,gt.return=s,gt}}}var ta=Dr(!0),Ur=Dr(!1),Sl=!1;function Xu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Al(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function zl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(yt&2)!==0){var i=a.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),a.pending=e,e=en(t),vr(t,null,l),e}return tn(t,a,e,l),en(t)}function ri(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,_f(t,l)}}function Vu(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var i=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var u={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?i=n=u:n=n.next=u,l=l.next}while(l!==null);n===null?i=n=e:n=n.next=e}else i=n=e;l={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Wu=!1;function oi(){if(Wu){var t=za;if(t!==null)throw t}}function si(t,e,l,a){Wu=!1;var i=t.updateQueue;Sl=!1;var n=i.firstBaseUpdate,u=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var f=c,m=f.next;f.next=null,u===null?n=m:u.next=m,u=f;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==u&&(c===null?b.firstBaseUpdate=m:c.next=m,b.lastBaseUpdate=f))}if(n!==null){var A=i.baseState;u=0,b=m=f=null,c=n;do{var g=c.lane&-536870913,y=g!==c.lane;if(y?(rt&g)===g:(a&g)===g){g!==0&&g===Aa&&(Wu=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var N=t,W=c;g=e;var zt=l;switch(W.tag){case 1:if(N=W.payload,typeof N=="function"){A=N.call(zt,A,g);break t}A=N;break t;case 3:N.flags=N.flags&-65537|128;case 0:if(N=W.payload,g=typeof N=="function"?N.call(zt,A,g):N,g==null)break t;A=X({},A,g);break t;case 2:Sl=!0}}g=c.callback,g!==null&&(t.flags|=64,y&&(t.flags|=8192),y=i.callbacks,y===null?i.callbacks=[g]:y.push(g))}else y={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(m=b=y,f=A):b=b.next=y,u|=g;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;y=c,c=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);b===null&&(f=A),i.baseState=f,i.firstBaseUpdate=m,i.lastBaseUpdate=b,n===null&&(i.shared.lanes=0),Ml|=u,t.lanes=u,t.memoizedState=A}}function Hr(t,e){if(typeof t!="function")throw Error(v(191,t));t.call(e)}function Br(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Hr(l[t],e)}var Ca=o(null),pn=o(0);function Qr(t,e){t=pl,O(pn,t),O(Ca,e),pl=t|e.baseLanes}function Ku(){O(pn,pl),O(Ca,Ca.current)}function Ju(){pl=pn.current,z(Ca),z(pn)}var Se=o(null),Ue=null;function _l(t){var e=t.alternate;O(Ht,Ht.current&1),O(Se,t),Ue===null&&(e===null||Ca.current!==null||e.memoizedState!==null)&&(Ue=t)}function Fu(t){O(Ht,Ht.current),O(Se,t),Ue===null&&(Ue=t)}function Nr(t){t.tag===22?(O(Ht,Ht.current),O(Se,t),Ue===null&&(Ue=t)):El()}function El(){O(Ht,Ht.current),O(Se,Se.current)}function Ae(t){z(Se),Ue===t&&(Ue=null),z(Ht)}var Ht=o(0);function dn(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||ef(l)||lf(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var il=0,et=null,St=null,wt=null,mn=!1,ja=!1,ea=!1,hn=0,pi=0,Ma=null,Nd=0;function Dt(){throw Error(v(321))}function ku(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!be(t[l],e[l]))return!1;return!0}function $u(t,e,l,a,i,n){return il=n,et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,x.H=t===null||t.memoizedState===null?So:pc,ea=!1,n=l(a,i),ea=!1,ja&&(n=Yr(e,l,a,i)),wr(t),n}function wr(t){x.H=hi;var e=St!==null&&St.next!==null;if(il=0,wt=St=et=null,mn=!1,pi=0,Ma=null,e)throw Error(v(300));t===null||Yt||(t=t.dependencies,t!==null&&nn(t)&&(Yt=!0))}function Yr(t,e,l,a){et=t;var i=0;do{if(ja&&(Ma=null),pi=0,ja=!1,25<=i)throw Error(v(301));if(i+=1,wt=St=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}x.H=Ao,n=e(l,a)}while(ja);return n}function wd(){var t=x.H,e=t.useState()[0];return e=typeof e.then=="function"?di(e):e,t=t.useState()[0],(St!==null?St.memoizedState:null)!==t&&(et.flags|=1024),e}function Pu(){var t=hn!==0;return hn=0,t}function Iu(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function tc(t){if(mn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}mn=!1}il=0,wt=St=et=null,ja=!1,pi=hn=0,Ma=null}function fe(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wt===null?et.memoizedState=wt=t:wt=wt.next=t,wt}function Bt(){if(St===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=wt===null?et.memoizedState:wt.next;if(e!==null)wt=e,St=t;else{if(t===null)throw et.alternate===null?Error(v(467)):Error(v(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},wt===null?et.memoizedState=wt=t:wt=wt.next=t}return wt}function gn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function di(t){var e=pi;return pi+=1,Ma===null&&(Ma=[]),t=qr(Ma,t,e),e=et,(wt===null?e.memoizedState:wt.next)===null&&(e=e.alternate,x.H=e===null||e.memoizedState===null?So:pc),t}function vn(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return di(t);if(t.$$typeof===Xt)return Pt(t)}throw Error(v(438,String(t)))}function ec(t){var e=null,l=et.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=et.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(i){return i.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=gn(),et.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=Xe;return e.index++,l}function nl(t,e){return typeof e=="function"?e(t):e}function yn(t){var e=Bt();return lc(e,St,t)}function lc(t,e,l){var a=t.queue;if(a===null)throw Error(v(311));a.lastRenderedReducer=l;var i=t.baseQueue,n=a.pending;if(n!==null){if(i!==null){var u=i.next;i.next=n.next,n.next=u}e.baseQueue=i=n,a.pending=null}if(n=t.baseState,i===null)t.memoizedState=n;else{e=i.next;var c=u=null,f=null,m=e,b=!1;do{var A=m.lane&-536870913;if(A!==m.lane?(rt&A)===A:(il&A)===A){var g=m.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),A===Aa&&(b=!0);else if((il&g)===g){m=m.next,g===Aa&&(b=!0);continue}else A={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=A,u=n):f=f.next=A,et.lanes|=g,Ml|=g;A=m.action,ea&&l(n,A),n=m.hasEagerState?m.eagerState:l(n,A)}else g={lane:A,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=g,u=n):f=f.next=g,et.lanes|=A,Ml|=A;m=m.next}while(m!==null&&m!==e);if(f===null?u=n:f.next=c,!be(n,t.memoizedState)&&(Yt=!0,b&&(l=za,l!==null)))throw l;t.memoizedState=n,t.baseState=u,t.baseQueue=f,a.lastRenderedState=n}return i===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function ac(t){var e=Bt(),l=e.queue;if(l===null)throw Error(v(311));l.lastRenderedReducer=t;var a=l.dispatch,i=l.pending,n=e.memoizedState;if(i!==null){l.pending=null;var u=i=i.next;do n=t(n,u.action),u=u.next;while(u!==i);be(n,e.memoizedState)||(Yt=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),l.lastRenderedState=n}return[n,a]}function Gr(t,e,l){var a=et,i=Bt(),n=st;if(n){if(l===void 0)throw Error(v(407));l=l()}else l=e();var u=!be((St||i).memoizedState,l);if(u&&(i.memoizedState=l,Yt=!0),i=i.queue,uc(Zr.bind(null,a,i,t),[t]),i.getSnapshot!==e||u||wt!==null&&wt.memoizedState.tag&1){if(a.flags|=2048,qa(9,{destroy:void 0},Xr.bind(null,a,i,l,e),null),_t===null)throw Error(v(349));n||(il&127)!==0||Lr(a,e,l)}return l}function Lr(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=et.updateQueue,e===null?(e=gn(),et.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Xr(t,e,l,a){e.value=l,e.getSnapshot=a,Vr(e)&&Wr(t)}function Zr(t,e,l){return l(function(){Vr(e)&&Wr(t)})}function Vr(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!be(t,l)}catch{return!0}}function Wr(t){var e=Wl(t,2);e!==null&&he(e,t,2)}function ic(t){var e=fe();if(typeof t=="function"){var l=t;if(t=l(),ea){hl(!0);try{l()}finally{hl(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:t},e}function Kr(t,e,l,a){return t.baseState=l,lc(t,St,typeof a=="function"?a:nl)}function Yd(t,e,l,a,i){if(xn(t))throw Error(v(485));if(t=e.action,t!==null){var n={payload:i,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){n.listeners.push(u)}};x.T!==null?l(!0):n.isTransition=!1,a(n),l=e.pending,l===null?(n.next=e.pending=n,Jr(e,n)):(n.next=l.next,e.pending=l.next=n)}}function Jr(t,e){var l=e.action,a=e.payload,i=t.state;if(e.isTransition){var n=x.T,u={};x.T=u;try{var c=l(i,a),f=x.S;f!==null&&f(u,c),Fr(t,e,c)}catch(m){nc(t,e,m)}finally{n!==null&&u.types!==null&&(n.types=u.types),x.T=n}}else try{n=l(i,a),Fr(t,e,n)}catch(m){nc(t,e,m)}}function Fr(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){kr(t,e,a)},function(a){return nc(t,e,a)}):kr(t,e,l)}function kr(t,e,l){e.status="fulfilled",e.value=l,$r(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Jr(t,l)))}function nc(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,$r(e),e=e.next;while(e!==a)}t.action=null}function $r(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Pr(t,e){return e}function Ir(t,e){if(st){var l=_t.formState;if(l!==null){t:{var a=et;if(st){if(Ct){e:{for(var i=Ct,n=De;i.nodeType!==8;){if(!n){i=null;break e}if(i=He(i.nextSibling),i===null){i=null;break e}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){Ct=He(i.nextSibling),a=i.data==="F!";break t}}bl(a)}a=!1}a&&(e=l[0])}}return l=fe(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},l.queue=a,l=To.bind(null,et,a),a.dispatch=l,a=ic(!1),n=sc.bind(null,et,!1,a.queue),a=fe(),i={state:e,dispatch:null,action:t,pending:null},a.queue=i,l=Yd.bind(null,et,i,n,l),i.dispatch=l,a.memoizedState=t,[e,l,!1]}function to(t){var e=Bt();return eo(e,St,t)}function eo(t,e,l){if(e=lc(t,e,Pr)[0],t=yn(nl)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=di(e)}catch(u){throw u===_a?fn:u}else a=e;e=Bt();var i=e.queue,n=i.dispatch;return l!==e.memoizedState&&(et.flags|=2048,qa(9,{destroy:void 0},Gd.bind(null,i,l),null)),[a,n,t]}function Gd(t,e){t.action=e}function lo(t){var e=Bt(),l=St;if(l!==null)return eo(e,l,t);Bt(),e=e.memoizedState,l=Bt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function qa(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=et.updateQueue,e===null&&(e=gn(),et.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function ao(){return Bt().memoizedState}function Tn(t,e,l,a){var i=fe();et.flags|=t,i.memoizedState=qa(1|e,{destroy:void 0},l,a===void 0?null:a)}function bn(t,e,l,a){var i=Bt();a=a===void 0?null:a;var n=i.memoizedState.inst;St!==null&&a!==null&&ku(a,St.memoizedState.deps)?i.memoizedState=qa(e,n,l,a):(et.flags|=t,i.memoizedState=qa(1|e,n,l,a))}function io(t,e){Tn(8390656,8,t,e)}function uc(t,e){bn(2048,8,t,e)}function Ld(t){et.flags|=4;var e=et.updateQueue;if(e===null)e=gn(),et.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function no(t){var e=Bt().memoizedState;return Ld({ref:e,nextImpl:t}),function(){if((yt&2)!==0)throw Error(v(440));return e.impl.apply(void 0,arguments)}}function uo(t,e){return bn(4,2,t,e)}function co(t,e){return bn(4,4,t,e)}function fo(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ro(t,e,l){l=l!=null?l.concat([t]):null,bn(4,4,fo.bind(null,e,t),l)}function cc(){}function oo(t,e){var l=Bt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&ku(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function so(t,e){var l=Bt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&ku(e,a[1]))return a[0];if(a=t(),ea){hl(!0);try{t()}finally{hl(!1)}}return l.memoizedState=[a,e],a}function fc(t,e,l){return l===void 0||(il&1073741824)!==0&&(rt&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=ds(),et.lanes|=t,Ml|=t,l)}function po(t,e,l,a){return be(l,e)?l:Ca.current!==null?(t=fc(t,l,a),be(t,e)||(Yt=!0),t):(il&42)===0||(il&1073741824)!==0&&(rt&261930)===0?(Yt=!0,t.memoizedState=l):(t=ds(),et.lanes|=t,Ml|=t,e)}function mo(t,e,l,a,i){var n=q.p;q.p=n!==0&&8>n?n:8;var u=x.T,c={};x.T=c,sc(t,!1,e,l);try{var f=i(),m=x.S;if(m!==null&&m(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=Qd(f,a);mi(t,e,b,Ee(t))}else mi(t,e,a,Ee(t))}catch(A){mi(t,e,{then:function(){},status:"rejected",reason:A},Ee())}finally{q.p=n,u!==null&&c.types!==null&&(u.types=c.types),x.T=u}}function Xd(){}function rc(t,e,l,a){if(t.tag!==5)throw Error(v(476));var i=ho(t).queue;mo(t,i,e,K,l===null?Xd:function(){return go(t),l(a)})}function ho(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:K},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function go(t){var e=ho(t);e.next===null&&(e=t.alternate.memoizedState),mi(t,e.next.queue,{},Ee())}function oc(){return Pt(Ri)}function vo(){return Bt().memoizedState}function yo(){return Bt().memoizedState}function Zd(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=Ee();t=Al(l);var a=zl(e,t,l);a!==null&&(he(a,e,l),ri(a,e,l)),e={cache:wu()},t.payload=e;return}e=e.return}}function Vd(t,e,l){var a=Ee();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},xn(t)?bo(e,l):(l=ju(t,e,l,a),l!==null&&(he(l,t,a),xo(l,e,a)))}function To(t,e,l){var a=Ee();mi(t,e,l,a)}function mi(t,e,l,a){var i={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(xn(t))bo(e,i);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var u=e.lastRenderedState,c=n(u,l);if(i.hasEagerState=!0,i.eagerState=c,be(c,u))return tn(t,e,i,0),_t===null&&Ii(),!1}catch{}if(l=ju(t,e,i,a),l!==null)return he(l,t,a),xo(l,e,a),!0}return!1}function sc(t,e,l,a){if(a={lane:2,revertLane:Xc(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xn(t)){if(e)throw Error(v(479))}else e=ju(t,l,a,2),e!==null&&he(e,t,2)}function xn(t){var e=t.alternate;return t===et||e!==null&&e===et}function bo(t,e){ja=mn=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function xo(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,_f(t,l)}}var hi={readContext:Pt,use:vn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useLayoutEffect:Dt,useInsertionEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useSyncExternalStore:Dt,useId:Dt,useHostTransitionStatus:Dt,useFormState:Dt,useActionState:Dt,useOptimistic:Dt,useMemoCache:Dt,useCacheRefresh:Dt};hi.useEffectEvent=Dt;var So={readContext:Pt,use:vn,useCallback:function(t,e){return fe().memoizedState=[t,e===void 0?null:e],t},useContext:Pt,useEffect:io,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Tn(4194308,4,fo.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Tn(4194308,4,t,e)},useInsertionEffect:function(t,e){Tn(4,2,t,e)},useMemo:function(t,e){var l=fe();e=e===void 0?null:e;var a=t();if(ea){hl(!0);try{t()}finally{hl(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=fe();if(l!==void 0){var i=l(e);if(ea){hl(!0);try{l(e)}finally{hl(!1)}}}else i=e;return a.memoizedState=a.baseState=i,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},a.queue=t,t=t.dispatch=Vd.bind(null,et,t),[a.memoizedState,t]},useRef:function(t){var e=fe();return t={current:t},e.memoizedState=t},useState:function(t){t=ic(t);var e=t.queue,l=To.bind(null,et,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:cc,useDeferredValue:function(t,e){var l=fe();return fc(l,t,e)},useTransition:function(){var t=ic(!1);return t=mo.bind(null,et,t.queue,!0,!1),fe().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=et,i=fe();if(st){if(l===void 0)throw Error(v(407));l=l()}else{if(l=e(),_t===null)throw Error(v(349));(rt&127)!==0||Lr(a,e,l)}i.memoizedState=l;var n={value:l,getSnapshot:e};return i.queue=n,io(Zr.bind(null,a,n,t),[t]),a.flags|=2048,qa(9,{destroy:void 0},Xr.bind(null,a,n,l,e),null),l},useId:function(){var t=fe(),e=_t.identifierPrefix;if(st){var l=We,a=Ve;l=(a&~(1<<32-Te(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=hn++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=Nd++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:oc,useFormState:Ir,useActionState:Ir,useOptimistic:function(t){var e=fe();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=sc.bind(null,et,!0,l),l.dispatch=e,[t,e]},useMemoCache:ec,useCacheRefresh:function(){return fe().memoizedState=Zd.bind(null,et)},useEffectEvent:function(t){var e=fe(),l={impl:t};return e.memoizedState=l,function(){if((yt&2)!==0)throw Error(v(440));return l.impl.apply(void 0,arguments)}}},pc={readContext:Pt,use:vn,useCallback:oo,useContext:Pt,useEffect:uc,useImperativeHandle:ro,useInsertionEffect:uo,useLayoutEffect:co,useMemo:so,useReducer:yn,useRef:ao,useState:function(){return yn(nl)},useDebugValue:cc,useDeferredValue:function(t,e){var l=Bt();return po(l,St.memoizedState,t,e)},useTransition:function(){var t=yn(nl)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:di(t),e]},useSyncExternalStore:Gr,useId:vo,useHostTransitionStatus:oc,useFormState:to,useActionState:to,useOptimistic:function(t,e){var l=Bt();return Kr(l,St,t,e)},useMemoCache:ec,useCacheRefresh:yo};pc.useEffectEvent=no;var Ao={readContext:Pt,use:vn,useCallback:oo,useContext:Pt,useEffect:uc,useImperativeHandle:ro,useInsertionEffect:uo,useLayoutEffect:co,useMemo:so,useReducer:ac,useRef:ao,useState:function(){return ac(nl)},useDebugValue:cc,useDeferredValue:function(t,e){var l=Bt();return St===null?fc(l,t,e):po(l,St.memoizedState,t,e)},useTransition:function(){var t=ac(nl)[0],e=Bt().memoizedState;return[typeof t=="boolean"?t:di(t),e]},useSyncExternalStore:Gr,useId:vo,useHostTransitionStatus:oc,useFormState:lo,useActionState:lo,useOptimistic:function(t,e){var l=Bt();return St!==null?Kr(l,St,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:ec,useCacheRefresh:yo};Ao.useEffectEvent=no;function dc(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:X({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var mc={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=Ee(),i=Al(a);i.payload=e,l!=null&&(i.callback=l),e=zl(t,i,a),e!==null&&(he(e,t,a),ri(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=Ee(),i=Al(a);i.tag=1,i.payload=e,l!=null&&(i.callback=l),e=zl(t,i,a),e!==null&&(he(e,t,a),ri(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=Ee(),a=Al(l);a.tag=2,e!=null&&(a.callback=e),e=zl(t,a,l),e!==null&&(he(e,t,l),ri(e,t,l))}};function zo(t,e,l,a,i,n,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,n,u):e.prototype&&e.prototype.isPureReactComponent?!ei(l,a)||!ei(i,n):!0}function _o(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function la(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=X({},l));for(var i in t)l[i]===void 0&&(l[i]=t[i])}return l}function Eo(t){Pi(t)}function Co(t){console.error(t)}function jo(t){Pi(t)}function Sn(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Mo(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function hc(t,e,l){return l=Al(l),l.tag=3,l.payload={element:null},l.callback=function(){Sn(t,e)},l}function qo(t){return t=Al(t),t.tag=3,t}function Ro(t,e,l,a){var i=l.type.getDerivedStateFromError;if(typeof i=="function"){var n=a.value;t.payload=function(){return i(n)},t.callback=function(){Mo(e,l,a)}}var u=l.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Mo(e,l,a),typeof i!="function"&&(ql===null?ql=new Set([this]):ql.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function Wd(t,e,l,a,i){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Sa(e,l,i,!0),l=Se.current,l!==null){switch(l.tag){case 31:case 13:return Ue===null?Un():l.alternate===null&&Ut===0&&(Ut=3),l.flags&=-257,l.flags|=65536,l.lanes=i,a===rn?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Yc(t,a,i)),!1;case 22:return l.flags|=65536,a===rn?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Yc(t,a,i)),!1}throw Error(v(435,l.tag))}return Yc(t,a,i),Un(),!1}if(st)return e=Se.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=i,a!==Uu&&(t=Error(v(422),{cause:a}),ii(qe(t,l)))):(a!==Uu&&(e=Error(v(423),{cause:a}),ii(qe(e,l))),t=t.current.alternate,t.flags|=65536,i&=-i,t.lanes|=i,a=qe(a,l),i=hc(t.stateNode,a,i),Vu(t,i),Ut!==4&&(Ut=2)),!1;var n=Error(v(520),{cause:a});if(n=qe(n,l),Ai===null?Ai=[n]:Ai.push(n),Ut!==4&&(Ut=2),e===null)return!0;a=qe(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=i&-i,l.lanes|=t,t=hc(l.stateNode,a,t),Vu(l,t),!1;case 1:if(e=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(ql===null||!ql.has(n))))return l.flags|=65536,i&=-i,l.lanes|=i,i=qo(i),Ro(i,t,l,a),Vu(l,i),!1}l=l.return}while(l!==null);return!1}var gc=Error(v(461)),Yt=!1;function It(t,e,l,a){e.child=t===null?Ur(e,null,l,a):ta(e,t.child,l,a)}function Oo(t,e,l,a,i){l=l.render;var n=e.ref;if("ref"in a){var u={};for(var c in a)c!=="ref"&&(u[c]=a[c])}else u=a;return kl(e),a=$u(t,e,l,u,n,i),c=Pu(),t!==null&&!Yt?(Iu(t,e,i),ul(t,e,i)):(st&&c&&Ou(e),e.flags|=1,It(t,e,a,i),e.child)}function Do(t,e,l,a,i){if(t===null){var n=l.type;return typeof n=="function"&&!Mu(n)&&n.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=n,Uo(t,e,n,a,i)):(t=ln(l.type,null,a,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!zc(t,i)){var u=n.memoizedProps;if(l=l.compare,l=l!==null?l:ei,l(u,a)&&t.ref===e.ref)return ul(t,e,i)}return e.flags|=1,t=tl(n,a),t.ref=e.ref,t.return=e,e.child=t}function Uo(t,e,l,a,i){if(t!==null){var n=t.memoizedProps;if(ei(n,a)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=a=n,zc(t,i))(t.flags&131072)!==0&&(Yt=!0);else return e.lanes=t.lanes,ul(t,e,i)}return vc(t,e,l,a,i)}function Ho(t,e,l,a){var i=a.children,n=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(n=n!==null?n.baseLanes|l:l,t!==null){for(a=e.child=t.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~n}else a=0,e.child=null;return Bo(t,e,n,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&cn(e,n!==null?n.cachePool:null),n!==null?Qr(e,n):Ku(),Nr(e);else return a=e.lanes=536870912,Bo(t,e,n!==null?n.baseLanes|l:l,l,a)}else n!==null?(cn(e,n.cachePool),Qr(e,n),El(),e.memoizedState=null):(t!==null&&cn(e,null),Ku(),El());return It(t,e,i,l),e.child}function gi(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Bo(t,e,l,a,i){var n=Gu();return n=n===null?null:{parent:Nt._currentValue,pool:n},e.memoizedState={baseLanes:l,cachePool:n},t!==null&&cn(e,null),Ku(),Nr(e),t!==null&&Sa(t,e,a,!0),e.childLanes=i,null}function An(t,e){return e=_n({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Qo(t,e,l){return ta(e,t.child,null,l),t=An(e,e.pendingProps),t.flags|=2,Ae(e),e.memoizedState=null,t}function Kd(t,e,l){var a=e.pendingProps,i=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(st){if(a.mode==="hidden")return t=An(e,a),e.lanes=536870912,gi(null,t);if(Fu(e),(t=Ct)?(t=Fs(t,De),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:yl!==null?{id:Ve,overflow:We}:null,retryLane:536870912,hydrationErrors:null},l=Tr(t),l.return=e,e.child=l,$t=e,Ct=null)):t=null,t===null)throw bl(e);return e.lanes=536870912,null}return An(e,a)}var n=t.memoizedState;if(n!==null){var u=n.dehydrated;if(Fu(e),i)if(e.flags&256)e.flags&=-257,e=Qo(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(v(558));else if(Yt||Sa(t,e,l,!1),i=(l&t.childLanes)!==0,Yt||i){if(a=_t,a!==null&&(u=Ef(a,l),u!==0&&u!==n.retryLane))throw n.retryLane=u,Wl(t,u),he(a,t,u),gc;Un(),e=Qo(t,e,l)}else t=n.treeContext,Ct=He(u.nextSibling),$t=e,st=!0,Tl=null,De=!1,t!==null&&Sr(e,t),e=An(e,a),e.flags|=4096;return e}return t=tl(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function zn(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(v(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function vc(t,e,l,a,i){return kl(e),l=$u(t,e,l,a,void 0,i),a=Pu(),t!==null&&!Yt?(Iu(t,e,i),ul(t,e,i)):(st&&a&&Ou(e),e.flags|=1,It(t,e,l,i),e.child)}function No(t,e,l,a,i,n){return kl(e),e.updateQueue=null,l=Yr(e,a,l,i),wr(t),a=Pu(),t!==null&&!Yt?(Iu(t,e,n),ul(t,e,n)):(st&&a&&Ou(e),e.flags|=1,It(t,e,l,n),e.child)}function wo(t,e,l,a,i){if(kl(e),e.stateNode===null){var n=ya,u=l.contextType;typeof u=="object"&&u!==null&&(n=Pt(u)),n=new l(a,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=mc,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=a,n.state=e.memoizedState,n.refs={},Xu(e),u=l.contextType,n.context=typeof u=="object"&&u!==null?Pt(u):ya,n.state=e.memoizedState,u=l.getDerivedStateFromProps,typeof u=="function"&&(dc(e,l,u,a),n.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(u=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),u!==n.state&&mc.enqueueReplaceState(n,n.state,null),si(e,a,n,i),oi(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){n=e.stateNode;var c=e.memoizedProps,f=la(l,c);n.props=f;var m=n.context,b=l.contextType;u=ya,typeof b=="object"&&b!==null&&(u=Pt(b));var A=l.getDerivedStateFromProps;b=typeof A=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,b||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||m!==u)&&_o(e,n,a,u),Sl=!1;var g=e.memoizedState;n.state=g,si(e,a,n,i),oi(),m=e.memoizedState,c||g!==m||Sl?(typeof A=="function"&&(dc(e,l,A,a),m=e.memoizedState),(f=Sl||zo(e,l,f,a,g,m,u))?(b||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=m),n.props=a,n.state=m,n.context=u,a=f):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{n=e.stateNode,Zu(t,e),u=e.memoizedProps,b=la(l,u),n.props=b,A=e.pendingProps,g=n.context,m=l.contextType,f=ya,typeof m=="object"&&m!==null&&(f=Pt(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(u!==A||g!==f)&&_o(e,n,a,f),Sl=!1,g=e.memoizedState,n.state=g,si(e,a,n,i),oi();var y=e.memoizedState;u!==A||g!==y||Sl||t!==null&&t.dependencies!==null&&nn(t.dependencies)?(typeof c=="function"&&(dc(e,l,c,a),y=e.memoizedState),(b=Sl||zo(e,l,b,a,g,y,f)||t!==null&&t.dependencies!==null&&nn(t.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(a,y,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(a,y,f)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=y),n.props=a,n.state=y,n.context=f,a=b):(typeof n.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),a=!1)}return n=a,zn(t,e),a=(e.flags&128)!==0,n||a?(n=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&a?(e.child=ta(e,t.child,null,i),e.child=ta(e,null,l,i)):It(t,e,l,i),e.memoizedState=n.state,t=e.child):t=ul(t,e,i),t}function Yo(t,e,l,a){return Jl(),e.flags|=256,It(t,e,l,a),e.child}var yc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tc(t){return{baseLanes:t,cachePool:jr()}}function bc(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=_e),t}function Go(t,e,l){var a=e.pendingProps,i=!1,n=(e.flags&128)!==0,u;if((u=n)||(u=t!==null&&t.memoizedState===null?!1:(Ht.current&2)!==0),u&&(i=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,t===null){if(st){if(i?_l(e):El(),(t=Ct)?(t=Fs(t,De),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:yl!==null?{id:Ve,overflow:We}:null,retryLane:536870912,hydrationErrors:null},l=Tr(t),l.return=e,e.child=l,$t=e,Ct=null)):t=null,t===null)throw bl(e);return lf(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,i?(El(),i=e.mode,c=_n({mode:"hidden",children:c},i),a=Kl(a,i,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=Tc(l),a.childLanes=bc(t,u,l),e.memoizedState=yc,gi(null,a)):(_l(e),xc(e,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)e.flags&256?(_l(e),e.flags&=-257,e=Sc(t,e,l)):e.memoizedState!==null?(El(),e.child=t.child,e.flags|=128,e=null):(El(),c=a.fallback,i=e.mode,a=_n({mode:"visible",children:a.children},i),c=Kl(c,i,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,ta(e,t.child,null,l),a=e.child,a.memoizedState=Tc(l),a.childLanes=bc(t,u,l),e.memoizedState=yc,e=gi(null,a));else if(_l(e),lf(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var m=u.dgst;u=m,a=Error(v(419)),a.stack="",a.digest=u,ii({value:a,source:null,stack:null}),e=Sc(t,e,l)}else if(Yt||Sa(t,e,l,!1),u=(l&t.childLanes)!==0,Yt||u){if(u=_t,u!==null&&(a=Ef(u,l),a!==0&&a!==f.retryLane))throw f.retryLane=a,Wl(t,a),he(u,t,a),gc;ef(c)||Un(),e=Sc(t,e,l)}else ef(c)?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,Ct=He(c.nextSibling),$t=e,st=!0,Tl=null,De=!1,t!==null&&Sr(e,t),e=xc(e,a.children),e.flags|=4096);return e}return i?(El(),c=a.fallback,i=e.mode,f=t.child,m=f.sibling,a=tl(f,{mode:"hidden",children:a.children}),a.subtreeFlags=f.subtreeFlags&65011712,m!==null?c=tl(m,c):(c=Kl(c,i,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,gi(null,a),a=e.child,c=t.child.memoizedState,c===null?c=Tc(l):(i=c.cachePool,i!==null?(f=Nt._currentValue,i=i.parent!==f?{parent:f,pool:f}:i):i=jr(),c={baseLanes:c.baseLanes|l,cachePool:i}),a.memoizedState=c,a.childLanes=bc(t,u,l),e.memoizedState=yc,gi(t.child,a)):(_l(e),l=t.child,t=l.sibling,l=tl(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(u=e.deletions,u===null?(e.deletions=[t],e.flags|=16):u.push(t)),e.child=l,e.memoizedState=null,l)}function xc(t,e){return e=_n({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function _n(t,e){return t=xe(22,t,null,e),t.lanes=0,t}function Sc(t,e,l){return ta(e,t.child,null,l),t=xc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lo(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Qu(t.return,e,l)}function Ac(t,e,l,a,i,n){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:i,treeForkCount:n}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=i,u.treeForkCount=n)}function Xo(t,e,l){var a=e.pendingProps,i=a.revealOrder,n=a.tail;a=a.children;var u=Ht.current,c=(u&2)!==0;if(c?(u=u&1|2,e.flags|=128):u&=1,O(Ht,u),It(t,e,a,l),a=st?ai:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lo(t,l,e);else if(t.tag===19)Lo(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(i){case"forwards":for(l=e.child,i=null;l!==null;)t=l.alternate,t!==null&&dn(t)===null&&(i=l),l=l.sibling;l=i,l===null?(i=e.child,e.child=null):(i=l.sibling,l.sibling=null),Ac(e,!1,i,l,n,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&dn(t)===null){e.child=i;break}t=i.sibling,i.sibling=l,l=i,i=t}Ac(e,!0,l,null,n,a);break;case"together":Ac(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function ul(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Ml|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Sa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(v(153));if(e.child!==null){for(t=e.child,l=tl(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=tl(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function zc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&nn(t)))}function Jd(t,e,l){switch(e.tag){case 3:Ft(e,e.stateNode.containerInfo),xl(e,Nt,t.memoizedState.cache),Jl();break;case 27:case 5:Yl(e);break;case 4:Ft(e,e.stateNode.containerInfo);break;case 10:xl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Fu(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(_l(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Go(t,e,l):(_l(e),t=ul(t,e,l),t!==null?t.sibling:null);_l(e);break;case 19:var i=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Sa(t,e,l,!1),a=(l&e.childLanes)!==0),i){if(a)return Xo(t,e,l);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),O(Ht,Ht.current),a)break;return null;case 22:return e.lanes=0,Ho(t,e,l,e.pendingProps);case 24:xl(e,Nt,t.memoizedState.cache)}return ul(t,e,l)}function Zo(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Yt=!0;else{if(!zc(t,l)&&(e.flags&128)===0)return Yt=!1,Jd(t,e,l);Yt=(t.flags&131072)!==0}else Yt=!1,st&&(e.flags&1048576)!==0&&xr(e,ai,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Pl(e.elementType),e.type=t,typeof t=="function")Mu(t)?(a=la(t,a),e.tag=1,e=wo(null,e,t,a,l)):(e.tag=0,e=vc(null,e,t,a,l));else{if(t!=null){var i=t.$$typeof;if(i===ue){e.tag=11,e=Oo(null,e,t,a,l);break t}else if(i===ut){e.tag=14,e=Do(null,e,t,a,l);break t}}throw e=we(t)||t,Error(v(306,e,""))}}return e;case 0:return vc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,i=la(a,e.pendingProps),wo(t,e,a,i,l);case 3:t:{if(Ft(e,e.stateNode.containerInfo),t===null)throw Error(v(387));a=e.pendingProps;var n=e.memoizedState;i=n.element,Zu(t,e),si(e,a,null,l);var u=e.memoizedState;if(a=u.cache,xl(e,Nt,a),a!==n.cache&&Nu(e,[Nt],l,!0),oi(),a=u.element,n.isDehydrated)if(n={element:a,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=Yo(t,e,a,l);break t}else if(a!==i){i=qe(Error(v(424)),e),ii(i),e=Yo(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ct=He(t.firstChild),$t=e,st=!0,Tl=null,De=!0,l=Ur(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Jl(),a===i){e=ul(t,e,l);break t}It(t,e,a,l)}e=e.child}return e;case 26:return zn(t,e),t===null?(l=ep(e.type,null,e.pendingProps,null))?e.memoizedState=l:st||(l=e.type,t=e.pendingProps,a=Gn(it.current).createElement(l),a[kt]=e,a[re]=t,te(a,l,t),Wt(a),e.stateNode=a):e.memoizedState=ep(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Yl(e),t===null&&st&&(a=e.stateNode=Ps(e.type,e.pendingProps,it.current),$t=e,De=!0,i=Ct,Ul(e.type)?(af=i,Ct=He(a.firstChild)):Ct=i),It(t,e,e.pendingProps.children,l),zn(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&st&&((i=a=Ct)&&(a=zm(a,e.type,e.pendingProps,De),a!==null?(e.stateNode=a,$t=e,Ct=He(a.firstChild),De=!1,i=!0):i=!1),i||bl(e)),Yl(e),i=e.type,n=e.pendingProps,u=t!==null?t.memoizedProps:null,a=n.children,Pc(i,n)?a=null:u!==null&&Pc(i,u)&&(e.flags|=32),e.memoizedState!==null&&(i=$u(t,e,wd,null,null,l),Ri._currentValue=i),zn(t,e),It(t,e,a,l),e.child;case 6:return t===null&&st&&((t=l=Ct)&&(l=_m(l,e.pendingProps,De),l!==null?(e.stateNode=l,$t=e,Ct=null,t=!0):t=!1),t||bl(e)),null;case 13:return Go(t,e,l);case 4:return Ft(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ta(e,null,a,l):It(t,e,a,l),e.child;case 11:return Oo(t,e,e.type,e.pendingProps,l);case 7:return It(t,e,e.pendingProps,l),e.child;case 8:return It(t,e,e.pendingProps.children,l),e.child;case 12:return It(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,xl(e,e.type,a.value),It(t,e,a.children,l),e.child;case 9:return i=e.type._context,a=e.pendingProps.children,kl(e),i=Pt(i),a=a(i),e.flags|=1,It(t,e,a,l),e.child;case 14:return Do(t,e,e.type,e.pendingProps,l);case 15:return Uo(t,e,e.type,e.pendingProps,l);case 19:return Xo(t,e,l);case 31:return Kd(t,e,l);case 22:return Ho(t,e,l,e.pendingProps);case 24:return kl(e),a=Pt(Nt),t===null?(i=Gu(),i===null&&(i=_t,n=wu(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=l),i=n),e.memoizedState={parent:a,cache:i},Xu(e),xl(e,Nt,i)):((t.lanes&l)!==0&&(Zu(t,e),si(e,null,null,l),oi()),i=t.memoizedState,n=e.memoizedState,i.parent!==a?(i={parent:a,cache:a},e.memoizedState=i,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=i),xl(e,Nt,a)):(a=n.cache,xl(e,Nt,a),a!==i.cache&&Nu(e,[Nt],l,!0))),It(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(v(156,e.tag))}function cl(t){t.flags|=4}function _c(t,e,l,a,i){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(i&335544128)===i)if(t.stateNode.complete)t.flags|=8192;else if(vs())t.flags|=8192;else throw Il=rn,Lu}else t.flags&=-16777217}function Vo(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!up(e))if(vs())t.flags|=8192;else throw Il=rn,Lu}function En(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Af():536870912,t.lanes|=e,Ua|=e)}function vi(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)l|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Fd(t,e,l){var a=e.pendingProps;switch(Du(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return jt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),al(Nt),Ot(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(xa(e)?cl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Hu())),jt(e),null;case 26:var i=e.type,n=e.memoizedState;return t===null?(cl(e),n!==null?(jt(e),Vo(e,n)):(jt(e),_c(e,i,null,a,l))):n?n!==t.memoizedState?(cl(e),jt(e),Vo(e,n)):(jt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&cl(e),jt(e),_c(e,i,t,a,l)),null;case 27:if(p(e),l=it.current,i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&cl(e);else{if(!a){if(e.stateNode===null)throw Error(v(166));return jt(e),null}t=w.current,xa(e)?Ar(e):(t=Ps(i,a,l),e.stateNode=t,cl(e))}return jt(e),null;case 5:if(p(e),i=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&cl(e);else{if(!a){if(e.stateNode===null)throw Error(v(166));return jt(e),null}if(n=w.current,xa(e))Ar(e);else{var u=Gn(it.current);switch(n){case 1:n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=u.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?n.multiple=!0:a.size&&(n.size=a.size);break;default:n=typeof a.is=="string"?u.createElement(i,{is:a.is}):u.createElement(i)}}n[kt]=e,n[re]=a;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)n.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=n;t:switch(te(n,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&cl(e)}}return jt(e),_c(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&cl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(v(166));if(t=it.current,xa(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,i=$t,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}t[kt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Gs(t.nodeValue,l)),t||bl(e,!0)}else t=Gn(t).createTextNode(a),t[kt]=e,e.stateNode=t}return jt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=xa(e),l!==null){if(t===null){if(!a)throw Error(v(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(557));t[kt]=e}else Jl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;jt(e),t=!1}else l=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(Ae(e),e):(Ae(e),null);if((e.flags&128)!==0)throw Error(v(558))}return jt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(i=xa(e),a!==null&&a.dehydrated!==null){if(t===null){if(!i)throw Error(v(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[kt]=e}else Jl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;jt(e),i=!1}else i=Hu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),i=!0;if(!i)return e.flags&256?(Ae(e),e):(Ae(e),null)}return Ae(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==i&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),En(e,e.updateQueue),jt(e),null);case 4:return Ot(),t===null&&Kc(e.stateNode.containerInfo),jt(e),null;case 10:return al(e.type),jt(e),null;case 19:if(z(Ht),a=e.memoizedState,a===null)return jt(e),null;if(i=(e.flags&128)!==0,n=a.rendering,n===null)if(i)vi(a,!1);else{if(Ut!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(n=dn(t),n!==null){for(e.flags|=128,vi(a,!1),t=n.updateQueue,e.updateQueue=t,En(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)yr(l,t),l=l.sibling;return O(Ht,Ht.current&1|2),st&&el(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&j()>Rn&&(e.flags|=128,i=!0,vi(a,!1),e.lanes=4194304)}else{if(!i)if(t=dn(n),t!==null){if(e.flags|=128,i=!0,t=t.updateQueue,e.updateQueue=t,En(e,t),vi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!n.alternate&&!st)return jt(e),null}else 2*j()-a.renderingStartTime>Rn&&l!==536870912&&(e.flags|=128,i=!0,vi(a,!1),e.lanes=4194304);a.isBackwards?(n.sibling=e.child,e.child=n):(t=a.last,t!==null?t.sibling=n:e.child=n,a.last=n)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=j(),t.sibling=null,l=Ht.current,O(Ht,i?l&1|2:l&1),st&&el(e,a.treeForkCount),t):(jt(e),null);case 22:case 23:return Ae(e),Ju(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),l=e.updateQueue,l!==null&&En(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&z($l),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),al(Nt),jt(e),null;case 25:return null;case 30:return null}throw Error(v(156,e.tag))}function kd(t,e){switch(Du(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return al(Nt),Ot(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return p(e),null;case 31:if(e.memoizedState!==null){if(Ae(e),e.alternate===null)throw Error(v(340));Jl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ae(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(v(340));Jl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return z(Ht),null;case 4:return Ot(),null;case 10:return al(e.type),null;case 22:case 23:return Ae(e),Ju(),t!==null&&z($l),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return al(Nt),null;case 25:return null;default:return null}}function Wo(t,e){switch(Du(e),e.tag){case 3:al(Nt),Ot();break;case 26:case 27:case 5:p(e);break;case 4:Ot();break;case 31:e.memoizedState!==null&&Ae(e);break;case 13:Ae(e);break;case 19:z(Ht);break;case 10:al(e.type);break;case 22:case 23:Ae(e),Ju(),t!==null&&z($l);break;case 24:al(Nt)}}function yi(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){a=void 0;var n=l.create,u=l.inst;a=n(),u.destroy=a}l=l.next}while(l!==i)}}catch(c){xt(e,e.return,c)}}function Cl(t,e,l){try{var a=e.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&t)===t){var u=a.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,i=e;var f=l,m=c;try{m()}catch(b){xt(i,f,b)}}}a=a.next}while(a!==n)}}catch(b){xt(e,e.return,b)}}function Ko(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{Br(e,l)}catch(a){xt(t,t.return,a)}}}function Jo(t,e,l){l.props=la(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){xt(t,e,a)}}function Ti(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(i){xt(t,e,i)}}function Ke(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(i){xt(t,e,i)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(i){xt(t,e,i)}else l.current=null}function Fo(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(i){xt(t,t.return,i)}}function Ec(t,e,l){try{var a=t.stateNode;ym(a,t.type,l,e),a[re]=e}catch(i){xt(t,t.return,i)}}function ko(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ul(t.type)||t.tag===4}function Cc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||ko(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ul(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Pe));else if(a!==4&&(a===27&&Ul(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(jc(t,e,l),t=t.sibling;t!==null;)jc(t,e,l),t=t.sibling}function Cn(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Ul(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Cn(t,e,l),t=t.sibling;t!==null;)Cn(t,e,l),t=t.sibling}function $o(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,i=e.attributes;i.length;)e.removeAttributeNode(i[0]);te(e,a,l),e[kt]=t,e[re]=l}catch(n){xt(t,t.return,n)}}var fl=!1,Gt=!1,Mc=!1,Po=typeof WeakSet=="function"?WeakSet:Set,Kt=null;function $d(t,e){if(t=t.containerInfo,kc=Jn,t=rr(t),Su(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var i=a.anchorOffset,n=a.focusNode;a=a.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break t}var u=0,c=-1,f=-1,m=0,b=0,A=t,g=null;e:for(;;){for(var y;A!==l||i!==0&&A.nodeType!==3||(c=u+i),A!==n||a!==0&&A.nodeType!==3||(f=u+a),A.nodeType===3&&(u+=A.nodeValue.length),(y=A.firstChild)!==null;)g=A,A=y;for(;;){if(A===t)break e;if(g===l&&++m===i&&(c=u),g===n&&++b===a&&(f=u),(y=A.nextSibling)!==null)break;A=g,g=A.parentNode}A=y}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for($c={focusedElem:t,selectionRange:l},Jn=!1,Kt=e;Kt!==null;)if(e=Kt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Kt=t;else for(;Kt!==null;){switch(e=Kt,n=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)i=t[l],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,l=e,i=n.memoizedProps,n=n.memoizedState,a=l.stateNode;try{var N=la(l.type,i);t=a.getSnapshotBeforeUpdate(N,n),a.__reactInternalSnapshotBeforeUpdate=t}catch(W){xt(l,l.return,W)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)tf(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":tf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(v(163))}if(t=e.sibling,t!==null){t.return=e.return,Kt=t;break}Kt=e.return}}function Io(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:ol(t,l),a&4&&yi(5,l);break;case 1:if(ol(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(u){xt(l,l.return,u)}else{var i=la(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(i,e,t.__reactInternalSnapshotBeforeUpdate)}catch(u){xt(l,l.return,u)}}a&64&&Ko(l),a&512&&Ti(l,l.return);break;case 3:if(ol(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{Br(t,e)}catch(u){xt(l,l.return,u)}}break;case 27:e===null&&a&4&&$o(l);case 26:case 5:ol(t,l),e===null&&a&4&&Fo(l),a&512&&Ti(l,l.return);break;case 12:ol(t,l);break;case 31:ol(t,l),a&4&&ls(t,l);break;case 13:ol(t,l),a&4&&as(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=um.bind(null,l),Em(t,l))));break;case 22:if(a=l.memoizedState!==null||fl,!a){e=e!==null&&e.memoizedState!==null||Gt,i=fl;var n=Gt;fl=a,(Gt=e)&&!n?sl(t,l,(l.subtreeFlags&8772)!==0):ol(t,l),fl=i,Gt=n}break;case 30:break;default:ol(t,l)}}function ts(t){var e=t.alternate;e!==null&&(t.alternate=null,ts(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&nu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,se=!1;function rl(t,e,l){for(l=l.child;l!==null;)es(t,e,l),l=l.sibling}function es(t,e,l){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(Xa,l)}catch{}switch(l.tag){case 26:Gt||Ke(l,e),rl(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Gt||Ke(l,e);var a=qt,i=se;Ul(l.type)&&(qt=l.stateNode,se=!1),rl(t,e,l),ji(l.stateNode),qt=a,se=i;break;case 5:Gt||Ke(l,e);case 6:if(a=qt,i=se,qt=null,rl(t,e,l),qt=a,se=i,qt!==null)if(se)try{(qt.nodeType===9?qt.body:qt.nodeName==="HTML"?qt.ownerDocument.body:qt).removeChild(l.stateNode)}catch(n){xt(l,e,n)}else try{qt.removeChild(l.stateNode)}catch(n){xt(l,e,n)}break;case 18:qt!==null&&(se?(t=qt,Ks(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),La(t)):Ks(qt,l.stateNode));break;case 4:a=qt,i=se,qt=l.stateNode.containerInfo,se=!0,rl(t,e,l),qt=a,se=i;break;case 0:case 11:case 14:case 15:Cl(2,l,e),Gt||Cl(4,l,e),rl(t,e,l);break;case 1:Gt||(Ke(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&Jo(l,e,a)),rl(t,e,l);break;case 21:rl(t,e,l);break;case 22:Gt=(a=Gt)||l.memoizedState!==null,rl(t,e,l),Gt=a;break;default:rl(t,e,l)}}function ls(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{La(t)}catch(l){xt(e,e.return,l)}}}function as(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{La(t)}catch(l){xt(e,e.return,l)}}function Pd(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Po),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Po),e;default:throw Error(v(435,t.tag))}}function jn(t,e){var l=Pd(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var i=cm.bind(null,t,a);a.then(i,i)}})}function pe(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var i=l[a],n=t,u=e,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(Ul(c.type)){qt=c.stateNode,se=!1;break t}break;case 5:qt=c.stateNode,se=!1;break t;case 3:case 4:qt=c.stateNode.containerInfo,se=!0;break t}c=c.return}if(qt===null)throw Error(v(160));es(n,u,i),qt=null,se=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)is(e,t),e=e.sibling}var Ge=null;function is(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pe(e,t),de(t),a&4&&(Cl(3,t,t.return),yi(3,t),Cl(5,t,t.return));break;case 1:pe(e,t),de(t),a&512&&(Gt||l===null||Ke(l,l.return)),a&64&&fl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var i=Ge;if(pe(e,t),de(t),a&512&&(Gt||l===null||Ke(l,l.return)),a&4){var n=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,i=i.ownerDocument||i;e:switch(a){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Wa]||n[kt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(a),i.head.insertBefore(n,i.querySelector("head > title"))),te(n,a,l),n[kt]=t,Wt(n),a=n;break t;case"link":var u=ip("link","href",i).get(a+(l.href||""));if(u){for(var c=0;c<u.length;c++)if(n=u[c],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){u.splice(c,1);break e}}n=i.createElement(a),te(n,a,l),i.head.appendChild(n);break;case"meta":if(u=ip("meta","content",i).get(a+(l.content||""))){for(c=0;c<u.length;c++)if(n=u[c],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){u.splice(c,1);break e}}n=i.createElement(a),te(n,a,l),i.head.appendChild(n);break;default:throw Error(v(468,a))}n[kt]=t,Wt(n),a=n}t.stateNode=a}else np(i,t.type,t.stateNode);else t.stateNode=ap(i,a,t.memoizedProps);else n!==a?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,a===null?np(i,t.type,t.stateNode):ap(i,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Ec(t,t.memoizedProps,l.memoizedProps)}break;case 27:pe(e,t),de(t),a&512&&(Gt||l===null||Ke(l,l.return)),l!==null&&a&4&&Ec(t,t.memoizedProps,l.memoizedProps);break;case 5:if(pe(e,t),de(t),a&512&&(Gt||l===null||Ke(l,l.return)),t.flags&32){i=t.stateNode;try{sa(i,"")}catch(N){xt(t,t.return,N)}}a&4&&t.stateNode!=null&&(i=t.memoizedProps,Ec(t,i,l!==null?l.memoizedProps:i)),a&1024&&(Mc=!0);break;case 6:if(pe(e,t),de(t),a&4){if(t.stateNode===null)throw Error(v(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(N){xt(t,t.return,N)}}break;case 3:if(Zn=null,i=Ge,Ge=Ln(e.containerInfo),pe(e,t),Ge=i,de(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{La(e.containerInfo)}catch(N){xt(t,t.return,N)}Mc&&(Mc=!1,ns(t));break;case 4:a=Ge,Ge=Ln(t.stateNode.containerInfo),pe(e,t),de(t),Ge=a;break;case 12:pe(e,t),de(t);break;case 31:pe(e,t),de(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,jn(t,a)));break;case 13:pe(e,t),de(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(qn=j()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,jn(t,a)));break;case 22:i=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,m=fl,b=Gt;if(fl=m||i,Gt=b||f,pe(e,t),Gt=b,fl=m,de(t),a&8192)t:for(e=t.stateNode,e._visibility=i?e._visibility&-2:e._visibility|1,i&&(l===null||f||fl||Gt||aa(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){f=l=e;try{if(n=f.stateNode,i)u=n.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var A=f.memoizedProps.style,g=A!=null&&A.hasOwnProperty("display")?A.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(N){xt(f,f.return,N)}}}else if(e.tag===6){if(l===null){f=e;try{f.stateNode.nodeValue=i?"":f.memoizedProps}catch(N){xt(f,f.return,N)}}}else if(e.tag===18){if(l===null){f=e;try{var y=f.stateNode;i?Js(y,!0):Js(f.stateNode,!1)}catch(N){xt(f,f.return,N)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,jn(t,l))));break;case 19:pe(e,t),de(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,jn(t,a)));break;case 30:break;case 21:break;default:pe(e,t),de(t)}}function de(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(ko(a)){l=a;break}a=a.return}if(l==null)throw Error(v(160));switch(l.tag){case 27:var i=l.stateNode,n=Cc(t);Cn(t,n,i);break;case 5:var u=l.stateNode;l.flags&32&&(sa(u,""),l.flags&=-33);var c=Cc(t);Cn(t,c,u);break;case 3:case 4:var f=l.stateNode.containerInfo,m=Cc(t);jc(t,m,f);break;default:throw Error(v(161))}}catch(b){xt(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ns(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;ns(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ol(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Io(t,e.alternate,e),e=e.sibling}function aa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Cl(4,e,e.return),aa(e);break;case 1:Ke(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&Jo(e,e.return,l),aa(e);break;case 27:ji(e.stateNode);case 26:case 5:Ke(e,e.return),aa(e);break;case 22:e.memoizedState===null&&aa(e);break;case 30:aa(e);break;default:aa(e)}t=t.sibling}}function sl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,i=t,n=e,u=n.flags;switch(n.tag){case 0:case 11:case 15:sl(i,n,l),yi(4,n);break;case 1:if(sl(i,n,l),a=n,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(m){xt(a,a.return,m)}if(a=n,i=a.updateQueue,i!==null){var c=a.stateNode;try{var f=i.shared.hiddenCallbacks;if(f!==null)for(i.shared.hiddenCallbacks=null,i=0;i<f.length;i++)Hr(f[i],c)}catch(m){xt(a,a.return,m)}}l&&u&64&&Ko(n),Ti(n,n.return);break;case 27:$o(n);case 26:case 5:sl(i,n,l),l&&a===null&&u&4&&Fo(n),Ti(n,n.return);break;case 12:sl(i,n,l);break;case 31:sl(i,n,l),l&&u&4&&ls(i,n);break;case 13:sl(i,n,l),l&&u&4&&as(i,n);break;case 22:n.memoizedState===null&&sl(i,n,l),Ti(n,n.return);break;case 30:break;default:sl(i,n,l)}e=e.sibling}}function qc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&ni(l))}function Rc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ni(t))}function Le(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)us(t,e,l,a),e=e.sibling}function us(t,e,l,a){var i=e.flags;switch(e.tag){case 0:case 11:case 15:Le(t,e,l,a),i&2048&&yi(9,e);break;case 1:Le(t,e,l,a);break;case 3:Le(t,e,l,a),i&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ni(t)));break;case 12:if(i&2048){Le(t,e,l,a),t=e.stateNode;try{var n=e.memoizedProps,u=n.id,c=n.onPostCommit;typeof c=="function"&&c(u,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){xt(e,e.return,f)}}else Le(t,e,l,a);break;case 31:Le(t,e,l,a);break;case 13:Le(t,e,l,a);break;case 23:break;case 22:n=e.stateNode,u=e.alternate,e.memoizedState!==null?n._visibility&2?Le(t,e,l,a):bi(t,e):n._visibility&2?Le(t,e,l,a):(n._visibility|=2,Ra(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),i&2048&&qc(u,e);break;case 24:Le(t,e,l,a),i&2048&&Rc(e.alternate,e);break;default:Le(t,e,l,a)}}function Ra(t,e,l,a,i){for(i=i&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var n=t,u=e,c=l,f=a,m=u.flags;switch(u.tag){case 0:case 11:case 15:Ra(n,u,c,f,i),yi(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?Ra(n,u,c,f,i):bi(n,u):(b._visibility|=2,Ra(n,u,c,f,i)),i&&m&2048&&qc(u.alternate,u);break;case 24:Ra(n,u,c,f,i),i&&m&2048&&Rc(u.alternate,u);break;default:Ra(n,u,c,f,i)}e=e.sibling}}function bi(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,i=a.flags;switch(a.tag){case 22:bi(l,a),i&2048&&qc(a.alternate,a);break;case 24:bi(l,a),i&2048&&Rc(a.alternate,a);break;default:bi(l,a)}e=e.sibling}}var xi=8192;function Oa(t,e,l){if(t.subtreeFlags&xi)for(t=t.child;t!==null;)cs(t,e,l),t=t.sibling}function cs(t,e,l){switch(t.tag){case 26:Oa(t,e,l),t.flags&xi&&t.memoizedState!==null&&Nm(l,Ge,t.memoizedState,t.memoizedProps);break;case 5:Oa(t,e,l);break;case 3:case 4:var a=Ge;Ge=Ln(t.stateNode.containerInfo),Oa(t,e,l),Ge=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=xi,xi=16777216,Oa(t,e,l),xi=a):Oa(t,e,l));break;default:Oa(t,e,l)}}function fs(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Si(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Kt=a,os(a,t)}fs(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rs(t),t=t.sibling}function rs(t){switch(t.tag){case 0:case 11:case 15:Si(t),t.flags&2048&&Cl(9,t,t.return);break;case 3:Si(t);break;case 12:Si(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Mn(t)):Si(t);break;default:Si(t)}}function Mn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Kt=a,os(a,t)}fs(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Cl(8,e,e.return),Mn(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Mn(e));break;default:Mn(e)}t=t.sibling}}function os(t,e){for(;Kt!==null;){var l=Kt;switch(l.tag){case 0:case 11:case 15:Cl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ni(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Kt=a;else t:for(l=t;Kt!==null;){a=Kt;var i=a.sibling,n=a.return;if(ts(a),a===l){Kt=null;break t}if(i!==null){i.return=n,Kt=i;break t}Kt=n}}}var Id={getCacheForType:function(t){var e=Pt(Nt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Pt(Nt).controller.signal}},tm=typeof WeakMap=="function"?WeakMap:Map,yt=0,_t=null,ct=null,rt=0,bt=0,ze=null,jl=!1,Da=!1,Oc=!1,pl=0,Ut=0,Ml=0,ia=0,Dc=0,_e=0,Ua=0,Ai=null,me=null,Uc=!1,qn=0,ss=0,Rn=1/0,On=null,ql=null,Zt=0,Rl=null,Ha=null,dl=0,Hc=0,Bc=null,ps=null,zi=0,Qc=null;function Ee(){return(yt&2)!==0&&rt!==0?rt&-rt:x.T!==null?Xc():Cf()}function ds(){if(_e===0)if((rt&536870912)===0||st){var t=wi;wi<<=1,(wi&3932160)===0&&(wi=262144),_e=t}else _e=536870912;return t=Se.current,t!==null&&(t.flags|=32),_e}function he(t,e,l){(t===_t&&(bt===2||bt===9)||t.cancelPendingCommit!==null)&&(Ba(t,0),Ol(t,rt,_e,!1)),Va(t,l),((yt&2)===0||t!==_t)&&(t===_t&&((yt&2)===0&&(ia|=l),Ut===4&&Ol(t,rt,_e,!1)),Je(t))}function ms(t,e,l){if((yt&6)!==0)throw Error(v(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Za(t,e),i=a?am(t,e):wc(t,e,!0),n=a;do{if(i===0){Da&&!a&&Ol(t,e,0,!1);break}else{if(l=t.current.alternate,n&&!em(l)){i=wc(t,e,!1),n=!1;continue}if(i===2){if(n=e,t.errorRecoveryDisabledLanes&n)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;t:{var c=t;i=Ai;var f=c.current.memoizedState.isDehydrated;if(f&&(Ba(c,u).flags|=256),u=wc(c,u,!1),u!==2){if(Oc&&!f){c.errorRecoveryDisabledLanes|=n,ia|=n,i=4;break t}n=me,me=i,n!==null&&(me===null?me=n:me.push.apply(me,n))}i=u}if(n=!1,i!==2)continue}}if(i===1){Ba(t,0),Ol(t,e,0,!0);break}t:{switch(a=t,n=i,n){case 0:case 1:throw Error(v(345));case 4:if((e&4194048)!==e)break;case 6:Ol(a,e,_e,!jl);break t;case 2:me=null;break;case 3:case 5:break;default:throw Error(v(329))}if((e&62914560)===e&&(i=qn+300-j(),10<i)){if(Ol(a,e,_e,!jl),Gi(a,0,!0)!==0)break t;dl=e,a.timeoutHandle=Vs(hs.bind(null,a,l,me,On,Uc,e,_e,ia,Ua,jl,n,"Throttled",-0,0),i);break t}hs(a,l,me,On,Uc,e,_e,ia,Ua,jl,n,null,-0,0)}}break}while(!0);Je(t)}function hs(t,e,l,a,i,n,u,c,f,m,b,A,g,y){if(t.timeoutHandle=-1,A=e.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pe},cs(e,n,A);var N=(n&62914560)===n?qn-j():(n&4194048)===n?ss-j():0;if(N=wm(A,N),N!==null){dl=n,t.cancelPendingCommit=N(As.bind(null,t,e,n,l,a,i,u,c,f,b,A,null,g,y)),Ol(t,n,u,!m);return}}As(t,e,n,l,a,i,u,c,f)}function em(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var i=l[a],n=i.getSnapshot;i=i.value;try{if(!be(n(),i))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ol(t,e,l,a){e&=~Dc,e&=~ia,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var i=e;0<i;){var n=31-Te(i),u=1<<n;a[n]=-1,i&=~u}l!==0&&zf(t,l,e)}function Dn(){return(yt&6)===0?(_i(0),!1):!0}function Nc(){if(ct!==null){if(bt===0)var t=ct.return;else t=ct,ll=Fl=null,tc(t),Ea=null,ci=0,t=ct;for(;t!==null;)Wo(t.alternate,t),t=t.return;ct=null}}function Ba(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,xm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),dl=0,Nc(),_t=t,ct=l=tl(t.current,null),rt=e,bt=0,ze=null,jl=!1,Da=Za(t,e),Oc=!1,Ua=_e=Dc=ia=Ml=Ut=0,me=Ai=null,Uc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var i=31-Te(a),n=1<<i;e|=t[i],a&=~n}return pl=e,Ii(),l}function gs(t,e){et=null,x.H=hi,e===_a||e===fn?(e=Rr(),bt=3):e===Lu?(e=Rr(),bt=4):bt=e===gc?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ze=e,ct===null&&(Ut=1,Sn(t,qe(e,t.current)))}function vs(){var t=Se.current;return t===null?!0:(rt&4194048)===rt?Ue===null:(rt&62914560)===rt||(rt&536870912)!==0?t===Ue:!1}function ys(){var t=x.H;return x.H=hi,t===null?hi:t}function Ts(){var t=x.A;return x.A=Id,t}function Un(){Ut=4,jl||(rt&4194048)!==rt&&Se.current!==null||(Da=!0),(Ml&134217727)===0&&(ia&134217727)===0||_t===null||Ol(_t,rt,_e,!1)}function wc(t,e,l){var a=yt;yt|=2;var i=ys(),n=Ts();(_t!==t||rt!==e)&&(On=null,Ba(t,e)),e=!1;var u=Ut;t:do try{if(bt!==0&&ct!==null){var c=ct,f=ze;switch(bt){case 8:Nc(),u=6;break t;case 3:case 2:case 9:case 6:Se.current===null&&(e=!0);var m=bt;if(bt=0,ze=null,Qa(t,c,f,m),l&&Da){u=0;break t}break;default:m=bt,bt=0,ze=null,Qa(t,c,f,m)}}lm(),u=Ut;break}catch(b){gs(t,b)}while(!0);return e&&t.shellSuspendCounter++,ll=Fl=null,yt=a,x.H=i,x.A=n,ct===null&&(_t=null,rt=0,Ii()),u}function lm(){for(;ct!==null;)bs(ct)}function am(t,e){var l=yt;yt|=2;var a=ys(),i=Ts();_t!==t||rt!==e?(On=null,Rn=j()+500,Ba(t,e)):Da=Za(t,e);t:do try{if(bt!==0&&ct!==null){e=ct;var n=ze;e:switch(bt){case 1:bt=0,ze=null,Qa(t,e,n,1);break;case 2:case 9:if(Mr(n)){bt=0,ze=null,xs(e);break}e=function(){bt!==2&&bt!==9||_t!==t||(bt=7),Je(t)},n.then(e,e);break t;case 3:bt=7;break t;case 4:bt=5;break t;case 7:Mr(n)?(bt=0,ze=null,xs(e)):(bt=0,ze=null,Qa(t,e,n,7));break;case 5:var u=null;switch(ct.tag){case 26:u=ct.memoizedState;case 5:case 27:var c=ct;if(u?up(u):c.stateNode.complete){bt=0,ze=null;var f=c.sibling;if(f!==null)ct=f;else{var m=c.return;m!==null?(ct=m,Hn(m)):ct=null}break e}}bt=0,ze=null,Qa(t,e,n,5);break;case 6:bt=0,ze=null,Qa(t,e,n,6);break;case 8:Nc(),Ut=6;break t;default:throw Error(v(462))}}im();break}catch(b){gs(t,b)}while(!0);return ll=Fl=null,x.H=a,x.A=i,yt=l,ct!==null?0:(_t=null,rt=0,Ii(),Ut)}function im(){for(;ct!==null&&!M();)bs(ct)}function bs(t){var e=Zo(t.alternate,t,pl);t.memoizedProps=t.pendingProps,e===null?Hn(t):ct=e}function xs(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=No(l,e,e.pendingProps,e.type,void 0,rt);break;case 11:e=No(l,e,e.pendingProps,e.type.render,e.ref,rt);break;case 5:tc(e);default:Wo(l,e),e=ct=yr(e,pl),e=Zo(l,e,pl)}t.memoizedProps=t.pendingProps,e===null?Hn(t):ct=e}function Qa(t,e,l,a){ll=Fl=null,tc(e),Ea=null,ci=0;var i=e.return;try{if(Wd(t,i,e,l,rt)){Ut=1,Sn(t,qe(l,t.current)),ct=null;return}}catch(n){if(i!==null)throw ct=i,n;Ut=1,Sn(t,qe(l,t.current)),ct=null;return}e.flags&32768?(st||a===1?t=!0:Da||(rt&536870912)!==0?t=!1:(jl=t=!0,(a===2||a===9||a===3||a===6)&&(a=Se.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ss(e,t)):Hn(e)}function Hn(t){var e=t;do{if((e.flags&32768)!==0){Ss(e,jl);return}t=e.return;var l=Fd(e.alternate,e,pl);if(l!==null){ct=l;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);Ut===0&&(Ut=5)}function Ss(t,e){do{var l=kd(t.alternate,t);if(l!==null){l.flags&=32767,ct=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){ct=t;return}ct=t=l}while(t!==null);Ut=6,ct=null}function As(t,e,l,a,i,n,u,c,f){t.cancelPendingCommit=null;do Bn();while(Zt!==0);if((yt&6)!==0)throw Error(v(327));if(e!==null){if(e===t.current)throw Error(v(177));if(n=e.lanes|e.childLanes,n|=Cu,Qp(t,l,n,u,c,f),t===_t&&(ct=_t=null,rt=0),Ha=e,Rl=t,dl=l,Hc=n,Bc=i,ps=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fm(Qi,function(){return js(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=x.T,x.T=null,i=q.p,q.p=2,u=yt,yt|=4;try{$d(t,e,l)}finally{yt=u,q.p=i,x.T=a}}Zt=1,zs(),_s(),Es()}}function zs(){if(Zt===1){Zt=0;var t=Rl,e=Ha,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=x.T,x.T=null;var a=q.p;q.p=2;var i=yt;yt|=4;try{is(e,t);var n=$c,u=rr(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(u!==c&&c&&c.ownerDocument&&fr(c.ownerDocument.documentElement,c)){if(f!==null&&Su(c)){var m=f.start,b=f.end;if(b===void 0&&(b=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(b,c.value.length);else{var A=c.ownerDocument||document,g=A&&A.defaultView||window;if(g.getSelection){var y=g.getSelection(),N=c.textContent.length,W=Math.min(f.start,N),zt=f.end===void 0?W:Math.min(f.end,N);!y.extend&&W>zt&&(u=zt,zt=W,W=u);var s=cr(c,W),r=cr(c,zt);if(s&&r&&(y.rangeCount!==1||y.anchorNode!==s.node||y.anchorOffset!==s.offset||y.focusNode!==r.node||y.focusOffset!==r.offset)){var d=A.createRange();d.setStart(s.node,s.offset),y.removeAllRanges(),W>zt?(y.addRange(d),y.extend(r.node,r.offset)):(d.setEnd(r.node,r.offset),y.addRange(d))}}}}for(A=[],y=c;y=y.parentNode;)y.nodeType===1&&A.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<A.length;c++){var S=A[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Jn=!!kc,$c=kc=null}finally{yt=i,q.p=a,x.T=l}}t.current=e,Zt=2}}function _s(){if(Zt===2){Zt=0;var t=Rl,e=Ha,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=x.T,x.T=null;var a=q.p;q.p=2;var i=yt;yt|=4;try{Io(t,e.alternate,e)}finally{yt=i,q.p=a,x.T=l}}Zt=3}}function Es(){if(Zt===4||Zt===3){Zt=0,lt();var t=Rl,e=Ha,l=dl,a=ps;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Zt=5:(Zt=0,Ha=Rl=null,Cs(t,t.pendingLanes));var i=t.pendingLanes;if(i===0&&(ql=null),au(l),e=e.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(Xa,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=x.T,i=q.p,q.p=2,x.T=null;try{for(var n=t.onRecoverableError,u=0;u<a.length;u++){var c=a[u];n(c.value,{componentStack:c.stack})}}finally{x.T=e,q.p=i}}(dl&3)!==0&&Bn(),Je(t),i=t.pendingLanes,(l&261930)!==0&&(i&42)!==0?t===Qc?zi++:(zi=0,Qc=t):zi=0,_i(0)}}function Cs(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ni(e)))}function Bn(){return zs(),_s(),Es(),js()}function js(){if(Zt!==5)return!1;var t=Rl,e=Hc;Hc=0;var l=au(dl),a=x.T,i=q.p;try{q.p=32>l?32:l,x.T=null,l=Bc,Bc=null;var n=Rl,u=dl;if(Zt=0,Ha=Rl=null,dl=0,(yt&6)!==0)throw Error(v(331));var c=yt;if(yt|=4,rs(n.current),us(n,n.current,u,l),yt=c,_i(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(Xa,n)}catch{}return!0}finally{q.p=i,x.T=a,Cs(t,e)}}function Ms(t,e,l){e=qe(l,e),e=hc(t.stateNode,e,2),t=zl(t,e,2),t!==null&&(Va(t,2),Je(t))}function xt(t,e,l){if(t.tag===3)Ms(t,t,l);else for(;e!==null;){if(e.tag===3){Ms(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ql===null||!ql.has(a))){t=qe(l,t),l=qo(2),a=zl(e,l,2),a!==null&&(Ro(l,a,e,t),Va(a,2),Je(a));break}}e=e.return}}function Yc(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new tm;var i=new Set;a.set(e,i)}else i=a.get(e),i===void 0&&(i=new Set,a.set(e,i));i.has(l)||(Oc=!0,i.add(l),t=nm.bind(null,t,e,l),e.then(t,t))}function nm(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,_t===t&&(rt&l)===l&&(Ut===4||Ut===3&&(rt&62914560)===rt&&300>j()-qn?(yt&2)===0&&Ba(t,0):Dc|=l,Ua===rt&&(Ua=0)),Je(t)}function qs(t,e){e===0&&(e=Af()),t=Wl(t,e),t!==null&&(Va(t,e),Je(t))}function um(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),qs(t,l)}function cm(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,i=t.memoizedState;i!==null&&(l=i.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(v(314))}a!==null&&a.delete(e),qs(t,l)}function fm(t,e){return Z(t,e)}var Qn=null,Na=null,Gc=!1,Nn=!1,Lc=!1,Dl=0;function Je(t){t!==Na&&t.next===null&&(Na===null?Qn=Na=t:Na=Na.next=t),Nn=!0,Gc||(Gc=!0,om())}function _i(t,e){if(!Lc&&Nn){Lc=!0;do for(var l=!1,a=Qn;a!==null;){if(t!==0){var i=a.pendingLanes;if(i===0)var n=0;else{var u=a.suspendedLanes,c=a.pingedLanes;n=(1<<31-Te(42|t)+1)-1,n&=i&~(u&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,Us(a,n))}else n=rt,n=Gi(a,a===_t?n:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(n&3)===0||Za(a,n)||(l=!0,Us(a,n));a=a.next}while(l);Lc=!1}}function rm(){Rs()}function Rs(){Nn=Gc=!1;var t=0;Dl!==0&&bm()&&(t=Dl);for(var e=j(),l=null,a=Qn;a!==null;){var i=a.next,n=Os(a,e);n===0?(a.next=null,l===null?Qn=i:l.next=i,i===null&&(Na=l)):(l=a,(t!==0||(n&3)!==0)&&(Nn=!0)),a=i}Zt!==0&&Zt!==5||_i(t),Dl!==0&&(Dl=0)}function Os(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,i=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var u=31-Te(n),c=1<<u,f=i[u];f===-1?((c&l)===0||(c&a)!==0)&&(i[u]=Bp(c,e)):f<=e&&(t.expiredLanes|=c),n&=~c}if(e=_t,l=rt,l=Gi(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(bt===2||bt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&E(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Za(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&E(a),au(l)){case 2:case 8:l=xf;break;case 32:l=Qi;break;case 268435456:l=Sf;break;default:l=Qi}return a=Ds.bind(null,t),l=Z(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&E(a),t.callbackPriority=2,t.callbackNode=null,2}function Ds(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Bn()&&t.callbackNode!==l)return null;var a=rt;return a=Gi(t,t===_t?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(ms(t,a,e),Os(t,j()),t.callbackNode!=null&&t.callbackNode===l?Ds.bind(null,t):null)}function Us(t,e){if(Bn())return null;ms(t,e,!0)}function om(){Sm(function(){(yt&6)!==0?Z(Ze,rm):Rs()})}function Xc(){if(Dl===0){var t=Aa;t===0&&(t=Ni,Ni<<=1,(Ni&261888)===0&&(Ni=256)),Dl=t}return Dl}function Hs(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vi(""+t)}function Bs(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function sm(t,e,l,a,i){if(e==="submit"&&l&&l.stateNode===i){var n=Hs((i[re]||null).action),u=a.submitter;u&&(e=(e=u[re]||null)?Hs(e.formAction):u.getAttribute("formAction"),e!==null&&(n=e,u=null));var c=new Fi("action","action",null,a,i);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Dl!==0){var f=u?Bs(i,u):new FormData(i);rc(l,{pending:!0,data:f,method:i.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=u?Bs(i,u):new FormData(i),rc(l,{pending:!0,data:f,method:i.method,action:n},n,f))},currentTarget:i}]})}}for(var Zc=0;Zc<Eu.length;Zc++){var Vc=Eu[Zc],pm=Vc.toLowerCase(),dm=Vc[0].toUpperCase()+Vc.slice(1);Ye(pm,"on"+dm)}Ye(pr,"onAnimationEnd"),Ye(dr,"onAnimationIteration"),Ye(mr,"onAnimationStart"),Ye("dblclick","onDoubleClick"),Ye("focusin","onFocus"),Ye("focusout","onBlur"),Ye(Md,"onTransitionRun"),Ye(qd,"onTransitionStart"),Ye(Rd,"onTransitionCancel"),Ye(hr,"onTransitionEnd"),ra("onMouseEnter",["mouseout","mouseover"]),ra("onMouseLeave",["mouseout","mouseover"]),ra("onPointerEnter",["pointerout","pointerover"]),ra("onPointerLeave",["pointerout","pointerover"]),Ll("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ll("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ll("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ll("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ll("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ll("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ei));function Qs(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],i=a.event;a=a.listeners;t:{var n=void 0;if(e)for(var u=a.length-1;0<=u;u--){var c=a[u],f=c.instance,m=c.currentTarget;if(c=c.listener,f!==n&&i.isPropagationStopped())break t;n=c,i.currentTarget=m;try{n(i)}catch(b){Pi(b)}i.currentTarget=null,n=f}else for(u=0;u<a.length;u++){if(c=a[u],f=c.instance,m=c.currentTarget,c=c.listener,f!==n&&i.isPropagationStopped())break t;n=c,i.currentTarget=m;try{n(i)}catch(b){Pi(b)}i.currentTarget=null,n=f}}}}function ft(t,e){var l=e[iu];l===void 0&&(l=e[iu]=new Set);var a=t+"__bubble";l.has(a)||(Ns(e,t,2,!1),l.add(a))}function Wc(t,e,l){var a=0;e&&(a|=4),Ns(l,t,a,e)}var wn="_reactListening"+Math.random().toString(36).slice(2);function Kc(t){if(!t[wn]){t[wn]=!0,qf.forEach(function(l){l!=="selectionchange"&&(mm.has(l)||Wc(l,!1,t),Wc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[wn]||(e[wn]=!0,Wc("selectionchange",!1,e))}}function Ns(t,e,l,a){switch(dp(e)){case 2:var i=Lm;break;case 8:i=Xm;break;default:i=rf}l=i.bind(null,e,l,t),i=void 0,!du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),a?i!==void 0?t.addEventListener(e,l,{capture:!0,passive:i}):t.addEventListener(e,l,!0):i!==void 0?t.addEventListener(e,l,{passive:i}):t.addEventListener(e,l,!1)}function Jc(t,e,l,a,i){var n=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var c=a.stateNode.containerInfo;if(c===i)break;if(u===4)for(u=a.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;c!==null;){if(u=ua(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){a=n=u;continue t}c=c.parentNode}}a=a.return}Lf(function(){var m=n,b=su(l),A=[];t:{var g=gr.get(t);if(g!==void 0){var y=Fi,N=t;switch(t){case"keypress":if(Ki(l)===0)break t;case"keydown":case"keyup":y=cd;break;case"focusin":N="focus",y=vu;break;case"focusout":N="blur",y=vu;break;case"beforeblur":case"afterblur":y=vu;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=od;break;case pr:case dr:case mr:y=Pp;break;case hr:y=pd;break;case"scroll":case"scrollend":y=Kp;break;case"wheel":y=md;break;case"copy":case"cut":case"paste":y=td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Kf;break;case"toggle":case"beforetoggle":y=gd}var W=(e&4)!==0,zt=!W&&(t==="scroll"||t==="scrollend"),s=W?g!==null?g+"Capture":null:g;W=[];for(var r=m,d;r!==null;){var S=r;if(d=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||d===null||s===null||(S=Ja(r,s),S!=null&&W.push(Ci(r,S,d))),zt)break;r=r.return}0<W.length&&(g=new y(g,N,null,l,b),A.push({event:g,listeners:W}))}}if((e&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&l!==ou&&(N=l.relatedTarget||l.fromElement)&&(ua(N)||N[na]))break t;if((y||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,y?(N=l.relatedTarget||l.toElement,y=m,N=N?ua(N):null,N!==null&&(zt=dt(N),W=N.tag,N!==zt||W!==5&&W!==27&&W!==6)&&(N=null)):(y=null,N=m),y!==N)){if(W=Vf,S="onMouseLeave",s="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(W=Kf,S="onPointerLeave",s="onPointerEnter",r="pointer"),zt=y==null?g:Ka(y),d=N==null?g:Ka(N),g=new W(S,r+"leave",y,l,b),g.target=zt,g.relatedTarget=d,S=null,ua(b)===m&&(W=new W(s,r+"enter",N,l,b),W.target=d,W.relatedTarget=zt,S=W),zt=S,y&&N)e:{for(W=hm,s=y,r=N,d=0,S=s;S;S=W(S))d++;S=0;for(var V=r;V;V=W(V))S++;for(;0<d-S;)s=W(s),d--;for(;0<S-d;)r=W(r),S--;for(;d--;){if(s===r||r!==null&&s===r.alternate){W=s;break e}s=W(s),r=W(r)}W=null}else W=null;y!==null&&ws(A,g,y,W,!1),N!==null&&zt!==null&&ws(A,zt,N,W,!0)}}t:{if(g=m?Ka(m):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var gt=er;else if(If(g))if(lr)gt=Ed;else{gt=zd;var G=Ad}else y=g.nodeName,!y||y.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?m&&ru(m.elementType)&&(gt=er):gt=_d;if(gt&&(gt=gt(t,m))){tr(A,gt,l,b);break t}G&&G(t,g,m),t==="focusout"&&m&&g.type==="number"&&m.memoizedProps.value!=null&&fu(g,"number",g.value)}switch(G=m?Ka(m):window,t){case"focusin":(If(G)||G.contentEditable==="true")&&(ha=G,Au=m,li=null);break;case"focusout":li=Au=ha=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,or(A,l,b);break;case"selectionchange":if(jd)break;case"keydown":case"keyup":or(A,l,b)}var at;if(Tu)t:{switch(t){case"compositionstart":var ot="onCompositionStart";break t;case"compositionend":ot="onCompositionEnd";break t;case"compositionupdate":ot="onCompositionUpdate";break t}ot=void 0}else ma?$f(t,l)&&(ot="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(ot="onCompositionStart");ot&&(Jf&&l.locale!=="ko"&&(ma||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ma&&(at=Xf()):(vl=b,mu="value"in vl?vl.value:vl.textContent,ma=!0)),G=Yn(m,ot),0<G.length&&(ot=new Wf(ot,t,null,l,b),A.push({event:ot,listeners:G}),at?ot.data=at:(at=Pf(l),at!==null&&(ot.data=at)))),(at=yd?Td(t,l):bd(t,l))&&(ot=Yn(m,"onBeforeInput"),0<ot.length&&(G=new Wf("onBeforeInput","beforeinput",null,l,b),A.push({event:G,listeners:ot}),G.data=at)),sm(A,t,m,l,b)}Qs(A,e)})}function Ci(t,e,l){return{instance:t,listener:e,currentTarget:l}}function Yn(t,e){for(var l=e+"Capture",a=[];t!==null;){var i=t,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=Ja(t,l),i!=null&&a.unshift(Ci(t,i,n)),i=Ja(t,e),i!=null&&a.push(Ci(t,i,n))),t.tag===3)return a;t=t.return}return[]}function hm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ws(t,e,l,a,i){for(var n=e._reactName,u=[];l!==null&&l!==a;){var c=l,f=c.alternate,m=c.stateNode;if(c=c.tag,f!==null&&f===a)break;c!==5&&c!==26&&c!==27||m===null||(f=m,i?(m=Ja(l,n),m!=null&&u.unshift(Ci(l,m,f))):i||(m=Ja(l,n),m!=null&&u.push(Ci(l,m,f)))),l=l.return}u.length!==0&&t.push({event:e,listeners:u})}var gm=/\r\n?/g,vm=/\u0000|\uFFFD/g;function Ys(t){return(typeof t=="string"?t:""+t).replace(gm,`
`).replace(vm,"")}function Gs(t,e){return e=Ys(e),Ys(t)===e}function At(t,e,l,a,i,n){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||sa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&sa(t,""+a);break;case"className":Xi(t,"class",a);break;case"tabIndex":Xi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Xi(t,l,a);break;case"style":Yf(t,a,n);break;case"data":if(e!=="object"){Xi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Vi(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(e!=="input"&&At(t,e,"name",i.name,i,null),At(t,e,"formEncType",i.formEncType,i,null),At(t,e,"formMethod",i.formMethod,i,null),At(t,e,"formTarget",i.formTarget,i,null)):(At(t,e,"encType",i.encType,i,null),At(t,e,"method",i.method,i,null),At(t,e,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Vi(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Pe);break;case"onScroll":a!=null&&ft("scroll",t);break;case"onScrollEnd":a!=null&&ft("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(v(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(v(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Vi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":ft("beforetoggle",t),ft("toggle",t),Li(t,"popover",a);break;case"xlinkActuate":$e(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":$e(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":$e(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":$e(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":$e(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":$e(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":$e(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":$e(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":$e(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Li(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Vp.get(l)||l,Li(t,l,a))}}function Fc(t,e,l,a,i,n){switch(l){case"style":Yf(t,a,n);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(v(61));if(l=a.__html,l!=null){if(i.children!=null)throw Error(v(60));t.innerHTML=l}}break;case"children":typeof a=="string"?sa(t,a):(typeof a=="number"||typeof a=="bigint")&&sa(t,""+a);break;case"onScroll":a!=null&&ft("scroll",t);break;case"onScrollEnd":a!=null&&ft("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Pe);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Rf.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(i=l.endsWith("Capture"),e=l.slice(2,i?l.length-7:void 0),n=t[re]||null,n=n!=null?n[l]:null,typeof n=="function"&&t.removeEventListener(e,n,i),typeof a=="function")){typeof n!="function"&&n!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,i);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Li(t,l,a)}}}function te(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ft("error",t),ft("load",t);var a=!1,i=!1,n;for(n in l)if(l.hasOwnProperty(n)){var u=l[n];if(u!=null)switch(n){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v(137,e));default:At(t,e,n,u,l,null)}}i&&At(t,e,"srcSet",l.srcSet,l,null),a&&At(t,e,"src",l.src,l,null);return;case"input":ft("invalid",t);var c=n=u=i=null,f=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var b=l[a];if(b!=null)switch(a){case"name":i=b;break;case"type":u=b;break;case"checked":f=b;break;case"defaultChecked":m=b;break;case"value":n=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(v(137,e));break;default:At(t,e,a,b,l,null)}}Bf(t,n,c,f,m,u,i,!1);return;case"select":ft("invalid",t),a=u=n=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":n=c;break;case"defaultValue":u=c;break;case"multiple":a=c;default:At(t,e,i,c,l,null)}e=n,l=u,t.multiple=!!a,e!=null?oa(t,!!a,e,!1):l!=null&&oa(t,!!a,l,!0);return;case"textarea":ft("invalid",t),n=i=a=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":a=c;break;case"defaultValue":i=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(v(91));break;default:At(t,e,u,c,l,null)}Nf(t,a,i,n);return;case"option":for(f in l)l.hasOwnProperty(f)&&(a=l[f],a!=null)&&(f==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":At(t,e,f,a,l,null));return;case"dialog":ft("beforetoggle",t),ft("toggle",t),ft("cancel",t),ft("close",t);break;case"iframe":case"object":ft("load",t);break;case"video":case"audio":for(a=0;a<Ei.length;a++)ft(Ei[a],t);break;case"image":ft("error",t),ft("load",t);break;case"details":ft("toggle",t);break;case"embed":case"source":case"link":ft("error",t),ft("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(v(137,e));default:At(t,e,m,a,l,null)}return;default:if(ru(e)){for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!==void 0&&Fc(t,e,b,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&At(t,e,c,a,l,null))}function ym(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,u=null,c=null,f=null,m=null,b=null;for(y in l){var A=l[y];if(l.hasOwnProperty(y)&&A!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":f=A;default:a.hasOwnProperty(y)||At(t,e,y,null,a,A)}}for(var g in a){var y=a[g];if(A=l[g],a.hasOwnProperty(g)&&(y!=null||A!=null))switch(g){case"type":n=y;break;case"name":i=y;break;case"checked":m=y;break;case"defaultChecked":b=y;break;case"value":u=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(v(137,e));break;default:y!==A&&At(t,e,g,y,a,A)}}cu(t,u,c,f,m,b,n,i);return;case"select":y=u=c=g=null;for(n in l)if(f=l[n],l.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":y=f;default:a.hasOwnProperty(n)||At(t,e,n,null,a,f)}for(i in a)if(n=a[i],f=l[i],a.hasOwnProperty(i)&&(n!=null||f!=null))switch(i){case"value":g=n;break;case"defaultValue":c=n;break;case"multiple":u=n;default:n!==f&&At(t,e,i,n,a,f)}e=c,l=u,a=y,g!=null?oa(t,!!l,g,!1):!!a!=!!l&&(e!=null?oa(t,!!l,e,!0):oa(t,!!l,l?[]:"",!1));return;case"textarea":y=g=null;for(c in l)if(i=l[c],l.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:At(t,e,c,null,a,i)}for(u in a)if(i=a[u],n=l[u],a.hasOwnProperty(u)&&(i!=null||n!=null))switch(u){case"value":g=i;break;case"defaultValue":y=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(v(91));break;default:i!==n&&At(t,e,u,i,a,n)}Qf(t,g,y);return;case"option":for(var N in l)g=l[N],l.hasOwnProperty(N)&&g!=null&&!a.hasOwnProperty(N)&&(N==="selected"?t.selected=!1:At(t,e,N,null,a,g));for(f in a)g=a[f],y=l[f],a.hasOwnProperty(f)&&g!==y&&(g!=null||y!=null)&&(f==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":At(t,e,f,g,a,y));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in l)g=l[W],l.hasOwnProperty(W)&&g!=null&&!a.hasOwnProperty(W)&&At(t,e,W,null,a,g);for(m in a)if(g=a[m],y=l[m],a.hasOwnProperty(m)&&g!==y&&(g!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(v(137,e));break;default:At(t,e,m,g,a,y)}return;default:if(ru(e)){for(var zt in l)g=l[zt],l.hasOwnProperty(zt)&&g!==void 0&&!a.hasOwnProperty(zt)&&Fc(t,e,zt,void 0,a,g);for(b in a)g=a[b],y=l[b],!a.hasOwnProperty(b)||g===y||g===void 0&&y===void 0||Fc(t,e,b,g,a,y);return}}for(var s in l)g=l[s],l.hasOwnProperty(s)&&g!=null&&!a.hasOwnProperty(s)&&At(t,e,s,null,a,g);for(A in a)g=a[A],y=l[A],!a.hasOwnProperty(A)||g===y||g==null&&y==null||At(t,e,A,g,a,y)}function Ls(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Tm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var i=l[a],n=i.transferSize,u=i.initiatorType,c=i.duration;if(n&&c&&Ls(u)){for(u=0,c=i.responseEnd,a+=1;a<l.length;a++){var f=l[a],m=f.startTime;if(m>c)break;var b=f.transferSize,A=f.initiatorType;b&&Ls(A)&&(f=f.responseEnd,u+=b*(f<c?1:(c-m)/(f-m)))}if(--a,e+=8*(n+u)/(i.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var kc=null,$c=null;function Gn(t){return t.nodeType===9?t:t.ownerDocument}function Xs(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zs(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Pc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ic=null;function bm(){var t=window.event;return t&&t.type==="popstate"?t===Ic?!1:(Ic=t,!0):(Ic=null,!1)}var Vs=typeof setTimeout=="function"?setTimeout:void 0,xm=typeof clearTimeout=="function"?clearTimeout:void 0,Ws=typeof Promise=="function"?Promise:void 0,Sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ws<"u"?function(t){return Ws.resolve(null).then(t).catch(Am)}:Vs;function Am(t){setTimeout(function(){throw t})}function Ul(t){return t==="head"}function Ks(t,e){var l=e,a=0;do{var i=l.nextSibling;if(t.removeChild(l),i&&i.nodeType===8)if(l=i.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(i),La(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")ji(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,ji(l);for(var n=l.firstChild;n;){var u=n.nextSibling,c=n.nodeName;n[Wa]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||l.removeChild(n),n=u}}else l==="body"&&ji(t.ownerDocument.body);l=i}while(l);La(e)}function Js(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function tf(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":tf(l),nu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function zm(t,e,l,a){for(;t.nodeType===1;){var i=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Wa])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==i.rel||t.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||t.getAttribute("title")!==(i.title==null?null:i.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(i.src==null?null:i.src)||t.getAttribute("type")!==(i.type==null?null:i.type)||t.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=He(t.nextSibling),t===null)break}return null}function _m(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=He(t.nextSibling),t===null))return null;return t}function Fs(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=He(t.nextSibling),t===null))return null;return t}function ef(t){return t.data==="$?"||t.data==="$~"}function lf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Em(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function He(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var af=null;function ks(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return He(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function $s(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function Ps(t,e,l){switch(e=Gn(l),t){case"html":if(t=e.documentElement,!t)throw Error(v(452));return t;case"head":if(t=e.head,!t)throw Error(v(453));return t;case"body":if(t=e.body,!t)throw Error(v(454));return t;default:throw Error(v(451))}}function ji(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);nu(t)}var Be=new Map,Is=new Set;function Ln(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ml=q.d;q.d={f:Cm,r:jm,D:Mm,C:qm,L:Rm,m:Om,X:Um,S:Dm,M:Hm};function Cm(){var t=ml.f(),e=Dn();return t||e}function jm(t){var e=ca(t);e!==null&&e.tag===5&&e.type==="form"?go(e):ml.r(t)}var wa=typeof document>"u"?null:document;function tp(t,e,l){var a=wa;if(a&&typeof e=="string"&&e){var i=je(e);i='link[rel="'+t+'"][href="'+i+'"]',typeof l=="string"&&(i+='[crossorigin="'+l+'"]'),Is.has(i)||(Is.add(i),t={rel:t,crossOrigin:l,href:e},a.querySelector(i)===null&&(e=a.createElement("link"),te(e,"link",t),Wt(e),a.head.appendChild(e)))}}function Mm(t){ml.D(t),tp("dns-prefetch",t,null)}function qm(t,e){ml.C(t,e),tp("preconnect",t,e)}function Rm(t,e,l){ml.L(t,e,l);var a=wa;if(a&&t&&e){var i='link[rel="preload"][as="'+je(e)+'"]';e==="image"&&l&&l.imageSrcSet?(i+='[imagesrcset="'+je(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(i+='[imagesizes="'+je(l.imageSizes)+'"]')):i+='[href="'+je(t)+'"]';var n=i;switch(e){case"style":n=Ya(t);break;case"script":n=Ga(t)}Be.has(n)||(t=X({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Be.set(n,t),a.querySelector(i)!==null||e==="style"&&a.querySelector(Mi(n))||e==="script"&&a.querySelector(qi(n))||(e=a.createElement("link"),te(e,"link",t),Wt(e),a.head.appendChild(e)))}}function Om(t,e){ml.m(t,e);var l=wa;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",i='link[rel="modulepreload"][as="'+je(a)+'"][href="'+je(t)+'"]',n=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Ga(t)}if(!Be.has(n)&&(t=X({rel:"modulepreload",href:t},e),Be.set(n,t),l.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(qi(n)))return}a=l.createElement("link"),te(a,"link",t),Wt(a),l.head.appendChild(a)}}}function Dm(t,e,l){ml.S(t,e,l);var a=wa;if(a&&t){var i=fa(a).hoistableStyles,n=Ya(t);e=e||"default";var u=i.get(n);if(!u){var c={loading:0,preload:null};if(u=a.querySelector(Mi(n)))c.loading=5;else{t=X({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Be.get(n))&&nf(t,l);var f=u=a.createElement("link");Wt(f),te(f,"link",t),f._p=new Promise(function(m,b){f.onload=m,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Xn(u,e,a)}u={type:"stylesheet",instance:u,count:1,state:c},i.set(n,u)}}}function Um(t,e){ml.X(t,e);var l=wa;if(l&&t){var a=fa(l).hoistableScripts,i=Ga(t),n=a.get(i);n||(n=l.querySelector(qi(i)),n||(t=X({src:t,async:!0},e),(e=Be.get(i))&&uf(t,e),n=l.createElement("script"),Wt(n),te(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function Hm(t,e){ml.M(t,e);var l=wa;if(l&&t){var a=fa(l).hoistableScripts,i=Ga(t),n=a.get(i);n||(n=l.querySelector(qi(i)),n||(t=X({src:t,async:!0,type:"module"},e),(e=Be.get(i))&&uf(t,e),n=l.createElement("script"),Wt(n),te(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},a.set(i,n))}}function ep(t,e,l,a){var i=(i=it.current)?Ln(i):null;if(!i)throw Error(v(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ya(l.href),l=fa(i).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ya(l.href);var n=fa(i).hoistableStyles,u=n.get(t);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,u),(n=i.querySelector(Mi(t)))&&!n._p&&(u.instance=n,u.state.loading=5),Be.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Be.set(t,l),n||Bm(i,t,l,u.state))),e&&a===null)throw Error(v(528,""));return u}if(e&&a!==null)throw Error(v(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ga(l),l=fa(i).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(v(444,t))}}function Ya(t){return'href="'+je(t)+'"'}function Mi(t){return'link[rel="stylesheet"]['+t+"]"}function lp(t){return X({},t,{"data-precedence":t.precedence,precedence:null})}function Bm(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),te(e,"link",l),Wt(e),t.head.appendChild(e))}function Ga(t){return'[src="'+je(t)+'"]'}function qi(t){return"script[async]"+t}function ap(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+je(l.href)+'"]');if(a)return e.instance=a,Wt(a),a;var i=X({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Wt(a),te(a,"style",i),Xn(a,l.precedence,t),e.instance=a;case"stylesheet":i=Ya(l.href);var n=t.querySelector(Mi(i));if(n)return e.state.loading|=4,e.instance=n,Wt(n),n;a=lp(l),(i=Be.get(i))&&nf(a,i),n=(t.ownerDocument||t).createElement("link"),Wt(n);var u=n;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),te(n,"link",a),e.state.loading|=4,Xn(n,l.precedence,t),e.instance=n;case"script":return n=Ga(l.src),(i=t.querySelector(qi(n)))?(e.instance=i,Wt(i),i):(a=l,(i=Be.get(n))&&(a=X({},l),uf(a,i)),t=t.ownerDocument||t,i=t.createElement("script"),Wt(i),te(i,"link",a),t.head.appendChild(i),e.instance=i);case"void":return null;default:throw Error(v(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Xn(a,l.precedence,t));return e.instance}function Xn(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,n=i,u=0;u<a.length;u++){var c=a[u];if(c.dataset.precedence===e)n=c;else if(n!==i)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function nf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function uf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Zn=null;function ip(t,e,l){if(Zn===null){var a=new Map,i=Zn=new Map;i.set(l,a)}else i=Zn,a=i.get(l),a||(a=new Map,i.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),i=0;i<l.length;i++){var n=l[i];if(!(n[Wa]||n[kt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var u=n.getAttribute(e)||"";u=t+u;var c=a.get(u);c?c.push(n):a.set(u,[n])}}return a}function np(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function Qm(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function up(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Nm(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var i=Ya(a.href),n=e.querySelector(Mi(i));if(n){e=n._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Vn.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=n,Wt(n);return}n=e.ownerDocument||e,a=lp(a),(i=Be.get(i))&&nf(a,i),n=n.createElement("link"),Wt(n);var u=n;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),te(n,"link",a),l.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=Vn.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var cf=0;function wm(t,e){return t.stylesheets&&t.count===0&&Kn(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Kn(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+e);0<t.imgBytes&&cf===0&&(cf=62500*Tm());var i=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Kn(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>cf?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function Vn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kn(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Wn=null;function Kn(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Wn=new Map,e.forEach(Ym,t),Wn=null,Vn.call(t))}function Ym(t,e){if(!(e.state.loading&4)){var l=Wn.get(t);if(l)var a=l.get(null);else{l=new Map,Wn.set(t,l);for(var i=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var u=i[n];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(l.set(u.dataset.precedence,u),a=u)}a&&l.set(null,a)}i=e.instance,u=i.getAttribute("data-precedence"),n=l.get(u)||a,n===a&&l.set(null,i),l.set(u,i),this.count++,a=Vn.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),n?n.parentNode.insertBefore(i,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(i,t.firstChild)),e.state.loading|=4}}var Ri={$$typeof:Xt,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function Gm(t,e,l,a,i,n,u,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=eu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=eu(0),this.hiddenUpdates=eu(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function cp(t,e,l,a,i,n,u,c,f,m,b,A){return t=new Gm(t,e,l,u,f,m,b,A,c),e=1,n===!0&&(e|=24),n=xe(3,null,null,e),t.current=n,n.stateNode=t,e=wu(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:a,isDehydrated:l,cache:e},Xu(n),t}function fp(t){return t?(t=ya,t):ya}function rp(t,e,l,a,i,n){i=fp(i),a.context===null?a.context=i:a.pendingContext=i,a=Al(e),a.payload={element:l},n=n===void 0?null:n,n!==null&&(a.callback=n),l=zl(t,a,e),l!==null&&(he(l,t,e),ri(l,t,e))}function op(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function ff(t,e){op(t,e),(t=t.alternate)&&op(t,e)}function sp(t){if(t.tag===13||t.tag===31){var e=Wl(t,67108864);e!==null&&he(e,t,67108864),ff(t,67108864)}}function pp(t){if(t.tag===13||t.tag===31){var e=Ee();e=lu(e);var l=Wl(t,e);l!==null&&he(l,t,e),ff(t,e)}}var Jn=!0;function Lm(t,e,l,a){var i=x.T;x.T=null;var n=q.p;try{q.p=2,rf(t,e,l,a)}finally{q.p=n,x.T=i}}function Xm(t,e,l,a){var i=x.T;x.T=null;var n=q.p;try{q.p=8,rf(t,e,l,a)}finally{q.p=n,x.T=i}}function rf(t,e,l,a){if(Jn){var i=of(a);if(i===null)Jc(t,e,a,Fn,l),mp(t,a);else if(Vm(i,t,e,l,a))a.stopPropagation();else if(mp(t,a),e&4&&-1<Zm.indexOf(t)){for(;i!==null;){var n=ca(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var u=Gl(n.pendingLanes);if(u!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-Te(u);c.entanglements[1]|=f,u&=~f}Je(n),(yt&6)===0&&(Rn=j()+500,_i(0))}}break;case 31:case 13:c=Wl(n,2),c!==null&&he(c,n,2),Dn(),ff(n,2)}if(n=of(a),n===null&&Jc(t,e,a,Fn,l),n===i)break;i=n}i!==null&&a.stopPropagation()}else Jc(t,e,a,null,l)}}function of(t){return t=su(t),sf(t)}var Fn=null;function sf(t){if(Fn=null,t=ua(t),t!==null){var e=dt(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=Et(e),t!==null)return t;t=null}else if(l===31){if(t=k(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Fn=t,null}function dp(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mt()){case Ze:return 2;case xf:return 8;case Qi:case qp:return 32;case Sf:return 268435456;default:return 32}default:return 32}}var pf=!1,Hl=null,Bl=null,Ql=null,Oi=new Map,Di=new Map,Nl=[],Zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mp(t,e){switch(t){case"focusin":case"focusout":Hl=null;break;case"dragenter":case"dragleave":Bl=null;break;case"mouseover":case"mouseout":Ql=null;break;case"pointerover":case"pointerout":Oi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Di.delete(e.pointerId)}}function Ui(t,e,l,a,i,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:n,targetContainers:[i]},e!==null&&(e=ca(e),e!==null&&sp(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Vm(t,e,l,a,i){switch(e){case"focusin":return Hl=Ui(Hl,t,e,l,a,i),!0;case"dragenter":return Bl=Ui(Bl,t,e,l,a,i),!0;case"mouseover":return Ql=Ui(Ql,t,e,l,a,i),!0;case"pointerover":var n=i.pointerId;return Oi.set(n,Ui(Oi.get(n)||null,t,e,l,a,i)),!0;case"gotpointercapture":return n=i.pointerId,Di.set(n,Ui(Di.get(n)||null,t,e,l,a,i)),!0}return!1}function hp(t){var e=ua(t.target);if(e!==null){var l=dt(e);if(l!==null){if(e=l.tag,e===13){if(e=Et(l),e!==null){t.blockedOn=e,jf(t.priority,function(){pp(l)});return}}else if(e===31){if(e=k(l),e!==null){t.blockedOn=e,jf(t.priority,function(){pp(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kn(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=of(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);ou=a,l.target.dispatchEvent(a),ou=null}else return e=ca(l),e!==null&&sp(e),t.blockedOn=l,!1;e.shift()}return!0}function gp(t,e,l){kn(t)&&l.delete(e)}function Wm(){pf=!1,Hl!==null&&kn(Hl)&&(Hl=null),Bl!==null&&kn(Bl)&&(Bl=null),Ql!==null&&kn(Ql)&&(Ql=null),Oi.forEach(gp),Di.forEach(gp)}function $n(t,e){t.blockedOn===e&&(t.blockedOn=null,pf||(pf=!0,U.unstable_scheduleCallback(U.unstable_NormalPriority,Wm)))}var Pn=null;function vp(t){Pn!==t&&(Pn=t,U.unstable_scheduleCallback(U.unstable_NormalPriority,function(){Pn===t&&(Pn=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],i=t[e+2];if(typeof a!="function"){if(sf(a||l)===null)continue;break}var n=ca(l);n!==null&&(t.splice(e,3),e-=3,rc(n,{pending:!0,data:i,method:l.method,action:a},a,i))}}))}function La(t){function e(f){return $n(f,t)}Hl!==null&&$n(Hl,t),Bl!==null&&$n(Bl,t),Ql!==null&&$n(Ql,t),Oi.forEach(e),Di.forEach(e);for(var l=0;l<Nl.length;l++){var a=Nl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Nl.length&&(l=Nl[0],l.blockedOn===null);)hp(l),l.blockedOn===null&&Nl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var i=l[a],n=l[a+1],u=i[re]||null;if(typeof n=="function")u||vp(l);else if(u){var c=null;if(n&&n.hasAttribute("formAction")){if(i=n,u=n[re]||null)c=u.formAction;else if(sf(i)!==null)continue}else c=u.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),vp(l)}}}function yp(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function e(){i!==null&&(i(),i=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),i!==null&&(i(),i=null)}}}function df(t){this._internalRoot=t}In.prototype.render=df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(v(409));var l=e.current,a=Ee();rp(l,a,t,e,null,null)},In.prototype.unmount=df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rp(t.current,2,null,t,null,null),Dn(),e[na]=null}};function In(t){this._internalRoot=t}In.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Nl.length&&e!==0&&e<Nl[l].priority;l++);Nl.splice(l,0,t),l===0&&hp(t)}};var Tp=Rt.version;if(Tp!=="19.2.4")throw Error(v(527,Tp,"19.2.4"));q.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return t=_(e),t=t!==null?I(t):null,t=t===null?null:t.stateNode,t};var Km={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tu.isDisabled&&tu.supportsFiber)try{Xa=tu.inject(Km),ye=tu}catch{}}return Bi.createRoot=function(t,e){if(!F(t))throw Error(v(299));var l=!1,a="",i=Eo,n=Co,u=jo;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError)),e=cp(t,1,!1,null,null,l,a,null,i,n,u,yp),t[na]=e.current,Kc(t),new df(e)},Bi.hydrateRoot=function(t,e,l){if(!F(t))throw Error(v(299));var a=!1,i="",n=Eo,u=Co,c=jo,f=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(i=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),e=cp(t,1,!0,e,l??null,a,i,f,n,u,c,yp),e.context=fp(null),l=e.current,a=Ee(),a=lu(a),i=Al(a),i.callback=null,zl(l,i,a),l=a,e.current.lanes=l,Va(e,l),Je(e),t[na]=e.current,Kc(t),new In(e)},Bi.version="19.2.4",Bi}var Mp;function n0(){if(Mp)return gf.exports;Mp=1;function U(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U)}catch(Rt){console.error(Rt)}}return U(),gf.exports=i0(),gf.exports}var u0=n0();const c0=[{id:"cpu",label:"CPU SCHEDULING",items:["fcfs","sjf","rr","priority","srtf","preemptivePriority","mlq","mlfq"]},{id:"page",label:"PAGE REPLACEMENT",items:["fifo","lru","optimal"]}],Fe={fcfs:{title:"First Come First Served (FCFS)",initials:"FC",description:`First Come First Served (FCFS) is a non-preemptive scheduling algorithm where the process that requests the CPU first is allocated the CPU first. It is managed with a FIFO queue.

Logic Steps:
1. Sort the processes based on their Arrival Time (AT).
2. Start with the first process in the sorted list.
3. If the current time is less than the process's arrival time, wait (CPU Idle) until the process arrives.
4. The Completion Time (CT) is the current time plus the Burst Time (BT).
5. Calculate Turnaround Time (TAT) as Completion Time (CT) - Arrival Time (AT).
6. Calculate Waiting Time (WT) as Turnaround Time (TAT) - Burst Time (BT).
7. Update the current time to the Completion Time and repeat for all processes.`,best:"N/A",average:"Varies",worst:"Convoy Effect",space:"O(n)",code:{js:`// FCFS Scheduling Algorithm (Standalone Node.js)
    const proc = [
      { id: 1, at: 0, bt: 5 },
      { id: 2, at: 1, bt: 3 },
      { id: 3, at: 2, bt: 8 },
      { id: 4, at: 3, bt: 6 }
    ];

    function solveFCFS(p) {
      // Sort by Arrival Time
      p.sort((a, b) => a.at - b.at);

      let time = 0, totalWT = 0, totalTAT = 0, n = p.length;

      console.log("PID\\tAT\\tBT\\tCT\\tTAT\\tWT");
      
      p.forEach(process => {
        // If CPU is idle, jump to arrival time
        if (time < process.at) time = process.at;
        
        process.ct = time + process.bt;
        process.tat = process.ct - process.at;
        process.wt = process.tat - process.bt;
        
        time = process.ct;
        totalWT += process.wt;
        totalTAT += process.tat;

        console.log(\`\${process.id}\\t\${process.at}\\t\${process.bt}\\t\${process.ct}\\t\${process.tat}\\t\${process.wt}\`);
      });

      console.log(\`\\nAvg WT: \${(totalWT / n).toFixed(2)}\\nAvg TAT: \${(totalTAT / n).toFixed(2)}\`);
    }

    solveFCFS(proc);`,python:`# FCFS Scheduling Algorithm (Standalone Python)
    def solve_fcfs(p):
        # Sort by Arrival Time
        p.sort(key=lambda x: x['at'])
        
        time, total_wt, total_tat = 0, 0, 0
        n = len(p)

        print("PID\\tAT\\tBT\\tCT\\tTAT\\tWT")
        for process in p:
            # If CPU is idle, jump to arrival time
            if time < process['at']:
                time = process['at']
                
            process['ct'] = time + process['bt']
            process['tat'] = process['ct'] - process['at']
            process['wt'] = process['tat'] - process['bt']
            
            time = process['ct']
            total_wt += process['wt']
            total_tat += process['tat']
            
            print(f"{process['id']}\\t{process['at']}\\t{process['bt']}\\t{process['ct']}\\t{process['tat']}\\t{process['wt']}")

        print(f"\\nAvg WT: {total_wt/n:.2f}\\nAvg TAT: {total_tat/n:.2f}")

    data = [
        {'id': 1, 'at': 0, 'bt': 5},
        {'id': 2, 'at': 1, 'bt': 3},
        {'id': 3, 'at': 2, 'bt': 8},
        {'id': 4, 'at': 3, 'bt': 6}
    ]
    solve_fcfs(data)`,java:`import java.util.*;

    public class Main {
        static class Proc {
            int id, at, bt, ct, tat, wt;
            Proc(int i, int a, int b) { id=i; at=a; bt=b; }
        }

        public static void main(String[] args) {
            List<Proc> p = new ArrayList<>(Arrays.asList(
                new Proc(1, 0, 5), new Proc(2, 1, 3), 
                new Proc(3, 2, 8), new Proc(4, 3, 6)
            ));

            // Sort by Arrival Time
            p.sort(Comparator.comparingInt(process -> process.at));

            int time = 0;
            double totalWT = 0, totalTAT = 0;
            int n = p.size();

            System.out.println("PID\\tAT\\tBT\\tCT\\tTAT\\tWT");

            for (Proc process : p) {
                if (time < process.at) time = process.at;
                
                process.ct = time + process.bt;
                process.tat = process.ct - process.at;
                process.wt = process.tat - process.bt;
                
                time = process.ct;
                totalWT += process.wt;
                totalTAT += process.tat;

                System.out.println(process.id + "\\t" + process.at + "\\t" + process.bt + "\\t" + 
                                  process.ct + "\\t" + process.tat + "\\t" + process.wt);
            }

            System.out.printf("\\nAvg WT: %.2f\\nAvg TAT: %.2f\\n", totalWT / n, totalTAT / n);
        }
    }`,cpp:`#include <iostream>
    #include <vector>
    #include <algorithm>
    #include <iomanip>

    using namespace std;

    struct Proc {
        int id, at, bt, ct, tat, wt;
    };

    int main() {
        vector<Proc> p = {{1, 0, 5}, {2, 1, 3}, {3, 2, 8}, {4, 3, 6}};
        int n = p.size();

        // Sort by Arrival Time
        sort(p.begin(), p.end(), [](Proc a, Proc b) {
            return a.at < b.at;
        });

        int time = 0;
        float totalWT = 0, totalTAT = 0;

        cout << "PID\\tAT\\tBT\\tCT\\tTAT\\tWT" << endl;

        for (int i = 0; i < n; i++) {
            if (time < p[i].at) time = p[i].at;
            
            p[i].ct = time + p[i].bt;
            p[i].tat = p[i].ct - p[i].at;
            p[i].wt = p[i].tat - p[i].bt;

            time = p[i].ct;
            totalWT += p[i].wt;
            totalTAT += p[i].tat;

            cout << p[i].id << "\\t" << p[i].at << "\\t" << p[i].bt << "\\t" 
                << p[i].ct << "\\t" << p[i].tat << "\\t" << p[i].wt << endl;
        }

        cout << fixed << setprecision(2);
        cout << "\\nAvg WT: " << totalWT / n << "\\nAvg TAT: " << totalTAT / n << endl;

        return 0;
    }`,c:`#include <stdio.h>

    struct Proc {
        int id, at, bt, ct, tat, wt;
    };

    int main() {
        struct Proc p[] = {{1, 0, 5}, {2, 1, 3}, {3, 2, 8}, {4, 3, 6}};
        int n = 4, time = 0;
        float totalWT = 0, totalTAT = 0;

        // Bubble Sort for Arrival Time
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (p[j].at > p[j + 1].at) {
                    struct Proc temp = p[j];
                    p[j] = p[j + 1];
                    p[j + 1] = temp;
                }
            }
        }

        printf("PID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n");

        for (int i = 0; i < n; i++) {
            if (time < p[i].at) time = p[i].at;
            
            p[i].ct = time + p[i].bt;
            p[i].tat = p[i].ct - p[i].at;
            p[i].wt = p[i].tat - p[i].bt;
            
            time = p[i].ct;
            totalWT += p[i].wt;
            totalTAT += p[i].tat;
            
            printf("%d\\t%d\\t%d\\t%d\\t%d\\t%d\\n", p[i].id, p[i].at, p[i].bt, p[i].ct, p[i].tat, p[i].wt);
        }

        printf("\\nAvg WT: %.2f\\nAvg TAT: %.2f\\n", totalWT / n, totalTAT / n);

        return 0;
    }`}},sjf:{title:"Shortest Job First (SJF)",initials:"SJ",description:`Shortest Job First (SJF) is a non-preemptive scheduling policy that selects the process with the smallest execution time to execute next from the ready queue.

Logic Steps:
1. Maintain a list of processes and mark all as incomplete.
2. Initialize global time at 0.
3. At each step, find all processes that have arrived (AT <= current time) and are not completed.
4. From this subset, select the process with the smallest Burst Time (BT).
5. If no process has arrived, increment the global time to the arrival time of the next process.
6. Execute the selected process to completion: CT = current time + BT.
7. Calculate TAT (CT - AT) and WT (TAT - BT).
8. Update global time to CT and mark the process as completed. Repeat until all are finished.`,best:"Optimal WT",average:"Minimum",worst:"Starvation",space:"O(n)",code:{js:`// SJF Non-Preemptive Scheduling (Standalone Node.js)
    const proc = [
      { id: 1, at: 0, bt: 7 },
      { id: 2, at: 2, bt: 4 },
      { id: 3, at: 4, bt: 1 },
      { id: 4, at: 5, bt: 4 }
    ];

    function solveSJF(p) {
      let n = p.length, time = 0, completed = 0;
      let isDone = Array(n).fill(false);
      let totalWT = 0, totalTAT = 0;

      console.log("PID\\tAT\\tBT\\tCT\\tTAT\\tWT");
      while (completed < n) {
        let idx = -1, minBT = Infinity;
        for (let i = 0; i < n; i++) {
          if (p[i].at <= time && !isDone[i] && p[i].bt < minBT) {
            minBT = p[i].bt; idx = i;
          }
        }

        if (idx !== -1) {
          p[idx].ct = time + p[idx].bt;
          p[idx].tat = p[idx].ct - p[idx].at;
          p[idx].wt = p[idx].tat - p[idx].bt;
          time = p[idx].ct;
          isDone[idx] = true; completed++;
          totalWT += p[idx].wt; totalTAT += p[idx].tat;
          console.log(\`\${p[idx].id}\\t\${p[idx].at}\\t\${p[idx].bt}\\t\${p[idx].ct}\\t\${p[idx].tat}\\t\${p[idx].wt}\`);
        } else time++;
      }
      console.log(\`\\nAvg WT: \${(totalWT/n).toFixed(2)}\\nAvg TAT: \${(totalTAT/n).toFixed(2)}\`);
    }
    solveSJF(proc);`,python:`# SJF Non-Preemptive Scheduling (Standalone Python)
    def solve_sjf(p):
        n, time, completed = len(p), 0, 0
        is_done = [False] * n
        total_wt, total_tat = 0, 0

        print("PID\\tAT\\tBT\\tCT\\tTAT\\tWT")
        while completed < n:
            idx, min_bt = -1, float('inf')
            for i in range(n):
                if p[i]['at'] <= time and not is_done[i] and p[i]['bt'] < min_bt:
                    min_bt = p[i]['bt']
                    idx = i
            
            if idx != -1:
                p[idx]['ct'] = time + p[idx]['bt']
                p[idx]['tat'] = p[idx]['ct'] - p[idx]['at']
                p[idx]['wt'] = p[idx]['tat'] - p[idx]['bt']
                time = p[idx]['ct']
                is_done[idx] = True
                completed += 1
                total_wt += p[idx]['wt']
                total_tat += p[idx]['tat']
                print(f"{p[idx]['id']}\\t{p[idx]['at']}\\t{p[idx]['bt']}\\t{p[idx]['ct']}\\t{p[idx]['tat']}\\t{p[idx]['wt']}")
            else:
                time += 1
        print(f"\\nAvg WT: {total_wt/n:.2f}\\nAvg TAT: {total_tat/n:.2f}")

    data = [{'id': 1, 'at': 0, 'bt': 7}, {'id': 2, 'at': 2, 'bt': 4}, {'id': 3, 'at': 4, 'bt': 1}, {'id': 4, 'at': 5, 'bt': 4}]
    solve_sjf(data)`,java:`import java.util.*;
    public class Main {
        static class Proc { int id, at, bt, ct, tat, wt; boolean done;
            Proc(int i, int a, int b) { id=i; at=a; bt=b; } }
        public static void main(String[] args) {
            Proc[] p = {new Proc(1,0,7), new Proc(2,2,4), new Proc(3,4,1), new Proc(4,5,4)};
            int n=4, time=0, completed=0; double tWT=0, tTAT=0;
            System.out.println("PID\\tAT\\tBT\\tCT\\tTAT\\tWT");
            while(completed < n) {
                int idx = -1, minBT = Integer.MAX_VALUE;
                for(int i=0; i<n; i++) {
                    if(p[i].at <= time && !p[i].done && p[i].bt < minBT) {
                        minBT = p[i].bt; idx = i;
                    }
                }
                if(idx != -1) {
                    p[idx].ct = time + p[idx].bt;
                    p[idx].tat = p[idx].ct - p[idx].at;
                    p[idx].wt = p[idx].tat - p[idx].bt;
                    time = p[idx].ct; p[idx].done = true; completed++;
                    tWT += p[idx].wt; tTAT += p[idx].tat;
                    System.out.println(p[idx].id+"\\t"+p[idx].at+"\\t"+p[idx].bt+"\\t"+p[idx].ct+"\\t"+p[idx].tat+"\\t"+p[idx].wt);
                } else time++;
            }
            System.out.printf("\\nAvg WT: %.2f\\nAvg TAT: %.2f\\n", tWT/n, tTAT/n);
        }
    }`,cpp:`#include <iostream>
    #include <vector>
    #include <iomanip>
    using namespace std;
    struct Proc { int id, at, bt, ct, tat, wt; bool done = false; };
    int main() {
        vector<Proc> p = {{1,0,7}, {2,2,4}, {3,4,1}, {4,5,4}};
        int n=4, time=0, comp=0; float tWT=0, tTAT=0;
        cout << "PID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n";
        while(comp < n) {
            int idx = -1, minB = 9999;
            for(int i=0; i<n; i++) {
                if(p[i].at <= time && !p[i].done && p[i].bt < minB) { minB = p[i].bt; idx = i; }
            }
            if(idx != -1) {
                p[idx].ct = time + p[idx].bt;
                p[idx].tat = p[idx].ct - p[idx].at;
                p[idx].wt = p[idx].tat - p[idx].bt;
                time = p[idx].ct; p[idx].done = true; comp++;
                tWT += p[idx].wt; tTAT += p[idx].tat;
                cout<<p[idx].id<<"\\t"<<p[idx].at<<"\\t"<<p[idx].bt<<"\\t"<<p[idx].ct<<"\\t"<<p[idx].tat<<"\\t"<<p[idx].wt<<"\\n";
            } else time++;
        }
        cout<<fixed<<setprecision(2)<<"\\nAvg WT: "<<tWT/n<<"\\nAvg TAT: "<<tTAT/n<<endl;
        return 0;
    }`,c:`#include <stdio.h>
    struct Proc { int id, at, bt, ct, tat, wt, done; };
    int main() {
        struct Proc p[] = {{1,0,7,0,0,0,0}, {2,2,4,0,0,0,0}, {3,4,1,0,0,0,0}, {4,5,4,0,0,0,0}};
        int n=4, time=0, comp=0; float tWT=0, tTAT=0;
        printf("PID\\tAT\\tBT\\tCT\\tTAT\\tWT\\n");
        while(comp < n) {
            int idx = -1, minB = 9999;
            for(int i=0; i<n; i++) {
                if(p[i].at <= time && !p[i].done && p[i].bt < minB) { minB = p[i].bt; idx = i; }
            }
            if(idx != -1) {
                p[idx].ct = time + p[idx].bt;
                p[idx].tat = p[idx].ct - p[idx].at;
                p[idx].wt = p[idx].tat - p[idx].bt;
                time = p[idx].ct; p[idx].done = 1; comp++;
                tWT += p[idx].wt; tTAT += p[idx].tat;
                printf("%d\\t%d\\t%d\\t%d\\t%d\\t%d\\n", p[idx].id, p[idx].at, p[idx].bt, p[idx].ct, p[idx].tat, p[idx].wt);
            } else time++;
        }
        printf("\\nAvg WT: %.2f\\nAvg TAT: %.2f\\n", tWT/n, tTAT/n);
        return 0;
    }`}},rr:{title:"Round Robin (RR)",initials:"RR",description:`Round Robin (RR) is a preemptive scheduling algorithm where each process is assigned a fixed time slice called a Time Quantum. 

Logic Steps:
1. Maintain a Ready Queue and store remaining burst times for all processes.
2. Push processes that arrive at time 0 into the Ready Queue.
3. While the Ready Queue is not empty:
   a. Dequeue the first process.
   b. Execute it for the Time Quantum or its remaining burst time (whichever is smaller).
   c. Update the global clock.
   d. During execution, if any new processes arrive, add them to the Ready Queue.
   e. If the current process has remaining time, push it back to the end of the Ready Queue.
   f. If the process is finished, calculate CT, TAT, and WT.
4. If the queue is empty but processes remain, jump the clock to the next arrival.`,best:"Fairness",average:"Moderate",worst:"Context Switching",space:"O(n)",code:{js:`// Round Robin Scheduling (Standalone Node.js)
    const proc = [
      { id: 1, at: 0, bt: 5 },
      { id: 2, at: 1, bt: 4 },
      { id: 3, at: 2, bt: 2 },
      { id: 4, at: 3, bt: 1 }
    ];

    const quantum = 2;

    function solveRR(p, q) {
      p.sort((a,b)=>a.at-b.at);
      let n = p.length;
      let time = 0, completed = 0;
      let queue = [];
      let totalWT = 0, totalTAT = 0;

      p.forEach(pr => pr.rem = pr.bt);

      while (completed < n) {
        for (let i = 0; i < n; i++) {
          if (p[i].at <= time && !p[i].inQueue && p[i].rem > 0) {
            queue.push(p[i]);
            p[i].inQueue = true;
          }
        }

        if (queue.length === 0) {
          time++;
          continue;
        }

        let current = queue.shift();
        current.inQueue = false;

        let execTime = Math.min(q, current.rem);
        current.rem -= execTime;
        time += execTime;

        for (let i = 0; i < n; i++) {
          if (p[i].at <= time && !p[i].inQueue && p[i].rem > 0 && p[i] !== current) {
            queue.push(p[i]);
            p[i].inQueue = true;
          }
        }

        if (current.rem > 0) {
          queue.push(current);
          current.inQueue = true;
        } else {
          current.ct = time;
          current.tat = current.ct - current.at;
          current.wt = current.tat - current.bt;
          totalWT += current.wt;
          totalTAT += current.tat;
          completed++;
        }
      }

      console.log("PID	AT	BT	CT	TAT	WT");
      p.forEach(function(pr) {
        console.log(
          pr.id + "	" + pr.at + "	" + pr.bt + "	" +
          pr.ct + "	" + pr.tat + "	" + pr.wt
        );
      });

      console.log(
        "
Avg WT: " + (totalWT/n).toFixed(2) +
        "
Avg TAT: " + (totalTAT/n).toFixed(2)
      );
    }

    solveRR(proc, quantum);`,python:`# Round Robin Scheduling (Standalone Python)
    def solve_rr(p, q):
        p.sort(key=lambda x: x['at'])
        n = len(p)
        time = 0
        completed = 0
        queue = []
        total_wt = 0
        total_tat = 0

        for pr in p:
            pr['rem'] = pr['bt']
            pr['inQueue'] = False

        while completed < n:
            for pr in p:
                if pr['at'] <= time and not pr['inQueue'] and pr['rem'] > 0:
                    queue.append(pr)
                    pr['inQueue'] = True

            if not queue:
                time += 1
                continue

            current = queue.pop(0)
            current['inQueue'] = False

            exec_time = min(q, current['rem'])
            current['rem'] -= exec_time
            time += exec_time

            for pr in p:
                if pr['at'] <= time and not pr['inQueue'] and pr['rem'] > 0 and pr != current:
                    queue.append(pr)
                    pr['inQueue'] = True

            if current['rem'] > 0:
                queue.append(current)
                current['inQueue'] = True
            else:
                current['ct'] = time
                current['tat'] = current['ct'] - current['at']
                current['wt'] = current['tat'] - current['bt']
                total_wt += current['wt']
                total_tat += current['tat']
                completed += 1

        print("PID	AT	BT	CT	TAT	WT")
        for pr in p:
            print(f"{pr['id']}	{pr['at']}	{pr['bt']}	{pr['ct']}	{pr['tat']}	{pr['wt']}")

        print(f"
Avg WT: {total_wt/n:.2f}
Avg TAT: {total_tat/n:.2f}")


    data = [
        {'id':1,'at':0,'bt':5},
        {'id':2,'at':1,'bt':4},
        {'id':3,'at':2,'bt':2},
        {'id':4,'at':3,'bt':1}
    ]

    solve_rr(data, 2)`,java:`import java.util.*;

    public class Main {
        static class Proc {
            int id, at, bt, rem, ct, tat, wt;
            boolean inQueue=false;
            Proc(int i,int a,int b){ id=i; at=a; bt=b; rem=b; }
        }

        public static void main(String[] args) {
            Proc[] p = {
                new Proc(1,0,5),
                new Proc(2,1,4),
                new Proc(3,2,2),
                new Proc(4,3,1)
            };

            int quantum = 2;
            int n = p.length;
            int time = 0, completed = 0;
            double totalWT=0, totalTAT=0;
            Queue<Proc> queue = new LinkedList<>();

            Arrays.sort(p, Comparator.comparingInt(a -> a.at));

            while(completed < n){
                for(Proc pr : p){
                    if(pr.at <= time && !pr.inQueue && pr.rem > 0){
                        queue.add(pr);
                        pr.inQueue = true;
                    }
                }

                if(queue.isEmpty()){
                    time++;
                    continue;
                }

                Proc current = queue.poll();
                current.inQueue = false;

                int exec = Math.min(quantum, current.rem);
                current.rem -= exec;
                time += exec;

                for(Proc pr : p){
                    if(pr.at <= time && !pr.inQueue && pr.rem > 0 && pr != current){
                        queue.add(pr);
                        pr.inQueue = true;
                    }
                }

                if(current.rem > 0){
                    queue.add(current);
                    current.inQueue = true;
                } else {
                    current.ct = time;
                    current.tat = current.ct - current.at;
                    current.wt = current.tat - current.bt;
                    totalWT += current.wt;
                    totalTAT += current.tat;
                    completed++;
                }
            }

            System.out.println("PID	AT	BT	CT	TAT	WT");
            for(Proc pr : p)
                System.out.println(pr.id+"	"+pr.at+"	"+pr.bt+"	"+pr.ct+"	"+pr.tat+"	"+pr.wt);

            System.out.printf("
Avg WT: %.2f
Avg TAT: %.2f
", totalWT/n, totalTAT/n);
        }
    }`,cpp:`#include <iostream>
    #include <vector>
    #include <queue>
    #include <algorithm>
    #include <iomanip>
    using namespace std;

    struct Proc{
        int id, at, bt, rem, ct, tat, wt;
        bool inQueue=false;
    };

    int main(){
        vector<Proc> p = {
            {1,0,5,5},
            {2,1,4,4},
            {3,2,2,2},
            {4,3,1,1}
        };

        int quantum = 2;
        int n = p.size();
        int time=0, completed=0;
        float totalWT=0, totalTAT=0;
        queue<int> q;

        sort(p.begin(), p.end(), [](Proc a, Proc b){ return a.at < b.at; });

        while(completed < n){
            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].inQueue && p[i].rem>0){
                    q.push(i);
                    p[i].inQueue=true;
                }
            }

            if(q.empty()){
                time++;
                continue;
            }

            int idx=q.front(); q.pop();
            p[idx].inQueue=false;

            int exec=min(quantum,p[idx].rem);
            p[idx].rem-=exec;
            time+=exec;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].inQueue && p[i].rem>0 && i!=idx){
                    q.push(i);
                    p[i].inQueue=true;
                }
            }

            if(p[idx].rem>0){
                q.push(idx);
                p[idx].inQueue=true;
            } else {
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        cout<<"PID	AT	BT	CT	TAT	WT
";
        for(auto pr:p)
            cout<<pr.id<<"	"<<pr.at<<"	"<<pr.bt<<"	"<<pr.ct<<"	"<<pr.tat<<"	"<<pr.wt<<"
";

        cout<<fixed<<setprecision(2);
        cout<<"
Avg WT: "<<totalWT/n<<"
Avg TAT: "<<totalTAT/n<<endl;

        return 0;
    }`,c:`#include <stdio.h>

    struct Proc{
        int id, at, bt, rem, ct, tat, wt, inQueue;
    };

    int main(){
        struct Proc p[]={
            {1,0,5,5,0,0,0,0},
            {2,1,4,4,0,0,0,0},
            {3,2,2,2,0,0,0,0},
            {4,3,1,1,0,0,0,0}
        };

        int quantum=2;
        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;
        int queue[100], front=0,rear=0;

        while(completed<n){
            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].inQueue && p[i].rem>0){
                    queue[rear++]=i;
                    p[i].inQueue=1;
                }
            }

            if(front==rear){
                time++;
                continue;
            }

            int idx=queue[front++];
            p[idx].inQueue=0;

            int exec = (p[idx].rem<quantum)?p[idx].rem:quantum;
            p[idx].rem-=exec;
            time+=exec;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].inQueue && p[i].rem>0 && i!=idx){
                    queue[rear++]=i;
                    p[i].inQueue=1;
                }
            }

            if(p[idx].rem>0){
                queue[rear++]=idx;
                p[idx].inQueue=1;
            } else {
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        printf("PID	AT	BT	CT	TAT	WT
");
        for(int i=0;i<n;i++)
            printf("%d	%d	%d	%d	%d	%d
",p[i].id,p[i].at,p[i].bt,p[i].ct,p[i].tat,p[i].wt);

        printf("
Avg WT: %.2f
Avg TAT: %.2f
",totalWT/n,totalTAT/n);

        return 0;
    }`}},priority:{title:"Priority Scheduling",initials:"PR",description:`Priority Scheduling allocates the CPU based on the priority assigned to each process. In this non-preemptive version, the highest priority process (lowest numerical value) is executed fully once it arrives.

Logic Steps:
1. Initialize the global clock at 0.
2. At any time T, identify all processes that have arrived (AT <= T) and are incomplete.
3. From this list, select the process with the highest priority (minimum priority number).
4. If priorities are equal, use Arrival Time as a tie-breaker (FCFS).
5. If no process has arrived, advance the clock to the next available arrival.
6. Execute the process: CT = clock + BT.
7. Calculate metrics: TAT = CT - AT and WT = TAT - BT.
8. Set the global clock to CT and mark the process as completed.`,best:"Critical Tasks",average:"Varies",worst:"Starvation",space:"O(n)",code:{js:`// Priority Scheduling (Non-Preemptive) - Standalone Node.js
    const proc = [
      { id: 1, at: 0, bt: 7, pr: 2 },
      { id: 2, at: 2, bt: 4, pr: 1 },
      { id: 3, at: 4, bt: 1, pr: 3 },
      { id: 4, at: 5, bt: 4, pr: 2 }
    ];

    function solvePriority(p) {
      var n = p.length;
      var time = 0, completed = 0;
      var totalWT = 0, totalTAT = 0;

      for (var i = 0; i < n; i++)
        p[i].done = false;

      console.log("PID	AT	BT	PR	CT	TAT	WT");

      while (completed < n) {
        var idx = -1;
        var bestPr = 9999;

        for (var i = 0; i < n; i++) {
          if (p[i].at <= time && !p[i].done) {
            if (p[i].pr < bestPr) {
              bestPr = p[i].pr;
              idx = i;
            }
          }
        }

        if (idx == -1) {
          time++;
          continue;
        }

        p[idx].ct = time + p[idx].bt;
        p[idx].tat = p[idx].ct - p[idx].at;
        p[idx].wt = p[idx].tat - p[idx].bt;

        time = p[idx].ct;
        p[idx].done = true;
        completed++;

        totalWT += p[idx].wt;
        totalTAT += p[idx].tat;

        console.log(
          p[idx].id + "	" +
          p[idx].at + "	" +
          p[idx].bt + "	" +
          p[idx].pr + "	" +
          p[idx].ct + "	" +
          p[idx].tat + "	" +
          p[idx].wt
        );
      }

      console.log(
        "
Avg WT: " + (totalWT/n).toFixed(2) +
        "
Avg TAT: " + (totalTAT/n).toFixed(2)
      );
    }

    solvePriority(proc);`,python:`# Priority Scheduling (Non-Preemptive)
    def solve_priority(p):
        n = len(p)
        time = 0
        completed = 0
        total_wt = 0
        total_tat = 0

        for pr in p:
            pr['done'] = False

        print("PID	AT	BT	PR	CT	TAT	WT")

        while completed < n:
            idx = -1
            best_pr = 9999

            for i in range(n):
                if p[i]['at'] <= time and not p[i]['done']:
                    if p[i]['pr'] < best_pr:
                        best_pr = p[i]['pr']
                        idx = i

            if idx == -1:
                time += 1
                continue

            p[idx]['ct'] = time + p[idx]['bt']
            p[idx]['tat'] = p[idx]['ct'] - p[idx]['at']
            p[idx]['wt'] = p[idx]['tat'] - p[idx]['bt']

            time = p[idx]['ct']
            p[idx]['done'] = True
            completed += 1

            total_wt += p[idx]['wt']
            total_tat += p[idx]['tat']

            print(str(p[idx]['id']) + "	" +
                  str(p[idx]['at']) + "	" +
                  str(p[idx]['bt']) + "	" +
                  str(p[idx]['pr']) + "	" +
                  str(p[idx]['ct']) + "	" +
                  str(p[idx]['tat']) + "	" +
                  str(p[idx]['wt']))

        print("
Avg WT: " + format(total_wt/n, ".2f") +
              "
Avg TAT: " + format(total_tat/n, ".2f"))


    data = [
        {'id':1,'at':0,'bt':7,'pr':2},
        {'id':2,'at':2,'bt':4,'pr':1},
        {'id':3,'at':4,'bt':1,'pr':3},
        {'id':4,'at':5,'bt':4,'pr':2}
    ]

    solve_priority(data)`,java:`import java.util.*;

    public class Main {
        static class Proc {
            int id, at, bt, pr, ct, tat, wt;
            boolean done=false;
            Proc(int i,int a,int b,int p){ id=i; at=a; bt=b; pr=p; }
        }

        public static void main(String[] args) {
            Proc[] p = {
                new Proc(1,0,7,2),
                new Proc(2,2,4,1),
                new Proc(3,4,1,3),
                new Proc(4,5,4,2)
            };

            int n = p.length;
            int time=0, completed=0;
            double totalWT=0, totalTAT=0;

            System.out.println("PID	AT	BT	PR	CT	TAT	WT");

            while(completed<n){
                int idx=-1, bestPr=9999;

                for(int i=0;i<n;i++){
                    if(p[i].at<=time && !p[i].done){
                        if(p[i].pr<bestPr){
                            bestPr=p[i].pr;
                            idx=i;
                        }
                    }
                }

                if(idx==-1){
                    time++;
                    continue;
                }

                p[idx].ct=time+p[idx].bt;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;

                time=p[idx].ct;
                p[idx].done=true;
                completed++;

                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;

                System.out.println(p[idx].id+"	"+p[idx].at+"	"+p[idx].bt+"	"+p[idx].pr+"	"+p[idx].ct+"	"+p[idx].tat+"	"+p[idx].wt);
            }

            System.out.printf("
Avg WT: %.2f
Avg TAT: %.2f
", totalWT/n, totalTAT/n);
        }
    }`,cpp:`#include <iostream>
    #include <vector>
    #include <iomanip>
    using namespace std;

    struct Proc{
        int id, at, bt, pr, ct, tat, wt;
        bool done=false;
    };

    int main(){
        vector<Proc> p = {
            {1,0,7,2},
            {2,2,4,1},
            {3,4,1,3},
            {4,5,4,2}
        };

        int n=p.size();
        int time=0, completed=0;
        float totalWT=0, totalTAT=0;

        cout<<"PID	AT	BT	PR	CT	TAT	WT
";

        while(completed<n){
            int idx=-1, bestPr=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].done){
                    if(p[i].pr<bestPr){
                        bestPr=p[i].pr;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].ct=time+p[idx].bt;
            p[idx].tat=p[idx].ct-p[idx].at;
            p[idx].wt=p[idx].tat-p[idx].bt;

            time=p[idx].ct;
            p[idx].done=true;
            completed++;

            totalWT+=p[idx].wt;
            totalTAT+=p[idx].tat;

            cout<<p[idx].id<<"	"<<p[idx].at<<"	"<<p[idx].bt<<"	"<<p[idx].pr<<"	"<<p[idx].ct<<"	"<<p[idx].tat<<"	"<<p[idx].wt<<"
";
        }

        cout<<fixed<<setprecision(2);
        cout<<"
Avg WT: "<<totalWT/n<<"
Avg TAT: "<<totalTAT/n<<endl;

        return 0;
    }`,c:`#include <stdio.h>

    struct Proc{
        int id, at, bt, pr, ct, tat, wt, done;
    };

    int main(){
        struct Proc p[]={
            {1,0,7,2,0,0,0,0},
            {2,2,4,1,0,0,0,0},
            {3,4,1,3,0,0,0,0},
            {4,5,4,2,0,0,0,0}
        };

        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;

        printf("PID	AT	BT	PR	CT	TAT	WT
");

        while(completed<n){
            int idx=-1,bestPr=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && !p[i].done){
                    if(p[i].pr<bestPr){
                        bestPr=p[i].pr;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].ct=time+p[idx].bt;
            p[idx].tat=p[idx].ct-p[idx].at;
            p[idx].wt=p[idx].tat-p[idx].bt;

            time=p[idx].ct;
            p[idx].done=1;
            completed++;

            totalWT+=p[idx].wt;
            totalTAT+=p[idx].tat;

            printf("%d	%d	%d	%d	%d	%d	%d
",p[idx].id,p[idx].at,p[idx].bt,p[idx].pr,p[idx].ct,p[idx].tat,p[idx].wt);
        }

        printf("
Avg WT: %.2f
Avg TAT: %.2f
",totalWT/n,totalTAT/n);

        return 0;
    }`}},srtf:{title:"Shortest Remaining Time First (SRTF)",initials:"SR",description:`Shortest Remaining Time First (SRTF) is the preemptive version of the SJF algorithm. At any given time, the process with the smallest remaining burst time is executed. If a new process arrives with a remaining time shorter than the current process, the current process is preempted.

  Logic Steps:
  1. Initialize the system clock at 0 and keep track of remaining burst times for all processes.
  2. At every time unit:
    a. Identify all processes that have arrived (Arrival Time <= current clock) and are not yet completed.
    b. From this subset, select the process with the minimum remaining burst time.
    c. If no process is available, increment the clock to the next available arrival.
    d. Execute the selected process for exactly 1 unit of time.
    e. Update the current clock and decrease the remaining time of the process.
  3. If a process's remaining time reaches 0, it is marked as completed.
  4. Calculate Completion Time (CT) as the current clock value at the moment of completion.
  5. Calculate Turnaround Time (TAT) as CT - AT and Waiting Time (WT) as TAT - initial Burst Time.
  6. Repeat until all processes are finished.`,best:"Minimum Average WT",average:"Optimal",worst:"Starvation",space:"O(n)",code:{js:`// SRTF Scheduling (Preemptive) - Standalone Node.js
    const proc = [
      { id: 1, at: 0, bt: 7 },
      { id: 2, at: 2, bt: 4 },
      { id: 3, at: 4, bt: 1 },
      { id: 4, at: 5, bt: 4 }
    ];

    function solveSRTF(p) {
      var n = p.length;
      var time = 0, completed = 0;
      var totalWT = 0, totalTAT = 0;

      for (var i = 0; i < n; i++) {
        p[i].rem = p[i].bt;
        p[i].done = false;
      }

      while (completed < n) {
        var idx = -1;
        var minRem = 9999;

        for (var i = 0; i < n; i++) {
          if (p[i].at <= time && p[i].rem > 0) {
            if (p[i].rem < minRem) {
              minRem = p[i].rem;
              idx = i;
            }
          }
        }

        if (idx == -1) {
          time++;
          continue;
        }

        p[idx].rem--;
        time++;

        if (p[idx].rem == 0) {
          p[idx].ct = time;
          p[idx].tat = p[idx].ct - p[idx].at;
          p[idx].wt = p[idx].tat - p[idx].bt;

          totalWT += p[idx].wt;
          totalTAT += p[idx].tat;
          completed++;
        }
      }

      console.log("PID	AT	BT	CT	TAT	WT");
      for (var i = 0; i < n; i++) {
        console.log(
          p[i].id + "	" +
          p[i].at + "	" +
          p[i].bt + "	" +
          p[i].ct + "	" +
          p[i].tat + "	" +
          p[i].wt
        );
      }

      console.log(
        "
Avg WT: " + (totalWT/n).toFixed(2) +
        "
Avg TAT: " + (totalTAT/n).toFixed(2)
      );
    }

    solveSRTF(proc);`,python:`# SRTF Scheduling (Preemptive)
    def solve_srtf(p):
        n = len(p)
        time = 0
        completed = 0
        total_wt = 0
        total_tat = 0

        for pr in p:
            pr['rem'] = pr['bt']

        while completed < n:
            idx = -1
            min_rem = 9999

            for i in range(n):
                if p[i]['at'] <= time and p[i]['rem'] > 0:
                    if p[i]['rem'] < min_rem:
                        min_rem = p[i]['rem']
                        idx = i

            if idx == -1:
                time += 1
                continue

            p[idx]['rem'] -= 1
            time += 1

            if p[idx]['rem'] == 0:
                p[idx]['ct'] = time
                p[idx]['tat'] = p[idx]['ct'] - p[idx]['at']
                p[idx]['wt'] = p[idx]['tat'] - p[idx]['bt']
                total_wt += p[idx]['wt']
                total_tat += p[idx]['tat']
                completed += 1

        print("PID	AT	BT	CT	TAT	WT")
        for pr in p:
            print(str(pr['id']) + "	" +
                  str(pr['at']) + "	" +
                  str(pr['bt']) + "	" +
                  str(pr['ct']) + "	" +
                  str(pr['tat']) + "	" +
                  str(pr['wt']))

        print("
Avg WT: " + format(total_wt/n, ".2f") +
              "
Avg TAT: " + format(total_tat/n, ".2f"))


    data = [
        {'id':1,'at':0,'bt':7},
        {'id':2,'at':2,'bt':4},
        {'id':3,'at':4,'bt':1},
        {'id':4,'at':5,'bt':4}
    ]

    solve_srtf(data)`,java:`import java.util.*;

    public class Main {
        static class Proc {
            int id, at, bt, rem, ct, tat, wt;
            Proc(int i,int a,int b){ id=i; at=a; bt=b; rem=b; }
        }

        public static void main(String[] args) {
            Proc[] p = {
                new Proc(1,0,7),
                new Proc(2,2,4),
                new Proc(3,4,1),
                new Proc(4,5,4)
            };

            int n = p.length;
            int time=0, completed=0;
            double totalWT=0, totalTAT=0;

            while(completed<n){
                int idx=-1, minRem=9999;

                for(int i=0;i<n;i++){
                    if(p[i].at<=time && p[i].rem>0){
                        if(p[i].rem<minRem){
                            minRem=p[i].rem;
                            idx=i;
                        }
                    }
                }

                if(idx==-1){
                    time++;
                    continue;
                }

                p[idx].rem--;
                time++;

                if(p[idx].rem==0){
                    p[idx].ct=time;
                    p[idx].tat=p[idx].ct-p[idx].at;
                    p[idx].wt=p[idx].tat-p[idx].bt;
                    totalWT+=p[idx].wt;
                    totalTAT+=p[idx].tat;
                    completed++;
                }
            }

            System.out.println("PID	AT	BT	CT	TAT	WT");
            for(Proc pr:p)
                System.out.println(pr.id+"	"+pr.at+"	"+pr.bt+"	"+pr.ct+"	"+pr.tat+"	"+pr.wt);

            System.out.printf("
Avg WT: %.2f
Avg TAT: %.2f
", totalWT/n, totalTAT/n);
        }
    }`,cpp:`#include <iostream>
    #include <vector>
    #include <iomanip>
    using namespace std;

    struct Proc{
        int id, at, bt, rem, ct, tat, wt;
    };

    int main(){
        vector<Proc> p = {
            {1,0,7,7},
            {2,2,4,4},
            {3,4,1,1},
            {4,5,4,4}
        };

        int n=p.size();
        int time=0, completed=0;
        float totalWT=0, totalTAT=0;

        while(completed<n){
            int idx=-1, minRem=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && p[i].rem>0){
                    if(p[i].rem<minRem){
                        minRem=p[i].rem;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].rem--;
            time++;

            if(p[idx].rem==0){
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        cout<<"PID	AT	BT	CT	TAT	WT
";
        for(auto pr:p)
            cout<<pr.id<<"	"<<pr.at<<"	"<<pr.bt<<"	"<<pr.ct<<"	"<<pr.tat<<"	"<<pr.wt<<"
";

        cout<<fixed<<setprecision(2);
        cout<<"
Avg WT: "<<totalWT/n<<"
Avg TAT: "<<totalTAT/n<<endl;

        return 0;
    }`,c:`#include <stdio.h>

    struct Proc{
        int id, at, bt, rem, ct, tat, wt;
    };

    int main(){
        struct Proc p[]={
            {1,0,7,7,0,0,0},
            {2,2,4,4,0,0,0},
            {3,4,1,1,0,0,0},
            {4,5,4,4,0,0,0}
        };

        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;

        while(completed<n){
            int idx=-1,minRem=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && p[i].rem>0){
                    if(p[i].rem<minRem){
                        minRem=p[i].rem;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].rem--;
            time++;

            if(p[idx].rem==0){
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        printf("PID	AT	BT	CT	TAT	WT
");
        for(int i=0;i<n;i++)
            printf("%d	%d	%d	%d	%d	%d
",p[i].id,p[i].at,p[i].bt,p[i].ct,p[i].tat,p[i].wt);

        printf("
Avg WT: %.2f
Avg TAT: %.2f
",totalWT/n,totalTAT/n);

        return 0;
    }`}},preemptivePriority:{title:"Preemptive Priority Scheduling",initials:"PP",description:`Preemptive Priority Scheduling is an extension of Priority Scheduling. At any given time, the CPU is allocated to the process with the highest priority among all arrived processes. If a new process arrives with a priority higher than the currently running process, the current process is preempted and put back into the ready queue.

  Logic Steps:
  1. Initialize system clock at 0 and track remaining burst times for all processes.
  2. At every time unit:
    a. Identify all processes that have arrived (Arrival Time <= current clock) and are incomplete.
    b. Select the process with the highest priority (lowest numerical value).
    c. If multiple processes have the same highest priority, select the one with the earliest Arrival Time (FCFS tie-breaker).
    d. If no process is available, increment the clock.
    e. Execute the selected process for 1 unit of time.
    f. Decrease the remaining burst time of that process and update the global clock.
  3. When a process's remaining burst time becomes 0:
    a. Record Completion Time (CT) as the current clock value.
    b. Calculate Turnaround Time (TAT = CT - AT).
    c. Calculate Waiting Time (WT = TAT - BT).
    d. Mark process as completed.
  4. Repeat until all processes are finished.`,best:"Time-critical tasks",average:"Efficient",worst:"Starvation",space:"O(n)",code:{js:`// Preemptive Priority Scheduling (Lower number = Higher priority)
    const proc = [
      { id: 1, at: 0, bt: 8, pr: 2 },
      { id: 2, at: 1, bt: 4, pr: 1 },
      { id: 3, at: 2, bt: 9, pr: 3 },
      { id: 4, at: 3, bt: 5, pr: 2 }
    ];

    function solvePreemptivePriority(p) {
      var n = p.length;
      var time = 0, completed = 0;
      var totalWT = 0, totalTAT = 0;

      for (var i = 0; i < n; i++) {
        p[i].rem = p[i].bt;
      }

      while (completed < n) {
        var idx = -1;
        var bestPr = 9999;

        for (var i = 0; i < n; i++) {
          if (p[i].at <= time && p[i].rem > 0) {
            if (p[i].pr < bestPr) {
              bestPr = p[i].pr;
              idx = i;
            }
          }
        }

        if (idx == -1) {
          time++;
          continue;
        }

        p[idx].rem--;
        time++;

        if (p[idx].rem == 0) {
          p[idx].ct = time;
          p[idx].tat = p[idx].ct - p[idx].at;
          p[idx].wt = p[idx].tat - p[idx].bt;
          totalWT += p[idx].wt;
          totalTAT += p[idx].tat;
          completed++;
        }
      }

      console.log("PID	AT	BT	PR	CT	TAT	WT");
      for (var i = 0; i < n; i++) {
        console.log(
          p[i].id + "	" +
          p[i].at + "	" +
          p[i].bt + "	" +
          p[i].pr + "	" +
          p[i].ct + "	" +
          p[i].tat + "	" +
          p[i].wt
        );
      }

      console.log(
        "
Avg WT: " + (totalWT/n).toFixed(2) +
        "
Avg TAT: " + (totalTAT/n).toFixed(2)
      );
    }

    solvePreemptivePriority(proc);`,python:`# Preemptive Priority Scheduling (Lower number = Higher priority)
    def solve_preemptive_priority(p):
        n = len(p)
        time = 0
        completed = 0
        total_wt = 0
        total_tat = 0

        for pr in p:
            pr['rem'] = pr['bt']

        while completed < n:
            idx = -1
            best_pr = 9999

            for i in range(n):
                if p[i]['at'] <= time and p[i]['rem'] > 0:
                    if p[i]['pr'] < best_pr:
                        best_pr = p[i]['pr']
                        idx = i

            if idx == -1:
                time += 1
                continue

            p[idx]['rem'] -= 1
            time += 1

            if p[idx]['rem'] == 0:
                p[idx]['ct'] = time
                p[idx]['tat'] = p[idx]['ct'] - p[idx]['at']
                p[idx]['wt'] = p[idx]['tat'] - p[idx]['bt']
                total_wt += p[idx]['wt']
                total_tat += p[idx]['tat']
                completed += 1

        print("PID	AT	BT	PR	CT	TAT	WT")
        for pr in p:
            print(str(pr['id']) + "	" +
                  str(pr['at']) + "	" +
                  str(pr['bt']) + "	" +
                  str(pr['pr']) + "	" +
                  str(pr['ct']) + "	" +
                  str(pr['tat']) + "	" +
                  str(pr['wt']))

        print("
Avg WT: " + format(total_wt/n, ".2f") +
              "
Avg TAT: " + format(total_tat/n, ".2f"))

    data = [
        {'id':1,'at':0,'bt':8,'pr':2},
        {'id':2,'at':1,'bt':4,'pr':1},
        {'id':3,'at':2,'bt':9,'pr':3},
        {'id':4,'at':3,'bt':5,'pr':2}
    ]

    solve_preemptive_priority(data)`,java:`import java.util.*;

    public class Main {
        static class Proc {
            int id, at, bt, pr, rem, ct, tat, wt;
            Proc(int i,int a,int b,int p){
                id=i; at=a; bt=b; pr=p; rem=b;
            }
        }

        public static void main(String[] args) {
            Proc[] p = {
                new Proc(1,0,8,2),
                new Proc(2,1,4,1),
                new Proc(3,2,9,3),
                new Proc(4,3,5,2)
            };

            int n = p.length;
            int time=0, completed=0;
            double totalWT=0, totalTAT=0;

            while(completed<n){
                int idx=-1, bestPr=9999;

                for(int i=0;i<n;i++){
                    if(p[i].at<=time && p[i].rem>0){
                        if(p[i].pr<bestPr){
                            bestPr=p[i].pr;
                            idx=i;
                        }
                    }
                }

                if(idx==-1){
                    time++;
                    continue;
                }

                p[idx].rem--;
                time++;

                if(p[idx].rem==0){
                    p[idx].ct=time;
                    p[idx].tat=p[idx].ct-p[idx].at;
                    p[idx].wt=p[idx].tat-p[idx].bt;
                    totalWT+=p[idx].wt;
                    totalTAT+=p[idx].tat;
                    completed++;
                }
            }

            System.out.println("PID	AT	BT	PR	CT	TAT	WT");
            for(Proc pr:p)
                System.out.println(pr.id+"	"+pr.at+"	"+pr.bt+"	"+pr.pr+"	"+pr.ct+"	"+pr.tat+"	"+pr.wt);

            System.out.printf("
Avg WT: %.2f
Avg TAT: %.2f
", totalWT/n, totalTAT/n);
        }
    }`,cpp:`#include <iostream>
    #include <vector>
    #include <iomanip>
    using namespace std;

    struct Proc{
        int id, at, bt, pr, rem, ct, tat, wt;
    };

    int main(){
        vector<Proc> p = {
            {1,0,8,2,8},
            {2,1,4,1,4},
            {3,2,9,3,9},
            {4,3,5,2,5}
        };

        int n=p.size();
        int time=0, completed=0;
        float totalWT=0, totalTAT=0;

        while(completed<n){
            int idx=-1, bestPr=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && p[i].rem>0){
                    if(p[i].pr<bestPr){
                        bestPr=p[i].pr;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].rem--;
            time++;

            if(p[idx].rem==0){
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        cout<<"PID	AT	BT	PR	CT	TAT	WT
";
        for(auto pr:p)
            cout<<pr.id<<"	"<<pr.at<<"	"<<pr.bt<<"	"<<pr.pr<<"	"<<pr.ct<<"	"<<pr.tat<<"	"<<pr.wt<<"
";

        cout<<fixed<<setprecision(2);
        cout<<"
Avg WT: "<<totalWT/n<<"
Avg TAT: "<<totalTAT/n<<endl;

        return 0;
    }`,c:`#include <stdio.h>

    struct Proc{
        int id, at, bt, pr, rem, ct, tat, wt;
    };

    int main(){
        struct Proc p[]={
            {1,0,8,2,8,0,0,0},
            {2,1,4,1,4,0,0,0},
            {3,2,9,3,9,0,0,0},
            {4,3,5,2,5,0,0,0}
        };

        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;

        while(completed<n){
            int idx=-1,bestPr=9999;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && p[i].rem>0){
                    if(p[i].pr<bestPr){
                        bestPr=p[i].pr;
                        idx=i;
                    }
                }
            }

            if(idx==-1){
                time++;
                continue;
            }

            p[idx].rem--;
            time++;

            if(p[idx].rem==0){
                p[idx].ct=time;
                p[idx].tat=p[idx].ct-p[idx].at;
                p[idx].wt=p[idx].tat-p[idx].bt;
                totalWT+=p[idx].wt;
                totalTAT+=p[idx].tat;
                completed++;
            }
        }

        printf("PID	AT	BT	PR	CT	TAT	WT
");
        for(int i=0;i<n;i++)
            printf("%d	%d	%d	%d	%d	%d	%d
",p[i].id,p[i].at,p[i].bt,p[i].pr,p[i].ct,p[i].tat,p[i].wt);

        printf("
Avg WT: %.2f
Avg TAT: %.2f
",totalWT/n,totalTAT/n);

        return 0;
    }`}},mlq:{title:"Multilevel Queue (MLQ)",initials:"MQ",description:`Multilevel Queue (MLQ) scheduling partitions the ready queue into several separate queues based on process priority or type. Each queue has its own scheduling algorithm. In this implementation, Queue 1 (Priority 1) has absolute priority over Queue 2 (Priority 2+).

  Logic Steps:
  1. Divide processes into two categories: Q1 (High Priority: Priority 1) and Q2 (Low Priority: Priority 2+).
  2. Q1 is scheduled using Round Robin (Time Quantum based).
  3. Q2 is scheduled using FCFS.
  4. The scheduler always checks Q1 first. If Q1 is not empty, its processes are executed.
  5. If a process arrives in Q1 while a Q2 process is running, the Q2 process is preempted.
  6. Q2 processes only execute when Q1 is completely empty.`,best:"Mixed workloads",average:"Good",worst:"Starvation for Q2",space:"O(n)",code:{js:`// Multi Level Queue (MLQ) Scheduling
    // Queue 1: Round Robin (time quantum = 2)
    // Queue 2: FCFS
    // Priority: Queue 1 > Queue 2

    const proc = [
      { id: 1, at: 0, bt: 5, queue: 1 },
      { id: 2, at: 1, bt: 3, queue: 1 },
      { id: 3, at: 2, bt: 6, queue: 2 },
      { id: 4, at: 3, bt: 4, queue: 2 }
    ];

    function solveMLQ(p) {
      var tq = 2;
      var n = p.length;
      var time = 0, completed = 0;
      var totalWT = 0, totalTAT = 0;

      for (var i = 0; i < n; i++) {
        p[i].rem = p[i].bt;
      }

      while (completed < n) {

        // First serve Queue 1 (RR)
        var executed = false;

        for (var i = 0; i < n; i++) {
          if (p[i].queue == 1 && p[i].at <= time && p[i].rem > 0) {
            var execTime = Math.min(tq, p[i].rem);
            p[i].rem -= execTime;
            time += execTime;
            executed = true;

            if (p[i].rem == 0) {
              p[i].ct = time;
              p[i].tat = p[i].ct - p[i].at;
              p[i].wt = p[i].tat - p[i].bt;
              totalWT += p[i].wt;
              totalTAT += p[i].tat;
              completed++;
            }
          }
        }

        // Then serve Queue 2 (FCFS)
        for (var i = 0; i < n; i++) {
          if (p[i].queue == 2 && p[i].at <= time && p[i].rem > 0) {
            time += p[i].rem;
            p[i].rem = 0;

            p[i].ct = time;
            p[i].tat = p[i].ct - p[i].at;
            p[i].wt = p[i].tat - p[i].bt;
            totalWT += p[i].wt;
            totalTAT += p[i].tat;
            completed++;
            executed = true;
          }
        }

        if (!executed) time++;
      }

      console.log("PID	AT	BT	Q	CT	TAT	WT");
      for (var i = 0; i < n; i++) {
        console.log(
          p[i].id + "	" +
          p[i].at + "	" +
          p[i].bt + "	" +
          p[i].queue + "	" +
          p[i].ct + "	" +
          p[i].tat + "	" +
          p[i].wt
        );
      }

      console.log(
        "
Avg WT: " + (totalWT/n).toFixed(2) +
        "
Avg TAT: " + (totalTAT/n).toFixed(2)
      );
    }

    solveMLQ(proc);`,python:`# Multi Level Queue Scheduling
    # Queue 1: Round Robin (TQ=2)
    # Queue 2: FCFS

    def solve_mlq(p):
        tq = 2
        n = len(p)
        time = 0
        completed = 0
        total_wt = 0
        total_tat = 0

        for pr in p:
            pr['rem'] = pr['bt']

        while completed < n:
            executed = False

            # Queue 1 (RR)
            for pr in p:
                if pr['queue'] == 1 and pr['at'] <= time and pr['rem'] > 0:
                    exec_time = min(tq, pr['rem'])
                    pr['rem'] -= exec_time
                    time += exec_time
                    executed = True

                    if pr['rem'] == 0:
                        pr['ct'] = time
                        pr['tat'] = pr['ct'] - pr['at']
                        pr['wt'] = pr['tat'] - pr['bt']
                        total_wt += pr['wt']
                        total_tat += pr['tat']
                        completed += 1

            # Queue 2 (FCFS)
            for pr in p:
                if pr['queue'] == 2 and pr['at'] <= time and pr['rem'] > 0:
                    time += pr['rem']
                    pr['rem'] = 0
                    pr['ct'] = time
                    pr['tat'] = pr['ct'] - pr['at']
                    pr['wt'] = pr['tat'] - pr['bt']
                    total_wt += pr['wt']
                    total_tat += pr['tat']
                    completed += 1
                    executed = True

            if not executed:
                time += 1

        print("PID	AT	BT	Q	CT	TAT	WT")
        for pr in p:
            print(str(pr['id']) + "	" +
                  str(pr['at']) + "	" +
                  str(pr['bt']) + "	" +
                  str(pr['queue']) + "	" +
                  str(pr['ct']) + "	" +
                  str(pr['tat']) + "	" +
                  str(pr['wt']))

        print("
Avg WT: " + format(total_wt/n, ".2f") +
              "
Avg TAT: " + format(total_tat/n, ".2f"))


    data = [
        {'id':1,'at':0,'bt':5,'queue':1},
        {'id':2,'at':1,'bt':3,'queue':1},
        {'id':3,'at':2,'bt':6,'queue':2},
        {'id':4,'at':3,'bt':4,'queue':2}
    ]

    solve_mlq(data)`,java:`import java.util.*;

    public class Main {

        static class Proc {
            int id, at, bt, queue, rem, ct, tat, wt;
            Proc(int i,int a,int b,int q){
                id=i; at=a; bt=b; queue=q; rem=b;
            }
        }

        public static void main(String[] args) {

            Proc[] p = {
                new Proc(1,0,5,1),
                new Proc(2,1,3,1),
                new Proc(3,2,6,2),
                new Proc(4,3,4,2)
            };

            int tq = 2;
            int n = p.length;
            int time=0, completed=0;
            double totalWT=0, totalTAT=0;

            while(completed<n){

                boolean executed=false;

                // Queue 1 (RR)
                for(int i=0;i<n;i++){
                    if(p[i].queue==1 && p[i].at<=time && p[i].rem>0){
                        int exec=Math.min(tq,p[i].rem);
                        p[i].rem-=exec;
                        time+=exec;
                        executed=true;

                        if(p[i].rem==0){
                            p[i].ct=time;
                            p[i].tat=p[i].ct-p[i].at;
                            p[i].wt=p[i].tat-p[i].bt;
                            totalWT+=p[i].wt;
                            totalTAT+=p[i].tat;
                            completed++;
                        }
                    }
                }

                // Queue 2 (FCFS)
                for(int i=0;i<n;i++){
                    if(p[i].queue==2 && p[i].at<=time && p[i].rem>0){
                        time+=p[i].rem;
                        p[i].rem=0;
                        p[i].ct=time;
                        p[i].tat=p[i].ct-p[i].at;
                        p[i].wt=p[i].tat-p[i].bt;
                        totalWT+=p[i].wt;
                        totalTAT+=p[i].tat;
                        completed++;
                        executed=true;
                    }
                }

                if(!executed) time++;
            }

            System.out.println("PID	AT	BT	Q	CT	TAT	WT");
            for(Proc pr:p)
                System.out.println(pr.id+"	"+pr.at+"	"+pr.bt+"	"+pr.queue+"	"+pr.ct+"	"+pr.tat+"	"+pr.wt);

            System.out.printf("
Avg WT: %.2f
Avg TAT: %.2f
", totalWT/n, totalTAT/n);
        }
    }`,cpp:`#include <iostream>
    #include <vector>
    #include <iomanip>
    using namespace std;

    struct Proc{
        int id, at, bt, queue, rem, ct, tat, wt;
    };

    int main(){
        vector<Proc> p = {
            {1,0,5,1,5},
            {2,1,3,1,3},
            {3,2,6,2,6},
            {4,3,4,2,4}
        };

        int tq=2;
        int n=p.size();
        int time=0,completed=0;
        float totalWT=0,totalTAT=0;

        while(completed<n){
            bool executed=false;

            for(int i=0;i<n;i++){
                if(p[i].queue==1 && p[i].at<=time && p[i].rem>0){
                    int exec=min(tq,p[i].rem);
                    p[i].rem-=exec;
                    time+=exec;
                    executed=true;

                    if(p[i].rem==0){
                        p[i].ct=time;
                        p[i].tat=p[i].ct-p[i].at;
                        p[i].wt=p[i].tat-p[i].bt;
                        totalWT+=p[i].wt;
                        totalTAT+=p[i].tat;
                        completed++;
                    }
                }
            }

            for(int i=0;i<n;i++){
                if(p[i].queue==2 && p[i].at<=time && p[i].rem>0){
                    time+=p[i].rem;
                    p[i].rem=0;
                    p[i].ct=time;
                    p[i].tat=p[i].ct-p[i].at;
                    p[i].wt=p[i].tat-p[i].bt;
                    totalWT+=p[i].wt;
                    totalTAT+=p[i].tat;
                    completed++;
                    executed=true;
                }
            }

            if(!executed) time++;
        }

        cout<<"PID	AT	BT	Q	CT	TAT	WT
";
        for(auto pr:p)
            cout<<pr.id<<"	"<<pr.at<<"	"<<pr.bt<<"	"<<pr.queue<<"	"<<pr.ct<<"	"<<pr.tat<<"	"<<pr.wt<<"
";

        cout<<fixed<<setprecision(2);
        cout<<"
Avg WT: "<<totalWT/n<<"
Avg TAT: "<<totalTAT/n<<endl;
        return 0;
    }`,c:`#include <stdio.h>

    struct Proc{
        int id, at, bt, queue, rem, ct, tat, wt;
    };

    int main(){
        struct Proc p[]={
            {1,0,5,1,5,0,0,0},
            {2,1,3,1,3,0,0,0},
            {3,2,6,2,6,0,0,0},
            {4,3,4,2,4,0,0,0}
        };

        int tq=2;
        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;

        while(completed<n){
            int executed=0;

            for(int i=0;i<n;i++){
                if(p[i].queue==1 && p[i].at<=time && p[i].rem>0){
                    int exec=(p[i].rem<tq)?p[i].rem:tq;
                    p[i].rem-=exec;
                    time+=exec;
                    executed=1;

                    if(p[i].rem==0){
                        p[i].ct=time;
                        p[i].tat=p[i].ct-p[i].at;
                        p[i].wt=p[i].tat-p[i].bt;
                        totalWT+=p[i].wt;
                        totalTAT+=p[i].tat;
                        completed++;
                    }
                }
            }

            for(int i=0;i<n;i++){
                if(p[i].queue==2 && p[i].at<=time && p[i].rem>0){
                    time+=p[i].rem;
                    p[i].rem=0;
                    p[i].ct=time;
                    p[i].tat=p[i].ct-p[i].at;
                    p[i].wt=p[i].tat-p[i].bt;
                    totalWT+=p[i].wt;
                    totalTAT+=p[i].tat;
                    completed++;
                    executed=1;
                }
            }

            if(!executed) time++;
        }

        printf("PID	AT	BT	Q	CT	TAT	WT
");
        for(int i=0;i<n;i++)
            printf("%d	%d	%d	%d	%d	%d	%d
",
                p[i].id,p[i].at,p[i].bt,p[i].queue,p[i].ct,p[i].tat,p[i].wt);

        printf("
Avg WT: %.2f
Avg TAT: %.2f
",totalWT/n,totalTAT/n);
        return 0;
    }`}},mlfq:{title:"Multilevel Feedback Queue (MLFQ)",initials:"MF",description:`Multilevel Feedback Queue (MLFQ) is the most sophisticated CPU scheduling algorithm. It allows processes to move between queues. If a process uses too much CPU time, it is moved to a lower-priority queue. If a process waits too long in a lower-priority queue, it may be moved to a higher-priority queue (Aging) to prevent starvation.

  Logic Steps:
  1. Initialize three queues: Q1 (High priority, small Quantum), Q2 (Medium priority, larger Quantum), and Q3 (Low priority, FCFS).
  2. All new processes enter Q1.
  3. If a process in Q1 does not finish within its Time Quantum, it is preempted and demoted to Q2.
  4. If a process in Q2 does not finish within its Time Quantum, it is preempted and demoted to Q3.
  5. Processes in Q3 are scheduled using FCFS but are preempted if a new process arrives in Q1 or Q2.
  6. A process in a lower-level queue can only execute if all higher-level queues are empty.`,best:"Reduced response time",average:"Excellent",worst:"Complex overhead",space:"O(n)",code:{js:`// MLFQ Scheduling (3 Queues)
    // Q1: RR (Time Quantum = 4)
    // Q2: RR (Time Quantum = 8)
    // Q3: FCFS

    let processes = [
      {id:1, at:0, bt:10},
      {id:2, at:1, bt:6},
      {id:3, at:2, bt:8},
      {id:4, at:3, bt:4}
    ];

    let n = processes.length;

    processes.forEach(p => {
      p.rt = p.bt;
      p.ct = 0;
      p.tat = 0;
      p.wt = 0;
      p.level = 1;
    });

    let time = 0;
    let completed = 0;
    let totalWT = 0;
    let totalTAT = 0;

    let q1 = [], q2 = [], q3 = [];

    while (completed < n) {

      processes.forEach(p => {
        if (p.at === time) q1.push(p);
      });

      if (q1.length > 0) {
        let p = q1.shift();
        let tq = 4;
        let exec = Math.min(tq, p.rt);
        p.rt -= exec;
        time += exec;

        processes.forEach(pr => {
          if (pr.at > time - exec && pr.at <= time) q1.push(pr);
        });

        if (p.rt > 0) {
          p.level = 2;
          q2.push(p);
        } else {
          p.ct = time;
          p.tat = p.ct - p.at;
          p.wt = p.tat - p.bt;
          totalWT += p.wt;
          totalTAT += p.tat;
          completed++;
        }
      }

      else if (q2.length > 0) {
        let p = q2.shift();
        let tq = 8;
        let exec = Math.min(tq, p.rt);
        p.rt -= exec;
        time += exec;

        processes.forEach(pr => {
          if (pr.at > time - exec && pr.at <= time) q1.push(pr);
        });

        if (p.rt > 0) {
          p.level = 3;
          q3.push(p);
        } else {
          p.ct = time;
          p.tat = p.ct - p.at;
          p.wt = p.tat - p.bt;
          totalWT += p.wt;
          totalTAT += p.tat;
          completed++;
        }
      }

      else if (q3.length > 0) {
        let p = q3.shift();
        time += p.rt;
        p.rt = 0;

        processes.forEach(pr => {
          if (pr.at > time - p.bt && pr.at <= time) q1.push(pr);
        });

        p.ct = time;
        p.tat = p.ct - p.at;
        p.wt = p.tat - p.bt;
        totalWT += p.wt;
        totalTAT += p.tat;
        completed++;
      }

      else {
        time++;
      }
    }

    console.log("ID	AT	BT	CT	TAT	WT");
    processes.forEach(p => {
      console.log(p.id + "	" + p.at + "	" + p.bt + "	" + p.ct + "	" + p.tat + "	" + p.wt);
    });

    console.log("
Avg WT: " + (totalWT/n).toFixed(2));
    console.log("Avg TAT: " + (totalTAT/n).toFixed(2));`,python:`# MLFQ Scheduling (3 Queues)
    # Q1: RR (TQ=4), Q2: RR (TQ=8), Q3: FCFS

    processes = [
        {"id":1,"at":0,"bt":10},
        {"id":2,"at":1,"bt":6},
        {"id":3,"at":2,"bt":8},
        {"id":4,"at":3,"bt":4}
    ]

    n = len(processes)

    for p in processes:
        p["rt"] = p["bt"]
        p["ct"] = 0
        p["tat"] = 0
        p["wt"] = 0
        p["level"] = 1

    time = 0
    completed = 0
    totalWT = 0
    totalTAT = 0

    q1, q2, q3 = [], [], []

    while completed < n:

        for p in processes:
            if p["at"] == time:
                q1.append(p)

        if q1:
            p = q1.pop(0)
            tq = 4
            exec_time = min(tq, p["rt"])
            p["rt"] -= exec_time
            time += exec_time

            for pr in processes:
                if time-exec_time < pr["at"] <= time:
                    q1.append(pr)

            if p["rt"] > 0:
                p["level"] = 2
                q2.append(p)
            else:
                p["ct"] = time
                p["tat"] = p["ct"] - p["at"]
                p["wt"] = p["tat"] - p["bt"]
                totalWT += p["wt"]
                totalTAT += p["tat"]
                completed += 1

        elif q2:
            p = q2.pop(0)
            tq = 8
            exec_time = min(tq, p["rt"])
            p["rt"] -= exec_time
            time += exec_time

            for pr in processes:
                if time-exec_time < pr["at"] <= time:
                    q1.append(pr)

            if p["rt"] > 0:
                p["level"] = 3
                q3.append(p)
            else:
                p["ct"] = time
                p["tat"] = p["ct"] - p["at"]
                p["wt"] = p["tat"] - p["bt"]
                totalWT += p["wt"]
                totalTAT += p["tat"]
                completed += 1

        elif q3:
            p = q3.pop(0)
            time += p["rt"]
            p["rt"] = 0

            p["ct"] = time
            p["tat"] = p["ct"] - p["at"]
            p["wt"] = p["tat"] - p["bt"]
            totalWT += p["wt"]
            totalTAT += p["tat"]
            completed += 1

        else:
            time += 1

    print("ID	AT	BT	CT	TAT	WT")
    for p in processes:
        print(p["id"], p["at"], p["bt"], p["ct"], p["tat"], p["wt"], sep="	")

    print("
Avg WT:", round(totalWT/n,2))
    print("Avg TAT:", round(totalTAT/n,2))`,java:`// MLFQ Scheduling
    import java.util.*;

    class Process {
        int id, at, bt, rt, ct, tat, wt, level;
        Process(int id,int at,int bt){
            this.id=id; this.at=at; this.bt=bt;
            this.rt=bt; this.level=1;
        }
    }

    public class Main {
        public static void main(String[] args) {

            Process[] p = {
                new Process(1,0,10),
                new Process(2,1,6),
                new Process(3,2,8),
                new Process(4,3,4)
            };

            int n = p.length;
            int time=0, completed=0;
            double totalWT=0, totalTAT=0;

            Queue<Process> q1=new LinkedList<>();
            Queue<Process> q2=new LinkedList<>();
            Queue<Process> q3=new LinkedList<>();

            while(completed<n){

                for(Process pr:p)
                    if(pr.at==time) q1.add(pr);

                if(!q1.isEmpty()){
                    Process pr=q1.poll();
                    int tq=4;
                    int exec=Math.min(tq,pr.rt);
                    pr.rt-=exec;
                    time+=exec;

                    if(pr.rt>0){ pr.level=2; q2.add(pr);}
                    else{
                        pr.ct=time;
                        pr.tat=pr.ct-pr.at;
                        pr.wt=pr.tat-pr.bt;
                        totalWT+=pr.wt;
                        totalTAT+=pr.tat;
                        completed++;
                    }
                }

                else if(!q2.isEmpty()){
                    Process pr=q2.poll();
                    int tq=8;
                    int exec=Math.min(tq,pr.rt);
                    pr.rt-=exec;
                    time+=exec;

                    if(pr.rt>0){ pr.level=3; q3.add(pr);}
                    else{
                        pr.ct=time;
                        pr.tat=pr.ct-pr.at;
                        pr.wt=pr.tat-pr.bt;
                        totalWT+=pr.wt;
                        totalTAT+=pr.tat;
                        completed++;
                    }
                }

                else if(!q3.isEmpty()){
                    Process pr=q3.poll();
                    time+=pr.rt;
                    pr.rt=0;
                    pr.ct=time;
                    pr.tat=pr.ct-pr.at;
                    pr.wt=pr.tat-pr.bt;
                    totalWT+=pr.wt;
                    totalTAT+=pr.tat;
                    completed++;
                }

                else time++;
            }

            System.out.println("ID	AT	BT	CT	TAT	WT");
            for(Process pr:p)
                System.out.println(pr.id+"	"+pr.at+"	"+pr.bt+"	"+pr.ct+"	"+pr.tat+"	"+pr.wt);

            System.out.printf("
Avg WT: %.2f
Avg TAT: %.2f
", totalWT/n, totalTAT/n);
        }
    }`,cpp:`// MLFQ Scheduling
    #include <iostream>
    #include <queue>
    using namespace std;

    struct Process{
        int id,at,bt,rt,ct,tat,wt,level;
    };

    int main(){

        Process p[4]={{1,0,10,10,0,0,0,1},
                      {2,1,6,6,0,0,0,1},
                      {3,2,8,8,0,0,0,1},
                      {4,3,4,4,0,0,0,1}};

        int n=4;
        int time=0,completed=0;
        float totalWT=0,totalTAT=0;

        queue<Process*> q1,q2,q3;

        while(completed<n){

            for(int i=0;i<n;i++)
                if(p[i].at==time) q1.push(&p[i]);

            if(!q1.empty()){
                Process* pr=q1.front(); q1.pop();
                int tq=4;
                int exec=min(tq,pr->rt);
                pr->rt-=exec;
                time+=exec;

                if(pr->rt>0){ pr->level=2; q2.push(pr);}
                else{
                    pr->ct=time;
                    pr->tat=pr->ct-pr->at;
                    pr->wt=pr->tat-pr->bt;
                    totalWT+=pr->wt;
                    totalTAT+=pr->tat;
                    completed++;
                }
            }

            else if(!q2.empty()){
                Process* pr=q2.front(); q2.pop();
                int tq=8;
                int exec=min(tq,pr->rt);
                pr->rt-=exec;
                time+=exec;

                if(pr->rt>0){ pr->level=3; q3.push(pr);}
                else{
                    pr->ct=time;
                    pr->tat=pr->ct-pr->at;
                    pr->wt=pr->tat-pr->bt;
                    totalWT+=pr->wt;
                    totalTAT+=pr->tat;
                    completed++;
                }
            }

            else if(!q3.empty()){
                Process* pr=q3.front(); q3.pop();
                time+=pr->rt;
                pr->rt=0;
                pr->ct=time;
                pr->tat=pr->ct-pr->at;
                pr->wt=pr->tat-pr->bt;
                totalWT+=pr->wt;
                totalTAT+=pr->tat;
                completed++;
            }

            else time++;
        }

        cout<<"ID	AT	BT	CT	TAT	WT
";
        for(int i=0;i<n;i++)
            cout<<p[i].id<<"	"<<p[i].at<<"	"<<p[i].bt<<"	"<<p[i].ct<<"	"<<p[i].tat<<"	"<<p[i].wt<<"
";

        cout<<"
Avg WT: "<<totalWT/n<<"
Avg TAT: "<<totalTAT/n<<"
";
    }`,c:`// MLFQ Scheduling
    #include <stdio.h>

    struct Process{
        int id,at,bt,rt,ct,tat,wt,level;
    };

    int main(){

        struct Process p[4]={
            {1,0,10,10,0,0,0,1},
            {2,1,6,6,0,0,0,1},
            {3,2,8,8,0,0,0,1},
            {4,3,4,4,0,0,0,1}
        };

        int n=4,time=0,completed=0;
        float totalWT=0,totalTAT=0;

        while(completed<n){

            int executed=0;

            for(int i=0;i<n;i++){
                if(p[i].at<=time && p[i].rt>0){

                    int tq = (p[i].level==1)?4:(p[i].level==2)?8:p[i].rt;
                    int exec = (p[i].rt<tq)?p[i].rt:tq;

                    p[i].rt -= exec;
                    time += exec;

                    if(p[i].rt>0) p[i].level++;
                    else{
                        p[i].ct=time;
                        p[i].tat=p[i].ct-p[i].at;
                        p[i].wt=p[i].tat-p[i].bt;
                        totalWT+=p[i].wt;
                        totalTAT+=p[i].tat;
                        completed++;
                    }

                    executed=1;
                    break;
                }
            }

            if(!executed) time++;
        }

        printf("ID	AT	BT	CT	TAT	WT
");
        for(int i=0;i<n;i++)
            printf("%d	%d	%d	%d	%d	%d
",
                  p[i].id,p[i].at,p[i].bt,p[i].ct,p[i].tat,p[i].wt);

        printf("
Avg WT: %.2f
Avg TAT: %.2f
",totalWT/n,totalTAT/n);

        return 0;
    }`}},fifo:{title:"First-In First-Out (FIFO)",initials:"FI",description:`FIFO is the simplest page replacement algorithm. The OS maintains a queue of all pages in memory. When a page fault occurs and no frames are free, the oldest page (the one at the front of the queue) is replaced.

      Logic Steps:
      1. Maintain a queue to track the order of pages entering the frames.
      2. For each request, if the page is already in a frame, it is a HIT.
      3. If the page is not in a frame (FAULT):
        a. If frames are available, add the page to an empty frame and the queue.
        b. If frames are full, remove the page at the front of the queue (the oldest) and insert the new page.
      4. Repeat for the entire reference string.`,best:"Simple to implement",average:"Medium fault rate",worst:"Belady's Anomaly (More frames can increase faults)",space:"O(f)",code:{js:`// FIFO Page Replacement

      let pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
      let framesCount = 3;

      let frames = [];
      let hits = 0;
      let faults = 0;
      let pointer = 0;

      console.log("Page	Frames");

      for (let i = 0; i < pages.length; i++) {
          let page = pages[i];

          if (frames.includes(page)) {
              hits++;
          } else {
              faults++;
              if (frames.length < framesCount) {
                  frames.push(page);
              } else {
                  frames[pointer] = page;
                  pointer = (pointer + 1) % framesCount;
              }
          }

          console.log(page + "	" + frames.join(" "));
      }

      console.log("
Total Hits: " + hits);
      console.log("Total Faults: " + faults);
      console.log("Hit Ratio: " + (hits / pages.length).toFixed(2));
      console.log("Fault Ratio: " + (faults / pages.length).toFixed(2));`,python:`# FIFO Page Replacement

      pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]
      frames_count = 3

      frames = []
      hits = 0
      faults = 0
      pointer = 0

      print("Page	Frames")

      for page in pages:
          if page in frames:
              hits += 1
          else:
              faults += 1
              if len(frames) < frames_count:
                  frames.append(page)
              else:
                  frames[pointer] = page
                  pointer = (pointer + 1) % frames_count

          print(page, "	", frames)

      print("
Total Hits:", hits)
      print("Total Faults:", faults)
      print("Hit Ratio:", round(hits/len(pages),2))
      print("Fault Ratio:", round(faults/len(pages),2))`,java:`// FIFO Page Replacement
      import java.util.*;

      public class Main {
          public static void main(String[] args) {

              int[] pages = {7,0,1,2,0,3,0,4,2,3,0,3,2};
              int framesCount = 3;

              int[] frames = new int[framesCount];
              Arrays.fill(frames, -1);

              int hits = 0, faults = 0;
              int pointer = 0;

              System.out.println("Page	Frames");

              for (int page : pages) {

                  boolean found = false;
                  for (int f : frames) {
                      if (f == page) {
                          found = true;
                          hits++;
                          break;
                      }
                  }

                  if (!found) {
                      faults++;
                      frames[pointer] = page;
                      pointer = (pointer + 1) % framesCount;
                  }

                  System.out.print(page + "	");
                  for (int f : frames)
                      System.out.print((f == -1 ? "-" : f) + " ");
                  System.out.println();
              }

              System.out.println("
Total Hits: " + hits);
              System.out.println("Total Faults: " + faults);
              System.out.printf("Hit Ratio: %.2f
", (double)hits/pages.length);
              System.out.printf("Fault Ratio: %.2f
", (double)faults/pages.length);
          }
      }`,cpp:`// FIFO Page Replacement
      #include <iostream>
      #include <vector>
      using namespace std;

      int main() {

          vector<int> pages = {7,0,1,2,0,3,0,4,2,3,0,3,2};
          int framesCount = 3;

          vector<int> frames(framesCount, -1);

          int hits = 0, faults = 0;
          int pointer = 0;

          cout << "Page	Frames
";

          for (int page : pages) {

              bool found = false;
              for (int f : frames) {
                  if (f == page) {
                      found = true;
                      hits++;
                      break;
                  }
              }

              if (!found) {
                  faults++;
                  frames[pointer] = page;
                  pointer = (pointer + 1) % framesCount;
              }

              cout << page << "	";
              for (int f : frames)
                  cout << (f == -1 ? -1 : f) << " ";
              cout << endl;
          }

          cout << "
Total Hits: " << hits << endl;
          cout << "Total Faults: " << faults << endl;
          cout << "Hit Ratio: " << (double)hits/pages.size() << endl;
          cout << "Fault Ratio: " << (double)faults/pages.size() << endl;

          return 0;
      }`,c:`// FIFO Page Replacement
      #include <stdio.h>

      int main() {

          int pages[] = {7,0,1,2,0,3,0,4,2,3,0,3,2};
          int n = 13;
          int framesCount = 3;

          int frames[3];
          for(int i=0;i<framesCount;i++) frames[i] = -1;

          int hits = 0, faults = 0;
          int pointer = 0;

          printf("Page	Frames
");

          for(int i=0;i<n;i++) {

              int page = pages[i];
              int found = 0;

              for(int j=0;j<framesCount;j++) {
                  if(frames[j] == page) {
                      found = 1;
                      hits++;
                      break;
                  }
              }

              if(!found) {
                  faults++;
                  frames[pointer] = page;
                  pointer = (pointer + 1) % framesCount;
              }

              printf("%d	", page);
              for(int j=0;j<framesCount;j++)
                  printf("%d ", frames[j]);
              printf("
");
          }

          printf("
Total Hits: %d
", hits);
          printf("Total Faults: %d
", faults);
          printf("Hit Ratio: %.2f
", (float)hits/n);
          printf("Fault Ratio: %.2f
", (float)faults/n);

          return 0;
      }`}},lru:{title:"Least Recently Used (LRU)",initials:"LR",description:`LRU replaces the page that has not been used for the longest time.

    Logic Steps:
    1. Maintain frames and track the most recent usage index of each page.
    2. For each page request:
      a. If page exists in frame → HIT.
      b. If page does not exist → FAULT.
    3. If frames are full during a fault:
      - Replace the page with the smallest recent usage index.
    4. Update usage index after every access.`,best:"Good performance, no Belady anomaly",average:"Lower faults than FIFO",worst:"Needs tracking of usage",space:"O(f)",code:{js:`// LRU Page Replacement

  let pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
  let framesCount = 3;

  let frames = [];
  let recent = new Map();
  let hits = 0;
  let faults = 0;

  console.log("Page	Frames");

  for (let i = 0; i < pages.length; i++) {
      let page = pages[i];

      if (frames.includes(page)) {
          hits++;
      } else {
          faults++;
          if (frames.length < framesCount) {
              frames.push(page);
          } else {
              let lruPage = frames[0];
              let minIndex = recent.get(lruPage);

              for (let f of frames) {
                  if (recent.get(f) < minIndex) {
                      minIndex = recent.get(f);
                      lruPage = f;
                  }
              }

              frames[frames.indexOf(lruPage)] = page;
          }
      }

      recent.set(page, i);
      console.log(page + "	" + frames.join(" "));
  }

  console.log("\\nTotal Hits: " + hits);
  console.log("Total Faults: " + faults);
  console.log("Hit Ratio: " + (hits / pages.length).toFixed(2));
  console.log("Fault Ratio: " + (faults / pages.length).toFixed(2));`,python:`# LRU Page Replacement

  pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]
  frames_count = 3

  frames = []
  recent = {}
  hits = 0
  faults = 0

  print("Page	Frames")

  for i, page in enumerate(pages):
      if page in frames:
          hits += 1
      else:
          faults += 1
          if len(frames) < frames_count:
              frames.append(page)
          else:
              lru_page = min(frames, key=lambda x: recent[x])
              frames[frames.index(lru_page)] = page

      recent[page] = i
      print(page, "	", frames)

  print("
Total Hits:", hits)
  print("Total Faults:", faults)
  print("Hit Ratio:", round(hits/len(pages),2))
  print("Fault Ratio:", round(faults/len(pages),2))`,java:`// LRU Page Replacement
  import java.util.*;

  public class Main {
      public static void main(String[] args) {

          int[] pages = {7,0,1,2,0,3,0,4,2,3,0,3,2};
          int framesCount = 3;

          List<Integer> frames = new ArrayList<>();
          Map<Integer,Integer> recent = new HashMap<>();

          int hits = 0, faults = 0;

          System.out.println("Page	Frames");

          for(int i=0;i<pages.length;i++){

              int page = pages[i];

              if(frames.contains(page)){
                  hits++;
              } else {
                  faults++;
                  if(frames.size() < framesCount){
                      frames.add(page);
                  } else {
                      int lruPage = frames.get(0);
                      int min = recent.get(lruPage);

                      for(int f : frames){
                          if(recent.get(f) < min){
                              min = recent.get(f);
                              lruPage = f;
                          }
                      }

                      frames.set(frames.indexOf(lruPage), page);
                  }
              }

              recent.put(page,i);

              System.out.print(page + "	");
              for(int f: frames) System.out.print(f + " ");
              System.out.println();
          }

          System.out.println("
Total Hits: " + hits);
          System.out.println("Total Faults: " + faults);
          System.out.printf("Hit Ratio: %.2f
", (double)hits/pages.length);
          System.out.printf("Fault Ratio: %.2f
", (double)faults/pages.length);
      }
  }`,cpp:`// LRU Page Replacement
  #include <iostream>
  #include <vector>
  #include <unordered_map>
  using namespace std;

  int main(){

      vector<int> pages = {7,0,1,2,0,3,0,4,2,3,0,3,2};
      int framesCount = 3;

      vector<int> frames;
      unordered_map<int,int> recent;

      int hits=0,faults=0;

      cout<<"Page	Frames
";

      for(int i=0;i<pages.size();i++){

          int page=pages[i];
          bool found=false;

          for(int f:frames)
              if(f==page){found=true;hits++;break;}

          if(!found){
              faults++;
              if(frames.size()<framesCount)
                  frames.push_back(page);
              else{
                  int lru=frames[0];
                  int min=recent[lru];
                  for(int f:frames)
                      if(recent[f]<min){min=recent[f];lru=f;}
                  frames[find(frames.begin(),frames.end(),lru)-frames.begin()]=page;
              }
          }

          recent[page]=i;

          cout<<page<<"	";
          for(int f:frames) cout<<f<<" ";
          cout<<endl;
      }

      cout<<"
Total Hits: "<<hits;
      cout<<"
Total Faults: "<<faults;
      cout<<"
Hit Ratio: "<<(double)hits/pages.size();
      cout<<"
Fault Ratio: "<<(double)faults/pages.size();
  }`,c:`// LRU Page Replacement
  #include <stdio.h>

  int main(){

      int pages[]={7,0,1,2,0,3,0,4,2,3,0,3,2};
      int n=13;
      int framesCount=3;

      int frames[3]={-1,-1,-1};
      int recent[100];
      int hits=0,faults=0;

      printf("Page	Frames
");

      for(int i=0;i<n;i++){

          int page=pages[i];
          int found=0;

          for(int j=0;j<framesCount;j++)
              if(frames[j]==page){found=1;hits++;break;}

          if(!found){
              faults++;
              int replaceIndex=-1;

              for(int j=0;j<framesCount;j++)
                  if(frames[j]==-1){replaceIndex=j;break;}

              if(replaceIndex==-1){
                  int min=1000;
                  for(int j=0;j<framesCount;j++)
                      if(recent[frames[j]]<min){
                          min=recent[frames[j]];
                          replaceIndex=j;
                      }
              }

              frames[replaceIndex]=page;
          }

          recent[page]=i;

          printf("%d	",page);
          for(int j=0;j<framesCount;j++)
              printf("%d ",frames[j]);
          printf("
");
      }

      printf("
Total Hits: %d",hits);
      printf("
Total Faults: %d",faults);
      printf("
Hit Ratio: %.2f",(float)hits/n);
      printf("
Fault Ratio: %.2f",(float)faults/n);

      return 0;
  }`}},optimal:{title:"Optimal Page Replacement",initials:"OP",description:`Optimal replaces the page that will not be used for the longest time in the future.

    Logic Steps:
    1. Maintain frames.
    2. For each page request:
      a. If page exists → HIT.
      b. If page does not exist → FAULT.
    3. If frames are full:
      - Look ahead in the reference string.
      - Replace the page whose next use is farthest in the future.
      - If a page is never used again, replace it immediately.
    4. Repeat for entire reference string.`,best:"Minimum possible page faults (theoretical best)",average:"Better than FIFO and LRU",worst:"Not practical (needs future knowledge)",space:"O(f)",code:{js:`// Optimal Page Replacement

  let pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
  let framesCount = 3;

  let frames = [];
  let hits = 0;
  let faults = 0;

  console.log("Page	Frames");

  for (let i = 0; i < pages.length; i++) {
      let page = pages[i];

      if (frames.includes(page)) {
          hits++;
      } else {
          faults++;

          if (frames.length < framesCount) {
              frames.push(page);
          } else {
              let farthest = -1;
              let replaceIndex = -1;

              for (let j = 0; j < frames.length; j++) {
                  let nextUse = pages.slice(i + 1).indexOf(frames[j]);

                  if (nextUse === -1) {
                      replaceIndex = j;
                      break;
                  }

                  if (nextUse > farthest) {
                      farthest = nextUse;
                      replaceIndex = j;
                  }
              }

              frames[replaceIndex] = page;
          }
      }

      console.log(page + "	" + frames.join(" "));
  }

  console.log("\\nTotal Hits: " + hits);
  console.log("Total Faults: " + faults);
  console.log("Hit Ratio: " + (hits / pages.length).toFixed(2));
  console.log("Fault Ratio: " + (faults / pages.length).toFixed(2));`,python:`# Optimal Page Replacement

  pages = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]
  frames_count = 3

  frames = []
  hits = 0
  faults = 0

  print("Page	Frames")

  for i in range(len(pages)):
      page = pages[i]

      if page in frames:
          hits += 1
      else:
          faults += 1

          if len(frames) < frames_count:
              frames.append(page)
          else:
              farthest = -1
              replace_index = -1

              for j in range(len(frames)):
                  try:
                      next_use = pages[i+1:].index(frames[j])
                  except ValueError:
                      replace_index = j
                      break

                  if next_use > farthest:
                      farthest = next_use
                      replace_index = j

              frames[replace_index] = page

      print(page, "	", frames)

  print("
Total Hits:", hits)
  print("Total Faults:", faults)
  print("Hit Ratio:", round(hits/len(pages),2))
  print("Fault Ratio:", round(faults/len(pages),2))`,java:`// Optimal Page Replacement
  import java.util.*;

  public class Main {
      public static void main(String[] args) {

          int[] pages = {7,0,1,2,0,3,0,4,2,3,0,3,2};
          int framesCount = 3;

          List<Integer> frames = new ArrayList<>();
          int hits = 0, faults = 0;

          System.out.println("Page	Frames");

          for(int i=0;i<pages.length;i++){

              int page = pages[i];

              if(frames.contains(page)){
                  hits++;
              } else {
                  faults++;

                  if(frames.size()<framesCount){
                      frames.add(page);
                  } else {

                      int farthest=-1;
                      int replaceIndex=-1;

                      for(int j=0;j<frames.size();j++){

                          int nextUse=-1;
                          for(int k=i+1;k<pages.length;k++){
                              if(pages[k]==frames.get(j)){
                                  nextUse=k;
                                  break;
                              }
                          }

                          if(nextUse==-1){
                              replaceIndex=j;
                              break;
                          }

                          if(nextUse>farthest){
                              farthest=nextUse;
                              replaceIndex=j;
                          }
                      }

                      frames.set(replaceIndex,page);
                  }
              }

              System.out.print(page+"	");
              for(int f:frames) System.out.print(f+" ");
              System.out.println();
          }

          System.out.println("
Total Hits: "+hits);
          System.out.println("Total Faults: "+faults);
          System.out.printf("Hit Ratio: %.2f
",(double)hits/pages.length);
          System.out.printf("Fault Ratio: %.2f
",(double)faults/pages.length);
      }
  }`,cpp:`// Optimal Page Replacement
  #include <iostream>
  #include <vector>
  using namespace std;

  int main(){

      vector<int> pages={7,0,1,2,0,3,0,4,2,3,0,3,2};
      int framesCount=3;

      vector<int> frames;
      int hits=0,faults=0;

      cout<<"Page	Frames
";

      for(int i=0;i<pages.size();i++){

          int page=pages[i];
          bool found=false;

          for(int f:frames)
              if(f==page){found=true;hits++;break;}

          if(!found){
              faults++;
              if(frames.size()<framesCount)
                  frames.push_back(page);
              else{

                  int farthest=-1,replaceIndex=-1;

                  for(int j=0;j<frames.size();j++){

                      int nextUse=-1;
                      for(int k=i+1;k<pages.size();k++)
                          if(pages[k]==frames[j]){
                              nextUse=k;
                              break;
                          }

                      if(nextUse==-1){
                          replaceIndex=j;
                          break;
                      }

                      if(nextUse>farthest){
                          farthest=nextUse;
                          replaceIndex=j;
                      }
                  }

                  frames[replaceIndex]=page;
              }
          }

          cout<<page<<"	";
          for(int f:frames) cout<<f<<" ";
          cout<<endl;
      }

      cout<<"
Total Hits: "<<hits;
      cout<<"
Total Faults: "<<faults;
      cout<<"
Hit Ratio: "<<(double)hits/pages.size();
      cout<<"
Fault Ratio: "<<(double)faults/pages.size();
  }`,c:`// Optimal Page Replacement
  #include <stdio.h>

  int main(){

      int pages[]={7,0,1,2,0,3,0,4,2,3,0,3,2};
      int n=13;
      int framesCount=3;

      int frames[3]={-1,-1,-1};
      int hits=0,faults=0;

      printf("Page	Frames
");

      for(int i=0;i<n;i++){

          int page=pages[i];
          int found=0;

          for(int j=0;j<framesCount;j++)
              if(frames[j]==page){found=1;hits++;break;}

          if(!found){
              faults++;
              int replaceIndex=-1;
              int farthest=-1;

              for(int j=0;j<framesCount;j++){

                  int nextUse=-1;
                  for(int k=i+1;k<n;k++)
                      if(pages[k]==frames[j]){
                          nextUse=k;
                          break;
                      }

                  if(nextUse==-1){
                      replaceIndex=j;
                      break;
                  }

                  if(nextUse>farthest){
                      farthest=nextUse;
                      replaceIndex=j;
                  }
              }

              frames[replaceIndex]=page;
          }

          printf("%d	",page);
          for(int j=0;j<framesCount;j++)
              printf("%d ",frames[j]);
          printf("
");
      }

      printf("
Total Hits: %d",hits);
      printf("
Total Faults: %d",faults);
      printf("
Hit Ratio: %.2f",(float)hits/n);
      printf("
Fault Ratio: %.2f",(float)faults/n);

      return 0;
  }`}}},f0=()=>{const[U,Rt]=Jt.useState(()=>localStorage.getItem("theme")||"light"),[H,v]=Jt.useState("home"),[F,dt]=Jt.useState(!0),Et=["#E53935","#00ACC1","#FFB300","#3949AB","#43A047","#8E24AA","#D81B60","#5D4037"],[k,L]=Jt.useState([{id:1,at:0,bt:5,color:Et[0]},{id:2,at:2,bt:3,color:Et[1]}]),[_,I]=Jt.useState([]),[X,nt]=Jt.useState([]),[Qt,pt]=Jt.useState(!1),[Lt,Qe]=Jt.useState("js"),[ne,Ne]=Jt.useState(!1),[Xt,ue]=Jt.useState("7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2"),[ce,ee]=Jt.useState(3),[ut,Vt]=Jt.useState([]),[le,Xe]=Jt.useState({faults:0,hits:0}),[ge,ae]=Jt.useState(["cpu"]),ke=p=>{ae(Q=>Q.includes(p)?Q.filter(B=>B!==p):[...Q,p])},we=()=>{const p=Fe[H]?.code?.[Lt];p&&(navigator.clipboard.writeText(p),Ne(!0),setTimeout(()=>Ne(!1),2e3))};Jt.useEffect(()=>{document.documentElement.setAttribute("data-theme",U),localStorage.setItem("theme",U)},[U]);const ve=()=>Rt(p=>p==="light"?"dark":"light"),x=()=>h.jsxs("div",{style:C.homeContainer,children:[h.jsxs("header",{style:C.homeHeader,children:[h.jsx("h1",{style:C.homeTitle,children:"OSAlgoViz"}),h.jsx("p",{style:C.homeSubtitle,children:"Master kernel-level logic with professional Gantt charts and real-time execution analytics."})]}),h.jsx("div",{style:C.homeGrid,children:Object.entries(Fe).map(([p,Q])=>h.jsxs("div",{style:C.algoCard,onClick:()=>v(p),children:[h.jsxs("div",{style:C.cardHeaderFlex,children:[h.jsx("div",{style:C.initialsIcon,children:Q.initials}),h.jsx("h3",{style:C.cardTitle,children:Q.title})]}),h.jsx("p",{style:C.cardDesc,children:Q.description}),h.jsx("div",{style:C.cardFooter,children:h.jsx("button",{style:C.cardBtn,children:"Explore Algorithm →"})})]},p))})]}),q=Im.useMemo(()=>{if(!Qt||_.length===0)return{awt:0,atat:0,throughput:0};const p=_.reduce((R,J)=>R+(J.wt||0),0),Q=_.reduce((R,J)=>R+(J.tat||0),0),B=X.length>0?X[X.length-1].end:1,T=(_.length/B).toFixed(3);return{awt:(p/_.length).toFixed(2),atat:(Q/_.length).toFixed(2),throughput:T}},[_,Qt,X]),K=()=>{if(k.length===0)return;let p=0;const Q=[],T=[...k].sort((R,J)=>R.at-J.at).map(R=>{p<R.at&&(Q.push({type:"idle",start:p,end:R.at}),p=R.at);const J=p,Y=J+R.bt,D=Y-R.at,tt=D-R.bt;return p=Y,Q.push({type:"proc",id:R.id,start:J,end:Y,color:R.color}),{...R,ct:Y,tat:D,wt:tt}});I(T),nt(Q),pt(!0)},Tt=()=>{if(k.length===0)return;let p=0,Q=0,B=k.length,T=k.map(D=>({...D})),R=Array(B).fill(!1),J=[],Y=[];for(;Q<B;){let D=-1,tt=1/0;for(let M=0;M<B;M++)T[M].at<=p&&!R[M]&&T[M].bt<tt&&(tt=T[M].bt,D=M);if(D===-1){let M=Math.min(...T.filter((lt,j)=>!R[j]).map(lt=>lt.at));J.push({type:"idle",start:p,end:M}),p=M;continue}const Z=T[D],E=p;Z.ct=E+Z.bt,Z.tat=Z.ct-Z.at,Z.wt=Z.tat-Z.bt,J.push({type:"proc",id:Z.id,start:E,end:Z.ct,color:Z.color}),p=Z.ct,R[D]=!0,Q++,Y.push(Z)}I(Y),nt(J),pt(!0)},[mt,o]=Jt.useState(2),z=()=>{let p=0,Q=0,B=k.length,T=[],R=k.map(E=>({...E})),J=R.map(E=>E.bt),Y=[],D=Array(B).fill(!1),tt=Array(B).fill(!1);const Z=()=>{[...R].map((M,lt)=>({...M,originalIdx:lt})).sort((M,lt)=>M.at-lt.at).forEach(M=>{M.at<=p&&!D[M.originalIdx]&&!tt[M.originalIdx]&&(Y.push(M.originalIdx),D[M.originalIdx]=!0)})};if(Z(),Y.length===0&&Q<B){let E=Math.min(...R.filter((M,lt)=>!tt[lt]).map(M=>M.at));T.push({type:"idle",start:p,end:E}),p=E,Z()}for(;Q<B;){if(Y.length===0){let lt=Math.min(...R.filter((j,Mt)=>!tt[Mt]).map(j=>j.at));T.push({type:"idle",start:p,end:lt}),p=lt,Z();continue}let E=Y.shift(),M=Math.min(J[E],mt);T.push({type:"proc",id:R[E].id,start:p,end:p+M,color:R[E].color}),p+=M,J[E]-=M,Z(),J[E]===0?(R[E].ct=p,R[E].tat=p-R[E].at,R[E].wt=R[E].tat-R[E].bt,tt[E]=!0,Q++):Y.push(E)}I(R),nt(T),pt(!0)},O=()=>{let p=0,Q=0,B=k.length,T=Array(B).fill(!1),R=[],J=[],Y=k.map(D=>({...D,priority:D.priority||1}));for(;Q<B;){let D=-1,tt=1/0;for(let M=0;M<B;M++)Y[M].at<=p&&!T[M]&&Y[M].priority<tt&&(tt=Y[M].priority,D=M);if(D===-1){let M=Math.min(...Y.filter((lt,j)=>!T[j]).map(lt=>lt.at));R.push({type:"idle",start:p,end:M}),p=M;continue}const Z=Y[D],E=p;Z.ct=E+Z.bt,Z.tat=Z.ct-Z.at,Z.wt=Z.tat-Z.bt,R.push({type:"proc",id:Z.id,start:E,end:Z.ct,color:Z.color}),p=Z.ct,T[D]=!0,Q++,J.push(Z)}I(J),nt(R),pt(!0)},w=()=>{if(k.length===0)return;let p=0,Q=0,B=k.length,T=k.map(D=>({...D})),R=T.map(D=>D.bt),J=Array(B).fill(!1),Y=[];for(;Q<B;){let D=-1,tt=1/0;for(let M=0;M<B;M++)T[M].at<=p&&!J[M]&&R[M]<tt&&(tt=R[M],D=M);if(D===-1){let M=Math.min(...T.filter((lt,j)=>!J[j]).map(lt=>lt.at));Y.push({type:"idle",start:p,end:M}),p=M;continue}const Z=T[D],E=p;R[D]--,p++,Y.length>0&&Y[Y.length-1].id===Z.id&&Y[Y.length-1].type==="proc"?Y[Y.length-1].end=p:Y.push({type:"proc",id:Z.id,start:E,end:p,color:Z.color}),R[D]===0&&(T[D].ct=p,T[D].tat=T[D].ct-T[D].at,T[D].wt=T[D].tat-T[D].bt,J[D]=!0,Q++)}I(T),nt(Y),pt(!0)},$=()=>{if(k.length===0)return;let p=0,Q=0,B=k.length,T=k.map(D=>({...D,priority:D.priority||1})),R=T.map(D=>D.bt),J=Array(B).fill(!1),Y=[];for(;Q<B;){let D=-1,tt=1/0;for(let M=0;M<B;M++)T[M].at<=p&&!J[M]&&T[M].priority<tt&&(tt=T[M].priority,D=M);if(D===-1){let M=T.filter((j,Mt)=>!J[Mt]),lt=Math.min(...M.map(j=>j.at));Y.push({type:"idle",start:p,end:lt}),p=lt;continue}const Z=T[D],E=p;R[D]--,p++,Y.length>0&&Y[Y.length-1].id===Z.id&&Y[Y.length-1].type==="proc"?Y[Y.length-1].end=p:Y.push({type:"proc",id:Z.id,start:E,end:p,color:Z.color}),R[D]===0&&(T[D].ct=p,T[D].tat=T[D].ct-T[D].at,T[D].wt=T[D].tat-T[D].bt,J[D]=!0,Q++)}I(T),nt(Y),pt(!0)},it=()=>{if(k.length===0)return;let p=0,Q=0,B=k.length,T=k.map(E=>({...E,priority:E.priority||1})),R=T.map(E=>E.bt),J=Array(B).fill(!1),Y=Array(B).fill(!1),D=[],tt=[];const Z=()=>{T.forEach((E,M)=>{E.at<=p&&E.priority===1&&!J[M]&&!Y[M]&&(D.push(M),Y[M]=!0)})};for(;Q<B;)if(Z(),D.length>0){let E=D.shift(),M=Math.min(R[E],mt);tt.push({type:"proc",id:T[E].id,start:p,end:p+M,color:T[E].color}),p+=M,R[E]-=M,Z(),R[E]===0?(T[E].ct=p,T[E].tat=p-T[E].at,T[E].wt=T[E].tat-T[E].bt,J[E]=!0,Q++):D.push(E)}else{let E=-1,M=1/0;if(T.forEach((lt,j)=>{lt.at<=p&&lt.priority>1&&!J[j]&&lt.at<M&&(M=lt.at,E=j)}),E!==-1){let lt=p;p++,R[E]--,tt.length>0&&tt[tt.length-1].id===T[E].id&&tt[tt.length-1].type==="proc"?tt[tt.length-1].end=p:tt.push({type:"proc",id:T[E].id,start:lt,end:p,color:T[E].color}),R[E]===0&&(T[E].ct=p,T[E].tat=p-T[E].at,T[E].wt=T[E].tat-T[E].bt,J[E]=!0,Q++)}else{let lt=T.filter((j,Mt)=>!J[Mt]);if(lt.length>0){let j=Math.min(...lt.map(Mt=>Mt.at));tt.push({type:"idle",start:p,end:j}),p=j}else break}}I(T),nt(tt),pt(!0)},ht=()=>{if(k.length===0)return;let p=0,Q=0,B=k.length,T=k.map(j=>({...j})),R=T.map(j=>j.bt),J=Array(B).fill(!1),Y=Array(B).fill(!1),D=[],tt=[],Z=[],E=[];const M=mt*2,lt=()=>{T.forEach((j,Mt)=>{j.at<=p&&!J[Mt]&&!Y[Mt]&&(D.push(Mt),Y[Mt]=!0)})};for(;Q<B;)if(lt(),D.length>0){let j=D.shift(),Mt=Math.min(R[j],mt);E.push({type:"proc",id:T[j].id,start:p,end:p+Mt,color:T[j].color}),p+=Mt,R[j]-=Mt,lt(),R[j]===0?(T[j].ct=p,T[j].tat=p-T[j].at,T[j].wt=T[j].tat-T[j].bt,J[j]=!0,Q++):tt.push(j)}else if(tt.length>0){let j=tt.shift(),Mt=Math.min(R[j],M),Ze=0;for(;Ze<Mt&&(Ze++,p++,R[j]--,lt(),E.length>0&&E[E.length-1].id===T[j].id?E[E.length-1].end=p:E.push({type:"proc",id:T[j].id,start:p-1,end:p,color:T[j].color}),!(D.length>0||R[j]===0)););R[j]===0?(T[j].ct=p,T[j].tat=p-T[j].at,T[j].wt=T[j].tat-T[j].bt,J[j]=!0,Q++):Ze===M?Z.push(j):tt.unshift(j)}else if(Z.length>0){let j=Z.shift();p++,R[j]--,lt(),E.length>0&&E[E.length-1].id===T[j].id?E[E.length-1].end=p:E.push({type:"proc",id:T[j].id,start:p-1,end:p,color:T[j].color}),R[j]===0?(T[j].ct=p,T[j].tat=p-T[j].at,T[j].wt=T[j].tat-T[j].bt,J[j]=!0,Q++):Z.unshift(j)}else{let j=T.filter((Mt,Ze)=>!J[Ze]);if(j.length>0){let Mt=Math.min(...j.map(Ze=>Ze.at));E.push({type:"idle",start:p,end:Mt}),p=Mt}else break}I(T),nt(E),pt(!0)},Ft=()=>{const p=Xt.split(",").map(Y=>Y.trim()).filter(Y=>Y!==""),Q=parseInt(ce);let B=[],T=[],R=0,J=0;p.forEach((Y,D)=>{let tt=B.includes(Y);if(tt)J++,H==="lru"&&(B=B.filter(Z=>Z!==Y),B.push(Y));else if(R++,B.length<Q)B.push(Y);else if(H==="fifo")B.shift(),B.push(Y);else if(H==="lru")B.shift(),B.push(Y);else if(H==="optimal"){let Z=-1,E=0;for(let M=0;M<B.length;M++){let lt=p.slice(D+1).indexOf(B[M]);if(lt===-1){E=M;break}lt>Z&&(Z=lt,E=M)}B[E]=Y}T.push({page:Y,memory:[...B],isHit:tt})}),Vt(T),Xe({faults:R,hits:J}),pt(!0)},Ot=()=>{const p=Math.floor(Math.random()*11)+10,B=Array.from({length:p},()=>Math.floor(Math.random()*10)).join(", ");ue(B),pt(!1)},Yl=()=>{const p=Math.floor(Math.random()*3)+3,Q=Array.from({length:p},(B,T)=>({id:T+1,at:Math.floor(Math.random()*10),bt:Math.floor(Math.random()*10)+1,priority:H==="priority"||H==="preemptivePriority"||H==="mlq"?Math.floor(Math.random()*5)+1:void 0,color:Et[T%8]}));L(Q),I([]),pt(!1),nt([])};return h.jsxs("div",{style:C.layout,children:[h.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:wght@100..900&display=swap');
      `}),h.jsxs("aside",{className:"sidebar",style:{...C.sidebar,width:F?"320px":"85px"},children:[h.jsxs("div",{style:C.sidebarHeader,onClick:()=>v("home"),children:[h.jsx("div",{style:{...C.logoBox,backgroundColor:"var(--blue-orange)"},children:h.jsx("span",{style:{color:"#ffffff",fontWeight:"900"},children:"OS"})}),F&&h.jsx("span",{style:C.logoText,children:"OSAlgoViz"})]}),h.jsx("nav",{className:"nav-list",children:c0.map(p=>{const Q=p.items.includes(H);return h.jsxs("div",{className:"nav-section",children:[F?h.jsxs("div",{className:`section-header ${Q?"active":""}`,onClick:()=>ke(p.id),children:[h.jsx("span",{children:p.label}),h.jsx("span",{style:{fontSize:"10px"},children:ge.includes(p.id)?"▼":"▶"})]}):h.jsx("div",{className:"section-divider"}),(ge.includes(p.id)||!F)&&p.items.map(B=>h.jsxs("div",{className:`nav-item ${H===B?"active":""}`,onClick:()=>{v(B),pt(!1),I&&I([]),nt&&nt([]),Vt&&Vt([]),Xe&&Xe({faults:0,hits:0})},children:[h.jsx("div",{className:"nav-initials",children:Fe[B]?.initials||"??"}),F&&h.jsx("span",{className:"nav-label",children:Fe[B]?.title||B})]},B))]},p.id)})}),h.jsx("button",{style:{...C.collapseBtn,borderTop:"1px solid var(--border-subtle)"},onClick:()=>dt(!F),children:F?"← Collapse":"→"})]}),h.jsxs("main",{style:C.content,children:[h.jsx("div",{style:C.topActions,children:h.jsx("button",{onClick:ve,style:C.themeToggle,children:U==="light"?"🌙":"☀️"})}),H==="home"?h.jsx(x,{}):h.jsxs("div",{style:C.vizPage,children:[h.jsxs("div",{style:C.vizHeader,children:[h.jsxs("div",{children:[h.jsx("h2",{style:{...C.homeTitle,fontSize:"40px",margin:0},children:Fe[H].title}),h.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"14px",marginTop:"4px"},children:["Simulation Status: ",Qt?"Completed":"Modified"]})]}),h.jsx("div",{style:C.vizActions,children:["fifo","lru","optimal"].includes(H)?h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[h.jsx("small",{style:C.miniLabel,children:"REF STRING:"}),h.jsx("input",{style:{...C.tableInput,width:"200px"},value:Xt,onChange:p=>{ue(p.target.value),pt(!1)}})]}),h.jsxs("button",{onClick:Ot,style:{backgroundColor:"var(--surface)",border:"1px solid var(--border-subtle)",color:"var(--text-primary)",padding:"8px 12px",borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontWeight:"bold",display:"flex",alignItems:"center",gap:"6px",transition:"all 0.2s",marginTop:20},onMouseOver:p=>p.target.style.backgroundColor="var(--nav-key-wholebg)",onMouseOut:p=>p.target.style.backgroundColor="var(--surface-muted)",children:[h.jsx("span",{children:"🎲"})," Randomize"]}),h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[h.jsx("small",{style:C.miniLabel,children:"FRAMES:"}),h.jsx("input",{type:"number",style:{...C.tableInput,width:"60px"},value:ce,onChange:p=>{ee(p.target.value),pt(!1)}})]}),h.jsx("button",{style:{...C.btnPlay,backgroundColor:"var(--blue-orange)",marginTop:"18px"},onClick:Ft,children:"RUN SIMULATION"})]}):h.jsxs(h.Fragment,{children:[(H==="rr"||H==="mlq"||H==="mlfq")&&h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginRight:"10px"},children:[h.jsx("small",{style:{fontWeight:"bold",fontSize:"11px",color:"var(--text-secondary)"},children:"QUANTUM:"}),h.jsx("input",{type:"number",value:mt,onChange:p=>o(parseInt(p.target.value)||1),style:C.tableInput})]}),h.jsx("button",{style:{...C.btnPlay,backgroundColor:"var(--blue-orange)"},onClick:()=>{H==="fcfs"?K():H==="sjf"?Tt():H==="rr"?z():H==="priority"?O():H==="srtf"?w():H==="preemptivePriority"?$():H==="mlq"?it():H==="mlfq"&&ht()},children:"RUN SIMULATION"}),h.jsx("button",{style:C.btnAdd,onClick:Yl,children:"🎲 Randomize"}),h.jsx("button",{style:C.btnAdd,onClick:()=>{const p=k.length>0?Math.max(...k.map(Q=>Q.id))+1:1;L([...k,{id:p,at:0,bt:1,color:Et[p%8]}]),pt(!1)},children:"+"}),h.jsx("button",{style:C.btnClear,onClick:()=>{L([]),I([]),pt(!1),nt([])},children:"Clear"})]})})]}),h.jsx("div",{style:{...C.vizCanvas,backgroundColor:"var(--surface)",borderColor:"var(--border-subtle)"},children:["fifo","lru","optimal"].includes(H)?Qt?h.jsxs("table",{style:C.processTable,children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{style:C.th,children:"Step"}),h.jsx("th",{style:C.th,children:"Page"}),[...Array(parseInt(ce))].map((p,Q)=>h.jsxs("th",{style:C.th,children:["Frame ",Q+1]},Q)),h.jsx("th",{style:C.th,children:"Status"})]})}),h.jsx("tbody",{children:ut.map((p,Q)=>h.jsxs("tr",{children:[h.jsx("td",{style:C.td,children:Q+1}),h.jsx("td",{style:{...C.td,fontWeight:"800"},children:p.page}),[...Array(parseInt(ce))].map((B,T)=>h.jsx("td",{style:{...C.td,backgroundColor:p.memory[T]===p.page?"var(--nav-key-wholebg)":"transparent",color:p.memory[T]===p.page?"var(--blue-orange)":"inherit",fontWeight:p.memory[T]===p.page?"800":"400"},children:p.memory[T]??"-"},T)),h.jsx("td",{style:C.td,children:h.jsx("span",{style:{fontSize:"11px",fontWeight:"800",padding:"4px 8px",borderRadius:"6px",backgroundColor:p.isHit?"rgba(16,185,129,0.1)":"rgba(239,68,68,0.1)",color:p.isHit?"#10b981":"#ef4444"},children:p.isHit?"HIT":"FAULT"})})]},Q))})]}):h.jsx("div",{style:{textAlign:"center",padding:"100px",color:"var(--text-secondary)"},children:"Configure your reference string and frames, then click RUN."}):k.length===0?h.jsx("div",{style:{textAlign:"center",marginTop:"100px",color:"var(--text-secondary)"},children:"Your process queue is empty."}):h.jsxs(h.Fragment,{children:[h.jsxs("table",{style:C.processTable,children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{style:C.th,children:"PID"}),h.jsx("th",{style:C.th,children:"Arrival"}),h.jsx("th",{style:C.th,children:"Burst"}),(H==="priority"||H==="preemptivePriority"||H==="mlq")&&h.jsx("th",{style:C.th,children:"Prio"}),h.jsx("th",{style:C.th,children:"CT"}),h.jsx("th",{style:C.th,children:"TAT"}),h.jsx("th",{style:C.th,children:"WT"})]})}),h.jsx("tbody",{children:k.map((p,Q)=>{const B=_.find(T=>T.id===p.id)||{};return h.jsxs("tr",{children:[h.jsx("td",{style:C.td,children:h.jsxs("span",{style:{...C.pTag,backgroundColor:p.color},children:["P",p.id]})}),h.jsx("td",{style:C.td,children:h.jsx("input",{type:"number",value:p.at,onChange:T=>{const R=[...k];R[Q].at=parseInt(T.target.value)||0,L(R),pt(!1)},style:C.tableInput})}),h.jsx("td",{style:C.td,children:h.jsx("input",{type:"number",value:p.bt,onChange:T=>{const R=[...k];R[Q].bt=parseInt(T.target.value)||1,L(R),pt(!1)},style:C.tableInput})}),(H==="priority"||H==="preemptivePriority"||H==="mlq")&&h.jsx("td",{style:C.td,children:h.jsx("input",{type:"number",value:p.priority||1,onChange:T=>{const R=[...k];R[Q].priority=parseInt(T.target.value)||1,L(R),pt(!1)},style:C.tableInput})}),h.jsx("td",{style:C.td,children:B.ct??"-"}),h.jsx("td",{style:C.td,children:B.tat??"-"}),h.jsx("td",{style:C.td,children:B.wt??"-"})]},p.id)})})]}),Qt&&X.length>0&&h.jsxs("div",{style:{marginTop:"40px",paddingBottom:"30px"},children:[h.jsx("p",{style:{fontSize:"11px",fontWeight:"800",color:"var(--text-secondary)",marginBottom:"15px",letterSpacing:"1px"},children:"GANTT CHART ANALYSIS"}),h.jsx("div",{style:C.ganttContainer,children:X.map((p,Q)=>h.jsxs("div",{style:{...C.ganttBlock,flexGrow:p.end-p.start||.1,backgroundColor:p.type==="idle"?"var(--surface-muted)":p.color,borderRight:Q!==X.length-1?"1px solid rgba(255,255,255,0.1)":"none"},children:[p.type==="proc"?`P${p.id}`:"",h.jsx("span",{style:C.ganttTimeLeft,children:p.start}),Q===X.length-1&&h.jsx("span",{style:C.ganttTimeRight,children:p.end})]},Q))})]})]})}),h.jsx("div",{style:{marginTop:"32px",display:"flex",gap:"20px"},children:["fifo","lru","optimal"].includes(H)?h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:C.compCard,children:[h.jsx("small",{style:{color:"var(--text-secondary)",fontWeight:"800"},children:"TOTAL FAULTS"}),h.jsx("h4",{style:{fontSize:"28px",color:"#ef4444",margin:"8px 0 0 0"},children:le.faults})]}),h.jsxs("div",{style:C.compCard,children:[h.jsx("small",{style:{color:"var(--text-secondary)",fontWeight:"800"},children:"TOTAL HITS"}),h.jsx("h4",{style:{fontSize:"28px",color:"#10b981",margin:"8px 0 0 0"},children:le.hits})]}),h.jsxs("div",{style:C.compCard,children:[h.jsx("small",{style:{color:"var(--text-secondary)",fontWeight:"800"},children:"HIT RATIO"}),h.jsxs("h4",{style:{fontSize:"28px",color:"var(--blue-orange)",margin:"8px 0 0 0"},children:[Qt?(le.hits/(le.hits+le.faults)*100).toFixed(2):0,"%"]})]})]}):h.jsxs(h.Fragment,{children:[h.jsxs("div",{style:C.compCard,children:[h.jsx("small",{style:{color:"var(--text-secondary)",fontWeight:"800"},children:"AVG WAITING TIME"}),h.jsxs("h4",{style:{fontSize:"28px",color:"var(--blue-orange)",margin:"8px 0 0 0"},children:[q.awt,"ms"]})]}),h.jsxs("div",{style:C.compCard,children:[h.jsx("small",{style:{color:"var(--text-secondary)",fontWeight:"800"},children:"AVG TURNAROUND TIME"}),h.jsxs("h4",{style:{fontSize:"28px",color:"var(--blue-orange)",margin:"8px 0 0 0"},children:[q.atat,"ms"]})]}),h.jsxs("div",{style:C.compCard,children:[h.jsx("small",{style:{color:"var(--text-secondary)",fontWeight:"800"},children:"THROUGHPUT"}),h.jsxs("h4",{style:{fontSize:"28px",color:"var(--blue-orange)",margin:"8px 0 0 0"},children:[q.throughput," ",h.jsx("span",{style:{fontSize:"12px"},children:"p/ms"})]})]})]})}),h.jsxs("div",{style:C.detailsGrid,children:[h.jsxs("div",{style:C.infoCol,children:[h.jsx("h3",{style:C.sectionHeader,children:"Algorithm Logic"}),h.jsx("p",{style:C.infoText,children:Fe[H].description}),h.jsxs("div",{style:{marginTop:"24px"},children:[h.jsxs("p",{style:C.compDetail,children:[h.jsx("strong",{children:"Best Case:"})," ",Fe[H].best]}),h.jsxs("p",{style:C.compDetail,children:[h.jsx("strong",{children:"Worst Case:"})," ",Fe[H].worst]}),h.jsxs("p",{style:C.compDetail,children:[h.jsx("strong",{children:"Space Complexity:"})," ",Fe[H].space]})]})]}),h.jsxs("div",{style:C.codeCol,children:[h.jsxs("div",{style:C.codeHeader,children:[h.jsx("h3",{style:{...C.sectionHeader,marginBottom:0},children:"Source Code Library"}),h.jsxs("div",{style:{display:"flex",gap:"10px"},children:[h.jsxs("select",{style:C.langSelect,value:Lt,onChange:p=>Qe(p.target.value),children:[h.jsx("option",{value:"js",children:"JavaScript"}),h.jsx("option",{value:"python",children:"Python"}),h.jsx("option",{value:"java",children:"Java"}),h.jsx("option",{value:"c",children:"C Language"}),h.jsx("option",{value:"cpp",children:"Cpp"})]}),h.jsx("button",{style:C.btnCopy,onClick:we,children:ne?"✓ Copied":"Copy Code"})]})]}),h.jsx("div",{className:"code-scroll-container",style:{...C.codeWrapper,maxHeight:"550px",overflowY:"auto"},children:h.jsx("pre",{style:C.pre,children:h.jsx("code",{children:Fe[H].code?.[Lt]||"// Implementation pending..."})})})]})]})]})]})]})},C={layout:{display:"flex",minHeight:"100vh",width:"100vw"},sidebar:{backgroundColor:"var(--surface)",borderRight:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",position:"sticky",top:0,height:"100vh",zIndex:100,transition:"width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",overflowX:"hidden"},sidebarHeader:{padding:"32px 20px",display:"flex",alignItems:"center",gap:"16px",cursor:"pointer"},logoBox:{width:"32px",height:"32px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",flexShrink:0},logoText:{fontWeight:"800",fontSize:"18px",letterSpacing:"-0.5px",color:"var(--text-primary)"},collapseBtn:{padding:"24px",background:"none",border:"none",fontWeight:"bold",fontSize:"12px",cursor:"pointer",color:"var(--text-secondary)",marginTop:"auto"},content:{flex:1,padding:"40px",overflowY:"auto"},topActions:{display:"flex",justifyContent:"flex-end",marginBottom:"24px"},themeToggle:{background:"none",border:"none",width:"42px",height:"42px",borderRadius:"12px",cursor:"pointer",fontSize:"24px",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--text-primary)",transition:"transform 0.2s ease",outline:"none"},homeContainer:{maxWidth:"1100px",margin:"0 auto"},homeHeader:{marginBottom:"60px"},homeTitle:{fontSize:"56px",fontWeight:"800",letterSpacing:"-2px",marginBottom:"16px",color:"var(--text-primary)"},homeSubtitle:{color:"var(--text-secondary)",fontSize:"20px",maxWidth:"700px",lineHeight:"1.5"},homeGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"30px",marginTop:"40px"},algoCard:{backgroundColor:"var(--surface)",border:"1px solid var(--border-subtle)",borderRadius:"24px",padding:"32px",cursor:"pointer",transition:"0.3s"},cardHeaderFlex:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"20px"},initialsIcon:{width:"48px",height:"48px",minWidth:"48px",minHeight:"48px",flexShrink:0,borderRadius:"12px",backgroundColor:"var(--surface-muted)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",fontWeight:"800",color:"var(--blue-orange)",border:"1px solid var(--border-subtle)",boxSizing:"border-box"},cardTitle:{fontSize:"24px",fontWeight:"700",color:"var(--text-primary)"},cardDesc:{color:"var(--text-secondary)",fontSize:"15px",lineHeight:"1.6",marginBottom:"24px",height:"72px",overflow:"hidden"},cardFooter:{borderTop:"1px solid var(--border-subtle)",paddingTop:"20px",marginTop:"20px"},cardBtn:{background:"none",border:"none",color:"var(--blue-orange)",fontWeight:"700",fontSize:"14px",cursor:"pointer"},vizHeader:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"32px"},vizActions:{display:"flex",gap:"12px"},btnPlay:{border:"none",color:"white",padding:"10px 24px",borderRadius:"10px",fontWeight:"800",cursor:"pointer"},processTable:{width:"100%",borderCollapse:"collapse",textAlign:"left",fontSize:"14px",marginTop:"20px"},th:{padding:"12px",borderBottom:"1px solid var(--border-subtle)",color:"var(--text-secondary)",fontWeight:"800"},td:{padding:"12px",borderBottom:"1px solid var(--border-subtle)"},ganttContainer:{display:"flex",height:"52px",borderRadius:"10px",overflow:"visible",position:"relative",marginTop:"20px",border:"1px solid var(--border-subtle)"},ganttBlock:{display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"800",fontSize:"13px",position:"relative",minWidth:"30px",transition:"all 0.3s ease"},ganttTimeLeft:{position:"absolute",bottom:"-24px",left:"0",fontSize:"11px",fontWeight:"700",color:"var(--text-secondary)",fontFamily:"monospace"},ganttTimeRight:{position:"absolute",bottom:"-24px",right:"0",fontSize:"11px",fontWeight:"700",color:"var(--text-secondary)",fontFamily:"monospace"},vizPage:{maxWidth:"1200px",margin:"0 auto"},vizCanvas:{border:"1px solid",borderRadius:"24px",minHeight:"400px",padding:"32px",marginTop:"20px"},btnAdd:{padding:"10px 20px",borderRadius:"10px",border:"1px solid var(--border-subtle)",cursor:"pointer",background:"var(--surface)",fontWeight:"700",color:"var(--text-primary)"},btnClear:{background:"none",border:"none",color:"#f43f5e",fontWeight:"700",cursor:"pointer",fontSize:"13px"},pTag:{padding:"4px 10px",borderRadius:"6px",color:"white",fontWeight:"800",fontSize:"12px"},tableInput:{width:"70px",padding:"10px",border:"1px solid var(--border-subtle)",borderRadius:"8px",background:"var(--bg-main)",color:"var(--text-primary)",textAlign:"center",fontWeight:"600",transition:"all 0.2s ease"},compCard:{flex:1,padding:"24px",borderRadius:"20px",backgroundColor:"var(--surface-muted)",border:"1px solid var(--border-subtle)",display:"flex",flexDirection:"column",gap:"4px"},detailsGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px",marginTop:"48px",paddingBottom:"60px"},infoCol:{display:"flex",flexDirection:"column"},sectionHeader:{fontSize:"24px",fontWeight:"800",color:"var(--text-primary)",marginBottom:"16px"},infoText:{fontSize:"16px",lineHeight:"1.8",color:"var(--text-secondary)",whiteSpace:"pre-line"},compDetail:{fontSize:"14px",color:"var(--text-primary)",marginBottom:"8px"},codeHeader:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"24px"},langSelect:{padding:"8px 12px",borderRadius:"10px",border:"1px solid var(--border-subtle)",background:"var(--bg-main)",color:"var(--text-primary)",fontSize:"13px",fontWeight:"600"},btnCopy:{padding:"8px 16px",borderRadius:"10px",border:"1px solid var(--blue-orange)",background:"none",color:"var(--blue-orange)",fontSize:"13px",fontWeight:"700",cursor:"pointer"},codeCol:{backgroundColor:"var(--surface)",border:"1px solid var(--border-subtle)",borderRadius:"24px",padding:"28px",display:"flex",flexDirection:"column",minWidth:0},codeWrapper:{backgroundColor:"var(--bg-main)",borderRadius:"16px",border:"1px solid var(--border-subtle)",overflow:"hidden",display:"block"},pre:{padding:"24px",margin:0,overflowX:"auto",fontSize:"13px",lineHeight:"1.6",color:"var(--text-secondary)",fontFamily:"monospace",whiteSpace:"pre",wordBreak:"normal",wordWrap:"normal"}};u0.createRoot(document.getElementById("root")).render(h.jsx(Jt.StrictMode,{children:h.jsx(f0,{})}));
