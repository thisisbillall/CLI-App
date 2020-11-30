var readlinesSync=require("readline-sync");

var username =readlinesSync.question("May i know ya name?");

console.log("Welcome "+username+" Let's see, How much you now about Bilal!");

var score=0;


var ques=[{
  q:"Who's Bilal's favourite actor srk or other?\n",
  a:"srk"
},{
 q:"where do Bilal live?\n",
  a:"akola"
},{
  q:"did Bilal like coffe??\n",
  a:"yes"
},{
   q:"how old is he now ??\n",
  a:"20"
},{
   q:"What did he like java or python??\n",
  a:"python"
},{
  
   q:"What did he like android  or ios??\n",
    a:"android"
}];


for (var i=0;i<ques.length;i++){

  var current=ques[i];
  play(current.q,current.a);
}

console.log("\nYAY! thanks "+username+" ,you scored: "+score);

function play(question,answer){

var userAnswer= readlinesSync.question("\n"+question);

if(userAnswer===answer)
{
  console.log("Right!");
  score+=1;
}
else
{
  console.log("Wrong!");
  score-=1;
}
console.log("score: "+score);
console.log("\n_______________________________________");
}