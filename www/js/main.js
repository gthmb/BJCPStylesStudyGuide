$.ajax({
  dataType: "json",
  url: 'data/style-data.json',
  success: function(json){
  	console.log(json);
  }
});