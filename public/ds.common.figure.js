(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[1],{45:function(e,t,r){"use strict";var n,o=r(0),i=r(1),c=r.n(i);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=function(e){var t=e.style,r=e.src,n=e.alt,i=e.objectFit,c=e.objectPosition,s=u(e,["style","src","alt","objectFit","objectPosition"]);return o.createElement("img",a({src:r,alt:n,style:l(l({},t),{},{objectFit:i,objectPosition:c})},s))};f.propTypes=(b(n={style:c.a.object,src:c.a.string.isRequired,alt:c.a.string.isRequired},"style",c.a.object),b(n,"objectFit",c.a.oneOf(["fill","contain","cover","none","scale-down"])),b(n,"objectPosition",c.a.string),n),f.defaultProps={objectFit:"cover",objectPosition:"center center"};var j=f;r(13).a||r.e(1).then(r.t.bind(null,51,7));var p="figure",y=function(e){var t=e.id,r=e.className,n=e.style,i=e.children,c=e.src,a=e.alt,s=e.imgStyle,l=e.objectFit,b=e.objectPosition;return o.createElement("figure",{className:[p,r].filter((function(e){return e})).join(" "),id:t,style:n},o.createElement(j,{src:c,alt:a,objectFit:l,objectPosition:b,style:s}),i&&o.createElement("figcaption",null,i))};y.propTypes={id:c.a.string,className:c.a.string,style:c.a.object,children:c.a.node,src:c.a.string.isRequired,alt:c.a.string.isRequired,imgStyle:c.a.object,objectFit:c.a.oneOf(["fill","contain","cover","none","scale-down"]),objectPosition:c.a.string},y.defaultProps={objectFit:"cover"};t.a=y},51:function(e,t,r){}}]);