function inflationCalculator() {
    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');

    inflationRate = parseFloat(inflationRate.value);        //parseFloat racuna i decimalne brojeve, a parseInt samo cijele.   input je uvijek string, bez obzira sto je type=number, pa odje prebacamo vrijednost iz inputa iz stringa u broj da bi mogli da radimo kalkulacije
    money = parseFloat(money.value);

    let years = document.querySelector('#years').value;
    years = parseFloat(years);

    //formula za izracunavanje inflacije
    let worth = money + (money * (inflationRate / 100))

    for(let i = 1; i < years; i++) {
        worth += worth * (inflationRate / 100);
    }
    
    worth = worth.toFixed(2);


   let newElement = document.createElement('div');
   newElement.className = 'new-value';
   newElement.innerText = `Danasnjih ${money}eura vrijedi isto kao ${worth} za ${years} godina.`;

   document.querySelector('.container').appendChild(newElement);
}