//Function with optional paremeter 
////////////////////////////////////////////////////////////////

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
////////////////////////////////////////////////////////////

//multiples optional parameters 

function sumFour(numa, numb, numc, numd)    {
    numc = numc || 1
    numd = numd || 1
    return numa + numb + numc + numd
}

console.log(sumFour(1, 1, 2))