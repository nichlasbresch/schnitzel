Ext.define('schnitzel.view.SList', {
	extend: 'Ext.dataview.List',
	xtype: 'SList',
	
	config: {
		itemTpl: 'Title: {title}',
		store: 'SStore',
		listeners: {
			itemtap: function(list, index, item, evt) {
				console.log('Tap meh!');
			}
		}
	}
});