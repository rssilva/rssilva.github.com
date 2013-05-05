var Page = function () {
	return {
		init: function () {
			this.getCurrentDate();
			this.setAgenda();
		},

		getCurrentDate: function () {
			var date = new Date();

			this.currentDate = {
				day: date.getDate(),
				month: date.getMonth() + 1
			}
		},

		isFutureDate: function (calendarDate) {
			if (calendarDate.length === 1) {
				var dateArray = calendarDate[0].split('/');

				if (parseInt(dateArray[0], 10) >= this.currentDate.day && parseInt(dateArray[1], 10) >= this.currentDate.month) {
					return true;
				}
			}

			return false;
		},

		setAgenda: function () {
			this.getAgenda()
		},

		getAgenda: function () {
			var self = this;
			jQuery.ajax({
		        type: 'GET',
		        url: '/calendar-proposal.md',
		        dataType: 'text',   
		        success: function(data){
		       		self.parseAgenda(data)
		        },
		        error: function (data) {
		        	console.log('error', data);
		        }
    		});
		},

		parseLink: function (str) {
			
			var link = str.match(/\[[A-Záíéóúa-z0-9 \](:\/\.]{0,}\)/gi, str);

			if (link && link[0]) {
				var literal = link[0].match(/\[.*\]/gi),
					url = link[0].match(/(http|https).*\)/gi)

				if (literal && literal[0]) {
					if (url && url[0]) {
						return str.replace(link[0], '<a href="' + url[0].replace(')', '') + '">' + literal + '</a>');
					}
				}

			}

			return str;
		},

		parseAgenda: function (data) {
			var agenda = data.split('#'), 
				date = [],
				elements = '<ul>';

			for (var i = 0, len = agenda.length; i < len; i++) {
				date = agenda[i].match(/[0-9]{1,2}\/[0-9]{1,2}/gi);

				if (agenda[i].length !== 0 && date && date.length === 1 && this.isFutureDate(date)) {
					elements += '<li>' + this.parseLink(agenda[i]) + '</li>';
				}
			}
			elements += '</ul>';

			jQuery('.hack-agenda-area').append(elements)
		},

		bindEvents: function () {

		}
	}
}

jQuery(document).ready(function () {
	var page = new Page();
	page.init();
});