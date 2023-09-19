var Point = /** @class */ (function () {
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    Point.prototype.sePresenter = function () {
        console.log("Mon abscisse est ".concat(this.abs, " et mon ordonn\u00E9e est ").concat(this.ord));
    };
    Point.prototype.calculerDistance = function (p) {
        var dx = p.abs - this.abs;
        var dy = p.ord - this.ord;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Point.prototype.calculerMilieu = function (p) {
        var milieuX = (p.abs + this.abs) / 2;
        var milieuY = (p.ord + this.ord) / 2;
        return new Point(milieuX, milieuY);
    };
    return Point;
}());
var TroisPoints = /** @class */ (function () {
    function TroisPoints(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }
    TroisPoints.prototype.estEquilateral = function () {
        var distance1to2 = this.point1.calculerDistance(this.point2);
        var distance1to3 = this.point1.calculerDistance(this.point3);
        var distance2to3 = this.point2.calculerDistance(this.point3);
        return (Math.abs(distance1to2 - distance1to3) < 0.001 &&
            Math.abs(distance1to2 - distance2to3) < 0.001 &&
            //pour être sur mais non necessaire
            Math.abs(distance1to3 - distance2to3) < 0.001);
    };
    return TroisPoints;
}());
var pointA = new Point(0, 0);
var pointB = new Point(2, 0);
var pointC = new Point(1, Math.sqrt(3));
console.log('A', pointA);
console.log('B', pointB);
console.log('C', pointC);
console.log('');
console.log("Distance entre pointA et pointB:", pointA.calculerDistance(pointB));
console.log("Milieu entre pointA et pointB:", pointA.calculerMilieu(pointB));
console.log('');
var triangle = new TroisPoints(pointA, pointB, pointC);
console.log("Le triangle est équilatéral:", triangle.estEquilateral());
