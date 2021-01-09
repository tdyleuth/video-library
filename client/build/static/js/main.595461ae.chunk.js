(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},30:function(e,t,s){},48:function(e,t,s){},49:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s(19),i=s.n(c),o=s(2),r=(s(27),s(28),s(3)),l=s.n(r),d=s(21),u=s(4),j=(s(30),s(20)),b=s.n(j).a.create({baseURL:"http://localhost:3000/api"}),h={signup:function(e){return b.post("/user/signup",e)},loginUser:function(e){return b.post("/user/login",e)},updateUser:function(e,t){return b.put("user/".concat(e),t)},deleteUser:function(e){return b.delete("/video/".concat(e))},getUsers:function(){return b.get("/users")},getUserById:function(e){return b.get("/user/".concat(e))},createVideo:function(e){return b.post("/video",e)},updateVideoById:function(e,t){return b.put("/video/".concat(e),t)},deleteVideoById:function(e){return b.delete("/video/".concat(e))},getAllVideos:function(){return b.get("/videos")},getVideoById:function(e){return b.get("/video/".concat(e))}},p=function(e){var t=e.setShowModal,s=e.videos,c=e.setVideos,i=e.setShowVideoAddedMessageAlert,r=Object(a.useState)(""),j=Object(o.a)(r,2),b=j[0],p=j[1],O=Object(a.useState)(""),g=Object(o.a)(O,2),v=g[0],m=g[1],A=Object(a.useState)(""),x=Object(o.a)(A,2),f=x[0],w=x[1],N=Object(a.useState)(""),S=Object(o.a)(N,2),V=S[0],y=S[1],D=Object(a.useState)("Movie"),C=Object(o.a)(D,2),Y=C[0],B=C[1],T=Object(a.useState)(""),M=Object(o.a)(T,2),k=M[0],R=M[1],U=function(){var e=Object(u.a)(l.a.mark((function e(n){var a,o,r,u,j,O,g,A,x,N,S;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={title:b,rating:v,releaseDate:f,synopsis:V,coverImage:k,type:Y},e.prev=2,e.next=5,h.createVideo(a);case 5:o=e.sent,console.log("Response",o),r=o.data,u=r.id,j=r.title,O=r.synopsis,g=r.rating,A=r.coverImage,x=r.releaseDate,N=r.type,S=[{_id:u,title:j,synopsis:O,rating:g,coverImage:A,releaseDate:x,type:N}].concat(Object(d.a)(s)),c(S),i(!0),setTimeout((function(){i(!1)}),2400),t(!1),function(){p(""),m(""),w(""),y(""),B(""),R("")}(),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(2),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[2,18]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"insert-video-container",children:Object(n.jsx)("div",{className:"insert-video-form",children:Object(n.jsxs)("form",{onSubmit:U,children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h2",{children:"Insert Video"}),Object(n.jsx)("button",{type:"button",onClick:function(){t(!1)},className:"close-button",children:"X"})]}),Object(n.jsx)("label",{className:"title-label",children:Object(n.jsx)("b",{children:"Title: "})}),Object(n.jsx)("input",{onChange:function(e){p(e.target.value)},value:b,type:"text",placeholder:"Enter Video Title",required:!0}),Object(n.jsx)("label",{className:"releaseDate-label",children:Object(n.jsx)("b",{children:"Release Date: "})}),Object(n.jsx)("input",{onChange:function(e){w(e.target.value)},value:f,type:"date",placeholder:"Enter Release Date",required:!0}),Object(n.jsx)("label",{className:"type-label",children:Object(n.jsx)("b",{children:"Type: "})}),Object(n.jsxs)("select",{className:"video-type-list",onChange:function(e){return function(e){B(e)}(e.target.value)},value:Y,children:[Object(n.jsx)("option",{defaultValue:"Movie",children:"Movie"}),Object(n.jsx)("option",{value:"TV Show",children:"TV Show"}),Object(n.jsx)("option",{value:"Documentary",children:"Documentary"}),Object(n.jsx)("option",{value:"Animation",children:"Animation"})]}),Object(n.jsx)("label",{className:"rating-label",children:Object(n.jsx)("b",{children:"Rating 1-10: "})}),Object(n.jsx)("input",{onChange:function(e){m(e.target.value)},value:v,type:"number",min:"1",max:"10",placeholder:"Enter Rating",required:!0}),Object(n.jsx)("label",{className:"coverImage-label",children:Object(n.jsx)("b",{children:"Cover Image URL: "})}),Object(n.jsx)("input",{onChange:function(e){R(e.target.value)},value:k,type:"url",placeholder:"Enter Cover Image URL",required:!0}),Object(n.jsx)("label",{className:"synopsis-label",children:Object(n.jsx)("b",{children:"Synopsis: "})}),Object(n.jsx)("textarea",{className:"synopsis-input",onChange:function(e){y(e.target.value)},value:V,rows:5,cols:5,placeholder:"Enter Synopsis",required:!0}),Object(n.jsxs)("div",{className:"button-container",children:[Object(n.jsx)("button",{className:"form-insert-video-submit-button",children:"Submit"}),Object(n.jsx)("button",{onClick:function(){t(!1)},className:"form-insert-video-cancel-button",children:"Cancel"})]})]})})})},O=(s(48),function(e){var t=e.setVideos,s=e.videos,c=e.setSelectedVideo,i=Object(a.useState)(""),r=Object(o.a)(i,2),d=r[0],j=r[1],b=Object(a.useState)([]),p=Object(o.a)(b,2),O=p[0],g=p[1],v=Object(a.useState)(!1),m=Object(o.a)(v,2),A=m[0],x=m[1],f=Object(a.useState)(!1),w=Object(o.a)(f,2),N=w[0],S=w[1],V=s.map((function(e){return e.title.toLowerCase()})),y=V.map((function(e,t){return Object(n.jsx)("li",{children:e},t)})),D=function(){j("")},C=Object(a.useRef)(),Y=function(e){console.log(e.target),C.current.contains(e.target)||x(!1)};return Object(a.useEffect)((function(){return document.addEventListener("mousedown",Y),function(){document.removeEventListener("mousedown",Y)}}),[]),Object(n.jsx)("div",{className:"searchbar-container",children:Object(n.jsx)("form",{className:"search",children:Object(n.jsxs)("div",{className:"search-wrapper",children:[Object(n.jsx)("input",{onClick:function(){x(!0)},id:"search-box",value:d,onChange:function(e){if(j(e.target.value),""!==d){console.log("videoList",V);var t=V.filter((function(e){return e.includes(d.toLowerCase())})).map((function(e,t){return Object(n.jsx)("li",{children:e},t)}));g(t),x(!0)}else g([])},type:"text",placeholder:"Search for Video..."}),Object(n.jsx)("div",{ref:C,onClick:function(e){var n=e.target.innerHTML,a=s.filter((function(e){return e.title.toLowerCase().split(" ").join("").includes(n.toLowerCase().split(" ").join(""))}));c(""),t(a),S(!0),D(),x(!1)},className:A?"active":"title-dropdown",children:d.length<1?y:O}),!0!==N?Object(n.jsx)("button",{id:"search-button",onClick:function(e){if(e.preventDefault(),""===d){(function(){var e=Object(u.a)(l.a.mark((function e(){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAllVideos();case 2:s=e.sent,console.log("Response",s),t(s.data.data),c("");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}else{var n=s.filter((function(e){if(null!==d)return e.title.toLowerCase().split(" ").join("").includes(d.toLowerCase().split(" ").join(""))}));S(!0),x(!1),t(n),c(""),D()}},type:"submit",children:"SEARCH"}):Object(n.jsx)("button",{id:"clearSearchButton",children:"CLEAR SEARCH"})]})})})}),g=(s(49),function(e){var t=e.setIsAuthed,s=e.setShowLoginModal,c=e.setShowSignupModal,i=e.setShowAlertMessage,r=Object(a.useState)(""),d=Object(o.a)(r,2),j=d[0],b=d[1],p=Object(a.useState)(""),O=Object(o.a)(p,2),g=O[0],v=O[1],m=Object(a.useState)(!1),A=Object(o.a)(m,2),x=A[0],f=A[1],w=Object(a.useState)(!1),N=Object(o.a)(w,2),S=N[0],V=N[1],y=function(){var e=Object(u.a)(l.a.mark((function e(n){var a,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={email:j,password:g},e.prev=2,e.next=5,h.loginUser(a);case 5:!0===(c=e.sent).data.success&&(o=c.data.token,localStorage.setItem("token",o),s(!1),t(!0),f(!1),i(!0),setTimeout((function(){i(!1)}),2400)),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),V(!0),setTimeout((function(){V(!1)}),4e3);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"login-container",children:Object(n.jsx)("div",{className:"login-form",children:Object(n.jsxs)("form",{onSubmit:y,className:"login-submit-form",children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h2",{children:"Sign In"}),Object(n.jsx)("button",{type:"button",onClick:function(){s(!1),f(!1)},id:"close-button",children:"X"})]}),Object(n.jsx)("label",{className:"email-label",children:Object(n.jsx)("b",{children:"Email: "})}),Object(n.jsx)("input",{value:j,onChange:function(e){b(e.target.value)},type:"email",placeholder:"Enter Email",required:!0}),Object(n.jsx)("label",{className:"password-label",children:Object(n.jsx)("b",{children:"Password: "})}),Object(n.jsxs)("div",{className:S?"pass-wrapper shake":"pass-wrapper",children:[Object(n.jsx)("input",{onChange:function(e){v(e.target.value)},value:g,minLength:"6",type:x?"text":"password",placeholder:"Enter Password",required:!0}),Object(n.jsx)("i",{className:x?"fa fa-eye-slash":"fa fa-eye",onClick:function(){f(!1===x)}})]}),S?Object(n.jsx)("p",{id:"show-validation-message",children:"The email or password you entered is incorrect. Please try again!"}):Object(n.jsx)("p",{id:"hide-validation-message",children:"The email or password you entered is incorrect. Please try again!"}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)("button",{className:"form-login-button",children:"Submit"})}),Object(n.jsx)("div",{children:Object(n.jsxs)("p",{className:"signup-link",children:["Not registered?\xa0",Object(n.jsx)("a",{href:"user/sigup",onClick:function(e){e.preventDefault(),s(!1),c(!0)},children:"Create Account"})]})})]})})})}),v=(s(50),function(e){var t=e.setShowSignupModal,s=e.setShowLoginModal,c=e.setIsAuthed,i=(e.isAuthed,e.setShowSignupMessageAlert),r=(e.showSignupMessageAlert,Object(a.useState)("")),d=Object(o.a)(r,2),j=d[0],b=d[1],p=Object(a.useState)(""),O=Object(o.a)(p,2),g=O[0],v=O[1],m=Object(a.useState)(!1),A=Object(o.a)(m,2),x=A[0],f=A[1],w=Object(a.useState)(!1),N=Object(o.a)(w,2),S=N[0],V=N[1],y=function(){var e=Object(u.a)(l.a.mark((function e(s){var n,a,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),n={email:j,password:g},e.prev=2,e.next=5,h.signup(n);case 5:a=e.sent,console.log("2323",a),!0===a.data.success&&(o=a.data.token,localStorage.setItem("token",o),t(!1),i(!0),c(!0)),setTimeout((function(){i(!1)}),2400),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0),V(!0),setTimeout((function(){V(!1)}),4e3);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"signup-container",children:Object(n.jsx)("div",{className:"signup-form",children:Object(n.jsxs)("form",{onSubmit:y,className:"signup-submit-form",children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h2",{children:"Register"}),Object(n.jsx)("button",{type:"button",onClick:function(){t(!1)},className:"close-button",children:"X"})]}),Object(n.jsx)("label",{className:"email-label",children:Object(n.jsx)("b",{children:"Enter Email: "})}),Object(n.jsx)("input",{onChange:function(e){b(e.target.value)},type:"email",placeholder:"Enter Email",required:!0}),Object(n.jsx)("label",{className:"password-label",children:Object(n.jsx)("b",{children:"Create Password: "})}),Object(n.jsxs)("div",{className:S?"pass-wrapper shake":"pass-wrapper",children:[Object(n.jsx)("input",{onChange:function(e){v(e.target.value)},type:x?"text":"password",placeholder:"Enter Password",required:!0}),Object(n.jsx)("i",{className:x?"fa fa-eye-slash":"fa fa-eye",onClick:function(){f(!1===x)}})]}),S?Object(n.jsx)("p",{id:"show-validation-message",children:"The email you entered already exists. Please try again!"}):Object(n.jsx)("p",{id:"hide-validation-message",children:"The email you entered already exists. Please try again!"}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)("button",{className:"form-signup-button",children:"Create Account"})}),Object(n.jsxs)("p",{className:"signin-link",children:["Already registered?\xa0",Object(n.jsx)("a",{href:"/user/login",onClick:function(e){e.preventDefault(),t(!1),s(!0)},children:"Login"})," "]})]})})})}),m=function(e){var t=e.setIsAuthed,s=e.isAuthed,c=e.setVideos,i=e.videos,r=e.setShowAlertMessage,l=e.showAlertMessage,d=e.setSelectedVideo,u=e.setShowSignupMessageAlert,j=e.showSignupMessageAlert,b=e.showDeletedMessageAlert,h=e.setShowVideoAddedMessageAlert,m=e.showVideoAddedMessageAlert,A=e.showVideoUpdatedMessageAlert,x=Object(a.useState)(!1),f=Object(o.a)(x,2),w=f[0],N=f[1],S=Object(a.useState)(!1),V=Object(o.a)(S,2),y=V[0],D=V[1],C=Object(a.useState)(!1),Y=Object(o.a)(C,2),B=Y[0],T=Y[1],M=Object(a.useState)(!1),k=Object(o.a)(M,2),R=k[0],U=k[1],I=function(){r(!1)};return Object(n.jsxs)("div",{className:"nav-container",children:[" ",!0===l&&!0===s?Object(n.jsxs)("div",{className:"show-alert signin-success",children:[Object(n.jsx)("span",{onClick:I,className:"closebtn",children:"\xd7"}),"Success! You are now logged in."]}):null,!0===l&&!1===s?Object(n.jsxs)("div",{className:"show-alert signout-success",children:[Object(n.jsx)("span",{onClick:I,className:"closebtn",children:"\xd7"}),"You are now logged out."]}):null,!0===j&&!0===s?Object(n.jsxs)("div",{className:"show-alert signup-success",children:[Object(n.jsx)("span",{onClick:I,className:"closebtn",children:"\xd7"}),"Success! Account has been created."]}):null,!0===b&&!0===s?Object(n.jsxs)("div",{className:"show-alert delete-success",children:[Object(n.jsx)("span",{onClick:I,className:"closebtn",children:"\xd7"}),"Video has been deleted!"]}):null,!0===m&&!0===s?Object(n.jsxs)("div",{className:"show-alert video-added-success",children:[Object(n.jsx)("span",{onClick:I,className:"closebtn",children:"\xd7"}),"Video has been added!"]}):null,!0===A&&!0===s?Object(n.jsxs)("div",{className:"show-alert video-updated-success",children:[Object(n.jsx)("span",{onClick:I,className:"closebtn",children:"\xd7"}),"Video has been updated!"]}):null,Object(n.jsxs)("nav",{className:"nav-wrap",children:[Object(n.jsx)("div",{id:"navbar-brand",children:Object(n.jsx)("a",{href:"/videos/list",children:Object(n.jsx)("img",{alt:"video library",src:"data:image/png;base64,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",width:"125 "})})}),Object(n.jsx)(O,{videos:i,setVideos:c,setSelectedVideo:d}),Object(n.jsx)("div",{className:"mobile-container",children:Object(n.jsxs)("div",{onClick:function(){U(!1===R)},className:R?"burger toggle":"burger",children:[Object(n.jsx)("div",{className:"line1"}),Object(n.jsx)("div",{className:"line2"}),Object(n.jsx)("div",{className:"line3"})]})}),Object(n.jsx)("div",{className:R?"nav-links nav-active":"nav-links",children:s?Object(n.jsxs)("div",{className:"button-container",children:[Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),localStorage.removeItem("token"),N(!1),U(!1),r(!0),t(!1),setTimeout((function(){r(!1)}),2400)},className:"signout-button",children:"Sign Out"}),Object(n.jsx)("button",{className:"insert-button",onClick:function(){var e=document.createElement("div");e.id="overlay",document.body.appendChild(e),d({}),U(!1),N(!0)},children:"Insert Video"})]}):Object(n.jsxs)("div",{className:"button-container",children:[Object(n.jsx)("button",{type:"button",onClick:function(){var e=document.createElement("div");e.id="overlay",document.body.appendChild(e),d({}),U(!1),D(!0)},className:"signin-button",children:"Sign In"}),Object(n.jsx)("button",{onClick:function(){d({}),U(!1),T(!0)},className:"signup-button",children:"REGISTER"})]})}),w?Object(n.jsx)("div",{className:"modal-container",children:Object(n.jsx)(p,{showModal:w,setShowModal:N,setVideos:c,videos:i,setShowVideoAddedMessageAlert:h,showVideoAddedMessageAlert:m})}):null,y?Object(n.jsx)("div",{className:"modal-container",children:Object(n.jsx)(g,{setIsAuthed:t,isAuthed:s,showLoginModal:y,setShowLoginModal:D,setShowSignupModal:T,showAlertMessage:l,setShowAlertMessage:r})}):null,B?Object(n.jsx)("div",{className:"modal-container",children:Object(n.jsx)(v,{showSignupModal:B,setShowSignupModal:T,setShowLoginModal:D,setIsAuthed:t,setShowSignupMessageAlert:u,showSignupMessageAlert:j})}):null]})]})},A=(s(51),s(52),function(e){var t=e.video,s=e.openVideoPopup,a=e.isFadingOut,c=new Date(t.releaseDate),i=c.getUTCMonth()+1,o=c.getUTCDate(),r=c.getUTCFullYear()+"-"+i+"-"+o;return Object(n.jsxs)("div",{className:a?"videoCard-fadeout":"videoCard",onClick:function(){return s(t._id,t.title,t.rating,t.releaseDate,t.synopsis,t.coverImage,t.type)},children:[Object(n.jsx)("img",{src:t.coverImage,className:"center",alt:"cover"}),Object(n.jsx)("h2",{className:"videoCard-title",children:t.title}),Object(n.jsxs)("p",{className:"videoCard-release-date",children:["Release Date: ",r]}),Object(n.jsx)("p",{}),Object(n.jsxs)("p",{className:"videoCard-synopsis",children:[" ",t.synopsis]}),Object(n.jsxs)("p",{className:"videoCard-stats",children:["Type: ",t.type,t.release_date," | ",Object(n.jsx)("i",{className:"fa fa-star"})," ",t.rating]})]})}),x=(s(53),function(e){var t=e.selectedVideo,s=e.setSelectedVideo,a=e.closeVideoPopup,c=e.isAuthed,i=e.setShowDeletedMessageAlert,o=e.videos,r=e.setVideos,d=(e.setIsFadingOut,e.IsFadingOut,e.setShowUpdateVideoModal),j=e.showUpdateVideoModal,b=new Date(t.releaseDate).getUTCFullYear();return Object(n.jsx)(n.Fragment,{children:!1===j?Object(n.jsxs)("section",{className:"popup",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("button",{onClick:a,className:"close-button",children:"X"})}),Object(n.jsx)("div",{id:"title",children:Object(n.jsxs)("h2",{children:[t.title," ",Object(n.jsxs)("span",{children:["(",b,")"]}),Object(n.jsxs)("p",{id:"type",children:["Type: ",t.type]}),Object(n.jsxs)("p",{id:"rating",children:["Rating: ",Object(n.jsx)("i",{className:"fa fa-star"})," ",t.rating]})]})}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{className:"synopsis",children:[Object(n.jsx)("img",{alt:t.title+"cover",src:t.coverImage}),Object(n.jsx)("p",{children:t.synopsis})]}),c?Object(n.jsxs)("div",{className:"popup-button-container",children:[Object(n.jsx)("button",{className:"update-button",onClick:function(){d(!0)},id:t.id,children:"Edit Video"}),Object(n.jsx)("button",{id:t.id,onClick:function(e){e.preventDefault();var t=e.currentTarget.id;try{(function(){var e=Object(u.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.deleteVideoById(t);case 2:n=e.sent,console.log("Delete Video Response",n),a=o.filter((function(e){return e._id!==t})),s({}),i(!0),setTimeout((function(){i(!1)}),2400),setTimeout((function(){r(a)}),2e3);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}catch(n){console.error(n)}},className:"delete-button",children:"Delete Video"})]}):null]})]}):null})}),f=s(8),w=s(10),N=(s(54),function(e){var t=e.setShowVideoUpdatedMessageAlert,s=e.setShowUpdateVideoModal,c=e.selectedVideo,i=e.setSelectedVideo,r=e.setVideos;function d(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAllVideos();case 2:return t=e.sent,r(t.data.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=Object(a.useState)(c),p=Object(o.a)(b,2),O=p[0],g=p[1],v=new Date(O.releaseDate),m=v.getFullYear(),A=v.getMonth()+1,x=v.getDate();x<10&&(x="0"+x),A<10&&(A="0"+A);var N=m+"-"+A+"-"+x,S=function(e){var t=e.target,s=t.name,n=t.value;g(Object(w.a)(Object(w.a)({},O),{},Object(f.a)({},s,n)))},V=function(){var e=Object(u.a)(l.a.mark((function e(n){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={title:O.title,rating:O.rating,releaseDate:O.releaseDate,synopsis:O.synopsis,coverImage:O.coverImage,type:O.type},c=O.id,e.prev=3,e.next=6,h.updateVideoById(c,a);case 6:t(!0),setTimeout((function(){t(!1)}),2400),s(!1),i(O),d(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"update-video-container",children:Object(n.jsx)("div",{className:"update-video-form",children:Object(n.jsxs)("form",{onSubmit:V,children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h2",{children:"Edit Video"}),Object(n.jsx)("button",{type:"button",onClick:function(){s(!1),i({})},className:"close-button",children:"X"})]}),Object(n.jsx)("label",{className:"title-label",children:Object(n.jsx)("b",{children:"Title: "})}),Object(n.jsx)("input",{onChange:S,value:O.title,type:"text",name:"title",required:!0}),Object(n.jsx)("label",{className:"releaseDate-label",children:Object(n.jsx)("b",{children:"Release Date: "})}),Object(n.jsx)("input",{onChange:S,value:N,name:"date",type:"date",placeholder:"YYYY/MM/DD",required:!0}),Object(n.jsx)("label",{className:"type-label",children:Object(n.jsx)("b",{children:"Type: "})}),Object(n.jsxs)("select",{className:"video-type-list",onChange:S,name:"type",value:O.type,children:[Object(n.jsx)("option",{disabled:!0,hidden:!0,value:""}),Object(n.jsx)("option",{value:"Movie",children:"Movie"}),Object(n.jsx)("option",{value:"TV Show",children:"TV Show"}),Object(n.jsx)("option",{value:"Documentary",children:"Documentary"}),Object(n.jsx)("option",{value:"Animation",children:"Animation"})]}),Object(n.jsx)("label",{className:"rating-label",children:Object(n.jsx)("b",{children:"Rating 1-10: "})}),Object(n.jsx)("input",{onChange:S,value:O.rating,name:"rating",type:"number",min:"1",max:"10",placeholder:"Enter Rating",required:!0}),Object(n.jsx)("label",{className:"coverImage-label",children:Object(n.jsx)("b",{children:"Cover Image URL: "})}),Object(n.jsx)("input",{onChange:S,value:O.coverImage,type:"url",placeholder:"Enter Cover Image URL",required:!0}),Object(n.jsx)("label",{className:"synopsis-label",children:Object(n.jsx)("b",{children:"Synopsis: "})}),Object(n.jsx)("textarea",{className:"synopsis-input",onChange:S,value:O.synopsis,name:"synopsis",rows:5,cols:5,placeholder:"Enter Synopsis",required:!0}),Object(n.jsxs)("div",{className:"button-container",children:[Object(n.jsx)("button",{className:"form-update-video-update-button",children:"Update"}),Object(n.jsx)("button",{onClick:function(){s(!1),i({})},className:"form-update-video-cancel-button",children:"Cancel"})]})]})})})}),S=function(e){var t=e.isAuthed,s=e.setVideos,c=e.videos,i=e.selectedVideo,r=e.setSelectedVideo,d=e.setShowDeletedMessageAlert,j=e.ShowDeletedMessageAlert,b=e.setShowVideoUpdatedMessageAlert,p=e.setShowUpdateVideoModal,O=e.showUpdateVideoModal,g=Object(a.useState)(!1),v=Object(o.a)(g,2),m=v[0],f=v[1];Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getAllVideos();case 2:return t=e.sent,s(t.data.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]);var w=function(e,t,s,n,a,c,i){r({id:e,title:t,rating:s,releaseDate:n,synopsis:a,coverImage:c,type:i})};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"video-results",children:c.map((function(e){return Object(n.jsx)(A,{openVideoPopup:w,isAuthed:t,video:e,videos:c,setVideos:s,isFadingOut:m},e._id)}))}),"undefined"!=typeof i.title?Object(n.jsx)(x,{selectedVideo:i,closeVideoPopup:function(){r({})},isAuthed:t,setVideos:s,videos:c,setSelectedVideo:r,setShowDeletedMessageAlert:d,ShowDeletedMessageAlert:j,setIsFadingOut:f,isFadingOut:m,setShowUpdateVideoModal:p,showUpdateVideoModal:O}):null,O?Object(n.jsx)("div",{className:"modal-container",children:Object(n.jsx)(N,{setVideos:s,videos:c,selectedVideo:i,setSelectedVideo:r,setShowUpdateVideoModal:p,setShowVideoUpdatedMessageAlert:b})}):null]})};var V=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1],i=Object(a.useState)([]),r=Object(o.a)(i,2),l=r[0],d=r[1],u=Object(a.useState)([]),j=Object(o.a)(u,2),b=j[0],h=j[1],p=Object(a.useState)(!1),O=Object(o.a)(p,2),g=O[0],v=O[1],A=Object(a.useState)(!1),x=Object(o.a)(A,2),f=x[0],w=x[1],N=Object(a.useState)(!1),V=Object(o.a)(N,2),y=V[0],D=V[1],C=Object(a.useState)(!1),Y=Object(o.a)(C,2),B=Y[0],T=Y[1],M=Object(a.useState)(!1),k=Object(o.a)(M,2),R=k[0],U=k[1],I=Object(a.useState)(!1),L=Object(o.a)(I,2),q=L[0],P=L[1];return Object(a.useEffect)((function(){localStorage.getItem("token")&&c(!0)}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{isAuthed:s,setIsAuthed:c,videos:l,setVideos:d,showAlertMessage:f,setShowAlertMessage:w,setSelectedVideo:h,showSignupMessageAlert:y,setShowSignupMessageAlert:D,setShowDeletedMessageAlert:T,showDeletedMessageAlert:B,setShowVideoAddedMessageAlert:P,showVideoAddedMessageAlert:q,showVideoUpdatedMessageAlert:R,setShowVideoUpdatedMessageAlert:U,setShowUpdateVideoModal:v,showUpdateVideoModal:g}),Object(n.jsx)(S,{isAuthed:s,setIsAuthed:c,videos:l,setVideos:d,selectedVideo:b,setSelectedVideo:h,setShowDeletedMessageAlert:T,showDeletedMessageAlert:B,showVideoUpdatedMessageAlert:R,setShowVideoUpdatedMessageAlert:U,setShowUpdateVideoModal:v,showUpdateVideoModal:g})]})};i.a.render(Object(n.jsx)(V,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.595461ae.chunk.js.map