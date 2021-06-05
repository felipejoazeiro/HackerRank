class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, idNumber, scores){
        super(firstName, lastName, idNumber)
        this.scores = scores
    }
    
    
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){
        let avg_score = this.scores.reduce((total,num) => total+num) / this.scores.length
        
        if(avg_score >= 90){
            return 'O'
        }else if(avg_score >= 80 && avg_score < 90){
            return 'E'
        }else if(avg_score >= 70 &&  avg_score < 80){
            return 'A'
        }else if(avg_score >= 55 && avg_score < 70){
            return 'P'
        }else if(avg_score >= 40 && avg_score < 55){
            return 'D'
        }else if(avg_score<40){
            return 'T'
        }
    }
}