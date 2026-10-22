const circle = {
    r: 144,
    getPi: function() {
        if (this.r % 7 === 0)
            return 22/7

        return 3.14
    },
    printArea: function() {
        const pi = this.getPi()
        console.log(pi * this.r * this.r)
    },
    printCircum: function() {
        const pi = this.getPi()
        console.log(2 * pi * this.r)
    }
}

circle.printArea()
circle.printCircum()

circle.r = 200
circle.printArea()
circle.printCircum()