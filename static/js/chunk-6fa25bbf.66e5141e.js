(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fa25bbf"],{1799:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-pagination",{staticClass:"pagination",attrs:{layout:"slot",size:"10"}},[e._t("default",[a("span",[e._v("共"+e._s(e.totalCount)+"条记录 第"+e._s(e.pageIndex)+"/"+e._s(e.totalPage)+"页")])]),a("el-button",{staticClass:"pageBtn",attrs:{disabled:e.upPageBtn},on:{click:e.upPage}},[e._v("上一页")]),a("el-button",{staticClass:"pageBtn",attrs:{disabled:e.nextPageBtn},on:{click:e.nextPage}},[e._v("下一页")])],2)},n=[],o=(a("a9e3"),{props:{totalCount:{type:[Number,String],default:""},totalPage:{type:[Number,String],default:""},pageIndex:{type:[Number,String],default:""}},methods:{upPage:function(){this.$emit("upPage")},nextPage:function(){this.$emit("nextPage")}},computed:{upPageBtn:function(){return"1"===this.pageIndex},nextPageBtn:function(){return this.pageIndex===this.totalPage}}}),i=o,l=(a("b975"),a("2877")),s=Object(l["a"])(i,r,n,!1,null,"5da55bb5",null);t["a"]=s.exports},"1ca4":function(e,t,a){"use strict";a("814f")},"2a7d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-button",{staticClass:"btn",class:[e.bcColor],attrs:{icon:e.icon,type:e.type}},[e._t("default")],2)},n=[],o={props:{bcColor:{type:String,default:""},icon:{type:String},type:String}},i=o,l=(a("47c3"),a("2877")),s=Object(l["a"])(i,r,n,!1,null,"5052e183",null);t["a"]=s.exports},"2cdd":function(e,t,a){},3037:function(e,t,a){},"3f7a":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"dialog",attrs:{title:e.dialogTitle,visible:e.dialogVisible},on:{close:e.handleClose}},[e._t("default")],2)},n=[],o={props:{dialogTitle:{type:String,required:!0},dialogVisible:{type:Boolean,default:!1}},methods:{handleClose:function(){this.$emit("close")}}},i=o,l=(a("c76b"),a("2877")),s=Object(l["a"])(i,r,n,!1,null,"7ec0e28e",null);t["a"]=s.exports},"47c3":function(e,t,a){"use strict";a("2cdd")},5639:function(e,t,a){"use strict";a("d1f7")},"814f":function(e,t,a){},8831:function(e,t,a){},b975:function(e,t,a){"use strict";a("e722")},bca7:function(e,t,a){"use strict";a("8831")},c106:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:e.nameOne+":"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.taskCode,callback:function(t){e.taskCode="string"===typeof t?t.trim():t},expression:"taskCode"}})],1),e.Two?a("el-form-item",{attrs:{label:e.nameTwo+":"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.taskStatus,callback:function(t){e.taskStatus="string"===typeof t?t.trim():t},expression:"taskStatus"}},e._l(e.optionArr,(function(e,t){return a("el-option",{key:t,attrs:{label:e,value:++t}})})),1)],1):e._e(),a("el-form-item",[a("my-buttom",{attrs:{type:"primary",icon:"el-icon-search"},nativeOn:{click:function(t){return e.searchBtn(t)}}},[e._v("查询")])],1)],1)],1)},n=[],o=a("2a7d"),i={data:function(){return{taskCode:"",taskStatus:""}},props:{nameOne:{type:String,required:!0},nameTwo:{type:String},optionArr:{type:Array},Two:{type:Boolean,default:!1}},components:{MyButtom:o["a"]},methods:{searchBtn:function(){this.$emit("search",this.taskCode,this.taskStatus)}}},l=i,s=(a("5639"),a("2877")),c=Object(s["a"])(l,r,n,!1,null,"476a646e",null);t["a"]=c.exports},c76b:function(e,t,a){"use strict";a("3037")},d1f7:function(e,t,a){},d2e9:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-main"},[a("div",{staticClass:"opeartion"},[a("my-search",{attrs:{nameOne:"点位搜索",nameTwo:"区域搜索",optionArr:e.optionArr,Two:!0},on:{search:e.onsearch}}),a("result-list",{attrs:{tableArr:e.tableArr,tableData:e.tableData,totalPage:e.totalPage,totalCount:e.totalCount,pageIndex:e.pageIndex,operation:e.operationArr},on:{upPage:e.upPage,nextPage:e.nextPage,clickAddBtn:e.AddBtn,operationBtn:e.operationMoreMsgBtn}}),a("area-elastic",{ref:"addDept",attrs:{addOpreation:e.addOpreation,visible:e.addOpreation},on:{"update:visible":function(t){e.addOpreation=t},addsuccess:e.loadArea}}),a("area-details",{attrs:{Details:e.Details,getOpreation:e.getOpreation},on:{close:function(t){e.getOpreation=!1}}})],1)])},n=[],o=a("c7eb"),i=a("1da1"),l=(a("d3b7"),a("159b"),a("b0c0"),a("ac1f"),a("1276"),a("5319"),a("ddb9")),s=a("c106"),c=a("2a7d"),u=a("b775");function d(e){return Object(u["a"])({url:"/api/vm-service/node/search",method:"GET",params:e})}function p(e){return Object(u["a"])({url:"/api/vm-service/node/vmList/"+e,method:"GET",params:e})}function m(e){return Object(u["a"])({url:"/api/vm-service/node/"+e.id,method:"PUT",data:e})}function f(e){return Object(u["a"])({url:"/api/vm-service/node",method:"POST",data:e})}function b(e){return Object(u["a"])({url:"/api/vm-service/node/"+e,method:"DELETE"})}function g(e){return Object(u["a"])({url:"/api/vm-service/region/search",method:"GET",params:e})}function h(){return Object(u["a"])({url:"/api/vm-service/businessType",method:"GET"})}function v(e){return Object(u["a"])({url:"/api/user-service/partner/search",method:"GET",params:e})}var x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("my-dialog",{attrs:{dialogTitle:e.dialogTitle,dialogVisible:e.addOpreation},on:{close:e.onClose}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"点位名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"请输入",maxlength:"15","show-word-limit":""},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),a("el-form-item",{attrs:{label:"所在区域",prop:"regionId"}},[a("el-select",{staticStyle:{width:"490px"},attrs:{placeholder:"请选择",size:"large"},model:{value:e.ruleForm.regionId,callback:function(t){e.$set(e.ruleForm,"regionId",t)},expression:"ruleForm.regionId"}},e._l(e.region,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"所属商圈",prop:"businessId"}},[a("el-select",{staticStyle:{width:"490px"},attrs:{placeholder:"请选择",size:"large"},model:{value:e.ruleForm.businessId,callback:function(t){e.$set(e.ruleForm,"businessId",t)},expression:"ruleForm.businessId"}},e._l(e.business,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"归属合作商",prop:"ownerId"}},[a("el-select",{staticStyle:{width:"490px"},attrs:{placeholder:"请选择",size:"large"},model:{value:e.ruleForm.ownerId,callback:function(t){e.$set(e.ruleForm,"ownerId",t)},expression:"ruleForm.ownerId"}},e._l(e.owner,(function(e){return a("el-option",{key:e.id,staticStyle:{width:"490px"},attrs:{label:e.name,value:e.id,size:"large"}})})),1)],1),a("el-form-item",{attrs:{label:"详细地址",prop:"addr"}},[a("el-cascader",{attrs:{size:"large",options:e.options},on:{change:e.handleChange},model:{value:e.selectedOptions,callback:function(t){e.selectedOptions=t},expression:"selectedOptions"}}),a("el-input",{attrs:{type:"textarea",maxlength:"40","show-word-limit":"",placeholder:"请输入备注(不超过40字)"},model:{value:e.ruleForm.addr,callback:function(t){e.$set(e.ruleForm,"addr",t)},expression:"ruleForm.addr"}})],1),a("el-form-item",[a("MyButtom",{attrs:{bcColor:"lightsalmon"},nativeOn:{click:function(t){return e.onClose(t)}}},[e._v("取消")]),a("MyButtom",{attrs:{bcColor:"orange"},nativeOn:{click:function(t){return e.onSave(t)}}},[e._v("确认")])],1)],1)],1)},y=[],w=a("3f7a"),O=a("ef6c"),k={data:function(){return{ruleForm:{name:"",areaCode:"",createUserId:"",regionId:"",businessId:"",ownerId:"",ownerName:"",addr:"",id:""},rules:{name:[{required:!0,message:"不可为空",trigger:"blur"}],areaCode:[{required:!0,message:"不可为空",trigger:"blur"}],createUserId:[{required:!0,message:"不可为空",trigger:"blur"}],regionId:[{required:!0,message:"不可为空",trigger:"blur"}],businessId:[{required:!0,message:"不可为空",trigger:"blur"}],ownerId:[{required:!0,message:"不可为空",trigger:"blur"}],ownerName:[{required:!0,message:"不可为空",trigger:"blur"}],addr:[{required:!0,message:"不可为空",trigger:"blur"}]},region:[{id:"",name:""}],business:[{id:"",name:""}],owner:[{id:"",name:""}],options:O["regionData"],selectedOptions:[]}},props:{addOpreation:{type:Boolean,default:!1}},created:function(){},computed:{dialogTitle:function(){return this.ruleForm.id?"修改点位":"新增点位"}},methods:{onClose:function(){this.$emit("update:visible",!1),this.$refs.ruleForm.resetFields(),this.selectedOptions=[],this.ruleForm={name:"",areaCode:"",createUserId:"1",regionId:"",businessId:"",ownerId:"",ownerName:"",addr:"",id:""}},onSave:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!e.ruleForm.id){t.next=10;break}return console.log(e.ruleForm),t.next=5,m(e.ruleForm);case 5:e.$message.success("修改部门成功"),e.onClose(),e.$emit("addsuccess"),t.next=18;break;case 10:return e.owner.forEach((function(t){e.ruleForm.ownerId===t.id&&(e.ruleForm.ownerName=t.name)})),e.ruleForm.createUserId=1,console.log(e.ruleForm),t.next=15,f(e.ruleForm);case 15:e.$message.success("新增部门成功"),e.onClose(),e.$emit("addsuccess");case 18:t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](0),e.$message.error("操作部门失败");case 23:case"end":return t.stop()}}),t,null,[[0,20]])})))()},getAreaById:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var r,n;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:console.log(e),t.addbtn(),t.ruleForm=e,r=e.addr.split("-"),t.ruleForm.addr=r[r.length-1],n=[],4===r.length?n.push(O["TextToCode"][r[0]].code,O["TextToCode"][r[0]][r[1]].code,O["TextToCode"][r[0]][r[1]][r[2]].code):3===r.length&&n.push(O["TextToCode"][r[0]].code,O["TextToCode"][r[0]][r[1]].code),t.selectedOptions=n;case 8:case"end":return a.stop()}}),a)})))()},handleChange:function(e){this.ruleForm.areaCode=e[2]},addbtn:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var a,r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g({pageSize:"9999"});case 2:return a=t.sent,e.region=a.currentPageRecords,t.next=6,h();case 6:return e.business=t.sent,t.next=9,v({pageSize:"9999"});case 9:r=t.sent,e.owner=r.currentPageRecords;case 11:case"end":return t.stop()}}),t)})))()}},components:{MyDialog:w["a"],MyButtom:c["a"]}},C=k,S=a("2877"),_=Object(S["a"])(C,x,y,!1,null,"b27ed06e",null),I=_.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("my-dialog",{attrs:{dialogTitle:"点位详情",dialogVisible:e.getOpreation},on:{close:e.handleClose}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm"},[a("el-form-item",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.Details,stripe:"","empty-text":"暂无数据"}},[a("el-table-column",{attrs:{type:"index",width:"80",label:"序号"}}),a("el-table-column",{attrs:{prop:"innerCode",label:"机器编号"}}),a("el-table-column",{attrs:{prop:"vmStatus",label:"设备状态"}}),a("el-table-column",{attrs:{prop:"lastSupplyTime",label:"最后一次供货时间"}})],1)],1)],1)],1)},B=[],F={data:function(){return{}},props:{getOpreation:{type:Boolean,default:!1},Details:{type:Array,default:[]}},created:function(){},methods:{handleClose:function(){this.$emit("close")}},components:{MyDialog:w["a"]}},j=F,A=Object(S["a"])(j,T,B,!1,null,"562ef08c",null),P=A.exports,$={data:function(){return{addOpreation:!1,getOpreation:!1,tableArr:[{prop:"name",label:"点位名称"},{prop:"region.name",label:"所在区域"},{prop:"businessType.name",label:"商圈类型"},{prop:"ownerName",label:"合作商"},{prop:"itemaddr",label:"详细地址"}],tableData:[],Details:[],optionArr:[],pageIndex:"",totalPage:"",totalCount:"",operationArr:{opeWidth:"200",ope:[{title:"查看详情",color:!1},{title:"修改",color:!1},{title:"删除",color:!0}]},vm:{0:"未投放",1:"运营",3:"撤机"}}},created:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadArea();case 2:return t.next=4,e.tableData.forEach((function(t){var a=t.region.name;-1===e.optionArr.indexOf(a)&&e.optionArr.push(a)}));case 4:case"end":return t.stop()}}),t)})))()},methods:{AddBtn:function(){this.$refs.addDept.addbtn(),this.addOpreation=!0},loadArea:function(e){var t=this;return Object(i["a"])(Object(o["a"])().mark((function a(){var r;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,d(e);case 2:r=a.sent,t.pageIndex=r.pageIndex,r.currentPageRecords.forEach((function(e,a){var r=e.addr.split("-");e.itemaddr=r[r.length-1],e.itemIndex=10*(t.pageIndex-1)+a+1})),t.tableData=r.currentPageRecords,t.totalPage=r.totalPage,t.totalCount=r.totalCount;case 8:case"end":return a.stop()}}),a)})))()},upPage:function(){this.loadArea({pageIndex:--this.pageIndex,pageSize:10,isRepair:!1})},nextPage:function(){this.loadArea({pageIndex:++this.pageIndex,pageSize:10,isRepair:!1})},operationMoreMsgBtn:function(e,t){var a=this;return Object(i["a"])(Object(o["a"])().mark((function r(){var n;return Object(o["a"])().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t!==a.operationArr.ope[0].title){r.next=9;break}return r.next=3,p(e.id);case 3:n=r.sent,n.forEach((function(e){e.vmStatus=a.vm[e.vmStatus],e.lastSupplyTime=e.lastSupplyTime.replace("T"," "),e.lastSupplyTime=e.lastSupplyTime.replace("-","."),e.lastSupplyTime=e.lastSupplyTime.replace("-",".")})),a.Details=n,a.getOpreation=!0,r.next=27;break;case 9:if(t!==a.operationArr.ope[1].title){r.next=15;break}console.log(e),a.$refs.addDept.getAreaById(e),a.addOpreation=!0,r.next=27;break;case 15:if(t!==a.operationArr.ope[2].title){r.next=27;break}return r.prev=16,r.next=19,a.$confirm("此操作将永久删除该点位, 是否继续?","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"});case 19:return r.next=21,b(e.id);case 21:a.$message.success("删除成功"),a.loadArea({pageIndex:a.pageIndex,pageSize:10,isRepair:!1}),r.next=27;break;case 25:r.prev=25,r.t0=r["catch"](16);case 27:case"end":return r.stop()}}),r,null,[[16,25]])})))()},onsearch:function(e,t){var a=this;if(e||t){var r=[];this.tableData.forEach((function(n){-1!==(n.name.indexOf(e)||n.region.name.indexOf(a.optionArr[t-1]))&&r.push(n)})),this.tableData=r}else this.loadArea()}},components:{MyButtom:c["a"],MySearch:s["a"],ResultList:l["a"],areaElastic:I,areaDetails:P}},D=$,E=(a("bca7"),Object(S["a"])(D,r,n,!1,null,"c99d547c",null));t["default"]=E.exports},ddb9:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"result"},[e.isShowBtn?a("div",{staticClass:"operation-btn"},[a("my-buttom",{attrs:{bcColor:"orange",icon:"el-icon-circle-plus-outline"},nativeOn:{click:function(t){return e.$emit("clickAddBtn")}}},[e._v("新建")]),e.isShowSecondBtn?a("my-buttom",{attrs:{bcColor:"lightsalmon"},nativeOn:{click:function(t){return e.$emit("clickSecondBtn")}}},[e._v(e._s(e.secondBtnContent))]):e._e()],1):e._e(),a("div",{staticClass:"result-list"},[a("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-key":"String"}},[e.selection?a("el-table-column",{attrs:{type:"selection"}}):e._e(),a("el-table-column",{attrs:{prop:"itemIndex",label:"序号",width:"80"}}),e._l(e.tableArr,(function(t,r){return a("el-table-column",{key:r,attrs:{prop:t.prop,label:t.label,"show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(r){return["商品图片"===t.label?[a("img",{attrs:{src:r.row.skuImage}})]:[a("span",{domProps:{innerHTML:e._s(e.formatter(r.row,r.column,r.row[t.prop]))}})]]}}],null,!0)})})),e.isShowOpe?a("el-table-column",{attrs:{fixed:"right",label:"操作",width:e.length,prop:"taskId"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(e.operation.ope,(function(r,n){return a("el-button",{key:n,staticClass:"operationBtn",class:{color:r.color},attrs:{type:"text",size:"medium"},on:{click:function(a){return e.handleClick(t.row,r.title)}}},[e._v(" "+e._s(r.title))])}))}}],null,!1,547189932)}):e._e()],2),e.isShowPagination?a("my-pagination",e._g(e._b({},"my-pagination",e.$attrs,!1),e.$listeners)):e._e()],1)])},n=[],o=(a("a9e3"),a("ac1f"),a("1276"),a("1799")),i=a("2a7d"),l=a("5a0c"),s=a.n(l),c={props:{isShowBtn:{type:Boolean,default:!0},isShowSecondBtn:{type:Boolean,default:!1},secondBtnContent:{type:String,default:"按钮"},isShowPagination:{type:Boolean,default:!0},tableArr:{type:Array},tableData:{type:Array},selection:{type:Boolean,default:!1},operation:{type:Object},isShowOpe:{type:Boolean,default:!0}},components:{MyButtom:i["a"],MyPagination:o["a"]},methods:{formatter:function(e,t,a){if(-1===t.property.indexOf("."))return"创建日期"===t.label?s()(e.updateTime).format("YYYY.MM.DD HH:mm:ss"):"工单方式"===t.label?e.createType?"手动":"自动":"商品价格"===t.label?Number(e.price/100):a;var r=t.property.split("."),n=r[0],o=r[1];return e[n]?e[n][o]:""},handleClick:function(e,t){this.$emit("operationBtn",e,t)}},computed:{length:function(){var e;return null!==(e=this.operation)&&void 0!==e&&e.opeWidth?this.operation.opeWidth:""}}},u=c,d=(a("1ca4"),a("2877")),p=Object(d["a"])(u,r,n,!1,null,"47ba3b26",null);t["a"]=p.exports},e722:function(e,t,a){}}]);