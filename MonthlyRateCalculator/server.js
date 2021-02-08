const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//Server port
const port = 43033;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * Helper function for required value
 * @param {object} res 
 * @param {number} input 
 * @param {string} inputName 
 */
let checkInputHelper = (res,input,inputName) =>{
    if(!input){
        return res.status(400).send(`Please put a value for the parameter for ${inputName}`);
    }
};

/**
 * Helper function for NaN value
 * @param {object} res 
 * @param {number} input 
 * @param {string} inputName 
 */
let isNaNHelper = (res,input,inputName) =>{
    if(isNaN(input)){
        return res.status(400).send(`Please put in ${inputName} parameter only numeric value`);
    }
};

/**
 * Post requess for Calcualte a monthly payment(rate)
 */
app.post('/calculate', (req, res) => {
    const downPayments = Number(req.body.downPayments);
    const numberOfMonths = Number(req.body.numberOfMonths);
    let interestRate =  Number(req.body.interestRate) ;
    let finalPayment = Number(req.body.finalPayment)
    //Execude helper functions 
    checkInputHelper(res,downPayments, 'downPayments');
    checkInputHelper(res,numberOfMonths, 'numberOfMonths');
    isNaNHelper(res,downPayments,'downPayments');
    isNaNHelper(res,numberOfMonths,'numberOfMonths');
    if(!interestRate && finalPayment){
        //With provide finalPayment parameters
        isNaNHelper(res,finalPayment,'finalPayment');
        let interestRateCalc = (1 * (Math.pow(finalPayment / downPayments, 1 / (1 * numberOfMonths)) - 1))
        interestRate = (interestRateCalc * 100 * 12 ).toFixed(2)
    }else{
        //With provide interestRate parameters
        checkInputHelper(res,interestRate, 'interestRate or finalPayment for possible calculate');
        isNaNHelper(res,interestRate,'interestRate');
        let interestRateCalc = interestRate / 100 / 12
        finalPayment = (downPayments * Math.pow(1 + interestRateCalc / 1, 1 * numberOfMonths)).toFixed(2);
    }
    let monthlyRate = ((finalPayment - downPayments)/numberOfMonths).toFixed(2);
    //Return object with all parameters + monthlyRate and finalPayment
    res.json({
        downPayments,
        numberOfMonths,
        interestRate: Number(interestRate),
        monthlyRate: Number(monthlyRate),
        finalPayment: Number(finalPayment)
    });
    res.status(200)
    
});

app.listen(port, () => {
    console.log(`Started on PORT ${port}`);
})