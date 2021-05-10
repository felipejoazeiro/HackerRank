function reverseString(s) {
    try{    
        var reverse = s.split('').reverse().join('')
        console.log(reverse)
    }catch(err){
        console.log(err.message)
        console.log(s)
    }
    
}