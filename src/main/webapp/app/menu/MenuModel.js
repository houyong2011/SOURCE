Ext.define('app.menu.MenuModel',{
	extend:'app.view.ViewModel',
	alias:'viewmodel.menuModel',
	stores:{
		menuTreeGridStore:{
			autoLoad:true,
			type:"tree",
			sorters:'sort',
			defaultRootProperty:"data",//按照data属性读取节点，默认是children
			root:{
				id:"root",
				text:lang("顶级菜单"),
				name:lang("顶级菜单")
			},
			fields: [{
				name:'id'
			},{
				name:'parentId'
			},{
				name:'parentName'
			},{
				name:'text'
			},{
				name:'uri'
			},{
				name:'icon'
			},{
				name:'sort'
			}],
			proxy: {
				type:'ajax',
				url:'menuAction/getMenuTree.action'
			}
		}
	}
});
