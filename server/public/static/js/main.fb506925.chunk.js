(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),o=a(31),r=a.n(o),c=(a(76),a(5)),l=a(7),i=a(9),m=a(8),u=a(10),h=a(13),d=(a(77),a(20)),p=a(12),g=a(37),b=a.n(g),f=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{username:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/loggedin").then(function(e){return e.data})},this.login=function(e,a){return t.service.post("/login",{username:e,password:a}).then(function(e){return e.data})},this.logout=function(){return t.service.post("/logout",{}).then(function(e){return e.data})};var a=b.a.create({baseURL:"".concat("https://randomfriend.herokuapp.com/api"),withCredentials:!0});this.service=a},E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.signup(t,n).then(function(e){a.setState({username:"",password:""}),a.props.setUser(e),window.location.assign("/")}).catch(function(e){console.log(e.response.data.message),a.setState({error:e.response.data.message})})},a.handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(d.a)({},n,s))},a.state={username:"",password:"",error:""},a.service=new f,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"signup-container"},s.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"signup-form"},s.a.createElement("h1",null,"Bienvenido amigo!"),s.a.createElement("div",{className:"rowForm"},s.a.createElement("label",null,"Tu nombre "),s.a.createElement("input",{type:"text",name:"username",className:"signup-box",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),s.a.createElement("div",{className:"rowForm"},s.a.createElement("label",null,"Tu contrase\xf1a "),s.a.createElement("input",{type:"password",placeholder:"******",name:"password",className:"signup-box",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),s.a.createElement("input",{type:"submit",value:"Reg\xedstrate",className:"btn-signup"}),s.a.createElement("small",null,"\xbfYa tienes una cuenta? ",s.a.createElement(p.b,{className:"link",to:"/"}," Inicia sesi\xf3n aqui")),s.a.createElement("p",{className:"error-message"},this.state.error)))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.username,n=a.state.password;a.service.login(t,n).then(function(e){a.setState({username:"",password:""}),a.props.setUser(e),window.location.assign("/")}).catch(function(e){console.log(e.response.data.message),a.setState({error:e.response.data.message})})},a.handleChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(d.a)({},n,s))},a.state={username:"",password:"",error:""},a.service=new f,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"login-container"},s.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"login-form"},s.a.createElement("h1",null,"Hola amigo!"),s.a.createElement("div",{className:"rowForm"},s.a.createElement("label",null,"Mi nombre"),s.a.createElement("input",{type:"text",name:"username",className:"login-box",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),s.a.createElement("div",{className:"rowForm"},s.a.createElement("label",null,"Mi contrase\xf1a"),s.a.createElement("input",{type:"password",name:"password",placeholder:"******",className:"login-box",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),s.a.createElement("input",{type:"submit",value:"Inicia sesi\xf3n",className:"btn-login"}),s.a.createElement("small",null,"\xbfNo tienes una cuenta? ",s.a.createElement(p.b,{className:"link",to:"/signup"}," Reg\xedstrate ahora")),s.a.createElement("p",{className:"error-message"},this.state.error)))}}]),t}(n.Component),w=a(17),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){a.setState(Object(w.a)({},a.state,{loggedInUser:a.props.userInSession}))},a.logoutUser=function(){a.service.logout().then(function(){a.setState({loggedInUser:null}),a.props.setUser(null),a.props.closeModal()})},a.state={loggedInUser:null},a.service=new f,a.props=e,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(w.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"render",value:function(){var e=this;return console.log(this.props),this.state.loggedInUser?s.a.createElement("section",{className:"nav-style"},s.a.createElement("div",{className:"nav-left"},s.a.createElement("small",null,"Hola, ",s.a.createElement("span",null,this.state.loggedInUser.username,"!"))),s.a.createElement("div",{className:"nav-right"},s.a.createElement(p.b,{to:"/scenarios"},"Scenarios"),s.a.createElement(p.b,{to:"/scenarios"},s.a.createElement("a",{href:"#loggout",onClick:function(){return e.logoutUser()}},"Cerrar sesi\xf3n")),s.a.createElement(p.b,{to:"/"},"Home"),s.a.createElement(p.b,{to:"/"},"About"))):s.a.createElement("section",{className:"nav-style"},s.a.createElement("div",{className:"nav-left"},s.a.createElement("li",{className:"login-btn",onClick:this.props.showLogin},"Iniciar sesi\xf3n"),s.a.createElement("li",{className:"signup-btn",onClick:this.props.showSignup},"Registrarse")),s.a.createElement("div",{className:"nav-right"},s.a.createElement("li",null,s.a.createElement(p.b,{to:"/scenarios"},"Scenarios")),s.a.createElement("li",null,s.a.createElement(p.b,{to:"/"},"Home")),s.a.createElement(p.b,{to:"/about"},"About")))}}]),t}(n.Component),O=a(70),y=function e(){var t=this;Object(c.a)(this,e),this.getScenarios=function(){return t.service.get("getAllScenarios",{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){console.log(e)})},this.getOneScenario=function(e){return t.service.get("getOneScenario/".concat(e)).then(function(e){return e.data}).catch(function(e){return console.log(e)})},this.getQuestions=function(){return t.service.get("getQuestions").then(function(e){return e.data}).catch(function(e){console.log(e)})},this.postNewScenario=function(e){return t.service.post("postScenario",e).then(function(e){return console.log(e),e.data})},this.createQuestion=function(e,a){return console.log(e,a),t.service.post("createQuestion",{question:e,scenarioId:a}).then(function(e){return console.log(e),e.data})},console.log("https://randomfriend.herokuapp.com/api"),this.service=b.a.create({baseURL:"".concat("https://randomfriend.herokuapp.com/api","/"),withCredentials:!0})},S=function(e){return s.a.createElement("div",{className:"single-scenario"},s.a.createElement(p.b,{className:"",to:"/scenario/".concat(e._id)},s.a.createElement("h5",{className:"card-title"},e.title),s.a.createElement("p",{className:"card-text"},e.description)))},j=a(21),k=a.n(j),I={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"40%"}};k.a.setAppElement("#root");var C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).openModal=function(){a.setState({modalIsOpen:!0})},a.showLogin=function(){a.setState({modelIsOpen:!0,showLogin:!1})},a.closeModal=function(){a.setState({modalIsOpen:!1})},a.handleState=function(e){var t=e.target,n=t.name,s=t.value;a.setState({scenario:Object(w.a)({},a.state.scenario,Object(d.a)({},n,s))})},a.handleSubmit=function(e){e.preventDefault(),a.services.postNewScenario(a.state.scenario).then(function(e){return a.props.refreshScenarios()}),a.setState({scenario:{title:"",description:"",imageUrl:""}}),a.closeModal()},a.state={modalIsOpen:!1,scenario:{title:"",description:"",imageUrl:""}},a.services=new y,a.openModal=a.openModal.bind(Object(h.a)(Object(h.a)(a))),a.closeModal=a.closeModal.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{classname:"signup-container"},s.a.createElement("button",{onClick:this.openModal,className:"button-new-situation"},"Create a situation"),s.a.createElement(k.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,style:I},s.a.createElement("form",{onSubmit:this.handleSubmit,className:"create-scenario-form"},s.a.createElement("h2",null,"Create a random situation "),s.a.createElement("div",{className:"rowForm"},s.a.createElement("label",null,"Title"),s.a.createElement("input",{type:"text",className:"form-control",name:"title",value:this.state.scenario.title,onChange:function(t){return e.handleState(t)}})),s.a.createElement("div",{className:"rowForm"},s.a.createElement("label",null,"Description"),s.a.createElement("textarea",{type:"text",className:"form-control",name:"description",value:this.state.scenario.description,onChange:function(t){return e.handleState(t)}})),s.a.createElement("button",{type:"submit",className:"btn-create-scenario"},"Crear"))))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,s=t.value;console.log(s),a.setState(Object(d.a)({},n,s),function(){console.log(a.props.searchInfo("Heyoooo")),a.props.searchInfo(a.state.search)})},a.state={search:""},a.props=e,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props),s.a.createElement("div",null,s.a.createElement("div",{className:"container h-100"},s.a.createElement("div",{className:"d-flex justify-content-center h-100"},s.a.createElement("div",{className:"searchbar"},s.a.createElement("input",{type:"text",name:"search",autocomplete:"off",className:"search_input",placeholder:"La curiosidad mat\xf3 al gato, \xbfsabes?",value:this.state.search,onChange:function(t){return e.handleChange(t)}}),s.a.createElement("a",{href:"#hey",className:"search_icon"},s.a.createElement("i",{className:"fas fa-search"}))))))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getAllScenarios=function(){return a.services.getScenarios().then(function(e){a.setState(Object(w.a)({},a.state,{scenarios:e,copyScenarios:e}))})},a.searchInfo=function(e){var t=Object(O.a)(a.state.copyScenarios);console.log("hello"),t=a.state.scenarios.filter(function(t){return t.title.toUpperCase().includes(e.toUpperCase())||t.description.toUpperCase().includes(e.toUpperCase())}),console.log("resultados",t),a.setState(Object(w.a)({},a.state,{copyScenarios:t}))},a.state={scenarios:[],copyScenarios:[],searchString:""},a.services=new y,a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(Object(w.a)({},this.state,{loggedInUser:e.userInSession}))}},{key:"componentDidMount",value:function(){this.getAllScenarios()}},{key:"render",value:function(){return s.a.createElement("div",{className:"container scenario"},s.a.createElement("div",{className:"nav-medium"},s.a.createElement(M,{searchInfo:this.searchInfo})),s.a.createElement(C,{refreshScenarios:this.getAllScenarios}),s.a.createElement("div",{className:"full-scenario"},void 0!==this.state.scenarios&&this.state.copyScenarios.map(function(e){return s.a.createElement(S,Object.assign({key:e._id},e))})))}}]),t}(n.Component),q={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"40%"}};k.a.setAppElement("#root");var x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getQuestion=function(){console.log(Math.floor(Math.random()*a.state.scenario.questions.length));var e=a.state.scenario.questions[Math.floor(Math.random()*a.state.scenario.questions.length)];console.log(e),a.setState(Object(w.a)({},a.state,{question:e}))},a.openModal=function(){a.setState({modalIsOpen:!0})},a.closeModal=function(){a.setState({modalIsOpen:!1})},a.handleState=function(e){var t=e.target.value;a.setState({newQuestion:t})},a.handleSubmit=function(e){e.preventDefault(),a.service.createQuestion(a.state.newQuestion,a.state.scenario).then(function(e){return window.location.reload()}),a.setState({scenario:{newQuestion:"",scenario:{},question:null}}),a.closeModal()},a.state={newQuestion:[],scenario:{},question:null},a.service=new y,a.openModal=a.openModal.bind(Object(h.a)(Object(h.a)(a))),a.closeModal=a.closeModal.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.service.getOneScenario(this.props.match.params.id).then(function(t){e.setState(Object(w.a)({},e.state,{scenario:t}),function(){return e.getQuestion()})})}},{key:"render",value:function(){var e=this;return this.state.question?s.a.createElement("div",{className:"scenario-details"},s.a.createElement("button",{className:"new-question",onClick:this.openModal},s.a.createElement("i",{class:"fas fa-plus"})," Add questions"),s.a.createElement(k.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,style:q},s.a.createElement("div",{className:"create-new-question-form"},s.a.createElement("h2",null,"write rAnDoM questions"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"rowForm"},s.a.createElement("input",{type:"text",className:"question-form",name:"title",value:this.state.newQuestion,onChange:function(t){return e.handleState(t)}})),s.a.createElement("input",{type:"hidden",name:"Scenario",value:this.state.scenario}),s.a.createElement("button",{type:"submit",className:"btn-add-question"}," Add")))),s.a.createElement("h1",{className:"h1-details"},this.state.scenario.title),s.a.createElement("h3",{className:"h3-details"},this.state.scenario.description),s.a.createElement("div",{className:"question-container"},s.a.createElement("button",{className:"question",onClick:this.getQuestion},this.state.question.question," ")),s.a.createElement("div",{className:"button-container-details"},s.a.createElement("button",{className:"button-go-back"},s.a.createElement("i",{class:"fas fa-arrow-left"}," "),s.a.createElement(p.b,{className:"link-button",to:"/scenarios"}," go back")))):s.a.createElement("div",{className:"scenario-details"},s.a.createElement("button",{onClick:this.openModal,className:"new-question"},"Create question"),s.a.createElement(k.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,style:q},s.a.createElement("div",{className:"create-new-question-form"},s.a.createElement("h2",null,"Create your questions"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("div",{className:"rowForm"},s.a.createElement("label",null),s.a.createElement("input",{type:"text",className:"question-form",name:"title",value:this.state.newQuestion,onChange:function(t){return e.handleState(t)}})),s.a.createElement("button",{type:"submit",className:"btn-add-question"},"Crear")))))}}]),t}(n.Component),_=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"home_intro"},s.a.createElement("h1",{className:"h1-about"},"Who do you think you are?"),s.a.createElement("h5",{className:"h5-title"},"One day at a restaurant with my best friends from school we were all chatting. Everybody at the table was talking about school, teachers. We had just spent the whole day together in class studying and yet there we were talking about school gossip. Did we Have to be so predictable?"),s.a.createElement("article",{className:"home-column"},s.a.createElement("div",{className:"home_intro_parg"},s.a.createElement("h5",{className:"h5-home"}," So I created this game of self-discovery from a book that inspired me while I was living for 3 months in London working as an au-Pair & in a Start Up charity.")),s.a.createElement("div",{className:"home_intro_parg"},s.a.createElement("h5",{className:"h5-home"}," I still dont have a name for it. But it\u2019s basically random questions in different scenarios of life. Maybe you are in your first date or having a family dinner."))),s.a.createElement("h5",{className:"h5-rooter"},"One day at a restaurant with my best friends from school we were all chatting. Everybody at the table was talking about school, teachers. We had just spent the whole day together in class studying and yet there we were talking about school gossip. Did we Have to be so predictable?"))}}]),t}(n.Component),A=a(11),F=a(69),L=a.n(F),Q=function(){return s.a.createElement(A.e,null,s.a.createElement("h4",{className:"mt-5 mb-2"},"Ironhack Madrid February-April 2019"),s.a.createElement(A.a,{activeItem:1,length:4,showControls:!0,showIndicators:!0,className:"z-depth-1"},s.a.createElement(A.c,null,s.a.createElement(A.d,{itemId:"1"},s.a.createElement(A.g,null,s.a.createElement("img",{className:"d-block w-100",src:L.a,alt:"First slide"}),s.a.createElement(A.f,{overlay:"black-light"})),s.a.createElement(A.b,null,s.a.createElement("h3",{className:"h3-responsive"},"Light mask"),s.a.createElement("p",null,"First text"))),s.a.createElement(A.d,{itemId:"2"},s.a.createElement(A.g,null,s.a.createElement("img",{className:"d-block w-100",src:"https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg",alt:"Second slide"}),s.a.createElement(A.f,{overlay:"black-strong"})),s.a.createElement(A.b,null,s.a.createElement("h3",{className:"h3-responsive"},"Strong mask"),s.a.createElement("p",null,"Second text"))),s.a.createElement(A.d,{itemId:"3"},s.a.createElement(A.g,null,s.a.createElement("img",{className:"d-block w-100",src:"https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg",alt:"Third slide"}),s.a.createElement(A.f,{overlay:"black-slight"})),s.a.createElement(A.b,null,s.a.createElement("h3",{className:"h3-responsive"},"Slight mask"),s.a.createElement("p",null,"Third text"))),s.a.createElement(A.d,{itemId:"4"},s.a.createElement(A.g,null,s.a.createElement("img",{className:"d-block w-100",src:"https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg",alt:"Mattonit's item"}),s.a.createElement(A.f,{overlay:"black-light"})),s.a.createElement(A.b,null,s.a.createElement("h3",{className:"h3-responsive"},"Sopot Beach"),s.a.createElement("p",null,"Taken june 21th by @mattonit"))))))},R=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"about-container"},s.a.createElement("h1",{className:"h1-about"},"Who am I ?"),s.a.createElement("article",{className:"about-intro"},s.a.createElement("div",{className:"about_intro_parg left"},s.a.createElement("h5",{className:"h5-about"},"One day at a restaurant with my best friends from school we were all chatting. Everybody at the table was talking about school, teachers\u2026 and we had just spent the whole day together in class studying and yet there we were talking about school gossip.",s.a.createElement("span",{className:"about-span-h5"}," Did we have to be so predictable?"))),s.a.createElement("div",{className:"about_intro_parg right"},s.a.createElement("h5",{className:"h5-about"}," So I  finally asked them out of curiosity. ",s.a.createElement("span",{className:"about-span-h5"},' "If you were completely lost in a desert Island whicht 3 things would you take with you?"'))),s.a.createElement("div",{className:"about_intro_parg left"},s.a.createElement("h5",{className:"h5-about"}," A momentary pause... A few weird looks... Then one voice spoke. And suddenly everybody erupted into several passionate discussions.")),s.a.createElement("div",{className:"about_intro_parg right"},s.a.createElement("h5",{className:"h5-about"},"People are so much more intersting than what they think they are. You just have to ",s.a.createElement("span",{className:"about-span-h5"}," ask the right question at the right time. ")," ")),s.a.createElement("div",{className:"about_intro_parg left"},s.a.createElement("h5",{className:"h5-about"},"  ")),s.a.createElement("div",{className:"about_intro_parg right"},s.a.createElement("h5",{className:"h5-about"}," .")),s.a.createElement("div",{className:"about_intro_parg left"},s.a.createElement("h5",{className:"h5-about"}," "))),s.a.createElement(Q,null))}}]),t}(n.Component),D=a(24),T={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:"40%"}};k.a.setAppElement("#root");var W=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).searchInfo=function(e){a.setState({searchString:e},function(){return console.log(a.state.searchString)})},a.setTheUser=function(e){a.setState({loggedInUser:e})},a.openModal=function(){a.setState({modalIsOpen:!0,showLogin:!1})},a.showLogin=function(){a.setState({modalIsOpen:!0,showLogin:!0})},a.closeModal=function(){a.setState({modalIsOpen:!1})},a.handleSubmit=function(e){e.preventDefault(),a.closeModal()},a.state={loggedInUser:null,modalIsOpen:!1,showLogin:!1,searchString:""},a.service=new f,a.openModal=a.openModal.bind(Object(h.a)(Object(h.a)(a))),a.closeModal=a.closeModal.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"fetchUser",value:function(){var e=this;null===this.state.loggedInUser&&this.service.loggedin().then(function(t){e.setState({loggedInUser:t})}).catch(function(t){e.setState({loggedInUser:!1})})}},{key:"render",value:function(){var e=this;return this.fetchUser(),this.state.loggedInUser?s.a.createElement("main",null,s.a.createElement("div",{className:"main-container"},s.a.createElement(N,{userInSession:this.state.loggedInUser,setUser:this.setTheUser,closeModal:this.closeModal}),s.a.createElement(D.c,null,s.a.createElement(D.a,{exact:!0,path:"/scenarios",render:function(){return s.a.createElement(U,null)}}),s.a.createElement(D.a,{exact:!0,path:"/scenario/:id",component:x}),s.a.createElement(D.a,{exact:!0,path:"/",render:function(){return s.a.createElement(_,null)}})))):s.a.createElement("main",null,s.a.createElement(N,{userInSession:this.state.loggedInUser,showSignup:this.openModal,showLogin:this.showLogin,searchInfo:this.searchInfo}),s.a.createElement(k.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,style:T},this.state.showLogin?s.a.createElement(v,{setUser:this.setTheUser}):s.a.createElement(E,{setUser:this.setTheUser})),s.a.createElement(D.c,null,s.a.createElement(D.a,{exact:!0,path:"/signup",render:function(){return s.a.createElement(E,{setUser:e.setTheUser})}}),s.a.createElement(D.a,{exact:!0,path:"/login",render:function(){return s.a.createElement(v,{setUser:e.setTheUser})}}),s.a.createElement(D.a,{path:"/scenarios",exact:!0,render:function(){return s.a.createElement(U,null)}}),s.a.createElement(D.a,{path:"/scenario/:id",exact:!0,component:x}),s.a.createElement(D.a,{exact:!0,path:"/",render:function(){return s.a.createElement(_,null)}}),s.a.createElement(D.a,{exact:!0,path:"/about",render:function(){return s.a.createElement(R,null)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(p.a,null," ",s.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){e.exports=a.p+"static/media/ironhack1.29222aa7.jpg"},71:function(e,t,a){e.exports=a(157)},76:function(e,t,a){},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.fb506925.chunk.js.map