"use strict";(self.webpackChunklearning_react=self.webpackChunklearning_react||[]).push([[938],{7603:function(t,n,r){r.d(n,{Gr:function(){return f},II:function(){return h},gx:function(){return p}});var e=r(1413),s=r(5987),i=(r(2791),r(6139)),o=r(1964),u=r(184),a=["input","meta"],c=["input","meta","child"],l=["input","meta","child"],d=function(t){t.input;var n=t.meta,r=n.touched,e=n.error,i=(0,s.Z)(t,a),c=r&&e;return(0,u.jsxs)("div",{className:o.Z.formControl+" "+(c?o.Z.error:""),children:[(0,u.jsx)("div",{children:i.children}),c&&(0,u.jsx)("span",{children:e})]})},p=function(t){var n=t.input,r=(t.meta,t.child,(0,s.Z)(t,c));return(0,u.jsx)(d,(0,e.Z)((0,e.Z)({},t),{},{children:(0,u.jsx)("textarea",(0,e.Z)((0,e.Z)({},n),r))}))},h=function(t){var n=t.input,r=(t.meta,t.child,(0,s.Z)(t,l));return(0,u.jsx)(d,(0,e.Z)((0,e.Z)({},t),{},{children:(0,u.jsx)("input",(0,e.Z)((0,e.Z)({},n),r))}))},f=function(t,n,r,s){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,u.jsxs)("div",{children:[(0,u.jsx)(i.Z,(0,e.Z)({placeholder:t,name:n,component:r,validate:s},o)),a]})}},2938:function(t,n,r){r.r(n),r.d(n,{default:function(){return D}});var e=r(1413),s=r(5671),i=r(3144),o=r(136),u=r(516),a=(r(1044),r(2791)),c=r(8687),l=r(3389),d=r(6139),p=r(704),h="myPosts_postsBlock__6yHQW",f="myPosts_posts__n0EP6",x="Post_item__+BfJ0",m=r(184),j=function(t){var n=t.message,r=t.likeCount;return(0,m.jsxs)("div",{className:x,children:[(0,m.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V-L3LM3amOt_N_OOkG1GLRkb5r6HnW8QoA&usqp=CAU"}),n,(0,m.jsxs)("div",{children:[(0,m.jsx)("span",{children:"like: "}),r]})]})},v=r(5304),g=r(7603),Z=(0,v.D)(10),b=(0,p.Z)({form:"profileAddNewPostForm"})((function(t){return(0,m.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,m.jsx)("div",{children:(0,m.jsx)(d.Z,{component:g.gx,name:"newPostText",validate:[v.C,Z],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430"})}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"Add post"})})]})})),_=a.memo((function(t){var n=t.posts.map((function(t){var n=t.message,r=t.likesCount,e=t.id;return(0,m.jsx)(j,{message:n,likeCount:r},e)}));return(0,m.jsxs)("div",{className:h,children:[(0,m.jsx)("h3",{children:"My posts"}),(0,m.jsx)("div",{children:(0,m.jsx)(b,{onSubmit:function(n){t.addPost(n.newPostText)}})}),(0,m.jsx)("div",{className:f,children:n})]})})),k=(0,c.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(n){t((0,l.WA)(n))}}}))(_),P=r(4349),C="ProfileInfo_descriptionBlock__9hHtn",y=r(885),S=function(t){var n=(0,a.useState)(!1),r=(0,y.Z)(n,2),e=r[0],s=r[1],i=(0,a.useState)(t.status),o=(0,y.Z)(i,2),u=o[0],c=o[1];(0,a.useEffect)((function(){c(t.status)}),[t.status]);return(0,m.jsxs)("div",{children:[!e&&(0,m.jsx)("div",{children:(0,m.jsx)("span",{onDoubleClick:function(){s(!0)},children:t.status||"\u0421\u0442\u0430\u0442\u0443\u0441\u0430 \u043d\u0435\u0442"})}),e&&(0,m.jsx)("div",{children:(0,m.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),t.updateStatus(u)},value:u})})]})},A=function(t){var n=t.profile,r=t.status,e=t.updateStatus;return n?(0,m.jsx)("div",{children:(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("img",{src:n.photos.large}),(0,m.jsx)("h2",{children:n.fullName}),(0,m.jsx)(S,{status:r,updateStatus:e}),(0,m.jsx)("h3",{children:n.aboutMe}),(0,m.jsxs)("p",{children:["\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b: ",n.lookingForAJob?"\u0434\u0430":"\u043d\u0435\u0442"]}),(0,m.jsx)("h3",{children:"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),(0,m.jsxs)("p",{children:["facebook: ",n.contacts.facebook?n.contacts.facebook:"\u043d\u0435\u0442"]}),(0,m.jsxs)("p",{children:["website: ",n.contacts.website?n.contacts.website:"\u043d\u0435\u0442"]}),(0,m.jsxs)("p",{children:["vk: ",n.contacts.vk?n.contacts.vk:"\u043d\u0435\u0442"]}),(0,m.jsxs)("p",{children:["youtube: ",n.contacts.youtube?n.contacts.youtube:"\u043d\u0435\u0442"]}),(0,m.jsxs)("p",{children:["github: ",n.contacts.github?n.contacts.github:"\u043d\u0435\u0442"]})]})}):(0,m.jsx)(P.Z,{})},w=function(t){return(0,m.jsxs)("div",{children:[(0,m.jsx)(A,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,m.jsx)(k,{})]})},N=(r(1548),r(7689)),F=r(7781),I=function(t){(0,o.Z)(r,t);var n=(0,u.Z)(r);function r(){return(0,s.Z)(this,r),n.apply(this,arguments)}return(0,i.Z)(r,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=this.props.authirizedUserId),t||this.props.router.navigate("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidUpdate",value:function(t){var n=this.props.router.params.userId;if(t.router.params.userId!==n){var r=26794;0,this.props.getMeProfile(r),this.props.getStatus(r)}}},{key:"render",value:function(){return(0,m.jsx)(w,(0,e.Z)((0,e.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),r}(a.Component),D=(0,F.qC)((0,c.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authirizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getUserProfile:l.et,getMeProfile:l.wy,getStatus:l.lR,updateStatus:l.Nf}),(function(t){return function(n){var r=(0,N.s0)(),s=(0,N.UO)();return(0,m.jsx)(t,(0,e.Z)((0,e.Z)({},n),{},{router:{params:s,navigate:r}}))}}))(I)},1548:function(t,n,r){r.d(n,{D:function(){return h}});var e=r(1413),s=r(5671),i=r(3144),o=r(136),u=r(516),a=r(2791),c=r(7689),l=r(8687),d=r(184),p=function(t){return{isAuth:t.auth.isAuth}},h=function(t){var n=function(n){(0,o.Z)(a,n);var r=(0,u.Z)(a);function a(){return(0,s.Z)(this,a),r.apply(this,arguments)}return(0,i.Z)(a,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(t,(0,e.Z)({},this.props)):(0,d.jsx)(c.Fg,{to:"/login"})}}]),a}(a.Component);return(0,l.$j)(p)(n)}},5304:function(t,n,r){r.d(n,{C:function(){return e},D:function(){return s}});var e=function(t){if(!t)return"Field is required"},s=function(t){return function(n){if(n.length>t)return"Max lengths is ".concat(t," symbols")}}},1964:function(t,n){n.Z={formControl:"FormsControls_formControl__VZufH",error:"FormsControls_error__VE14A",formSummaryError:"FormsControls_formSummaryError__Y-xFD"}}}]);
//# sourceMappingURL=938.59a2a6cc.chunk.js.map