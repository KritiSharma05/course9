// Write your fibonacci series solution code here
let n=0;
let m=1;
let sum=0;
console.log(n);
console.log(m);
for(let i=0 ; i<8;i++)
{
    sum=n+m;
    n=m;
    m=sum;
    console.log(sum);
}