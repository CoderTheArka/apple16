x = 0;
y = 0;
screen_width = "";
screen_height = "";
apple = "";
draw_apple = "";
to_number = "";
contentd = 0;
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

alert('CLICK DRAW AND SAY DRAW APPLE THE NUMBER OF TIMES YOU WANTED')
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 get_info = event.results[0][0].transcript;
 let str = get_info;
 console.log(str)

 // Using match with regEx
 let content = str.match(/(\d+)/);
  
 // Display output if number extracted
 if (content) {
     console.log(content[0]);
 }
contentd = content[0];
    console.log("Yes.");
    document.getElementById("status").innerHTML = "DRAWING APPLE " + contentd[0]; 
    screen_width = window.innerWidth;
    draw_apple = "set";


}

function setup() {
 canvas = createCanvas(1000, 1000);
}

function draw() {
  if(draw_apple == "set")
  {
    for (var i = 1 ; i <= contentd; i++) {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple , x , y , 50 , 50)
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
function preload(){
  apple = loadImage("apple.png");
}
