
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let counter = 0;
    for (let i = 0; i < firstRow.length; i++){
        if (firstRow.charAt(i) === 'а'){
            counter += 1;
        }
    }

    for (let j = 0; j < secondRow.length; j++){
        if (secondRow.charAt(j) === 'а'){
            counter -= 1;
        }
    }
    if (counter >= 0){
        return firstRow;
    }
    else{
        return secondRow;
    }
}
console.log(getRow(firstRow, secondRow)); // мама мыла раму
