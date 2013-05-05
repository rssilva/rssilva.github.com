var Page = function () {
	return {
		init: function () {
			this.setAgenda();
		},

		setAgenda: function () {
			this.getAgenda()
		},

		getAgenda: function () {
			jQuery.ajax({
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

jQuery(document).ready(function () {
	var page = new Page();
	page.init();
});