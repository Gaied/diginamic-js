function fibonacci(fib) {

    var n1 = 0;
    var n2 = 1;
    var somme = 0;
  
    for(let i = 2; i <= fib; i++){
       
       somme = n1 + n2; 
 
       n1 = n2; 

       n2 = somme; 
    }
  
    return fib ? n2 : n1;
 }
 
 console.log(fibonacci(20));
