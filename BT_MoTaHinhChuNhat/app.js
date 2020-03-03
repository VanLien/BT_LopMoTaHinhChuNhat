function Rectangle(length,width) {
    this.length=length;
    this.width=width;
    this.getLength=function () {
        return this.length;
    };
    this.getWidth=function () {
        return this.width;
    };
    this.getAcreage=function () {
        return this.length*this.width;
    };
    this.getPerimeter=function () {
        return (this.length+this.width)*2;
    };
    this.setWidth=function () {
        this.width=width;
    };
    this.setLength=function () {
        this.length=length;
    };
    this.display=function () {
        let c=document.getElementById("ractangle");
        let ctx=c.getContext("2d");
        ctx.fillStyle="red";
        ctx.fillRect(60,30,30,60);
    };
}
let number=new Rectangle(60, 30);

let length=number.getLength();
let width=number.getWidth();
let perimeter=number.getPerimeter();
let acreage=number.getAcreage();
document.getElementById("Result").innerHTML=
    "Chiều Dài : "+length+"<br>"+
    "Chiều Rông : "+width+"<br>"+
    "Diện Tích Là : "+perimeter+"<br>"+
    "Chu Vi Là : "+acreage;