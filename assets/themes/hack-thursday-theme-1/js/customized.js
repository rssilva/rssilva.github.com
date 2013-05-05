var Page = function () {
	return {
		init: function () {
			this.setAgenda();
		},

		setAgenda: function () {
			this.getAgenda()
		},

		getAgenda: function () {
			$.ajax({
		        type: 'GET',
		        url: '/calendar-proposal.md',
		        dataType: 'text',   
		        success: function(data){
		       		console.log(data);
		        },
		        error: function (data) {
		        	console.log('error', data);
		        }
    		});
		},

		bindEvents: function () {

		}
	}
}

$(document).ready(function () {
	var page = new Page();
	page.init();
});