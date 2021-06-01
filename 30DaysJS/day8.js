/*
function processData(input) {
    //Enter your code here
    var array = input.split('\n')
    
    var numberEntries = array.splice(0,1)
    
    var namesResearch = array.splice(numberEntries)
    
    for( var i = 0; i < numberEntries; i++){
        array[i] = array[i].split(" ")
    }
    
    var phoneMap = new Map(array)
    
    for(var i = 0; i < namesResearch.length; i++){
        if(phoneMap.has(namesResearch[i])){
            console.log(`${namesResearch[i]}=${phoneMap.get(namesResearch[i])}`)
        }else{
            console.log('Not found')
        }
    }
}  */