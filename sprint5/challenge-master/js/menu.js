//Write code to get menu data from the json-server using axios API

//Write code to load menu data using window onload event: getPromise is the promise result obained from Axios call
/*window.onload = () => getPromise.then((response) => {

});

//Write code to filter the menu item from list
const category = document.getElementById('category');
category.addEventListener('change', function (e) {
    findItems(category.value);
});

function findItems(categoryName) {

}*/
url="http://localhost:3000/menu";
function myFunction() {
  var x = document.getElementById("category").value;
 // document.getElementById("demo").innerHTML = "You selected: " + x;

  const getPromise = axios.get(url); // get all data from specified url
    // axios.get returns a promise
    getPromise.then((response) => {
        response.data.forEach(p => {
            if(p.category==x)
            document.body.innerHTML += `<br/> ${p.id}-${p.itemName} - ${p.price} <br/>`;
        })
    })

    getPromise.catch((reject)=>{alert(reject)})

   
}