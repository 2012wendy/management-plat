webpackJsonp([21],{"/9V0":function(e,t,a){"use strict";function l(e){a("TMZO")}var n=a("e8tO"),i=a("us//"),r=a("VU/8"),o=l,d=r(n.a,i.a,o,null,null);t.a=d.exports},"225k":function(e,t,a){"use strict";function l(e){a("lPyb")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("DiDj"),i=a("L7do"),r=a("VU/8"),o=l,d=r(n.a,i.a,o,null,null);t.default=d.exports},DiDj:function(e,t,a){"use strict";var l=a("/9V0");t.a={components:{vTitle:l.a},data:function(){return{tableData:[{nickName:"lims001",account:"limx001",isEdit:!1},{nickName:"古力娜扎",account:"jing011",isEdit:!0},{nickName:"赵丽颖",account:"limg001",isEdit:!1},{nickName:"杨幂",account:"gou002",isEdit:!0}],currentpage:2,total:45,dialogAddManagerVisible:!1,formLabelWidth:"120px",addForm:{account:""},treeData:[{id:1,value:"内容管理",children:[{id:6,value:"首页管理",children:[{id:10,value:"外链"},{id:11,value:"混合模块",children:[{id:12,value:"资讯"},{id:13,value:"球聚合",children:[{id:14,value:"要闻"},{id:15,value:"圈子"}]}]}]},{id:7,value:"聊天"},{id:8,value:"我的"},{id:9,value:"信息推送"}]},{id:2,value:"高级设置",children:[{id:16,value:"权限设置"},{id:17,value:"会员管理"},{id:18,value:"上架设置",children:[{id:19,value:"上架设置"},{id:20,value:"菜单状态设置"}]}]},{id:3,value:"App打包",children:[{id:21,value:"基础设置"},{id:22,value:"第三方设置"},{id:23,value:"分享落地页设置"},{id:24,value:"升级设置"}]},{id:4,value:"运营服务",children:[{id:25,value:"资讯管理",children:[{id:26,value:"频道管理"},{id:27,value:"资讯管理"}]}]},{id:5,value:"企业会员",children:[{id:28,value:"企业会员账号管理",children:[{id:29,value:"企业会员账号管理"},{id:30,value:"企业会员分类管理"}]}]}],defaultProps:{children:"children",label:"value"}}},methods:{handleEdit:function(){},handleLook:function(){},handleDel:function(){var e=this;this.$confirm("是否删除这条数据？","提示",{confirmButtonText:"删除",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"删除成功"})}).catch(function(){})},handleCurrentChange:function(){},handleAddManager:function(){this.dialogAddManagerVisible=!0},handleAddSave:function(){this.dialogAddManagerVisible=!1},handleAddCancel:function(){this.dialogAddManagerVisible=!1}}}},H1Gw:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".table_item{margin:10px 0}.table_column{padding:10px 0}","",{version:3,sources:["F:/vue_plat_manage/src/components/page/advance/access.vue"],names:[],mappings:"AACA,YACE,aAAe,CAChB,AACD,cACE,cAAgB,CACjB",file:"access.vue",sourcesContent:["\n.table_item {\n  margin: 10px 0;\n}\n.table_column {\n  padding: 10px 0;\n}\n"],sourceRoot:""}])},L7do:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("v-title",{attrs:{title:"权限设置"}}),e._v(" "),a("div",{staticClass:"table_item"},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:8}},[a("h2",[e._v("名称：三生三世,十里桃花")])]),e._v(" "),a("el-col",{attrs:{span:6,push:12}},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAddManager}},[e._v("新增管理员")])],1)],1)],1),e._v(" "),a("div",{staticClass:"table_item"},[a("el-table",{attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"nickName",label:"管理员昵称",width:"300",align:"center","class-name":"table_column"}}),e._v(" "),a("el-table-column",{attrs:{prop:"account",label:"账号",width:"",align:"center","class-name":"table_column"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200",align:"center","class-name":"table_column"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isEdit?e._e():[a("el-button",{attrs:{type:"text"},on:{click:e.handleLook}},[e._v("查看")])],e._v(" "),t.row.isEdit?[a("el-button",{attrs:{type:"text"},on:{click:e.handleEdit}},[e._v("管理权限")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:e.handleDel}},[e._v("删除")])]:e._e()]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table_item"},[a("el-row",[a("el-col",{attrs:{span:7}},[e._v("\n                 \n            ")]),e._v(" "),a("el-col",{attrs:{span:17}},[a("el-pagination",{attrs:{"current-page":e.currentpage,layout:"total,prev,pager,next,jumper",total:e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"新增管理员",visible:e.dialogAddManagerVisible},on:{"update:visible":function(t){e.dialogAddManagerVisible=t}}},[a("el-row",[a("el-col",{attrs:{span:2}},[e._v(" ")]),e._v(" "),a("el-col",{attrs:{span:20}},[a("el-form",{attrs:{modal:e.addForm}},[a("el-form-item",{attrs:{label:"管理员账号：","label-width":e.formLabelWidth,prop:"account"}},[a("el-input",{attrs:{placeholder:"请输入管理员账号"},model:{value:e.addForm.account,callback:function(t){e.addForm.account=t},expression:"addForm.account"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"","label-width":e.formLabelWidth}},[a("el-tree",{attrs:{data:e.treeData,"node-key":"id","default-expanded-keys":[2,3,5],"default-checked-keys":[3],"show-checkbox":"",props:e.defaultProps}})],1),e._v(" "),a("el-form-item",{attrs:{label:"","label-width":e.formLabelWidth}},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleAddSave}},[e._v("新增")]),e._v(" "),a("el-button",{on:{click:e.handleAddCancel}},[e._v("取消")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:2}},[e._v(" ")])],1)],1)],1)},n=[],i={render:l,staticRenderFns:n};t.a=i},TMZO:function(e,t,a){var l=a("mEI9");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("2dae145c",l,!0)},e8tO:function(e,t,a){"use strict";t.a={props:["title"]}},lPyb:function(e,t,a){var l=a("H1Gw");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("rjj0")("c8c6fa8c",l,!0)},mEI9:function(e,t,a){t=e.exports=a("FZ+f")(!0),t.push([e.i,".title{height:50px}hr{margin-top:6px;border:1px solid #d9d9d9}","",{version:3,sources:["F:/vue_plat_manage/src/components/common/Title.vue"],names:[],mappings:"AACA,OACE,WAAa,CACd,AACD,GACE,eAAgB,AAChB,wBAA0B,CAC3B",file:"Title.vue",sourcesContent:["\n.title {\n  height: 50px;\n}\nhr {\n  margin-top: 6px;\n  border: 1px solid #d9d9d9;\n}\n"],sourceRoot:""}])},"us//":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h3",[e._v(e._s(e.title))]),e._v(" "),a("hr")])},n=[],i={render:l,staticRenderFns:n};t.a=i}});
//# sourceMappingURL=21.229461ffa0d43a908673.js.map