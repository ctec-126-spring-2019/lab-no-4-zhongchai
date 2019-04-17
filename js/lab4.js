// lab4.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function intro(){
    let output = "<p>Once upon a time, not so long ago...</p>";

    return output;
}

function verse1(){
    let output = "<p>Tommy used to work on the docks <br>Union's been on strike <br>He's down on his luck, it's tough <br>So tough </p><p>Gina works the diner all day <br>Working for her man <br>She brings home the pay, for love <br>Mmm, for love </p>";

    return output;
}

function verse2(){
    let output = "<p>Tommy got his six-string in hock <br>Now he's holding in <br>When he used to make it talk so tough <br>Mmm, it's tough </p><p>Gina dreams of running away <br>When she cries in the night <br>Tommy whispers, \"Baby, it's okay. <br>Some day...\" </p>";

    return output;
}

function prechorus(extra){
    let output = "<p>We got to hold on to what we got <br>It doesn't make a difference if we make it or not <br>We got each other, and that's a lot for love <br>We'll give it a shot! </p>";

    if (extra) {
        output = "<p>She says, </p>" + output;
    }

    return output;
}

function chorus(extra){
    let output = "<p>WHOAAAAAA <br>We're halfway there <br>WHOAA-OAAAAAAH <br>Livin' on a prayer <br>Take my hand, we'll make it I swear <br>WHOAAAAAA, livin' on a prayer </p>";

    if (extra) {
        output += "<p>Livin' on a prayer! </p>";
    }

    return output;
}

function bridge(){
    let output = "<p>Ohh, we got to hold on, ready or not <br>You live for the fight <br>When that's all that you've got </p>";

    return output;
}



function main(){
    let finalOutput = intro() + verse1() + prechorus(1) + chorus() + verse2() + prechorus() + chorus(1) + bridge() + chorus() + chorus() + chorus(1); 
    // used to build lyrics string
    // call verse and chorus functions
    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput;
}

window.onload = function(){
    main();
}