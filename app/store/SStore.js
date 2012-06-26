Ext.define('schnitzel.store.SStore', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'schnitzel.model.Review',
		proxy: {
			type: 'ajax',
			url: 'app/data.json',
			reader: {
				type: 'json'
			}
		},
		autoLoad: true
	}
	
});