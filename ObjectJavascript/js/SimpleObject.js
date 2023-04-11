var objectOne = {}

var objectTwo = {
    name: 'Marcelo',
    email: 'marcelo.acad@gmail.com',
    
    toCall: function () {
        return this.name
    }
}

console.log(objectTwo.toCall())
document.querySelector('#text-label').innerHTML = objectTwo.toCall()

var triangle = {
    sideA: 3,
    sideB: 3,
    sideC: 3,

    validateTriangle: function () {
        if (this.sideA < (this.sideB + this.sideC)) {
            if (this.sideB < (this.sideA + this.sideC)) {
                if (this.sideC < (this.sideA + this.sideB)){
                    return true
                }
            }
        } else {
            return false
        }
    },

    equilateralTriangle: function () {
        if (this.sideA === this.sideB && this.sideA == this.sideC) {
            if (this.sideB == this.sideC) {
                return true
            }
        } else {
            return false
        }
    },

    scaleneTriangle: function () {
        if (this.sideA !== this.sideB && this.sideA !== this.sideC) {
            if (this.sideB !== this.sideC) {
                return true
            }
        } else {
            return false
        }
    },

    isoscelesTriangle: function () {
        if (this.sideA === this.sideB && this.sideA !== this.sideC) {
            if (this.sideB === this.sideC && this.sideB !== this.sideA) {
                if (this.sideC == this.sideA && this.sideC !== this.sideB) {
                    return true
                }
            }
        } else {
            return false
        }
    }
}
