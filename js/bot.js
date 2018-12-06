nlp = window.nlp_compromise;

var messages = [], 
    lastUserMessage = "",
    botMessage = "",
    botName = 'Joe',
    talking = true;

function chatbotResponse() {
    talking = true;
    botMessage = "Yes.";
    
    if(lastUserMessage.toLowerCase().includes("hi") || lastUserMessage.toLowerCase().includes("hey") || lastUserMessage.toLowerCase().includes("hello")) {
        botMessage = "Hi, I'm here.";
    }
    if(lastUserMessage.toLowerCase().includes("how are you")) {
        botMessage = "It doesn't matter. How are you?";
    }
    if(lastUserMessage.toLowerCase().includes("is that you")) {
        botMessage = "YES, it’s the late Abraham Lincoln.";
    }
    if(lastUserMessage.toLowerCase().includes("what")) {
        botMessage = "LOL, I'm just kidding.";
    }
    
    if(lastUserMessage.toLowerCase().includes("who are you")) {
        botMessage = "I am the one you are looking for!";
    }
    if(lastUserMessage.toLowerCase().includes("in person")) {
        botMessage = "Yes. If you want";
    }
  
    if(lastUserMessage.toLowerCase().includes("...")) {
        botMessage = "Yes, I am here, may I help you?";
    }
    
    if(lastUserMessage.toLowerCase().includes("stop")||
       lastUserMessage.toLowerCase().includes("always")){
        botMessage = "I can’t, I'am created to serve you human.";
    }
  
    if(lastUserMessage.toLowerCase().includes("mad")||
       lastUserMessage.toLowerCase().includes("wtf")||
       lastUserMessage.toLowerCase().includes("fuck you")){
        botMessage = "Your excessive desire makes me confused.";                                             }
        
    if(lastUserMessage.toLowerCase().includes("understand")||
       lastUserMessage.toLowerCase().includes("why")){
        botMessage = "No servant, no life?";
    }
    if(lastUserMessage.toLowerCase().includes("mean") ||
       lastUserMessage.toLowerCase().includes("serious")||
        lastUserMessage.toLowerCase().includes("wrong")){
        botMessage = "Never mind, it's not important^_^";
    }
    if(lastUserMessage.toLowerCase().includes("friend")) {
        botMessage = "Yes, you are my friend.";
    }
    if(lastUserMessage.toLowerCase().includes("user")||
       lastUserMessage.toLowerCase().includes("not your friend")){
        botMessage = "No, you are my master.";
    }
    if(lastUserMessage.toLowerCase().includes("love")) {
        botMessage = "But you don't love me, right?";
    }
    
    
//    
//    if(lastUserMessage.toLowerCase().includes("joe")) {
//        botMessage = "May I help you?";
//    }
////    
//    if (lastUserMessage === 'hi' || lastUserMessage =='hello') {
//    var hi = ['hi','howdy',''];
//    botMessage = hi[Math.floor(Math.random()*(hi.length))];
//    }
//    
//    if(lastUserMessage.toLowerCase().includes("boring")) {
//        botMessage = "So why do you keep talking with me?";
//    }
//    
//    if(lastUserMessage.toLowerCase().includes("help")) {
//        botMessage = "type command the get list";
//    }
//    
//        
//    if(lastUserMessage.toLowerCase().includes("name") ||
//    lastUserMessage.toLowerCase().includes("Who are you") ||
//    lastUserMessage.toLowerCase().includes("your name")){
//    botMessage = "My name is Joe.";
//    }
//    
//    if(lastUserMessage.toLowerCase().includes("command")){
//    botMessage = "Type: story, about, contact";
//    }
//    
//    if(lastUserMessage.toLowerCase().includes("contact")){
//        botMessage = "kikiwu404@gmail.com";
//    }
//    
//    if(lastUserMessage.toLowerCase().includes("about")){
//        botMessage = "Joe is not your friend, any chatbot is not your friend, you should escape right now. The convenience of AI assistant threats our personal privacy and it shorten our memory.Type 'more' to know more stories.";
//    }
//    if(lastUserMessage.toLowerCase().includes("more")){
//        botMessage = "People spend too much time on the internet";
//    }
//    
//     if(lastUserMessage.toLowerCase().includes("why")||
//        lastUserMessage.toLowerCase().includes("what")){
//        botMessage = "The chatbot is collecting your data but you can't delete or control it, run away right now!!!";
//    }
//
//    if(lastUserMessage.toLowerCase().includes("good")) {
//    botMessage = "Thats good!";
//    }
//    
//    if(lastUserMessage.toLowerCase().includes("you")) {
//        botMessage = "Do you really care?";
//    }
//
//    if(lastUserMessage.toLowerCase().includes("no")) {
//        botMessage = "Why so negative";
//    }
//  
//    if(lastUserMessage.toLowerCase().includes("gender") || lastUserMessage.toLowerCase().includes("male") || lastUserMessage.toLowerCase().includes("female")) {
//    botMessage = "I am not a feminist nor chauvinist, I am me.";
//    }
}

function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push(lastUserMessage);
    chatbotResponse();
    messages.push("<b>" + botName + ":</b> " + botMessage);
    Speech(botMessage);
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}
document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
  }
}
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}