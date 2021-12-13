var window_width = window.innerWidth;
var window_height = window.innerHeight;
var size_canvas = [window_width,window_height]
var size_square_paper = [512, 512]

let url = ("https://coolors.co/fff700-6b2adc-ff001e-00dd6e-00ffc8-d5f2e3-feda32")
var colors
var index_colors_palette = 0


var number_squares = 5
var frequency_color_hor = 5
var frequency_color_ver = 5


var design_type	= {
	square: 1,
	oval: 2,
	nastri: 3,
	renna: 4,
	lines: 5,
	custom: 6
	}

var type_paper_draw = design_type.custom






function preload(){
	renna = loadImage("svg/renna_mini.svg");
}


function setup() {
  colors = createPalette(url, 100)
  console.log(colors)


  let cnv = createCanvas(size_canvas[0], size_canvas[1]);
  cnv.parent('canvas_p5');
  graphic_paper = createGraphics(size_square_paper[0], size_square_paper[1]);
  graphic_double_paper = createGraphics(size_square_paper[0]*2, size_square_paper[1]);
}




function draw() {
  background(colors[index_colors_palette+2]);
  chessboard(number_squares,size_square_paper[0], size_square_paper[1], colors, type_paper_draw);

  drawpattern();

}






function chessboard(number_squares, width_canvas, height_canvas, colors, design_type) {

	graphic_paper.fill(colors[index_colors_palette])
	graphic_paper.rect(0,0,  width_canvas, height_canvas)

	w_side_squares = width_canvas / number_squares;
	h_side_squares = height_canvas / number_squares;

	for (let x = 0; x < number_squares; x++ ){
		for (let y = 0; y < number_squares; y++ ){



			switch (design_type){

				case 1:
					if( (x+1*(y))%frequency_color_hor == 0){
						graphic_paper.stroke(colors[index_colors_palette+1])
						graphic_paper.fill(colors[index_colors_palette+1])
						type_shape("rect",w_side_squares*x, h_side_squares*y, w_side_squares, w_side_squares)
					}else{}
				break;

				case 2:
						if( (x+1*(y))%frequency_color_hor == 0){
						graphic_paper.stroke(colors[index_colors_palette+1])
						graphic_paper.fill(colors[index_colors_palette+1])
						type_shape("oval",w_side_squares*x, h_side_squares*y, w_side_squares, w_side_squares)
					}else{}
						
				break;

				case 3:
					if((x+1)%frequency_color_hor == 0 || (y+1)%frequency_color_ver == 0) {
						graphic_paper.stroke(colors[index_colors_palette+1])
						graphic_paper.fill(colors[index_colors_palette+1])
					}else{
						graphic_paper.stroke(colors[index_colors_palette])
						graphic_paper.fill(colors[index_colors_palette])}

						type_shape("rect",w_side_squares*x, h_side_squares*y, w_side_squares, w_side_squares)
				break;

				case 4:
					if((x+y)%frequency_color_hor == 0 || y%frequency_color_ver == 0){
  						graphic_paper.image(renna,w_side_squares*x, h_side_squares*y, w_side_squares, w_side_squares);
  						renna.resize(w_side_squares,w_side_squares)
					}else{}
				break;

				case 5:
					design_single_square(w_side_squares*x, h_side_squares*y,w_side_squares,7,colors)
				break;

				case 6:
					if( (x)%frequency_color_hor == 0 || (y*x)%frequency_color_ver == 0){
						graphic_paper.stroke(colors[index_colors_palette+1])
						graphic_paper.fill(colors[index_colors_palette+1])
						type_shape("rect",w_side_squares*x, h_side_squares*y, w_side_squares, w_side_squares)
					}else{}
				break;


			}
		}
	}





}


function type_shape(type_shape, x_shape, y_shape, w_shape){

	switch (type_shape){

		case "rect":
		    graphic_paper.rect(x_shape, y_shape, w_shape, w_shape)
		break;

		case "oval":
			graphic_paper.ellipse(x_shape+w_shape/2, y_shape+w_shape/2, w_shape)
		break;
	}
}



function drawpattern(){

  tint(255, 255);
  push()
  translate(-size_square_paper[0]/2,-size_square_paper[1]/2)

  pattern_left_image = image(graphic_paper,window_width/2,window_height/2)


  //tint(190, 255);
  // image(graphic_paper,window_width/2+(size_square_paper[0]),window_height/2)
  // image(graphic_paper,window_width/2-(size_square_paper[0]),window_height/2)

  // image(graphic_paper,window_width/2-(size_square_paper[0]),window_height/2-(size_square_paper[1]))
  // image(graphic_paper,window_width/2+(size_square_paper[0]),window_height/2-(size_square_paper[1]))
  // image(graphic_paper,window_width/2,window_height/2-(size_square_paper[0]))

  // image(graphic_paper,window_width/2-(size_square_paper[0]),window_height/2+(size_square_paper[1]))
  // image(graphic_paper,window_width/2,window_height/2+(size_square_paper[1]))
  // image(graphic_paper,window_width/2+(size_square_paper[0]),window_height/2+(size_square_paper[1]))
  pop()

  drawpattern_double()

}


function drawpattern_double(){
	graphic_double_paper.image(graphic_paper,0,0);
	graphic_double_paper.image(graphic_paper,size_square_paper[0],0);

}


function design_single_square(x_square,y_square,side,des_number_square,colors) {

	side_squares = side / des_number_square

	for(var x = 0; x < des_number_square; x++){
		for(var y = 0; y < des_number_square; y++){

			if(x%frequency_color_hor == 0){
				graphic_paper.stroke(colors[index_colors_palette]);
				graphic_paper.fill(colors[index_colors_palette]);

			}else{
				graphic_paper.stroke(colors[index_colors_palette+1]);
				graphic_paper.fill(colors[index_colors_palette+1]);
				}



		graphic_paper.rect(x_square+(side_squares*x),y_square+(side_squares*y),side_squares,side_squares);

		}
	}


}



function keyPressed() {

  if (keyCode === ENTER) {
  	console.log("save")
    save(graphic_double_paper, 'QZPaper-double.png');
    save(graphic_paper, 'QZPaper-single.png');
  }
}



function createPalette(_url, percent = 100) {
  let slash_index = _url.lastIndexOf('/');
  let pallate_str = _url.slice(slash_index + 1);
  let arr = pallate_str.split('-');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = color('#' + arr[i] + hex(int(percent / 100 * 255), 2));
  }
  return arr;
}

