//Write  password validation code here 

const url="http://localhost:3001/customer"
function validate_password() {
 
    var pass = document.getElementById('pass').value;
    var confirm_pass = document.getElementById('confirm_pass').value;
    if (pass != confirm_pass) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML
          = '☒ Use same password';
        document.getElementById('create').disabled = true;
        document.getElementById('create').style.opacity = (0.4);
    } else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML =
            '🗹 Password Matched';
        document.getElementById('create').disabled = false;
        document.getElementById('create').style.opacity = (1);
    }
}


function savePost(event) {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    //fromEntries returns a object created by key value entries
    alert(formProps.custId+" "+formProps.name+" "+formProps.pass +" "+formProps.confirm_pass+" "+formProps.email+" "+formProps.contact+" "+formProps.salary+" "+formProps.address);

    const postPromise = axios.post(url,formProps);
    // alert("success ") 

    //put alert or preventDefault to stop default reloading of page
    event.preventDefault();

    postPromise.then(response=>{
       
        alert("data added successfully")
    });

    postPromise.catch((reject)=>{alert(reject)})
}
