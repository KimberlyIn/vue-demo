(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c86c7800"],{1799:function(e,t,c){"use strict";var o=c("7a23"),a={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},l=Object(o["createVNode"])("span",{"aria-hidden":"true"},"«",-1),n={key:0,class:"page-link"},i=Object(o["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,c,d,s,u){return Object(o["openBlock"])(),Object(o["createBlock"])("nav",a,[Object(o["createVNode"])("ul",r,[Object(o["createVNode"])("li",{class:[{disabled:!c.pages.has_pre},"page-item"]},[Object(o["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(e){return u.updatePage(c.pages.current_page-1)}),["prevent"]))},[l])],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pages.total_pages,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["page-item",{active:c.pages.current_page===e}],key:e},[e===c.pages.current_page?(Object(o["openBlock"])(),Object(o["createBlock"])("span",n,Object(o["toDisplayString"])(e),1)):(Object(o["openBlock"])(),Object(o["createBlock"])("a",{key:1,class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(t){return u.updatePage(e)}),["prevent"])},Object(o["toDisplayString"])(e),9,["onClick"]))],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_next}]},[Object(o["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(e){return u.updatePage(c.pages.current_page+1)}),["prevent"]))},[i])],2)])])}var s={props:["pages"],methods:{updatePage:function(e){this.$emit("emitPages",e)}}};s.render=d;t["a"]=s},a434:function(e,t,c){"use strict";var o=c("23e7"),a=c("23cb"),r=c("a691"),l=c("50c4"),n=c("7b0b"),i=c("65f0"),d=c("8418"),s=c("1dde"),u=s("splice"),p=Math.max,b=Math.min,m=9007199254740991,j="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,s,u,O,h,f=n(this),g=l(f.length),V=a(e,g),N=arguments.length;if(0===N?c=o=0:1===N?(c=0,o=g-V):(c=N-2,o=b(p(r(t),0),g-V)),g+c-o>m)throw TypeError(j);for(s=i(f,o),u=0;u<o;u++)O=V+u,O in f&&d(s,u,f[O]);if(s.length=o,c<o){for(u=V;u<g-o;u++)O=u+o,h=u+c,O in f?f[h]=f[O]:delete f[h];for(u=g;u>g-o+c;u--)delete f[u-1]}else if(c>o)for(u=g-o;u>V;u--)O=u+o-1,h=u+c-1,O in f?f[h]=f[O]:delete f[h];for(u=0;u<c;u++)f[u+V]=arguments[u+2];return f.length=g-o+c,s}})},e6dc:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a=Object(o["createVNode"])("h3",null,"這裡是 products",-1),r={class:"text-end mt-4"},l={class:"table mt-4"},n=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"120"},"分類"),Object(o["createVNode"])("th",null,"產品名稱"),Object(o["createVNode"])("th",{width:"120"},"原價"),Object(o["createVNode"])("th",{width:"120"},"售價"),Object(o["createVNode"])("th",{width:"100"},"是否啟用"),Object(o["createVNode"])("th",{width:"200"},"編輯")])],-1),i={class:"text-right"},d={class:"text-right"},s={key:0,class:"text-success"},u={key:1},p={class:"btn-group"};function b(e,t,c,b,m,j){var O=Object(o["resolveComponent"])("Loading"),h=Object(o["resolveComponent"])("Pagination"),f=Object(o["resolveComponent"])("ProductModal"),g=Object(o["resolveComponent"])("DelModal");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[a,Object(o["createVNode"])("div",null,[Object(o["createVNode"])(O,{active:m.isLoading,"z-index":1060},null,8,["active"]),Object(o["createVNode"])("div",r,[Object(o["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(e){return j.openModal(!0)})}," 建立新的產品 ")]),Object(o["createVNode"])("table",l,[n,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(m.products,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.category),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(t.title),1),Object(o["createVNode"])("td",i,Object(o["toDisplayString"])(e.$filters.currency(t.origin_price)),1),Object(o["createVNode"])("td",d,Object(o["toDisplayString"])(e.$filters.currency(t.price)),1),Object(o["createVNode"])("td",null,[t.is_enabled?(Object(o["openBlock"])(),Object(o["createBlock"])("span",s,"啟用")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",u,"未啟用"))]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",p,[Object(o["createVNode"])("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:function(e){return j.openModal(!1,t)}}," 編輯 ",8,["onClick"]),Object(o["createVNode"])("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:function(e){return j.openDelProductModal(t)}}," 刪除 ",8,["onClick"])])])])})),128))])]),Object(o["createVNode"])(h,{pages:m.pagination,onEmitPages:j.getProducts},null,8,["pages","onEmitPages"]),Object(o["createVNode"])(f,{onUpdateProduct:j.updateProduct,product:m.tempProduct,isNew:m.isNew,ref:"productModal"},null,8,["onUpdateProduct","product","isNew"]),Object(o["createVNode"])(g,{item:m.tempProduct,ref:"delModal",onDelItem:j.delProduct},null,8,["item","onDelItem"])])],64)}var m=c("5530"),j=(c("99af"),c("6ff1")),O=c("1799"),h=(c("a434"),c("a4d3"),c("e01a"),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),f={class:"modal-dialog modal-xl",role:"document"},g={class:"modal-content border-0"},V={class:"modal-header bg-dark text-white"},N={class:"modal-title",id:"exampleModalLabel"},v={key:0},P={key:1},k=Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),y={class:"modal-body"},x={class:"row"},M={class:"col-sm-4"},w={class:"mb-3"},B=Object(o["createVNode"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),U={class:"mb-3"},C={for:"customFile",class:"form-label"},D=Object(o["createTextVNode"])("或 上傳圖片 "),$={key:0,class:"fas fa-spinner fa-spin"},_={key:0,class:"mt-5"},T={key:0},L={class:"col-sm-8"},F={class:"mb-3"},S=Object(o["createVNode"])("label",{for:"title",class:"form-label"},"標題",-1),I={class:"row gx-2"},E={class:"mb-3 col-md-6"},J=Object(o["createVNode"])("label",{for:"category",class:"form-label"},"分類",-1),z={class:"mb-3 col-md-6"},A=Object(o["createVNode"])("label",{for:"price",class:"form-label"},"單位",-1),q={class:"row gx-2"},G={class:"mb-3 col-md-6"},H=Object(o["createVNode"])("label",{for:"origin_price",class:"form-label"},"原價",-1),K={class:"mb-3 col-md-6"},Q=Object(o["createVNode"])("label",{for:"price",class:"form-label"},"售價",-1),R=Object(o["createVNode"])("hr",null,null,-1),W={class:"mb-3"},X=Object(o["createVNode"])("label",{for:"description",class:"form-label"},"產品描述",-1),Y={class:"mb-3"},Z=Object(o["createVNode"])("label",{for:"content",class:"form-label"},"說明內容",-1),ee={class:"mb-3"},te={class:"form-check"},ce=Object(o["createVNode"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),oe={class:"modal-footer"},ae=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function re(e,t,c,a,r,l){return Object(o["openBlock"])(),Object(o["createBlock"])("div",h,[Object(o["createVNode"])("div",f,[Object(o["createVNode"])("div",g,[Object(o["createVNode"])("div",V,[Object(o["createVNode"])("h5",N,[c.isNew?(Object(o["openBlock"])(),Object(o["createBlock"])("span",v,"新增產品")):(Object(o["openBlock"])(),Object(o["createBlock"])("span",P,"編輯產品"))]),k]),Object(o["createVNode"])("div",y,[Object(o["createVNode"])("div",x,[Object(o["createVNode"])("div",M,[Object(o["createVNode"])("div",w,[B,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.tempProduct.imageUrl=e}),placeholder:"請輸入圖片連結"},null,512),[[o["vModelText"],r.tempProduct.imageUrl]])]),Object(o["createVNode"])("div",U,[Object(o["createVNode"])("label",C,[D,r.status.fileUploading?(Object(o["openBlock"])(),Object(o["createBlock"])("i",$)):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[2]||(t[2]=function(){return l.uploadFile&&l.uploadFile.apply(l,arguments)})},null,544)]),Object(o["createVNode"])("img",{class:"img-fluid",src:r.tempProduct.imageUrl},null,8,["src"]),r.tempProduct.imagesUrl?(Object(o["openBlock"])(),Object(o["createBlock"])("div",_,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.tempProduct.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"mb-3",key:t},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":function(e){return r.tempProduct.imagesUrl[t]=e},placeholder:"請輸入連結"},null,8,["onUpdate:modelValue"]),[[o["vModelText"],r.tempProduct.imagesUrl[t]]]),Object(o["createVNode"])("div",null,[Object(o["createVNode"])("img",{class:"img-fluid",src:e},null,8,["src"])]),Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-danger",onClick:function(e){return r.tempProduct.imagesUrl.splice(t,1)}}," 移除 ",8,["onClick"])])})),128)),r.tempProduct.imagesUrl[r.tempProduct.imagesUrl.length-1]||!r.tempProduct.imagesUrl.length?(Object(o["openBlock"])(),Object(o["createBlock"])("div",T,[Object(o["createVNode"])("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:t[3]||(t[3]=function(e){return r.tempProduct.imagesUrl.push("")})}," 新增圖片 ")])):Object(o["createCommentVNode"])("",!0)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("div",L,[Object(o["createVNode"])("div",F,[S,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.tempProduct.title=e}),placeholder:"請輸入標題"},null,512),[[o["vModelText"],r.tempProduct.title]])]),Object(o["createVNode"])("div",I,[Object(o["createVNode"])("div",E,[J,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.tempProduct.category=e}),placeholder:"請輸入分類"},null,512),[[o["vModelText"],r.tempProduct.category]])]),Object(o["createVNode"])("div",z,[A,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.tempProduct.unit=e}),placeholder:"請輸入單位"},null,512),[[o["vModelText"],r.tempProduct.unit]])])]),Object(o["createVNode"])("div",q,[Object(o["createVNode"])("div",G,[H,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"origin_price",min:"0","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.tempProduct.origin_price=e}),placeholder:"請輸入原價"},null,512),[[o["vModelText"],r.tempProduct.origin_price,void 0,{number:!0}]])]),Object(o["createVNode"])("div",K,[Q,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.tempProduct.price=e}),min:"0",placeholder:"請輸入售價"},null,512),[[o["vModelText"],r.tempProduct.price,void 0,{number:!0}]])])]),R,Object(o["createVNode"])("div",W,[X,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.tempProduct.description=e}),placeholder:"請輸入產品描述"},null,512),[[o["vModelText"],r.tempProduct.description]])]),Object(o["createVNode"])("div",Y,[Z,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.tempProduct.content=e}),placeholder:"請輸入產品說明內容"},null,512),[[o["vModelText"],r.tempProduct.content]])]),Object(o["createVNode"])("div",ee,[Object(o["createVNode"])("div",te,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[11]||(t[11]=function(e){return r.tempProduct.is_enabled=e}),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[o["vModelCheckbox"],r.tempProduct.is_enabled]]),ce])])])])]),Object(o["createVNode"])("div",oe,[ae,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[12]||(t[12]=function(t){return e.$emit("update-product",r.tempProduct)})}," 確認 ")])])])],512)}var le=c("e0ae"),ne={props:{product:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!1}},data:function(){return{status:{},modal:"",tempProduct:{}}},emits:["update-product"],mixins:[le["a"]],inject:["emitter"],watch:{product:function(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{uploadFile:function(){var e=this,t=this.$refs.fileInput.files[0],c=new FormData;c.append("file-to-upload",t);var o="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/admin/upload");this.status.fileUploading=!0,this.$http.post(o,c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.status.fileUploading=!1,t.data.success?(e.tempProduct.imageUrl=t.data.imageUrl,e.$refs.fileInput.value="",e.emitter.emit("push-message",{style:"success",title:"圖片上傳結果",content:t.data.message})):(e.$refs.fileInput.value="",e.emitter.emit("push-message",{style:"danger",title:"圖片上傳結果",content:t.data.message}))}))}}};ne.render=re;var ie=ne,de={data:function(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1,status:{fileUploading:!1},modal:{editModal:"",delModal:""},currentPage:1}},components:{ProductModal:ie,DelModal:j["a"],Pagination:O["a"]},inject:["emitter"],methods:{getProducts:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.currentPage=t;var c="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/admin/products?page=").concat(t);this.isLoading=!0,this.$http.get(c).then((function(t){t.data.success&&(e.products=t.data.products,e.pagination=t.data.pagination,e.isLoading=!1)}))},openModal:function(e,t){e?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object(m["a"])({},t),this.isNew=!1);var c=this.$refs.productModal;c.openModal()},updateProduct:function(e){var t=this;this.tempProduct=e;var c="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/admin/product"),o="post",a="新增產品";this.isNew||(c="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/admin/product/").concat(this.tempProduct.id),o="put",a="更新產品");var r=this.$refs.productModal;this.$http[o](c,{data:this.tempProduct}).then((function(e){e.data.success?(t.$httpMessageState(e,a),r.hideModal(),t.getProducts(t.currentPage)):t.$httpMessageState(e,a)}))},openDelProductModal:function(e){this.tempProduct=Object(m["a"])({},e);var t=this.$refs.delModal;t.openModal()},delProduct:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","/api/").concat("jemmanine","/admin/product/").concat(this.tempProduct.id);this.isLoading=!0,this.$http.delete(t).then((function(t){e.$httpMessageState(t,"刪除產品");var c=e.$refs.delModal;c.hideModal(),e.getProducts(e.currentPage)}))}},created:function(){this.getProducts()}};de.render=b;t["default"]=de}}]);
//# sourceMappingURL=chunk-c86c7800.75e63b7a.js.map