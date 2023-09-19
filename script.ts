class Point {
  private abs: number;
  private ord: number;

  constructor(abs: number, ord: number) {
    this.abs = abs;
    this.ord = ord;
  }

  sePresenter(): void {
    console.log(`Mon abscisse est ${this.abs} et mon ordonnée est ${this.ord}`);
  }

  calculerDistance(p: Point): number {
    const dx = p.abs - this.abs;
    const dy = p.ord - this.ord;
    return Math.sqrt(dx * dx + dy * dy);
  }

  calculerMilieu(p: Point): Point {
    const milieuX = (p.abs + this.abs) / 2;
    const milieuY = (p.ord + this.ord) / 2;
    return new Point(milieuX, milieuY);
  }
}






class TroisPoints {
  private point1: Point;
  private point2: Point;
  private point3: Point;

  constructor(point1: Point, point2: Point, point3: Point) {
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
  }

  estEquilateral(): boolean {
    const distance1to2 = this.point1.calculerDistance(this.point2);
    const distance1to3 = this.point1.calculerDistance(this.point3);
    const distance2to3 = this.point2.calculerDistance(this.point3);

    return (
      Math.abs(distance1to2 - distance1to3) < 0.001 &&
      Math.abs(distance1to2 - distance2to3) < 0.001 &&
      //pour être sur mais non necessaire
      Math.abs(distance1to3 - distance2to3) < 0.001 
    );
  }
}


const pointA = new Point(0, 0);
const pointB = new Point(2, 0);
const pointC = new Point(1, Math.sqrt(3));


console.log('A', pointA)
console.log('B', pointB)
console.log('C', pointC)
console.log('')
console.log("Distance entre pointA et pointB:", pointA.calculerDistance(pointB));
console.log("Milieu entre pointA et pointB:", pointA.calculerMilieu(pointB));
console.log('');

const triangle = new TroisPoints(pointA, pointB, pointC);
console.log("Le triangle est équilatéral:", triangle.estEquilateral());

