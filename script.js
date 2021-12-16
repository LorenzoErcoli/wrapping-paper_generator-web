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


	type_color = document.getElementById("type_color").value;

	switch (type_color){
		case "0":
			index_colors_palette = 0
		break;

		case "1":
			index_colors_palette = 2
		break;

		case "2":
			index_colors_palette = 4
		break;

		case "3":
			index_colors_palette = 6
		break;

		case "4":
			index_colors_palette = 8
		break;
	}

	dominant = document.getElementById("dominant").value;

	switch (dominant){
		case "scuro":
			index_colors_palette_00 = index_colors_palette
			index_colors_palette_01 = index_colors_palette+1
		break;

		case "chiaro":
			index_colors_palette_00 = index_colors_palette+1
			index_colors_palette_01 = index_colors_palette
		break;
	}

	draw()


}	


function numb_square_select(){
	number_squares = document.getElementById("numb_sqr").value;
	frequency_color_hor = document.getElementById("opt_sqr_hor").value;
	frequency_color_ver = document.getElementById("opt_sqr_ver").value;

	draw()

}

