// define function calculateWeightedAverage here to calcuate weighted average

let ap=10;
let pp=35;
let pq=10;
let mp=15;
let fp=30;
let aw=10;
let pw=85;
let qw=60;
let mw=75;
let fw=80;
let a;
let b;
let c;
let d;
let e;
function calculateWeightedAverage(a,b,c,d,e)
{
    let as= ap/100*(a);
    let p=pp/100*(b);
    let q=pq/100*(c);
    let m=mp/100*(d);
    let f=fp/100*(e);
    let sum;
    sum=as+p+q+m+f;
    console.log(" weights       % value of scores");
    console.log(`Assignment     ${as}`);
    console.log(`projects       ${p} `);
    console.log(`quiz           ${q}`);
    console.log(`mid term       ${m}`);
    console.log(`final exam     ${f}`);
    return sum;
}

//calling functions
console.log(`The weighted average score is : ${calculateWeightedAverage(97, 82, 60, 75, 80)}`);
