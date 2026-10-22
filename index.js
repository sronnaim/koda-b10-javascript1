// Impure
const r = 144
let pi

function printCircleAreaAndCircumImpure() {
    if(r % 7 === 0)
        pi = 22/7
    else
        pi = 3.14

    console.log(pi * r * r)
    console.log(2 * pi * r)
}

// Pure
function printCircleAreaAndCircumPure(r) {
    let pi

    if (r % 7 === 0) 
        pi = 22/7
    else 
        pi = 3.14

    return [pi * r * r, 2 * pi * r]
}

printCircleAreaAndCircumImpure()

const [area, circum] = printCircleAreaAndCircumPure(144)
console.log(area)
console.log(circum)