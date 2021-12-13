function paper_select(){
	type_paper = document.getElementById("type_paper").value;
	document.getElementById("ver_label").style.display = "none";

	switch (type_paper){
		case "square":
			type_paper_draw = design_type.square
		break;

		case "oval":
			type_paper_draw = design_type.oval
		break;

		case "simmetrici":
			type_paper_draw = design_type.simmetrici
		break;

		case "nastri":
			type_paper_draw = design_type.nastri
			document.getElementById("ver_label").style.display = "block";
		break;

		case "renna":
			type_paper_draw = design_type.renna
			document.getElementById("ver_label").style.display = "block";
		break;

		case "lines":
			type_paper_draw = design_type.lines
		break;

		case "custom":
			type_paper_draw = design_type.custom
			document.getElementById("ver_label").style.display = "block";
		break;
	}


	index_colors_palette = (int(random(1)*3))*2
	console.log(index_colors_palette)
	draw()


}	


function numb_square_select(){
	number_squares = document.getElementById("numb_sqr").value;
	frequency_color_hor = document.getElementById("opt_sqr_hor").value;
	frequency_color_ver = document.getElementById("opt_sqr_ver").value;

	draw()

}

