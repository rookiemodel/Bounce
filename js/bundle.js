/**
 * Bounce - A ball bounces on the line
 *
 * author: Jinyong Joo
 * version: 0.2
 */

webpackJsonp([1],[function(t,e,i){i(13),i(12),i(14),i(15),i(16),i(17),i(11),i(10),i(7),i(9),i(8),t.exports=i(6)},,function(t,e,i){e=t.exports=i(3)(),e.push([t.id,"@import url(http://fonts.googleapis.com/css?family=Roboto:300);",""]),e.push([t.id,"*{margin:0;padding:0;outline:0;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}::selection{background:transparent}ol,ul{list-style:none}body{min-width:320px;overflow:hidden;font-family:Roboto,sans-serif;font-weight:300;background:#03a9f4;-webkit-font-smoothing:antialiased}#block,body{position:fixed;width:100%;height:100%}#block{left:0;top:0;z-index:999;-webkit-transform:translateZ(0)}#wrap{position:relative;width:100%;height:100%;overflow:hidden;background:#03a9f4;visibility:hidden}#loading{position:absolute;left:50%;top:50%;margin:-50px 0 0 -50px;overflow:hidden;z-index:80}#loading,svg{width:100px;height:100px}svg{position:relative;animation:animation-rotate 2s linear infinite;-ms-animation:animation-rotate 2s linear infinite}svg circle{stroke:#fff;stroke-dasharray:1,400;stroke-dashoffset:0;stroke-linecap:round;animation:animation-dash 1.5s ease-in-out infinite;-ms-animation:animation-dash 1.5s ease-in-out infinite}@keyframes animation-rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes animation-dash{0%{stroke-dasharray:1,400;stroke-dashoffset:0}50%{stroke-dasharray:225.6,400;stroke-dashoffset:-84}to{stroke-dasharray:225.6,400;stroke-dashoffset:-299}}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(t,e,i){function n(t,e){for(var i=0;i<t.length;i++){var n=t[i],o=f[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(l(n.parts[r],e))}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(l(n.parts[r],e));f[n.id]={id:n.id,refs:1,parts:s}}}}function o(t){for(var e=[],i={},n=0;n<t.length;n++){var o=t[n],r=o[0],s=o[1],a=o[2],h=o[3],l={css:s,media:a,sourceMap:h};i[r]?i[r].parts.push(l):e.push(i[r]={id:r,parts:[l]})}return e}function r(t,e){var i=m(),n=w[w.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function h(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function l(t,e){var i,n,o;if(e.singleton){var r=y++;i=g||(g=a(e)),n=c.bind(null,i,r,!1),o=c.bind(null,i,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=h(e),n=d.bind(null,i),o=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=a(e),n=u.bind(null,i),o=function(){s(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function c(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function u(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function d(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([i],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}var f={},p=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},v=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=p(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,y=0,w=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=v()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=o(t);return n(i,e),function(t){for(var r=[],s=0;s<i.length;s++){var a=i[s],h=f[a.id];h.refs--,r.push(h)}if(t){var l=o(t);n(l,e)}for(var s=0;s<r.length;s++){var h=r[s];if(0===h.refs){for(var c=0;c<h.parts.length;c++)h.parts[c]();delete f[h.id]}}}};var x=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e,i){var n=i(2);"string"==typeof n&&(n=[[t.id,n,""]]);i(4)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){var n=n||function(t){function e(){o=document.getElementById("block"),r=document.getElementById("wrap"),DetectUtil.isTouch&&(document.addEventListener("touchmove",function(t){t.preventDefault()}),new FastClick(r)),ResizeUtil.init(r),Loading.init(r),Motion.init(r),Bounced.init(r),Loading.show()}function i(t){switch(n(!1),t){case"motion":Motion.show();break;case"bounce":Bounced.show()}}function n(t){o.style.display=t?"none":"block"}var o,r;return t.BACKGROUND_COLOR="#03a9f4",t.BALL_COLOR="#ff0000",t.LINE_COLOR="#fff",t.init=e,t.chnage=i,t.able=n,t}({});i(5),window.Application=n,window.onload=n.init},function(t,e){var i=function(t,e,i,n){this.x=t,this.y=e,this.vx=0,this.vy=0,this.radius=i||40,this.color=n||"#ff0000",this.draw=function(t){t.fillStyle=this.color,t.beginPath(),t.arc(this.x,this.y,this.radius,0,2*Math.PI,!0),t.closePath(),t.fill()},this.getBounds=function(){return{x:this.x-this.radius,y:this.y-this.radius,width:2*this.radius,height:2*this.radius}}};window.Ball=i},function(t,e){var i=i||function(t){function e(t){var e=Math.min(ResizeUtil.width,ResizeUtil.height);x=DetectUtil.isTouch?.32*e*.5:80,b=DetectUtil.isTouch?.1:.15,U=DetectUtil.isTouch?"touch":"mouse",L=DetectUtil.isTouch?"touchstart":"mousedown",R=DetectUtil.isTouch?"touchmove":"mousemove",C=DetectUtil.isTouch?"touchend":"mouseup",wrap=t,v=document.createElement("div"),m=document.createElement("canvas"),m.width=ResizeUtil.width,m.height=ResizeUtil.height,g=m.getContext("2d"),y=document.createElement("canvas"),CSSUtil.css(y,{position:"absolute",left:"0",top:"0",width:"100%",height:"100%",pointerEvents:"none",opacity:"0",zIndex:"100"}),y.width=ResizeUtil.width,y.height=ResizeUtil.height,w=y.getContext("2d"),ResizeUtil.add("bounce",p)}function i(){O=new Line(0,0,0,0,ResizeUtil.height/2,Application.LINE_COLOR),k=new Ball(ResizeUtil.width*Math.random(),ResizeUtil.height/2-ResizeUtil.height/2,x,Application.BALL_COLOR),z=PointUtil[U](m),m.addEventListener(L,a,!1),wrap.appendChild(v),v.appendChild(m),u(),TweenLite.delayedCall(.65,n)}function n(){D&&(j=!1,v.appendChild(y),o(k.getBounds().x+k.radius,k.getBounds().y+k.radius,k.radius),TweenLite.to(y,.6,{delay:0,css:{opacity:1},ease:Cubic.easeOut}),TweenLite.delayedCall(3,r))}function o(t,e,i){w.clearRect(0,0,y.width,y.height),w.save(),w.beginPath(),w.fillStyle="rgba(0,0,0,0.8)",w.fillRect(y.width,0,-y.width,y.height),w.globalCompositeOperation="xor",w.arc(t,e,i,0,2*Math.PI,!1),w.fill(),w.restore(),w.save(),w.textAlign="center",w.font="bold 12px Arial",w.fillStyle="#fff",w.fillText("MOVE",t,e+i+25),w.restore()}function r(){TweenLite.to(y,.3,{css:{opacity:0},ease:Cubic.easeOut,onComplete:s})}function s(){D=!1,j=!0,DisplayObjectUtil.removeDom(y),Application.able(!0),u()}function a(t){if(DetectUtil.isTouch){var e=t.touches[0];(e.pageX||e.pageY)&&(z.x=e.pageX,z.y=e.pageY)}DisplayObjectUtil.hitTestObject(k.getBounds(),z)&&(c(m,"move"),Y=!0,S=k.x,B=k.y,M=k.vx,A=k.vy,m.addEventListener(C,l,!1),m.addEventListener(R,h,!1))}function h(){k.x=z.x,k.y=z.y,N=!(k.y<m.height-ResizeUtil.height/2-k.radius),E=N?k.x:m.width/2,T=N?k.y+k.radius:m.height-ResizeUtil.height/2}function l(){Y=!1,c(m,"initial"),m.removeEventListener(C,l,!1),m.removeEventListener(R,h,!1)}function c(t,e){CSSUtil.css(t,{cursor:e})}function u(){j&&(requestAnimationFrame(u),g.fillStyle=Application.BACKGROUND_COLOR,g.fillRect(0,0,m.width,m.height),Y?f():(d(),E=N?k.x:m.width/2,T=N?k.y+k.radius:m.height-ResizeUtil.height/2),O.draw(m,g,E,T),k.draw(g))}function d(){N=!1,k.vy+=b,k.x+=k.vx,k.y+=k.vy,k.y+k.radius>=m.height-ResizeUtil.height/2?(k.vy-=X,k.vx+=k.vy<x?(k.x-m.width/2)/(10*m.width)*-1:k.vx,k.vx<0&&(k.vx+=I),k.vx>0&&(k.vx-=I),N=!0):k.y-k.radius<0&&(k.vy*=-P,k.y=k.radius),k.x-k.radius<0?(k.vx*=-P,k.x=k.radius):k.x+k.radius>m.width&&(k.vx*=-P,k.x=m.width-k.radius)}function f(){k.vx=k.x-S,k.vy=k.y-B,S=k.x,B=k.y}function p(){m.width=ResizeUtil.width,m.height=ResizeUtil.height,O&&O.resize(),D&&(y.width=ResizeUtil.width,y.height=ResizeUtil.height,o())}var v,m,g,y,w,x,b,U,L,R,C,z,O,k,E,T,M,A,S,B,D=!0,j=!0,N=!0,P=.7,I=.01,X=.45,Y=!1;return t.init=e,t.show=i,t.resize=p,t}({});window.Bounced=i},function(t,e){function i(t,e,i,n,o,r){this.x=this.y=0,this.x1=t||0,this.y1=e||0,this.x2=i||0,this.y2=n||0,this.center=o||ResizeUtil.height/2,this.color=r||"#fff",this.rotation=0,this.scaleX=this.scaleY=1,this.lineWidth=1,this.draw=function(t,e,i,n){e.strokeStyle=this.color,e.beginPath(),e.lineWidth=this.lineWidth,e.moveTo(0,t.height-this.center),e.quadraticCurveTo(0,t.height-this.center,i,n),e.quadraticCurveTo(i,n,t.width,t.height-this.center),e.stroke()},this.getBounds=function(){if(0===this.rotation){var t=Math.min(this.x1,this.x2),e=Math.min(this.y1,this.y2),i=Math.max(this.x1,this.x2),n=Math.max(this.y1,this.y2);return{x:this.x+t,y:this.y+e,width:i-t,height:n-e}}var o=Math.sin(this.rotation),r=Math.cos(this.rotation),s=r*this.x1+o*this.y1,a=r*this.x2+o*this.y2,h=r*this.y1+o*this.x1,l=r*this.y2+o*this.x2;return{x:this.x+Math.min(s,a),y:this.y+Math.min(h,l),width:Math.max(s,a)-Math.min(s,a),height:Math.max(h,l)-Math.min(h,l)}},this.resize=function(){this.center=ResizeUtil.height/2}}window.Line=i},function(t,e){var i=i||function(t){function e(t){s=t,a=document.getElementById("loading"),h=new SVGUtil({strokeWidth:2,color:"#fff",radius:50}),a.appendChild(h)}function n(){s.style.visibility="visible",TweenLite.delayedCall(2.6,o)}function o(){Application.chnage("motion"),r()}function r(){DisplayObjectUtil.removeDom(a),i=null}var s,a,h;return t.init=e,t.show=n,t.destroy=r,t}({});window.Loading=i},function(t,e){var i=i||function(t){function e(t,i){this.x=t,this.y=i,this.addition=function(t){return new e(this.x+t.x,this.y+t.y)},this.multiply=function(t){return new e(this.x*t,this.y*t)},this.draw=function(t){t.beginPath(),t.closePath(),t.fill()}}function n(t,i){function n(t){for(var e=1;t>0;)e*=t,t--;return e}function o(t,e){return n(t)/(n(e)*n(t-e))}var r=new e(0,0),s=t.length-1;for(var a in t){var h=o(s,a),l=h*Math.pow(i,a)*Math.pow(1-i,s-a);r=r.addition(t[a].multiply(l))}return r}function o(t){u=t,d=document.createElement("div"),u.appendChild(d),f=document.createElement("canvas"),p=f.getContext("2d"),d.appendChild(f),ResizeUtil.add("motion",l)}function r(){v=!0,m.push(new e(0,f.height/2)),m.push(new e(f.width/2,f.height/2+200)),m.push(new e(f.width,f.height/2)),h(),TweenLite.to(g,1.6,{value:100,ease:Elastic.easeOut,onUpdate:s,onUpdateParams:[g],onComplete:a})}function s(t){m[1].y=f.height/2+2*(100-t.value)}function a(){v=!1,Application.chnage("bounce"),c()}function h(){if(v){requestAnimationFrame(h),p.clearRect(0,0,f.width,f.height),p.fillStyle=Application.BACKGROUND_COLOR,p.beginPath();for(var t=0;t<=1;t+=.05/m.length){var e=n(m,t);p.lineTo(e.x,e.y)}p.lineTo(m[m.length-1].x,m[m.length-1].y),p.strokeStyle="#fff",p.stroke();for(var t in m)m[t].draw(p)}}function l(){f.width=ResizeUtil.width,f.height=ResizeUtil.height}function c(){v=!1,ResizeUtil.remove("motion"),DisplayObjectUtil.removeDom(d),i=null}var u,d,f,p,v=!0,m=[],g={value:-50};return t.init=o,t.show=r,t.resize=l,t.destroy=c,t}({});window.Motion=i},function(t,e){var i=i||function(t){function e(t,e){var i,n,o,r={columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},s=function(t){return t.toLowerCase().replace(/(\-[a-z])/g,function(t){return t.toUpperCase().replace("-","")})};for(i in e)e.hasOwnProperty(i)&&(n=DetectUtil.pfx(i),o=e[i],null!==n&&void 0!==o&&(origName=s(i),o="number"!=typeof o||r[origName]?o:o+"px",t.style[n]=o));return t}return t.css=e,t}({});window.CSSUtil=i},function(t,e){var i=new function(){this.isTouch=!!("ontouchstart"in window),this.pfx=function(){var t=document.createElement("dummy").style,e="Webkit Moz O ms Khtml".split(" "),i={};return function(n){if("undefined"==typeof i[n]){var o=n.charAt(0).toUpperCase()+n.substr(1),r=(n+" "+e.join(o+" ")+o).split(" ");i[n]=null;for(var s in r)if(void 0!==t[r[s]]){i[n]=r[s];break}}return i[n]}}()};window.DetectUtil=i},function(t,e){var i=i||function(t){function e(t,e){return!(e.x<t.x||e.x>t.x+t.width||e.y<t.y||e.y>t.y+t.height)}function i(t){var e=t.parentNode;e&&e.removeChild(t)}return t.hitTestObject=e,t.removeDom=i,t}({});window.DisplayObjectUtil=i},function(t,e){var i=i||function(t){function e(t){var e={x:0,y:0,event:null},i=document.body.scrollLeft,n=document.body.scrollTop,o=document.documentElement.scrollLeft,r=document.documentElement.scrollTop,s=t.offsetLeft,a=t.offsetTop;return t.addEventListener("mousemove",function(t){var h,l;t.pageX||t.pageY?(h=t.pageX,l=t.pageY):(h=t.clientX+i+o,l=t.clientY+n+r),h-=s,l-=a,e.x=h,e.y=l,e.event=t},!1),e}function i(t){function e(t){var e,l,c=t.touches[0];c.pageX||c.pageY?(e=c.pageX,l=c.pageY):(e=c.clientX+n+r,l=c.clientY+o+s),e-=a,l-=h,i.x=e,i.y=l,i.event=t}var i={x:null,y:null,isPressed:!1,event:null},n=document.body.scrollLeft,o=document.body.scrollTop,r=document.documentElement.scrollLeft,s=document.documentElement.scrollTop,a=t.offsetLeft,h=t.offsetTop;return t.addEventListener("touchstart",function(n){i.event=n,i.isPressed=!0,t.addEventListener("touchmove",e,!1)},!1),t.addEventListener("touchend",function(n){t.removeEventListener("touchmove",e,!1),i.event=n,i.isPressed=!1,i.x=i.y=null},!1),i}return t.mouse=e,t.touch=i,t}({});window.PointUtil=i},function(t,e){var i=i||function(t){function e(t){r=document.createElement("div"),CSSUtil.css(r,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%",pointerEvents:"none",visibility:"hidden",zIndex:"-1"}),document.body.appendChild(r),h=DetectUtil.isTouch?"orientationchange":"resize",window.addEventListener(h,o,!0),o()}function i(t,e){var i=s.indexOf(t);i>-1||(s.unshift(t),a.unshift(e),e())}function n(t){var e=s.indexOf(t);e>-1&&(s.splice(e,1),a.splice(e,1))}function o(){t.width=r.offsetWidth,t.height=r.offsetHeight;for(var e=a.length;e--;)a[e]()}var r,s=[],a=[],h="";return t.init=e,t.resizeHandler=o,t.add=i,t.remove=n,t}({});window.ResizeUtil=i},function(t,e){var i=function(t){this.option=t,this.create=function(t,e){var i=document.createElementNS("http://www.w3.org/2000/svg",t);i.className=t;for(var n in e)i.setAttribute(n,e[n]);return i};var e=this.option.strokeWidth||5,i=(this.option.color||"#3f88f8",this.option.radius||25),n=this.create("svg",{width:2*i,height:2*i}),o=this.create("circle",{cx:i,cy:i,r:i-e,fill:"none","stroke-width":e});return n.appendChild(o),n};window.SVGUtil=i}]);