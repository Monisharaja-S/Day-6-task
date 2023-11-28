class circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    //get radius and color
    getradius()
    {
        return `The radius of the circle is ${this.radius} and its color is ${this.color}`
    }
    //set radius
    setradius(newradius)
    {
        this.radius=newradius;
    }
    //set color
    setcolor(newcolor)
    {
        this.color=newcolor;
    }
    //toString
    toString()
{
    return `"Circle [Radius: ${this.radius}, Color: ${this.color}]"`;
   
}
//Area
calculateArea()
{
     var area=Math.PI*Math.pow(this.radius,2);
     return `Area of the circle: ${area}`;
}
//Circumference
calculateCircumference()
{
    var circumference= 2* Math.PI*this.radius;
    return `Circumference of the circle: ${circumference}`;
}

}
var circles=new circle("1.0","red");
console.log(circles.getradius());  

circles.radius="3.0"
circles.color="Green"
console.log(circles.radius);
console.log(circles.color);
console.log(circles.toString());
console.log(circles.calculateArea());
console.log(circles.calculateCircumference());



