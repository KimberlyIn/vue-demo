(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7893"],{"76db":function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),o={class:"container"},n={class:"mt-4"},r={class:"table align-middle"},s=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",null,"圖片"),Object(a["createVNode"])("th",null,"商品名稱"),Object(a["createVNode"])("th",null,"價格"),Object(a["createVNode"])("th",null,"功能")])],-1),l={style:{width:"200px"}},d={href:"#",class:"text-dark"},i={key:0,class:"h5"},u={key:1,class:"h6"},b={key:2,class:"h5"},p={class:"btn-group btn-group-sm"},m={key:0,class:"spinner-border spinner-grow-sm"},j=Object(a["createTextVNode"])(" 查看更多 "),O={key:0,class:"spinner-border spinner-grow-sm"},h=Object(a["createTextVNode"])(" 加到購物車 "),V={class:"text-end"},g={class:"table align-middle"},f=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th"),Object(a["createVNode"])("th",null,"品名"),Object(a["createVNode"])("th",{style:{width:"110px"}},"數量"),Object(a["createVNode"])("th",null,"單價")])],-1),N=Object(a["createVNode"])("i",{class:"bi bi-x"},null,-1),v={key:0,class:"text-success"},k={class:"input-group input-group-sm"},y={class:"input-group-text"},C={class:"text-end"},x={key:0,class:"text-success"},B=Object(a["createVNode"])("td",{colspan:"3",class:"text-end"},"總計",-1),L={class:"text-end"},$={key:0},S=Object(a["createVNode"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),w={class:"text-end text-success"},_={class:"input-group mb-3 input-group-sm"},I={class:"input-group-append"},D={class:"my-5 row justify-content-center"},M={class:"mb-3"},q=Object(a["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),T={class:"mb-3"},U=Object(a["createVNode"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),F={class:"mb-3"},P=Object(a["createVNode"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),A={class:"mb-3"},E=Object(a["createVNode"])("label",{for:"address",class:"form-label"},"收件人地址",-1),z={class:"mb-3"},J=Object(a["createVNode"])("label",{for:"message",class:"form-label"},"留言",-1),G=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{class:"btn btn-danger"},"送出訂單")],-1);function H(e,t,c,H,K,Q){var R=Object(a["resolveComponent"])("Loading"),W=Object(a["resolveComponent"])("Field"),X=Object(a["resolveComponent"])("ErrorMessage"),Y=Object(a["resolveComponent"])("Form");return Object(a["openBlock"])(),Object(a["createBlock"])("div",o,[Object(a["createVNode"])(R,{active:K.isLoading,"z-index":1060},null,8,["active"]),Object(a["createVNode"])("div",n,[Object(a["createVNode"])("table",r,[s,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(K.products,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id},[Object(a["createVNode"])("td",l,[Object(a["createVNode"])("div",{style:[{height:"100px","background-size":"cover","background-position":"center"},{backgroundImage:"url(".concat(e.imageUrl,")")}]},null,4)]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("a",d,Object(a["toDisplayString"])(e.title),1)]),Object(a["createVNode"])("td",null,[e.price?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])("div",i,Object(a["toDisplayString"])(e.origin_price)+" 元 ",1)),e.price?(Object(a["openBlock"])(),Object(a["createBlock"])("del",u,"原價 "+Object(a["toDisplayString"])(e.origin_price)+" 元",1)):Object(a["createCommentVNode"])("",!0),e.price?(Object(a["openBlock"])(),Object(a["createBlock"])("div",b," 現在只要 "+Object(a["toDisplayString"])(e.price)+" 元 ",1)):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",p,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary",disabled:K.status.loadingItem===e.id||!e.is_enabled,onClick:function(t){return Q.getProduct(e.id)}},[K.status.loadingItem===e.id?(Object(a["openBlock"])(),Object(a["createBlock"])("span",m)):Object(a["createCommentVNode"])("",!0),j],8,["disabled","onClick"]),Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(t){return Q.addToCart(e.id)},disabled:K.status.loadingItem===e.id||!e.is_enabled},[K.status.loadingItem===e.id?(Object(a["openBlock"])(),Object(a["createBlock"])("span",O)):Object(a["createCommentVNode"])("",!0),h],8,["onClick","disabled"])])])])})),128))])]),Object(a["createVNode"])("div",V,[Object(a["createVNode"])("button",{class:"btn btn-outline-danger",type:"button",onClick:t[1]||(t[1]=function(){return Q.deleteAllCarts&&Q.deleteAllCarts.apply(Q,arguments)})}," 清空購物車 ")]),Object(a["createVNode"])("table",g,[f,Object(a["createVNode"])("tbody",null,[K.cart.carts?(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],{key:0},Object(a["renderList"])(K.cart.carts,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t.id},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:K.status.loadingItem===t.id,onClick:function(e){return Q.removeCartItem(t.id)}},[N],8,["disabled","onClick"])]),Object(a["createVNode"])("td",null,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.product.title)+" ",1),t.coupon?(Object(a["openBlock"])(),Object(a["createBlock"])("div",v,"已套用優惠券")):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("div",k,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":function(e){return t.qty=e},onBlur:function(e){return Q.updateCart(t)}},null,40,["onUpdate:modelValue","onBlur"]),[[a["vModelText"],t.qty,void 0,{number:!0}]]),Object(a["createVNode"])("div",y,"/ "+Object(a["toDisplayString"])(t.product.unit),1)])]),Object(a["createVNode"])("td",C,[K.cart.final_total!==K.cart.total?(Object(a["openBlock"])(),Object(a["createBlock"])("small",x,"折扣價：")):Object(a["createCommentVNode"])("",!0),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.$filters.currency(t.final_total)),1)])])})),128)):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("tfoot",null,[Object(a["createVNode"])("tr",null,[B,Object(a["createVNode"])("td",L,Object(a["toDisplayString"])(e.$filters.currency(K.cart.total)),1)]),K.cart.final_total!==K.cart.total?(Object(a["openBlock"])(),Object(a["createBlock"])("tr",$,[S,Object(a["createVNode"])("td",w,Object(a["toDisplayString"])(e.$filters.currency(K.cart.final_total)),1)])):Object(a["createCommentVNode"])("",!0)])]),Object(a["createVNode"])("div",_,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"text",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=function(e){return K.coupon_code=e}),placeholder:"請輸入優惠碼"},null,512),[[a["vModelText"],K.coupon_code]]),Object(a["createVNode"])("div",I,[Object(a["createVNode"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:t[3]||(t[3]=function(){return Q.addCouponCode&&Q.addCouponCode.apply(Q,arguments)})}," 套用優惠碼 ")])])]),Object(a["createVNode"])("div",D,[Object(a["createVNode"])(Y,{ref:"form",class:"col-md-6",onSubmit:Q.createOrder},{default:Object(a["withCtx"])((function(e){var c=e.errors;return[Object(a["createVNode"])("div",M,[q,Object(a["createVNode"])(W,{id:"email",name:"email",type:"email",class:["form-control",{"is-invalid":c["email"]}],placeholder:"請輸入 Email",rules:"email|required",modelValue:K.form.user.email,"onUpdate:modelValue":t[4]||(t[4]=function(e){return K.form.user.email=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(X,{name:"email",class:"invalid-feedback"})]),Object(a["createVNode"])("div",T,[U,Object(a["createVNode"])(W,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":c["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:K.form.user.name,"onUpdate:modelValue":t[5]||(t[5]=function(e){return K.form.user.name=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(X,{name:"姓名",class:"invalid-feedback"})]),Object(a["createVNode"])("div",F,[P,Object(a["createVNode"])(W,{id:"tel",name:"電話",type:"tel",class:["form-control",{"is-invalid":c["電話"]}],placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:K.form.user.tel,"onUpdate:modelValue":t[6]||(t[6]=function(e){return K.form.user.tel=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(X,{name:"電話",class:"invalid-feedback"})]),Object(a["createVNode"])("div",A,[E,Object(a["createVNode"])(W,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":c["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:K.form.user.address,"onUpdate:modelValue":t[7]||(t[7]=function(e){return K.form.user.address=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(X,{name:"地址",class:"invalid-feedback"})]),Object(a["createVNode"])("div",z,[J,Object(a["withDirectives"])(Object(a["createVNode"])("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":t[8]||(t[8]=function(e){return K.form.message=e})},null,512),[[a["vModelText"],K.form.message]])]),G]})),_:1},8,["onSubmit"])])])}c("99af");var K={data:function(){return{products:[],product:{},status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},cart:{},isLoading:!1,coupon_code:""}},methods:{getProducts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/products");this.isLoading=!0,this.$http.get(t).then((function(t){e.products=t.data.products,e.isLoading=!1}))},getProduct:function(e){this.$router.push("/user/product/".concat(e))},addToCart:function(e){var t=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/cart");this.status.loadingItem=e;var o={product_id:e,qty:c};this.$http.post(a,{data:o}).then((function(e){t.$httpMessageState(e,"加入購物車"),t.status.loadingItem="",t.isLoading=!1,t.getCart()}))},deleteAllCarts:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/carts");this.$http.delete(t).then((function(t){t.data.success?(e.$httpMessageState(t,"清除購物車"),e.getCart(),e.isLoading=!1):(e.$httpMessageState(t,"清除購物車"),e.isLoading=!1)}))},getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/cart");this.isLoading=!0,this.$http.get(t).then((function(t){e.cart=t.data.data,e.isLoading=!1}))},removeCartItem:function(e){var t=this;this.status.loadingItem=e;var c="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/cart/").concat(e);this.isLoading=!0,this.$http.delete(c).then((function(e){e.data.success?(t.$httpMessageState(e,"移除購物車品項"),t.status.loadingItem="",t.isLoading=!1,t.getCart()):(t.$httpMessageState(e,"移除購物車品項"),t.isLoading=!1)}))},updateCart:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/cart/").concat(e.id),a={product_id:e.product_id,qty:e.qty};this.$http.put(c,{data:a}).then((function(e){t.$httpMessageState(e,"更新購物車"),t.isLoading=!1,t.getCart()}))},addCouponCode:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/coupon"),c={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:c}).then((function(t){e.$httpMessageState(t,"加入優惠券"),e.getCart(),e.isLoading=!1}))},createOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/order"),c=this.form;this.$http.post(t,{data:c}).then((function(t){e.$httpMessageState(t,"建立訂單"),t.data.success&&(e.$router.push("/user/checkout/".concat(t.data.orderId)),e.$refs.form.resetForm()),e.isLoading=!1}))}},created:function(){this.getProducts(),this.getCart()}};K.render=H;t["default"]=K}}]);
//# sourceMappingURL=chunk-2d0d7893.a9de66fa.js.map