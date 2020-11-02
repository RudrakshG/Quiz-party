    var back_img;
    var let,let_img;
    var oneinf,oneinf_img;
    var during;
    var question1,question1_img;
    var q1op1;
    var q1op2,q1op3,q1op4;
    var c1_img,c1;
    var C1_img,info1;
    var wrong,wrong_img;
    var Question2,Ques2_image;

    function preload()
    {
      back_img=loadImage("First background.png");
     // during=loadImage("During game background.png");
      oneinf_img=loadImage("information_page.png");
      question1_img=loadImage("Q1.PNG");
      c1_img=loadImage("correct answer.png");
      C1_img=loadImage("information of first question.PNG");
      wrong_img=loadImage("Wrong answer.png");
      Ques2_image=loadImage("question 2.PNG");
    }

    function setup() {
      canvas = createCanvas(displayWidth - 20, displayHeight-30);
 
      //Create the Bodies Here.
    this.button=createButton("Let's Play");
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    

    }

      
      
    


    function draw() {
      rectMode(CENTER);
      background(back_img);
     // background(rgb(198,135,103));
      //image(back_img,0,-displayHeight*0,displayWidth/1, displayHeight*1);
      this.button.mousePressed(()=>{
        this.button.hide();
        //this.greeting.html("Hello ");
        oneinf=createSprite(displayWidth/2 + 30, displayHeight/2);
        oneinf.addImage("info",oneinf_img);
        this.button1=createButton("Start Quiz");
        this.button1.position(displayWidth/1.4 + 30, displayHeight/1.3);

        this.button1.mousePressed(()=>{
          oneinf.visible=false;
          this.button1.hide();
          question1=createSprite(displayWidth/2 + 30,displayHeight/2);
          question1.addImage("question1",question1_img);
          this.button2=createButton("A.De-oxyribonuclieo acid");
          this.button2.position(displayWidth/2.9 + 10, displayHeight/1.7);
          this.button3=createButton("B.Da-oxyribonuclieo antifoam")
          this.button3.position(displayWidth/1.8 + 10, displayHeight/1.7);

          this.button3.mousePressed(()=>{
           wrong=createSprite(displayWidth/2 + 30,displayHeight/2);
           wrong.addImage("Wrong",wrong_img);
           this.button2.hide();
           this.button3.hide();
           question1.visible=false;
           this.button5=createButton("NEXT");
           this.button5.position(displayWidth/1.8 + 10, displayHeight/1.7);
            
           this.button5.mousePressed(()=>{
             Question2=createSprite(displayWidth/2 + 30,displayHeight/2);
             Question2.addImage("Question2",Ques2_image);
             wrong.visible=false;
             this.button5.hide();
           })

          })

          this.button2.mousePressed(()=>{
            c1=createSprite(displayWidth/2 + 30,displayHeight/2);
            c1.addImage("correct1",c1_img);
 
            question1.visible=false;
            this.button2.hide();
            this.button3.hide();

            this.button4=createButton("PRESS HERE FOR MORE INFORMATION");
            this.button4.position(displayWidth/1.8 + 10, displayHeight/1.7)

            this.button4.mousePressed(()=>{
              info1=createSprite(displayWidth/2 + 30,displayHeight/2);
              info1.addImage("Information1",C1_img);
              c1.visible=false;
              this.button4.hide();
              this.button6=createButton("NEXT");
              this.button6.position(displayWidth/1.5 + 10, displayHeight/1.6);

              this.button6.mousePressed(()=>{
                Question2=createSprite(displayWidth/2 + 30,displayHeight/2);
             Question2.addImage("Question2",Ques2_image);
             this.button6.hide();
             info1.visible=false;

              })
             })

         })
        


        })
      
      
    })

    drawSprites();
  }



