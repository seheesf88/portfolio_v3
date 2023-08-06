(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t(39)},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(19),c=t.n(s),i=(t(26),t(27),t(1)),r=t(3),m=t(4),o=t(6),d=t(5),p=(t(28),t(10)),u=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.call(this)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"navbar"},n.a.createElement("div",{className:"nav-list",id:"logo"},n.a.createElement(p.b,{style:{textDecoration:"none"},to:"/"},n.a.createElement("img",{style:{width:"180px",paddingTop:"18px"},src:"./logo.png"}))),n.a.createElement("div",{className:"nav-list item-list"},n.a.createElement("div",{className:"nav-item"},n.a.createElement(p.b,{className:"link",style:{textDecoration:"none"},to:"/projects"},"Projects.")),n.a.createElement("div",{className:"nav-item"},n.a.createElement(p.b,{className:"link",style:{textDecoration:"none"},to:"/skills"},"Skills.")),n.a.createElement("div",{className:"nav-item"},n.a.createElement(p.b,{className:"link",style:{textDecoration:"none"},to:"/contact"},"Contact."))))}}]),t}(l.Component),E=(t(34),t(12)),g=t.n(E),h=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.call(this)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){(new g.a.WOW).init()}},{key:"render",value:function(){var e=function(e,a,t){this.toRotate=a,this.el=e,this.loopNum=0,this.period=parseInt(t,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return e.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,a=this.toRotate[e];this.isDeleting?this.txt=a.substring(0,this.txt.length-1):this.txt=a.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var t=this,l=300-100*Math.random();this.isDeleting&&(l/=2),this.isDeleting||this.txt!==a?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,l=500):(l=this.period,this.isDeleting=!0),setTimeout(function(){t.tick()},l)},window.onload=function(){for(var a=document.getElementsByClassName("txt-rotate"),t=0;t<a.length;t++){var l=a[t].getAttribute("data-rotate"),n=a[t].getAttribute("data-period");l&&new e(a[t],JSON.parse(l),n)}var s=document.createElement("style");s.type="text/css",s.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(s)},n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"intro"},n.a.createElement("div",{className:"hi"},"Hi, "),n.a.createElement("div",{className:"title"},"I am",n.a.createElement("span",null," "),n.a.createElement("span",{className:"txt-rotate","data-period":"2000","data-rotate":'[ "SeHee.", "a Software Engineer.", "a React Developer.", "a Problem Solver.", "a Team Player." ]'}))),n.a.createElement("div",{className:"arrow"},n.a.createElement("span",null),n.a.createElement("span",null),n.a.createElement("span",null)),n.a.createElement("div",{className:"container-summary"},n.a.createElement("div",{className:"firstP"},n.a.createElement("p",{className:"summary one wow flipInX","data-wow-duration":"3s","data-wow-delay":"0s","data-wow-offset":"10","data-wow-iteration":"1"},'"Highly ',n.a.createElement("span",{className:"bold"},"analytical"),", ",n.a.createElement("span",{className:"bold"},"creative")," and ",n.a.createElement("span",{className:"bold"},"enthusiastic"),' web developer with a powerful blend of exceptional insights and high-level performance in building and optimizing the performance of user-centric, high-impact websites for start-ups and established companies."'),n.a.createElement("div",{className:"container-icon icons"},n.a.createElement("div",{className:"icon"},n.a.createElement("img",{src:"./analytical.png"})),n.a.createElement("div",{className:"icon"},n.a.createElement("img",{src:"./creative.png"})),n.a.createElement("div",{className:"icon"},n.a.createElement("img",{src:"./passion.png"})))),n.a.createElement("div",{className:"secondP"},n.a.createElement("p",{className:"summary two wow flipInX","data-wow-duration":"3s","data-wow-delay":"0s","data-wow-offset":"10","data-wow-iteration":"1"},'"An articulate developer with ',n.a.createElement("span",{className:"bold"},"verifiable")," strengths to leverage technical, analytical and problem-solving skills to create ",n.a.createElement("span",{className:"bold"},"dynamic, high-speed"),' websites, apps and platforms fueling competitive advantage and revenue growth."'),n.a.createElement("div",{className:"container-icon strengths"},n.a.createElement("div",{className:"benefit smile-0"},n.a.createElement("img",{id:"speed",src:"./innovation.png"})),n.a.createElement("div",{className:"benefit smile-1"},n.a.createElement("img",{id:"speed",src:"./speed.png"})),n.a.createElement("div",{className:"benefit smile-2"},n.a.createElement("img",{id:"growth",src:"./growth.png"})),n.a.createElement("div",{className:"benefit smile-3"},n.a.createElement("img",{id:"maintenance",src:"./maintenance.png"})),n.a.createElement("div",{className:""},n.a.createElement("img",{id:"platforms",src:"./platform.png"})))),n.a.createElement("div",{className:"thridP"},n.a.createElement("p",{className:"summary three wow flipInX","data-wow-duration":"3s","data-wow-delay":"0s","data-wow-offset":"10","data-wow-iteration":"1"},'"',n.a.createElement("span",{className:"bold"},"Well-equipped")," individual ",n.a.createElement("span",{className:"bold"},"possessing"),' an acute awareness of practical issues and trends, particularly accessibility, usability and emerging technologies."'),n.a.createElement("div",{className:"container-icon top"},n.a.createElement("div",{className:"diamond flip-card-inner"},n.a.createElement("div",{className:"text flip-card-front"},n.a.createElement("div",null,"usability"),n.a.createElement("div",null,n.a.createElement("img",{className:"possessing",src:"./usability.png"}))))),n.a.createElement("div",{className:"container-icon"},n.a.createElement("div",{className:"diamond"},n.a.createElement("div",{className:"text"},n.a.createElement("div",null,"accessibility"),n.a.createElement("div",null,n.a.createElement("img",{className:"possessing",src:"./key.png"})))),n.a.createElement("div",{className:"diamond"},n.a.createElement("div",{className:"text"},n.a.createElement("div",null,"emerging"),n.a.createElement("div",null,n.a.createElement("img",{className:"possessing",src:"./new.png"}))))),n.a.createElement("div",{className:"flip-card"},n.a.createElement("div",{className:"container-icon bottom wow slideInUp","data-wow-delay":"1s","data-wow-offset":"10","data-wow-iteration":"1","data-wow-duration":"2s"},n.a.createElement("div",{className:"diamond",id:"diamond-technologies"},n.a.createElement("div",{className:"text"},n.a.createElement("div",null,"technologies"),n.a.createElement("div",null,n.a.createElement("img",{className:"possessing chip",src:"./chip.png"}))))))),n.a.createElement("div",{className:"fourP"},n.a.createElement("p",{className:"summary four wow flipInX","data-wow-duration":"1s","data-wow-delay":"0s","data-wow-offset":"10","data-wow-iteration":"1"},'"Able to provide rapid, robust and client-acclaimed front-end and back-end web development ',n.a.createElement("span",{className:"bold"},"optimizing")," user experience, sales, search engine ranking, brand positioning and related metrics, whilst demonstrating excellent ",n.a.createElement("span",{className:"bold"},"communication skills."),'"'),n.a.createElement("div",{className:"container-icon-four"},n.a.createElement("img",{className:"icon-3",src:"./back.png"}),n.a.createElement("div",{className:"saving"},n.a.createElement("span",null,"\u2022   "),n.a.createElement("span",null,"\u2022   "),n.a.createElement("span",null,"\u2022   "),n.a.createElement("span",null,"\u2022   "),n.a.createElement("span",null,"\u2022   ")),n.a.createElement("img",{className:"icon-2",src:"./feedback.png"}),n.a.createElement("div",{className:"saving"},n.a.createElement("span",null,"\u2022   "),n.a.createElement("span",null,"\u2022   "),n.a.createElement("span",null,"\u2022   "),n.a.createElement("span",null,"\u2022   "),n.a.createElement("span",null,"\u2022   ")),n.a.createElement("img",{className:"icon-3",src:"./front.png"})))))}}]),t}(l.Component),N=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.call(this)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(h,null))}}]),t}(l.Component),v=(t(35),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.call(this)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:""},"About Me."),n.a.createElement("div",{className:"aboutme"},n.a.createElement("p",{className:"aboutme-item"},"Highly analytical, creative and enthusiastic web developer with a powerful blend of exceptional insights and high-level performance in building and optimizing the performance of user-centric, high-impact websites for start-ups and established companies. An articulate developer with verifiable strengths to leverage technical, analytical and problem-solving skills to create dynamic, high-speed websites, apps and platforms fueling competitive advantage and revenue growth. Well-equipped individual possessing an acute awareness of practical issues and trends, particularly accessibility, usability and emerging technologies. Able to provide rapid, robust and client-acclaimed front- and back-end web development optimizing user experience, sales, search engine ranking, brand positioning and related metrics, whilst demonstrating excellent communication skills.")))}}]),t}(l.Component)),b=(t(36),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.call(this)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){(new g.a.WOW).init()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Skills."),n.a.createElement("div",{className:"container-skills"},n.a.createElement("div",{className:"skill-panel"},n.a.createElement("div",{className:"skill-items wow slideInLeft","data-wow-duration":"2s","data-wow-delay":"1s","data-wow-offset":"10","data-wow-iteration":"1"},n.a.createElement("img",{src:"./js.png"})),n.a.createElement("div",{className:"skill-items wow fadeInDown","data-wow-duration":"2s","data-wow-delay":"1s","data-wow-offset":"10","data-wow-iteration":"1"},n.a.createElement("img",{src:"./python.png"})),n.a.createElement("div",{className:"skill-items wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"1s","data-wow-offset":"10","data-wow-iteration":"1"},n.a.createElement("img",{src:"./html.png"})),n.a.createElement("div",{className:"skill-items wow slideInRight","data-wow-duration":"1s","data-wow-delay":"1s","data-wow-offset":"10","data-wow-iteration":"1"},n.a.createElement("img",{src:"./css.png"})))),n.a.createElement("div",{className:"skills-sets"},n.a.createElement("div",{className:"skillbox"},n.a.createElement("div",{className:"title-img"},n.a.createElement("img",{className:"skill-img",src:"./book.png"})),n.a.createElement("div",{className:"skills-sets-items frameworks"},n.a.createElement("div",{className:"title-sub line"},"Frameworks & Library"),n.a.createElement("ul",{className:"skill-list"},n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"React.js + Redux"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Node.js"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Flask"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Django"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"JQuery / Vanila.js"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Express.js"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Bootstrap")))),n.a.createElement("div",{className:"skillbox"},n.a.createElement("div",{className:"title-img"},n.a.createElement("img",{className:"skill-img",src:"./database.png"})),n.a.createElement("div",{className:"skills-sets-items databases"},n.a.createElement("div",{className:"title-sub oneline"},"Database"),n.a.createElement("ul",{className:"skill-list"},n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"NoSQL"),n.a.createElement("li",{className:"space"},"- MongoDB"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"SQL - SQLite, "),n.a.createElement("li",{className:"space"},"- PostgreSQL"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Firebase"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"MongoDB atlas")))),n.a.createElement("div",{className:"skillbox"},n.a.createElement("div",{className:"title-img"},n.a.createElement("img",{className:"skill-img",src:"./idea.png"})),n.a.createElement("div",{className:"skills-sets-items methodologies"},n.a.createElement("div",{className:"title-sub line"},"Methodologies & Others"),n.a.createElement("ul",{className:"skill-list"},n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"RESTful architechture"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"CRUD pattern"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"MVC pattern"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Responsive Desigin"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"UX/UI"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Debugging / Testing"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Troubleshooting")))),n.a.createElement("div",{className:"skillbox"},n.a.createElement("div",{className:"title-img"},n.a.createElement("img",{className:"skill-img",src:"./skill.png"})),n.a.createElement("div",{className:"skills-sets-items personal"},n.a.createElement("div",{className:"title-sub oneline"},"Personal Skills"),n.a.createElement("ul",{className:"skill-list"},n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Detail-Oriented"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Problem-Solving"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Teamwork"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Communication"),n.a.createElement("li",null,n.a.createElement("img",{className:"bullet",src:"./bullet.png"}),"Customer Service"))))))}}]),t}(l.Component)),w=(t(37),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.call(this)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){(new g.a.WOW).init()}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"project-container"},n.a.createElement("h1",{id:"project"},"Projects."),n.a.createElement("div",{className:"project-one"},n.a.createElement("div",{className:"panel"},n.a.createElement("div",{className:"wow slideInRight project-items","data-wow-duration":"3s","data-wow-iteration":"1","data-wow-offset":"10"},n.a.createElement("div",{className:"frame"},n.a.createElement("a",{href:"https://react-flight-front.herokuapp.com/"},n.a.createElement("img",{className:"project-pic",src:"./flighttracker.png"}))),n.a.createElement("div",{className:"project-item-one"},n.a.createElement("div",{className:"project-title"},"Flight Tracker"),n.a.createElement("div",{className:"project-tech-stack"},n.a.createElement("span",{className:"tech-stack"},"JavaScript")," + ",n.a.createElement("span",{className:"tech-stack"},"React")," + ",n.a.createElement("span",{className:"tech-stack"},"Node.js")),n.a.createElement("div",{className:"project-description"},n.a.createElement("ul",null,n.a.createElement("li",null,"Executed the implementation of React application and Node.Js/Express server to connect to ",n.a.createElement("span",{className:"hightlight"},"3rd party")," Airline Flights ",n.a.createElement("span",{className:"hightlight"},"API")," to send and receive ",n.a.createElement("span",{className:"hightlight"},"HTTP requests.")),n.a.createElement("li",null,"Took an integral role in designing model schemas for User Profiles, Posts, Flight & Airline Info in ",n.a.createElement("span",{className:"hightlight"},"mongoDB")," maintained using Mongoose ODM with intentions of storing data as JavaScript objects."),n.a.createElement("li",null,"Ensured increase in the ability to connect with third party APIs and utilize best-practices for ",n.a.createElement("span",{className:"hightlight"},"User Interface (UI) design.")))),n.a.createElement("div",{className:"links"},n.a.createElement("span",null,n.a.createElement("a",{href:"https://git.generalassemb.ly/seheesf88/flighttracker-extend-frontend"}," Github(Front-End) "))," |",n.a.createElement("span",null,n.a.createElement("a",{href:"https://git.generalassemb.ly/seheesf88/project3-extend-backend"}," Github(Back-End) "))," |",n.a.createElement("span",null,n.a.createElement("a",{href:"https://react-flight-front.herokuapp.com/"}," Heroku"))))))),n.a.createElement("div",{className:"project-two"},n.a.createElement("div",{className:"panel"},n.a.createElement("div",{className:"wow slideInLeft project-items","data-wow-duration":"3s","data-wow-iteration":"1","data-wow-offset":"10"},n.a.createElement("div",{className:"project-item-two"},n.a.createElement("div",{className:"project-title-two"},"SeeStar"),n.a.createElement("div",{className:"project-tech-stack-two"},n.a.createElement("span",{className:"tech-stack"},"JavaScript")," + ",n.a.createElement("span",{className:"tech-stack"},"React.js")," + ",n.a.createElement("span",{className:"tech-stack"},"Python")," + ",n.a.createElement("span",{className:"tech-stack"},"Flask")),n.a.createElement("div",{className:"project-description-two"},n.a.createElement("ul",{className:"project-description-ul"},n.a.createElement("li",null,"Recreated Instagram as a ",n.a.createElement("span",{className:"hightlight"},"React")," application and ",n.a.createElement("span",{className:"hightlight"},"Flask")," ",n.a.createElement("span",{className:"hightlight"},"RESTful API")," with ",n.a.createElement("span",{className:"hightlight"},"CRUD")," functionality, Image Upload, User Register/Login Authentication with password encryption, and Facebook ",n.a.createElement("span",{className:"hightlight"},"OAuth.")),n.a.createElement("li",null,"Organized relational data and models with the use of ",n.a.createElement("span",{className:"hightlight"},"PostgreSQL/SQLite")," and carefully planned out database tables for User accounts, Following, Posts, Comments, Likes, and Images."),n.a.createElement("li",null,"Improved proficiency in the efficient connection of front end / back end components, log in features and open authorization.")),n.a.createElement("div",{className:"links"},n.a.createElement("span",null,n.a.createElement("a",{href:"https://git.generalassemb.ly/seheesf88/project4"},"Github(Front-End) "))," |",n.a.createElement("span",null,n.a.createElement("a",{href:"https://git.generalassemb.ly/seheesf88/project4-backend"}," Github(Back-End) "))," |",n.a.createElement("span",null,n.a.createElement("a",{href:"https://star-frontend.herokuapp.com/"}," Heroku"))))),n.a.createElement("div",{className:"frame"},n.a.createElement("a",{href:"https://star-frontend.herokuapp.com/"},n.a.createElement("img",{className:"project-pic",src:"./seestar.png"})))))),n.a.createElement("div",{className:"project-three"},n.a.createElement("div",{className:"panel"},n.a.createElement("div",{className:"wow slideInRight project-items","data-wow-duration":"3s","data-wow-iteration":"1","data-wow-offset":"10"},n.a.createElement("div",{className:"frame"},n.a.createElement("a",{href:"https://react-tripplanner.herokuapp.com/"},n.a.createElement("img",{className:"project-pic",src:"./mytripplanner.png"}))),n.a.createElement("div",{className:"project-item-one"},n.a.createElement("div",{className:"project-title"},"My Trip Planner"),n.a.createElement("div",{className:"project-tech-stack"},n.a.createElement("span",{className:"tech-stack"},"JavaScript")," + ",n.a.createElement("span",{className:"tech-stack"},"React")," + ",n.a.createElement("span",{className:"tech-stack"},"Node.js")),n.a.createElement("div",{className:"project-description"},n.a.createElement("ul",null,n.a.createElement("li",null,"This application is what a user can use to plan and manage a trip budget and itinerary. The user can share this information with other users."),n.a.createElement("li",null,"This app includes a calendar and budget calculator."))),n.a.createElement("div",{className:"links"},n.a.createElement("span",null,n.a.createElement("a",{href:"https://git.generalassemb.ly/seheesf88/react-project5"},"Github(Front-End) "))," |",n.a.createElement("span",null,n.a.createElement("a",{href:"https://git.generalassemb.ly/seheesf88/project5-back-end"}," Github(Back-End) "))," |",n.a.createElement("span",null,n.a.createElement("a",{href:"https://react-tripplanner.herokuapp.com/"}," Heroku")))))))))}}]),t}(l.Component)),f=(t(38),function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){return Object(r.a)(this,t),a.call(this)}return Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"contact-main"},n.a.createElement("h1",null,"Contact."),n.a.createElement("div",{className:"contact-container"},n.a.createElement("div",{className:"avatar"},n.a.createElement("img",{id:"avatar",src:"./connect.jpg"})),n.a.createElement("div",{className:"avatar-discription"},n.a.createElement("div",{className:"contact-intro"},n.a.createElement("div",{id:"contact-name"},"SeHee"),n.a.createElement("div",{className:"contact-address"},"San Francisco, CA"),n.a.createElement("div",{className:"contact-address"},"seheesf88@gmail.com"),n.a.createElement("div",{className:"contact-address",id:"findmeon"},"Find me on..")),n.a.createElement("div",{className:"contact-info"},n.a.createElement("span",{className:"contact-link"},n.a.createElement("a",{href:"mailto:seheesf88@gmail.com"},n.a.createElement("img",{className:"contact",src:"./email.png"}))),n.a.createElement("span",{className:"contact-link"},n.a.createElement("a",{href:"https://www.linkedin.com/in/sehee-son/"},n.a.createElement("img",{className:"contact",src:"./linkedin-logo.png"}))),n.a.createElement("span",{className:"contact-link"},n.a.createElement("a",{href:"https://github.com/seheesf88"},n.a.createElement("img",{className:"contact",src:"./github.png"}))),n.a.createElement("span",{className:"contact-link"},n.a.createElement("a",{href:"../SeHee_Son_resume.pdf",download:!0},n.a.createElement("img",{className:"contact",src:"./download.png"})))))))}}]),t}(l.Component)),k=function(){return n.a.createElement("main",null,n.a.createElement(u,null),n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",component:N}),n.a.createElement(i.a,{exact:!0,path:"/aboutme",component:v}),n.a.createElement(i.a,{exact:!0,path:"/skills",component:b}),n.a.createElement(i.a,{exact:!0,path:"/projects",component:w}),n.a.createElement(i.a,{exact:!0,path:"/contact",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(p.a,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.8847db24.chunk.js.map