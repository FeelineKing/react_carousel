(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(8),r=n.n(s),l=(n(15),n(9)),o=n(1),c=n(2),u=n(3),g=n(5),m=n(4),p=n(6),h=(n(16),["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]),f=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(g.a)(this,Object(m.a)(t).call(this,e))).lengthChange=function(e){e.preventDefault(),n.setState({frameLength:e.target.value}),n.props.changer("frameLength",e.target.value)},n.stepChange=function(e){e.preventDefault(),n.setState({step:e.target.value}),n.props.changer("step",e.target.value)},n.speedChange=function(e){e.preventDefault(),n.setState({speed:e.target.value}),n.props.changer("speed",e.target.value)},n.imgSizeChange=function(e){e.preventDefault(),n.setState({imgSize:e.target.value}),n.props.changer("imgSize",e.target.value)},n.finiteChange=function(e){n.setState({finite:e.target.checked}),n.props.changer("finite",e.target.checked)},n.state={imgSize:100,step:3,frameLength:3,speed:1e3,finite:!1},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("form",{className:"carousel__settings settings",method:"POST",action:"#"},a.a.createElement("label",{className:"settings__label"},"Select slider length:",a.a.createElement("select",{className:"settings__select",value:this.state.frameLength,onChange:this.lengthChange},h.map(function(e,t){return a.a.createElement("option",{key:e,value:t+1},t+1)})),"Slider length is"," ",this.state.frameLength," ","now"),a.a.createElement("label",{className:"settings__label"},"Select slider step:",a.a.createElement("select",{className:"settings__select",value:this.state.step,onChange:this.stepChange},h.map(function(t,n){return n<e.state.frameLength?a.a.createElement("option",{key:t,value:n+1},n+1):null})),"Slider step is"," ",this.state.step," ","now"),a.a.createElement("label",{className:"settings__label"},"Select slider speed:",a.a.createElement("input",{className:"settings__input",type:"range",min:"1000",max:"2000",step:"100",value:this.state.speed,onChange:this.speedChange}),"Slider speed is"," ",this.state.speed," ","now"),a.a.createElement("label",{className:"settings__label"},a.a.createElement("span",null,"Select images size:"),a.a.createElement("input",{className:"settings__input",type:"range",min:"80",max:"260",step:"10",value:this.state.imgSize,onChange:this.imgSizeChange}),a.a.createElement("span",null,"Images size is",this.state.imgSize," ","now")),a.a.createElement("label",{className:"settings__label settings__label_check"},a.a.createElement("span",null,"Is finite?"),a.a.createElement("input",{className:"settings__input settings__input_check",type:"checkbox",onChange:this.finiteChange})))}}]),t}(i.Component)),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(g.a)(this,Object(m.a)(t).call(this,e))).updateState=function(){n.setState(function(e){return n.counter=0,n.booster=n.state.listPosition/10,e.frameLength>5?{imgArr:[].concat(Object(o.a)(h),Object(o.a)(h)),finishPosition:e.imgSize*(2*e.amount-e.frameLength),listPosition:0}:{imgArr:h,finishPosition:e.imgSize*(e.amount-e.frameLength),listPosition:0}})},n.changer=function(e,t){n.setState(Object(l.a)({},e,t)),n.updateState()},n.createList=function(){return a.a.createElement("ul",{className:"carousel__list",style:{left:"".concat(-n.state.listPosition,"px")}},n.state.imgArr.map(function(e,t){return a.a.createElement("li",{className:"carousel__item",style:{width:"".concat(n.state.imgSize,"px")}},a.a.createElement("img",{src:e,alt:t+1}))}))},n.slideRight=function(){var e=setInterval(function(){n.setState(function(t){if(t.listPosition===t.finishPosition){if(!0===n.state.finite)return clearInterval(e),n.booster=0,n.counter=0,{listPosition:t.finishPosition};var i=Object(o.a)(t.imgArr);return i.push.apply(i,Object(o.a)(i.filter(function(e,n){return n<t.step}))),i.splice(0,t.step),{imgArr:i,listPosition:t.listPosition-t.imgSize*t.step}}if(n.booster%(t.imgSize/10*t.step)!==0||0===n.counter)return n.counter++,n.booster++,{listPosition:t.listPosition+=10};clearInterval(e),n.counter=0})},10-(n.state.speed-1e3)/100)},n.slideLeft=function(){var e=setInterval(function(){n.setState(function(t){if(0===t.listPosition){if(!0===n.state.finite)return clearInterval(e),n.booster=0,n.counter=0,{listPosition:0};var i=Object(o.a)(t.imgArr);return i.unshift.apply(i,Object(o.a)(i.filter(function(e,n){return n+1>i.length-t.step}))),i.splice(i.length-t.step,t.step),{imgArr:i,listPosition:t.listPosition+t.imgSize*t.step}}if(n.booster%(t.imgSize/10*t.step)!==0||0===n.counter)return n.counter++,n.booster++,{listPosition:t.listPosition-=10};clearInterval(e),n.counter=0})},10-(n.state.speed-1e3)/100)},n.state={amount:h.length,imgSize:100,step:3,frameLength:3,speed:1e3,listPosition:0,imgArr:h,finite:!1},n.counter=0,n.booster=n.state.listPosition/10,n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState(function(e){return e.frameLength>5?{imgArr:[].concat(Object(o.a)(h),Object(o.a)(h)),finishPosition:e.imgSize*(2*e.amount-e.frameLength)}:{finishPosition:e.imgSize*(e.amount-e.frameLength)}})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"carousel"},a.a.createElement("button",{type:"button",className:"carousel__button carousel__button_prev",onClick:this.slideLeft}),a.a.createElement("div",{className:"carousel__slide-wrapper",style:{width:"".concat(this.state.imgSize*this.state.frameLength,"px"),height:"".concat(this.state.imgSize,"px")}},this.createList()),a.a.createElement("button",{type:"button",className:"carousel__button carousel__button_next",onClick:this.slideRight})),a.a.createElement(f,{changer:this.changer}))}}]),t}(i.Component),_=function(){return a.a.createElement(b,null)};r.a.render(a.a.createElement(_,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.472ac087.chunk.js.map