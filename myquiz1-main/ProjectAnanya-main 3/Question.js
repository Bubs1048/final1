class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....").attribute(
      "placeholder"
      
    )
    this.input2 = createInput("Enter Correct Option No..");
    this.button1 = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.title.html("RIDDLE BUSTER");
    this.title.position(350, 0);

    this.question.html("It’s shorter than the rest, but when you’re happy, you raise it like it’s the best. What is it? " );
    this.question.position(150, 80);
    this.option1.html("1: hand " );
    this.option1.position(150, 130);
    this.option2.html("2: mechanical pencil" );
    this.option2.position(150, 150);
    this.option3.html("3: thumb " );
    this.option3.position(150, 170);
    this.option4.html("4: shoe" );
    this.option4.position(150, 190);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button1.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
  }
}
