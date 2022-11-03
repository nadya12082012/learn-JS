"use strict"
let balans = Number (prompt( 'Введите сумму, которой располагаете'));
const pricePhon = 15; //стоимость телефона
const acsessoriesP = 5; // стоимость аксессуаров
const nalog = pricePhon*20/100; // налог
let sum = pricePhon + acsessoriesP + nalog; // стоимость комплекта телефон+аксессуар
let sumPhNal = pricePhon + nalog; // цена телефона с налогом
let acsnal = acsessoriesP + (acsessoriesP*20/100); // аксессуары с налогом
let phoneP = 0;
let accesoriesPr = 0;
let phoneN = 0; 
let accesoriesN = 0; 

while (balans > sum ){
if (balans >=sum ) {
  balans = balans - sum;
  phoneN += sumPhNal;
  accesoriesN += acsnal;
  phoneP++;
  accesoriesPr++;

}
else{
     if(balans >= acsnal && balans <= sumPhNal) {
      balans -= acsnal;
      accesoriesN +=acsnal;
      accesoriesN++
     }
     else{
        break;
       }   
    } 

  }

  alert("Вы можете купить телефонов:" +  phoneP);
  alert("Вы можете купить аксессуаров:" + accesoriesPr);

  if (balans<sum)
  alert("Покупка не может быть доступна, не хватает средств");
  else
    alert("Покупаем еще");


