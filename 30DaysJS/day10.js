function main() {
    const n = parseInt(readLine().trim(), 10);
    
    var bin = n.toString(2).split('0')
    
    var highValue = Math.max(...bin)
    
    console.log(highValue.toString().length)
}


