function remark(eng,mth){
    const avg = (eng + mth) / 2

    let status

    if (avg >= 70){
      status = 'Excellent'  
    }
    else if (avg >= 60){
      status = 'Very Good'  
    }
    else if (avg >= 50){
      status = 'Good'  
    }
    else if (avg >= 40){
      status = 'Pass'  
    }
    else{
        status = 'Fail'
    }

    return status
}