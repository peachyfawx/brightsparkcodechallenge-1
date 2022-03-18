var x = 0;

for(let x = 1; x < 101; x++)
{
    var mod5 = x%5;
    var mod3 = x%3;
    if (mod5 === 0 && mod3 === 0) console.log(x + " brightSPARK");
    else if (mod3 === 0) console.log(x + " bright");
    else if (mod5 === 0) console.log(x + " spark");
    else console.log(x);
};