(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53cfc050"],{"0a96":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"keyword"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-input",{attrs:{placeholder:"关键词"},model:{value:e.keywordName,callback:function(t){e.keywordName=t},expression:"keywordName"}}),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("搜索")])],1)]),a("el-col",{attrs:{span:4,offset:12}},[a("div",{staticClass:"grid-content bg-purple add-key"},[a("router-link",{attrs:{to:"increase"}},[a("el-button",{attrs:{type:"primary"}},[e._v(" 新增关键词 ")])],1)],1)])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),a("el-table-column",{attrs:{prop:"keyWordName",label:"关键词",width:"150"}}),a("el-table-column",{attrs:{prop:"categoryOneName",label:"一级类目",width:"120"}}),a("el-table-column",{attrs:{prop:"categoryTwoName",label:"二级类目",width:"120"}}),a("el-table-column",{attrs:{prop:"keyWordRelations",label:"关联关键词"}}),a("el-table-column",{attrs:{width:"80",label:"发布状态"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s("1"==n.enable?"启用中":"已下线"))])]}}])}),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("span",[e._v(e._s(e._f("formatDate")(n.updateTime)))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){return e.handleon(t.$index,t.row)}}},[e._v(e._s(0==t.row.enable?"启用":"下线"))]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"}),a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[10,25,50],"page-size":e.pageSize,background:"",layout:"total, sizes, prev, pager, next, jumper",total:e.pageTotal,"prev-text":"上一页","next-text":"下一页"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},r=[],o=(a("a434"),a("498a"),a("1273")),i={data:function(){return{currentPage:1,pageSize:10,pageTotal:0,tableData:[],keywordName:"",enable:null}},mounted:function(){this.loadKeywordList()},methods:{handleEdit:function(e,t){this.$store.commit("saveKeyword",t),this.$router.push({path:"increase"})},handleDelete:function(e,t){var a=this;this.$confirm("此操作将永久删除该关键词, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["g"])({id:t.id}).then((function(t){200==t.code?(a.$message({message:"删除成功!",type:"success",center:!0}),a.tableData.splice(e,1)):a.$message({message:"删除失败!",type:"warning",center:!0})}))})).catch((function(){a.$message({type:"info",message:"已取消删除"})}))},handleon:function(e,t){var a=this;1==t.enable?this.enable=0:this.enable=1;var n={enable:this.enable,id:t.id};Object(o["t"])(n).then((function(e){if(200==e.code){a.$message({message:"修改成功!",type:"success",center:!0});var t=a;t.loadKeywordList()}else a.$message({message:"修改失败!",type:"warning",center:!0})}))},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},loadKeywordList:function(){var e=this,t={keyWordName:this.keywordName,pageNum:1,pageSize:10};Object(o["m"])(t).then((function(t){e.tableData=t.data.dataList,e.currentPage=t.data.totalCount,e.pageTotal=t.data.totalPage}))},search:function(){var e=this,t={keyWordName:this.keywordName.trim(),pageNum:1,pageSize:10};Object(o["m"])(t).then((function(t){e.tableData=t.data.dataList,e.currentPage=t.data.totalCount,e.pageTotal=t.data.totalPage}))}}},l=i,s=(a("fd81"),a("2877")),c=Object(s["a"])(l,n,r,!1,null,"e9aa7ab6",null);t["default"]=c.exports},"26d8":function(e,t,a){},"498a":function(e,t,a){"use strict";var n=a("23e7"),r=a("58a8").trim,o=a("e070");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var n=a("1d80"),r=a("5899"),o="["+r+"]",i=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),s=function(e){return function(t){var a=String(n(t));return 1&e&&(a=a.replace(i,"")),2&e&&(a=a.replace(l,"")),a}};e.exports={start:s(1),end:s(2),trim:s(3)}},8418:function(e,t,a){"use strict";var n=a("c04e"),r=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var i=n(t);i in e?r.f(e,i,o(0,a)):e[i]=a}},a434:function(e,t,a){"use strict";var n=a("23e7"),r=a("23cb"),o=a("a691"),i=a("50c4"),l=a("7b0b"),s=a("65f0"),c=a("8418"),u=a("1dde"),d=Math.max,p=Math.min,f=9007199254740991,g="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!u("splice")},{splice:function(e,t){var a,n,u,h,m,b,w=l(this),y=i(w.length),v=r(e,y),k=arguments.length;if(0===k?a=n=0:1===k?(a=0,n=y-v):(a=k-2,n=p(d(o(t),0),y-v)),y+a-n>f)throw TypeError(g);for(u=s(w,n),h=0;h<n;h++)m=v+h,m in w&&c(u,h,w[m]);if(u.length=n,a<n){for(h=v;h<y-n;h++)m=h+n,b=h+a,m in w?w[b]=w[m]:delete w[b];for(h=y;h>y-n+a;h--)delete w[h-1]}else if(a>n)for(h=y-n;h>v;h--)m=h+n-1,b=h+a-1,m in w?w[b]=w[m]:delete w[b];for(h=0;h<a;h++)w[h+v]=arguments[h+2];return w.length=y-n+a,u}})},e070:function(e,t,a){var n=a("d039"),r=a("5899"),o="​᠎";e.exports=function(e){return n((function(){return!!r[e]()||o[e]()!=o||r[e].name!==e}))}},fd81:function(e,t,a){"use strict";var n=a("26d8"),r=a.n(n);r.a}}]);