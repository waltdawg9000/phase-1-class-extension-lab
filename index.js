// Your code here
class Polygon {
    constructor(sides) {
        this.sides=sides
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((perimeter, side) => perimeter + side);
    }
}
class Triangle extends Polygon {
    get isValid() {
        return this.sides[0] + this.sides[1] > this.sides[2] && 
            this.sides[0] + this.sides[2] > this.sides[1] &&
            this.sides[1] + this.sides[2] > this.sides[0] ? true : false
    }
}

class Square extends Polygon {
    get isValid() {
        return this.countSides === 4 && this.sides[0] === this.sides[1] && 
            this.sides[1] === this.sides[2] && this.sides[2] === this.sides[3] 
    }

    get area() {
        return this.isValid ? this.sides[0]**2 : "Not valid"
    }
}