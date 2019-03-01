(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6077"],{"69Nf":function(t,e,a){var l=a("f4ri"),i=l.JSON||(l.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},"7rLG":function(t,e,a){"use strict";var l=a("xK0Z");a.n(l).a},CcDt:function(t,e,a){"use strict";a.r(e);var l=a("omC7"),i=a.n(l),n=a("SeWE"),r={data:function(){return{tableData:[],tableDataIndex:0,currentPage:1,pageSize:10,detailVisible:!1,formVisible:!1,form:{graduate:"",fatherPhone:"",motherPhone:""}}},methods:{getList:function(){var t=this;Object(n.c)({currentPage:this.currentPage,pageSize:this.pageSize}).then(function(e){console.log("学生列表：",e),t.tableData=e.data})},del:function(t,e){var a=this;this.$confirm("此操作将永久删除该学生信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(n.b)(e).then(function(e){a.tableData.splice(t,1),a.$message({type:"success",message:"删除成功!"})})}).catch()},editor:function(t){this.formVisible=!0,this.tableDataIndex=t,this.form.graduate=this.tableData[t].graduate,this.form.fatherPhone=this.tableData[t].fatherPhone,this.form.motherPhone=this.tableData[t].motherPhone},submitUpdate:function(){var t=this,e=JSON.parse(i()(this.form));for(var a in e)if(""===e[a])return void this.$message({type:"warning",message:"表单不能为空"});e.studentId=this.tableData[this.tableDataIndex].studentId,Object(n.d)(e).then(function(a){t.$message({type:"success",message:"修改成功"}),t.tableData[t.tableDataIndex].graduate=e.graduate,t.tableData[t.tableDataIndex].fatherPhone=e.fatherPhone,t.tableData[t.tableDataIndex].motherPhone=e.motherPhone,t.formVisible=!1})}},created:function(){this.getList()}},o=(a("7rLG"),a("ZrdR")),s=Object(o.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"studentName",label:"姓名",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ticketNumber",label:"准考证号",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"graduate",label:"毕业中学"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dept",label:"系别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"specialtyName",label:"专业"}}),t._v(" "),a("el-table-column",{attrs:{prop:"dormitoryName",label:"宿舍"}}),t._v(" "),a("el-table-column",{attrs:{prop:"tutorName",label:"导师"}}),t._v(" "),a("el-table-column",{attrs:{prop:"instructorName",label:"辅导员"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.tableDataIndex=e.$index,t.detailVisible=!0}}},[t._v("详情")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.editor(e.$index)}}},[t._v("编辑")]),t._v(" "),a("el-button",{staticStyle:{color:"#F56C6C"},attrs:{type:"text",size:"small"},on:{click:function(a){t.del(e.$index,e.row.studentId)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-dialog",{attrs:{title:"详细信息",width:"600px",visible:t.detailVisible},on:{"update:visible":function(e){t.detailVisible=e}}},[t.tableData[t.tableDataIndex]?a("div",{staticClass:"detail"},[a("div",{staticClass:"cell"},[a("div",{staticClass:"cell_hd"},[t._v("父亲")]),t._v(" "),a("div",{staticClass:"cell_ft text-right"},[t._v(t._s(t.tableData[t.tableDataIndex].father||"空"))])]),t._v(" "),a("div",{staticClass:"cell"},[a("div",{staticClass:"cell_hd"},[t._v("父亲电话")]),t._v(" "),a("div",{staticClass:"cell_ft text-right"},[t._v(t._s(t.tableData[t.tableDataIndex].fatherPhone||"空"))])]),t._v(" "),a("div",{staticClass:"cell"},[a("div",{staticClass:"cell_hd"},[t._v("母亲")]),t._v(" "),a("div",{staticClass:"cell_ft text-right"},[t._v(t._s(t.tableData[t.tableDataIndex].mother||"空"))])]),t._v(" "),a("div",{staticClass:"cell"},[a("div",{staticClass:"cell_hd"},[t._v("母亲电话")]),t._v(" "),a("div",{staticClass:"cell_ft text-right"},[t._v(t._s(t.tableData[t.tableDataIndex].motherPhone||"空"))])]),t._v(" "),a("div",{staticClass:"cell"},[a("div",{staticClass:"cell_hd"},[t._v("地址")]),t._v(" "),a("div",{staticClass:"cell_ft text-right"},[t._v(t._s(t.tableData[t.tableDataIndex].address||"空"))])])]):t._e(),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){t.detailVisible=!1}}},[t._v("关闭")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"修改基本信息",visible:t.formVisible},on:{"update:visible":function(e){t.formVisible=e}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"毕业中学"}},[a("el-input",{model:{value:t.form.graduate,callback:function(e){t.$set(t.form,"graduate",e)},expression:"form.graduate"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"父亲电话"}},[a("el-input",{attrs:{type:"number"},model:{value:t.form.fatherPhone,callback:function(e){t.$set(t.form,"fatherPhone",e)},expression:"form.fatherPhone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"母亲电话"}},[a("el-input",{attrs:{type:"number"},model:{value:t.form.motherPhone,callback:function(e){t.$set(t.form,"motherPhone",e)},expression:"form.motherPhone"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.formVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.submitUpdate}},[t._v("确 定")])],1)],1)],1)],1)},[],!1,null,"0b8b0ed8",null);s.options.__file="list.vue";e.default=s.exports},SeWE:function(t,e,a){"use strict";a.d(e,"c",function(){return i}),a.d(e,"a",function(){return n}),a.d(e,"d",function(){return r}),a.d(e,"b",function(){return o});var l=a("t3Un");function i(t){var e=t.currentPage,a=void 0===e?1:e,i=t.pageSize,n=void 0===i?10:i;return Object(l.a)({url:"/index.php/index/Studentcontroller/getAllStudents",method:"get",params:{currentPage:a,pageSize:n}})}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.a)({url:"/index/Studentcontroller/addStudent",method:"post",data:t})}function r(t){var e=t.studentId,a=t.graduate,i=t.fatherPhone,n=t.motherPhone;return Object(l.a)({url:"/index/Studentcontroller/updateStudentById",method:"post",data:{studentId:e,graduate:a,fatherPhone:i,motherPhone:n}})}function o(t){return Object(l.a)({url:"/index/Studentcontroller/deleteStudentById",method:"post",data:{studentId:t}})}},omC7:function(t,e,a){t.exports={default:a("69Nf"),__esModule:!0}},xK0Z:function(t,e,a){}}]);