function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z){

    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    return total;

}

getMyTaxReturnAndDoMyTaxesAndStuff(10000,5,50000,0);
