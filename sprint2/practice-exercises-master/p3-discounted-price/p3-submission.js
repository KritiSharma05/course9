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

//Find the discounted price fro non-premium products

///Write code here
let notPremium=products.filter(products =>products.price <300);
let discount=notPremium.map(notPremium => (parseInt(notPremium.price * 85/100)));

for(var i=0;i<discount.length;i++)
{
    console.log(notPremium[i].productName+"   "+ discount[i]);
}
