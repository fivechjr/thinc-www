(window.webpackJsonp=window.webpackJsonp||[]).push([["21f0"],{"0csq":function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),l=a.n(n),r=a("O40h"),s=a("doui"),c=a("MX0m"),i=a.n(c),m=a("q1tI"),o=a.n(m),u=a("zgjP"),f=a.n(u),d=function(e){var t=e.avatarURL,a=e.profileURL,n=e.username;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{id:"1277773228"},["img.jsx-1277773228{width:30px;height:30px;}","#profile.jsx-1277773228{-webkit-transition:0.2s all cubic-bezier(0.165,0.84,0.44,1);transition:0.2s all cubic-bezier(0.165,0.84,0.44,1);}"]),o.a.createElement("a",{alt:n,title:n,href:a,target:"_blank",className:"jsx-1277773228 no-underline"},o.a.createElement("div",{id:"profile",className:"jsx-1277773228 inline-block bg-gray-100 text-gray-600 hover:bg-gray-200 px-4 py-3 m-2 rounded-lg"},o.a.createElement("div",{className:"jsx-1277773228 flex flex-row items-center"},o.a.createElement("img",{src:t,className:"jsx-1277773228 rounded-full mr-4"}),o.a.createElement("p",{className:"jsx-1277773228 text-sm"},o.a.createElement("span",{className:"jsx-1277773228 opacity-25"},"@ "),n)))))};t.default=function(){var e=Object(m.useState)([]),t=Object(s.default)(e,2),a=t[0],n=t[1];Object(m.useEffect)(function(){var e;(e=Object(r.default)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://api.github.com/orgs/thinc-org/public_members");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,n(t);case 6:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)})()},[]);return o.a.createElement("section",{className:"w-full bg-white py-20"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"mx-8"},o.a.createElement("div",{className:"w-full flex items-center flex-col"},o.a.createElement("div",{className:"w-full md:w-2/3 mb-20"},o.a.createElement("p",{className:"text-4xl text-center font-headline font-semibold leading-none text-black mb-10"},"Members"),o.a.createElement("p",{className:"text-base text-center font-normal leading-relaxed"},o.a.createElement("span",{className:"font-bold"},"Thinc.")," is community consisted of more than 100 members. All members displayed are public members from our GitHub organization.")),o.a.createElement("div",{className:"w-full flex justify-center"},o.a.createElement("div",{className:"inline-block text-center"},0===a.length?o.a.createElement("p",{className:"text-xs tracking-widest text-gray-600"},"CHOTTO MATTE KUDASAI ~ ","<3"):o.a.createElement(o.a.Fragment,null,a.map(function(e,t){return o.a.createElement(d,{username:e.login,avatarURL:e.avatar_url,profileURL:e.html_url})}))))))))}},zgjP:function(e,t,a){e.exports=window.fetch||(window.fetch=a("m/Gl").default||a("m/Gl"))}}]);