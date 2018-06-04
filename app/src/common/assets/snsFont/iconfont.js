(function(window){var svgSprite='<svg><symbol id="el-icon-github" viewBox="0 0 1025 1024"><path d="M0 525.195313c0 223.59375 143.300781 413.691406 343.007813 483.496094 26.894531 6.796875 22.792969-12.402344 22.792969-25.390625l0-88.691406c-155.292969 18.203125-161.503906-84.609375-171.992188-101.699219-21.09375-35.996094-70.800781-45.195313-55.996094-62.304688 35.390625-18.203125 71.40625 4.609375 113.105469 66.308594 30.195313 44.707031 89.101563 37.207031 119.003906 29.707031 6.503906-26.894531 20.507813-50.898438 39.707031-69.609375-160.800781-28.808594-227.910156-126.992188-227.910156-243.808594 0-56.601563 18.691406-108.691406 55.292969-150.703125-23.300781-69.296875 2.207031-128.496094 5.605469-137.304688 66.503906-5.996094 135.507813 47.597656 140.898438 51.796875 37.792969-10.195313 80.898438-15.605469 129.101563-15.605469 48.496094 0 91.796875 5.605469 129.804688 15.898438 12.890625-9.804688 76.992188-55.800781 138.808594-50.195313 3.300781 8.808594 28.203125 66.699219 6.308594 135 37.109375 42.109375 55.996094 94.609375 55.996094 151.40625 0 116.992188-67.5 215.292969-228.808594 243.691406 26.894531 26.601562 43.59375 63.398438 43.59375 104.199219l0 128.808594c0.898437 10.292969 0 20.507813 17.207031 20.507813 202.597656-68.300781 348.496094-259.804688 348.496094-485.410156 0-282.910156-229.296875-511.992188-511.992188-511.992188C229.101563 13.203125 0 242.304687 0 525.195313L0 525.195313z"  ></path></symbol><symbol id="el-icon-qq" viewBox="0 0 1024 1024"><path d="M116.435 593.714c-33.54 78.964-38.985 154.297-12.059 168.37 18.572 9.696 47.686-12.382 74.936-52.909 10.791 44.157 37.493 84.137 75.633 116.21-40.004 14.768-66.135 38.886-66.135 66.232 0 44.954 70.709 81.302 157.978 81.302 78.716 0 143.907-29.538 155.94-68.371 3.232-0.049 15.663-0.049 18.796 0 12.083 38.784 77.324 68.371 155.989 68.371 87.267 0 157.978-36.398 157.978-81.302 0-27.297-26.105-51.464-66.135-66.232 38.089-32.123 64.889-72.053 75.631-116.21 27.251 40.527 56.29 62.605 74.887 52.909 26.95-14.073 21.631-89.456-12.032-168.37-26.355-62.058-62.11-107.754-89.457-117.848 0.398-3.929 0.596-7.958 0.596-11.935 0-23.968-6.661-46.146-18.049-64.196 0.199-1.393 0.199-2.834 0.199-4.227 0-11.038-2.636-21.381-7.114-30.332-6.909-161.309-111.93-289.402-281.866-289.402-170.036 0-275.106 128.093-281.943 289.402-4.525 9.001-7.135 19.343-7.135 30.332 0 1.393 0.099 2.835 0.15 4.227-11.288 18.05-17.951 40.178-17.951 64.196 0 3.978 0.15 7.955 0.498 11.935-27.151 10.094-63.028 55.841-89.333 117.848z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)