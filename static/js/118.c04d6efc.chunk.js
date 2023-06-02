"use strict";(self.webpackChunkmovies_project=self.webpackChunkmovies_project||[]).push([[118],{5118:function(e,a,t){t.r(a),t.d(a,{default:function(){return R}});var n=t(9439),s=t(2791),r=t(1243),c=t(7689),i=t(7022),o=t(9743),l=t(2677),d=t(9140),u=t(1413),f=t(5987),m=t(1694),v=t.n(m),h=(t(2391),t(8580)),p=t(1561),x=t(162),Z=t(9007),j=t(4787),b=t(8633),g=t(184),N=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],y=s.forwardRef((function(e,a){var t=e.bsPrefix,s=e.active,r=e.disabled,c=e.eventKey,i=e.className,o=e.variant,l=e.action,d=e.as,m=(0,f.Z)(e,N);t=(0,x.vE)(t,"list-group-item");var h=(0,j.v)((0,u.Z)({key:(0,b.h)(c,m.href),active:s},m)),p=(0,n.Z)(h,2),y=p[0],w=p[1],k=(0,Z.Z)((function(e){if(r)return e.preventDefault(),void e.stopPropagation();y.onClick(e)}));r&&void 0===m.tabIndex&&(m.tabIndex=-1,m["aria-disabled"]=!0);var I=d||(l?m.href?"a":"button":"div");return(0,g.jsx)(I,(0,u.Z)((0,u.Z)((0,u.Z)({ref:a},m),y),{},{onClick:k,className:v()(i,t,w.isActive&&"active",r&&"disabled",o&&"".concat(t,"-").concat(o),l&&"".concat(t,"-action"))}))}));y.displayName="ListGroupItem";var w=y,k=["className","bsPrefix","variant","horizontal","numbered","as"],I=s.forwardRef((function(e,a){var t,n=(0,h.Ch)(e,{activeKey:"onSelect"}),s=n.className,r=n.bsPrefix,c=n.variant,i=n.horizontal,o=n.numbered,l=n.as,d=void 0===l?"div":l,m=(0,f.Z)(n,k),Z=(0,x.vE)(r,"list-group");return i&&(t=!0===i?"horizontal":"horizontal-".concat(i)),(0,g.jsx)(p.Z,(0,u.Z)((0,u.Z)({ref:a},m),{},{as:d,className:v()(s,Z,c&&"".concat(Z,"-").concat(c),t&&"".concat(Z,"-").concat(t),o&&"".concat(Z,"-numbered"))}))}));I.displayName="ListGroup";var P=Object.assign(I,{Item:w});function R(e){var a=(0,s.useState)({}),t=(0,n.Z)(a,2),u=t[0],f=t[1],m=(0,c.UO)().id;return(0,s.useEffect)((function(){r.Z.get("http://api.themoviedb.org/3/movie/".concat(m,"?api_key=9190e4c097577c6ffc706d8a743f8f99&language=en-US")).then((function(e){return f(e.data)})).then((function(e){return console.log(e)}))}),[m]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(i.Z,{className:"mt-5",children:(0,g.jsxs)(o.Z,{children:[(0,g.jsx)(l.Z,{md:"6",children:(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(u.poster_path),alt:""})}),(0,g.jsx)(l.Z,{md:"6",children:(0,g.jsxs)(d.Z,{className:"mt-5",children:[(0,g.jsxs)(d.Z.Body,{children:[(0,g.jsx)(d.Z.Title,{children:(0,g.jsx)("h2",{children:u.title})}),(0,g.jsx)(d.Z.Text,{children:u.overview})]}),(0,g.jsxs)(P,{className:"list-group-flush ",children:[(0,g.jsxs)(P.Item,{children:["Status: ",u.status]}),(0,g.jsxs)(P.Item,{children:["Running Time: ",Math.floor(u.runtime/60)," hours"," ",u.runtime%60," minutes"," "]}),(0,g.jsxs)(P.Item,{children:["Genre:"," ",Array.isArray(u.genres)&&u.genres.map((function(e){return(0,g.jsxs)("span",{className:"me-1",children:[e.name,","]})}))]}),(0,g.jsxs)(P.Item,{children:["Release Date: ",u.release_date]})]})]})})]})})})}},9743:function(e,a,t){var n=t(1413),s=t(5987),r=t(1694),c=t.n(r),i=t(2791),o=t(162),l=t(184),d=["bsPrefix","className","as"],u=i.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,u=void 0===i?"div":i,f=(0,s.Z)(e,d),m=(0,o.vE)(t,"row"),v=(0,o.pi)(),h=(0,o.zG)(),p="".concat(m,"-cols"),x=[];return v.forEach((function(e){var a,t=f[e];delete f[e],a=null!=t&&"object"===typeof t?t.cols:t;var n=e!==h?"-".concat(e):"";null!=a&&x.push("".concat(p).concat(n,"-").concat(a))})),(0,l.jsx)(u,(0,n.Z)((0,n.Z)({ref:a},f),{},{className:c().apply(void 0,[r,m].concat(x))}))}));u.displayName="Row",a.Z=u}}]);
//# sourceMappingURL=118.c04d6efc.chunk.js.map