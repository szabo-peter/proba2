const changer = (string) =>{
    let output ='';
    for(i = 0; i < string.length; i++){
        if (string[i] === 'e'){
            output += '3';
        }
        else if (string[i] === 'a'){
            output += '4';
        }
        else {
            output += string[i];
        }
    }
    return output;
};

console.log(changer('erbha52'));
//ezeket is tesztelni kell:
console.log(changer('defg456'));
console.log(changer('abcd123'));
