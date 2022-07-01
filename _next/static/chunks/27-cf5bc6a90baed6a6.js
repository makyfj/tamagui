(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{69586:function(e,r,t){"use strict";t.d(r,{D:function(){return o}});var s=t(2784);function o(e){const r=s.useRef({value:e,previous:e});return s.useMemo((()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous)),[e])}},78012:function(e,r,t){const s=t(2784),{Platform:o,processColor:a}=t(30976),n=t(9654);function i(e){if(e){if(!Array.isArray(e)||2===e.length)return Array.isArray(e)?e:[e.x,e.y];console.warn("start and end props for LinearGradient must be of the format [x,y] or {x, y}")}}r.o=class extends s.Component{render(){const{colors:e,locations:r,start:t,end:l,...c}=this.props;let d=r;return r&&e.length!==r.length&&(console.warn("LinearGradient colors and locations props should be arrays of the same length"),d=r.slice(0,e.length)),s.createElement(n,{...c,colors:o.select({web:e,default:e.map(a)}),locations:d,startPoint:i(t),endPoint:i(l)})}}},9654:function(e,r,t){const s=t(2784),{View:o}=t(30976),{normalizeColor:a}=t(96934);e.exports=function({colors:e,locations:r,startPoint:t,endPoint:n,...i}){const[l,c]=s.useState(null),{width:d=1,height:_=1}=l??{},m=`linear-gradient(${s.useMemo((()=>{const[e,r]=(()=>{let e=[0,0];Array.isArray(t)&&(e=[null!=t[0]?t[0]:0,null!=t[1]?t[1]:0]);let r=[0,1];return Array.isArray(n)&&(r=[null!=n[0]?n[0]:0,null!=n[1]?n[1]:1]),[e,r]})();e[0]*=d,r[0]*=d,e[1]*=_,r[1]*=_;const s=r[1]-e[1],o=r[0]-e[0];return 90+180*Math.atan2(s,o)/Math.PI}),[d,_,t,n])}deg, ${s.useMemo((()=>e.map(((e,t)=>{let s=a(e);if(r&&r[t]){s+=` ${100*Math.max(0,Math.min(1,r[t]))}%`}return s}))),[e,r]).join(",")})`;return s.createElement(o,{...i,style:[i.style,{backgroundImage:m}],onLayout:e=>{const{x:r,y:t,width:s,height:o}=e.nativeEvent.layout,a=l??{x:0,y:0,width:1,height:1};r===a.x&&t===a.y&&s===a.width&&o===a.height||c({x:r,y:t,width:s,height:o}),i.onLayout&&i.onLayout(e)}})}},96934:function(e,r,t){const{processColor:s}=t(30976);r.normalizeColor=function(e,r=1){if(null==e)return;if("string"===typeof e&&(e=>"currentcolor"===e||"currentColor"===e||"inherit"===e||0===e.indexOf("var("))(e))return e;const t=s(e);if(null!=t){return`rgba(${t>>16&255},${t>>8&255},${255&t},${((t>>24&255)/255*r).toFixed(2)})`}}},50381:function(e,r,t){"use strict";var s=t(91706),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,r){var t,a,n,i,l,c,d=!1;r||(r={}),t=r.debug||!1;try{if(n=s(),i=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(s){if(s.stopPropagation(),r.format)if(s.preventDefault(),"undefined"===typeof s.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[r.format]||o.default;window.clipboardData.setData(a,e)}else s.clipboardData.clearData(),s.clipboardData.setData(r.format,e);r.onCopy&&(s.preventDefault(),r.onCopy(s.clipboardData))})),document.body.appendChild(c),i.selectNodeContents(c),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(_){t&&console.error("unable to copy using execCommand: ",_),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(r.format||"text",e),r.onCopy&&r.onCopy(window.clipboardData),d=!0}catch(_){t&&console.error("unable to copy using clipboardData: ",_),t&&console.error("falling back to prompt"),a=function(e){var r=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,r)}("message"in r?r.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),c&&document.body.removeChild(c),n()}return d}},96844:function(e,r,t){"use strict";t.r(r)},4647:function(e,r,t){"use strict";t.r(r)},78503:function(e,r,t){"use strict";t.r(r)},86988:function(e,r,t){"use strict";t.r(r)},83079:function(e,r,t){"use strict";t.r(r)},58130:function(e,r,t){"use strict";t.r(r)},63513:function(e,r,t){"use strict";t.r(r)},83212:function(e,r,t){"use strict";t.r(r)},94376:function(e,r,t){"use strict";t.r(r)},34027:function(e,r,t){"use strict";t.r(r)},13493:function(e,r,t){"use strict";t.d(r,{QB:function(){return ie},Zo:function(){return le},wx:function(){return ae}});var s=t(58013),o=t(37328),a=t(96670),n=t(26297),i=t(52322),l=t(56036),c=t(39097),d=t.n(c),_=t(5632),m=t.n(_),p=t(84501),f=t.n(p),u=t(2784),b=t(30976),h=t(24961),g=t(9861),x=t(61342),v=t(35314),w=t(56448),j=t(5146),y=t(26189),k=t(5982),z=t(36475),N=t(46318),L=t(5943),q=t(79751),C=t(29969),R=t(52443),T=t(18585),Z=t(50381),E=t.n(Z),S=t(34989),$=t(65603),B=t(29688);const O=(0,u.forwardRef)(((e,r)=>{const{className:t,children:s,id:o,showLineNumbers:a=!1,isHero:n=!1,isCollapsible:l=!1,isHighlightingLines:c}=e,{0:d,1:_}=(0,u.useState)(n||l),{0:m,1:p}=(0,u.useState)(!1),{0:f,1:h}=(0,u.useState)(void 0),g=(0,u.useRef)(null);return(0,u.useEffect)((()=>{if(g.current){const e=g.current.querySelector("code");if(e){const r=e.innerText.replace(/\n{3,}/g,"\n");h(r)}}}),[g]),(0,u.useEffect)((()=>{m&&f&&E()(f);const e=setTimeout((()=>p(!1)),1500);return()=>{clearTimeout(e)}}),[m]),(0,i.jsxs)("div",{ref:r,className:(0,B.concatClassName)(" _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey  _mb-1ioq2s6 _pos-1ypdr05  "+(n?"  _mr-wr1zjg _ml-1rqe7ph _pr-4rm8mg _pl-1f95fv9":" ")+" "+(n?"  _mr-_gtMd_wr1zm1 _ml-_gtMd_1rqe7s2":" ")),children:[l&&(0,i.jsx)("div",{className:" _r-1bubeif _t-1i9cm2i _jc-1lct8eo _pos-11f8u5c _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-tnn163 _fs-vf3l72 _ai-17do05s _r-_gtMd_1bubeja ",children:(0,i.jsx)(j.zx,{accessibilityLabel:"Show or hide code",size:"$2",paddingRight:"_pr-4rm8kq",paddingLeft:"_pl-1f95ftj",height:"_h-1ukajx7",borderTopLeftRadius:"_btlr-14fwd1r",borderTopRightRadius:"_btrr-jibzt8",borderBottomRightRadius:"_bbrr-wuhapm",borderBottomLeftRadius:"_bblr-10aeuox",onPress:()=>_((e=>!e)),children:d?"Show code":"Hide code"})}),(!d||!l)&&(0,i.jsxs)("div",{className:" _pos-1ypdr05 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,i.jsx)($.S,{ref:g,"data-invert-line-highlight":c,"data-line-numbers":a,className:t,p:0,mb:0,id:o,children:(0,i.jsx)(b.ScrollView,{style:{width:"100%"},contentContainerStyle:{minWidth:"100%"},horizontal:!0,showsHorizontalScrollIndicator:!1,children:(0,i.jsx)(q.E,{p:"$4",backgroundColor:"transparent",f:1,className:t,children:s})})}),(0,i.jsx)(S.w6,{label:m?"Copied":"Copy to clipboard",children:(0,i.jsx)(j.zx,{"aria-label":"Copy code to clipboard",position:"_pos-11f8u5c",size:"$2",display:"_disp-tnn163",right:"_r-1bubefu",top:"_t-n03vpv",paddingRight:"_pr-4rm8kq",paddingLeft:"_pl-1f95ftj",height:"_h-1ukajx7",borderTopLeftRadius:"_btlr-14fwd1r",borderTopRightRadius:"_btrr-jibzt8",borderBottomRightRadius:"_bbrr-wuhapm",borderBottomLeftRadius:"_bblr-10aeuox",icon:m?R.f:T.T,onPress:()=>p(!0),className:" copy-code _disp-_sm_sd4vsq "})})]})]})}));t(96844);var A=t(39170),F=t(45482);const P=(0,F.z)(v.FA,{elevation:"$6",borderTopLeftRadius:"_btlr-14fwd3h",borderTopRightRadius:"_btrr-jibzuy",borderBottomRightRadius:"_bbrr-wuharc",borderBottomLeftRadius:"_bblr-10aeuqn",minHeight:"_mih-vams1r",backgroundColor:"_bc-ea1zmt",minWidth:"_miw-1isr2cd",overflowX:"_ovx-wili9s",overflowY:"_ovy-1b6zsht",justifyContent:"_jc-3mx9pa",alignItems:"_ai-17do05s",transform:"_transform-w2ytz6"});t(86988);var W=t(59213),H=t(7517),D=t(85328);var I=e=>{var{items:r}=e,t=(0,n.Z)(e,["items"]);return(0,i.jsx)(v.FA,(0,a.Z)((0,o.Z)({space:!0},t),{className:(0,B.concatClassName)(t&&t.className||"",t),children:r.map(((e,r)=>(0,i.jsxs)("li",{className:" _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,i.jsx)(D.f,{}),(0,i.jsx)("p",{className:" _lh-1rbdj14 _fos-m9pxzb _letsp-1tlc5w2 _fow-1j6oylj _ussel-1k4z3v8 _col-tdgfk3 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:e})]},r)))}))};t(4647);var M=t(22532);const Q=" _ml-1bhu2ba _o-nk7nd8 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",V=" _lh-1rbdize _fos-m9pxxl _letsp-1tlc5uc _fow-1j6oyjt _col-f1vuru _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",U=e=>(0,i.jsx)("select",(0,o.Z)({},e));t(83079);t(78503);const X=(0,F.z)(x.n,{display:"list-item",tag:"li",pb:"$1"});var G=t(82810);function Y(e){return u.Children.toArray(e).map((e=>{var r;return(null===e||void 0===e||null===(r=e.props)||void 0===r?void 0:r.children)?e.props.children:e}))}t(63513);const J=(0,F.z)(v.FA,{name:"OffsetBox",variants:{size:{hero:{$gtSm:{mx:"$-2"},$gtMd:{mx:"$-4"},$gtLg:{mx:"$-6"}}}}}),K=e=>(0,i.jsx)(v.FA,(0,a.Z)((0,o.Z)({"data-preview":!0,borderBottomStyle:"_bbs-1d05hm9",borderTopStyle:"_bts-j2x5vn",borderLeftStyle:"_bls-69w1u5",borderRightStyle:"_brs-r2rbii",alignItems:"_ai-1hnykjt",position:"_pos-1ypdr05",paddingBottom:"_pb-rnl9q1",paddingTop:"_pt-12emb0i",paddingRight:"_pr-4rm8ll",paddingLeft:"_pl-1f95fue",marginBottom:"_mb-1pkuzxd",borderTopRightRadius:"_btrr-jibzu3",borderTopLeftRadius:"_btlr-14fwd2m",borderTopColor:"_btc-1ubgvm5",borderRightColor:"_brc-lv4h9i",borderBottomColor:"_bbc-1gkdz6n",borderLeftColor:"_blc-11gd9tv",borderTopWidth:"_btw-1k5vq58",borderRightWidth:"_brw-1737c2r",borderBottomWidth:"_bbw-he1b7u",borderLeftWidth:"_blw-np9skm",overflowX:"_ovx-67htlo",overflowY:"_ovy-z14anv",marginTop:"_mt-3qj9ch",marginRight:"_mr-wqi8oa",marginLeft:"_ml-1slqrlv"},e),{className:(0,B.concatClassName)(e&&e.className||"",e)}));t(83212);var ee=t(84786);const re=" _bbs-1d05hm9 _bts-j2x5vn _bls-69w1u5 _brs-r2rbii _maw-ao3bcm _w-1c386nm _transform-fx81n7 _mt-ubbt46 _mb-1ioq2qg _mr-16at4rv _ml-dig7oy _als-vgomwk _bbw-he1b7u _mah-ksh38t _h-18bv641 _fg-15m5m9x _fs-vf3l73 _btw-1k5vpej _brw-1737bc2 _blw-np9rtx _btc-1ubgvm5 _brc-lv4h9i _bbc-1gkdz6n _blc-11gd9tv _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey ";(0,F.z)(v.sL,{display:"table-cell",tag:"td",paddingTop:10});t(94376);var te=t(89187);const se=(0,F.z)(v.FA,{tag:"ul",my:"$1",ml:"$4",mr:"$2"}),oe=" paragraph ";var ae=(0,a.Z)((0,o.Z)({Spacer:h.LZ,ExampleAnimations:W.q,ScrollView:b.ScrollView,Text:g.x,Paragraph:x.n,OffsetBox:J,YStack:v.FA,XStack:v.sL,BenchmarkChart:L.i,Separator:w.Z,Code:q.E,HeroContainer:function(e){let{children:r,demoMultiple:t,smaller:s,noPad:o,alignItems:a}=e;return(0,i.jsx)(v.FA,{display:"_disp-sczph7",position:"_pos-1ypdr05",marginBottom:"_mb-1ioq2s6",marginTop:"_mt-ubbt5w",alignItems:a||"center",borderTopLeftRadius:"_btlr-14fwd3h",borderTopRightRadius:"_btrr-jibzuy",borderBottomRightRadius:"_bbrr-wuharc",borderBottomLeftRadius:"_bblr-10aeuqn",transform:"_transform-w2ytz6",minHeight:"_mih-vb5ao2",paddingTop:"_pt-cp1r1h",paddingBottom:"_pb-eae2il",justifyContent:"_jc-3mx9pa",className:(0,B.concatClassName)(" hero-gradient hero-scroll "+(o?"  _pt-bv6eyc _pb-15pd5p8":" ")+" "+(s?"  _mr-_gtMd_wqi8oa _ml-_gtMd_1slqrlv":" ")+" "+(s?" ":"  _mr-_gtMd_wr1zjg _ml-_gtMd_1rqe7ph")),children:t?(0,i.jsx)("div",{className:" _jc-1y9vvh3 _maw-1amdtsm _mah-58okn3 _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,i.jsxs)(v.sL,{space:"$3",paddingRight:"_pr-4rm8pw",paddingLeft:"_pl-1f95fyp",children:[(0,i.jsx)(z.Q,{name:"blue",children:(0,i.jsx)(P,{children:r})}),(0,i.jsx)(z.Q,{name:"red",children:(0,i.jsx)(P,{children:r})}),(0,i.jsx)(z.Q,{name:"pink",children:(0,i.jsx)(P,{children:r})}),(0,i.jsx)(z.Q,{name:"orange",children:(0,i.jsx)(P,{children:r})}),(0,i.jsx)(z.Q,{name:"green",children:(0,i.jsx)(P,{children:r})}),(0,i.jsx)(z.Q,{name:"yellow",children:(0,i.jsx)(P,{children:r})})]})}):r})}},C),{Highlights:function(e){let{features:r,disableLinks:t}=e;const s=(0,_.useRouter)(),o=u.useContext(ie);return(0,i.jsxs)("div",{className:" _mt-ubbt46 _mb-1ioq2qg _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey _fd-_gtSm_1w148es ",children:[(0,i.jsxs)("div",{className:" _mih-va4awu _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey _mr-_gtSm_16at4sq _fg-_gtSm_15m5m9x _fs-_gtSm_vf3l73 ",children:[(0,i.jsx)("h2",{className:" _ussel-1k4z3v8 _lh-1rbdj2u _fos-m9py11 _letsp-1tlc5xs _col-f1vuru _fow-1lznnsh _mb-1ioq2qg _mt-3qj9ch _mr-wqi8oa _ml-1slqrlv _fofam-dqglny _cur-1gpc3n _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:"Features"}),(0,i.jsx)(v.FA,{tag:"ul",marginTop:"_mt-3qj9ch",marginRight:"_mr-wqi8oa",marginBottom:"_mb-fob1un",marginLeft:"_ml-1slqrlv",paddingTop:"_pt-bv6eyc",paddingRight:"_pr-va8vyl",paddingBottom:"_pb-15pd5p8",paddingLeft:"_pl-wh8dj4",space:!0,children:(0,i.jsx)(I,{space:"$2",items:r})})]}),!t&&(0,i.jsxs)(v.FA,{space:"$3",tag:"nav","aria-labelledby":"site-component-info-header",children:[(0,i.jsx)("div",{className:" _pe-892hgu _o-k3ic96 _ovx-wili9s _ovy-1b6zsht _zi-72oqho _mt-18tdrzn _mr-ke1hh6 _mb-1nqr1r9 _ml-dut0qp _h-18bv6uq _w-1c387eb _pos-11f8u5c _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,i.jsx)("h2",{id:"site-component-info-heading",children:"Component Reference Links"})}),(0,i.jsx)("div",{className:" _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-17do05s ",children:(0,i.jsx)(U,{value:o.version,onChange:e=>s.push("./".concat(o.name,"/").concat(e.target.value)),children:(o.versions||[]).map(((e,r)=>(0,i.jsxs)("option",{value:e,children:[e,0===r&&" (latest)"]},e)))})}),(0,i.jsx)("div",{className:" _bbs-1d05hm9 _bts-j2x5vn _bls-69w1u5 _brs-r2rbii _transform-16h52km _bbw-he1b7u _mah-ksh38t _h-18bv641 _fg-15m5m9x _fs-vf3l73 _btw-1k5vpej _brw-1737bc2 _blw-np9rtx _btc-1ubgvm5 _brc-lv4h9i _bbc-1gkdz6n _blc-11gd9tv _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey "}),(0,i.jsxs)(v.FA,{marginBottom:"_mb-1ioq2s6",space:"$1",children:[(0,i.jsx)(M.r,{href:"https://github.com/tamagui/tamagui/tree/master/packages/tamagui/src/views/".concat(o.component,".tsx"),target:"_blank",children:(0,i.jsxs)(v.sL,{alignItems:"_ai-17do05s",space:"$1",children:[(0,i.jsx)("span",{className:V,children:"View source"}),(0,i.jsx)("div",{className:Q,children:(0,i.jsx)(H.d,{size:12,color:"var(--colorHover)"})})]})}),(0,i.jsx)(M.r,{href:"https://www.npmjs.com/package/tamagui",target:"_blank",children:(0,i.jsxs)(v.sL,{alignItems:"_ai-17do05s",space:"$1",children:[(0,i.jsx)("span",{className:V,children:"View on npm"}),(0,i.jsx)("div",{className:Q,children:(0,i.jsx)(H.d,{size:12,color:"var(--colorHover)"})})]})}),(0,i.jsx)(M.r,{href:"https://github.com/tamagui/tamagui/issues/new/choose",target:"_blank",children:(0,i.jsxs)(v.sL,{alignItems:"_ai-17do05s",space:"$1",children:[(0,i.jsx)("span",{className:V,children:"Report an issue"}),(0,i.jsx)("div",{className:Q,children:(0,i.jsx)(H.d,{size:12,color:"var(--colorHover)"})})]})}),o.aria&&(0,i.jsx)("div",{className:" _mb-1ioq2qg _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,i.jsx)(M.r,{theme:"blue",href:o.aria,target:"_blank",children:(0,i.jsxs)("div",{className:" _pos-1ypdr05 _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,i.jsx)(z.Q,{name:"alt1",children:(0,i.jsx)("p",{className:" _lh-1rbdize _fos-m9pxxl _letsp-1tlc5uc _fow-1j6oyjt _col-f1vuru _ussel-1k4z3v8 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:"ARIA design pattern"})}),(0,i.jsx)("div",{className:" _ml-dig7md _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,i.jsx)(z.Q,{name:"alt2",children:(0,i.jsx)("span",{className:" _ww-fl0oek _boxs-1pkamc3 _fofam-1f039uq _disp-1ffesbf ",children:(0,i.jsx)(H.d,{size:12,color:"var(--color)"})})})})]})})})]})]})]})},PropsTable:function(e){let{data:r,"aria-label":t,"aria-labelledby":s}=e;const o=!(!t&&!s);return(0,i.jsxs)("div",{"aria-label":o?t:"Component Props","aria-labelledby":s,className:" _bbs-1d05hm9 _bts-j2x5vn _bls-69w1u5 _brs-r2rbii _fg-15m5m9x _fs-vf3l73 _btc-1ubgvm5 _brc-lv4h9i _bbc-1gkdz6n _blc-11gd9tv _btw-1k5vq58 _brw-1737c2r _bbw-he1b7u _blw-np9skm _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey _mr-wr1zjg _ml-1rqe7ph _ovx-wili9s _ovy-1b6zsht _btlr-14fwd3h _btrr-jibzuy _bbrr-wuharc _bblr-10aeuqn _mt-ubbt5w _mb-1ioq2s6 _mr-_sm_wqi8oa _ml-_sm_1slqrlv ",children:[(0,i.jsx)("div",{className:" _bc-11htjns _pr-4rm8mg _pl-1f95fv9 _pt-12emazn _pb-rnl9ob _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-17do05s ",children:(0,i.jsx)("h3",{className:" _ussel-1k4z3v8 _lh-1097201 _fos-9gr3ie _letsp-1h6t8gf _fow-1co50rc _textTransform-6qyi9u _col-kn6374 _mt-3qj9ch _mr-wqi8oa _mb-fob1un _ml-1slqrlv _fofam-1kcsehy _cur-1gpc3n _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:"Props"})}),r.map(((e,r)=>{let{name:t,type:s,required:o,default:a,description:n}=e;return(0,i.jsxs)(ee.HC,{paddingTop:"_pt-bv6eyc",paddingRight:"_pr-va8vyl",paddingBottom:"_pb-15pd5p8",paddingLeft:"_pl-wh8dj4",children:[(0,i.jsxs)("div",{className:" _w-1y5rwnu _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,i.jsxs)("div",{className:" _pr-4rm8mg _pl-1f95fv9 _pt-12emb0i _pb-rnl9p6 _pos-1ypdr05 _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey _fd-_sm_1fwxi70 ",children:[(0,i.jsx)("div",{className:" _b-14cfui5 _r-1ba2x7g _l-wzdu9 _t-1ko9whv _pos-11f8u5c _o-nk7nd8 _zi-oiltss _bc-ea1zmt _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey "}),(0,i.jsx)(v.sL,{alignItems:"_ai-17do05s",minWidth:"_miw-1yhvnmc",space:!0,children:(0,i.jsxs)("h4",{className:" _ussel-1k4z3v8 _lh-19e24ag _fos-s1rvl3 _letsp-1m8xia8 _w-1827bqs _textTransform-1knq7p3 _fow-1lznnsh _col-f1vuru _mt-3qj9ch _mr-wqi8oa _mb-fob1un _ml-1slqrlv _fofam-jiij8v _cur-1gpc3n _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:[t,o?(0,i.jsxs)("span",{className:" _lh-1rbdj14 _letsp-1tlc5w2 _fow-1j6oylj _col-f1vuru _ussel-1k4z3v8 _o-nk7nd8 _fos-jgrrwr _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:[" ",(0,i.jsx)("span",{className:" _lh-1rbdj14 _fos-m9pxzb _letsp-1tlc5w2 _col-f1vuru _ussel-1k4z3v8 _fow-1lznk30 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:"(required)"})]}):null]})}),(0,i.jsx)("div",{className:re}),(0,i.jsxs)(v.sL,{alignItems:"_ai-17do05s",minWidth:"_miw-1yhvnmc",flexGrow:"_fg-15m5m9y",flexShrink:"_fs-vf3l73",separator:(0,i.jsx)("div",{className:re}),className:" _ai-_xs_1hnykjt _fd-_xs_1fwxi70 ",children:[(0,i.jsx)("p",{className:" _lh-19e248q _fos-s1rvjd _letsp-1m8xi8i _fow-1wni3ux _col-f1vuru _ussel-1k4z3v8 _whiteSpace-h2k65k _textOverflow-1so3e3k _maw-1amdtsm _mr-kf03b1 _ovx-wili9s _ovy-1b6zsht _o-nk7ndb _cur-1gpc3n _fofam-jiij8v _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:s}),(0,i.jsx)("div",{className:" _fd-1w148es _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-17do05s ",children:Boolean(a)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:" _lh-1rbdize _fos-m9pxxl _letsp-1tlc5uc _fow-1j6oyjt _col-f1vuru _ussel-1k4z3v8 _o-nk7nd8 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:"Default:\xa0"}),(0,i.jsx)(q.E,{my:"$-1",bc:"$backgroundPress",children:a})]}):null})]})]}),!!n&&(0,i.jsx)("div",{className:" _pr-4rm8mg _pl-1f95fv9 _pt-12emazn _pb-rnl9ob _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,i.jsx)("p",{className:" _lh-1rbdize _fos-m9pxxl _letsp-1tlc5uc _fow-1j6oyjt _col-f1vuru _ussel-1k4z3v8 _o-k3gkp4 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:n})})]}),(0,i.jsx)("div",{className:" _bbs-1d05hm9 _bts-j2x5vn _bls-69w1u5 _brs-r2rbii _transform-16h52km _mt-3qjatv _mb-fob3c1 _bbw-he1b7u _mah-ksh38t _h-18bv641 _fg-15m5m9x _fs-vf3l73 _btw-1k5vpej _brw-1737bc2 _blw-np9rtx _btc-1ubgvm5 _brc-lv4h9i _bbc-1gkdz6n _blc-11gd9tv _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey "})]},"".concat(t,"-").concat(r))}))]})},Description:te.D,UL:se,LI:X,DeployToVercel:()=>(0,i.jsx)("a",{href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftamagui%2Fstarters&root-directory=next-expo-solito/next&envDescription=Set%20this%20environment%20variable%20to%201%20for%20Turborepo%20to%20cache%20your%20node_modules.&envLink=https%3A%2F%2Ftamagui.dev&project-name=tamagui-app&repo-name=tamagui-app&demo-title=Tamagui%20App%20%E2%9A%A1%EF%B8%8F&demo-description=Tamagui%20React%20Native%20%2B%20Next.js%20starter&demo-url=https%3A%2F%2Ftamagui.dev%2Fstarter&demo-image=https%3A%2F%2Ftamagui.dev%2Fblog%2Fintroducing-tamagui%2Fhero.png",target:"_blank",children:(0,i.jsx)("img",{alt:"Deploy with Vercel",style:{height:32,width:90},src:"https://vercel.com/button"})}),Beta:()=>(0,i.jsx)(j.zx,{accessibilityLabel:"Beta blog post",pointerEvents:"_pe-892hgu",size:"$2",paddingRight:"_pr-4rm8kq",paddingLeft:"_pl-1f95ftj",height:"_h-1ukajx7",borderTopLeftRadius:"_btlr-14fwd1r",borderTopRightRadius:"_btrr-jibzt8",borderBottomRightRadius:"_bbrr-wuhapm",borderBottomLeftRadius:"_bblr-10aeuox",theme:"pink_alt3",transform:"_transform-11uuuwn",right:"_r-1bacak7",top:"_t-1i99iuc",position:"_pos-11f8u5c",children:"Beta"}),IntroParagraph:e=>{var{children:r}=e,t=(0,n.Z)(e,["children"]);return(0,i.jsx)(x.n,(0,a.Z)((0,o.Z)({tag:"span",size:"$5",color:"_col-f1vuru",fontFamily:"_fofam-dqglny",fontWeight:"_fow-1j6oyme",letterSpacing:"_letsp-1tlc5wx",fontSize:"_fos-m9py06",lineHeight:"_lh-1rbdj1z",marginTop:"_mt-ubbt3b",display:"_disp-qr7aq3"},t),{className:(0,B.concatClassName)(oe+(t&&t.className||""),t),children:r}))},Note:e=>(0,i.jsx)(v.FA,(0,a.Z)((0,o.Z)({tag:"aside",borderTopLeftRadius:"_btlr-14fwd2m",borderTopRightRadius:"_btrr-jibzu3",borderBottomRightRadius:"_bbrr-wuhaqh",borderBottomLeftRadius:"_bblr-10aeups",marginBottom:"_mb-1ioq2t1",marginTop:"_mt-ubbt6r"},e),{className:(0,B.concatClassName)(e&&e.className||"",e)})),Notice:e=>{var{children:r,theme:t="yellow"}=e,s=(0,n.Z)(e,["children","theme"]);return(0,i.jsx)(z.Q,{name:t,children:(0,i.jsx)(v.sL,(0,a.Z)((0,o.Z)({borderBottomStyle:"_bbs-1d05hm9",borderTopStyle:"_bts-j2x5vn",borderLeftStyle:"_bls-69w1u5",borderRightStyle:"_brs-r2rbii",borderTopLeftRadius:"_btlr-14fwd3h",borderTopRightRadius:"_btrr-jibzuy",borderBottomRightRadius:"_bbrr-wuharc",borderBottomLeftRadius:"_bblr-10aeuqn",backgroundColor:"_bc-ea1zmt",paddingTop:"_pt-12emb0i",paddingBottom:"_pb-rnl9p6",paddingRight:"_pr-4rm8mg",paddingLeft:"_pl-1f95fv9",borderTopColor:"_btc-1ubgvm5",borderRightColor:"_brc-lv4h9i",borderBottomColor:"_bbc-1gkdz6n",borderLeftColor:"_blc-11gd9tv",borderTopWidth:"_btw-1k5vq58",borderRightWidth:"_brw-1737c2r",borderBottomWidth:"_bbw-he1b7u",borderLeftWidth:"_blw-np9skm",space:"$3",position:"_pos-1ypdr05",marginTop:"_mt-ubbt5w",marginBottom:"_mb-1ioq2s6"},s),{className:(0,B.concatClassName)(s&&s.className||"",s),children:(0,i.jsx)(z.Q,{name:"alt1",children:(0,i.jsx)("p",{className:" _lh-1rbdj14 _fos-m9pxzb _letsp-1tlc5w2 _fow-1j6oylj _col-f1vuru _ussel-1k4z3v8 _mb-1nqr38n _mt-18tdth1 _pt-12emazn _pb-rnl9ob _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf paragraph-parent ",children:Y(r)})})}))})},h1:e=>(0,i.jsx)(y.H1,(0,a.Z)((0,o.Z)({marginBottom:"_mb-1ioq2qg",position:"_pos-1ypdr05",width:"_w-5pax6y"},e),{className:(0,B.concatClassName)(e&&e.className||"",e)})),h2:e=>{var{children:r}=e,t=(0,n.Z)(e,["children"]);return(0,i.jsx)(y.H2,(0,a.Z)((0,o.Z)({marginTop:"_mt-ubbt6r",size:"$9",letterSpacing:"_letsp-1gghvhr",color:"_col-f1vuru",textTransform:"_textTransform-6qyif0",fontFamily:"_fofam-1kcsehy",fontWeight:"_fow-1co50wi",fontSize:"_fos-9gr3nk",lineHeight:"_lh-1097257","data-heading":!0},t),{className:(0,B.concatClassName)(t&&t.className||"",t),children:r}))},h3:e=>{var{children:r,id:t}=e,s=(0,n.Z)(e,["children","id"]);return(0,i.jsxs)(ne,{mt:"$5",mb:"$1",id:t,children:[(0,i.jsx)(y.H3,(0,a.Z)((0,o.Z)({size:"$8",color:"_col-f1vuru",textTransform:"_textTransform-6qyie5",fontFamily:"_fofam-1kcsehy",fontWeight:"_fow-1co50vn",letterSpacing:"_letsp-1h6t8kq",fontSize:"_fos-9gr3mp",lineHeight:"_lh-109724c","data-heading":!0},s),{className:(0,B.concatClassName)(s&&s.className||"",s),children:r})),ce(r)]})},h4:e=>(0,i.jsx)(y.H4,(0,a.Z)((0,o.Z)({marginTop:"_mt-ubbt7m"},e),{className:(0,B.concatClassName)(e&&e.className||"",e)})),h5:e=>(0,i.jsx)(y.H5,(0,a.Z)((0,o.Z)({marginTop:"_mt-ubbt6r"},e),{className:(0,B.concatClassName)(e&&e.className||"",e)})),p:e=>(0,i.jsx)(x.n,(0,a.Z)((0,o.Z)({marginTop:"_mt-ubbt51",marginBottom:"_mb-1ioq2rb",display:"_disp-qr7aq3"},e),{className:(0,B.concatClassName)(oe+(e&&e.className||""),e)})),a:e=>{var{href:r="",children:t}=e,s=(0,n.Z)(e,["href","children"]);return(0,i.jsx)(d(),{href:r,passHref:!0,children:(0,i.jsxs)(x.n,(0,a.Z)((0,o.Z)({fontSize:"_fos-jgrrwr",tag:"a",cursor:"_cur-how55z",display:"_disp-1ffesbf"},s),{className:(0,B.concatClassName)(s&&s.className||"",s),children:[t,r.startsWith("http")?(0,i.jsxs)(i.Fragment,{children:["\xa0",(0,i.jsx)("span",{className:" _transform-w303y8 _mr-wqia5o _fos-jgrrwr _ww-fl0oek _boxs-1pkamc3 _fofam-1f039uq _disp-tnn163 ",children:(0,i.jsx)(A.O,{})})]}):null]}))})},hr:()=>(0,i.jsxs)("div",{className:" _maw-ao3dgo _mr-kf03b1 _ml-dvrmkk _mt-ubbt7m _mb-1ioq2tw _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,i.jsx)("span",{className:" _bc-0hover-lf66el _pe-892hgu _fos-17ckeve _disp-sczph7 _h-18bv641 _lh-fzayvx _o-1omt5z9 _ww-fl0oek _boxs-1pkamc3 _fofam-1f039uq "}),(0,i.jsx)("div",{className:" _bbs-1d05hm9 _fg-15m5m9x _fs-vf3l73 _bbw-he1b7u _bbc-1gkdz6n _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey "})]}),ul:e=>{let{children:r}=e;return(0,i.jsx)(se,{children:u.Children.toArray(r).map((e=>"string"===typeof e?null:e))})},ol:e=>(0,i.jsx)(v.FA,(0,a.Z)((0,o.Z)({},e),{tag:"ol",marginBottom:"_mb-1ioq2rb",className:(0,B.concatClassName)(e&&e.className||"",e)})),li:e=>(0,i.jsx)(X,{children:(0,i.jsx)("span",{className:" _lh-1rbdj14 _fos-m9pxzb _letsp-1tlc5w2 _fow-1j6oylj _col-f1vuru _ussel-1k4z3v8 _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:e.children})}),strong:e=>(0,i.jsx)(x.n,(0,a.Z)((0,o.Z)({tag:"strong",fontSize:"_fos-jgrrwr"},e),{fontWeight:"_fow-1lznn1s",className:(0,B.concatClassName)(e&&e.className||"",e)})),img:e=>{var r=(0,s.Z)({},e);return(0,i.jsx)("div",{className:" _mt-ubbt7m _mb-1ioq2tw _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,i.jsx)(v.FA,(0,a.Z)((0,o.Z)({tag:"img"},r),{maxWidth:"_maw-1amdtsm",className:(0,B.concatClassName)(r&&r.className||"",r)}))})},pre:e=>{let{children:r}=e;return(0,i.jsx)(i.Fragment,{children:r})},code:e=>{const{hero:r,line:t,scrollable:s,className:l,children:c,id:d,showLineNumbers:_,collapsible:m}=e,p=(0,n.Z)(e,["hero","line","scrollable","className","children","id","showLineNumbers","collapsible"]);return l?(0,i.jsx)(O,(0,a.Z)((0,o.Z)({isHighlightingLines:void 0!==t,className:l,isHero:void 0!==r,isCollapsible:void 0!==r||void 0!==m,isScrollable:void 0!==s,showLineNumbers:void 0!==_},p),{children:c})):(0,i.jsx)(q.w,{children:c})},Image:e=>{var{children:r,size:t}=e,s=(0,n.Z)(e,["children","size"]);return(0,i.jsxs)(J,{size:t,tag:"figure",f:1,mx:0,mb:"$3",ai:"center",jc:"center",ov:"hidden",children:[(0,i.jsx)(k.E,(0,a.Z)((0,o.Z)({maxWidth:"_maw-1amdtsm"},s),{className:(0,B.concatClassName)(s&&s.className||"",s)})),(0,i.jsx)("figcaption",{className:" _mt-ubbt46 _col-pfaxet _lh-1x7rq9w _ww-fl0oek _boxs-1pkamc3 _fofam-1f039uq _disp-1ffesbf ",children:r})]})},Video:e=>{var{small:r,large:t,src:s,children:o="",muted:a=!0,autoPlay:l=!0,controls:c,size:d}=e;(0,n.Z)(e,["small","large","src","children","muted","autoPlay","controls","size"]);return(0,i.jsxs)("figure",{className:" _mt-ubbt7m _mb-1ioq2tw _mr-wqi8oa _ml-1slqrlv _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:[(0,i.jsx)(J,{size:d,children:(0,i.jsx)("video",{src:s,autoPlay:l,playsInline:!0,muted:a,controls:c,loop:!0,style:{width:"100%",display:"block"}})}),(0,i.jsx)("figcaption",{className:" _col-pfaxet _mt-ubbt46 _lh-1x7rq9w _ww-fl0oek _boxs-1pkamc3 _fofam-1f039uq _disp-1ffesbf ",children:o})]})},blockquote:e=>{var{children:r}=e,t=(0,n.Z)(e,["children"]);return(0,i.jsx)(v.FA,(0,a.Z)((0,o.Z)({borderLeftStyle:"_bls-69w1u5",justifyContent:"_jc-3mx9pa",borderTopColor:"_btc-1ubgvm5",borderRightColor:"_brc-lv4h9i",borderBottomColor:"_bbc-1gkdz6n",borderLeftColor:"_blc-11gd9tv",borderLeftWidth:"_blw-np9skm",marginLeft:"_ml-dig7o3",paddingLeft:"_pl-1f95fv9",marginTop:"_mt-ubbt5w",marginBottom:"_mb-1ioq2s6"},t),{className:(0,B.concatClassName)(t&&t.className||"",t),children:(0,i.jsx)("p",{className:" _lh-1rbdj14 _fos-m9pxzb _letsp-1tlc5w2 _fow-1j6oylj _ussel-1k4z3v8 _o-k3gkp4 _col-f1vuru _whiteSpace-it7tkx _cur-1gpc3n _fofam-dqglny _ww-fl0oek _boxs-1pkamc3 _disp-1ffesbf ",children:u.Children.toArray(r).map((e=>{var r;return(null===e||void 0===e||null===(r=e.props)||void 0===r?void 0:r.children)?e.props.children:e}))})}))},Preview:e=>(0,i.jsx)(K,(0,a.Z)((0,o.Z)({},e),{mt:"$5"})),RegisterLink:e=>{let{id:r,index:t,href:s}=e;const o=s.startsWith("http");return u.useEffect((()=>{const e=document.getElementById(r);if(!e)return;const a=e.querySelectorAll(".highlight-word")[t-1];if(!a)return;const n=()=>a.classList.add("on"),i=()=>a.classList.remove("on"),l=()=>o?window.location.replace(s):m().push(s);return a.addEventListener("mouseenter",n),a.addEventListener("mouseleave",i),a.addEventListener("click",l),()=>{a.removeEventListener("mouseenter",n),a.removeEventListener("mouseleave",i),a.removeEventListener("click",l)}}),[]),null},H:e=>{var{id:r,index:t}=e,s=(0,n.Z)(e,["id","index"]);const l=u.useRef(null);return u.useEffect((()=>{const e=l.current,s=document.getElementById(r);if(!s)return;const o=s.querySelectorAll(".highlight-word"),a=f()(t).map((e=>e-1));if(Math.max(...a)>=o.length)return;const n=()=>a.forEach((e=>o[e].classList.add("on"))),i=()=>a.forEach((e=>o[e].classList.remove("on")));return null===e||void 0===e||e.addEventListener("mouseenter",n),null===e||void 0===e||e.addEventListener("mouseleave",i),()=>{null===e||void 0===e||e.removeEventListener("mouseenter",n),null===e||void 0===e||e.removeEventListener("mouseleave",i)}}),[]),(0,i.jsx)(x.n,(0,a.Z)((0,o.Z)({cursor:"_cur-1dv50rv",ref:l,fontFamily:"$mono"},s),{className:(0,B.concatClassName)(s&&s.className||"",s)}))},MediaPlayerDemo:e=>{var{theme:r}=e,t=(0,n.Z)(e,["theme"]);return(0,i.jsx)(z.Q,{name:r,children:(0,i.jsx)(G.S,(0,o.Z)({},t))})},GroupDisabledDemo:()=>(0,i.jsxs)(N.Z,{alignSelf:"_als-10qrpfq",disabled:!0,children:[(0,i.jsx)(j.zx,{children:"First"}),(0,i.jsx)(j.zx,{children:"Second"}),(0,i.jsx)(j.zx,{children:"Third"})]}),DemoButton:()=>(0,i.jsx)(j.zx,{children:"Hello world"})});const ne=e=>{var{id:r,children:t}=e,s=(0,n.Z)(e,["id","children"]);return(0,i.jsxs)(v.sL,(0,a.Z)((0,o.Z)({tag:"a",href:"#".concat(r),id:r,"data-id":r,alignItems:"_ai-17do05s",display:"_disp-tnn163",space:!0},s),{className:(0,B.concatClassName)(s&&s.className||"",s),children:[t,(0,i.jsx)("span",{className:" _o-nk7nd6 _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _fs-vf3l72 _ai-o35pey ",children:(0,i.jsx)(l.r,{size:12,color:"var(--color)","aria-hidden":!0})})]}))},ie=u.createContext({});function le(e){const{frontmatter:r,children:t}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(ie.Provider,{value:r,children:t})})}const ce=e=>u.Children.map(e,(e=>"string"!==typeof e?e:null)).flat();t(58130)},89187:function(e,r,t){"use strict";t.d(r,{D:function(){return f}});var s=t(37328),o=t(96670),a=t(26297),n=t(52322),i=t(2784),l=t(54503),c=t(81223),d=t(36475);i.createElement;const _=e=>{const r=(0,i.useContext)(c.r2),[t,s]=(0,i.useState)(null);return l.$L&&"undefined"===typeof document||((0,i.useLayoutEffect)((()=>{r&&t!==r.parentName&&s(r.parentName)}),[null==r?void 0:r.parentName]),(0,i.useLayoutEffect)((()=>{if(r)return r.onChangeTheme((()=>{s(r.parentName)}))}),[])),r&&e.children?i.createElement(d.Q,{className:"tui-theme-reset",reset:!0,name:t},e.children):e.children||null};var m=t(26189),p=t(29688),f=e=>{var{children:r}=e,t=(0,a.Z)(e,["children"]);const i="string"===typeof r?r:r.props.children;return(0,n.jsx)(_,{children:(0,n.jsx)(m.H3,(0,o.Z)((0,s.Z)({width:"_w-5pax6y",position:"_pos-1ypdr05",size:"$7",letterSpacing:"_letsp-149hmjt",color:"_col-f1vuru",textTransform:"_textTransform-6qyida",fontFamily:"_fofam-1kcsehy",fontSize:"_fos-9gr3lu",lineHeight:"_lh-109723h",theme:"alt2",fontWeight:"_fow-1lznk30",tag:"p",marginTop:"_mt-ubbt2g",marginBottom:"_mb-1ioq2qg",maxWidth:"_maw-1amdtsm"},t),{className:(0,p.concatClassName)(t&&t.className||"",t),children:i}))})};t(34027)},84501:function(e,r){function t(e){let r,t=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))t.push(parseInt(s,10));else if(r=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,o,a]=r;if(s&&a){s=parseInt(s),a=parseInt(a);const e=s<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let r=s;r!==a;r+=e)t.push(r)}}return t}r.default=t,e.exports=t},91706:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var r=document.activeElement,t=[],s=0;s<e.rangeCount;s++)t.push(e.getRangeAt(s));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(r){e.addRange(r)})),r&&r.focus()}}},52443:function(e,r,t){"use strict";t.d(r,{f:function(){return m}});var s=t(2784),o=t(70810),a=t(74479),n=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const _=e=>{const r=e,{color:t="black",size:a=24}=r,n=((e,r)=>{var t={};for(var s in e)l.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&i)for(var s of i(e))r.indexOf(s)<0&&c.call(e,s)&&(t[s]=e[s]);return t})(r,["color","size"]);return s.createElement(o.ny,((e,r)=>{for(var t in r||(r={}))l.call(r,t)&&d(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&d(e,t,r[t]);return e})({width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),s.createElement(o.y$,{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement(o.aH,{points:"22 4 12 14.01 9 11.01",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};_.displayName="CheckCircle";const m=(0,s.memo)((0,a.H)(_))},18585:function(e,r,t){"use strict";t.d(r,{T:function(){return m}});var s=t(2784),o=t(70810),a=t(74479),n=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const _=e=>{const r=e,{color:t="black",size:a=24}=r,n=((e,r)=>{var t={};for(var s in e)l.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&i)for(var s of i(e))r.indexOf(s)<0&&c.call(e,s)&&(t[s]=e[s]);return t})(r,["color","size"]);return s.createElement(o.ny,((e,r)=>{for(var t in r||(r={}))l.call(r,t)&&d(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&d(e,t,r[t]);return e})({width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),s.createElement(o.y$,{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement(o.UL,{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};_.displayName="Clipboard";const m=(0,s.memo)((0,a.H)(_))},7517:function(e,r,t){"use strict";t.d(r,{d:function(){return m}});var s=t(2784),o=t(70810),a=t(74479),n=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const _=e=>{const r=e,{color:t="black",size:a=24}=r,n=((e,r)=>{var t={};for(var s in e)l.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&i)for(var s of i(e))r.indexOf(s)<0&&c.call(e,s)&&(t[s]=e[s]);return t})(r,["color","size"]);return s.createElement(o.ny,((e,r)=>{for(var t in r||(r={}))l.call(r,t)&&d(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&d(e,t,r[t]);return e})({width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),s.createElement(o.y$,{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement(o.aH,{points:"15 3 21 3 21 9",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement(o.x1,{x1:"10",y1:"14",x2:"21",y2:"3",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};_.displayName="ExternalLink";const m=(0,s.memo)((0,a.H)(_))},56036:function(e,r,t){"use strict";t.d(r,{r:function(){return m}});var s=t(2784),o=t(70810),a=t(74479),n=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const _=e=>{const r=e,{color:t="black",size:a=24}=r,n=((e,r)=>{var t={};for(var s in e)l.call(e,s)&&r.indexOf(s)<0&&(t[s]=e[s]);if(null!=e&&i)for(var s of i(e))r.indexOf(s)<0&&c.call(e,s)&&(t[s]=e[s]);return t})(r,["color","size"]);return s.createElement(o.ny,((e,r)=>{for(var t in r||(r={}))l.call(r,t)&&d(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&d(e,t,r[t]);return e})({width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},n),s.createElement(o.y$,{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),s.createElement(o.y$,{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",fill:"none",stroke:`${t}`,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))};_.displayName="Link";const m=(0,s.memo)((0,a.H)(_))},53098:function(e,r,t){e.exports=t(7575)},7575:function(e,r,t){"use strict";r.getMDXComponent=function(e,r){return l(e,r).default};var s=i(t(2784)),o=i(t(52322)),a=i(t(28316));function n(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(n=function(e){return e?t:r})(e)}function i(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=n(r);if(t&&t.has(e))return t.get(e);var s={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(s,a,i):s[a]=e[a]}return s.default=e,t&&t.set(e,s),s}function l(e,r){const t={React:s,ReactDOM:a,_jsx_runtime:o,...r};return new Function(...Object.keys(t),e)(...Object.values(t))}}}]);