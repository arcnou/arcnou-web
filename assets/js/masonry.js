!function(){var e=null;window.PR_SHOULD_USE_CONTINUATION=!0,function(){function t(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=u[n])?t:n>="0"&&"7">=n?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){return 32>e?(16>e?"\\x0":"\\x")+e.toString(16):(e=String.fromCharCode(e),"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e)}function a(e){var a=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],r="^"===a[0],i=["["];r&&i.push("^");for(var r=r?1:0,s=a.length;s>r;++r){var o=a[r];if(/\\[bdsw]/i.test(o))i.push(o);else{var l,o=t(o);s>r+2&&"-"===a[r+1]?(l=t(a[r+2]),r+=2):l=o,e.push([o,l]),65>l||o>122||(65>l||o>90||e.push([32|Math.max(65,o),32|Math.min(l,90)]),97>l||o>122||e.push([-33&Math.max(97,o),-33&Math.min(l,122)]))}}for(e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]}),a=[],s=[],r=0;r<e.length;++r)o=e[r],o[0]<=s[1]+1?s[1]=Math.max(s[1],o[1]):a.push(s=o);for(r=0;r<a.length;++r)o=a[r],i.push(n(o[0])),o[1]>o[0]&&(o[1]+1>o[0]&&i.push("-"),i.push(n(o[1])));return i.push("]"),i.join("")}function r(e){for(var t=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),r=t.length,o=[],l=0,c=0;r>l;++l){var d=t[l];"("===d?++c:"\\"===d.charAt(0)&&(d=+d.substring(1))&&(c>=d?o[d]=-1:t[l]=n(d))}for(l=1;l<o.length;++l)-1===o[l]&&(o[l]=++i);for(c=l=0;r>l;++l)d=t[l],"("===d?(++c,o[c]||(t[l]="(?:")):"\\"===d.charAt(0)&&(d=+d.substring(1))&&c>=d&&(t[l]="\\"+o[d]);for(l=0;r>l;++l)"^"===t[l]&&"^"!==t[l+1]&&(t[l]="");if(e.ignoreCase&&s)for(l=0;r>l;++l)d=t[l],e=d.charAt(0),d.length>=2&&"["===e?t[l]=a(d):"\\"!==e&&(t[l]=d.replace(/[A-Za-z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(-33&e,32|e)+"]"}));return t.join("")}for(var i=0,s=!1,o=!1,l=0,c=e.length;c>l;++l){var d=e[l];if(d.ignoreCase)o=!0;else if(/[a-z]/i.test(d.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0,o=!1;break}}for(var u={b:8,t:9,n:10,v:11,f:12,r:13},p=[],l=0,c=e.length;c>l;++l){if(d=e[l],d.global||d.multiline)throw Error(""+d);p.push("(?:"+r(d)+")")}return RegExp(p.join("|"),o?"gi":"g")}function n(e,t){function n(e){var l=e.nodeType;if(1==l){if(!a.test(e.className)){for(l=e.firstChild;l;l=l.nextSibling)n(l);l=e.nodeName.toLowerCase(),("br"===l||"li"===l)&&(r[o]="\n",s[o<<1]=i++,s[1|o++<<1]=e)}}else(3==l||4==l)&&(l=e.nodeValue,l.length&&(l=t?l.replace(/\r\n?/g,"\n"):l.replace(/[\t\n\r ]+/g," "),r[o]=l,s[o<<1]=i,i+=l.length,s[1|o++<<1]=e))}var a=/(?:^|\s)nocode(?:\s|$)/,r=[],i=0,s=[],o=0;return n(e),{a:r.join("").replace(/\n$/,""),d:s}}function a(e,t,n,a){t&&(e={a:t,e:e},n(e),a.push.apply(a,e.g))}function r(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling)var a=n.nodeType,t=1===a?t?e:n:3===a?N.test(n.nodeValue)?e:t:t;return t===e?void 0:t}function i(n,r){function i(e){for(var t=e.e,n=[t,"pln"],d=0,u=e.a.match(s)||[],p={},f=0,g=u.length;g>f;++f){var m,h=u[f],y=p[h],v=void 0;if("string"==typeof y)m=!1;else{var w=o[h.charAt(0)];if(w)v=h.match(w[1]),y=w[0];else{for(m=0;l>m;++m)if(w=r[m],v=h.match(w[1])){y=w[0];break}v||(y="pln")}!(m=y.length>=5&&"lang-"===y.substring(0,5))||v&&"string"==typeof v[1]||(m=!1,y="src"),m||(p[h]=y)}if(w=d,d+=h.length,m){m=v[1];var b=h.indexOf(m),N=b+m.length;v[2]&&(N=h.length-v[2].length,b=N-m.length),y=y.substring(5),a(t+w,h.substring(0,b),i,n),a(t+w+b,m,c(y,m),n),a(t+w+N,h.substring(N),i,n)}else n.push(t+w,y)}e.g=n}var s,o={};!function(){for(var a=n.concat(r),i=[],l={},c=0,d=a.length;d>c;++c){var u=a[c],p=u[3];if(p)for(var f=p.length;--f>=0;)o[p.charAt(f)]=u;u=u[1],p=""+u,l.hasOwnProperty(p)||(i.push(u),l[p]=e)}i.push(/[\S\s]/),s=t(i)}();var l=r.length;return i}function s(t){var n=[],a=[];t.tripleQuotedStrings?n.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,e,"'\""]):t.multiLineStrings?n.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,e,"'\"`"]):n.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,e,"\"'"]),t.verbatimStrings&&a.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,e]);var r=t.hashComments;if(r&&(t.cStyleComments?(r>1?n.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,e,"#"]):n.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,e,"#"]),a.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,e])):n.push(["com",/^#[^\n\r]*/,e,"#"])),t.cStyleComments&&(a.push(["com",/^\/\/[^\n\r]*/,e]),a.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,e])),r=t.regexLiterals){var s=(r=r>1?"":"\n\r")?".":"[\\S\\s]";a.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+r+"])(?:[^/\\x5B\\x5C"+r+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+r+"]|\\x5C"+s+")*(?:\\x5D|$))+/")+")")])}return(r=t.types)&&a.push(["typ",r]),r=(""+t.keywords).replace(/^ | $/g,""),r.length&&a.push(["kwd",RegExp("^(?:"+r.replace(/[\s,]+/g,"|")+")\\b"),e]),n.push(["pln",/^\s+/,e," \r\n	Â "]),r="^.[^\\s\\w.$@'\"`/\\\\]*",t.regexLiterals&&(r+="(?!s*/)"),a.push(["lit",/^@[$_a-z][\w$@]*/i,e],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,e],["pln",/^[$_a-z][\w$@]*/i,e],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,e,"0123456789"],["pln",/^\\[\S\s]?/,e],["pun",RegExp(r),e]),i(n,a)}function o(e,t,n){function a(e){var t=e.nodeType;if(1!=t||i.test(e.className)){if((3==t||4==t)&&n){var l=e.nodeValue,c=l.match(s);c&&(t=l.substring(0,c.index),e.nodeValue=t,(l=l.substring(c.index+c[0].length))&&e.parentNode.insertBefore(o.createTextNode(l),e.nextSibling),r(e),t||e.parentNode.removeChild(e))}}else if("br"===e.nodeName)r(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)a(e)}function r(e){function t(e,n){var a=n?e.cloneNode(!1):e,r=e.parentNode;if(r){var r=t(r,1),i=e.nextSibling;r.appendChild(a);for(var s=i;s;s=i)i=s.nextSibling,r.appendChild(s)}return a}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var n,e=t(e.nextSibling,0);(n=e.parentNode)&&1===n.nodeType;)e=n;c.push(e)}for(var i=/(?:^|\s)nocode(?:\s|$)/,s=/\r\n?|\n/,o=e.ownerDocument,l=o.createElement("li");e.firstChild;)l.appendChild(e.firstChild);for(var c=[l],d=0;d<c.length;++d)a(c[d]);t===(0|t)&&c[0].setAttribute("value",t);var u=o.createElement("ol");u.className="linenums";for(var t=Math.max(0,0|t-1)||0,d=0,p=c.length;p>d;++d)l=c[d],l.className="L"+(d+t)%10,l.firstChild||l.appendChild(o.createTextNode("Â ")),u.appendChild(l);e.appendChild(u)}function l(e,t){for(var n=t.length;--n>=0;){var a=t[n];S.hasOwnProperty(a)?u.console&&console.warn("cannot override language handler %s",a):S[a]=e}}function c(e,t){return e&&S.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),S[e]}function d(e){var t=e.h;try{var a=n(e.c,e.i),r=a.a;e.a=r,e.d=a.d,e.e=0,c(t,r)(e);var i=/\bMSIE\s(\d+)/.exec(navigator.userAgent),i=i&&+i[1]<=8,t=/\n/g,s=e.a,o=s.length,a=0,l=e.d,d=l.length,r=0,p=e.g,f=p.length,g=0;p[f]=o;var m,h;for(h=m=0;f>h;)p[h]!==p[h+2]?(p[m++]=p[h++],p[m++]=p[h++]):h+=2;for(f=m,h=m=0;f>h;){for(var y=p[h],v=p[h+1],w=h+2;f>=w+2&&p[w+1]===v;)w+=2;p[m++]=y,p[m++]=v,h=w}p.length=m;var b,N=e.c;N&&(b=N.style.display,N.style.display="none");try{for(;d>r;){var x,S=l[r+2]||o,C=p[g+2]||o,w=Math.min(S,C),k=l[r+1];if(1!==k.nodeType&&(x=s.substring(a,w))){i&&(x=x.replace(t,"\r")),k.nodeValue=x;var E=k.ownerDocument,A=E.createElement("span");A.className=p[g+1];var _=k.parentNode;_.replaceChild(A,k),A.appendChild(k),S>a&&(l[r+1]=k=E.createTextNode(s.substring(w,S)),_.insertBefore(k,A.nextSibling))}a=w,a>=S&&(r+=2),a>=C&&(g+=2)}}finally{N&&(N.style.display=b)}}catch($){u.console&&console.log($&&$.stack||$)}}var u=window,p=["break,continue,do,else,for,if,return,while"],f=[[p,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],g=[f,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],m=[f,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],h=[m,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],f=[f,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],y=[p,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],v=[p,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],w=[p,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],p=[p,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],b=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,N=/\S/,x=s({keywords:[g,h,f,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",y,v,p],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),S={};l(x,["default-code"]),l(i([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),l(i([["pln",/^\s+/,e," 	\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,e,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]),l(i([],[["atv",/^[\S\s]+/]]),["uq.val"]),l(s({keywords:g,hashComments:!0,cStyleComments:!0,types:b}),["c","cc","cpp","cxx","cyc","m"]),l(s({keywords:"null,true,false"}),["json"]),l(s({keywords:h,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:b}),["cs"]),l(s({keywords:m,cStyleComments:!0}),["java"]),l(s({keywords:p,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),l(s({keywords:y,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),l(s({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),l(s({keywords:v,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),l(s({keywords:f,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),l(s({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),l(s({keywords:w,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),l(i([],[["str",/^[\S\s]+/]]),["regex"]);var C=u.PR={createSimpleLexer:i,registerLangHandler:l,sourceDecorator:s,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:u.prettyPrintOne=function(e,t,n){var a=document.createElement("div");return a.innerHTML="<pre>"+e+"</pre>",a=a.firstChild,n&&o(a,n,!0),d({h:t,j:n,c:a,i:1}),a.innerHTML},prettyPrint:u.prettyPrint=function(t,n){function a(){for(var n=u.PR_SHOULD_USE_CONTINUATION?g.now()+250:1/0;h<l.length&&g.now()<n;h++){for(var i=l[h],c=S,p=i;p=p.previousSibling;){var f=p.nodeType,C=(7===f||8===f)&&p.nodeValue;if(C?!/^\??prettify\b/.test(C):3!==f||/\S/.test(p.nodeValue))break;if(C){c={},C.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(e,t,n){c[t]=n});break}}if(p=i.className,(c!==S||v.test(p))&&!w.test(p)){for(f=!1,C=i.parentNode;C;C=C.parentNode)if(x.test(C.tagName)&&C.className&&v.test(C.className)){f=!0;break}if(!f){if(i.className+=" prettyprinted",f=c.lang,!f){var k,f=p.match(y);!f&&(k=r(i))&&N.test(k.tagName)&&(f=k.className.match(y)),f&&(f=f[1])}if(b.test(i.tagName))C=1;else var C=i.currentStyle,E=s.defaultView,C=(C=C?C.whiteSpace:E&&E.getComputedStyle?E.getComputedStyle(i,e).getPropertyValue("white-space"):0)&&"pre"===C.substring(0,3);E=c.linenums,(E="true"===E||+E)||(E=(E=p.match(/\blinenums\b(?::(\d+))?/))?E[1]&&E[1].length?+E[1]:!0:!1),E&&o(i,E,C),m={h:f,c:i,j:E,i:C},d(m)}}}h<l.length?setTimeout(a,250):"function"==typeof t&&t()}for(var i=n||document.body,s=i.ownerDocument||document,i=[i.getElementsByTagName("pre"),i.getElementsByTagName("code"),i.getElementsByTagName("xmp")],l=[],c=0;c<i.length;++c)for(var p=0,f=i[c].length;f>p;++p)l.push(i[c][p]);var i=e,g=Date;g.now||(g={now:function(){return+new Date}});var m,h=0,y=/\blang(?:uage)?-([\w.]+)(?!\S)/,v=/\bprettyprint\b/,w=/\bprettyprinted\b/,b=/pre|xmp/i,N=/^code$/i,x=/^(?:pre|code|xmp)$/i,S={};a()}};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return C})}()}(),/*!
 * Socialite v2.0
 * http://socialitejs.com
 * Copyright (c) 2011 David Bushell
 * Dual-licensed under the BSD or MIT licenses: http://socialitejs.com/license.txt
 */
window.Socialite=function(e,t,n){"use strict";var a=0,r=[],i={},s={},o=/^($|loaded|complete)/,l=e.encodeURIComponent,c={settings:{},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},hasClass:function(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")},addClass:function(e,t){c.hasClass(e,t)||(e.className=""===e.className?t:e.className+" "+t)},removeClass:function(e,t){e.className=c.trim(" "+e.className+" ".replace(" "+t+" "," "))},extendObject:function(e,t,a){for(var r in t){var i=e[r]!==n;i&&"object"==typeof t[r]?c.extendObject(e[r],t[r],a):(a||!i)&&(e[r]=t[r])}},getElements:function(e,t){for(var n=0,a=[],r=!!e.getElementsByClassName,i=r?e.getElementsByClassName(t):e.getElementsByTagName("*");i.length>n;n++)(r||c.hasClass(i[n],t))&&a.push(i[n]);return a},getDataAttributes:function(e,t,n){for(var a=0,r="",i={},s=e.attributes;s.length>a;a++){var o=s[a].name,c=s[a].value;c.length&&0===o.indexOf("data-")&&(t&&(o=o.substring(5)),n?i[o]=c:r+=l(o)+"="+l(c)+"&")}return n?i:r},copyDataAttributes:function(e,t,n,a){var r=c.getDataAttributes(e,n,!0);for(var i in r)t.setAttribute(a?i.replace(/-/g,"_"):i,r[i])},createIframe:function(e,n){var a=t.createElement("iframe");return a.style.cssText="overflow: hidden; border: none;",c.extendObject(a,{src:e,allowtransparency:"true",frameborder:"0",scrolling:"no"},!0),n&&(a.onload=a.onreadystatechange=function(){o.test(a.readyState||"")&&(a.onload=a.onreadystatechange=null,c.activateInstance(n))}),a},networkReady:function(e){return i[e]?i[e].loaded:n},appendNetwork:function(e){if(e&&!e.appended){if("function"==typeof e.append&&e.append(e)===!1)return e.appended=e.loaded=!0,c.activateAll(e),n;e.script&&(e.el=t.createElement("script"),c.extendObject(e.el,e.script,!0),e.el.async=!0,e.el.onload=e.el.onreadystatechange=function(){if(o.test(e.el.readyState||"")){if(e.el.onload=e.el.onreadystatechange=null,e.loaded=!0,"function"==typeof e.onload&&e.onload(e)===!1)return;c.activateAll(e)}},t.body.appendChild(e.el)),e.appended=!0}},removeNetwork:function(e){return c.networkReady(e.name)?(e.el.parentNode&&e.el.parentNode.removeChild(e.el),!(e.appended=e.loaded=!1)):!1},reloadNetwork:function(e){var t=i[e];t&&c.removeNetwork(t)&&c.appendNetwork(t)},createInstance:function(e,t){var i=!0,s={el:e,uid:a++,widget:t};return r.push(s),t.process!==n&&(i="function"==typeof t.process?t.process(s):!1),i&&c.processInstance(s),s.el.setAttribute("data-socialite",s.uid),s.el.className="socialite "+t.name+" socialite-instance",s},processInstance:function(e){var n=e.el;e.el=t.createElement("div"),e.el.className=n.className,c.copyDataAttributes(n,e.el),"a"!==n.nodeName.toLowerCase()||n.getAttribute("data-default-href")||e.el.setAttribute("data-default-href",n.getAttribute("href"));var a=n.parentNode;a.insertBefore(e.el,n),a.removeChild(n)},activateInstance:function(e){return e&&!e.loaded?(e.loaded=!0,"function"==typeof e.widget.activate&&e.widget.activate(e),c.addClass(e.el,"socialite-loaded"),e.onload?e.onload(e.el):null):n},activateAll:function(e){"string"==typeof e&&(e=i[e]);for(var t=0;r.length>t;t++){var n=r[t];n.init&&n.widget.network===e&&c.activateInstance(n)}},load:function(e,a,i,o,l){if(e=e&&"object"==typeof e&&1===e.nodeType?e:t,!a||"object"!=typeof a)return c.load(e,c.getElements(e,"socialite"),i,o,l),n;var d;if(/Array/.test(Object.prototype.toString.call(a)))for(d=0;a.length>d;d++)c.load(e,a[d],i,o,l);else if(1===a.nodeType){if(!i||!s[i]){i=null;var u=a.className.split(" ");for(d=0;u.length>d;d++)if(s[u[d]]){i=u[d];break}if(!i)return}var p,f=s[i],g=parseInt(a.getAttribute("data-socialite"),10);if(isNaN(g))p=c.createInstance(a,f);else for(d=0;r.length>d;d++)if(r[d].uid===g){p=r[d];break}!l&&p&&(p.init||(p.init=!0,p.onload="function"==typeof o?o:null,f.init(p)),f.network.appended?c.networkReady(f.network.name)&&c.activateInstance(p):c.appendNetwork(f.network))}},activate:function(t,n,a){e.Socialite.load(null,t,n,a)},process:function(t,n,a){e.Socialite.load(t,n,a,null,!0)},network:function(e,t){i[e]={name:e,el:null,appended:!1,loaded:!1,widgets:{}},t&&c.extendObject(i[e],t)},widget:function(e,t,n){n.name=e+"-"+t,i[e]&&!s[n.name]&&(n.network=i[e],i[e].widgets[t]=s[n.name]=n)},setup:function(e){c.extendObject(c.settings,e,!0)}};return c}(window,window.document),function(e,n,a){a.setup({facebook:{lang:"en_GB",appId:null},twitter:{lang:"en"},googleplus:{lang:"en-GB"}}),a.network("facebook",{script:{src:"//connect.facebook.net/{{language}}/all.js",id:"facebook-jssdk"},append:function(t){var r=n.createElement("div"),i=a.settings.facebook,s={onlike:"edge.create",onunlike:"edge.remove",onsend:"message.send"};r.id="fb-root",n.body.appendChild(r),t.script.src=t.script.src.replace("{{language}}",i.lang),e.fbAsyncInit=function(){e.FB.init({appId:i.appId,xfbml:!0});for(var t in s)"function"==typeof i[t]&&e.FB.Event.subscribe(s[t],i[t])}}}),a.widget("facebook","like",{init:function(t){var r=n.createElement("div");r.className="fb-like",a.copyDataAttributes(t.el,r),t.el.appendChild(r),e.FB&&e.FB.XFBML&&e.FB.XFBML.parse(t.el)}}),a.network("twitter",{script:{src:"//platform.twitter.com/widgets.js",id:"twitter-wjs",charset:"utf-8"},append:function(){var n="object"!=typeof e.twttr,r=a.settings.twitter,i=["click","tweet","retweet","favorite","follow"];return n&&(e.twttr=t={_e:[],ready:function(e){t._e.push(e)}}),e.twttr.ready(function(e){for(var t=0;i.length>t;t++){var n=i[t];"function"==typeof r["on"+n]&&e.events.bind(n,r["on"+n])}a.activateAll("twitter")}),n}});var r=function(e){var t=n.createElement("a");t.className=e.widget.name+"-button",a.copyDataAttributes(e.el,t),t.setAttribute("href",e.el.getAttribute("data-default-href")),t.setAttribute("data-lang",e.el.getAttribute("data-lang")||a.settings.twitter.lang),e.el.appendChild(t)},i=function(){e.twttr&&"object"==typeof e.twttr.widgets&&"function"==typeof e.twttr.widgets.load&&e.twttr.widgets.load()};a.widget("twitter","share",{init:r,activate:i}),a.widget("twitter","follow",{init:r,activate:i}),a.widget("twitter","hashtag",{init:r,activate:i}),a.widget("twitter","mention",{init:r,activate:i}),a.widget("twitter","embed",{process:function(e){e.innerEl=e.el,e.innerEl.getAttribute("data-lang")||e.innerEl.setAttribute("data-lang",a.settings.twitter.lang),e.el=n.createElement("div"),e.el.className=e.innerEl.className,e.innerEl.className="",e.innerEl.parentNode.insertBefore(e.el,e.innerEl),e.el.appendChild(e.innerEl)},init:function(e){e.innerEl.className="twitter-tweet"},activate:i}),a.network("googleplus",{script:{src:"//apis.google.com/js/plusone.js"},append:function(){return e.gapi?!1:(e.___gcfg={lang:a.settings.googleplus.lang,parsetags:"explicit"},void 0)}});var s=function(e){var t=n.createElement("div");t.className="g-"+e.widget.gtype,a.copyDataAttributes(e.el,t),e.el.appendChild(t),e.gplusEl=t},o=function(e,t){return"function"!=typeof t?null:function(n){t(e.el,n)}},l=function(t){var n=t.widget.gtype;if(e.gapi&&e.gapi[n]){for(var r=a.settings.googleplus,i=a.getDataAttributes(t.el,!0,!0),s=["onstartinteraction","onendinteraction","callback"],l=0;s.length>l;l++)i[s[l]]=o(t,r[s[l]]);e.gapi[n].render(t.gplusEl,i)}};a.widget("googleplus","one",{init:s,activate:l,gtype:"plusone"}),a.widget("googleplus","share",{init:s,activate:l,gtype:"plus"}),a.widget("googleplus","badge",{init:s,activate:l,gtype:"plus"}),a.network("linkedin",{script:{src:"//platform.linkedin.com/in.js"}});var c=function(t){var r=n.createElement("script");r.type="IN/"+t.widget.intype,a.copyDataAttributes(t.el,r),t.el.appendChild(r),"object"==typeof e.IN&&"function"==typeof e.IN.parse&&(e.IN.parse(t.el),a.activateInstance(t))};a.widget("linkedin","share",{init:c,intype:"Share"}),a.widget("linkedin","recommend",{init:c,intype:"RecommendProduct"})}(window,window.document,window.Socialite),function(){var e=window._socialite;if(/Array/.test(Object.prototype.toString.call(e)))for(var t=0,n=e.length;n>t;t++)"function"==typeof e[t]&&e[t]()}(),$(function(){$("pre").not(".notpretty").addClass("prettyprint"),prettyPrint(),$(window).one("scroll resize",function(){Socialite.load()}),$("#enable_disqus").on("click",function(){$(this).hide(),$("#pastie").fadeIn("fast");var e="appelsiini";!function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="//"+e+".disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t)}()}),$("a.track").on("click",function(){var e=$(this).data("label"),t=$(this).data("action"),n=$(this).attr("target"),a=$(this).attr("href");try{_gaq.push(["_trackEvent","Link clicked",t,e])}catch(r){}return n?window.open(a,n):setTimeout(function(){window.location=a},100),!1})});
