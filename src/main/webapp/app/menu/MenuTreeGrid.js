Ext.define('app.menu.MenuTreeGrid',{
	extend: 'Ext.tree.Panel',
	alias: ['widget.menuTreeGrid'],
	
	requires:["app.menu.MenuModel","app.menu.MenuController",'app.common.IconCombobox','app.common.MenuCombobox'],
	viewModel:"menuModel",
	controller:'menuController',
	bind:{store:'{menuTreeGridStore}'},
	name:"menuTreeGrid",
	closable:true,
	rootVisible:false,
	columnLines:true,
	allowDeselect:true,
	
	plugins:[{
		ptype:"rowediting",
		saveBtnText: '保存',
		cancelBtnText: "取消",
		pluginId:"menuTreeGridRowediting",
		listeners:{
			edit:"editMenu",
			canceledit:"canceledit",
			beforeedit:"beforeedit",
		}
	},{
		
		ptype:'treeviewdragdrop'
	}],
	tbar:[{
		text:"新增",
		icon:'images/icon/add.png',
		handler:"insertMenu"
	},{
		text:"修改",
		icon:'images/icon/update.png',
		handler:"updateMenu"
	},{
		text:"删除",
		icon:'images/icon/delete.png',
		handler:"deleteMenu"
	}],
	columns: [{
		xtype: 'treecolumn',
		text:'菜单名称',
		sortable:false,
		dataIndex: 'text',
		width:200,
		editor: {allowBlank: false}
	},{
		text:'上级菜单',
		width:150,
		dataIndex: 'parentId',
		sortable: false,
		editor:{xtype:"menuCombobox"},
		renderer:function(value,metaData,record){
			return record.data.parentName
		}
	},{
		text:'图标',
		width:200,
		dataIndex: 'icon',
		sortable: false,
		editor: {
			xtype:"iconCombobox"	
		}
	},{
		text:'地址',
		width:250,
		sortable: false,
		dataIndex: 'uri',
		editor: {}
	},{
		text: '排序',
		width:80,
		sortable: false,
		dataIndex: 'sort',
		editor: {xtype:"numberfield"}
	}]
});