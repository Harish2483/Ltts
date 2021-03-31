function validateform(){  
    var team1=document.myform.team1.value;  
    var team2=document.myform.team2.value;  
      
    if (team1==team2){  
      alert("Invalid Input");  
      return false;  
    } 
    var team1=document.myform.team1.value;  
    var team2=document.myform.team2.value; 

    var score1=document.myform.score1.value;  
    var score2=document.myform.score2.value;
    var z = score1-score2;
    
    if(score1 > score2){
        alert(team1 + " Won By " + z + " Runs ");
    }else 
        alert(team2 + " Won By " + z + " Runs ");
    
}  

/*
function showMessage(){
    var score1=document.myform.score1.value;  
    var score2=document.myform.score2.value;
    var z = score1-score2;
    if(score1 > score2){
        document.getElementById('spanResult').innerHTML = z;
             
    }else
    {
        document.getElementById('spanResult').innerHTML = z;
    }
}
*/
