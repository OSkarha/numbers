(function(){ 

    'use strict';

    let num1, num2, min, max, i;

    do {
       num1 = +prompt ('Пожалуйста, введите первое число');  
       } while (isNaN(num1))

       

       do {
              num2 = +prompt ('Пожалуйста, введите второе число');  

       } while (isNaN(num2))

    

       if( num1 > num2 )  {
              max = num1;
              min = num2;
       } else if ( num1 < num2 ){
               max = num2;
              min = num1;
       } else if ( min == max ){
             document.write('Пожалуйста, введите диапозон чисел')
             
       } 


       if( min > 0 )  {
              i = min;
       } else if ( min <= 0 ){
              i = 1
       } 


       let ul=document.createElement('ul');
       ul.innerHTML='Простые числа:';

       nextPrime:
       for (i; i <= max; i++) { 

       for (let j = 2; j < i; j++) { 
              if (i % j == 0 ) continue nextPrime; 
        } 

        let li=document.createElement('li');
        li.innerHTML=(i);
        ul.appendChild(li);
        document.getElementById('main').appendChild(ul);


       }
})();