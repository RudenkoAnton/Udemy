var money = prompt("Ваш бюджет на месяц","");
var time = prompt("Введите дату в формате YYYY-MM-DD","");

var appData = {
    budget : money,
    timeData : time,
    expenses : {
        itemOfExpenditure : amountOfExpenses
    },
    optionalExpenses : undefined,
    income : undefined,
    saving : false
};

var itemOfExpenditure = prompt("Введите обязательную статью расходов в этом месяце","");
var amountOfExpenses = prompt("Во сколько обойдется","");

alert(+money / 30);

