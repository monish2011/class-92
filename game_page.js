player1_name = localStorage.getItem("player1_name");
player1_name = localStorage.getItem("player1_name");
player1_score = 0;
player2_score = 0;
document.geteElementById("player1_name").innerHTML = player1_name + ":";
document.geteElementById("player2_name").innerHTML = player2_name + ":";
document.geteElementById("player1_score").innerHTML = player1_score;
document.geteElementById("player2_score").innerHTML = player2_score;
document.geteElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.geteElementById("player2_anwser").innerHTML = "Anwser Turn - "+ player2_name;
function send(){
    get_word = document.getElementById("word").value;
    word = get_word.tolowerCase();
    console.log("Word in Lower Case =" + word);
    charAt1 = word.charAt(1);
    console.log(charAt1);
    length_divide_2 = Math.floor(word/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);
    length_minus_1 = word.length -1;
    charAt3 = word.charAt(length_minus_1);
    console.log(charAt3);
    remove_charAt1 = word.replace(charAt1,"_");
    remove_charAt2= word.replace(charAt2,"_");
    remove_charAt3= word.replace(charAt3,"_");
    console.log(remove_charAt3);
    question_word = "<h4 id='word_display'> Q.  " + remove_charAt3 +"</h4>";
    input_box = "<br> Anwser : <input type='text' id='input_check_box'> ";
    check_button ="<br><br> button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML =row;
    document.getElementById("word").value = "";

}
function check(){
    get_anwser = document.getElementById("input_check_box").value;
    anwser = get_anwser.toLowerCase();
    console.log("anwser in lower case -" + anwser);
    if (anwser == word){
        if(anwser_turn == "player_1"){
            player1_socre = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;

        }
        else
            if(anwser_turn == "player_2"){
                player1_socre = player2_score + 1;
                document.getElementById("player2_score").innerHTML = player2_score;
    

        }
    }
        if(question_turn == "player_1"){
            question_turn = "player_2";
            document.getElementById("player_question").innerHTMl = "Question turn -" + player2_name;


        }
        else{
            
                question_turn = "player_1";
                document.getElementById("player_question").innerHTMl = "Question turn -" + player1_name;
    
    
            }
            if(anwser_turn == "player1"){
                anwser_turn = "player2";
                document.getElementById("player_anwser").innerHTML = "Anwser turn - " + player2_name;
            }
            else{
                anwser_turn = "player1";
                document.getElementById("player_anwser").innerHTML = "Anwser turn - " + player1_name;
            }

    document.getElementById("output").innerHTML="";

    }

    
