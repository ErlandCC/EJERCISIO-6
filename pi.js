function pi() {
    var m = perseInt(document.getElementById("m").value);
    ec = 1
    for (i = 1; i <= m; i++) {
        ec = ec * (Math.pow((2 * i), 2)) / ((Math.pow(2 * i, 2)) - 1);
    }
    ec1 = 2 * ec
    ec2 = ec1.toFixed(4)
    document.getElementById('respi').innerHTML = ("La ecuacion con m = " + m + "es" + ec2 + " ")
}