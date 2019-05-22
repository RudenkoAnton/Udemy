var money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?","");
    }
}

start();

var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false
};

function chooseExpanses() {
    for (var i = 0; i < 2; i++) {

        var itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце","");
        var amountOfExpenses = prompt("Во сколько обойдется","");
        
        if ((typeof(itemOfExpenditure)) ==='string' && typeof(itemOfExpenditure) != null && typeof(amountOfExpenses) != null
            && itemOfExpenditure != '' && amountOfExpenses != '' && itemOfExpenditure.length < 50) {
            console.log("done");
            appData.expenses[itemOfExpenditure] = amountOfExpenses;
        } else {
            i = i - 1;
        }
    }
}
 chooseExpanses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
 detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
} 

detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        var save = +prompt("Какова сумма накоплений?");
        var percent = +prompt("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (var i = 0; i < 3; i++){
        var itemOptExpenses = prompt("Введите статью необзательных расходов", "");
        appData.expenses[i] = itemOptExpenses;
    }
}