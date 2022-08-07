const ruhaniScore = 85;
const tomScore = 66;
const janeScore = 95;
const peterScore = 56;
const johnScore = 40;

function gradeCalculation(a, b){
    if (a >= 80) {
        console.log('A grade');
    }
    else if (a >= 60) {
        console.log('B grade');
    }
    else if (a >= 50) {
        console.log('C grade');
    }
    else if (a >= 40) {
        console.log('D grade');
    }
    else {
        console.log('F grade');
    }
}
gradeCalculation(ruhaniScore);
gradeCalculation(tomScore);
gradeCalculation(janeScore);
gradeCalculation(peterScore);
gradeCalculation(johnScore);



