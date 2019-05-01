var money = prompt("Ваш бюджет на месяц","");
var time = prompt("Введите дату в формате YYYY-MM-DD","");

var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    saving : false
};

var itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце","");
var amountOfExpenses = prompt("Во сколько обойдется","");
var itemOfExpenditure1 = prompt("Введите обязательную статью расходов в этом месяце","");
var amountOfExpenses1 = prompt("Во сколько обойдется","");

appData.expenses.itemOfExpenditure = amountOfExpenses;
appData.expenses.itemOfExpenditure1 = amountOfExpenses1;

alert(+appData.budget / 30);

