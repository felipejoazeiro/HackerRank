function modifyArray(nums) {
    var multiplication = (n)=>{
        if(n%2==0){
            return n*2
        }else{
            return n*3
        }
    }
    var newArray = nums.map(multiplication)
    return newArray
}