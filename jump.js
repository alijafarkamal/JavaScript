function func(n){
    if(n<2)
       { return n;}
    return func(n-1)+func(n-2)
}
console.log(func(6))