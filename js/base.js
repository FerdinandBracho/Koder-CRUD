//Function with optional paremeter 

// Valid since ES2015
function sumTwonum(numA, numB = 1)  {
    let result = numA + numB
    return result
}

console.log(sumTwonum(2))
////////////////////////////////////////////////////////////////////

//Traditional before Es2015
function sumTwonum2(numA, numB)  {
    numB = numB || 1
    let result = numA + numB
    return result
}

console.log(sumTwonum2(5))
