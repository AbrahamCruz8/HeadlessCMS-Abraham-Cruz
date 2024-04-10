async function demoFunction(){
    try {        
        const temp = await fetch("..data/content.json");
        const data = await temp.json();
        console.log('data: ' , data);
    } catch (error) {
        console.log('error: ' , error);
    }
}

demoFunction();