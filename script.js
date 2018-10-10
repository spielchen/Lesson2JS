var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
		money,
		time, 
		expenses: {},
		income:[],
		optionalExpenses:{},
		savings: false
};

		 for (var i = 0; i < 2; i++) { 
				let a = prompt("Введите обязательную статью расходов в этом месяце"), 
						b = prompt("Во сколько обойдется?"); 
				if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
				&& a != '' && b != '' && a.length <50) { 
						console.log('done') 
						appData.expenses[a] = b; 
				}	else {
					alert("Введите статью расходов!");
					console.log('Была ошибка');
					i--;
				}
		};

		appData.moneyPerDay = appData.money / 30;
		alert("Ежедневный бюджет: " + appData.moneyPerDay);
		if (appData.moneyPerDay < 100){
			console.log('Минимальный уровень достатка')
		} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log('Средний уровень достатка');
		} else if ( appData.moneyPerDay > 2000) {
			console.log('Высокий уровень достатка');
		} else {
			console.log('произошла ошибка')
		}

// Второй способ

	/*var i = 0;
		while (i<2){
			var a = prompt("Введите обязательную статью расходов в этом месяце"),
					b = prompt("Во сколько обойдется?"); 
			appData.expenses[a] = b;
			i++;
		}*/

// Третий способ

/*var i = 0;
do{
	var a = prompt("Введите обязательную статью расходов в этом месяце"),
			b = prompt("Во сколько обойдется?"); 
			appData.expenses[a] = b;
			i++;
}
while(i<2);*/


console.log(appData.expenses);

