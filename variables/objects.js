//Objects
var  person ={
    };
    //show the datatype on the console
    console.log(typeof person);
    var car ={
        name:'fiat',
        year:2014,
        payment:['finance','chase'],
        login:function(){
        console.log('the user is logged in')
        }
    };
    //display the object
    console.log(car); 
    //add a property to the object
    car.topSpeed =320;
    console.log(car);
    //delete a property from the object
    delete car.topSpeed;
    console.log(car);
    person.login();



    
