const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the stock of each non-premium products using function chaining
//Write code here
let count=0;
let filterResult1 = products.filter(item =>item.productName =='Gucci Round Bucklet Belt' && item.price <= 300)
.reduce((count,item)=>{
     return ++count;
},0)
console.log("Gucci Round Bucklet Belt = "+filterResult1);
let filterResult2 = products.filter(item =>item.productName =='Smiley T-Shirt' && item.price <= 300)
.reduce((count,item)=>{
     return ++count;
},count)
console.log("Smiley T-Shirt = "+filterResult2);
let filterResult3 = products.filter(item =>item.productName =='Shinie Nail Paint' && item.price <= 300)
.reduce((count,item)=>{
     return ++count;
},count)
console.log("Shinie Nail Paint = "+filterResult3);
let filterResult4 = products.filter(item =>item.productName =='Esbeda Wallet' && item.price <= 300)
.reduce((count,item)=>{
     return ++count;
},count)
console.log("Esbeda Wallet = "+filterResult4);