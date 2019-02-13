var name = prompt('Enter your name');
var questions = ['3 + 5 = ?', '2 x 5 = ?', '4 / 4 = ?', '7 - 2 = ?', '6 % 6 = ?', '5 + 3 = ?'];
var correctAns = [8, 0, 1, 5, 0, 8];
var check = [];


    var q1 = parseFloat(prompt(questions[0]));
    var q2 = parseFloat(prompt(questions[1]));
    var q3 = parseFloat(prompt(questions[2]));     
    var q4 = parseFloat(prompt(questions[3]));              
    var q5 = parseFloat(prompt(questions[4]));
    var q6 = parseFloat(prompt(questions[5]));
    // if i remove parseint its  bettter i convert in  nno. in if statement becouse after i check this in another statement its a number or not
        var score = 0;

//use if for check condition add score and add value in arry  
    if (q1 === correctAns[0]) {
    score++;
    check[0] = "Correct";
}
else {
    check[0] = "Wrong";}


    if (q2 === correctAns[1]) {
    score++;
    check[1] = "Correct";
}
else {
    check[1] = "Wrong";}


    if (q3 === correctAns[2]) {
    score++;
    check[2] = "Correct";
}
else {
    check[2] = "Wrong";}


    if (q4 === correctAns[3]) {
    score++;
    check[3] = "Correct";
}
else {
    check[3] = "Wrong";}


    if (q5 === correctAns[4]) {
    score++;
    check[4] = "Correct";
}
else {
    check[4] = "Wrong";}


    if (q6 === correctAns[5]) {
    score++;
    check[5] = "Correct";
}
else {
    check[5] = "Wrong";}


var percentage = ( score / 6 ) * 100;

// use for make table
document.write('<center><table>');
    document.write(`<tr class="darkblack"><th>Questions</th><th>Your Answer</th><th>Correct Answer</th><th>Correct or Not</th></tr>`);

    document.write('<tr class="white">');
            document.write("<td>"+questions[0]+"</td>");
            document.write("<td>"+q1+"</td>");
            document.write("<td>"+correctAns[0]+"</td>");
            document.write("<td>"+check[0]+"</td>");
    document.write('</tr>');


    document.write('<tr class="liteblack">');
            document.write("<td>"+questions[1]+"</td>");
            document.write("<td>"+q2+"</td>");
            document.write("<td>"+correctAns[1]+"</td>");
            document.write("<td>"+check[1]+"</td>");
    document.write('</tr>');


    document.write('<tr class="white">');
            document.write("<td>"+questions[2]+"</td>");
            document.write("<td>"+q3+"</td>");
            document.write("<td>"+correctAns[2]+"</td>");
            document.write("<td>"+check[2]+"</td>");
    document.write('</tr>');


    document.write('<tr  class="liteblack">');
            document.write("<td>"+questions[3]+"</td>");
            document.write("<td>"+q4+"</td>");
            document.write("<td>"+correctAns[3]+"</td>");
            document.write("<td>"+check[3]+"</td>");
    document.write('</tr>');


    document.write('<tr class="white">');
            document.write("<td>"+questions[4]+"</td>");
            document.write("<td>"+q5+"</td>");
            document.write("<td>"+correctAns[4]+"</td>");
            document.write("<td>"+check[4]+"</td>");
    document.write('</tr>');     


    document.write('<tr class="liteblack">');
            document.write("<td>"+questions[5]+"</td>");
            document.write("<td>"+q6+"</td>");
            document.write("<td>"+correctAns[5]+"</td>");
            document.write("<td>"+check[5]+"</td>");
    document.write('</tr>');        


    document.write('<tr>');
            document.write("<td></td>");
            document.write(`<td class="score1">Score:</td>`);
            document.write(`<td class="score1">`+percentage.toFixed(2)+'%'+`</td>`);
            document.write("<td></td>");
    document.write('</tr>'); 
document.write('</table></center>');
