(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76d0085c"],{1032:function(e,t,a){},"74d4":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-wrap"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple search-bar",staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.addProduct}},[e._v("新增产品")]),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:"",limit:3,"on-exceed":e.handleExceed,"file-list":e.fileList,"auto-upload":!1}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("导入产品")])],1)],1)])],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content bg-purple search-bar"},[a("span",[e._v("一级类目")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content bg-purple search-bar"},[a("span",[e._v("二级类目")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content bg-purple search-bar"},[a("span",[e._v("产品来源")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("el-col",{staticClass:"origin",attrs:{span:4}},[a("div",{staticClass:"grid-content bg-purple search-bar"},[a("span",[e._v("产品来源")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content bg-purple search"},[a("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"id/名称/标签"},model:{value:e.searchName,callback:function(t){e.searchName=t},expression:"searchName"}}),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("搜索")])],1)])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-dark"},[a("el-table",{staticStyle:{width:"100%"},attrs:{"header-cell-style":{color:"#000"},data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"60"}}),a("el-table-column",{attrs:{prop:"name",label:"产品ID",width:"80"}}),a("el-table-column",{attrs:{prop:"address",label:"产品图片",width:"100"}}),a("el-table-column",{attrs:{prop:"name",label:"产品名称",width:"60"}}),a("el-table-column",{attrs:{prop:"name",label:"产品价格",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"一级类目",width:"100"}}),a("el-table-column",{attrs:{prop:"name",label:"二级类目"}}),a("el-table-column",{attrs:{prop:"name",label:"标签"}}),a("el-table-column",{attrs:{prop:"name",label:"产品来源",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"商家名称",width:"60"}}),a("el-table-column",{attrs:{prop:"name",label:"所在地",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"发布时间",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"发布状态",width:"80"}}),a("el-table-column",{attrs:{prop:"name",label:"管理",width:"210"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleView(t.$index,t.row)}}},[e._v("查看")]),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleView(t.$index,t.row)}}},[e._v("查看")]),a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleView(t.$index,t.row)}}},[e._v("查看")])]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage4,"page-sizes":[10,25,50],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400,"prev-text":"上一页","next-text":"下一页"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])],1)],1)},n=[],r=(a("99af"),a("b0c0"),{data:function(){return{options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:"",tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],fileList:[]}},methods:{handleView:function(e,t){this.$router.push({path:"/userinfo",query:{userInfo:t,activeIndex:"4"}})},addProduct:function(){this.$router.push({name:"productDetail"})},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))}}}),o=r,c=(a("91fd"),a("2877")),i=Object(c["a"])(o,l,n,!1,null,"2f7c3c40",null);t["default"]=i.exports},8418:function(e,t,a){"use strict";var l=a("c04e"),n=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var o=l(t);o in e?n.f(e,o,r(0,a)):e[o]=a}},"91fd":function(e,t,a){"use strict";var l=a("1032"),n=a.n(l);n.a},"99af":function(e,t,a){"use strict";var l=a("23e7"),n=a("d039"),r=a("e8b5"),o=a("861d"),c=a("7b0b"),i=a("50c4"),s=a("8418"),u=a("65f0"),p=a("1dde"),d=a("b622"),b=a("60ae"),v=d("isConcatSpreadable"),h=9007199254740991,f="Maximum allowed index exceeded",m=b>=51||!n((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),g=p("concat"),w=function(e){if(!o(e))return!1;var t=e[v];return void 0!==t?!!t:r(e)},y=!m||!g;l({target:"Array",proto:!0,forced:y},{concat:function(e){var t,a,l,n,r,o=c(this),p=u(o,0),d=0;for(t=-1,l=arguments.length;t<l;t++)if(r=-1===t?o:arguments[t],w(r)){if(n=i(r.length),d+n>h)throw TypeError(f);for(a=0;a<n;a++,d++)a in r&&s(p,d,r[a])}else{if(d>=h)throw TypeError(f);s(p,d++,r)}return p.length=d,p}})},b0c0:function(e,t,a){var l=a("83ab"),n=a("9bf2").f,r=Function.prototype,o=r.toString,c=/^\s*function ([^ (]*)/,i="name";!l||i in r||n(r,i,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(e){return""}}})}}]);