(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();var le=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},G=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},F=(e,t,n)=>(le(e,t,"access private method"),n);function U(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}var D=U();function te(e){D=e}var ie=/[&<>"']/,ce=new RegExp(ie.source,"g"),ae=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,he=new RegExp(ae.source,"g"),pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},V=e=>pe[e];function v(e,t){if(t){if(ie.test(e))return e.replace(ce,V)}else if(ae.test(e))return e.replace(he,V);return e}var ue=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function re(e){return e.replace(ue,(t,n)=>(n=n.toLowerCase(),n==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}var de=/(^|[^\[])\^/g;function m(e,t){e=typeof e=="string"?e:e.source,t=t||"";const n={replace:(i,a)=>(a=typeof a=="object"&&"source"in a?a.source:a,a=a.replace(de,"$1"),e=e.replace(i,a),n),getRegex:()=>new RegExp(e,t)};return n}var ge=/[^\w:]/g,fe=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function X(e,t,n){if(e){let i;try{i=decodeURIComponent(re(n)).replace(ge,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}t&&!fe.test(n)&&(n=ke(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}var A={},me=/^[^:]+:\/*[^/]*$/,we=/^([^:]+:)[\s\S]*$/,ye=/^([^:]+:\/*[^/]*)[\s\S]*$/;function ke(e,t){A[" "+e]||(me.test(e)?A[" "+e]=e+"/":A[" "+e]=M(e,"/",!0)),e=A[" "+e];const n=e.indexOf(":")===-1;return t.substring(0,2)==="//"?n?t:e.replace(we,"$1")+t:t.charAt(0)==="/"?n?t:e.replace(ye,"$1")+t:e+t}var E={exec:()=>null};function K(e,t){const n=e.replace(/\|/g,(r,s,c)=>{let h=!1,u=s;for(;--u>=0&&c[u]==="\\";)h=!h;return h?"|":" |"}),i=n.split(/ \|/);let a=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),i.length>t)i.splice(t);else for(;i.length<t;)i.push("");for(;a<i.length;a++)i[a]=i[a].trim().replace(/\\\|/g,"|");return i}function M(e,t,n){const i=e.length;if(i===0)return"";let a=0;for(;a<i;){const r=e.charAt(i-a-1);if(r===t&&!n)a++;else if(r!==t&&n)a++;else break}return e.slice(0,i-a)}function be(e,t){if(e.indexOf(t[1])===-1)return-1;const n=e.length;let i=0,a=0;for(;a<n;a++)if(e[a]==="\\")a++;else if(e[a]===t[0])i++;else if(e[a]===t[1]&&(i--,i<0))return a;return-1}function ve(e,t){!e||e.silent||(t&&console.warn("marked(): callback is deprecated since version 5.0.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/using_pro#async"),(e.sanitize||e.sanitizer)&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),(e.highlight||e.langPrefix!=="language-")&&console.warn("marked(): highlight and langPrefix parameters are deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-highlight."),e.mangle&&console.warn("marked(): mangle parameter is enabled by default, but is deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install https://www.npmjs.com/package/marked-mangle, or disable by setting `{mangle: false}`."),e.baseUrl&&console.warn("marked(): baseUrl parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-base-url."),e.smartypants&&console.warn("marked(): smartypants parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-smartypants."),e.xhtml&&console.warn("marked(): xhtml parameter is deprecated since version 5.0.0, should not be used and will be removed in the future. Instead use https://www.npmjs.com/package/marked-xhtml."),(e.headerIds||e.headerPrefix)&&console.warn("marked(): headerIds and headerPrefix parameters enabled by default, but are deprecated since version 5.0.0, and will be removed in the future. To clear this warning, install  https://www.npmjs.com/package/marked-gfm-heading-id, or disable by setting `{headerIds: false}`."))}function J(e,t,n,i){const a=t.href,r=t.title?v(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");if(e[0].charAt(0)!=="!"){i.state.inLink=!0;const c={type:"link",raw:n,href:a,title:r,text:s,tokens:i.inlineTokens(s)};return i.state.inLink=!1,c}return{type:"image",raw:n,href:a,title:r,text:v(s)}}function xe(e,t){const n=e.match(/^(\s+)(?:```)/);if(n===null)return t;const i=n[1];return t.split(`
`).map(a=>{const r=a.match(/^\s+/);if(r===null)return a;const[s]=r;return s.length>=i.length?a.slice(i.length):a}).join(`
`)}var L=class{constructor(e){this.options=e||D}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:M(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],i=xe(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:i}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){const i=M(n,"#");(this.options.pedantic||!i||/ $/.test(i))&&(n=i.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const n=t[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:t[0],tokens:a,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n,i,a,r,s,c,h,u,g,d,l,y,k=t[1].trim();const P=k.length>1,w={type:"list",raw:"",ordered:P,start:P?+k.slice(0,-1):"",loose:!1,items:[]};k=P?`\\d{1,9}\\${k.slice(-1)}`:`\\${k}`,this.options.pedantic&&(k=P?k:"[*+-]");const b=new RegExp(`^( {0,3}${k})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(y=!1,!(!(t=b.exec(e))||this.rules.block.hr.test(e)));){if(n=t[0],e=e.substring(n.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,S=>" ".repeat(3*S.length)),g=e.split(`
`,1)[0],this.options.pedantic?(r=2,l=u.trimLeft()):(r=t[2].search(/[^ ]/),r=r>4?1:r,l=u.slice(r),r+=t[1].length),c=!1,!u&&/^ *$/.test(g)&&(n+=g+`
`,e=e.substring(g.length+1),y=!0),!y){const S=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),T=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),O=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),C=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;e&&(d=e.split(`
`,1)[0],g=d,this.options.pedantic&&(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(O.test(g)||C.test(g)||S.test(g)||T.test(e)));){if(g.search(/[^ ]/)>=r||!g.trim())l+=`
`+g.slice(r);else{if(c||u.search(/[^ ]/)>=4||O.test(u)||C.test(u)||T.test(u))break;l+=`
`+g}!c&&!g.trim()&&(c=!0),n+=d+`
`,e=e.substring(d.length+1),u=g.slice(r)}}w.loose||(h?w.loose=!0:/\n *\n *$/.test(n)&&(h=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(l),i&&(a=i[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),w.items.push({type:"list_item",raw:n,task:!!i,checked:a,loose:!1,text:l}),w.raw+=n}w.items[w.items.length-1].raw=n.trimRight(),w.items[w.items.length-1].text=l.trimRight(),w.raw=w.raw.trimRight();const R=w.items.length;for(s=0;s<R;s++)if(this.lexer.state.top=!1,w.items[s].tokens=this.lexer.blockTokens(w.items[s].text,[]),!w.loose){const S=w.items[s].tokens.filter(O=>O.type==="space"),T=S.length>0&&S.some(O=>/\n.*\n/.test(O.raw));w.loose=T}if(w.loose)for(s=0;s<R;s++)w.items[s].loose=!0;return w}}html(e){const t=this.rules.block.html.exec(e);if(t){const n={type:"html",block:!0,raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(t[0]):v(t[0]),a=n;a.type="paragraph",a.text=i,a.tokens=this.lexer.inline(i)}return n}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(/\s+/g," "),i=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:i,title:a}}}table(e){const t=this.rules.block.table.exec(e);if(t){const n={type:"table",header:K(t[1]).map(i=>({text:i})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=t[0];let i=n.align.length,a,r,s,c;for(a=0;a<i;a++)/^ *-+: *$/.test(n.align[a])?n.align[a]="right":/^ *:-+: *$/.test(n.align[a])?n.align[a]="center":/^ *:-+ *$/.test(n.align[a])?n.align[a]="left":n.align[a]=null;for(i=n.rows.length,a=0;a<i;a++)n.rows[a]=K(n.rows[a],n.header.length).map(h=>({text:h}));for(i=n.header.length,r=0;r<i;r++)n.header[r].tokens=this.lexer.inline(n.header[r].text);for(i=n.rows.length,r=0;r<i;r++)for(c=n.rows[r],s=0;s<c.length;s++)c[s].tokens=this.lexer.inline(c[s].text);return n}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:v(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):v(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=M(n.slice(0,-1),"\\");if((n.length-r.length)%2===0)return}else{const r=be(t[2],"()");if(r>-1){const c=(t[0].indexOf("!")===0?5:4)+t[1].length+r;t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,c).trim(),t[3]=""}}let i=t[2],a="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],a=r[3])}else a=t[3]?t[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(n)?i=i.slice(1):i=i.slice(1,-1)),J(t,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=t[i.toLowerCase()],!i){const a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return J(n,i,n[0],this.lexer)}}emStrong(e,t,n=""){let i=this.rules.inline.emStrong.lDelim.exec(e);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const r=i[0].length-1;let s,c,h=r,u=0;const g=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(g.lastIndex=0,t=t.slice(-1*e.length+r);(i=g.exec(t))!=null;){if(s=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!s)continue;if(c=s.length,i[3]||i[4]){h+=c;continue}else if((i[5]||i[6])&&r%3&&!((r+c)%3)){u+=c;continue}if(h-=c,h>0)continue;c=Math.min(c,c+h+u);const d=e.slice(0,r+i.index+c+1);if(Math.min(r,c)%2){const y=d.slice(1,-1);return{type:"em",raw:d,text:y,tokens:this.lexer.inlineTokens(y)}}const l=d.slice(2,-2);return{type:"strong",raw:d,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," ");const i=/[^ ]/.test(n),a=/^ /.test(n)&&/ $/.test(n);return i&&a&&(n=n.substring(1,n.length-1)),n=v(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){const n=this.rules.inline.autolink.exec(e);if(n){let i,a;return n[2]==="@"?(i=v(this.options.mangle?t(n[1]):n[1]),a="mailto:"+i):(i=v(n[1]),a=i),{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(e,t){let n;if(n=this.rules.inline.url.exec(e)){let i,a;if(n[2]==="@")i=v(this.options.mangle?t(n[0]):n[0]),a="mailto:"+i;else{let r;do r=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(r!==n[0]);i=v(n[0]),n[1]==="www."?a="http://"+n[0]:a=n[0]}return{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e,t){const n=this.rules.inline.text.exec(e);if(n){let i;return this.lexer.state.inRawBlock?i=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):v(n[0]):n[0]:i=v(this.options.smartypants?t(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}},p={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:E,lheading:/^((?:(?!^bull ).|\n(?!\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};p._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;p._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;p.def=m(p.def).replace("label",p._label).replace("title",p._title).getRegex();p.bullet=/(?:[*+-]|\d{1,9}[.)])/;p.listItemStart=m(/^( *)(bull) */).replace("bull",p.bullet).getRegex();p.list=m(p.list).replace(/bull/g,p.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+p.def.source+")").getRegex();p._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";p._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;p.html=m(p.html,"i").replace("comment",p._comment).replace("tag",p._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();p.lheading=m(p.lheading).replace(/bull/g,p.bullet).getRegex();p.paragraph=m(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.blockquote=m(p.blockquote).replace("paragraph",p.paragraph).getRegex();p.normal={...p};p.gfm={...p.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};p.gfm.table=m(p.gfm.table).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.gfm.paragraph=m(p._paragraph).replace("hr",p.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",p.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",p._tag).getRegex();p.pedantic={...p.normal,html:m(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",p._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:E,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:m(p.normal._paragraph).replace("hr",p.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",p.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};var o={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:E,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:E,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};o._punctuation="\\p{P}$+<=>`^|~";o.punctuation=m(o.punctuation,"u").replace(/punctuation/g,o._punctuation).getRegex();o.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;o.anyPunctuation=/\\[punct]/g;o._escapes=/\\([punct])/g;o._comment=m(p._comment).replace("(?:-->|$)","-->").getRegex();o.emStrong.lDelim=m(o.emStrong.lDelim,"u").replace(/punct/g,o._punctuation).getRegex();o.emStrong.rDelimAst=m(o.emStrong.rDelimAst,"gu").replace(/punct/g,o._punctuation).getRegex();o.emStrong.rDelimUnd=m(o.emStrong.rDelimUnd,"gu").replace(/punct/g,o._punctuation).getRegex();o.anyPunctuation=m(o.anyPunctuation,"gu").replace(/punct/g,o._punctuation).getRegex();o._escapes=m(o._escapes,"gu").replace(/punct/g,o._punctuation).getRegex();o._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;o._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;o.autolink=m(o.autolink).replace("scheme",o._scheme).replace("email",o._email).getRegex();o._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;o.tag=m(o.tag).replace("comment",o._comment).replace("attribute",o._attribute).getRegex();o._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;o._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;o._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;o.link=m(o.link).replace("label",o._label).replace("href",o._href).replace("title",o._title).getRegex();o.reflink=m(o.reflink).replace("label",o._label).replace("ref",p._label).getRegex();o.nolink=m(o.nolink).replace("ref",p._label).getRegex();o.reflinkSearch=m(o.reflinkSearch,"g").replace("reflink",o.reflink).replace("nolink",o.nolink).getRegex();o.normal={...o};o.pedantic={...o.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:m(/^!?\[(label)\]\((.*?)\)/).replace("label",o._label).getRegex(),reflink:m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",o._label).getRegex()};o.gfm={...o.normal,escape:m(o.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};o.gfm.url=m(o.gfm.url,"i").replace("email",o.gfm._extended_email).getRegex();o.breaks={...o.gfm,br:m(o.br).replace("{2,}","*").getRegex(),text:m(o.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};function Te(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ee(e){let t="",n,i;const a=e.length;for(n=0;n<a;n++)i=e.charCodeAt(n),Math.random()>.5&&(i="x"+i.toString(16)),t+="&#"+i+";";return t}var _=class{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||D,this.options.tokenizer=this.options.tokenizer||new L,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:p.normal,inline:o.normal};this.options.pedantic?(t.block=p.pedantic,t.inline=o.pedantic):this.options.gfm&&(t.block=p.gfm,this.options.breaks?t.inline=o.breaks:t.inline=o.gfm),this.tokenizer.rules=t}static get rules(){return{block:p,inline:o}}static lex(e,t){return new _(t).lex(e)}static lexInline(e,t){return new _(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(s,c,h)=>c+"    ".repeat(h.length));let n,i,a,r;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(s=>(n=s.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(a=e,this.options.extensions&&this.options.extensions.startBlock){let s=1/0;const c=e.slice(1);let h;this.options.extensions.startBlock.forEach(u=>{h=u.call({lexer:this},c),typeof h=="number"&&h>=0&&(s=Math.min(s,h))}),s<1/0&&s>=0&&(a=e.substring(0,s+1))}if(this.state.top&&(n=this.tokenizer.paragraph(a))){i=t[t.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n),r=a.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):t.push(n);continue}if(e){const s="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(s);break}else throw new Error(s)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,i,a,r=e,s,c,h;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(c||(h=""),c=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(n=u.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),i=t[t.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,r,h)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e,ee)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e,ee))){e=e.substring(n.raw.length),t.push(n);continue}if(a=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const g=e.slice(1);let d;this.options.extensions.startInline.forEach(l=>{d=l.call({lexer:this},g),typeof d=="number"&&d>=0&&(u=Math.min(u,d))}),u<1/0&&u>=0&&(a=e.substring(0,u+1))}if(n=this.tokenizer.inlineText(a,Te)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(h=n.raw.slice(-1)),c=!0,i=t[t.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):t.push(n);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}},B=class{constructor(e){this.options=e||D}code(e,t,n){const i=(t||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(e,i);a!=null&&a!==e&&(n=!0,e=a)}return e=e.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+v(i)+'">'+(n?e:v(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:v(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n,i){if(this.options.headerIds){const a=this.options.headerPrefix+i.slug(n);return`<h${t} id="${a}">${e}</h${t}>
`}return`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,n){const i=t?"ol":"ul",a=t&&n!==1?' start="'+n+'"':"";return"<"+i+a+`>
`+e+"</"+i+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){if(e=X(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i='<a href="'+e+'"';return t&&(i+=' title="'+t+'"'),i+=">"+n+"</a>",i}image(e,t,n){if(e=X(this.options.sanitize,this.options.baseUrl,e),e===null)return n;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${t}"`),i+=this.options.xhtml?"/>":">",i}text(e){return e}},j=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}},H=class{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let n=e,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[e];do i++,n=e+"-"+i;while(this.seen.hasOwnProperty(n))}return t||(this.seen[e]=i,this.seen[n]=0),n}slug(e,t={}){const n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)}},$=class{constructor(e){this.options=e||D,this.options.renderer=this.options.renderer||new B,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new j,this.slugger=new H}static parse(e,t){return new $(t).parse(e)}static parseInline(e,t){return new $(t).parseInline(e)}parse(e,t=!0){let n="",i,a,r,s,c,h,u,g,d,l,y,k,P,w,b,R,S,T,O;const C=e.length;for(i=0;i<C;i++){if(l=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]&&(O=this.options.extensions.renderers[l.type].call({parser:this},l),O!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(l.type))){n+=O||"";continue}switch(l.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{n+=this.renderer.heading(this.parseInline(l.tokens),l.depth,re(this.parseInline(l.tokens,this.textRenderer)),this.slugger);continue}case"code":{n+=this.renderer.code(l.text,l.lang,!!l.escaped);continue}case"table":{for(g="",u="",s=l.header.length,a=0;a<s;a++)u+=this.renderer.tablecell(this.parseInline(l.header[a].tokens),{header:!0,align:l.align[a]});for(g+=this.renderer.tablerow(u),d="",s=l.rows.length,a=0;a<s;a++){for(h=l.rows[a],u="",c=h.length,r=0;r<c;r++)u+=this.renderer.tablecell(this.parseInline(h[r].tokens),{header:!1,align:l.align[r]});d+=this.renderer.tablerow(u)}n+=this.renderer.table(g,d);continue}case"blockquote":{d=this.parse(l.tokens),n+=this.renderer.blockquote(d);continue}case"list":{for(y=l.ordered,k=l.start,P=l.loose,s=l.items.length,d="",a=0;a<s;a++)b=l.items[a],R=b.checked,S=b.task,w="",b.task&&(T=this.renderer.checkbox(!!R),P?b.tokens.length>0&&b.tokens[0].type==="paragraph"?(b.tokens[0].text=T+" "+b.tokens[0].text,b.tokens[0].tokens&&b.tokens[0].tokens.length>0&&b.tokens[0].tokens[0].type==="text"&&(b.tokens[0].tokens[0].text=T+" "+b.tokens[0].tokens[0].text)):b.tokens.unshift({type:"text",text:T}):w+=T),w+=this.parse(b.tokens,P),d+=this.renderer.listitem(w,S,!!R);n+=this.renderer.list(d,y,k);continue}case"html":{n+=this.renderer.html(l.text,l.block);continue}case"paragraph":{n+=this.renderer.paragraph(this.parseInline(l.tokens));continue}case"text":{for(d=l.tokens?this.parseInline(l.tokens):l.text;i+1<C&&e[i+1].type==="text";)l=e[++i],d+=`
`+(l.tokens?this.parseInline(l.tokens):l.text);n+=t?this.renderer.paragraph(d):d;continue}default:{const Y='Token with "'+l.type+'" type was not found.';if(this.options.silent)return console.error(Y),"";throw new Error(Y)}}}return n}parseInline(e,t){t=t||this.renderer;let n="",i,a,r;const s=e.length;for(i=0;i<s;i++){if(a=e[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(r=this.options.extensions.renderers[a.type].call({parser:this},a),r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type))){n+=r||"";continue}switch(a.type){case"escape":{n+=t.text(a.text);break}case"html":{n+=t.html(a.text);break}case"link":{n+=t.link(a.href,a.title,this.parseInline(a.tokens,t));break}case"image":{n+=t.image(a.href,a.title,a.text);break}case"strong":{n+=t.strong(this.parseInline(a.tokens,t));break}case"em":{n+=t.em(this.parseInline(a.tokens,t));break}case"codespan":{n+=t.codespan(a.text);break}case"br":{n+=t.br();break}case"del":{n+=t.del(this.parseInline(a.tokens,t));break}case"text":{n+=t.text(a.text);break}default:{const c='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(c),"";throw new Error(c)}}}return n}},I=class{constructor(e){this.options=e||D}preprocess(e){return e}postprocess(e){return e}};I.passThroughHooks=new Set(["preprocess","postprocess"]);var W,N,Z,se,Oe=class{constructor(...e){G(this,W),G(this,Z),this.defaults=U(),this.options=this.setOptions,this.parse=F(this,W,N).call(this,_.lex,$.parse),this.parseInline=F(this,W,N).call(this,_.lexInline,$.parseInline),this.Parser=$,this.parser=$.parse,this.Renderer=B,this.TextRenderer=j,this.Lexer=_,this.lexer=_.lex,this.Tokenizer=L,this.Slugger=H,this.Hooks=I,this.use(...e)}walkTokens(e,t){let n=[];for(const i of e)switch(n=n.concat(t.call(this,i)),i.type){case"table":{for(const a of i.header)n=n.concat(this.walkTokens(a.tokens,t));for(const a of i.rows)for(const r of a)n=n.concat(this.walkTokens(r.tokens,t));break}case"list":{n=n.concat(this.walkTokens(i.items,t));break}default:this.defaults.extensions&&this.defaults.extensions.childTokens&&this.defaults.extensions.childTokens[i.type]?this.defaults.extensions.childTokens[i.type].forEach(a=>{n=n.concat(this.walkTokens(i[a],t))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,t)))}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const i={...n};if(i.async=this.defaults.async||i.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const r=t.renderers[a.name];r?t.renderers[a.name]=function(...s){let c=a.renderer.apply(this,s);return c===!1&&(c=r.apply(this,s)),c}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[a.level]?t[a.level].unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),i.extensions=t),n.renderer){const a=this.defaults.renderer||new B(this.defaults);for(const r in n.renderer){const s=a[r];a[r]=(...c)=>{let h=n.renderer[r].apply(a,c);return h===!1&&(h=s.apply(a,c)),h}}i.renderer=a}if(n.tokenizer){const a=this.defaults.tokenizer||new L(this.defaults);for(const r in n.tokenizer){const s=a[r];a[r]=(...c)=>{let h=n.tokenizer[r].apply(a,c);return h===!1&&(h=s.apply(a,c)),h}}i.tokenizer=a}if(n.hooks){const a=this.defaults.hooks||new I;for(const r in n.hooks){const s=a[r];I.passThroughHooks.has(r)?a[r]=c=>{if(this.defaults.async)return Promise.resolve(n.hooks[r].call(a,c)).then(u=>s.call(a,u));const h=n.hooks[r].call(a,c);return s.call(a,h)}:a[r]=(...c)=>{let h=n.hooks[r].apply(a,c);return h===!1&&(h=s.apply(a,c)),h}}i.hooks=a}if(n.walkTokens){const a=this.defaults.walkTokens;i.walkTokens=function(r){let s=[];return s.push(n.walkTokens.call(this,r)),a&&(s=s.concat(a.call(this,r))),s}}this.defaults={...this.defaults,...i}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}};W=new WeakSet;N=function(e,t){return(n,i,a)=>{typeof i=="function"&&(a=i,i=null);const r={...i},s={...this.defaults,...r},c=F(this,Z,se).call(this,!!s.silent,!!s.async,a);if(typeof n>"u"||n===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(ve(s,a),s.hooks&&(s.hooks.options=s),a){const h=s.highlight;let u;try{s.hooks&&(n=s.hooks.preprocess(n)),u=e(n,s)}catch(l){return c(l)}const g=l=>{let y;if(!l)try{s.walkTokens&&this.walkTokens(u,s.walkTokens),y=t(u,s),s.hooks&&(y=s.hooks.postprocess(y))}catch(k){l=k}return s.highlight=h,l?c(l):a(null,y)};if(!h||h.length<3||(delete s.highlight,!u.length))return g();let d=0;this.walkTokens(u,l=>{l.type==="code"&&(d++,setTimeout(()=>{h(l.text,l.lang,(y,k)=>{if(y)return g(y);k!=null&&k!==l.text&&(l.text=k,l.escaped=!0),d--,d===0&&g()})},0))}),d===0&&g();return}if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then(h=>e(h,s)).then(h=>s.walkTokens?Promise.all(this.walkTokens(h,s.walkTokens)).then(()=>h):h).then(h=>t(h,s)).then(h=>s.hooks?s.hooks.postprocess(h):h).catch(c);try{s.hooks&&(n=s.hooks.preprocess(n));const h=e(n,s);s.walkTokens&&this.walkTokens(h,s.walkTokens);let u=t(h,s);return s.hooks&&(u=s.hooks.postprocess(u)),u}catch(h){return c(h)}}};Z=new WeakSet;se=function(e,t,n){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const a="<p>An error occurred:</p><pre>"+v(i.message+"",!0)+"</pre>";if(t)return Promise.resolve(a);if(n){n(null,a);return}return a}if(t)return Promise.reject(i);if(n){n(i);return}throw i}};var z=new Oe;function f(e,t,n){return z.parse(e,t,n)}f.options=f.setOptions=function(e){return z.setOptions(e),f.defaults=z.defaults,te(f.defaults),f};f.getDefaults=U;f.defaults=D;f.use=function(...e){return z.use(...e),f.defaults=z.defaults,te(f.defaults),f};f.walkTokens=function(e,t){return z.walkTokens(e,t)};f.parseInline=z.parseInline;f.Parser=$;f.parser=$.parse;f.Renderer=B;f.TextRenderer=j;f.Lexer=_;f.lexer=_.lex;f.Tokenizer=L;f.Slugger=H;f.Hooks=I;f.parse=f;f.options;f.setOptions;f.use;f.walkTokens;f.parseInline;$.parse;_.lex;const Se=`# Oil Painting Mondays

## Hero

**A women’s artist collective in Broomfield, Colorado**

Oil Painting Mondays is a warm, women-led art club where paintings are created for the joy of it first, and collected when they find the right home. <!-- TODO: replace with final brand sentence -->

[View Gallery](#gallery)  
[Meet the Artists](#artists)

---

## About the Collective

Oil Painting Mondays is a community of women artists who gather in Broomfield, Colorado to paint, unwind, and connect.  
The club is not driven by production or sales quotas; it exists for shared time, creative practice, and the quiet pleasure of making art together.

While the work is not created with commercial pressure, many of the paintings are available to reserve and purchase.  
Visitors are invited to explore the collection, find a piece that resonates, and submit a simple reservation request.

---

## Mission

We come together to:

- Hold space for women to paint for themselves, not just for clients.
- Build a local art community rooted in kindness and mutual support.
- Share original oil paintings with people in Broomfield, the Denver area, and beyond.
- Make collecting art feel personal, approachable, and calm.

---

## Featured Paintings

Explore a selection of original oil paintings created within our women’s artist community in Broomfield, Colorado.  
Each piece is one of a kind, with the option to reserve it for purchase through a simple inquiry form.

[View All Paintings](#gallery)

---

## Artists Preview

Meet the women who make up this collective of painters.  
Each artist brings her own style, story, and way of seeing — from soft, atmospheric studies to bold, textured works.

[Meet the Artists](#artists)

---

## Events Preview

Oil Painting Mondays occasionally hosts small gatherings and exhibitions in the Broomfield and Denver area.  
From intimate showings to community evenings, events are designed to be welcoming and relaxed.

[View Events](#events)

---

## Testimonials

> “Spending Monday evenings painting with this group has become a ritual of calm and connection.” <!-- TODO: replace -->

> “The artwork feels personal, and the process of reserving a painting is simple and human.” <!-- TODO: replace -->

---

## Final Call to Action

If a painting stays with you after you close the page, we invite you to reach out.  
You can reserve a piece you love, ask for more photos, or simply say hello.

[View Gallery](#gallery)  
[Contact the Collective](#contact)`,_e=`# Artists

Oil Painting Mondays is a community of women artists who paint together in Broomfield, Colorado.  
Below are placeholder profiles for members of the collective; each will be updated with real biographies and artworks over time. <!-- TODO: replace -->

---

## Dasha

**Medium & Style**  
Oil painting with a focus on soft, atmospheric scenes and quiet color palettes. <!-- TODO: replace -->

**Short Bio**  
Dasha is a women artist in Colorado whose work leans toward reflective, mood-driven compositions.  
She approaches each painting as a slow study in light, rhythm, and emotional tone. <!-- TODO: replace -->

**Featured Work**  
*Working title:* “Evening Window Study” <!-- TODO: replace -->

---

## Zhanna

**Medium & Style**  
Oil on canvas, gentle abstraction, and layered brushwork. <!-- TODO: replace -->

**Short Bio**  
Zhanna explores the line between abstraction and memory, often painting from fragments of places and moments rather than direct observation.  
Her paintings invite viewers to slow down and stay with the surface. <!-- TODO: replace -->

**Featured Work**  
*Working title:* “Soft Echoes” <!-- TODO: replace -->

---

## Sveta

**Medium & Style**  
Oil painting with serene, light-filled compositions. <!-- TODO: replace -->

**Short Bio**  
Sveta’s work often captures stillness — a quiet room, a morning sky, a simple object that holds more weight than it seems.  
Her paintings are subtle, designed to be lived with over time. <!-- TODO: replace -->

**Featured Work**  
*Working title:* “Quiet Morning Table” <!-- TODO: replace -->

---

## Olya

**Medium & Style**  
Expressive oil painting with textured surfaces and bolder contrasts. <!-- TODO: replace -->

**Short Bio**  
Olya brings energy into her canvases through movement, gesture, and unexpected color pairings.  
Her work feels alive on the wall, shifting slightly with the light and the viewer’s mood. <!-- TODO: replace -->

**Featured Work**  
*Working title:* “City Lights in Motion” <!-- TODO: replace -->

---

## Sasha

**Medium & Style**  
Oil on canvas with a focus on intimate portraits and figure studies. <!-- TODO: replace -->

**Short Bio**  
Sasha is drawn to people and the small details that reveal who they are — the tilt of a head, the way hands rest, a glance.  
Her paintings are quiet portraits of presence rather than performance. <!-- TODO: replace -->

**Featured Work**  
*Working title:* “Portrait in Plum” <!-- TODO: replace -->

---

## Tanya

**Medium & Style**  
Oil painting, often weaving in subtle patterns and decorative elements. <!-- TODO: replace -->

**Short Bio**  
Tanya’s work blurs the line between painting and textile, using layered marks to create a sense of woven space.  
Her canvases feel both intricate and calm. <!-- TODO: replace -->

**Featured Work**  
*Working title:* “Woven Light” <!-- TODO: replace -->

---

## Masha

**Medium & Style**  
Oil on canvas, exploring color relationships and simplified forms. <!-- TODO: replace -->

**Short Bio**  
Masha’s paintings are built from blocks of color and shape, with a focus on how hues meet and shift at their edges.  
Her work is often described as gentle, spacious, and quietly modern. <!-- TODO: replace -->

**Featured Work**  
*Working title:* “Color Study in Blue” <!-- TODO: replace -->

---

## Future Members

More artists will be added as the collective grows.  
If you are a woman artist in the Broomfield or Denver area and feel drawn to this kind of shared practice, we’re glad you’ve found Oil Painting Mondays. <!-- TODO: replace -->`,$e=`# Gallery

## A Note Before You Browse

All paintings shown here are original works created within our women’s artist collective in Broomfield, Colorado.  
Because each piece is one of a kind, we use a **reservation request** system rather than instant checkout.

To purchase a painting, you can:

1. Open the painting’s detail view.  
2. Click **Reserve This Painting**.  
3. Submit a short form with your contact details and preference for shipping or local pickup.

We will confirm availability and next steps within **1–2 business days**.

---

## Filters

Use filters to explore original oil paintings by artist, size, price, style, technique, and availability.  
You can also view only works that are currently available for reservation.

---

## Painting Card Template

Each painting card should display:

- Title  
- Artist  
- Short description  
- Medium  
- Size  
- Price  
- Status (Available / On Hold / Sold)  
- Call to action: **Reserve This Painting**

Example layout (for reference in the interface copy):

> **Title:** Blue Morning Study  
> **Artist:** Dasha <!-- TODO: replace -->  
> **Description:** An atmospheric oil painting with layered brushwork and a quiet tonal palette. <!-- TODO: replace -->  
> **Medium:** Oil on canvas  
> **Size:** 24 x 30 in  
> **Price:** $[amount] <!-- TODO: replace -->  
> **Status:** Available  
> [Reserve This Painting]

---

## Painting Detail View

On the detail page or modal for each painting, include:

- Large zoomable image (with additional angles if available)  
- Title  
- Artist  
- Short description  
- Medium  
- Size (in inches)  
- Technique / style if relevant  
- Price in USD  
- Availability status  
- Notes on shipping and local pickup  
- **Reserve This Painting** button

Suggested copy block:

> This is an original oil painting created within Oil Painting Mondays, a women’s art club in Broomfield, Colorado.  
> To request this work, use the form below to submit a reservation inquiry. We will confirm availability and next steps within 1–2 business days.`,Pe=`# Events

Oil Painting Mondays occasionally organizes small exhibitions and gatherings in Broomfield and the Denver area.  
Events are designed to be informal, welcoming spaces where visitors can see original oil paintings in person and meet the artists behind them.

## Upcoming Exhibitions

Details about upcoming exhibitions and community gatherings will appear here as they are scheduled. <!-- TODO: replace with real events -->

For now, you are welcome to explore the gallery online and use the contact form if you’d like to be notified about future events.

## Community Gatherings

From time to time, the collective hosts quiet evenings around painting and conversation.  
Some gatherings remain just for members; others may open to visitors or friends of the collective. <!-- TODO: replace if you want more structure -->

If you’re interested in community events related to women artists in the Broomfield and Denver area, feel free to get in touch.

---

## Past Events

This section will highlight selected past exhibitions and gatherings once there is more to share. <!-- TODO: replace -->  
As the history of the collective grows, we plan to collect those moments here.`,ze=`# Frequently Asked Questions

## How do I reserve a painting?

To reserve a painting, open its detail view and click **Reserve This Painting**.  
Fill in the short form with your name, email, and whether you prefer shipping or local pickup, then submit your request.

We’ll review your request, confirm that the painting is still available, and email you within **1–2 business days** with next steps.

---

## How does shipping work?

For paintings that require shipping, we typically use **USPS** services such as Ground Advantage or Priority Mail, which include tracking and can be paired with insurance. [web:10][web:51]  
Shipping costs are based on the **size and destination** of the painting and are grouped into size classes.

For a standard-sized painting, shipping within the United States generally starts around **$15–$25**, with larger or heavier works costing more. [web:45][web:40]  
We will confirm the shipping cost with you before any payment is requested.

---

## Can I pick up locally?

Yes.  
If you are in or near **Broomfield or the Denver area**, you can choose **Local Pickup** in the reservation form.

Local pickups are arranged by appointment so that we can find a time that works for everyone.  
Details and location will be shared with you once your reservation request is confirmed.

---

## What happens after I submit the form?

After you submit a reservation request:

1. We receive your inquiry with details about the painting.  
2. We confirm whether the painting is still available.  
3. We email you within **1–2 business days** with confirmation and next steps.  
4. We discuss shipping or local pickup and share a simple payment process, such as an invoice or payment link. <!-- TODO: adjust once payment provider is confirmed -->

Your reservation is considered complete once payment is received and the painting is marked as **Sold**.

---

## Are the paintings original?

Yes.  
The works shown on this site are original oil paintings created by members of Oil Painting Mondays, a women’s artist collective in Broomfield, Colorado.

Each painting is one of a kind, and availability may change as works are reserved and sold.

---

## Can I request more photos?

Absolutely.  
If you’d like to see additional photos, close-ups, or different angles of a painting, mention this in your reservation request or use the contact form.

We’re happy to share more views so that you can make a comfortable decision before purchasing.

---

## What is your return policy?

Because these are original artworks created by independent artists, **most sales are considered final once the painting has been delivered in good condition**. [web:41][web:42]  
If a painting arrives damaged in transit, please contact us as soon as possible with photos so we can discuss options.

Returns for reasons other than damage are generally not accepted, but we may review requests on a case-by-case basis at our discretion.  
Custom, commissioned, or specially reserved pieces are **not returnable** except in cases of shipping damage.

More details are available on our **Returns Policy** page.

---

## Do you ship outside Colorado / outside the US?

At this time, we focus primarily on shipping within the United States. <!-- TODO: adjust if international shipping is added -->  
If you’re located outside Colorado and would like to inquire about a painting, you are welcome to submit a reservation request and mention your location.

For international requests, we will review feasibility, estimated shipping cost, and customs considerations before confirming whether we can proceed.`,De=`# Contact

We’re glad you’re here.  
Whether you’re interested in a specific painting, curious about upcoming events in the Broomfield and Denver area, or simply want to say hello, you can reach us using the form below.

## Contact Form

**Fields:**

- Name  
- Email  
- Subject  
- Message

After you submit the form, we aim to respond within **1–2 business days**.

---

## Organization Details

**[Organization Name]** <!-- TODO: replace -->  
Broomfield, Colorado, USA  

Email: [Email] <!-- TODO: replace -->  
Phone: [Phone] <!-- TODO: replace -->  

Instagram: [Instagram] <!-- TODO: replace -->  
Facebook: [Facebook] <!-- TODO: replace -->

If you prefer, you can also reach out directly via email or social media once those channels are finalized.`,Re=`# Purchase & Delivery

## How to Reserve a Painting

1. Browse the gallery and open the painting you’re interested in.  
2. Click **Reserve This Painting**.  
3. Fill out the reservation form with your name, email, and preferred fulfillment option (Shipping or Local Pickup).  
4. Submit your request.

We will confirm availability and follow up by email within **1–2 business days**.

---

## What Happens Next

Once we receive your reservation request:

- We verify that the painting is still available.  
- We confirm the details with you by email.  
- We share the estimated shipping cost (if applicable).  
- We arrange a simple payment process (for example, through an invoice or secure payment link). <!-- TODO: update once payment method is finalized -->

After payment is completed, the painting is marked as **Sold**, and we finalize shipping or local pickup arrangements.

---

## Shipping

We use reliable carriers such as **USPS** for shipping original artworks, with services that include **tracking** and the option for **insurance**. [web:40][web:51]  
Paintings are carefully packed to travel safely, using protective layers and sturdy packaging.

### Shipping Costs

Shipping costs are grouped by size class and depend on the painting’s dimensions, weight, and destination.  
As a general reference, shipping for a standard-sized painting within the United States often begins around **$15–$25**, with larger works and distant destinations costing more. [web:45][web:41]

The exact shipping cost will be confirmed with you during the reservation process, before any payment is requested.

---

## Local Pickup

If you are in the **Broomfield or Denver area**, you can select **Local Pickup** in the reservation form.  
Local pickups are arranged **by request**, so we can agree on a time and location that work for both you and the artist.

Details for pickup, including address and timing, will be shared once your reservation is confirmed.

---

## Packaging, Insurance, and Tracking

Paintings are wrapped and packed with care to reduce the risk of damage in transit.  
Depending on the shipping method and declared value, **insurance and tracking** may be included or offered as an option. [web:51][web:48]

We will share tracking information once your painting has shipped, so you can follow its journey and plan for its arrival.

---

## Returns and Damages

Because these are original works created by individual artists, **sales are generally final once the painting has arrived in good condition**. [web:42][web:41]

If a painting arrives damaged:

- Please document the damage with photos of the packaging and the artwork.  
- Contact us as soon as possible with your order details and images.  
- We’ll review the situation and discuss next steps, which may include a claim with the carrier or a resolution we agree on together.

For more information, please see the full **Returns Policy**.

---

## Notes from the Collective

Oil Painting Mondays is a women’s art community, not a large retail operation.  
We handle each reservation personally and aim to keep the process as human, clear, and gentle as possible.

If you have any questions about how a painting will be shipped or when it may arrive, you’re always welcome to ask before confirming your purchase.`,Ce=`# Privacy Policy

_Last updated: [Month Day, Year] <!-- TODO: replace -->_

This Privacy Policy explains how **[Organization Name]** (“we,” “us,” or “our”) collects, uses, and protects personal information when you visit our website or contact us about artwork.

## Information We Collect

We may collect:

- Contact information (such as your name and email address) when you submit a form.  
- Details about specific paintings you inquire about.  
- Optional information you choose to share in messages or notes.

We do not intentionally collect sensitive personal information through this site.

## How We Use Your Information

We use the information you provide to:

- Respond to your questions and reservation requests.  
- Confirm availability of paintings.  
- Arrange shipping or local pickup.  
- Improve how we present our work and communicate with visitors.

We do not sell or rent your personal information.

## Sharing of Information

We may share limited information with service providers who help us operate the website or deliver artwork to you (for example, shipping carriers or email providers).  
We only share information that is reasonably necessary for those services.

We may also share information if required by law or to protect our rights and safety.

## Cookies and Basic Analytics

Our website may use basic cookies or analytics tools to understand how visitors use the site. <!-- TODO: adjust if specific tools are used -->  
This helps us see which pages are visited and how people find the site, but does not tell us who you are individually.

## Data Retention

We keep your contact information and message history for as long as needed to respond to you and maintain basic records of our interactions.  
You may ask us to update or delete your information where appropriate.

## Security

We take reasonable steps to protect the information we collect, but no website or email transmission can be guaranteed to be completely secure.  
Please use your best judgment when sharing information online.

## Children’s Privacy

This website is not directed to children under 13, and we do not knowingly collect personal information from children.

## Contact

If you have any questions about this Privacy Policy or how your information is used, you can contact us at:

**[Organization Name]**  
Email: [Email]  
City: Broomfield, Colorado <!-- TODO: replace with full address if desired -->

## Changes to This Policy

We may update this Privacy Policy from time to time.  
If we make significant changes, we will update the “Last updated” date at the top of this page.`,Ie=`# Returns Policy

_Last updated: [Month Day, Year] <!-- TODO: replace -->_

This Returns Policy explains how **[Organization Name]** handles returns and issues related to artwork purchased through this website.

## Final Sale on Original Artwork

Because the paintings offered through this site are **original works by individual artists**, most sales are considered **final** once the artwork has arrived in good condition. [web:42][web:41]

We are a women’s art community rather than a large retail operation, and each piece is created in a small, personal context.  
For that reason, we cannot accommodate frequent returns for reasons such as a change of mind or a shift in taste.

## Damaged in Transit

If your painting arrives damaged:

1. Please document the damage with clear photos of the artwork and the packaging.  
2. Contact us as soon as possible with your name, contact information, and details about the painting.  
3. We will review the case and discuss a resolution, which may include a claim with the carrier or other appropriate options.

We may request additional photos or information to help us understand what occurred during shipping.

## Custom and Special Orders

Custom, commissioned, or specially reserved pieces are **not eligible for return**, except in cases of shipping damage.  
We will make this clear during the reservation and confirmation process when a piece falls into one of these categories.

## Case-by-Case Considerations

In rare cases, we may review a return request that does not involve shipping damage on a **case-by-case basis**, at our sole discretion.  
We cannot guarantee that such requests will be approved, but we are open to honest, respectful conversation if something unexpected arises.

## How to Contact Us

For any questions about returns, please reach out at:

**[Organization Name]**  
Email: [Email]  
City: Broomfield, Colorado <!-- TODO: replace with full address if desired -->

We appreciate your support for women artists in Colorado and your understanding of the care that goes into each original painting.`,Ae=`# Shipping & Pickup Policy

_Last updated: [Month Day, Year] <!-- TODO: replace -->_

This page explains how **[Organization Name]** handles shipping and local pickup for paintings reserved and purchased through this website.

## Shipping Methods

We typically ship original artworks using **USPS** services such as Ground Advantage or Priority Mail, which may include tracking and can be paired with insurance depending on value and destination. [web:10][web:51]

In some cases, we may use other carriers if they offer a safer or more appropriate option for a specific painting.

## Shipping Costs

Shipping costs depend on:

- the size and weight of the painting,  
- the destination, and  
- the chosen shipping method and insurance.

To keep the process simple, we group paintings into **size classes** and estimate shipping accordingly.  
As a general reference, shipping for a standard-sized painting within the United States often starts around **$15–$25**, with larger works costing more. [web:45][web:40]

We will confirm the shipping cost with you during the reservation process before any payment is requested.

## Packaging and Protection

Paintings are wrapped and packed with care using protective materials and sturdy outer packaging.  
Our goal is to help each piece arrive safely and in the condition intended by the artist.

## Insurance and Tracking

Depending on the shipping method and declared value, **tracking** and **insurance** may be included or added as extra services. [web:51][web:48]

We will share tracking information with you once your painting has shipped so you can follow its progress.

## Local Pickup

If you are located in or near **Broomfield or the Denver area**, you may choose **Local Pickup** during the reservation process.  
Local pickups are arranged **by request**, so we can find a time and meeting place that feel comfortable and convenient.

Details of the pickup location are shared directly with you after your reservation is confirmed.

## International Shipping

At this time, we primarily focus on shipping within the United States. <!-- TODO: adjust if international shipping is added -->

If you are outside the U.S. and interested in a painting, you are welcome to submit a reservation request and mention your location.  
We will review feasibility, estimated cost, and customs considerations and let you know if we can proceed.

## Questions

If you have any questions about shipping or pickup before reserving a painting, you are always welcome to ask.  
We want the process of collecting original oil paintings from our women’s art community in Broomfield, Colorado to feel clear and considered.`,qe=`# Terms of Purchase

_Last updated: [Month Day, Year] <!-- TODO: replace -->_

These Terms of Purchase explain the conditions under which you may reserve and purchase artwork from **[Organization Name]** through this website.

By submitting a reservation request or completing a purchase, you agree to these terms.

## Original Artwork

The paintings offered through this site are original works created by members of Oil Painting Mondays, a women’s artist collective in Broomfield, Colorado.  
Each piece is one of a kind, and availability may change as works are reserved and sold.

## Reservation Requests

To purchase a painting, you first submit a **reservation request** through the website.  
A reservation request does not guarantee that a painting is available or that a sale will occur.

We will review your request, confirm availability, and respond within **1–2 business days** with next steps and payment instructions.

## Pricing and Payment

Prices are listed in **USD** and may change over time.  
We will confirm the price of a painting with you when responding to your reservation request.

Payment methods and instructions will be shared during the confirmation process. <!-- TODO: update once payment method is finalized -->

A purchase is considered complete once payment has been received and confirmed.

## Shipping and Local Pickup

Shipping and local pickup options are described on our **Purchase & Delivery** page.  
By confirming a purchase, you agree to the relevant shipping or pickup arrangements discussed with you.

Shipping costs may vary based on the size, weight, and destination of the painting.  
We will share the estimated shipping cost and obtain your agreement before payment is taken.

## Final Sale and Returns

Except as described under “Damaged Items,” **sales of original artworks are generally final**.  
We do not routinely accept returns for reasons such as change of mind or differences in expectation.

Custom, commissioned, or specially reserved pieces are **not returnable**, except in cases of damage during shipment.

For more detailed information, please see our **Returns Policy**.

## Damaged Items

If a painting arrives damaged in transit, please contact us as soon as possible with photos of the artwork and packaging.  
We will review the situation and discuss options, which may include a claim with the carrier or other resolution we mutually agree upon.

## Use of Images

Purchasing a painting does not grant you copyright or reproduction rights to the artwork.  
The artists retain all rights to reproduce or display images of their work unless otherwise agreed in writing.

## Changes to Terms

We may update these Terms of Purchase from time to time.  
If we make significant changes, we will update the “Last updated” date at the top of this page.

If you have questions about these terms before submitting a reservation request, we encourage you to contact us.`,Me=`# About

Oil Painting Mondays is a women’s artist collective in Broomfield, Colorado, where painters gather each week to create, share, and support one another. The collective is focused on process first: painting for joy, for practice, and for the quiet pleasure of making art together.

## Our Purpose

The club exists to:

- Hold space for women to paint for themselves, not just for clients.
- Build a local art community rooted in kindness and mutual support.
- Share original oil paintings with people in Broomfield, the Denver area, and beyond.
- Make collecting art feel personal, approachable, and calm.

## How the Collective Works

Our work is not driven by production or sales quotas. Instead, each painting is created with care, and many pieces are available to reserve and purchase when they are ready for a new home.

Visitors are invited to explore the collection, discover paintings that resonate, and submit a reservation inquiry for the works they love.
`,Q={home:{title:"Home",raw:Se},about:{title:"About",raw:Me},artists:{title:"Artists",raw:_e},gallery:{title:"Gallery",raw:$e},events:{title:"Events",raw:Pe},faq:{title:"FAQ",raw:ze},"purchase-delivery":{title:"Purchase & Delivery",raw:Re},"privacy-policy":{title:"Privacy Policy",raw:Ce},"returns-policy":{title:"Returns Policy",raw:Ie},"shipping-pickup":{title:"Shipping & Pickup",raw:Ae},"terms-of-purchase":{title:"Terms of Purchase",raw:qe},contact:{title:"Contact",raw:De}},We=[{title:"Blue Morning Study",artist:"Dasha",description:"An atmospheric oil painting with layered brushwork and a quiet tonal palette.",medium:"Oil on canvas",size:"24 × 30 in",price:"$1,200",status:"Available"},{title:"Golden Hour Still Life",artist:"Mia",description:"Soft light and elegant composition capture the calm of a late afternoon.",medium:"Oil on linen",size:"20 × 24 in",price:"$950",status:"Available"},{title:"Quiet Field",artist:"Lena",description:"A meditative landscape built from gentle color and intimate mark-making.",medium:"Oil on panel",size:"18 × 22 in",price:"$1,050",status:"On Hold"}],q=document.getElementById("app");function x(e,t={},n=[]){const i=document.createElement(e);return Object.entries(t).forEach(([a,r])=>{a==="className"?i.className=r:a==="innerHTML"?i.innerHTML=r:i.setAttribute(a,r)}),n.forEach(a=>i.appendChild(a)),i}function Ee(){const e=window.location.hash.slice(1).toLowerCase();return Q[e]?e:"home"}function Le(){const e=x("nav",{className:"site-nav"}),t=x("a",{href:"#home",className:"brand-link"});t.innerHTML="<strong>Oil Painting Mondays</strong>",e.appendChild(t);const n=x("div",{className:"nav-links"});return["home","about","artists","gallery","events","faq","contact"].forEach(a=>{const r=Q[a];if(!r)return;const s=x("a",{href:`#${a}`,className:"nav-link"});s.textContent=r.title,s.dataset.page=a,n.appendChild(s)}),e.appendChild(n),e}function Be(){const e=x("footer",{className:"site-footer"});return e.innerHTML=`
    <div class="footer-copy">© ${new Date().getFullYear()} Oil Painting Mondays</div>
    <div class="footer-links">
      <a href="#privacy-policy">Privacy Policy</a>
      <a href="#terms-of-purchase">Terms of Purchase</a>
      <a href="#returns-policy">Returns Policy</a>
      <a href="#shipping-pickup">Shipping & Pickup</a>
    </div>
  `,e}function ne(){const e=x("section",{className:"painting-grid"});return We.forEach(t=>{const n=x("article",{className:"painting-card"});n.innerHTML=`
      <div class="painting-card-body">
        <h3>${t.title}</h3>
        <p class="meta"><strong>${t.artist}</strong> · ${t.medium}</p>
        <p>${t.description}</p>
        <ul class="painting-meta">
          <li><strong>Size:</strong> ${t.size}</li>
          <li><strong>Price:</strong> ${t.price}</li>
          <li><strong>Status:</strong> ${t.status}</li>
        </ul>
      </div>
      <div class="painting-card-footer">
        <a href="#contact" class="button button-ghost">Reserve This Painting</a>
      </div>
    `,e.appendChild(n)}),e}function Fe(){const e=x("section",{className:"form-wrapper"});e.innerHTML=`
    <h2>Reserve a Painting or Send an Inquiry</h2>
    <form id="contact-form" class="contact-form">
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="your@email.com" required />
      </label>
      <label>
        Subject
        <input type="text" name="subject" placeholder="Painting inquiry or event question" required />
      </label>
      <label>
        Message
        <textarea name="message" rows="5" placeholder="Tell us what you’d like to reserve or ask about." required></textarea>
      </label>
      <div class="form-actions">
        <button type="submit" class="button">Send Inquiry</button>
      </div>
      <p class="form-note">This is a demo site. Submitting the form opens your email client with a pre-filled message.</p>
    </form>
  `;const t=e.querySelector("#contact-form");return t.addEventListener("submit",n=>{n.preventDefault();const i=new FormData(t),a=encodeURIComponent(i.get("subject")),r=encodeURIComponent(`Name: ${i.get("name")}
Email: ${i.get("email")}

${i.get("message")}`);window.location.href=`mailto:hello@oilpaintingmondays.com?subject=${a}&body=${r}`}),e}function oe(){const e=Ee(),t=Q[e];document.title=`${t.title} · Oil Painting Mondays`,q.innerHTML="",q.appendChild(Le());const n=x("main",{className:"site-main"});if(n.innerHTML=`<section class="page-content">${f.parse(t.raw)}</section>`,e==="gallery"&&(n.appendChild(x("h2",{className:"section-heading"},[document.createTextNode("Featured Works")])),n.appendChild(ne())),e==="home"){const i=x("section",{className:"home-featured"});i.innerHTML=`
      <h2>Featured Paintings</h2>
      <p>Enjoy a curated preview of original oil paintings available to reserve.</p>
    `,i.appendChild(ne()),n.appendChild(i)}e==="contact"&&n.appendChild(Fe()),q.appendChild(n),q.appendChild(Be()),Ne(e)}function Ne(e){document.querySelectorAll(".nav-link").forEach(t=>{t.classList.toggle("active",t.dataset.page===e)})}window.addEventListener("hashchange",oe);window.addEventListener("DOMContentLoaded",oe);
