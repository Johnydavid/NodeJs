const walk = ()=>{
    console.log("I'm Walking");

     setTimeout(()=>{
            console.log("Walking slowly ");
        },2000);

        run();
   
}


const run = () =>{
    console.log("Im running");
    setTimeout(()=>{
        console.log("Running at a speed ");
    },1000);
    rest();
}


const rest = () =>{
    console.log("I'm taking rest");
    // walk();
    // run();

}

walk();
