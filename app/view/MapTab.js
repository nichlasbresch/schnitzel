Ext.define('schnitzel.view.MapTab', {
	extend: 'Ext.Panel',
	
	xtype: 'MapTab',
	
	requires: ['Ext.Map'],
	
	config: {
		title: 'Map',
		iconCls: 'maps',
		
		layout: 'fit',
		
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Map'
			},
			{
			    xtype: 'map',
				useCurrentLocation: true,
			    mapOptions : {
			        zoom : 5,
					streetViewControl: false,
					panControl: false,
					mapTypeControl: false
			    },
				listeners: {
					maprender: function(comp, map) {
						Ext.getStore('SStore').each(function(record) {
							var marker = new google.maps.Marker({
								position: new google.maps.LatLng(record.get('lat'),record.get('lng')),
								map: map
							});

							google.maps.event.addListener(marker, 'click', function() {
								console.log('marker click');
							});
						});
					}
				}
			}
		]
	},
	
});