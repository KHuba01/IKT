function calculate() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("result").innerHTML = "A C oldal hossza: " + c.toFixed(2);
 
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 50 + b * 10);
    ctx.lineTo(50 + a * 10, 50 + b * 10);
    ctx.closePath();
    ctx.stroke();
}