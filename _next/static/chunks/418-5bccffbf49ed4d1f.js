(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{381:function(t,e,r){"use strict";var o=r(1706),s={"text/plain":"Text","text/html":"Url",default:"Text"};t.exports=function(t,e){var r,i,a,n,c,_,l=!1;e||(e={}),r=e.debug||!1;try{if(a=o(),n=document.createRange(),c=document.getSelection(),(_=document.createElement("span")).textContent=t,_.style.all="unset",_.style.position="fixed",_.style.top=0,_.style.clip="rect(0, 0, 0, 0)",_.style.whiteSpace="pre",_.style.webkitUserSelect="text",_.style.MozUserSelect="text",_.style.msUserSelect="text",_.style.userSelect="text",_.addEventListener("copy",(function(o){if(o.stopPropagation(),e.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=s[e.format]||s.default;window.clipboardData.setData(i,t)}else o.clipboardData.clearData(),o.clipboardData.setData(e.format,t);e.onCopy&&(o.preventDefault(),e.onCopy(o.clipboardData))})),document.body.appendChild(_),n.selectNodeContents(_),c.addRange(n),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");l=!0}catch(d){r&&console.error("unable to copy using execCommand: ",d),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),l=!0}catch(d){r&&console.error("unable to copy using clipboardData: ",d),r&&console.error("falling back to prompt"),i=function(t){var e=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}("message"in e?e.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,t)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(n):c.removeAllRanges()),_&&document.body.removeChild(_),a()}return l}},5992:function(t,e,r){"use strict";r.r(e)},8758:function(t,e,r){"use strict";r.r(e)},3277:function(t,e,r){"use strict";r.r(e)},4003:function(t,e,r){"use strict";r.r(e)},8115:function(t,e,r){"use strict";r.r(e)},8464:function(t,e,r){"use strict";r.r(e)},121:function(t,e,r){"use strict";r.r(e)},4442:function(t,e,r){"use strict";r.r(e)},1560:function(t,e,r){"use strict";r.d(e,{X:function(){return c}});var o=r(2322),s=r(8001),i=r(9097),a=r.n(i),n=(r(2784),r(728));const c=()=>(0,o.jsx)(a(),{href:"/blog/tamagui-enters-beta-themes-and-animations",passHref:!0,children:(0,o.jsx)(n.zx,{accessibilityLabel:"Beta blog post",marginLeft:"_ml-1aj147z",marginRight:"_mr-1aj147z",transform:"_transform-1crgu28",theme:"pink_alt2","opacity-hover":"_o-0hover-1",opacity:"_o-0dot9",cursor:"_cur-1seloot",tag:"a",size:"$2",paddingRight:"_pr-1aj147z",paddingLeft:"_pl-1aj147z",height:"_h-a0wkrm",borderTopLeftRadius:"_btlr-lmim9d",borderTopRightRadius:"_btrr-lmim9d",borderBottomRightRadius:"_bbrr-lmim9d",borderBottomLeftRadius:"_bblr-lmim9d",icon:s.V,className:"  _dsp-_sm_none ",children:"Beta"})});r(5992)},6709:function(t,e,r){"use strict";r.d(e,{i:function(){return _}});var o=r(7328),s=r(6670),i=r(2322),a=(r(2784),r(5300)),n=r(8765);const c=t=>{switch(t){case"Tamagui":return"$pink9";case"Stitches":return"$violet9";case"Stitches 0.1.9":return"$violet4";case"Styled Components":case"SC":return"$red9";case"react-native-web":case"RNW":return"$teal9";case"Emotion":return"$green9";case"Dripsy":return"$blue9";case"NativeBase":return"$orange9";default:return"gray"}};function _(t){let{data:e,large:r,skipOthers:_=!1,animateEnter:l=!1}=t;const d=Math.max(...e.map((t=>t.value)));return(0,i.jsx)(a.FA,{space:"$2",marginTop:"_mt-1aj149p",marginBottom:"_mb-1aj149p",children:e.map(((t,e)=>{const _="".concat(t.value/d*100,"%");return(0,i.jsxs)(a.sL,{space:"$3",children:[(0,i.jsx)("div",{className:(0,n.concatClassName)("  is_YStack _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-13wozr9  "+(r?" _w-ruws7":" _w-106n5")),children:(0,i.jsx)("p",{className:(0,n.concatClassName)("  is_Paragraph font_body _cur-248bx _ussel-248bx _ww-ksmcyg _boxs-u5tlt6 _dsp-1fg6vtl  _mb-tuzy _mt-tuzy _ta-1sls7w _whiteSpace-1hu5zm3 _col-b5vn3b _ff-17h3b99 _fow-1lpmias _ls-zg8o5r _fos-p6b8qj _lh-usq3k1  "+("Tamagui"===t.name?" _fow-15yv":" _fow-13qs")),children:t.name},t.name)}),(0,i.jsx)("div",{className:"  is_XStack _fg-1 _mr-znd3 _fd-2fa2 _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-1 _ai-1ch0i1h ",children:(0,i.jsx)(a.FA,(0,s.Z)((0,o.Z)({bc:c(t.name),o:(t.name,1),width:_,height:20,br:"$2",position:"relative",jc:"center",scaleX:1,animation:"lazy"},l&&{enterStyle:{scaleX:0}}),{children:(0,i.jsxs)("p",{className:"  is_Paragraph font_body _transform-1hmnzav _r-lrpfwc _pos-skvnnb _whiteSpace-1hu5zm3 _cur-248bx _ussel-248bx _col-b5vn3b _ff-17h3b99 _fow-1lpmi9x _ls-zg8o4w _fos-p6b8po _lh-usq3j6 _ww-ksmcyg _boxs-u5tlt6 _dsp-1fg6vtl ",children:[t.value,"ms"]})}))})]},e)}))})}r(8758)},3548:function(t,e,r){"use strict";r.d(e,{f:function(){return i}});var o=r(2322),s=r(609);r(2784);const i=()=>(0,o.jsx)("div",{className:"  is_YStack _mr-kigz33 _bblr-rtmt5 _bbrr-rtmt5 _btrr-rtmt5 _btlr-rtmt5 _jc-1ch0i1h _h-x3ez _w-x3ez _bg-1exdlax _mt-13ui _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-1ch0i1h ",children:(0,o.jsx)(s.J,{size:12,color:"var(--green10)"})});r(3277)},773:function(t,e,r){"use strict";r.d(e,{E:function(){return i},w:function(){return a}});var o=r(6227),s=r(7855);const i=(0,o.z)(s.Paragraph,{name:"Code",tag:"code",fontFamily:"$mono",size:"$4",whiteSpace:"pre",padding:"$1",borderRadius:"$4",variants:{colored:{true:{color:"$color",backgroundColor:"$background"}}}}),a=(0,o.z)(s.Paragraph,{name:"CodeInline",tag:"code",fontFamily:"$mono",color:"$colorHover",backgroundColor:"$background",br:"$4",size:"$4",px:"$2",py:"$2"})},815:function(t,e,r){"use strict";r.d(e,{s:function(){return d}});var o=r(7328),s=r(6670),i=r(6297),a=r(2322),n=(r(2784),r(5300)),c=r(773),_=r(2897),l=r(8765);function d(t){var{source:e,language:r}=t,d=(0,i.Z)(t,["source","language"]);return(0,a.jsx)(n.FA,(0,s.Z)((0,o.Z)({borderTopLeftRadius:"_btlr-lmimej",borderTopRightRadius:"_btrr-lmimej",borderBottomRightRadius:"_bbrr-lmimej",borderBottomLeftRadius:"_bblr-lmimej",flexShrink:"_fs-1",flexGrow:"_fg-1",borderRightStyle:"_borderRightStyle-1t9igb",borderLeftStyle:"_bls-1t9igb",borderTopStyle:"_borderTopStyle-1t9igb",borderBottomStyle:"_borderBottomStyle-1t9igb",borderLeftWidth:"_blw-133t",borderBottomWidth:"_bbw-133t",borderRightWidth:"_brw-133t",borderTopWidth:"_btw-133t",borderLeftColor:"_blc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderRightColor:"_brc-zx92k3",borderTopColor:"_btc-zx92k3",backgroundColor:"_bg-8htuv0"},d),{className:(0,l.concatClassName)(("scroll-horizontal scroll-vertical language-".concat(r)||0)+" "+(d&&d.className||""),d),children:(0,a.jsx)(_.S,{f:1,children:(0,a.jsx)(c.E,{dangerouslySetInnerHTML:{__html:e}})})}))}r(4003)},3975:function(t,e,r){"use strict";r.d(e,{L:function(){return f},d:function(){return m}});var o=r(7328),s=r(6670),i=r(2322),a=r(6747),n=r(2784),c=r(9141),_=r(728),l=r(844),d=r(8765);const b=new Set,m=()=>{const{0:t,1:e}=(0,n.useState)(4),r=a.ji[t];(0,n.useEffect)((()=>{const t=t=>e(t);return b.add(t),()=>{b.delete(t)}}),[]);const o=(a.ji.indexOf(r)+1)%a.ji.length,s=a.ji[o],i=t=>{const r=a.ji.indexOf(t);e(r),b.forEach((t=>t(r)))};return{tint:r,setTint:i,setNextTint:()=>{i(s)}}},f=t=>{const{tint:e,setNextTint:r}=m();return(0,i.jsx)(c.w,{groupId:"header-actions-color",label:"Change color",children:(0,i.jsx)(_.zx,(0,s.Z)((0,o.Z)({size:"$3",paddingRight:"_pr-1aj148u",paddingLeft:"_pl-1aj148u",height:"_h-a0wksh",borderTopLeftRadius:"_btlr-lmima8",borderTopRightRadius:"_btrr-lmima8",borderBottomRightRadius:"_bbrr-lmima8",borderBottomLeftRadius:"_bblr-lmima8",onPress:r},t),{"aria-label":"toggle a light and dark color scheme",className:(0,d.concatClassName)(""+(t&&t.className||""),t),children:(0,i.jsx)(l.C,{marginLeft:"_ml-13ui",marginBottom:"_mb-13ui",marginRight:"_mr-13ui",marginTop:"_mt-13ui",borderLeftColor:"_blc-1q780h6",borderBottomColor:"_bbc-1q780h6",borderRightColor:"_brc-1q780h6",borderTopColor:"_btc-1q780h6",borderTopWidth:"_btw-133t",borderRightWidth:"_brw-133t",borderBottomWidth:"_bbw-133t",borderLeftWidth:"_blw-133t",borderBottomStyle:"_borderBottomStyle-1t9igb",borderTopStyle:"_borderTopStyle-1t9igb",borderLeftStyle:"_bls-1t9igb",borderRightStyle:"_borderRightStyle-1t9igb",size:12,width:"_w-we7d",height:"_h-we7d",minWidth:"_miw-we7d",maxWidth:"_maw-we7d",maxHeight:"_mah-we7d",minHeight:"_mih-we7d",backgroundColor:e})}))})};r(8115)},8264:function(t,e,r){"use strict";r.d(e,{E:function(){return a}});var o=r(7328),s=r(6670),i=r(2322);r(2784);const a=t=>(0,i.jsx)("svg",(0,s.Z)((0,o.Z)({width:"30",height:"30",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{children:(0,i.jsx)("path",{d:"M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z",fill:"var(--color)",fillRule:"evenodd",clipRule:"evenodd"})}))},5147:function(t,e,r){"use strict";r.d(e,{q:function(){return S},M:function(){return z}});var o=r(2322),s=r(2467),i=r(1238),a=r(2470),n=r(9097),c=r.n(n),_=r(2784),l=r(5300),d=r(728),b=r(2341),m=r(7328),f=r(2422),h=r(3975);const p=t=>{const{tint:e}=(0,h.d)();return(0,o.jsx)(f.Q,(0,m.Z)({tint:e},t))};var u=r(815),g=r(5437),x=r(7219),w=r(8765);const v="  is_YStack",y="  is_YStack _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-13wozr9 ",j=[{name:"Bouncy",description:"A bouncy spring",animation:"bouncy",settings:s.sF.animations.bouncy},{name:"Lazy",description:"A lazy, straightforward spring",animation:"lazy",settings:s.sF.animations.lazy},{name:"Quick",description:"A super fast spring",animation:"quick",settings:s.sF.animations.quick}];let k=!1;function z(t){let{animationCode:e}=t;const{tint:r}=(0,h.d)(),{0:s,1:i}=(0,_.useState)(!0);return(0,o.jsx)("div",{className:y,children:(0,o.jsxs)(g._k,{position:"relative",space:"$8",children:[(0,o.jsxs)(l.FA,{zIndex:"_zi-1",space:"$3",children:[(0,o.jsxs)(x.P,{pos:"relative",children:["Universal ",(0,o.jsx)("span",{className:"rainbow clip-text",children:"Animations"})]}),(0,o.jsx)(x.v,{children:"Better platform targeting with animation drivers that can be changed without changing code."})]}),(0,o.jsxs)("div",{className:"  is_XStack _fd-2fa2 _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-13wozr9 ",children:[(0,o.jsx)(b.Q,{name:r,children:(0,o.jsx)("div",{className:"  is_YStack _bblr-lmimb3 _bbrr-lmimb3 _btrr-lmimb3 _btlr-lmimb3 _zi-100 _bg-8htuv0 _mr-lrpfwc _als-1ch0i1h _miw-14lh _fg-2 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-1 _ai-13wozr9 _boxsh-asvu26 ",children:(0,o.jsx)(S,{})})}),(0,o.jsxs)("div",{className:"  is_YStack _transform-1rgx1si _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-13wozr9 _ovy-1ew92ne _ovx-1ew92ne _bblr-lmimej _bbrr-lmimej _btrr-lmimej _btlr-lmimej _pos-1pv0ki4 _boxsh-1duix2k _dsp-_sm_none ",children:[(0,o.jsxs)("div",{className:(0,w.concatClassName)(v+" _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0  _jc-1ch0i1h _ai-1ch0i1h _pos-skvnnb _t-12d4 _l-12d4 _r-12d4 _b-12d4  "+(s?" _o-1 _pe-1sfcf":" _o-0 _pe-none")),children:[(0,o.jsx)("div",{className:"  is_YStack _o-0dot5 _t-157v _pos-skvnnb _l-12d4 _r-12d4 _b-12d4 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-13wozr9 "}),(0,o.jsx)(d.zx,{accessibilityLabel:"View more",transform:"_transform-1m3rtws",iconAfter:a.K,size:"$4",paddingRight:"_pr-1aj149p",paddingLeft:"_pl-1aj149p",height:"_h-a0wktc",borderTopLeftRadius:"_btlr-lmimb3",borderTopRightRadius:"_btrr-lmimb3",borderBottomRightRadius:"_bbrr-lmimb3",borderBottomLeftRadius:"_bblr-lmimb3",themeInverse:!0,zIndex:"_zi-10",onPress:()=>i(!1),children:"View more"})]}),(0,o.jsx)(u.s,{pe:s?"none":"auto",maxHeight:500,height:500,maxWidth:530,minWidth:530,language:"tsx",source:e})]})]}),(0,o.jsxs)(l.sL,{alignSelf:"_als-1ch0i1h",space:"$3",children:[(0,o.jsx)(c(),{href:"/docs/core/animations#css",passHref:!0,children:(0,o.jsx)(d.zx,{accessibilityLabel:"CSS docs",fontFamily:"$silkscreen",theme:r,tag:"a",children:"CSS \xbb"})}),(0,o.jsx)(c(),{href:"/docs/core/animations#reanimated",passHref:!0,children:(0,o.jsx)(d.zx,{accessibilityLabel:"Reanimated docs",fontFamily:"$silkscreen",tag:"a",children:"Reanimated \xbb"})}),(0,o.jsx)(c(),{href:"/docs/core/animations",passHref:!0,children:(0,o.jsx)(d.zx,{accessibilityLabel:"Animation docs",fontFamily:"$silkscreen",tag:"a",children:"Docs \xbb"})})]})]})})}const S=(0,_.memo)((()=>{const{0:t,1:e}=(0,_.useState)(0),r=j[t],s=(0,_.useRef)(null),{0:a,1:n}=(0,_.useState)(2),c=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;n((e=>(e+t)%3))},l="string"===typeof r.settings?[["transition",r.settings]]:Object.entries(r.settings);return(0,i.q)(s,(t=>{let{isIntersecting:e,dispose:r}=t;const o=t=>{"ArrowRight"===t.key&&c(),"ArrowLeft"===t.key&&c(-1)};if(e)return k||(k=!0,setTimeout((()=>{c()}),400)),window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)};null===r||void 0===r||r()})),(0,o.jsxs)("div",{className:"  is_XStack _transform-199k8sv _als-1ch0i1h _h-sxbpc _ovy-1ew92ne _ovx-1ew92ne _bblr-lmimb3 _bbrr-lmimb3 _btrr-lmimb3 _btlr-lmimb3 _w-wb4k _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _borderRightStyle-1t9igb _bls-1t9igb _borderTopStyle-1t9igb _borderBottomStyle-1t9igb _blw-133t _bbw-133t _brw-133t _btw-133t _fd-1b2fkz3 _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-13wozr9 _boxsh-9enu5w ",children:[(0,o.jsx)("div",{ref:s,className:"  is_YStack _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _w-157v _jc-1ch0i1h _ai-1ch0i1h _bg-180kg62 _pos-1pv0ki4 _w-_sm_wb4k ",children:(0,o.jsx)(p,{position:a,animation:r.animation})}),(0,o.jsx)("div",{className:"  is_Separator _transform-cx1iw7 _h-w7zqdg _mah-w7zqdg _w-12d4 _maw-12d4 _bbw-12d4 _brw-133t _borderBottomStyle-1t9igb _borderRightStyle-1t9igb _fg-1 _bls-1t9igb _borderTopStyle-1t9igb _blw-12d4 _btw-12d4 _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _ai-13wozr9 "}),(0,o.jsxs)("div",{className:"  is_YStack _pos-1pv0ki4 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-13wozr9 _w-13qh _dsp-_sm_none ",children:[(0,o.jsx)(b.Q,{name:"alt2",children:(0,o.jsx)("div",{className:"  is_YStack _bg-cbjnf9 _zi--1 _pos-skvnnb _t-12d4 _l-12d4 _r-12d4 _b-12d4 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-13wozr9 "})}),(0,o.jsx)("div",{className:"  is_YStack _fg-1 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-1 _ai-13wozr9 ",children:j.map(((t,s)=>{const i=t===r;return(0,o.jsx)(b.Q,{name:i?"active":"alt3",children:(0,o.jsxs)("div",{onClick:()=>{e(s),c()},className:(0,w.concatClassName)(v+" _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-13wozr9  _cur-1seloot _pb-1aj147z _pt-1aj147z _pr-1aj149p _pl-1aj149p  "+(i?"  _bg-8htuv0":" ")),children:[(0,o.jsx)("p",{className:"  is_Paragraph font_body _fow-16pk _mb-lrpfvh _cur-w76juj _ussel-none _col-b5vn3b _ff-17h3b99 _ls-zg8o6m _fos-p6b8re _lh-usq3kw _ww-ksmcyg _boxs-u5tlt6 _dsp-1fg6vtl ",children:t.name}),(0,o.jsx)("p",{className:"  is_Paragraph font_body _col-vhj0rs _maw-wb4k _ovx-1ew92ne _ovy-1ew92ne _textOverflow-34ck41 _whiteSpace-1hu5zm3 _cur-w76juj _ussel-none _ff-17h3b99 _fow-1lpmias _ls-zg8o5r _fos-p6b8qj _lh-usq3k1 _ww-ksmcyg _boxs-u5tlt6 _dsp-1fg6vtl ",children:t.description})]})},t.name)}))}),(0,o.jsx)("div",{className:"  is_Separator _transform-n24na2 _mah-12d4 _h-12d4 _fg-1 _borderRightStyle-1t9igb _bls-1t9igb _borderTopStyle-1t9igb _borderBottomStyle-1t9igb _blw-12d4 _bbw-133t _brw-12d4 _btw-12d4 _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _ai-13wozr9 "}),(0,o.jsx)("div",{className:"  is_XStack _jc-1ch0i1h _pl-1aj149p _pb-1aj149p _pr-1aj149p _pt-1aj149p _bg-180kg62 _fd-2fa2 _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-1ch0i1h ",children:l.map(((t,e)=>{let[r,s]=t;return"type"===r?null:(0,o.jsxs)(_.Fragment,{children:[(0,o.jsxs)("div",{className:y,children:[(0,o.jsx)("p",{className:"  is_Paragraph font_body _cur-248bx _ussel-248bx _col-b5vn3b _ff-17h3b99 _fow-1lpmias _ls-zg8o5r _fos-p6b8qj _lh-usq3k1 _ww-ksmcyg _boxs-u5tlt6 _dsp-1fg6vtl ",children:r}),(0,o.jsx)("p",{className:"  is_Paragraph font_body _cur-248bx _ussel-248bx _col-b5vn3b _ff-17h3b99 _fow-1lpmici _ls-zg8o7h _fos-p6b8s9 _lh-usq3lr _ww-ksmcyg _boxs-u5tlt6 _dsp-1fg6vtl ",children:s})]}),e<l.length-1&&(0,o.jsx)("div",{className:"  is_Separator _ml-wgfg _mr-wgfg _transform-cx1iw7 _h-w7zqdg _mah-w7zqdg _w-12d4 _maw-12d4 _bbw-12d4 _brw-133t _borderBottomStyle-1t9igb _borderRightStyle-1t9igb _fg-1 _bls-1t9igb _borderTopStyle-1t9igb _blw-12d4 _btw-12d4 _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _ai-13wozr9 "})]},r)}))})]})]})}));r(8464)},7219:function(t,e,r){"use strict";r.d(e,{P:function(){return i},v:function(){return a}});var o=r(6227),s=r(7855);const i=(0,o.z)(s.H2,{name:"HomeH2",ta:"center",als:"center",size:"$11",maw:720,mt:"$-2",$sm:{size:"$10"},$xs:{size:"$9"}}),a=(0,o.z)(s.H3,{name:"HomeH3",ta:"center",theme:"alt3",als:"center",fow:"400",px:30,size:"$8",ls:-.5,maw:620,$sm:{fow:"400",size:"$6",color:"$color",textTransform:"none"}})},5890:function(t,e,r){"use strict";r.d(e,{S:function(){return x}});var o=r(7328),s=r(6670),i=r(6297),a=r(2322),n=r(6462),c=r(6341),_=r(2366),l=r(2784),d=r(2341),b=r(8919),m=r(5300),f=r(4571),h=r(728),p="/_next/static/media/kanye.8a1ab422.jpg",u=r(8765);const g="  is_Paragraph font_body _col-rnt87j _cur-248bx _ussel-248bx _ff-17h3b99 _fow-1lpmibn _ls-zg8o6m _fos-p6b8re _lh-usq3kw _ww-ksmcyg _boxs-u5tlt6 _dsp-1fg6vtl ",x=(0,l.memo)((t=>{var{theme:e,alt:r,onHoverSection:l,pointerEvents:x,pointerEventsControls:w}=t,v=(0,i.Z)(t,["theme","alt","onHoverSection","pointerEvents","pointerEventsControls"]);return(0,a.jsx)(d.Q,{name:r?"alt".concat(r):null,children:(0,a.jsxs)(b.Zb,(0,s.Z)((0,o.Z)({overflowX:"_ovx-7pvxiq",overflowY:"_ovy-7pvxiq",bordered:!0,borderBottomLeftRadius:"_bblr-lmimdo",borderBottomRightRadius:"_bbrr-lmimdo",borderTopRightRadius:"_btrr-lmimdo",borderTopLeftRadius:"_btlr-lmimdo",borderTopWidth:"_btw-133t",borderRightWidth:"_brw-133t",borderBottomWidth:"_bbw-133t",borderLeftWidth:"_blw-133t",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderBottomStyle:"_borderBottomStyle-1t9igb",borderTopStyle:"_borderTopStyle-1t9igb",borderLeftStyle:"_bls-1t9igb",borderRightStyle:"_borderRightStyle-1t9igb",pointerEvents:x,alignItems:"_ai-13wozr9",paddingTop:"_pt-12d4",paddingRight:"_pr-12d4",paddingBottom:"_pb-12d4",paddingLeft:"_pl-12d4"},v),{className:(0,u.concatClassName)(""+(v&&v.className||""),v),children:[(0,a.jsxs)(m.sL,{paddingLeft:"_pl-1aj149p",paddingBottom:"_pb-1aj149p",paddingRight:"_pr-1aj149p",paddingTop:"_pt-1aj149p",alignItems:"_ai-1ch0i1h",space:"$5",children:[(0,a.jsx)("div",{className:"  is_Square _w-11gm7 _h-11gm7 _miw-11gm7 _maw-11gm7 _mah-11gm7 _mih-11gm7 _bblr-lmimct _bbrr-lmimct _btrr-lmimct _btlr-lmimct _ovy-1ew92ne _ovx-1ew92ne _pos-1pv0ki4 _bg-180kg62 _jc-1ch0i1h _ai-1ch0i1h _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 ",children:(0,a.jsx)(f.E,{width:90,height:90,src:p})}),(0,a.jsxs)("div",{className:"  is_YStack _jc-1ch0i1h _mt-pn3f8 _miw-rxkfs _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _fs-0 _ai-13wozr9 ",children:[(0,a.jsx)("p",{className:"  is_Paragraph font_body _fow-15yv _cur-248bx _ussel-248bx _col-b5vn3b _ff-17h3b99 _ls-zg8o7h _fos-p6b8s9 _lh-usq3lr _ww-ksmcyg _boxs-u5tlt6 _dsp-1fg6vtl ",children:"Spaceship"}),(0,a.jsx)("p",{className:g,children:"Kanye West"}),(0,a.jsx)("p",{className:g,children:"College Dropout"})]})]}),(0,a.jsx)("div",{className:"  is_Separator _mb-ttik _transform-n24na2 _mah-12d4 _h-12d4 _fg-1 _borderRightStyle-1t9igb _bls-1t9igb _borderTopStyle-1t9igb _borderBottomStyle-1t9igb _blw-12d4 _bbw-133t _brw-12d4 _btw-12d4 _fs-1 _blc-zx92k3 _bbc-zx92k3 _brc-zx92k3 _btc-zx92k3 _fd-1cmh6xi _boxs-u5tlt6 _fb-1sfcf _dsp-1vf95 _ai-13wozr9 "}),(0,a.jsxs)(m.sL,{alignItems:"_ai-1ch0i1h",borderBottomLeftRadius:"_bblr-whwu",borderBottomRightRadius:"_bbrr-whwu",backgroundColor:"_bg-8htuv0",paddingBottom:"_pb-1aj149p",paddingTop:"_pt-1aj149p",paddingLeft:"_pl-1aj14bf",paddingRight:"_pr-1aj14bf",width:"_w-wb4k",zIndex:"_zi-1000",space:"$5",justifyContent:"_jc-1ch0i1h",pointerEvents:x,children:[(0,a.jsx)(n.F,{size:20}),(0,a.jsx)(h.zx,{bordered:!0,"borderTopColor-hover":"_btc-0hover-1byp41v","borderRightColor-hover":"_brc-0hover-1byp41v","borderBottomColor-hover":"_bbc-0hover-1byp41v","borderLeftColor-hover":"_blc-0hover-1byp41v","borderTopColor-active":"_btc-0active-1fsewm4","borderRightColor-active":"_brc-0active-1fsewm4","borderBottomColor-active":"_bbc-0active-1fsewm4","borderLeftColor-active":"_blc-0active-1fsewm4",marginBottom:"_mb-lrpg0n",marginTop:"_mt-lrpg0n",borderTopWidth:"_btw-133t",borderRightWidth:"_brw-133t",borderBottomWidth:"_bbw-133t",borderLeftWidth:"_blw-133t",borderTopColor:"_btc-zx92k3",borderRightColor:"_brc-zx92k3",borderBottomColor:"_bbc-zx92k3",borderLeftColor:"_blc-zx92k3",borderBottomStyle:"_borderBottomStyle-1t9igb",borderTopStyle:"_borderTopStyle-1t9igb",borderLeftStyle:"_bls-1t9igb",borderRightStyle:"_borderRightStyle-1t9igb",icon:c.d,size:"$8",circular:!0,width:"_w-a0wkws",height:"_h-a0wkws",maxWidth:"_maw-a0wkws",maxHeight:"_mah-a0wkws",minWidth:"_miw-a0wkws",minHeight:"_mih-a0wkws",borderTopLeftRadius:"_btlr-9eowkn",borderTopRightRadius:"_btrr-9eowkn",borderBottomRightRadius:"_bbrr-9eowkn",borderBottomLeftRadius:"_bblr-9eowkn",paddingTop:"_pt-12d4",paddingBottom:"_pb-12d4",paddingRight:"_pr-12d4",paddingLeft:"_pl-12d4",elevation:"$4",boxShadow:"_boxsh-asvu26",pointerEvents:w}),(0,a.jsx)(_.N,{size:20})]})]}))})}));r(121)},2897:function(t,e,r){"use strict";r.d(e,{S:function(){return i}});var o=r(6227),s=r(5300);const i=(0,o.z)(s.FA,{overflow:"visible",tag:"pre",padding:"$4",borderRadius:"$4",bc:"$background"})},856:function(t,e,r){"use strict";r.d(e,{Q:function(){return m}});var o=r(7328),s=r(6670),i=r(2322),a=r(9757),n=r(2784),c=r(2815),_=r(9141),l=r(728),d=r(6610),b=r(8765);const m=(0,n.memo)((t=>{const{onOpen:e,onInput:r}=(0,n.useContext)(d.c),m=(0,c.Y)(),f=(0,n.useRef)();return(0,n.useEffect)((()=>{const t=t=>{f&&f.current===document.activeElement&&r&&/[a-zA-Z0-9]/.test(String.fromCharCode(t.keyCode))&&r(t)};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}}),[r,f]),(0,i.jsx)(_.w,{groupId:"header-actions-search",label:"Search docs..",children:(0,i.jsx)(l.zx,(0,s.Z)((0,o.Z)({accessibilityLabel:"Search docs",ref:f,onPress:e,icon:a.o,iconAfter:m?null:(0,i.jsx)(l.zx,{size:"$2",paddingRight:"_pr-1aj147z",paddingLeft:"_pl-1aj147z",height:"_h-a0wkrm",borderTopLeftRadius:"_btlr-lmim9d",borderTopRightRadius:"_btrr-lmim9d",borderBottomRightRadius:"_bbrr-lmim9d",borderBottomLeftRadius:"_bblr-lmim9d",chromeless:!0,opacity:"_o-0dot35",pointerEvents:"_pe-none",borderRightStyle:"_borderRightStyle-1t9igb",borderLeftStyle:"_bls-1t9igb",borderTopStyle:"_borderTopStyle-1t9igb",borderBottomStyle:"_borderBottomStyle-1t9igb",borderLeftWidth:"_blw-12d4",borderBottomWidth:"_bbw-12d4",borderRightWidth:"_brw-12d4",borderTopWidth:"_btw-12d4",backgroundColor:"_bg-16hdpw2",borderTopColor:"_btc-16hdpw2",borderRightColor:"_brc-16hdpw2",borderBottomColor:"_bbc-16hdpw2",borderLeftColor:"_blc-16hdpw2",shadowColor:"_shac-16hdpw2",children:"/"})},t),{className:(0,b.concatClassName)(""+(t&&t.className||""),t)}))})}));r(4442)},3106:function(t,e,r){"use strict";r.d(e,{T:function(){return h}});var o=r(7328),s=r(6670),i=r(2322),a=r(9793),n=r(2947),c=r(8253),_=r(1191),l=r(2784),d=r(9611),b=r(9141),m=r(728);const f={system:a.u,light:n.k,dark:c.J},h=t=>{const{theme:e,toggleTheme:r}=(0,_.Fg)(),{0:a,1:n}=(0,l.useState)("light");(0,d.LI)((()=>{n(e||"light")}),[e]);const c=f[a];return(0,i.jsx)(b.w,{groupId:"header-actions-theme",label:"Switch theme (".concat(e,")"),children:(0,i.jsx)(m.zx,(0,s.Z)((0,o.Z)({size:"$3",onPress:r},t),{"aria-label":"toggle a light and dark color scheme",icon:c}))})}},844:function(t,e,r){"use strict";r.d(e,{C:function(){return i}});var o=r(6227),s=r(6669);const i=(0,o.z)(s.b,{name:"Circle",circular:!0})},9141:function(t,e,r){"use strict";r.d(e,{w:function(){return d}});var o=r(7328),s=r(6670),i=r(6297),a=r(2322),n=r(8333),c=r(7038),_=r(2560),l=r(314);const d=t=>{var{label:e,children:r,contentProps:d}=t,b=(0,i.Z)(t,["label","children","contentProps"]);let m;try{m=(0,n.tj)()}catch(h){}const f=(0,a.jsxs)(l.u,(0,s.Z)((0,o.Z)({},b),{children:[(0,a.jsx)(l.u.Trigger,{asChild:!0,children:r}),(0,a.jsx)(c.f,{children:(0,a.jsxs)(l.u.Content,(0,s.Z)((0,o.Z)({enterStyle:{x:0,y:-10,opacity:0,scale:.9},exitStyle:{x:0,y:-10,opacity:0,scale:.9},x:0,scale:1,y:0,elevation:"$1",opacity:1,animation:["bouncy",{opacity:{overshootClamping:!0}}]},d),{children:[(0,a.jsx)(l.u.Arrow,{}),(0,a.jsx)(_.n,{size:"$2",lineHeight:"$1",children:e})]}))})]}));return m?f:(0,a.jsx)(l.A,{delay:{open:3e3,close:100},children:f})}},1706:function(t){t.exports=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,r=[],o=0;o<t.rangeCount;o++)r.push(t.getRangeAt(o));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null}return t.removeAllRanges(),function(){"Caret"===t.type&&t.removeAllRanges(),t.rangeCount||r.forEach((function(e){t.addRange(e)})),e&&e.focus()}}}}]);