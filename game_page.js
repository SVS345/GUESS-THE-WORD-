player1=localStorage.getItem("P1");

 player2=localStorage.getItem("P2");

 p1score=0;
 p2score=0;

 document.getElementById("p1").innerHTML = player1+" : ";
 document.getElementById("p2").innerHTML = player2+" : ";
 document.getElementById("p1score").innerHTML = p1score ;
 
 document.getElementById("p2score").innerHTML = p2score ;
 document.getElementById("playerquestion").innerHTML = "question turn - " + player1;
 document.getElementById("playeranswer").innerHTML = "answer turn-  " + player2;

 function send(){
     getword=document.getElementById("word").value;
     word=getword.toLowerCase();
     console.log(word);
     
     char1=word.charAt(1);
     console.log(char1);

     div=Math.floor(word.length/2);

    char2=word.charAt(div);
    console.log(char2);

    min=word.length-1;

    char3=word.charAt(min);
    console.log(char3);

    remove1=word.replace(char1,"_");
    remove2=remove1.replace(char2,"_");
    remove3=remove2.replace(char3,"_");
    console.log(remove3);
      
    question_word="<h4 id='word_display'>Q."+remove3+"</h4>";
    input_box="<br>Answer : <input type='text' id='input_checkbox'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";

    row= question_word+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";

    }

    question="player1";
    ans="player2";

    function check(){
        getanswer=document.getElementById("input_checkbox").value;
        answer=getanswer.toLowerCase();
        console.log(answer);
        
         if(answer==word){

if (ans=='player1'){
p1score=p1score+1;
document.getElementById("p1score").innerHTML=p1score;
console.log("p1= "+p1score);
}

else{
    p2score=p2score+1;
    document.getElementById("p2score").innerHTML=p2score;
    console.log("p2= "+p2score);
}
         }
if (question=="player1"){
question="player2";
document.getElementById("playerquestion").innerHTML="questionturn - "+player2;
}
else{
question="player1";
document.getElementById("playerquestion").innerHTML="questionturn - "+player1;
}
if (ans=="player1"){
    ans="player2";
    document.getElementById("playeranswer").innerHTML="answerturn - "+player2;
    }
    else{
    ans="player1";
    document.getElementById("playeranswer").innerHTML="answerturn - "+player1;
  }

  document.getElementById("output").innerHTML="";
 }
         
         
 