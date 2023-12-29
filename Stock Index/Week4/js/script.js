
populate(); //execute code when page loads

function populate() {
    let year = document.getElementById("Years").value;
    let amountSP, amountNas, amountDow;
    amountSP = amountNas = amountDow = 50000;
    let returnSP = .10; //avg annual returns
    let returnNas = .2218;
    let returnDow = .1072;
    //loop
    let tbody = document.querySelector("#tblReturns tbody");
    tbody.innerHTML += "";
    let usd = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });
    for (let cy = 1; cy <= year; cy++) {
        tbody.innerHTML += `<tr><td>${cy}</td><td>${usd.format(amountSP)}</td>`
            + `<td>${usd.format(amountDow)}</td><td>${usd.format(amountNas)}</td></tr>`;

        amountSP *= (1 + returnSP);
        amountNas *= (1 + returnNas);
        amountDow *= (1 + returnDow);
    }
}

function deleteRecord() {
    let table = document.querySelector("table");
    let row = document.getElementById("deleteRecord").value;
    table.deleteRow(row);
}
