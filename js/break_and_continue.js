function breakNdContinue(skipNum){
    console.log(`Number to skip is: ${skipNum}`);

    for(let i = 1; i <= 50; i += 2){
        if(skipNum === i){
            console.log(`Yikes! Skipping number: ${skipNum}`);
        } else {
            console.log(`Here is an odd number: ${i}`);
        }
    }
}

breakNdContinue(27);