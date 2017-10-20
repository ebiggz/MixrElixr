var settingsStorage = {
	fetch: function(defaultSettings) {
		return new Promise((resolve, reject) => {
			chrome.storage.sync.get({
				"settings": defaultSettings
			}, function(data) {
				resolve(data);
			});
		});
	}, 
	save: function(settings) {
		chrome.storage.sync.set({ "settings": settings }, () => {		
			settingsStorage.emitEvent();
		});
	},
	emitEvent: function() {
		// let the content script on whatever tab know the settings have been updated
		chrome.tabs.query({}, function(tabs) {
			var message = { settingsUpdated: true };
			for (var i=0; i<tabs.length; ++i) {
				chrome.tabs.sendMessage(tabs[i].id, message);
			}
		});
	}
}

var app = new Vue({
	el: '#app',
	data: {
		autoCloseInteractive: false,
		separateChat: false,
		alternateChatBGColor: false,
		showImageLinksInline: false,
		autoForwardOnHost: false,
		removeHomepageFeatured: false
	},
	computed: {
		settings: {
			get: function() {
				return {
					autoCloseInteractive: this.autoCloseInteractive,
					separateChat: this.separateChat,
					alternateChatBGColor: this.alternateChatBGColor,
					showImageLinksInline: this.showImageLinksInline,
					autoForwardOnHost: this.autoForwardOnHost,
					removeHomepageFeatured: this.removeHomepageFeatured
				}
			}, 
			set: function(settings) {
				this.autoCloseInteractive = settings.autoCloseInteractive === true;
				this.separateChat = settings.separateChat === true;
				this.alternateChatBGColor = settings.alternateChatBGColor === true;
				this.showImageLinksInline = settings.showImageLinksInline === true;
				this.autoForwardOnHost = settings.autoForwardOnHost === true;
				this.removeHomepageFeatured = settings.removeHomepageFeatured === true;
			}		
		}
	},
	methods: {
		fetchSettings: function() {
			var app = this;
			settingsStorage.fetch(app.settings).then((data) => {
				app.settings = data.settings;
			});
		},
		saveSettings: function() {
			var app = this;
			settingsStorage.save(app.settings);
		}
	},
	mounted: function() {
		// When Vue is ready
		this.fetchSettings();
	}
});