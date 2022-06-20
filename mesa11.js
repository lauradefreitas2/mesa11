const alicia = [23, 9, 32];
const bob = [33, 67, 43];

function encontrarGanhador(alicia, bob) {
    // console.log(alicia[0]);
    // console.log(bob[0]);
    let a = 0;
    let b = 0;

    if (alicia[0] > bob[0]) {
        a++;
    } else {
        b++;
    }

    if (alicia[1] > bob[1]) {
        a++;
    } else {
        b++;
    }

    if (alicia[2] > bob[2]) {
        a++;
    } else {
        b++;
    }
    // console.log (a);
    // console.log (b);
    if (a > b) {
        return "alicia";
    } else {
        return "bob";
    }

}

console.log("O ganhador é: " + encontrarGanhador(alicia, bob))