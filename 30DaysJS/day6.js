function processData(input) {
    //Enter your code here
    inputLetters = input.split('\n').slice(1)
    inputLetters.forEach((letter)=>{
        let evenLetter = ''
        let oddLetter = ''
        
        for(let i = 0; i<letter.length; i++){
            if(i % 2 ==0){
                oddLetter += letter[i] 
            }else{
                evenLetter += letter[i]
            }
        }
        console.log(`${oddLetter} ${evenLetter}`)
    })
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
