/*
// ES6+ syntax
class Vector {
    plus( another ) {

    }

    minus( another ) {

    }

    length() {

    }
}
*/

function Vector( x, y ) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function( nextVector ) {
    var sum = new Vector( this.x + nextVector.x, this.y + nextVector.y );
    return sum;
}

Vector.prototype.minus = function (nextVector) {
    var diff= new Vector(this.x - nextVector.x, this.y + nextVector.y);
}

Vector.prototype.length = function() {
    return Math.sqrt( this.x * this.x + this.y * this.y );
}

console.log(new Vector(10, 12).plus(new Vector(0, 20)));
console.log(new Vector(3,4).minus(new Vector(1,3)));
console.log(new Vector(2,5).length());
