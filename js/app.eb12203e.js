(function(t){function e(e){for(var s,o,i=e[0],c=e[1],d=e[2],l=0,b=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(b.length)b.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},r={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/pechatay/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07a6":function(t,e,n){},"4b0b":function(t,e,n){},5383:function(t,e,n){"use strict";n("a82b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("caad"),n("2532");var s=n("7a23"),r=n("5502"),a=Object(s["E"])("data-v-dc89fd68");Object(s["t"])("data-v-dc89fd68");var o={class:"big-container"},i={key:0},c={class:"head"},d=Object(s["h"])("span",{class:"header"},"⌨️ Keyboard",-1),u=Object(s["g"])("📒 Book select"),l=Object(s["g"])("⚔ Fight online "),b=Object(s["g"])("❔ About"),h={key:1};Object(s["r"])();var p=a((function(t,e,n,r,p,f){var O=Object(s["x"])("Settings"),j=Object(s["x"])("router-link"),m=Object(s["x"])("router-lin"),g=Object(s["x"])("router-view");return Object(s["q"])(),Object(s["d"])("div",{class:"pseudobody",style:f.cssVars},[Object(s["h"])("div",o,[Object(s["h"])(O,{modal:p.settings,onClose:e[1]||(e[1]=function(t){return p.settings=!1})},null,8,["modal"]),t.$store.state.loading?(Object(s["q"])(),Object(s["d"])("div",h,"Loading database...")):(Object(s["q"])(),Object(s["d"])("div",i,[Object(s["h"])("div",c,[d,Object(s["h"])(j,{class:"g-text-button head-link",to:"/"},{default:a((function(){return[u]})),_:1}),Object(s["h"])(m,{class:"g-text-button head-link",to:"/fight/new"},{default:a((function(){return[l]})),_:1}),Object(s["h"])("a",{class:{"head-link":!0,"g-text-button":!0,"router-link-active":p.settings},onClick:e[2]||(e[2]=function(t){return p.settings=!0})}," ⚙️ Settings ",2),Object(s["h"])(j,{class:"g-text-button head-link",to:"/about"},{default:a((function(){return[b]})),_:1})]),Object(s["h"])(g,{key:t.$route.path,class:"container"})]))])],4)})),f=n("5530"),O=Object(s["E"])("data-v-2fd67beb");Object(s["t"])("data-v-2fd67beb");var j={class:"modal",ref:"modal"},m={class:"modal-content"},g=Object(s["h"])("div",{class:"g-header"},"Settings",-1),v=Object(s["h"])("div",{class:"g-subtitle"},"Theme",-1),y={class:"select-div"},k=Object(s["h"])("div",{class:"g-subtitle"},"Typer font",-1),x={class:"select-div"},S=Object(s["h"])("p",{class:"g-typing"},"Видовище перед нашими очима справді вражало.¶ ",-1),w=Object(s["h"])("div",{class:"g-subtitle"},"Type mode",-1),T={class:"select-div"},I=Object(s["h"])("div",{class:"g-subtitle"},"Fight mode nickname",-1),q={style:{display:"flex"}};Object(s["r"])();var L=O((function(t,e,n,r,a,o){return n.modal?(Object(s["q"])(),Object(s["d"])("div",{key:0,onClick:e[3]||(e[3]=function(){return o.outsideClick&&o.outsideClick.apply(o,arguments)})},[Object(s["h"])("div",j,[Object(s["h"])("div",m,[Object(s["h"])("span",{class:"close",onClick:e[1]||(e[1]=function(e){return t.$emit("close")})},"×"),g,v,Object(s["h"])("div",y,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(t.$store.state.settingsTemplate.theme,(function(e){return Object(s["q"])(),Object(s["d"])("div",{key:e},[Object(s["h"])("span",{class:{"g-text-button":!0,"select-option":!0,"active-setting":t.$store.state.settings.theme===e},onClick:function(n){return t.$store.commit("setSetting",{setting:"theme",value:e})}},Object(s["z"])(e),11,["onClick"])])})),128))]),k,Object(s["h"])("div",x,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(t.$store.state.settingsTemplate.font,(function(e){return Object(s["q"])(),Object(s["d"])("div",{key:e},[Object(s["h"])("span",{class:{"g-text-button":!0,"select-option":!0,"active-setting":t.$store.state.settings.font===e},onClick:function(n){return t.$store.commit("setSetting",{setting:"font",value:e})}},Object(s["z"])(e),11,["onClick"])])})),128))]),S,w,Object(s["h"])("div",T,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(t.$store.state.settingsTemplate.typeMode,(function(e){return Object(s["q"])(),Object(s["d"])("div",{key:e},[Object(s["h"])("span",{class:{"g-text-button":!0,"select-option":!0,"active-setting":t.$store.state.settings.typeMode===e},onClick:function(n){return t.$store.commit("setSetting",{setting:"typeMode",value:e})}},Object(s["z"])(e),11,["onClick"])])})),128))]),I,Object(s["h"])("span",q,[Object(s["D"])(Object(s["h"])("input",{style:{width:"100%"},class:"select-div",type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return a.username=t})},null,512),[[s["B"],a.username]])])])],512)])):Object(s["e"])("",!0)})),P={name:"Settings",props:{modal:Boolean},data:function(){return{username:this.$store.state.settings.username}},emits:["close"],methods:{outsideClick:function(t){t.target===this.$refs.modal&&this.$emit("close")}},watch:{username:function(t){this.$store.commit("setSetting",{setting:"username",value:t})}}};n("8c21");P.render=L,P.__scopeId="data-v-2fd67beb";var M=P,B={name:"App",data:function(){return{settings:!1}},beforeCreate:function(){this.$store.commit("init")},computed:{cssVars:function(){var t={"--typing-font":this.$store.state.settings.font},e={"--main-color":"black","--font-color":"white","--correct-char-color":"gray"},n={"--main-color":"white","--font-color":"black","--correct-char-color":"blue"};return"Light"===this.$store.state.settings.theme?Object(f["a"])(Object(f["a"])({},t),n):Object(f["a"])(Object(f["a"])({},t),e)}},components:{Settings:M}};n("9def"),n("fc29");B.render=p,B.__scopeId="data-v-dc89fd68";var $=B,A=n("6c02"),C=(n("b680"),Object(s["E"])("data-v-0f178bc2"));Object(s["t"])("data-v-0f178bc2");var D={key:0},_={class:"g-header"},E={key:0,class:"g-subtitle"},z={key:1,class:"finished"},K={class:"result"},N={key:0,class:"footer"},R={key:1};Object(s["r"])();var U=C((function(t,e,n,r,a,o){var i=Object(s["x"])("Typer"),c=Object(s["x"])("router-link");return Object(s["q"])(),Object(s["d"])("div",null,[a.book&&a.text?(Object(s["q"])(),Object(s["d"])("div",D,[Object(s["h"])("div",_,Object(s["z"])(a.book.title||""),1),0!==a.book.author.length?(Object(s["q"])(),Object(s["d"])("div",E,Object(s["z"])(a.book.author),1)):Object(s["e"])("",!0),Object(s["h"])(i,{onUpdateUserData:o.updateUserData,"user-data":a.book.userData,text:a.text,key:a.update},null,8,["onUpdateUserData","user-data","text"]),a.book.userData.finished?(Object(s["q"])(),Object(s["d"])("div",z,[Object(s["h"])("div",K,[Object(s["g"])(" You finished with "+Object(s["z"])(a.book.userData.totalErrors)+" errors out of "+Object(s["z"])(a.book.userData.totalLetters)+" letters ("+Object(s["z"])((100*a.book.userData.totalErrors/a.book.userData.totalLetters).toFixed(2))+"%). ",1),a.hideTime?(Object(s["q"])(),Object(s["d"])("span",{key:0,onClick:e[1]||(e[1]=function(t){return a.hideTime=!1}),class:"g-text-button"},"Time result hidden.")):(Object(s["q"])(),Object(s["d"])("span",{key:1,onClick:e[2]||(e[2]=function(t){return a.hideTime=!0}),class:"g-text-button"},"Mean wpm: "+Object(s["z"])(o.getWPM(a.book.userData.totalMs,a.book.userData.totalLetters).toFixed(1))+". Time: "+Object(s["z"])((a.book.userData.totalMs/1e3).toFixed(1))+".",1))]),Object(s["h"])("span",{class:"g-button",onClick:e[3]||(e[3]=function(){return o.restartBook&&o.restartBook.apply(o,arguments)})},"Type again?"),a.parentSet?(Object(s["q"])(),Object(s["d"])("div",N,[a.parentSet.index-1>=0?(Object(s["q"])(),Object(s["d"])(c,{key:0,class:"prev-chapter g-button",to:{name:"TyperMenu",params:{id:a.parentSet.parent.items[a.parentSet.index-1].id}}},{default:C((function(){return[Object(s["g"])(" Prev: "+Object(s["z"])(a.parentSet.parent.items[a.parentSet.index-1].title),1)]})),_:1},8,["to"])):Object(s["e"])("",!0),a.parentSet.index+1<a.parentSet.parent.items.length?(Object(s["q"])(),Object(s["d"])(c,{key:1,class:"next-chapter g-button",to:{name:"TyperMenu",params:{id:a.parentSet.parent.items[a.parentSet.index+1].id}}},{default:C((function(){return[Object(s["g"])(" Next: "+Object(s["z"])(a.parentSet.parent.items[a.parentSet.index+1].title),1)]})),_:1},8,["to"])):Object(s["e"])("",!0)])):Object(s["e"])("",!0)])):Object(s["e"])("",!0)])):(Object(s["q"])(),Object(s["d"])("div",R," Not found or not loaded "))])})),H=Object(s["E"])("data-v-55d0f4ae");Object(s["t"])("data-v-55d0f4ae");var F={class:"info"},W={class:"example g-typing"},V={key:0};Object(s["r"])();var J=H((function(t,e,n,r,a,o){var i=Object(s["x"])("KeygetterVisible"),c=Object(s["x"])("KeygetterHidden");return Object(s["q"])(),Object(s["d"])("div",null,[Object(s["h"])("div",F,[Object(s["g"])(" position: "+Object(s["z"])(a.pos)+", paragraph: "+Object(s["z"])(a.paragraph+1)+"/"+Object(s["z"])(a.paragraphLength)+", ",1),a.hideTime?(Object(s["q"])(),Object(s["d"])("span",{key:0,onClick:e[1]||(e[1]=function(t){return a.hideTime=!1}),class:"g-text-button"},"time stats hidden")):(Object(s["q"])(),Object(s["d"])("span",{key:1,onClick:e[2]||(e[2]=function(t){return a.hideTime=!0}),class:"g-text-button"},"wpm: "+Object(s["z"])(o.wpm.toFixed(1))+", time: "+Object(s["z"])((a.currentMs/1e3).toFixed(1)),1))]),Object(s["h"])("div",W,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(a.textArray,(function(t,e){return Object(s["q"])(),Object(s["d"])("span",{key:t.letter+e,innerHTML:o.convertLetter(t.letter),class:{letter:!0,good:"+"===t.state,bad:"-"===t.state,current:"c"===t.state}},null,10,["innerHTML"])})),128))]),a.stats.finished?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])("div",V,["Separate window"===o.mode?(Object(s["q"])(),Object(s["d"])(i,{key:0,clearHook:"clearHook",onAddLetter:o.addLetter,onRemoveLetter:o.removeLetter,finished:a.stats.finished},null,8,["onAddLetter","onRemoveLetter","finished"])):Object(s["e"])("",!0),"In place"===o.mode?(Object(s["q"])(),Object(s["d"])(c,{key:1,onAddLetter:o.addLetter,onRemoveLetter:o.removeLetter,finished:a.stats.finished},null,8,["onAddLetter","onRemoveLetter","finished"])):Object(s["e"])("",!0)]))])}));n("4de4");function G(t,e,n,r,a,o){return Object(s["q"])(),Object(s["d"])("div",{contenteditable:"true",class:"g-typing",ref:"editable",onInput:e[1]||(e[1]=function(){return o.placeChanged&&o.placeChanged.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.filterKeypress&&o.filterKeypress.apply(o,arguments)}),onMousedown:e[3]||(e[3]=function(){return o.filterMouse&&o.filterMouse.apply(o,arguments)}),onselect:"return false;",oncut:"return false;",onpaste:"return false;"},null,544)}n("a9e3");var Q=5;function Y(t,e){for(var n=0;n<t.items.length;n++)if("set"===t.items[n].type){var s=Y(t.items[n],e);if(s)return s}else if(t.items[n].id===e)return{parent:t,index:n};return!1}function X(t){if(t.focus(),"undefined"!=typeof window.getSelection&&"undefined"!=typeof document.createRange){var e=document.createRange();e.selectNodeContents(t),e.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(e)}else if("undefined"!=typeof document.body.createTextRange){var s=document.body.createTextRange();s.moveToElementText(t),s.collapse(!1),s.select()}}function Z(t,e){return 0!==t?e/Q/(t/1e3/60):0}function tt(){for(var t=10,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",s=n.length,r=0;r<t;r++)e+=n.charAt(Math.floor(Math.random()*s));return e}function et(t){return"ru"===t?"🇷🇺":"en"===t?"🇬🇧":"fr"===t?"🇫🇷":t.toUpperCase()}var nt={name:"KeygetterVisible",props:{finished:Boolean,clearHook:Number},emits:["add-letter","remove-letter"],methods:{filterMouse:function(t){this.finished||(t.target.focus(),X(this.$refs.editable)),t.preventDefault()},filterKeypress:function(t){(this.finished||["ArrowRight","ArrowLeft"].includes(t.key)||(t.ctrlKey||t.metaKey)&&["c","v","a"].includes(t.key))&&t.preventDefault()},placeChanged:function(t){"insertText"===t.inputType?this.$emit("add-letter",t.data):"insertParagraph"===t.inputType?this.$emit("add-letter","\n"):"deleteContentBackward"===t.inputType&&this.$emit("remove-letter")}},watch:{clearHook:function(){this.$refs.editable.innerText=""}}};nt.render=G;var st=nt;function rt(t,e,n,r,a,o){return Object(s["q"])(),Object(s["d"])("div")}var at={name:"KeygetterHidden",data:function(){var t=this;return{listener:function(e){"Enter"===e.key?t.$emit("add-letter","\n"):"Backspace"===e.key?(t.$emit("remove-letter"),e.preventDefault()):1===e.key.length&&t.$emit("add-letter",e.key)}}},emits:["add-letter","remove-letter"],mounted:function(){document.addEventListener("keydown",this.listener,!1)},unmounted:function(){document.removeEventListener("keydown",this.listener,!1)}};at.render=rt;var ot=at,it={name:"Typer",props:{text:Array,userData:Object},components:{KeygetterVisible:st,KeygetterHidden:ot},data:function(){return{textArray:null,pos:0,paragraph:this.userData.totalParagraphs||0,paragraphLength:0,stats:{totalMs:this.userData.totalMs||0,totalParagraphs:this.userData.totalParagraphs||0,totalLetters:this.userData.totalLetters||0,totalErrors:this.userData.totalErrors||0,finished:this.userData.finished||!1},hideTime:!0,state:"not-started",startTime:null,currentMs:0,updateTimeIntervalId:null,clearHook:0}},emits:["update-user-data","finish","position-update"],mounted:function(){this.paragraphLength=this.text.length,this.updateTextArray()},methods:{emitUpdateUserData:function(){this.$emit("update-user-data",this.stats)},finishText:function(){this.stats.finished=!0,this.$emit("finish",this.stats),this.emitUpdateUserData()},updateTextArray:function(){this.textArray=[];for(var t=0;t<this.text[this.paragraph].length;t++){var e=this.text[this.paragraph][t];"\n"===e?this.textArray.push({letter:"NEWLINE",state:""}):this.textArray.push({letter:e,state:""})}this.textArray[0].state="c"},updateTime:function(){"started"===this.state?this.currentMs=new Date-this.startTime:this.currentMs=this.totalMs},addParagraph:function(){this.updateTime(),this.state="not-started",this.stats.totalMs+=new Date-this.startTime,this.stats.totalErrors+=this.textArray.filter((function(t){return"-"===t.state})).length,this.stats.totalLetters+=this.textArray.length,this.paragraph+1>=this.text.length?this.finishText():(this.paragraph++,this.stats.totalParagraphs++,this.pos=0,this.clearHook++,this.updateTextArray(),this.emitUpdateUserData())},addLetter:function(t){this.pos++,t===this.textArray[this.pos-1].letter||"\n"===t&&"NEWLINE"===this.textArray[this.pos-1].letter?this.textArray[this.pos-1].state="+":this.textArray[this.pos-1].state="-",this.pos>=this.textArray.length?this.addParagraph():this.pos>this.textArray.length||this.pos<this.textArray.length&&(this.textArray[this.pos].state="c","not-started"===this.state&&(this.state="started"))},removeLetter:function(){this.pos<=0||(this.pos--,this.pos+1>=this.textArray.length||(this.textArray[this.pos+1].state="e",this.textArray[this.pos].state="c"))},convertLetter:function(t){return"NEWLINE"===t?"&para;\n":t[0]}},computed:{mode:function(){return this.$store.state.settings.typeMode},wpm:function(){return 0!==this.currentMs?this.pos/5/(this.currentMs/1e3/60):0}},watch:{mode:function(){this.pos=0,this.updateTextArray(),this.emitUpdateUserData()},pos:function(t){this.$emit("position-update",{pos:t,paragraph:this.paragraph})},state:function(t){var e=this;"started"===t?(this.startTime=new Date,this.updateTimeIntervalId=setInterval((function(){e.updateTime()}),500)):clearInterval(this.updateTimeIntervalId)}}};n("a1bc");it.render=J,it.__scopeId="data-v-55d0f4ae";var ct=it,dt={name:"TyperMenu",components:{Typer:ct},data:function(){return{hideTime:!0,book:null,text:null,parentSet:null,update:!1}},mounted:function(){var t=this;this.book=this.$store.state.db.getBook(this.$route.params.id),this.$store.commit("setCurrentBook",this.book),this.$store.state.db.getBookText(this.$route.params.id).then((function(e){t.text=e})),this.parentSet=Y(this.$store.state.db.getScheme(),this.$route.params.id)},methods:{getWPM:Z,updateUserData:function(t){this.book.userData=t,this.$store.state.db.setBook(this.book.id,this.book),t.finished&&this.parentSet.index+1<this.parentSet.parent.items.length&&this.$store.commit("setCurrentBook",this.parentSet.parent.items[this.parentSet.index+1])},restartBook:function(){this.book.userData={},this.$store.state.db.setBook(this.book.id,this.book),this.update=!this.update}}};n("6c8d");dt.render=U,dt.__scopeId="data-v-0f178bc2";var ut=dt,lt=Object(s["E"])("data-v-74db4fff");Object(s["t"])("data-v-74db4fff");var bt={class:"continue-typing"},ht={key:0};Object(s["r"])();var pt=lt((function(t,e,n,r,a,o){var i=Object(s["x"])("router-link"),c=Object(s["x"])("SchemeEntry");return Object(s["q"])(),Object(s["d"])("div",null,[Object(s["h"])("div",bt,[t.$store.state.currentBook?(Object(s["q"])(),Object(s["d"])(i,{key:0,class:"g-text-button continue-typing",to:{name:"TyperMenu",params:{id:t.$store.state.currentBook.id}}},{default:lt((function(){return[Object(s["g"])("Continue typing ("+Object(s["z"])(t.$store.state.currentBook.title)+") ",1)]})),_:1},8,["to"])):Object(s["e"])("",!0)]),t.$store.state.scheme?(Object(s["q"])(),Object(s["d"])("div",ht,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(t.$store.state.scheme.items,(function(t){return Object(s["q"])(),Object(s["d"])(c,{set:t,key:t.title},null,8,["set"])})),128))])):Object(s["e"])("",!0)])})),ft=Object(s["E"])("data-v-52b48380");Object(s["t"])("data-v-52b48380");var Ot={key:0},jt={key:1};Object(s["r"])();var mt=ft((function(t,e,n,r,a,o){var i=Object(s["x"])("SchemeEntry",!0),c=Object(s["x"])("router-link");return Object(s["q"])(),Object(s["d"])("div",null,["set"===n.set.type?(Object(s["q"])(),Object(s["d"])("div",Ot,[Object(s["h"])("div",null,Object(s["z"])(n.set.title),1),(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(n.set.items,(function(t){return Object(s["q"])(),Object(s["d"])("ol",{key:t.title},[Object(s["h"])(i,{set:t},null,8,["set"])])})),128))])):(Object(s["q"])(),Object(s["d"])("div",jt,[Object(s["h"])(c,{class:{"final-entry":!0,"g-text-button":!0,finished:t.$store.state.db.getBook(n.set.id).userData.finished},to:{name:"TyperMenu",params:{id:n.set.id}}},{default:ft((function(){return[Object(s["g"])(Object(s["z"])(t.$store.state.db.getBook(n.set.id).userData.finished?"✔️":"")+" "+Object(s["z"])(o.langToEmoji(n.set.lang))+" "+Object(s["z"])(n.set.title),1)]})),_:1},8,["class","to"])]))])})),gt={name:"SchemeEntry",props:{set:Object},methods:{langToEmoji:et}};gt.render=mt,gt.__scopeId="data-v-52b48380";var vt=gt,yt={name:"BookSelect",data:function(){return{}},components:{SchemeEntry:vt}};n("632c");yt.render=pt,yt.__scopeId="data-v-74db4fff";var kt=yt,xt=(n("b64b"),Object(s["E"])("data-v-7fb9610e"));Object(s["t"])("data-v-7fb9610e");var St={key:0},wt={key:1},Tt={key:2},It=Object(s["h"])("div",{class:"g-header"},"New session",-1),qt=Object(s["h"])("div",{class:"g-subtitle"},"Random text mode",-1),Lt=Object(s["h"])("div",{class:"g-subtitle"},"Custom text mode",-1),Pt=Object(s["h"])("div",{class:"g-label"},"your text",-1),Mt={key:3},Bt={class:"g-header"},$t={key:0,class:"g-subtitle"},At={class:"info"},Ct={key:0,class:"start-button g-button"},Dt={key:0},_t={key:1},Et=Object(s["g"])(" players: "),zt={key:1},Kt=Object(s["g"])(" Results: "),Nt={class:"results"},Rt={style:{"font-weight":"400"}};Object(s["r"])();var Ut=xt((function(t,e,n,r,a,o){var i=Object(s["x"])("OnlineTyper");return Object(s["q"])(),Object(s["d"])("div",null,[o.isState("loading")?(Object(s["q"])(),Object(s["d"])("div",St," Connection to server... ")):o.isState("error")?(Object(s["q"])(),Object(s["d"])("div",wt," Error: "+Object(s["z"])(a.error),1)):o.isState("new-session")?(Object(s["q"])(),Object(s["d"])("div",Tt,[It,qt,Object(s["h"])("div",{class:"g-button",onClick:e[1]||(e[1]=function(t){return o.requestNewSession(null)})},"create"),Lt,Pt,Object(s["h"])("div",{class:"g-typing",contenteditable:"true",ref:"userText",onInput:e[2]||(e[2]=function(e){return a.userCustomText=t.$refs.userText.innerText})},null,544),Object(s["h"])("div",{class:{"g-button":!0,disabled:a.userCustomText.length<5||a.userCustomText.length>2e3},onClick:e[3]||(e[3]=function(e){return o.requestNewSession(t.$refs.userText.innerText)})},"create ",2)])):(Object(s["q"])(),Object(s["d"])("div",Mt,[Object(s["h"])("div",null,[Object(s["h"])("div",Bt,Object(s["z"])(a.sessionInfo.title)+" "+Object(s["z"])("random"===a.sessionInfo.mode?"🎲":"👆"),1),a.sessionInfo.author?(Object(s["q"])(),Object(s["d"])("div",$t,Object(s["z"])(a.sessionInfo.author),1)):Object(s["e"])("",!0),Object(s["h"])("div",At,[Object(s["h"])("div",null,[o.isState("preparing-to-start")?(Object(s["q"])(),Object(s["d"])("div",Ct,[o.isState("preparing-to-start-server-wait")?(Object(s["q"])(),Object(s["d"])("div",Dt," Game will start NOW! ")):(Object(s["q"])(),Object(s["d"])("div",_t," Starting in "+Object(s["z"])(a.prepareStartCountdown)+"... ",1))])):Object(s["e"])("",!0),a.isAdmin&&o.isState("not-started")?(Object(s["q"])(),Object(s["d"])("div",{key:1,class:"g-button start-button",onClick:e[4]||(e[4]=function(){return o.sendPrepareStart&&o.sendPrepareStart.apply(o,arguments)})}," Start? ")):Object(s["e"])("",!0)]),Et,(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(Object.keys(a.sessionInfo.playersPos),(function(t,e){return Object(s["q"])(),Object(s["d"])("span",{key:t,class:{current:t===a.userId}},Object(s["z"])(0!==e?", ":"")+" "+Object(s["z"])(a.sessionInfo.id2username[t]),3)})),128))]),Object(s["h"])(i,{onFinish:o.finishBefore,onPositionUpdate:o.sendPlayerPos,userId:a.userId,id2username:a.sessionInfo.id2username,dummy:o.isState("not-started"),blocked:!o.isState("started"),text:a.text,"user-data":{},"players-pos":o.isState("started")||o.isState("finished")?a.playersPos:{}},null,8,["onFinish","onPositionUpdate","userId","id2username","dummy","blocked","text","players-pos"]),0!==a.sessionInfo.winners.length?(Object(s["q"])(),Object(s["d"])("div",zt,[Kt,Object(s["h"])("ol",Nt,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(a.sessionInfo.winners,(function(t,e){return Object(s["q"])(),Object(s["d"])("li",{key:t.userId,class:{winner:0===e}},[Object(s["h"])("span",Rt,Object(s["z"])(t.username),1),Object(s["g"])(" finished with "+Object(s["z"])(t.results.totalErrors)+" errors out of "+Object(s["z"])(t.results.totalLetters)+" letters ("+Object(s["z"])((100*t.results.totalErrors/t.results.totalLetters).toFixed(2))+"%). WPM: "+Object(s["z"])(t.results.wpmWithFine.toFixed(0))+". ",1)],2)})),128))])])):Object(s["e"])("",!0)])]))])})),Ht=(n("2ca0"),n("8e27")),Ft=n("ade3"),Wt=Object(s["E"])("data-v-1f0887b0");Object(s["t"])("data-v-1f0887b0");var Vt={key:0,class:"example g-typing"},Jt={key:1,class:"example g-typing"},Gt={key:0},Qt={key:2};Object(s["r"])();var Yt=Wt((function(t,e,n,r,a,o){var i=Object(s["x"])("KeygetterVisible"),c=Object(s["x"])("KeygetterHidden");return Object(s["q"])(),Object(s["d"])("div",null,[n.dummy?(Object(s["q"])(),Object(s["d"])("div",Vt,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(t.textArray,(function(e,n){return Object(s["q"])(),Object(s["d"])("span",{key:n},[Object(s["h"])("span",{innerHTML:o.convertDummy(t.convertLetter(e.letter))},null,8,["innerHTML"])])})),128))])):(Object(s["q"])(),Object(s["d"])("div",Jt,[(Object(s["q"])(!0),Object(s["d"])(s["a"],null,Object(s["w"])(t.textArray,(function(e,n){return Object(s["q"])(),Object(s["d"])("span",{key:n},[(t.player=o.getPlayerByPos(n))?(Object(s["q"])(),Object(s["d"])("span",Gt,[Object(s["h"])("span",{"data-text":t.player?t.player:null,class:Object(Ft["a"])({},"player p"+t.player+" "+o.getLetterOffsetClass(e.letter),t.player)},null,10,["data-text"])])):Object(s["e"])("",!0),Object(s["h"])("span",{class:{letter:!0,good:"+"===e.state,bad:"-"===e.state,current:"c"===e.state},innerHTML:t.convertLetter(e.letter)},null,10,["innerHTML"])])})),128))])),n.blocked?Object(s["e"])("",!0):(Object(s["q"])(),Object(s["d"])("div",Qt,["Separate window"===t.mode?(Object(s["q"])(),Object(s["d"])(i,{key:0,clearHook:"clearHook",onAddLetter:t.addLetter,onRemoveLetter:t.removeLetter,finished:n.blocked},null,8,["onAddLetter","onRemoveLetter","finished"])):Object(s["e"])("",!0),"In place"===t.mode?(Object(s["q"])(),Object(s["d"])(c,{key:1,onAddLetter:t.addLetter,onRemoveLetter:t.removeLetter,finished:n.blocked},null,8,["onAddLetter","onRemoveLetter","finished"])):Object(s["e"])("",!0)]))])})),Xt=(n("ac1f"),n("1276"),n("fb6a"),{mixins:[ct],props:{playersPos:Object,dummy:Boolean,blocked:Boolean,userId:String,id2username:Object},watch:{blocked:function(t){t||(this.state="started")}},methods:{convertDummy:function(t){return" "===t?t:"&para;\n"===t?"\n":"&bull;"},getLetterOffsetClass:function(t){return"й"===t?"above-lower":"Й"===t?"above-upper":",._".split("").includes(t)?"punctuation":" "===t?"whitespace":t.toLowerCase()===t?"lower":t.toUpperCase()===t?"upper":void 0},getPlayerByPos:function(t){for(var e in this.playersPos)if(e!==this.userId&&this.playersPos[e][0]===t&&this.playersPos[e][1]===this.paragraph)return this.id2username[e].slice(0,2).toUpperCase()}},name:"OnlineTyper"});n("bcf9");Xt.render=Yt,Xt.__scopeId="data-v-1f0887b0";var Zt=Xt,te=3,ee={name:"OnlineTyperMenu",components:{OnlineTyper:Zt},data:function(){return{sessionId:"",socket:Object(Ht["io"])("wss://r45.xyz"),text:null,userId:null,isAdmin:null,state:"loading",sessionInfo:null,prepareStartCountdown:te,playersPos:{},error:"",userCustomText:""}},methods:{isState:function(t){return this.state.startsWith(t)},requestNewSession:function(t){var e=this;this.socket.emit("new-session",t,(function(t){e.$router.push({name:"OnlineTyperMenu",params:{id:t.sessionId}})}))},requestInitiation:function(){var t=this;this.socket.emit("init",this.sessionId,this.$store.state.settings.username,(function(e){if(console.log("sessionInfo",e),e.error)return t.state="error",void(t.error=e.error);t.sessionInfo=e,t.userId=e.userId,t.isAdmin=e.isAdmin,t.state=e.state,t.init()}))},sendPrepareStart:function(){this.socket.emit("prepare-start"),this.prepareStart()},sendPlayerPos:function(t){this.socket.emit("new-position",[t.pos,t.paragraph])},sendFinishEvent:function(t){console.log("you finished",t),this.socket.emit("finished",t)},init:function(){this.text=this.sessionInfo.text},update:function(t){for(var e in t.sessionInfo&&(this.sessionInfo=t.sessionInfo),this.playersPos={},t.playersPos)e!==this.userId&&(this.playersPos[e]=t.playersPos[e])},prepareStart:function(){var t=this;this.state="preparing-to-start";var e=setInterval((function(){t.prepareStartCountdown--,0===t.prepareStartCountdown&&(clearInterval(e),t.prepareStartCountdown=te,"preparing-to-start"===t.state&&(t.state="preparing-to-start-server-wait"))}),1e3)},start:function(){this.state="started",this.prepareStartCountdown=0},finishBefore:function(t){this.state="finished",this.sendFinishEvent(t)}},created:function(){var t=this;this.sessionId=this.$route.params.id,this.socket.on("connect",(function(){"new"===t.sessionId?t.state="new-session":(t.requestInitiation(),t.socket.on("update",t.update),t.socket.on("prepare-start",t.prepareStart),t.socket.on("start",t.start))}))},unmounted:function(){this.socket.disconnect()},computed:{playersList:function(){var t=[];for(var e in this.sessionInfo.playersPos)t.push(this.sessionInfo.id2username[e]);return t}}};n("ec22");ee.render=Ut,ee.__scopeId="data-v-7fb9610e";var ne=ee,se=Object(s["E"])("data-v-1782a577");Object(s["t"])("data-v-1782a577");var re=Object(s["f"])('<div class="g-header" data-v-1782a577>About</div><p data-v-1782a577> It&#39;s a single page web application which implements simple typing trainer. </p><div class="g-header" data-v-1782a577>F.A.Q.</div><p class="question" data-v-1782a577> Why time stats are always hidden? </p><p class="answer" data-v-1782a577> I think displaying current typing speed confuses the user and decreases performance, so I made the stats hidden by default. Nonetheless, you can always show them by clicking on the inscription. </p><p class="question" data-v-1782a577> What is WPM? </p><p class="answer" data-v-1782a577> WPM stands for words per minute, where each word is exactly 5 chars (including whitespace and punctuation). </p><p class="question" data-v-1782a577> Where my results and custom books are saved? </p><p class="answer" data-v-1782a577> All your stats and books are saved locally, so don&#39;t worry about losing progress. </p><p class="question" data-v-1782a577> What is &quot;Fight Online&quot;? </p><p class="answer" data-v-1782a577> This is a competitive trainer mode where you can type the same text with your friends in real-time sync mode over the internet. </p><div class="g-header" data-v-1782a577>Other</div><p data-v-1782a577> Made by Tania Klenivska<br data-v-1782a577><a target="_blank" rel="noopener noreferrer" href="https://github.com/Klenivska/keyboard-project.git" data-v-1782a577>GitHub</a>. </p>',13);Object(s["r"])();var ae=se((function(t,e,n,r,a,o){return Object(s["q"])(),Object(s["d"])("div",null,[re])})),oe={name:"About"};n("5383");oe.render=ae,oe.__scopeId="data-v-1782a577";var ie=oe,ce=n("5f35"),de=[{path:"/",name:"BookSelect",component:kt},{path:"/typer/:id",name:"TyperMenu",component:ut,props:!0},{path:"/fight/:id",name:"OnlineTyperMenu",component:ne,props:!0},{path:"/about",name:"About",component:ie},{path:"/:pathMatch(.*)*",redirect:"/"}],ue=Object(A["a"])({history:Object(A["b"])(ce["publicPath"]),routes:de}),le=ue,be=n("1da1"),he=n("15fd"),pe=n("d4ec"),fe=n("bee2"),Oe=(n("96cf"),n("d3b7"),function(){function t(){Object(pe["a"])(this,t),console.log("DB Created"),this.db=null,this.scheme=null,this.id2book={}}return Object(fe["a"])(t,[{key:"generateId2book",value:function(t){if("set"===t.type)for(var e=0;e<t.items.length;e++)this.generateId2book(t.items[e]);else{var n=this.getBook(t.id);this.setBook(t.id,Object(f["a"])(Object(f["a"])({},t),{},{userData:n&&n.userData||{}}))}}},{key:"init",value:function(){var e=this;return new Promise((function(n,s){setTimeout((function(){fetch(ce["publicPath"]+"scheme.json").then((function(t){return t.json()})).then((function(r){e.scheme=r;var a=indexedDB.open(t.dbName,t.version);a.onerror=function(t){console.error("IndexDB creation error",t),alert("IndexDB error... Maybe your browser is too old?")},a.onsuccess=function(a){e.db=a.target.result,localStorage.getItem(t.localStorageSchemeKey)!==JSON.stringify(r)?(e.generateId2book(r),console.log("pechatayBooksScheme updated, loading texts json"),fetch(ce["publicPath"]+"texts.json").then((function(t){return t.json()})).then((function(t){for(var s=0;s<t.length;s++){var r=t[s],a=r.text,o=Object(he["a"])(r,["text"]),i=e.db.transaction("bookTexts","readwrite"),c=i.objectStore("bookTexts");c.put({id:o.id,text:a})}n()}),s),localStorage.setItem(t.localStorageSchemeKey,JSON.stringify(r))):n()},a.onupgradeneeded=function(t){var e=t.target.result;e.objectStoreNames.contains("bookTexts")||e.createObjectStore("bookTexts",{keyPath:"id"})}}))}),0)}))}},{key:"getScheme",value:function(){return this.scheme}},{key:"getSettingsValue",value:function(e){return JSON.parse(localStorage.getItem(t.localStorageSettingsKeyPrefix+e))}},{key:"setSettingsValue",value:function(e,n){return localStorage.setItem(t.localStorageSettingsKeyPrefix+e,JSON.stringify(n))}},{key:"getBook",value:function(e){return JSON.parse(localStorage.getItem(t.localStorageBookKeyPrefix+e))}},{key:"setBook",value:function(e,n){localStorage.setItem(t.localStorageBookKeyPrefix+e,JSON.stringify(n))}},{key:"getBookText",value:function(){var t=Object(be["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,s){var r=n.db.transaction(["bookTexts"],"readonly"),a=r.objectStore("bookTexts"),o=a.get(e);o.onerror=s,o.onsuccess=function(){o.result?t(o.result.text):s()}})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}());Object(Ft["a"])(Oe,"dbName","pechatayDB"),Object(Ft["a"])(Oe,"localStorageSchemeKey","pechatayBooksScheme"),Object(Ft["a"])(Oe,"localStorageSettingsKeyPrefix","pechataySettings_"),Object(Ft["a"])(Oe,"localStorageBookKeyPrefix","pechatayBook_"),Object(Ft["a"])(Oe,"schemeVersion",1);var je=Oe,me=Object(s["c"])($),ge=Object(r["a"])({state:function(){return{loading:!1,db:new je,currentBook:null,scheme:null,settings:{},settingsTemplate:{font:["Roboto Mono","Source Code Pro","IBM Plex Mono","JetBrains Mono"],theme:["Light","Dark"],typeMode:["In place","Separate window"],username:tt()}}},mutations:{init:function(t){for(var e in t.loading=!0,t.db.init().then((function(){t.loading=!1,t.scheme=t.db.getScheme()})),t.currentBook=t.db.getSettingsValue("currentBook"),t.settingsTemplate){var n=t.db.getSettingsValue("settings_"+e);Array.isArray(t.settingsTemplate[e])?t.settingsTemplate[e].includes(n)?t.settings[e]=n:t.settings[e]=t.settingsTemplate[e][0]:t.settings[e]=null!==n?n:t.settingsTemplate[e]}},setCurrentBook:function(t,e){t.currentBook=e,t.db.setSettingsValue("currentBook",e)},setSetting:function(t,e){var n=e.setting,s=e.value;t.settings[n]=s,t.db.setSettingsValue("settings_"+n,s)}}});me.use(le).use(ge).mount("#app")},"5f35":function(t,e,n){t.exports={publicPath:"/pechatay/"}},"632c":function(t,e,n){"use strict";n("4b0b")},"6c8d":function(t,e,n){"use strict";n("961b")},"8c21":function(t,e,n){"use strict";n("07a6")},"961b":function(t,e,n){},"9da6":function(t,e,n){},"9def":function(t,e,n){"use strict";n("c1ba")},"9e23":function(t,e,n){},a1bc:function(t,e,n){"use strict";n("dd48")},a82b:function(t,e,n){},bcf9:function(t,e,n){"use strict";n("9e23")},c1ba:function(t,e,n){},dd48:function(t,e,n){},dd95:function(t,e,n){},ec22:function(t,e,n){"use strict";n("dd95")},fc29:function(t,e,n){"use strict";n("9da6")}});
//# sourceMappingURL=app.eb12203e.js.map