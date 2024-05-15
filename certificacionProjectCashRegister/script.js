const inputCash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const changeDiv = document.getElementById("change");
const priceDiv = document.getElementById("price");
const cashDiv = document.getElementById("cashDiv")
const purchaseBtn = document.getElementById("purchase-btn");

let price = 19.5;

let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];

let value = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
]

let msg = {
    "0" : "Status: INSUFFICIENT_FUNDS",
    "1" : "Status: CLOSED",
    "2" : "Status: OPEN"
}

purchaseBtn.addEventListener("click", () => {
    let change = Number(inputCash.value) - price;
    priceDiv.innerHTML =  `PRICE: ${price}`;
    cashDiv.innerHTML = `CASH: ${inputCash.value}`
    changeDiv.innerHTML = `CHANGE: ${change}`;
    let cashInDrawer = 0;
    let element;

    if (change < 0) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    if (change === 0) {
        changeDue.textContent = "No change due - customer paid with exact cash";
        return;
    }

    for(let i = 0; i < cid.length; i++) {
        cashInDrawer += cid[i][1]
    }
    
    if(cashInDrawer < change) {
        return changeDue.textContent = msg[0];
    }

    if(cashInDrawer === change) {
        element = cid.find((element) => {
            if( element[1] === change){
                return element[0]
            }
        });
        return changeDue.textContent = `${msg[1]} ${element.join(": $")} `;
    }

    else {
        let changeArr = []
        let count = 0;

        for (let i = value.length - 1; i >= 0; i--) {
            while (change.toFixed(2) >= value[i][1] && cid[i][1] / value[i][1] >= 1 && change.toFixed(2) >= 0) {
                change -= value[i][1];
                cid[i][1] -= value[i][1];
                count++   
            }
            if(count != 0){
                changeArr.push(`${cid[i][0]}: $${count * value[i][1]}`);
            }
            count = 0;             
        }
        changeArr.length >= 1 && change.toFixed(2) == 0 ? changeDue.textContent = `${msg[2]} ${changeArr.join(" ")}`  : changeDue.textContent = msg[0];
    }
})




