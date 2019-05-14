var money = +prompt("Ваш бюджет на месяц?","");
var time = prompt("Введите дату в формате YYYY-MM-DD","");

var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false
};

for (var i = 0; i < 2; i++) {

    var itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце","");
    var amountOfExpenses = prompt("Во сколько обойдется","");
    
    if ((typeof(itemOfExpenditure)) ==='string' && typeof(itemOfExpenditure) != null && typeof(amountOfExpenses) != null
        && itemOfExpenditure != '' && amountOfExpenses != '' && itemOfExpenditure.length < 50) {
        console.log("done");
        appData.expenses[itemOfExpenditure] = amountOfExpenses;
    } else {
        continue;
    }
}
appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}


/* 
---Цикл While---

var k = 0;

while (k < 2) {
    var itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце","");
    var amountOfExpenses = prompt("Во сколько обойдется","");
    
    if ((typeof(itemOfExpenditure)) ==='string' && typeof(itemOfExpenditure) != null && typeof(amountOfExpenses) != null
        && itemOfExpenditure != '' && amountOfExpenses != '' && itemOfExpenditure.length < 50) {
        console.log("done");
        appData.expenses[itemOfExpenditure] = amountOfExpenses;
    } else {
        k++;
        continue;
    }
    k++;
}

---Цикл do While---

var k = 0;

do {
    var itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце","");
    var amountOfExpenses = prompt("Во сколько обойдется","");
    
    if ((typeof(itemOfExpenditure)) ==='string' && typeof(itemOfExpenditure) != null && typeof(amountOfExpenses) != null
        && itemOfExpenditure != '' && amountOfExpenses != '' && itemOfExpenditure.length < 50) {
        console.log("done");
        appData.expenses[itemOfExpenditure] = amountOfExpenses;
    } else {
        k++;
        continue;
    }
    k++;
} while (k<2);*/