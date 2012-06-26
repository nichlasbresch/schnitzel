Ext.define('schnitzel.model.Review', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			'title',
			'lat',
			'lng',
			'rating'
		]
	}
})