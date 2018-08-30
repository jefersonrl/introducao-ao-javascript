function ano() {
	var data_nasc = document.getElementById("data_nasc");
	var i;
	for(i = 2018; i >= 1920; i--){
		var opt0 = document.createElement("option");
		opt0.value = i;
		opt0.text = i;
		data_nasc.add(opt0, data_nasc.options[0]);
	}
}