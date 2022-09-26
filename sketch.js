function preload() {
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51, 76, 160);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {

  //variable declarations
    let star_translation_x = [630, 320, 170, -220, -410, -270, -610, -550];     //ellipses left/right x-translation
    let star_translation_y = [-220, -160, -300, 150, -230, -70, -350, 80];      //ellipseses up/down y-translation
    let star_rotate = [-111, -55, -55, -44, -44, -22, -44, -22];      //radius of ellipses rotation
    let star_random_150 = random(0, 150)    //random number to determine the x-coordinate of the center of each new ellipse, changing the radius of the stars.
    let star_random_60 = random(0, 60);     //random number to determine the x-coordinate of the center of each new ellipse, changing the radius of the stars.
    let star_random_90 = random(0, 90);     //random number to determine the x-coordinate of the center of each new ellipse, changing the radius of the stars.
    let star_random_40 = random(0, 40);     //random number to determine the x-coordinate of the center of each new ellipse, changing the radius of the stars.

    let rectangle_fill_r = [92, 63, 34];    //rectangles fill color (red of rgb)
    let rectangle_fill_g = [124, 79, 34];   //rectangles fill color (green of rgb)
    let rectangle_fill_b = [187, 136, 84];  //rectangles fill color (blue of rgb)
    let rectangle_translation_x = [600, 1260, 1035, 1160, 1300, 1460, 1500, 30, 110, 1140, 1230, 1290, 1370, 1430, 1500];   //rectangles left/right x-translation
    let rectangle_translation_y = [180, 40, 110, 70, 55, -10, -30, 10, 40, 35, 45, 55, 35, 40, 20];                         //rectangles up/down y-translation
    let rectangle_rotate = [-5, -15, 40, 60, 35, -10, 50, -15, 10, -15, 28, 45, 10, 35, 10];    //angle of rectangles rotation
    let rectangle_width = [1060, 650, 250, 250, 250, 250, 250, 120, 120, 120, 120, 120, 120, 120, 120];     //rectangles width
    let rectangle_height = [450, 450, 250, 250, 250, 250, 250, 120, 120, 120, 120, 120, 120, 120, 120];     //rectangles heigth
    let rectangle_border_radius = [80, 80, 15, 15, 15, 15, 15, 18, 18, 18, 18, 18, 18, 18, 18];   //radius of rectangle's corners

    let triangle_x1 = [260,270,290,300,350,320,410];    //triangles: x-coordinate of the first point
    let triangle_x2 = [320,370,450,430,430,440,490];    //triangles: x-coordinate of the second point
    let triangle_x3 = [230,240,270,290,390,430,460];    //triangles: x-coordinate of the third point
    let triangle_y3 = [570,340,305,30,350,520,570];     //triangles: y-coordinate of the third point

    noStroke();     //disables drawing the outline

    //stars (ellipses)
    //loop for 8 stars(ellipses)
    
    for (let s = 0; s < 8; s++) { 

       push();      //for each element in the loop, the push command saves the current drawing style settings and transformations

        let stars_color_interpolation = random();     //random valiable for color interpolation
        let stars = lerpColor(color(171, 172, 158), color('yellow'), stars_color_interpolation);      //blending of two colors with a random interpolation
        fill(stars);      //color filling
        translate(width / 2 + star_translation_x[s], height / 2 + star_translation_y[s]);     //object displacement based on list of array's values (star)
        rotate(star_rotate[s] * frameCount);      //object rotation based on list of array's values (star_rotate) multipied by frameCount

        //draw of ellipses with random x-coordinate of the center of the ellipse
        //the random number is different for different groups of stars
        if (s == 0)
        { ellipse(star_random_150, 0, 2, 20); }

        if (s == 1 || s == 2 || s == 4 || s == 6)
        { ellipse(star_random_60, 0, 2, 20); }

        if (s == 3)
        { ellipse(star_random_90, 0, 2, 20); }

        if (s == 5 || s == 7)
        { ellipse(star_random_40, 0, 2, 20); }
        
        pop();      //pop command restore the previous drawing settings
     }
    
    //sky (ellipse)
        push();     //for each element in the loop, the push command saves the current drawing style settings and transformations
            
            translate(windowWidth / 2, windowHeight / 2);     //object displacement using window width and height variables
            rotate(frameCount);     //object rotation based on frameCount

            //loop for 200 ellipses draw, with different blended color
            for (let sk = 0; sk < 200; sk++) {
                let stars_color_interpolation = random();     //random valiable for color interpolation
                let ellipse_x = random(2, 2000);              //random varianble for x-coordinate of the center of the ellipse
                let sky = lerpColor(color(131, 155, 201), color(19, 30, 110), stars_color_interpolation);     //blending of two colors with a random interpolation
                fill(sky);      //color filling
                ellipse(ellipse_x, 0, 2, 20);     //draw of ellipses
          }

        pop();      //pop command restore the previous drawing settings

    //landscape (rectangles)
    //loop for 16 rectangles draw
    for (let t = 0; t < 16; t++) {

        push();     //for each element in the loop, the push command saves the current drawing style settings and transformations
        
          //rectangle's colors change depending the group of rectangles using array's values (rectangle_fill_r/g/b)
          if (t == 0 || t == 1)
          { fill(rectangle_fill_r[0], rectangle_fill_g[0], rectangle_fill_b[0]); }      //rectangles filling (0, 1) with the first array color

          if (t == 2 || t == 3 || t == 4 || t == 5 || t == 6)
          { fill(rectangle_fill_r[1], rectangle_fill_g[1], rectangle_fill_b[1]); }      //rectangles filling (2, 3, 4, 5, 6) with the second array color

          if (t > 6)
          { fill(rectangle_fill_r[2], rectangle_fill_g[2], rectangle_fill_b[2]); }      //rectangles filling (from 7th onwards) with the third array color

          
          translate(rectangle_translation_x[t], windowHeight + rectangle_translation_y[t]);     //object displacement based on list of array's values (rectangle_translation_x/y))
          rotate(rectangle_rotate[t]);      //object rotation based on list of array's values (star_rotate) multipied by frameCount
          rect(0, 0, rectangle_width[t], rectangle_height[t], rectangle_border_radius[t]);      //rectangle's draw using array values

        pop();      //pop command restore the previous drawing settings
      }

    //tree (triangles)
    //loop for 7 triangles draw 
    for (let i = 0; i < 8; i++) { 

        push();     //for each element in the loop the push command saves the current drawing style settings and transformations
      
          fill(5,10,40);    //triangle's color
          
          triangle(triangle_x1[i], windowHeight, triangle_x2[i], windowHeight, triangle_x3[i], triangle_y3[i]);     //triangle's draw using array values
        
          pop();      //pop command restore the previous drawing settings
    }
}
