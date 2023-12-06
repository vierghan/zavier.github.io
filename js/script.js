function hitungKeliling() {
    var sisiA = parseFloat(document.getElementById("sisiA").value);
    var sisiB = parseFloat(document.getElementById("sisiB").value);
    var sisiC = parseFloat(document.getElementById("sisiC").value);
    var keliling = sisiA + sisiB + sisiC;
    document.getElementById("hasil").value = keliling + " cm";
}

function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);
    var luas = 0.5 * alas * tinggi;
    document.getElementById("hasil").value = luas + " cm";
}

function resetForm() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("hasil").value = "";
}