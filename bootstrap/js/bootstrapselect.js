﻿/*!
 * v1.7.2 
 */
(function(a,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(c){return(b(c))})}else{if(typeof exports==="object"){module.exports=b(require("jquery"))}else{b(jQuery)}}}(this,function(){(function(d){if(!String.prototype.includes){(function(){var j={}.toString;var g=(function(){try{var n={};var m=Object.defineProperty;var k=m(n,n,n)&&m}catch(l){}return k}());var i="".indexOf;var h=function(p){if(this==null){throw TypeError()}var n=String(this);if(p&&j.call(p)=="[object RegExp]"){throw TypeError()}var l=n.length;var m=String(p);var o=m.length;var k=arguments.length>1?arguments[1]:undefined;var r=k?Number(k):0;if(r!=r){r=0}var q=Math.min(Math.max(r,0),l);if(o+q>l){return false}return i.call(n,m,r)!=-1};if(g){g(String.prototype,"includes",{value:h,configurable:true,writable:true})}else{String.prototype.includes=h}}())}if(!String.prototype.startsWith){(function(){var g=(function(){try{var m={};var l=Object.defineProperty;var j=l(m,m,m)&&l}catch(k){}return j}());var i={}.toString;var h=function(q){if(this==null){throw TypeError()}var n=String(this);if(q&&i.call(q)=="[object RegExp]"){throw TypeError()}var j=n.length;var r=String(q);var l=r.length;var m=arguments.length>1?arguments[1]:undefined;var p=m?Number(m):0;if(p!=p){p=0}var k=Math.min(Math.max(p,0),j);if(l+k>j){return false}var o=-1;while(++o<l){if(n.charCodeAt(k+o)!=r.charCodeAt(o)){return false}}return true};if(g){g(String.prototype,"startsWith",{value:h,configurable:true,writable:true})}else{String.prototype.startsWith=h}}())}if(!Object.keys){Object.keys=function(i,g,h){h=[];for(g in i){h.hasOwnProperty.call(i,g)&&h.push(g)}return h}}d.expr[":"].icontains=function(j,g,i){var k=d(j);var h=(k.data("tokens")||k.text()).toUpperCase();return h.includes(i[3].toUpperCase())};d.expr[":"].ibegins=function(j,g,i){var k=d(j);var h=(k.data("tokens")||k.text()).toUpperCase();return h.startsWith(i[3].toUpperCase())};d.expr[":"].aicontains=function(j,g,i){var k=d(j);var h=(k.data("tokens")||k.data("normalizedText")||k.text()).toUpperCase();return h.includes(i[3].toUpperCase())};d.expr[":"].aibegins=function(j,g,i){var k=d(j);var h=(k.data("tokens")||k.data("normalizedText")||k.text()).toUpperCase();return h.startsWith(i[3].toUpperCase())};function f(h){var g=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];d.each(g,function(){h=h.replace(this.re,this.ch)});return h}function e(h){var j={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var l="(?:"+Object.keys(j).join("|")+")",k=new RegExp(l),i=new RegExp(l,"g"),g=h==null?"":""+h;return k.test(g)?g.replace(i,function(m){return j[m]}):g}var b=function(h,g,i){if(i){i.stopPropagation();i.preventDefault()}this.$element=d(h);this.$newElement=null;this.$button=null;this.$menu=null;this.$lis=null;this.options=g;if(this.options.title===null){this.options.title=this.$element.attr("title")}this.val=b.prototype.val;this.render=b.prototype.render;this.refresh=b.prototype.refresh;this.setStyle=b.prototype.setStyle;this.selectAll=b.prototype.selectAll;this.deselectAll=b.prototype.deselectAll;this.destroy=b.prototype.remove;this.remove=b.prototype.remove;this.show=b.prototype.show;this.hide=b.prototype.hide;this.init()};b.VERSION="1.7.2";b.DEFAULTS={noneSelectedText:"请选择",noneResultsText:"未找到 {0}",countSelectedText:function(h,g){return(h==1)?"{0} item selected":"{0} items selected"},maxOptionsText:function(g,h){return[(g==1)?"最多选择{n}项)":"最多选择{n}项",(h==1)?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:false,doneButtonText:"完成选择",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:false,container:false,hideDisabled:false,showSubtext:false,showIcon:true,showContent:true,dropupAuto:true,header:false,liveSearch:false,liveSearchPlaceholder:null,liveSearchNormalize:false,liveSearchStyle:"contains",actionsBox:false,iconBase:"glyphicon",tickIcon:"glyphicon-ok",maxOptions:false,mobile:false,selectOnTab:false,dropdownAlignRight:false};b.prototype={constructor:b,init:function(){var g=this,h=this.$element.attr("id");this.$element.addClass("bs-select-hidden");this.liObj={};this.multiple=this.$element.prop("multiple");this.autofocus=this.$element.prop("autofocus");this.$newElement=this.createView();this.$element.after(this.$newElement);this.$button=this.$newElement.children("button");this.$menu=this.$newElement.children(".dropdown-menu");this.$menuInner=this.$menu.children(".inner");this.$searchbox=this.$menu.find("input");if(this.options.dropdownAlignRight){this.$menu.addClass("dropdown-menu-right")}if(typeof h!=="undefined"){this.$button.attr("data-id",h);d('label[for="'+h+'"]').click(function(i){i.preventDefault();g.$button.focus()})}this.checkDisabled();this.clickListener();if(this.options.liveSearch){this.liveSearchListener()}this.render();this.setStyle();this.setWidth();if(this.options.container){this.selectPosition()}this.$menu.data("this",this);this.$newElement.data("this",this);if(this.options.mobile){this.mobile()}this.$newElement.on("hide.bs.dropdown",function(i){g.$element.trigger("hide.bs.select",i)});this.$newElement.on("hidden.bs.dropdown",function(i){g.$element.trigger("hidden.bs.select",i)});this.$newElement.on("show.bs.dropdown",function(i){g.$element.trigger("show.bs.select",i)});this.$newElement.on("shown.bs.dropdown",function(i){g.$element.trigger("shown.bs.select",i)});setTimeout(function(){g.$element.trigger("loaded.bs.select")})},createDropdown:function(){var h=this.multiple?" show-tick":"",i=this.$element.parent().hasClass("input-group")?" input-group-btn":"",n=this.autofocus?" autofocus":"";var m=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"";var l=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+e(this.options.liveSearchPlaceholder)+'"')+"></div>":"";var k=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"";var g=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"";var j='<div class="btn-group bootstrap-select'+h+i+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+n+'><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+m+l+k+'<ul class="dropdown-menu inner" role="menu"></ul>'+g+"</div></div>";return d(j)},createView:function(){var h=this.createDropdown(),g=this.createLi();h.find("ul")[0].innerHTML=g;return h},reloadLi:function(){this.destroyLi();var g=this.createLi();this.$menuInner[0].innerHTML=g},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var m=this,l=[],n=0,i=document.createElement("option"),h=-1;var g=function(r,p,q,o){return"<li"+((typeof q!=="undefined"&""!==q)?' class="'+q+'"':"")+((typeof p!=="undefined"&null!==p)?' data-original-index="'+p+'"':"")+((typeof o!=="undefined"&null!==o)?'data-optgroup="'+o+'"':"")+">"+r+"</li>"};var k=function(r,o,q,p){return'<a tabindex="0"'+(typeof o!=="undefined"?' class="'+o+'"':"")+(typeof q!=="undefined"?' style="'+q+'"':"")+(m.options.liveSearchNormalize?' data-normalized-text="'+f(e(r))+'"':"")+(typeof p!=="undefined"||p!==null?' data-tokens="'+p+'"':"")+">"+r+'<span class="'+m.options.iconBase+" "+m.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple){h--;if(!this.$element.find(".bs-title-option").length){var j=this.$element[0];i.className="bs-title-option";i.appendChild(document.createTextNode(this.options.title));i.value="";j.insertBefore(i,j.firstChild);if(j.options[j.selectedIndex].getAttribute("selected")===null){i.selected=true}}}this.$element.find("option").each(function(r){var t=d(this);h++;if(t.hasClass("bs-title-option")){return}var p=this.className||"",s=this.style.cssText,z=t.data("content")?t.data("content"):t.html(),u=t.data("tokens")?t.data("tokens"):null,x=typeof t.data("subtext")!=="undefined"?'<small class="text-muted">'+t.data("subtext")+"</small>":"",v=typeof t.data("icon")!=="undefined"?'<span class="'+m.options.iconBase+" "+t.data("icon")+'"></span> ':"",y=this.disabled||this.parentElement.tagName==="OPTGROUP"&&this.parentElement.disabled;if(v!==""&&y){v="<span>"+v+"</span>"}if(m.options.hideDisabled&&y){h--;return}if(!t.data("content")){z=v+'<span class="text">'+z+x+"</span>"}if(this.parentElement.tagName==="OPTGROUP"&&t.data("divider")!==true){if(t.index()===0){n+=1;var w=this.parentElement.label,A=typeof t.parent().data("subtext")!=="undefined"?'<small class="text-muted">'+t.parent().data("subtext")+"</small>":"",o=t.parent().data("icon")?'<span class="'+m.options.iconBase+" "+t.parent().data("icon")+'"></span> ':"",q=" "+this.parentElement.className||"";w=o+'<span class="text">'+w+A+"</span>";if(r!==0&&l.length>0){h++;l.push(g("",null,"divider",n+"div"))}h++;l.push(g(w,null,"dropdown-header"+q,n))}l.push(g(k(z,"opt "+p+q,s,u),r,"",n))}else{if(t.data("divider")===true){l.push(g("",r,"divider"))}else{if(t.data("hidden")===true){l.push(g(k(z,p,s,u),r,"hidden is-hidden"))}else{if(this.previousElementSibling&&this.previousElementSibling.tagName==="OPTGROUP"){h++;l.push(g("",null,"divider",n+"div"))}l.push(g(k(z,p,s,u),r))}}}m.liObj[r]=h});if(!this.multiple&&this.$element.find("option:selected").length===0&&!this.options.title){this.$element.find("option").eq(0).prop("selected",true).attr("selected","selected")}return l.join("")},findLis:function(){if(this.$lis==null){this.$lis=this.$menu.find("li")}return this.$lis},render:function(j){var i=this,l;if(j!==false){this.$element.find("option").each(function(o){var p=i.findLis().eq(i.liObj[o]);i.setDisabled(o,this.disabled||this.parentElement.tagName==="OPTGROUP"&&this.parentElement.disabled,p);i.setSelected(o,this.selected,p)})}this.tabIndex();var n=this.$element.find("option").map(function(){if(this.selected){if(i.options.hideDisabled&&(this.disabled||this.parentElement.tagName==="OPTGROUP"&&this.parentElement.disabled)){return false}var q=d(this),p=q.data("icon")&&i.options.showIcon?'<i class="'+i.options.iconBase+" "+q.data("icon")+'"></i> ':"",o;if(i.options.showSubtext&&q.data("subtext")&&!i.multiple){o=' <small class="text-muted">'+q.data("subtext")+"</small>"}else{o=""}if(typeof q.attr("title")!=="undefined"){return q.attr("title")}else{if(q.data("content")&&i.options.showContent){return q.data("content")}else{return p+q.html()+o}}}}).toArray();var k=!this.multiple?n[0]:n.join(this.options.multipleSeparator);if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var g=this.options.selectedTextFormat.split(">");if((g.length>1&&n.length>g[1])||(g.length==1&&n.length>=2)){l=this.options.hideDisabled?", [disabled]":"";var h=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+l).length,m=(typeof this.options.countSelectedText==="function")?this.options.countSelectedText(n.length,h):this.options.countSelectedText;k=m.replace("{0}",n.length.toString()).replace("{1}",h.toString())}}if(this.options.title==undefined){this.options.title=this.$element.attr("title")}if(this.options.selectedTextFormat=="static"){k=this.options.title}if(!k){k=typeof this.options.title!=="undefined"?this.options.title:this.options.noneSelectedText}this.$button.attr("title",d.trim(k.replace(/<[^>]*>?/g,"")));this.$button.children(".filter-option").html(k);this.$element.trigger("rendered.bs.select")},setStyle:function(i,h){if(this.$element.attr("class")){this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""))}var g=i?i:this.options.style;if(h=="add"){this.$button.addClass(g)}else{if(h=="remove"){this.$button.removeClass(g)}else{this.$button.removeClass(this.options.style);this.$button.addClass(g)}}},liHeight:function(m){if(!m&&(this.options.size===false||this.sizeInfo)){return}var k=document.createElement("div"),g=document.createElement("div"),q=document.createElement("ul"),y=document.createElement("li"),x=document.createElement("li"),C=document.createElement("a"),w=document.createElement("span"),B=this.options.header?this.$menu.find(".popover-title")[0].cloneNode(true):null,r=this.options.liveSearch?document.createElement("div"):null,s=this.options.actionsBox&&this.multiple?this.$menu.find(".bs-actionsbox")[0].cloneNode(true):null,j=this.options.doneButton&&this.multiple?this.$menu.find(".bs-donebutton")[0].cloneNode(true):null;w.className="text";k.className=this.$menu[0].parentNode.className+" open";g.className="dropdown-menu open";q.className="dropdown-menu inner";y.className="divider";w.appendChild(document.createTextNode("Inner text"));C.appendChild(w);x.appendChild(C);q.appendChild(x);q.appendChild(y);if(B){g.appendChild(B)}if(r){var u=document.createElement("span");r.className="bs-searchbox";u.className="form-control";r.appendChild(u);g.appendChild(r)}if(s){g.appendChild(s)}g.appendChild(q);if(j){g.appendChild(j)}k.appendChild(g);document.body.appendChild(k);var i=C.offsetHeight,A=B?B.offsetHeight:0,t=r?r.offsetHeight:0,p=s?s.offsetHeight:0,l=j?j.offsetHeight:0,v=d(y).outerHeight(true),h=getComputedStyle?getComputedStyle(g):false,n=h?d(g):null,z=parseInt(h?h.paddingTop:n.css("paddingTop"))+parseInt(h?h.paddingBottom:n.css("paddingBottom"))+parseInt(h?h.borderTopWidth:n.css("borderTopWidth"))+parseInt(h?h.borderBottomWidth:n.css("borderBottomWidth")),o=z+parseInt(h?h.marginTop:n.css("marginTop"))+parseInt(h?h.marginBottom:n.css("marginBottom"))+2;document.body.removeChild(k);this.sizeInfo={liHeight:i,headerHeight:A,searchHeight:t,actionsHeight:p,doneButtonHeight:l,dividerHeight:v,menuPadding:z,menuExtras:o}},setSize:function(){this.findLis();this.liHeight();var o=this,l=this.$menu,i=this.$menuInner,u=d(window),A=this.$newElement[0].offsetHeight,j=this.sizeInfo.liHeight,y=this.sizeInfo.headerHeight,r=this.sizeInfo.searchHeight,n=this.sizeInfo.actionsHeight,k=this.sizeInfo.doneButtonHeight,q=this.sizeInfo.dividerHeight,x=this.sizeInfo.menuPadding,m=this.sizeInfo.menuExtras,v=this.options.hideDisabled?".disabled":"",w,s,B,z,p=function(){B=o.$newElement.offset().top-u.scrollTop();z=u.height()-B-A};p();if(this.options.header){l.css("padding-top",0)}if(this.options.size==="auto"){var h=function(){var F,E=function(I,H){return function(J){if(H){return(J.classList?J.classList.contains(I):d(J).hasClass(I))}else{return !(J.classList?J.classList.contains(I):d(J).hasClass(I))}}},D=o.$menuInner[0].getElementsByTagName("li"),C=Array.prototype.filter?Array.prototype.filter.call(D,E("hidden",false)):o.$lis.not(".hidden"),G=Array.prototype.filter?Array.prototype.filter.call(C,E("dropdown-header",true)):C.filter(".dropdown-header");p();w=z-m;if(o.options.container){if(!l.data("height")){l.data("height",l.height())}s=l.data("height")}else{s=l.height()}if(o.options.dropupAuto){o.$newElement.toggleClass("dropup",B>z&&(w-m)<s)}if(o.$newElement.hasClass("dropup")){w=B-m}if((C.length+G.length)>3){F=j*3+m-2}else{F=0}l.css({"max-height":w+"px",overflow:"hidden","min-height":F+y+r+n+k+"px"});i.css({"max-height":w-y-r-n-k-x+"px","overflow-y":"auto","min-height":Math.max(F-x,0)+"px"})};h();this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",h);u.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",h)}else{if(this.options.size&&this.options.size!="auto"&&this.$lis.not(v).length>this.options.size){var t=this.$lis.not(".divider").not(v).children().slice(0,this.options.size).last().parent().index(),g=this.$lis.slice(0,t+1).filter(".divider").length;w=j*this.options.size+g*q+x;if(o.options.container){if(!l.data("height")){l.data("height",l.height())}s=l.data("height")}else{s=l.height()}if(o.options.dropupAuto){this.$newElement.toggleClass("dropup",B>z&&(w-m)<s)}l.css({"max-height":w+y+r+n+k+"px",overflow:"hidden","min-height":""});i.css({"max-height":w-x+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if(this.options.width==="auto"){this.$menu.css("min-width","0");var h=this.$menu.parent().clone().appendTo("body"),g=this.options.container?this.$newElement.clone().appendTo("body"):h,i=h.children(".dropdown-menu").outerWidth(),j=g.css("width","auto").children("button").outerWidth();h.remove();g.remove();this.$newElement.css("width",Math.max(i,j)+"px")}else{if(this.options.width==="fit"){this.$menu.css("min-width","");this.$newElement.css("width","").addClass("fit-width")}else{if(this.options.width){this.$menu.css("min-width","");this.$newElement.css("width",this.options.width)}else{this.$menu.css("min-width","");this.$newElement.css("width","")}}}if(this.$newElement.hasClass("fit-width")&&this.options.width!=="fit"){this.$newElement.removeClass("fit-width")}},selectPosition:function(){var i=this,h="<div />",j=d(h),l,k,g=function(m){j.addClass(m.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",m.hasClass("dropup"));l=m.offset();k=m.hasClass("dropup")?0:m[0].offsetHeight;j.css({top:l.top+k,left:l.left,width:m[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(){if(i.isDisabled()){return}g(d(this));j.appendTo(i.options.container);j.toggleClass("open",!d(this).hasClass("open"));j.append(i.$menu)});d(window).on("resize scroll",function(){g(i.$newElement)});this.$element.on("hide.bs.select",function(){i.$menu.data("height",i.$menu.height());j.detach()})},setSelected:function(g,i,h){if(!h){var h=this.findLis().eq(this.liObj[g])}h.toggleClass("selected",i)},setDisabled:function(g,i,h){if(!h){var h=this.findLis().eq(this.liObj[g])}if(i){h.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1)}else{h.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)}},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var g=this;if(this.isDisabled()){this.$newElement.addClass("disabled");this.$button.addClass("disabled").attr("tabindex",-1)}else{if(this.$button.hasClass("disabled")){this.$newElement.removeClass("disabled");this.$button.removeClass("disabled")}if(this.$button.attr("tabindex")==-1&&!this.$element.data("tabindex")){this.$button.removeAttr("tabindex")}}this.$button.click(function(){return !g.isDisabled()})},tabIndex:function(){if(this.$element.is("[tabindex]")){this.$element.data("tabindex",this.$element.attr("tabindex"));this.$button.attr("tabindex",this.$element.data("tabindex"))}},clickListener:function(){var g=this,h=d(document);this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(i){i.stopPropagation()});h.data("spaceSelect",false);this.$button.on("keyup",function(i){if(/(32)/.test(i.keyCode.toString(10))&&h.data("spaceSelect")){i.preventDefault();h.data("spaceSelect",false)}});this.$newElement.on("click",function(){g.setSize();g.$element.on("shown.bs.select",function(){if(!g.options.liveSearch&&!g.multiple){g.$menu.find(".selected a").focus()}else{if(!g.multiple){var i=g.liObj[g.$element[0].selectedIndex];if(typeof i!=="number"){return}var j=g.$lis.eq(i)[0].offsetTop-g.$menuInner[0].offsetTop;j=j-g.$menuInner[0].offsetHeight/2+g.sizeInfo.liHeight/2;g.$menuInner[0].scrollTop=j}}})});this.$menu.on("click","li a",function(x){var n=d(this),i=n.parent().data("originalIndex"),v=g.$element.val(),p=g.$element.prop("selectedIndex");if(g.multiple){x.stopPropagation()}x.preventDefault();if(!g.isDisabled()&&!n.parent().hasClass("disabled")){var t=g.$element.find("option"),u=t.eq(i),k=u.prop("selected"),s=u.parent("optgroup"),z=g.options.maxOptions,q=s.data("maxOptions")||false;if(!g.multiple){t.prop("selected",false);u.prop("selected",true);g.$menu.find(".selected").removeClass("selected");g.setSelected(i,true)}else{u.prop("selected",!k);g.setSelected(i,!k);n.blur();if(z!==false||q!==false){var j=z<t.filter(":selected").length,m=q<s.find("option:selected").length;if((z&&j)||(q&&m)){if(z&&z==1){t.prop("selected",false);u.prop("selected",true);g.$menu.find(".selected").removeClass("selected");g.setSelected(i,true)}else{if(q&&q==1){s.find("option:selected").prop("selected",false);u.prop("selected",true);var w=n.parent().data("optgroup");g.$menu.find('[data-optgroup="'+w+'"]').removeClass("selected");g.setSelected(i,true)}else{var l=(typeof g.options.maxOptionsText==="function")?g.options.maxOptionsText(z,q):g.options.maxOptionsText,y=l[0].replace("{n}",z),o=l[1].replace("{n}",q),r=d('<div class="notify"></div>');if(l[2]){y=y.replace("{var}",l[2][z>1?0:1]);o=o.replace("{var}",l[2][q>1?0:1])}u.prop("selected",false);g.$menu.append(r);if(z&&j){r.append(d("<div>"+y+"</div>"));g.$element.trigger("maxReached.bs.select")}if(q&&m){r.append(d("<div>"+o+"</div>"));g.$element.trigger("maxReachedGrp.bs.select")}setTimeout(function(){g.setSelected(i,false)},10);r.delay(750).fadeOut(300,function(){d(this).remove()})}}}}}if(!g.multiple){g.$button.focus()}else{if(g.options.liveSearch){g.$searchbox.focus()}}if((v!=g.$element.val()&&g.multiple)||(p!=g.$element.prop("selectedIndex")&&!g.multiple)){g.$element.change();g.$element.trigger("changed.bs.select",[i,u.prop("selected"),k])}}});this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(i){if(i.currentTarget==this){i.preventDefault();i.stopPropagation();if(g.options.liveSearch&&!d(i.target).hasClass("close")){g.$searchbox.focus()}else{g.$button.focus()}}});this.$menu.on("click","li.divider, li.dropdown-header",function(i){i.preventDefault();i.stopPropagation();if(g.options.liveSearch){g.$searchbox.focus()}else{g.$button.focus()}});this.$menu.on("click",".popover-title .close",function(){g.$button.click()});this.$searchbox.on("click",function(i){i.stopPropagation()});this.$menu.on("click",".actions-btn",function(i){if(g.options.liveSearch){g.$searchbox.focus()}else{g.$button.focus()}i.preventDefault();i.stopPropagation();if(d(this).hasClass("bs-select-all")){g.selectAll()}else{g.deselectAll()}g.$element.change()});this.$element.change(function(){g.render(false)})},liveSearchListener:function(){var h=this,g=d('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){h.$menuInner.find(".active").removeClass("active");if(!!h.$searchbox.val()){h.$searchbox.val("");h.$lis.not(".is-hidden").removeClass("hidden");if(!!g.parent().length){g.remove()}}if(!h.multiple){h.$menuInner.find(".selected").addClass("active")}setTimeout(function(){h.$searchbox.focus()},10)});this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(i){i.stopPropagation()});this.$searchbox.on("input propertychange",function(){if(h.$searchbox.val()){var i=h.$lis.not(".is-hidden").removeClass("hidden").children("a");if(h.options.liveSearchNormalize){i=i.not(":a"+h._searchStyle()+"("+f(h.$searchbox.val())+")")}else{i=i.not(":"+h._searchStyle()+"("+h.$searchbox.val()+")")}i.parent().addClass("hidden");h.$lis.filter(".dropdown-header").each(function(){var l=d(this),k=l.data("optgroup");if(h.$lis.filter("[data-optgroup="+k+"]").not(l).not(".hidden").length===0){l.addClass("hidden");h.$lis.filter("[data-optgroup="+k+"div]").addClass("hidden")}});var j=h.$lis.not(".hidden");j.each(function(k){var l=d(this);if(l.hasClass("divider")&&(l.index()===j.eq(0).index()||l.index()===j.last().index()||j.eq(k+1).hasClass("divider"))){l.addClass("hidden")}});if(!h.$lis.not(".hidden, .no-results").length){if(!!g.parent().length){g.remove()}g.html(h.options.noneResultsText.replace("{0}",'"'+e(h.$searchbox.val())+'"')).show();h.$menuInner.append(g)}else{if(!!g.parent().length){g.remove()}}}else{h.$lis.not(".is-hidden").removeClass("hidden");if(!!g.parent().length){g.remove()}}h.$lis.filter(".active").removeClass("active");h.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus();d(this).focus()})},_searchStyle:function(){var g="icontains";switch(this.options.liveSearchStyle){case"begins":case"startsWith":g="ibegins";break;case"contains":default:break}return g},val:function(g){if(typeof g!=="undefined"){this.$element.val(g);this.render();return this.$element}else{return this.$element.val()}},selectAll:function(){this.findLis();this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected",true);this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").addClass("selected");this.render(false)},deselectAll:function(){this.findLis();this.$element.find("option:enabled").not("[data-divider], [data-hidden]").prop("selected",false);this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").removeClass("selected");this.render(false)},keydown:function(x){var i=d(this),r=i.is("input")?i.parent().parent():i.parent(),h,m=r.data("this"),j,t,l,p,s,g,n,v,u=":not(.disabled, .hidden, .dropdown-header, .divider)",q={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(m.options.liveSearch){r=i.parent().parent()}if(m.options.container){r=m.$menu}h=d("[role=menu] li a",r);v=m.$menu.parent().hasClass("open");if(!v&&(x.keyCode>=48&&x.keyCode<=57||event.keyCode>=65&&event.keyCode<=90)){if(!m.options.container){m.setSize();m.$menu.parent().addClass("open");v=true}else{m.$newElement.trigger("click")}m.$searchbox.focus()}if(m.options.liveSearch){if(/(^9$|27)/.test(x.keyCode.toString(10))&&v&&m.$menu.find(".active").length===0){x.preventDefault();m.$menu.parent().removeClass("open");if(m.options.container){m.$newElement.removeClass("open")}m.$button.focus()}h=d("[role=menu] li:not(.disabled, .hidden, .dropdown-header, .divider)",r);if(!i.val()&&!/(38|40)/.test(x.keyCode.toString(10))){if(h.filter(".active").length===0){h=m.$newElement.find("li");if(m.options.liveSearchNormalize){h=h.filter(":a"+m._searchStyle()+"("+f(q[x.keyCode])+")")}else{h=h.filter(":"+m._searchStyle()+"("+q[x.keyCode]+")")}}}}if(!h.length){return}if(/(38|40)/.test(x.keyCode.toString(10))){j=h.index(h.filter(":focus"));l=h.parent(u).first().data("originalIndex");p=h.parent(u).last().data("originalIndex");t=h.eq(j).parent().nextAll(u).eq(0).data("originalIndex");s=h.eq(j).parent().prevAll(u).eq(0).data("originalIndex");g=h.eq(t).parent().prevAll(u).eq(0).data("originalIndex");if(m.options.liveSearch){h.each(function(z){if(!d(this).hasClass("disabled")){d(this).data("index",z)}});j=h.index(h.filter(".active"));l=h.first().data("index");p=h.last().data("index");t=h.eq(j).nextAll().eq(0).data("index");s=h.eq(j).prevAll().eq(0).data("index");g=h.eq(t).prevAll().eq(0).data("index")}n=i.data("prevIndex");if(x.keyCode==38){if(m.options.liveSearch){j-=1}if(j!=g&&j>s){j=s}if(j<l){j=l}if(j==n){j=p}}else{if(x.keyCode==40){if(m.options.liveSearch){j+=1}if(j==-1){j=0}if(j!=g&&j<t){j=t}if(j>p){j=p}if(j==n){j=l}}}i.data("prevIndex",j);if(!m.options.liveSearch){h.eq(j).focus()}else{x.preventDefault();if(!i.hasClass("dropdown-toggle")){h.removeClass("active").eq(j).addClass("active").children("a").focus();i.focus()}}}else{if(!i.is("input")){var o=[],k,y;h.each(function(){if(!d(this).parent().hasClass("disabled")){if(d.trim(d(this).text().toLowerCase()).substring(0,1)==q[x.keyCode]){o.push(d(this).parent().index())}}});k=d(document).data("keycount");k++;d(document).data("keycount",k);y=d.trim(d(":focus").text().toLowerCase()).substring(0,1);if(y!=q[x.keyCode]){k=1;d(document).data("keycount",k)}else{if(k>=o.length){d(document).data("keycount",0);if(k>o.length){k=1}}}h.eq(o[k-1]).focus()}}if((/(13|32)/.test(x.keyCode.toString(10))||(/(^9$)/.test(x.keyCode.toString(10))&&m.options.selectOnTab))&&v){if(!/(32)/.test(x.keyCode.toString(10))){x.preventDefault()}if(!m.options.liveSearch){var w=d(":focus");w.click();w.focus();x.preventDefault();d(document).data("spaceSelect",true)}else{if(!/(32)/.test(x.keyCode.toString(10))){m.$menu.find(".active a").click();i.focus()}}d(document).data("keycount",0)}if((/(^9$|27)/.test(x.keyCode.toString(10))&&v&&(m.multiple||m.options.liveSearch))||(/(27)/.test(x.keyCode.toString(10))&&!v)){m.$menu.parent().removeClass("open");if(m.options.container){m.$newElement.removeClass("open")}m.$button.focus()}},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement);if(this.options.container){this.$menu.hide()}},refresh:function(){this.$lis=null;this.reloadLi();this.render();this.checkDisabled();this.liHeight(true);this.setStyle();this.setWidth();if(this.$lis){this.$searchbox.trigger("propertychange")}this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove();this.$element.remove()}};function c(j,k){var h=arguments;var m=j,g=k;[].shift.apply(h);var l;var i=this.each(function(){var r=d(this);if(r.is("select")){var q=r.data("selectpicker"),o=typeof m=="object"&&m;if(!q){var n=d.extend({},b.DEFAULTS,d.fn.selectpicker.defaults||{},r.data(),o);r.data("selectpicker",(q=new b(this,n,g)))}else{if(o){for(var p in o){if(o.hasOwnProperty(p)){q.options[p]=o[p]}}}}if(typeof m=="string"){if(q[m] instanceof Function){l=q[m].apply(q,h)}else{l=q.options[m]}}}});if(typeof l!=="undefined"){return l}else{return i}}var a=d.fn.selectpicker;d.fn.selectpicker=c;d.fn.selectpicker.Constructor=b;d.fn.selectpicker.noConflict=function(){d.fn.selectpicker=a;return this};d(document).data("keycount",0).on("keydown",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',b.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',function(g){g.stopPropagation()});d(window).on("load.bs.select.data-api",function(){d(".selectpicker").each(function(){var g=d(this);c.call(g,g.data())})})})(jQuery)}));
