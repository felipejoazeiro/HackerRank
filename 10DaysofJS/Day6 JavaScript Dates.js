function getDayName(dateString) {
    // Write your code here
    let dayName = new Date(dateString).toDateString().slice(0,3)
    
    switch(dayName){
        case 'Sun':
            dayName = 'Sunday'
            break;
        case 'Mon':
            dayName ='Monday'
            break;
        case 'Tue':
            dayName = 'Tuesday'
            break;
        case 'Wed':
            dayName = 'Wednesday'
            break;
        case 'Thu':
            dayName = 'Thursday'
            break;
        case 'Fri':
            dayName = 'Friday'
            break;
        case 'Sat':
            dayName = 'Saturday'
            break;
    }
    
    return dayName;
}