(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(1),r=c.n(a),i=c(0);function s(e){var t=e.font,c=e.children;return Object(i.jsxs)("span",{className:t,children:[c,Object(i.jsx)("sup",{children:"\u2103"})]})}function l(){return Object(i.jsx)("div",{className:"border-solid border-l mx-4"})}function o(e){var t=e.children;return Object(i.jsx)("h1",{className:"uppercase text-3xl",children:t})}function u(e){var t=e.title,c=e.children,n=e.unit;return Object(i.jsxs)("div",{className:"flex flex-col items-center",children:[Object(i.jsx)("span",{className:"uppercase",children:t}),Object(i.jsxs)("span",{children:[c,Object(i.jsx)("sup",{className:"uppercase",children:n})]})]})}function j(e){var t=e.children;return Object(i.jsx)("span",{className:"uppercase flex flex-col items-center mt-2 mb-5 lg:mb-10 text-xl",children:t})}function d(e){var t=e.realtime;return Object(i.jsx)("h3",{className:"text-xl pt-1",children:t})}function b(e){var t=e.current,c=e.city,r=e.timezone,b=Object(a.useState)(),m=Object(n.a)(b,2),x=m[0],h=m[1],f=Object(a.useState)(),p=Object(n.a)(f,2),O=p[0],g=p[1],v=Object(a.useState)(),w=Object(n.a)(v,2),y=w[0],N=w[1],S=Object(a.useState)(),k=Object(n.a)(S,2),D=k[0],_=k[1],z=Object(a.useState)(),E=Object(n.a)(z,2),I=E[0],T=E[1];return Object(a.useEffect)((function(){var e=setInterval((function(){return T((new Date).toLocaleString("en-AU",{hour12:!1,timeZone:r}),1e3)}));return function(){return clearInterval(e)}}),[r]),Object(a.useEffect)((function(){var e=t[0],c=e.temp,n=e.weather_type,a=e.humidity,r=e.wind_speed;h(c),g(n),N(a),_(r)}),[t]),Object(i.jsxs)("section",{className:"w-full px-11 py-9 flex flex-col items-center lg:flex-row-reverse lg:items-start justify-between bg-black bg-opacity-50 text-white font-medium",children:[Object(i.jsxs)("div",{className:"flex flex-col items-center lg:items-end",children:[Object(i.jsx)(o,{children:c}),Object(i.jsx)(d,{realtime:I})]}),Object(i.jsxs)("div",{className:"flex flex-col items-center mt-5 lg:mt-0",children:[Object(i.jsxs)(s,{font:"text-6xl font-medium",children:[" ",x," "]}),Object(i.jsx)(j,{children:O}),Object(i.jsxs)("div",{className:"flex",children:[Object(i.jsx)(u,{title:"humidity",unit:"%",children:y}),Object(i.jsx)(l,{}),Object(i.jsx)(u,{title:"wind",unit:"km/h",children:D})]})]})]})}function m(e){var t=e.children;return Object(i.jsx)("h4",{className:"uppercase font-medium lg:font-medium",children:t})}function x(e){var t=e.children,c=e.icon;return Object(i.jsxs)("div",{className:"uppercase flex flex-col items-center",children:[Object(i.jsx)("img",{src:c,alt:t,className:"w-10 lg:w-20"}),t]})}function h(e){var t=e.forecast.slice(1,6).map((function(e){var t=e.dt,c=e.temp,n=e.weather_type,a=e.weather_icon,r=c.toFixed(0),i=n,s=a,l=new Date(t).getDay();return{dayString:["SUN","MON","TUE","WED","THU","FRI","SAT"].slice(l,l+1).toString(),temperature:r,weatherType:i,icon:s}}));return Object(i.jsx)("section",{className:"w-full flex px-6 lg:px-11 py-9 bg-white",children:Object(i.jsx)("ul",{className:"flex w-full justify-between",children:t.map((function(e,t){var c=e.dayString,n=e.temperature,a=e.weatherType,r=e.icon;return Object(i.jsxs)("li",{className:"flex flex-col items-center text-xs lg:text-base",children:[Object(i.jsx)(m,{children:c}),Object(i.jsx)(s,{font:"mt-1 lg:font-medium",children:n}),Object(i.jsxs)(x,{icon:r,children:[" ",a," "]})]},t)}))})})}function f(e){var t=e.children;return Object(i.jsx)("button",{className:"font-light capitalize",type:"submit",value:t,children:t})}function p(e){var t=e.updateCity;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("header",{className:"flex w-full justify-between px-11 py-9 bg-white",children:[Object(i.jsx)("div",{className:"font-medium",children:"My Cities"}),Object(i.jsxs)("form",{className:"hidden lg:flex flex-row ",onClick:t,children:[Object(i.jsx)(f,{children:"brisbane"}),Object(i.jsx)(l,{}),Object(i.jsx)(f,{children:"hobart"}),Object(i.jsx)(l,{}),Object(i.jsx)(f,{children:"beijing"}),Object(i.jsx)(l,{}),Object(i.jsx)(f,{children:"london"})]}),Object(i.jsx)("div",{className:"lg:hidden",children:Object(i.jsxs)("select",{onChange:t,className:"font-light",children:[Object(i.jsx)("option",{value:"brisbane",children:"Brisbane"}),Object(i.jsx)("option",{value:"hobart",children:"Hobart"}),Object(i.jsx)("option",{value:"beijing",children:"beijing"}),Object(i.jsx)("option",{value:"london",children:"London"})]})})]})})}var O=c(7),g=c.n(O),v=c(16),w=c(17),y=c.n(w),N=c.p+"static/media/beijing.4579f083.jpeg",S=c.p+"static/media/brisbane.b7833125.jpeg",k=c.p+"static/media/hobart.d87313d5.jpeg",D=c.p+"static/media/london.735fb935.jpeg",_={brisbane:{latitude:-27.4679,longitude:153.0281,background:S},hobart:{latitude:-42.8794,longitude:147.3294,background:k},beijing:{latitude:39.9075,longitude:116.3972,background:N},london:{latitude:51.5085,longitude:-.1257,background:D}},z=function(){var e=Object(v.a)(g.a.mark((function e(t){var c,n,a,r,i,s,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.location,a=(n=_[c]).latitude,r=n.longitude,i="",s=[],l=[],e.next=7,y()({url:"https://api.openweathermap.org/data/2.5/onecall",params:{appid:"ed9e830cd51367c6b723e424ffae8a7d",lat:a,lon:r,exclude:"minutely,hourly,alerts",units:"metric"}}).then((function(e){var t=e.data,c=t.timezone,n=t.current,a=t.daily;i+=c;var r=n.temp,o=n.weather,u=n.humidity,j=n.wind_speed,d={temp:r.toFixed(0),weather_type:o[0].main,humidity:u,wind_speed:10*j.toFixed(1)};s.push(d),a.forEach((function(e){var t=e.dt,c=e.temp,n=e.weather,a={dt:1e3*t,temp:c.day,weather_type:n[0].main,weather_icon:"http://openweathermap.org/img/wn/".concat(n[0].icon,"@2x.png")};l.push(a)}))}));case 7:return e.abrupt("return",{backgoundImage:_[c].background,myTimezone:i,currentData:s,forecastData:l});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=z;var I=function(){var e=Object(a.useState)("brisbane"),t=Object(n.a)(e,2),c=t[0],r=t[1],s=Object(a.useState)(),l=Object(n.a)(s,2),o=l[0],u=l[1],j=Object(a.useState)(),d=Object(n.a)(j,2),m=d[0],x=d[1],f=Object(a.useState)(),O=Object(n.a)(f,2),g=O[0],v=O[1],w=Object(a.useState)(),y=Object(n.a)(w,2),N=y[0],S=y[1];return Object(a.useEffect)((function(){E({location:c}).then((function(e){u(e.backgoundImage),x(e.myTimezone),v(e.currentData),S(e.forecastData)}))}),[c]),console.log(o),Object(i.jsx)("div",{className:"flex flex-col justify-center items-center min-h-screen w-screen bg-center bg-cover",style:{backgroundImage:"url(".concat(o,")")},children:Object(i.jsxs)("div",{className:"relative z-10 flex flex-col justify-between items-center overflow-hidden w-portrait lg:w-landscape sm:rounded-3xl shadow-2xl",children:[Object(i.jsx)(p,{updateCity:function(e){e.preventDefault(),r(e.target.value)}}),g&&Object(i.jsx)(b,{current:g,city:c,timezone:m}),N&&Object(i.jsx)(h,{forecast:N})]})})},T=c(18),C=c.n(T);c(43);C.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(I,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.8a07c3db.chunk.js.map