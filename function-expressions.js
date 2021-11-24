/*
setTimeout(function() {
        console.log('I waited 2 sec'); 
    }, 2000);
    */
/*
    let count = 0;
    function timeout(){
        setTimeout(function(){
            console.log('hi '+count++);
            timeout();
        },2000)
    }

    timeout();
    */

    (function(){
        console.log('Immediately Invoked Function Expression');
    })();

