(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{53:function(e,t,a){e.exports=a(92)},59:function(e,t,a){},60:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),s=a.n(l),r=(a(59),a(44)),c=a(45),o=a(51),m=a(46),d=a(52),u=(a(60),a(96)),h=a(95),p=function(e){return i.a.createElement(u.a,{bg:"dark",variant:"dark",sticky:"top"},i.a.createElement(h.a,{className:"mr-auto"},i.a.createElement(h.a.Link,{className:"link",href:"#us"},i.a.createElement("i",{className:"fas fa-flag-usa"}),"\xa0US"),i.a.createElement(h.a.Link,{className:"link",href:"#business"},i.a.createElement("i",{className:"fas fa-briefcase"}),"\xa0Business"),i.a.createElement(h.a.Link,{className:"link",href:"#technology"},i.a.createElement("i",{className:"fas fa-laptop-code"}),"\xa0Technology"),i.a.createElement(h.a.Link,{className:"link",href:"#sports"},i.a.createElement("i",{className:"fas fa-basketball-ball"}),"\xa0Sports"),i.a.createElement(h.a.Link,{className:"link",href:"#entertainment"},i.a.createElement("i",{className:"fas fa-theater-masks"}),"\xa0Entertainment"),i.a.createElement(h.a.Link,{className:"link",href:"#health"},i.a.createElement("i",{className:"fas fa-heartbeat"}),"\xa0Health"),i.a.createElement(h.a.Link,{className:"linkEnd",href:"#science"},i.a.createElement("i",{className:"fas fa-microscope"}),"\xa0Science"),"\xa0"))},f=a(24),E=a.n(f),g=a(94),v=function(e){return i.a.createElement("div",{className:"carousel-wrapper"},i.a.createElement("div",{className:"carousel","data-flickity":!0},i.a.createElement("div",{className:"carousel-cell"},i.a.createElement("p",null,e.titleB),i.a.createElement("img",{className:"scrollImg",src:e.image,alt:"News-Story-SideScroll"}),i.a.createElement("div",{className:"stampContent"},i.a.createElement(E.a,{className:"timeStampS",datetime:e.time}),i.a.createElement("button",{className:"btnScroll",onClick:e.click},"Read Snippet"),i.a.createElement(g.a,{show:e.A,onHide:e.B,dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title"},i.a.createElement(g.a.Header,{closeButton:!0},i.a.createElement(g.a.Title,{id:"example-custom-modal-styling-title",className:"snipHeader"},e.header)),i.a.createElement(g.a.Body,{className:"snippet"},e.snippet,i.a.createElement("hr",null),i.a.createElement("a",{className:"url",href:e.link,target:"_blank",rel:"noopener noreferrer"},"View Full Story")))))))},N=function(e){return i.a.createElement("div",{className:e.className},i.a.createElement("article",{className:e.className},i.a.createElement("div",{className:"title"},i.a.createElement("span",{onClick:e.click},e.titleA)),i.a.createElement("div",{className:"content-overlay"}),i.a.createElement("img",{className:"content-image gridImg",src:e.storyA,onClick:e.click,alt:"News-Story-Left"}),i.a.createElement(E.a,{className:"timeStamp timeStampR",datetime:e.time}),i.a.createElement("div",null,i.a.createElement("div",{className:"content-details fadeIn-bottom fadeIn-right"},i.a.createElement("button",{className:"btn btn-primary",onClick:e.click},"Read Snippet"),i.a.createElement(g.a,{show:e.A,onHide:e.B,dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title"},i.a.createElement(g.a.Header,{closeButton:!0},i.a.createElement(g.a.Title,{id:"example-custom-modal-styling-title",className:"snipHeader"},e.header)),i.a.createElement(g.a.Body,{className:"snippet"},e.snippet,i.a.createElement("hr",null),i.a.createElement("a",{className:"url",href:e.link,target:"_blank",rel:"noopener noreferrer"},"View Full Story")))))))},k=function(){return i.a.createElement("div",{className:"footer"},"2019 Douglas Coke News App \xa0",i.a.createElement("i",null,"Built in React"),"\xa0",i.a.createElement("i",{className:"fab fa-spin fa-2x fa-react"}))};var y=function(){return i.a.createElement("div",null,i.a.createElement(p,null),i.a.createElement("div",{className:"App"},i.a.createElement(w,null),i.a.createElement(k,null)))},w=function(e){function t(e,a){var n;return Object(r.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e,a))).state={isLoaded:!1,topHeadlines:[],business:[],technology:[],sports:[],entertainment:[],health:[],science:[],show:!1,activeModal:null},n.handleShow=function(e,t){n.setState({show:!0,activeModal:t})},n.handleHide=function(){n.setState({show:!1,activeModal:null})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="5541ada8d67e408daa5de792ba9f50f4";fetch("https://newsapi.org/v2/top-headlines?country=us&pageSize=40&apiKey="+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,topHeadlines:t.articles})}),fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&pageSize=20&apiKey="+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,business:t.articles})}),fetch("https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=20&apiKey="+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,technology:t.articles})}),fetch("https://newsapi.org/v2/top-headlines?country=us&category=sports&pageSize=20&apiKey="+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,sports:t.articles})}),fetch("https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=20&apiKey="+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,entertainment:t.articles})}),fetch("https://newsapi.org/v2/top-headlines?country=us&category=health&pageSize=20&apiKey="+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,health:t.articles})}),fetch("https://newsapi.org/v2/top-headlines?country=us&category=science&pageSize=20&apiKey="+t).then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,science:t.articles})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,l=t.topHeadlines,s=t.business,r=t.technology,c=t.sports,o=t.entertainment,m=t.health,d=t.science;return a?i.a.createElement("div",null,"Error: ",a.message):n?i.a.createElement("div",null,i.a.createElement("h1",{id:"us",className:"subHeader"},"Top US Headlines"),i.a.createElement("div",{className:"grid-container"},l.slice(0,13).map(function(t,a){return i.a.createElement(N,{key:a,className:a,titleA:t.title,storyA:t.urlToImage,time:t.publishedAt,click:function(t){return e.handleShow(t,a)},A:e.state.activeModal===a,B:e.handleHide,header:t.description,snippet:t.content,link:t.url})})),i.a.createElement("h1",{id:"business",className:"subHeaderS"},"Top Business Headlines"),i.a.createElement("div",{className:"slider-container"},s.map(function(t,a){return i.a.createElement(v,{key:a+"item2",titleB:t.title,image:t.urlToImage,time:t.publishedAt,click:function(t){return e.handleShow(t,a+"item2")},A:e.state.activeModal===a+"item2",B:e.handleHide,header:t.description,snippet:t.content,link:t.url})})),i.a.createElement("h1",{className:"subHeader"}),i.a.createElement("div",{className:"grid-container-reverse"},l.slice(14,27).map(function(t,a){return i.a.createElement(N,{key:a+"item3",className:a,titleA:t.title,storyA:t.urlToImage,time:t.publishedAt,click:function(t){return e.handleShow(t,a+"item3")},A:e.state.activeModal===a+"item3",B:e.handleHide,header:t.description,snippet:t.content,link:t.url})})),i.a.createElement("h1",{id:"technology",className:"subHeaderS"},"Top Technology Headlines"),i.a.createElement("div",{className:"slider-container"},r.map(function(t,a){return i.a.createElement(v,{key:a+"item4",titleB:t.title,image:t.urlToImage,time:t.publishedAt,click:function(t){return e.handleShow(t,a+"item4")},A:e.state.activeModal===a+"item4",B:e.handleHide,header:t.description,snippet:t.content,link:t.url})})),i.a.createElement("h1",{className:"subHeader"}),i.a.createElement("div",{className:"grid-container"},l.slice(28,38).map(function(t,a){return i.a.createElement(N,{key:a+"item5",className:a,titleA:t.title,storyA:t.urlToImage,time:t.publishedAt,click:function(t){return e.handleShow(t,a+"item5")},A:e.state.activeModal===a+"item5",B:e.handleHide,header:t.description,snippet:t.content,link:t.url})})),i.a.createElement("h1",{id:"sports",className:"subHeaderS"},"Top Sports Headlines"),i.a.createElement("div",{className:"slider-container slider-containerS"},c.map(function(t,a){return i.a.createElement(v,{key:a+"item6",titleB:t.title,image:t.urlToImage,time:t.publishedAt,click:function(t){return e.handleShow(t,a+"item6")},A:e.state.activeModal===a+"item6",B:e.handleHide,header:t.description,snippet:t.content,link:t.url})})),i.a.createElement("h1",{id:"entertainment",className:"subHeader"},"Top Entertainment Headlines"),i.a.createElement("div",{className:"grid-container-reverse"},o.slice(0,13).map(function(t,a){return i.a.createElement(N,{key:a+"item7",className:a,titleA:t.title,storyA:t.urlToImage,time:t.publishedAt,click:function(t){return e.handleShow(t,a+"item7")},A:e.state.activeModal===a+"item7",B:e.handleHide,header:t.description,snippet:t.content,link:t.url})})),i.a.createElement("h1",{id:"health",className:"subHeaderS"},"Top Health Headlines"),i.a.createElement("div",{className:"slider-container slider-containerS"},m.map(function(t,a){return i.a.createElement(v,{key:a+"item8",titleB:t.title,image:t.urlToImage,time:t.publishedAt,click:function(t){return e.handleShow(t,a+"item8")},A:e.state.activeModal===a+"item8",B:e.handleHide,header:t.description,snippet:t.content,link:t.url})})),i.a.createElement("h1",{id:"science",className:"subHeader"},"Top Science Headlines"),i.a.createElement("div",{className:"grid-container"},d.slice(0,13).map(function(t,a){return i.a.createElement(N,{key:a+"item9",className:a,titleA:t.title,storyA:t.urlToImage,time:t.publishedAt,click:function(t){return e.handleShow(t,a+"item9")},A:e.state.activeModal===a+"item9",B:e.handleHide,header:t.description,snippet:t.content,link:t.url})}))):i.a.createElement("div",{className:"loading"},"Loading...")}}]),t}(i.a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(i.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/News-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/News-App","/service-worker.js");b?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):S(t,e)})}}()}},[[53,1,2]]]);
//# sourceMappingURL=main.2b90ee66.chunk.js.map