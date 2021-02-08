# Node.js Deposit monthly rate calculator

## Installation

```
npm install
```
## Run server

```
node server.js
```
Defulat port is 43033

### Options

| Properties       | Type   | Default    | Description                                                           |
| ---------------- | ------ | ---------- | --------------------------------------------------------------------- |
| downPayments     | number | \*required | The  initial up-front partial payment                                 |
| numberOfMonts    | number | \*required | The number of months                                                  |
| interestRate     | number | optional required   | The effective interest rate per year in percent (e.g: 20.5)  |
| finalPayment     | number | optional required   | The final payment after all period                           |

### Example result

```
{
    "downPayments": 35100,
    "numberOfMonths": 1,
    "interestRate": 3,
    "monthlyRate": 87.75,
    "finalPayment": 35187.75
}
```

### Postman collection
For convenience, a collection has been made in Postman, you can find it Postman collection folder

### Licence
MIT