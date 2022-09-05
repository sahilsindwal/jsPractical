let age = 18;
let hasVterCard = 'no';

if (age >= 18 && hasVterCard == 'yes'){
    console.log('you can vote');
}
else if(age >= 18 && hasVterCard != 'yes'){
    console.log('please apply ur voter id card')

}
else{
    console.log(`you can't vote`);

}

//nested if

if (age >= 18 ){
    if( hasVterCard == 'yes'){
        console.log('you can vote');

    }

else{
    console.log(`you can't vote`);

}
}


