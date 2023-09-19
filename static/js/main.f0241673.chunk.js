(this["webpackJsonpportfolio-v3"]=this["webpackJsonpportfolio-v3"]||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s(18),a=s.n(i),n=(s(38),s(5)),r=s(4),o=s(20),l=(s(39),s(0)),d=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1];return Object(l.jsxs)("div",{className:"navBar row px-2 g-0 px-md-5 py-2",children:[Object(l.jsx)("div",{className:"navBar__logo col-6",children:Object(l.jsx)(o.b,{style:{textDecoration:"none"},to:"/",children:Object(l.jsx)("img",{style:{width:"180px",paddingTop:"18px"},src:"./logo.png",alt:"logo"})})}),Object(l.jsx)("div",{className:"navBar__items col-6 px-5 ".concat(s?"show":""),children:[{text:"Skills",path:"/skills"},{text:"Projects",path:"/projects"},{text:"Experience",path:"/experience"},{text:"Contacts",path:"/contacts"}].map((function(e,t){return Object(l.jsx)("div",{className:"",children:Object(l.jsx)(o.b,{className:"navBar__btn mx-5",to:e.path,children:Object(l.jsx)("div",{class:"navBar__btn-text",children:e.text})},t)})}))}),Object(l.jsx)("div",{className:"navBar__hamburger col-6",children:Object(l.jsxs)("div",{className:"hamburger-icon ".concat(s?"active":""),onClick:function(){i(!s)},children:[Object(l.jsx)("div",{className:"bar"}),Object(l.jsx)("div",{className:"bar"}),Object(l.jsx)("div",{className:"bar"})]})})]})},j=(s(46),s(12)),h=function(){var e=Object(c.useRef)(),t=function(e,t,s){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(s,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};return t.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var s=this,c=300-100*Math.random();this.isDeleting&&(c/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,c=500):(c=this.period,this.isDeleting=!0),setTimeout((function(){s.tick()}),c)},window.onload=function(){for(var e=document.getElementsByClassName("txt-rotate"),s=0;s<e.length;s++){var c=e[s].getAttribute("data-rotate"),i=e[s].getAttribute("data-period");c&&new t(e[s],JSON.parse(c),i)}var a=document.createElement("style");a.type="text/css",a.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(a)},Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)(j.a,{pages:5,ref:e,children:[Object(l.jsx)(j.b,{factor:5,class:"home__background"}),Object(l.jsx)(j.b,{offset:"0.1",speed:"1",className:"home__greeting-intro",children:Object(l.jsxs)("div",{className:"home__greeting-msg",children:[Object(l.jsx)("div",{className:"home__greeting-content-hi",children:"Hi,  "}),Object(l.jsxs)("div",{className:"home__greeting-content",children:[Object(l.jsx)("span",{className:"abbr",children:"I am"}),Object(l.jsx)("span",{className:"txt-rotate","data-period":"2000","data-rotate":'[ "SeHee.", "a Software Engineer.", "a Front end engineer.", "a Problem Solver.", "a Team Player." ]'})]})]})}),Object(l.jsx)(j.b,{offset:"0",sticky:{start:"0",end:"5"},speed:"0.1",className:"home__sehee-back",children:Object(l.jsx)("img",{src:"./img/sehee_full.svg",alt:"sehee character",className:"home__sehee mt-5"})}),Object(l.jsx)(j.b,{offset:"1",className:"home__intro-message-container",onClick:function(){return e.current.scrollTo(4)},children:Object(l.jsx)("div",{className:"home__intro-message speech-bubble",children:Object(l.jsx)("div",{className:"home__intro-message-subtitle",children:"With a diverse background, I specialize in creating innovative solutions that push the boundaries of web application development."})})}),Object(l.jsx)(j.b,{offset:"1.8",speed:"0.6",onClick:function(){return e.current.scrollTo(3)},className:"home__intro-message-container-end",children:Object(l.jsx)("div",{className:"home__intro-message speech-bubble-right",children:Object(l.jsx)("div",{className:"home__intro-message-subtitle",children:"I am with a passion for continuous learning, eagerly embracing new technologies and collaborating seamlessly with diverse teams to create user-centric applications"})})}),Object(l.jsx)(j.b,{offset:"2.1",speed:"1.4",onClick:function(){return e.current.scrollTo(4)},className:"home__intro-message-container",children:Object(l.jsx)("div",{className:"home__intro-message speech-bubble",children:Object(l.jsx)("div",{className:"home__intro-message-subtitle",children:"I excel at solving challenging problems by writing precise code and using analytical thinking, ensuring that each detail strengthens robust solutions."})})}),Object(l.jsx)(j.b,{offset:"4",className:"home__yam-container",children:Object(l.jsx)("img",{src:"./img/angryyam.svg",alt:"yam-cat",className:"home__yam"})}),Object(l.jsx)(j.b,{factor:"1",speed:"1.5",sticky:{start:"4",end:"5"},className:"home__desk-container",children:Object(l.jsx)("img",{src:"./img/desk.svg",alt:"desk",style:{width:"80%"}})}),Object(l.jsx)(j.b,{factor:"1",speed:"2",sticky:{start:"4",end:"5"},className:"home__keyboard-container",children:Object(l.jsx)("img",{src:"./img/keyboard.svg",alt:"keyboard",className:"home__keyboard"})}),Object(l.jsx)(j.b,{factor:"1",speed:"2.4",sticky:{start:"3.5",end:"5"},className:"home__coffee-container",children:Object(l.jsx)("img",{src:"./img/coffee.svg",alt:"coffee",style:{width:"8%",marginLeft:"20%",marginBottom:"5%"}})}),Object(l.jsx)(j.b,{factor:"1",speed:"2.1",sticky:{start:"3.2",end:"5"},className:"home__mango-container",onClick:function(){return e.current.scrollTo(1)},children:Object(l.jsx)("img",{src:"./img/mango.svg",alt:"mango-cat",className:"home__mango"})})]})})},m=s(3),b=s(2),g=s(7),p=s(8),x=(s(47),s(25)),u=s.n(x),O=function(e){Object(g.a)(s,e);var t=Object(p.a)(s);function s(){return Object(m.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){(new u.a.WOW).init()}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"skills pt-5",children:[Object(l.jsx)("div",{className:"h1 text-center",children:"Skills."}),Object(l.jsx)("div",{className:"skills__languages mt-3 my-md-5",children:Object(l.jsxs)("div",{className:"skills__languages-sets",children:[Object(l.jsx)("div",{className:"skills__languages-sets-item wow slideInLeft","data-wow-duration":"2s","data-wow-delay":"1s","data-wow-offset":"10","data-wow-iteration":"1",children:Object(l.jsx)("img",{src:"./js.png",alt:"js"})}),Object(l.jsx)("div",{className:"skills__languages-sets-item wow fadeInDown","data-wow-duration":"2s","data-wow-delay":"1s","data-wow-offset":"10","data-wow-iteration":"1",children:Object(l.jsx)("img",{src:"./python.png",alt:"python"})}),Object(l.jsx)("div",{className:"skills__languages-sets-item wow fadeInUp","data-wow-duration":"2s","data-wow-delay":"1s","data-wow-offset":"10","data-wow-iteration":"1",children:Object(l.jsx)("img",{src:"./html.png",alt:"html"})}),Object(l.jsx)("div",{className:"skills__languages-sets-item wow slideInRight","data-wow-duration":"2s","data-wow-delay":"1s","data-wow-offset":"10","data-wow-iteration":"1",children:Object(l.jsx)("img",{src:"./css.png",alt:"css"})})]})}),Object(l.jsx)("div",{className:"skills__items mt-3 mt-md-0",children:[{img:"./book.png",alt:"book",title:"Frameworks & Libraries",list:["React.js + Redux","Vue.js + Vuex","Node.js + Express.js","Flask","Django","Axios","Sass","Bootstraps","Vuetify"]},{img:"./database.png",alt:"database",title:"Methodologies & Database",list:["RESTful architechture","CRUD pattern","MVC pattern","Responsive Design","MongoDB","Firebase","PostgreSQL","SQLite"]},{img:"./idea.png",alt:"Management & Tools",title:"Management & Tools",list:["Agile scrum methodology","Jira","Notion","Figma","Github(Git controls)","Bitbucket","Jenkins(ci/cd)","Graylog"]},{img:"./skill.png",title:"Personal Skills",alt:"Personal Skills",list:["Detail-Oriented","Problem-solving","Teamwork and Collaboration","Communication","Adaptability"]}].map((function(e,t){return Object(l.jsxs)("div",{className:"skills__items-sets",children:[Object(l.jsx)("div",{className:"skills__items-sets-img",children:Object(l.jsx)("img",{src:e.img,alt:e.alt})}),Object(l.jsx)("div",{className:"skills__items-sets-title mt-2",children:e.title}),Object(l.jsx)("ul",{className:"skills__items-sets-content",children:e.list.map((function(e,t){return Object(l.jsxs)("li",{className:"py-1",children:[Object(l.jsx)("img",{className:"bullet mr-3",src:"./bullet.png",alt:"bullet point"}),e]},t)}))})]},t)}))})]})}}]),s}(c.Component),f=O,v=(s(48),function(e){Object(g.a)(s,e);var t=Object(p.a)(s);function s(){return Object(m.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"componentDidMount",value:function(){(new u.a.WOW).init()}},{key:"render",value:function(){return Object(l.jsxs)("div",{class:"projects",children:[Object(l.jsx)("div",{className:"h1 text-center pt-5",children:"Projects."}),Object(l.jsx)("div",{className:"projects__project-container mt-5",children:[{title:"Tom Riddle's Diary Chat App",img:"./img/magicDiary.png",githubFrontendLink:"https://github.com/seheesf88/magic-diary-chat",githubBackendLink:"https://github.com/seheesf88/magic-diary",deployURl:"https://seheesf88.github.io/magic-diary-chat/",techStack:["JavaScript","Vue.js","Sass","bootstrap","Node.js","Express.js","openai - fine-tunning"],description:["Tom Riddle's Diary is a unique and immersive chat application inspired by the character Tom Riddle from the Harry Potter series, specifically from Harry Potter and the Chamber of Secrets.","This chat app features a chatbot named Tom Riddle, who is known for his cold and arrogant demeanor.","Tom is trained to respond using magical world vocabularies and may show little interest in the non-magical world (also known as the muggle world)."]},{title:"The Stock Chart app",img:"./img/chartApp.png",githubFrontendLink:"https://github.com/seheesf88/the-chart-app",githubBackendLink:!1,deployURl:"https://seheesf88.github.io/the-chart-app/",techStack:["JavaScript","React.js","chart.js","3rd party api","Sass","bootstrap"],description:["The Stock Price Visualization App is a user-friendly tool for visualizing daily stock prices of various companies.","Input a stock symbol and specify the desired number of days to generate a historical price chart.","Ideal for investors, curious individuals, and those interested in tracking stock trends, offering an easy and informative way to explore stock market data."]}].map((function(e,t){return Object(l.jsxs)("div",{className:"projects__project-panel px-4",children:[Object(l.jsx)("div",{className:"projects__project-img-container",children:Object(l.jsx)("img",{src:e.img,alt:"project image",className:"projects__project-img"})}),Object(l.jsxs)("div",{className:"projects__project-content py-5",children:[Object(l.jsx)("div",{className:"projects__project-title text-center",children:e.title}),Object(l.jsx)("div",{className:"projects__project-tech text-center mt-3",children:e.techStack.map((function(t,s){return s!==e.techStack.length-1?Object(l.jsxs)("span",{className:"my-2",children:[Object(l.jsx)("span",{className:"projects__project-tech-stack",children:t}),Object(l.jsx)("span",{className:"mx-2",children:"+"})]}):Object(l.jsx)("span",{className:"my-2",children:Object(l.jsx)("span",{className:"projects__project-tech-stack",children:t})})}))}),Object(l.jsx)("div",{className:"projects__project-description my-2",children:Object(l.jsx)("ul",{children:e.description.map((function(e,t){return Object(l.jsx)("li",{children:e},t)}))})}),Object(l.jsxs)("div",{className:"projects__project-links text-center",children:[Object(l.jsx)("a",{href:e.githubFrontendLink,children:" Github(Frontend) "}),e.githubBackendLink?Object(l.jsxs)("span",{children:[Object(l.jsx)("span",{className:"mx-3",children:" | "})," ",Object(l.jsx)("a",{href:e.githubBackendLink,children:" Github (Backend)"})]}):Object(l.jsx)(l.Fragment,{}),Object(l.jsx)("span",{className:"mx-3",children:" | "}),Object(l.jsx)("a",{href:e.deployURl,children:"Try it"})]})]})]},t)}))})]})}}]),s}(c.Component)),_=v,y=s(21),k=(s(52),s(53),function(){return Object(l.jsxs)("div",{className:"experience py-5",children:[Object(l.jsx)("div",{className:"h1 text-center",children:"Work Experience."}),Object(l.jsxs)(y.VerticalTimeline,{children:[Object(l.jsxs)(y.VerticalTimelineElement,{date:"March 2021 - July 2023",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:Object(l.jsx)("div",{className:"experience__company-icon",children:Object(l.jsx)("img",{src:"./icons/ixlayer.png",alt:"ixlayer",style:{width:"100%",borderRadius:"50%"}})}),children:[Object(l.jsx)("h5",{children:"Ixlayer"}),Object(l.jsxs)("h4",{children:["Front end Engineer ",Object(l.jsx)("span",{className:"px-1",children:" | "}),"Vue Developer"]}),Object(l.jsx)("h6",{children:"San Francisco, CA | Remote"}),Object(l.jsx)("p",{className:"my-2 px-2",children:"I played a pivotal role in developing and enhancing a fully customized COVID testing platform, crucial during the pandemic's peak, serving healthcare providers and users with features such as home testing, while also extending to other products like STI and vitamin D testing, contributing to over 3 million COVID tests, and actively collaborating with cross-functional teams, UX/UI designers, and QA to ensure seamless user experiences, code quality, and bug-free functionality."}),Object(l.jsx)("div",{style:{fontWeight:"600"},children:"Tech stacks:"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"JavaScript, Vue.js, Vuex, Bootstraps, Vuetify, SASS"}),Object(l.jsx)("li",{children:"Python, Django, PostgreSQL"}),Object(l.jsx)("li",{children:"Git controls, Github, Jenkins, Graylog, Figma"}),Object(l.jsx)("li",{children:"Agile Methodologies:  Notion, Jira"})]})]}),Object(l.jsxs)(y.VerticalTimelineElement,{date:"January 2021 - March 2021",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:Object(l.jsx)("div",{className:"experience__company-icon",children:Object(l.jsx)("img",{src:"./icons/reeske.svg",alt:"reeske",style:{width:"100%",borderRadius:"50%"}})}),children:[Object(l.jsx)("h5",{children:" Reeske "}),Object(l.jsxs)("h4",{children:["Front end Engineer ",Object(l.jsx)("span",{className:"px-1",children:" | "})," React Developer"]}),Object(l.jsx)("h6",{children:"NewYork, CA | Seasonal "}),Object(l.jsx)("p",{className:"my-2 px-2",children:"I architected the front-end of the insurance platform using React.js, collaborating with design and backend teams for a seamless user interface; I also designed interactive functionalities allowing users to choose insurance packages based on their needs, following best practices like responsive design for an optimal, smooth user experience."}),Object(l.jsx)("div",{style:{fontWeight:"600"},children:"Tech stacks:"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"JavaScript, React.js, Bootstraps, Material UI, CSS"}),Object(l.jsx)("li",{children:"Githubs, Git controls, Figma"})]})]}),Object(l.jsxs)(y.VerticalTimelineElement,{date:"May 2019 - January 2021",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:Object(l.jsx)("div",{className:"experience__company-icon",children:Object(l.jsx)("img",{src:"./icons/greenbanc.svg",alt:"greenbanc",style:{width:"100%",borderRadius:"50%"}})}),children:[Object(l.jsx)("h5",{children:"Greenbanc"}),Object(l.jsxs)("h4",{children:["Full Stack Engineer ",Object(l.jsx)("span",{className:"px-1",children:" | "}),"  MERN stack engineer"]}),Object(l.jsx)("h5",{children:"Berkely, CA"}),Object(l.jsx)("p",{className:"my-2 px-2",children:"I led a team of five as the founding engineer to develop a React.js-based digital roadmap app for estimating potential savings in transitioning to electric energy homes; I also created a feature enabling virtual energy assessments through uploaded photos and streamlined admin dashboard, saving 8+ hours daily, while guiding tech stack choices (MERN), conducting code reviews, and contributing to system design."}),Object(l.jsx)("div",{style:{fontWeight:"600"},children:"Tech stacks:"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"JavaScript, React.js, Redux, MongoDB, Express.js, Node.js"}),Object(l.jsx)("li",{children:"Bootstraps, Material UI, HTML, CSS"}),Object(l.jsx)("li",{children:"Bitbucket, Git controls, Trello, Figma"})]})]}),Object(l.jsxs)(y.VerticalTimelineElement,{date:"September 2019 - March 2020",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:Object(l.jsx)("div",{className:"experience__company-icon",children:Object(l.jsx)("img",{src:"./icons/mvcode.png",alt:"mvcode",style:{width:"100%",borderRadius:"50%"}})}),children:[Object(l.jsx)("h5",{children:"MVcode"}),Object(l.jsx)("h4",{children:"Coding Instructor"}),Object(l.jsx)("h5",{children:"San Mateo, CA"}),Object(l.jsx)("p",{className:"my-2 px-2",children:"I introduced a structured K12 Computer Science curriculum, teaching coding and topics like Unity, Robotics, JavaScript, HTML/CSS, Python, and Algorithm & Data Structure, inspiring a lasting coding interest among 70+ students weekly; I led daily classes for 20+ students, crafting tailored lesson plans to stimulate learning, evaluating code, and offering personalized debugging consultations post-classes."}),Object(l.jsx)("div",{style:{fontWeight:"600"},children:"Tech stacks:"}),Object(l.jsx)("ul",{children:Object(l.jsx)("li",{children:"Progress.js, Scratch, Unity, Minecraft"})})]})]})]})}),N=s(33),w=(s(54),function(){return Object(l.jsxs)("div",{className:"contacts py-5",children:[Object(l.jsx)("div",{className:"h1 text-center mb-5",children:"Contact."}),Object(l.jsxs)("div",{className:"contacts__body",children:[Object(l.jsx)("div",{className:"mx-3",children:Object(l.jsx)(N.a,{url:"https://calendly.com/seheesf88",pageSettings:{hideEventTypeDetails:!0}})}),Object(l.jsxs)("div",{className:"contacts__content mx-md-5 mb-5 mb-md-5",children:[Object(l.jsx)("div",{className:"contacts__content-subtitle",children:"SeHee Son."}),Object(l.jsx)("div",{children:"San Francisco, CA"}),Object(l.jsx)("div",{children:"seheesf88@gmail.com"}),Object(l.jsxs)("div",{className:"contacts__content-links mt-4",children:[Object(l.jsx)("span",{className:"contacts__content-link",children:Object(l.jsx)("a",{href:"mailto:seheesf88@gmail.com",children:Object(l.jsx)("img",{className:"contacts__content-link-icon",alt:"email",src:"./icons/email.svg"})})}),Object(l.jsx)("span",{className:"contacts__content-link",children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/sehee-son/",children:Object(l.jsx)("img",{className:"contacts__content-link-icon",alt:"linkedin",src:"./icons/linkedin.svg"})})}),Object(l.jsx)("span",{className:"contacts__content-link",children:Object(l.jsx)("a",{href:"https://github.com/seheesf88",children:Object(l.jsx)("img",{className:"contacts__content-link-icon",alt:"github",src:"./icons/github.svg"})})}),Object(l.jsx)("span",{className:"contacts__content-link",children:Object(l.jsx)("a",{href:"../SeHee_Son_resume.pdf",download:!0,children:Object(l.jsx)("img",{className:"contacts__content-link-icon",alt:"download",src:"./icons/download.svg"})})})]})]})]})]})}),S=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(n.c,{children:[Object(l.jsx)(n.a,{exact:!0,path:"/",component:h}),Object(l.jsx)(n.a,{exact:!0,path:"/skills",component:f}),Object(l.jsx)(n.a,{exact:!0,path:"/experience",component:k}),Object(l.jsx)(n.a,{exact:!0,path:"/projects",component:_}),Object(l.jsx)(n.a,{exact:!0,path:"/contacts",component:w})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(S,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.f0241673.chunk.js.map