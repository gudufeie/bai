(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2472b20"],{"04af":function(t,e,s){},2985:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12,offset:6}},[s("div",{staticClass:"grid-content bg-purple",staticStyle:{display:"flex","justify-content":"space-between"}},[s("span",{staticClass:"status_type"},[t._v("所属一级类目")]),s("span",{staticStyle:{"text-align":"left",width:"76%"}},[t._v(t._s(t.firstCateName))])])])],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12,offset:6}},[s("div",{staticClass:"grid-content bg-purple",staticStyle:{display:"flex","justify-content":"space-between"}},[s("span",{staticClass:"status_type"},[t._v("二级分类名称 "),s("span",{staticClass:"star"},[t._v("*")])]),s("el-input",{attrs:{placeholder:"10个字以内",maxlength:"10","show-word-limit":""},model:{value:t.typeName,callback:function(e){t.typeName=e},expression:"typeName"}})],1)])],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12,offset:6}},[s("div",{staticClass:"grid-content bg-purple",staticStyle:{display:"flex","justify-content":"space-between"}},[s("span",{staticClass:"status_type"},[t._v("是否启用 "),s("span",{staticClass:"star"},[t._v("*")])]),s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}},t._l(t.enableList,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)])],1),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:12,offset:6}},[s("div",{staticClass:"grid-content bg-purple",staticStyle:{display:"flex","justify-content":"space-between"}},[s("span",{staticClass:"status_type"},[t._v("类型")]),s("span",{staticStyle:{"text-align":"left",width:"76%"}},[t._v(t._s(t.firstTypeName))])])])],1),s("el-row",{staticClass:"bottom-button",attrs:{gutter:20}},[s("el-col",{attrs:{span:3,offset:10}},[s("div",{staticClass:"grid-content bg-purple",staticStyle:{display:"flex","justify-content":"space-between"}},[s("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("保存")])],1)]),s("el-col",{attrs:{span:3}},[s("div",{staticClass:"grid-content bg-purple",staticStyle:{display:"flex","justify-content":"space-between"}},[s("el-button",{on:{click:t.quit}},[t._v("取消")])],1)])],1)],1)},i=[],l=s("1273"),n={data:function(){return{firstCateName:"",typeName:"",firstTypeName:"",enable:"0",enableList:[{label:"否",value:"0"},{label:"是",value:"1"}],type:"",typeList:[{label:"产品",value:"0"},{label:"服务",value:"1"},{label:"解决方案",value:"2"}],parentId:"",mode:"add",id:"",typeId:""}},mounted:function(){var t=this.$route.query.firstCate;if(this.firstCateName=t.categoryName,this.type=this.typeId=t.typeId,this.firstTypeName=t.typeName,this.parentId=t.id,this.$route.query.secondCate){this.mode="edit";var e=this.$route.query.secondCate;this.typeName=e.categoryName,this.type=e.typeId,this.id=e.id,"启用"==e.status?this.enable="1":this.enable="0"}},methods:{submit:function(){var t=this;if(!this.typeName)return this.$message({message:"请输入分类名称!",type:"warning",center:!0}),!1;var e={categoryName:this.typeName,state:this.enable,id:this.id,parentId:this.parentId,typeId:this.typeId};Object(l["j"])(e).then((function(e){200==e.code?((t.mode="add")?t.$message({message:"添加成功!",type:"success",center:!0}):t.$message({message:"修改成功!",type:"success",center:!0}),t.$router.push({path:"/category"})):(t.mode="add")?t.$message({message:"添加失败："+e.msg,type:"warning",center:!0}):t.$message({message:"修改失败："+e.msg,type:"warning",center:!0})}))},quit:function(){this.$router.go(-1)}}},r=n,c=(s("97cc"),s("2877")),p=Object(c["a"])(r,a,i,!1,null,"2f54d277",null);e["default"]=p.exports},"97cc":function(t,e,s){"use strict";var a=s("04af"),i=s.n(a);i.a}}]);