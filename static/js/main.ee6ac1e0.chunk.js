(this["webpackJsonpsundara-frontend"]=this["webpackJsonpsundara-frontend"]||[]).push([[0],{49:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),i=a.n(o),l=a(14),c=a(15),s=a(18),u=a(19),m=(a(23),a(69)),d=a(68),h=a(39),p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).responseGoogle=function(e){console.log(e)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{bg:"dark",variant:"dark"},r.a.createElement(m.a.Brand,{href:"/"},"Sundara"),r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(d.a.Link,{href:"/#/"},"Home")),r.a.createElement(d.a,{className:"mr-auto"},r.a.createElement(d.a.Link,{href:"/#/privacy"},"Privacy")),r.a.createElement(m.a.Collapse,{className:"justify-content-end"},r.a.createElement(m.a.Text,null,r.a.createElement(h.GoogleLogin,{clientId:"4672322705-3o7hifd831mjo6qdj6mhm4qqtt9snh2p.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin",style:{display:"inline",height:"1vh"}}))))}}]),a}(n.Component),y=a(63),f=a(64),b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(y.a,{style:{backgroundImage:"url(https://images.unsplash.com/photo-1523308413200-8ab4ef0f1e0d)",height:"40vh",backgroundSize:"cover",borderRadius:0}},r.a.createElement(f.a,{style:{color:"#ffffff"}},r.a.createElement("h1",null,"Determine your future"),r.a.createElement("p",null,"Use the power of astrology and numerology to determine the best times to start a new task. ",r.a.createElement("br",null),"Get started today for a brighter future!")))}}]),a}(n.Component),g=a(6),E=a.n(g),v=a(13),w=a(24),k=a(45),T=a(65),x=a(71),W=a(72),O=a(66),S=a(67),C=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).createFavoriteCities=Object(v.a)(E.a.mark((function e(){var t,a,o,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=["New York City","Chicago","Houston","Los Angeles","San Diego","City of London","New Dehli"],a=[],o=function(e){var o=t[e];a.push(r.a.createElement(k.a,{key:o,value:o,onClick:function(){n.setState({city:o}),n.onFieldChange(o)}},o))},i=0;i<t.length;i++)o(i);return n.state.favCities=a,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)}))),n.createGroup=function(){var e=Object(v.a)(E.a.mark((function e(t){var a,o,i,l,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({Times:[],DayRank:[],Header:[],CityString:[],NextGoodDay:[]}),a=[],o=[],i="sundara-api.devksingh.com",l=(new Date).toLocaleDateString("en-GB"),c="",e.next=8,fetch("https://".concat(i,"/api/getCityCode?city=").concat(t)).then(function(){var e=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t.json(),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then(function(){var e=Object(v.a)(E.a.mark((function e(t){var s;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.id,c="".concat(t.city,", ").concat(t.state," (").concat(t.country,")"),e.next=4,fetch("https://".concat(i,"/api/getTimes?citycode=").concat(s,"&date=").concat(l)).then(function(){var e=Object(v.a)(E.a.mark((function e(t){var l,u,m,d,h,p,y,f;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:t=e.sent,o.push(r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Good Time Start"),r.a.createElement("th",null,"Good Time End")))),l=0;case 5:if(!(l<t.goodTimes.length)){e.next=12;break}if(t.goodTimes[l][0]!==t.goodTimes[l][1]){e.next=8;break}return e.abrupt("continue",9);case 8:a.push(r.a.createElement("tr",{key:l},r.a.createElement("td",null,t.goodTimes[l][0]),r.a.createElement("td",null,t.goodTimes[l][1])));case 9:l++,e.next=5;break;case 12:if(u="",u="Good"===t.dayRanking?r.a.createElement("h2",{style:{color:"green"}},"Today is a Good day ",r.a.createElement("span",{role:"img","aria-label":"happy"},"\ud83d\ude0a")):"Bad"===t.dayRanking?r.a.createElement("h2",{style:{color:"red"}},"Today is a Bad day ",r.a.createElement("span",{role:"img","aria-label":"sad"},"\ud83d\ude1e")):r.a.createElement("h2",null,"Today is an OK day."),"Good"===t.dayRanking){e.next=28;break}m=t.dayRanking,d=new Date,h="",p=0;case 19:return d.setDate(d.getDate()+p),h=d.toLocaleDateString("en-GB"),e.next=23,fetch("https://".concat(i,"/api/getTimes?citycode=").concat(s,"&date=").concat(h)).then(function(){var e=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:t=e.sent,m=t.dayRanking;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 23:p+=1;case 24:if("Good"!==m){e.next=19;break}case 25:y=new Date(h).toDateString(),f=r.a.createElement("h4",null,r.a.createElement("i",null,"Next good day is: ",y,".")),n.setState({NextGoodDay:f});case 28:n.setState({Times:a,DayRank:u,Header:o,CityString:r.a.createElement("i",null,c)});case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(){""!==n.state.city?n.setState({Times:[],DayRank:r.a.createElement("h2",{style:{color:"red"}},"City not found"),Header:[],CityString:[]}):n.setState({Times:[],DayRank:r.a.createElement("h2",null,"Please enter a city"),Header:[],CityString:[]})}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.doTheThing=function(){var e=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.createGroup(t);case 2:n.setState({loading:!1});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onFieldChange=function(){var e=Object(v.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.setState({loading:!0,city:t});case 2:return e.next=4,clearTimeout(n.typingTimeout);case 4:n.typingTimeout=setTimeout((function(){n.doTheThing(t)}),550);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={loading:!1,city:"",favCities:[]},n.typingTimeout=null,n.onFieldChange=n.onFieldChange.bind(Object(w.a)(n)),n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.createFavoriteCities(),r.a.createElement(f.a,null,r.a.createElement(T.a,{className:"mb-3"},r.a.createElement(T.a.Prepend,null,r.a.createElement(T.a.Text,{id:"basic-addon3"},"City")),r.a.createElement(x.a,{onChange:function(t){console.log(t.target.value),e.onFieldChange(t.target.value)},id:"geocoderid",value:this.state.city,"aria-describedby":"basic-addon3"})),r.a.createElement("i",null,"Or choose from some common cities"),r.a.createElement("br",null),r.a.createElement(W.a,{type:"radio",name:"options"},this.state.favCities),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{"aria-label":"Times list",key:"opts"},this.state.loading?r.a.createElement(O.a,{animation:"border"}):r.a.createElement("div",null,this.state.DayRank,this.state.NextGoodDay,this.state.CityString,r.a.createElement("br",null),r.a.createElement(S.a,{striped:!0,bordered:!0,hover:!0},this.state.Header,r.a.createElement("tbody",null,this.state.Times))),this.state.loading?r.a.createElement("span",null):r.a.createElement("hr",null)))}}]),a}(n.Component);var j=function(){return r.a.createElement("div",{className:"Home"},r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(C,null))};var D=a(70),G=a(73),I=a(46),L=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).responseGoogle=function(e){console.log(e)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement(f.a,null,r.a.createElement("br",null),r.a.createElement("h1",{style:{textAlign:"center"}},"Sundara Privacy Policy"),r.a.createElement("p",{style:{textAlign:"center"}},"Last Updated August 8, 2020"),"Thank you for choosing to be part of our community at Dev Singh (\u201cCompany\u201d, \u201cwe\u201d, \u201cus\u201d, or \u201cour\u201d). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at dev@devksingh.com. ",r.a.createElement("br",null)," ",r.a.createElement("br",null),'When you visit our website https://sundara.devksingh.com (the "Website"), and more generally, use any of our services (the "Services", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately. ',r.a.createElement("br",null)," ",r.a.createElement("br",null),"This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as any related services, sales, marketing or events. ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"Please read this privacy notice carefully as it will help you understand what we do with the information that we collect. ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(D.a,null,r.a.createElement(G.a,null,r.a.createElement(G.a.Header,null,r.a.createElement(D.a.Toggle,{as:I.a,variant:"link",eventKey:"0"},"What information do we collect?")),r.a.createElement(D.a.Collapse,{eventKey:"0"},r.a.createElement(G.a.Body,null,r.a.createElement("i",null,"In Short:  We collect information that you provide to us.")," ",r.a.createElement("br",null),r.a.createElement("br",null),"We collect personal information that you voluntarily provide to us when you register on the Website, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website or otherwise when you contact us. ",r.a.createElement("br",null),r.a.createElement("br",null),"The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following: ",r.a.createElement("br",null),r.a.createElement("br",null),"Personal Information Provided by You. We collect names; email addresses; contact preferences; contact or authentication data; and other similar information. ",r.a.createElement("br",null),r.a.createElement("br",null),"Payment Data. We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy notice link(s) here: https://stripe.com/privacy. ",r.a.createElement("br",null),r.a.createElement("br",null),'Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS" below. ',r.a.createElement("br",null),r.a.createElement("br",null),"All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information. ",r.a.createElement("br",null),r.a.createElement("br",null)))),r.a.createElement(G.a,null,r.a.createElement(G.a.Header,null,r.a.createElement(D.a.Toggle,{as:I.a,variant:"link",eventKey:"1"},"How do we use your information?")),r.a.createElement(D.a.Collapse,{eventKey:"1"},r.a.createElement(G.a.Body,null,r.a.createElement("i",null,"In Short:  We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. ")," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"We use personal information collected via our Website for a variety of business purposes described below. ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"We indicate the specific processing grounds we rely on next to each purpose listed below. We use the information we collect or receive:",r.a.createElement(f.a,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"To facilitate account creation and logon process."),' If you choose to link your account with us to a third-party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract. See the section below headed "HOW DO WE HANDLE YOUR SOCIAL LOGINS" for further information.'),r.a.createElement("li",null,r.a.createElement("b",null,"To post testimonials.")," We post testimonials on our Website that may contain personal information. Prior to posting a testimonial, we will obtain your consent to use your name and the consent of the testimonial. If you wish to update, or delete your testimonial, please contact us at dev@devksingh.com and be sure to include your name, testimonial location, and contact information."),r.a.createElement("li",null,r.a.createElement("b",null,"Request feedback.")," We may use your information to request feedback and to contact you about your use of our Website."),r.a.createElement("li",null,r.a.createElement("b",null,"To enable user-to-user communications.")," We may use your information in order to enable user-to-user communications with each user's consent."),r.a.createElement("li",null,r.a.createElement("b",null,"To manage user accounts.")," We may use your information for the purposes of managing our account and keeping it in working order."),r.a.createElement("li",null,r.a.createElement("b",null,"To send administrative information to you.")," We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies."),r.a.createElement("li",null,r.a.createElement("b",null,"To protect our Services. "),"We may use your information as part of our efforts to keep our Website safe and secure (for example, for fraud monitoring and prevention)."),r.a.createElement("li",null,"To enforce our terms, conditions and policies for business purposes, to comply with legal and regulatory requirements or in connection with our contract."),r.a.createElement("li",null,r.a.createElement("b",null,"To respond to legal requests and prevent harm."),"If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond."),r.a.createElement("li",null,r.a.createElement("b",null,"For other business purposes.")," We may use your information for other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Website, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.")))))))))}}]),a}(n.Component),H=a(48),N=a(5);i.a.render(r.a.createElement(H.a,null,r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:j}),r.a.createElement(N.a,{path:"/privacy",component:L}))),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.ee6ac1e0.chunk.js.map