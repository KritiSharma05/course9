let n = 31052022;
// Write solution code here to find the lucky number
let i;
let a;
let add=0;
let sum=0;
while(n!=0)
{
    i=n%10;
    add=add+i;
    n=parseInt(n/10);
}
while(add!=0)
{
    let j=add%10;
    sum=sum+j;
    add=parseInt(add/10);
}
console.log(`Your Lucky Number is ${sum}`);
