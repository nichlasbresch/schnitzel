Ext.define("schnitzel.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    config: {
        tabBarPosition: 'bottom',
		activeItem: 0,
		
        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
				
				layout: 'vbox',
				
                items: [{
	                    docked: 'top',
	                    xtype: 'titlebar',
	                    title: 'Velkommen til den officielle Schnitzel App'
	                },
					{
						styleHtmlContent: true,
						html: [
								'<p>Bedømmelsen af hver schnitzel baserer sig på disse simple parametre:</p>',
								'<ul><li>Selve Scnitzelen</li><li>Stemning</li><li>Service</li><li>Pris</li></ul>',
								'<h2>Seneste schnitzler</h2>'
							].join('')
					},
					{
						xtype: 'SList',
						flex: 1
					}
				]
            },
			{
				xtype: 'MapTab'
			}
        ]
    }
});
