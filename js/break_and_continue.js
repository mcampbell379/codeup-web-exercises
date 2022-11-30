function breakNdContinue(skipNum){
    console.log(`Number to skip is: ${skipNum}`);

    for(let i = 1; i <= 50; i += 2){
        if(i === skipNum){
            console.log(`Yikes! Skipping number: ${i}`);
        }  else if (i === skipNum){
            console.log(`Here is an odd number: ${i}`);
        }  else if (skipNum % 2 !== 0){
            console.log(`Try a different number.`);
            break;
        }
    }
}

breakNdContinue(27);