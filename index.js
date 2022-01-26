
// calculation should be -> amount + (amount * vat / 100) ) + tip 

const calculateBill = (amount,vat,tip)=>{

    if (typeof amount  !== 'number')
    {
        return "error";
    }

    if (typeof vat  !== 'number')
    {
        return "error";
    }

    if (typeof tip  !== 'number')
    {
        return "error";
    }

     const bill= amount + (amount * vat / 100) + tip ;
     return "£"+bill;
}

module.exports = calculateBill;