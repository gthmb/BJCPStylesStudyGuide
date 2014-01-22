$.ajax({
  dataType: "html",
  url: 'data/style-data.json',
  success: function(json){
  	console.log(arguments);
  	$('.app').html('<pre>' + json + '</pre>');
  }
});