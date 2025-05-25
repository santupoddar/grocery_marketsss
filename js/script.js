function formValidation(event){
    
    const firstName = document.getElementById('firstName').value ;

    const lastname = document.getElementById('lastName').value;

    const phone = document.getElementById('phone').value;

    const mail = document.getElementById('mail').value;

    const password = document.getElementById('password').value;



    if(firstName == "" || lastname == "" || phone == "" || mail == "" || password == ""){

        alert('All fields are mandatory!');
        event.preventDefault();
        return false;
        
    }else if(phone.length > 10 || phone.length < 10){

        alert('Enter a valid 10 digit mobile number!')
        event.preventDefault();
        return false;

    }else if(password.length > 5 || password < 5){
        alert('Enter 5 digit password!');
        event.preventDefault()
        return false;
    }
};





const hamburger = document.getElementById('hamburger-icon');
const lists = document.getElementById('nav-lists');

hamburger.addEventListener(('click'),()=>{
    lists.style.display = "block";
    hamburger.style.display = 'none';

});







