// Add your Circle class here
class Circle {
    constructor() {
        this.radius = radius;
    }
    get diameter() {
        return this.radius*2;
    }
    set diameter(radius) {
        this.radius = radius;
    }
    get circumference() {
        return this.radius * Math.PI;
    }
    set circumference(radius) {
        this.radius = radius;
    }
    get area() {
        return Math.PI * (this.radius * this.radius);
    }
    set area(radius) {
        this.radius = radius;
    }
}