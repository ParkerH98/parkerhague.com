var bit;
var nibble;
var byte;
var kilobyte;
var megabyte;
var gigabyte;
var terrabyte;
var petabyte;
var exabyte;
var zettabyte;
var yottabyte;

var sizes = [bit, nibble, byte, kilobyte, megabyte, gigabyte, terrabyte, petabyte, exabyte, zettabyte, yottabyte];
var results = new Array(11);

// beginning of byte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function byteToKilobyte (x){

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function byteToMegabyte (x){

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function byteToGigabyte (x){

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

function byteToTerrabyte (x){

    var conversion = x / Math.pow(2, 40);
    return conversion;
}

function byteToPetabyte (x){

    var conversion = x / Math.pow(2, 50);
    return conversion;
}

function byteToExabyte (x){

    var conversion = x / Math.pow(2, 60);
    return conversion;
}

function byteToZettabyte (x){

    var conversion = x / Math.pow(2, 70);
    return conversion;
}

function byteToYottabyte (x){

    var conversion = x / Math.pow(2, 80);
    return conversion;
}

// beginning of kilobyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function kilobyteTobyte (x){

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function kilobyteToMegabyte (x){

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function kilobyteToGigabyte (x){

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function kilobyteToTerrabyte (x){

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

function kilobyteToPetabyte (x){

    var conversion = x / Math.pow(2, 40);
    return conversion;
}

function kilobyteToExabyte (x){

    var conversion = x / Math.pow(2, 50);
    return conversion;
}

function kilobyteToZettabyte (x){

    var conversion = x / Math.pow(2, 60);
    return conversion;
}

function kilobyteToYottabyte (x){

    var conversion = x / Math.pow(2, 70);
    return conversion;
}

// beginning of megabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function megabyteToByte (x){

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function megabyteToKilobyte (x){

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function megabyteToGigabyte (x){

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function megabyteToTerrabyte (x){

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function megabyteToPetabyte (x){

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

function megabyteToExabyte (x){

    var conversion = x / Math.pow(2, 40);
    return conversion;
}

function megabyteToZettabyte (x){

    var conversion = x / Math.pow(2, 50);
    return conversion;
}

function megabyteToYottabyte (x){

    var conversion = x / Math.pow(2, 60);
    return conversion;
}

// beginning of gigabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function gigabyteToByte (x){

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function gigabyteToKilobyte (x){

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function gigabyteToMegabyte (x){

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function gigabyteToTerrabyte (x){

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function gigabyteToPetabyte (x){

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function gigabyteToExabyte (x){

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

function gigabyteToZettabyte (x){

    var conversion = x / Math.pow(2, 40);
    return conversion;
}

function gigabyteToYottabyte (x){

    var conversion = x / Math.pow(2, 50);
    return conversion;
}

// beginning of terrabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function terrabyteToByte (x){

    var conversion = x * Math.pow(2, 40);
    return conversion;
}

function terrabyteToKilobyte (x){

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function terrabyteToMegabyte (x){

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function terrabyteToGigabyte (x){

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function terrabyteToPetabyte (x){

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function terrabyteToExabyte (x){

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function terrabyteToZettabyte (x){

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

function terrabyteToYottabyte (x){

    var conversion = x / Math.pow(2, 40);
    return conversion;
}

// beginning of petabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function petabyteToByte (x){

    var conversion = x * Math.pow(2, 50);
    return conversion;
}

function petabyteToKilobyte (x){

    var conversion = x * Math.pow(2, 40);
    return conversion;
}

function petabyteToMegabyte (x){

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function petabyteToGigabyte (x){

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function petabyteToTerrabyte (x){

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function petabyteToExabyte (x){

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function petabyteToZettabyte (x){

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

function petabyteToYottabyte (x){

    var conversion = x / Math.pow(2, 30);
    return conversion;
}

// beginning of exabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function exabyteToByte (x){

    var conversion = x * Math.pow(2, 60);
    return conversion;
}

function exabyteToKilobyte (x){

    var conversion = x * Math.pow(2, 50);
    return conversion;
}

function exabyteToMegabyte (x){

    var conversion = x * Math.pow(2, 40);
    return conversion;
}

function exabyteToGigabyte (x){

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function exabyteToTerrabyte (x){

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function exabyteToPetabyte (x){

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function exabyteToZettabyte (x){

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

function exabyteToYottabyte (x){

    var conversion = x / Math.pow(2, 20);
    return conversion;
}

// beginning of zettabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function zettabyteToByte (x){

    var conversion = x * Math.pow(2, 70);
    return conversion;
}

function zettabyteToKilobyte (x){

    var conversion = x * Math.pow(2, 60);
    return conversion;
}

function zettabyteToMegabyte (x){

    var conversion = x * Math.pow(2, 50);
    return conversion;
}

function zettabyteToGigabyte (x){

    var conversion = x * Math.pow(2, 40);
    return conversion;
}

function zettabyteToTerrabyte (x){

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function zettabyteToPetabyte (x){

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function zettabyteToExabyte (x){

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function zettabyteToYottabyte (x){

    var conversion = x / Math.pow(2, 10);
    return conversion;
}

// beginning of yottabyte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function yottabyteToByte (x){

    var conversion = x * Math.pow(2, 80);
    return conversion;
}

function yottabyteToKilobyte (x){

    var conversion = x * Math.pow(2, 70);
    return conversion;
}

function yottabyteToMegabyte (x){

    var conversion = x * Math.pow(2, 60);
    return conversion;
}

function yottabyteToGigabyte (x){

    var conversion = x * Math.pow(2, 50);
    return conversion;
}

function yottabyteToTerrabyte (x){

    var conversion = x * Math.pow(2, 40);
    return conversion;
}

function yottabyteToPetabyte (x){

    var conversion = x * Math.pow(2, 30);
    return conversion;
}

function yottabyteToExabyte (x){

    var conversion = x * Math.pow(2, 20);
    return conversion;
}

function yottabyteToZettabyte (x){

    var conversion = x * Math.pow(2, 10);
    return conversion;
}

function convertByte (x){

    var kcon = byteToKilobyte(x);
    var mcon = byteToMegabyte(x);
    var gcon = byteToGigabyte(x);
    var tcon = byteToTerrabyte(x);
    var pcon = byteToPetabyte(x);
    var econ = byteToExabyte(x);
    var zcon = byteToZettabyte(x);
    var ycon = byteToYottabyte(x);

    document.getElementById("convert1").value = kcon
    document.getElementById("convert2").value = mcon
    document.getElementById("convert3").value = gcon
    document.getElementById("convert4").value = tcon
    document.getElementById("convert5").value = pcon
    document.getElementById("convert6").value = econ
    document.getElementById("convert7").value = zcon
    document.getElementById("convert8").value = ycon

    document.getElementById("label1").innerHTML = "Kilobyte"
    document.getElementById("label2").innerHTML = "Megabyte"
    document.getElementById("label3").innerHTML = "Gigabyte"
    document.getElementById("label4").innerHTML = "Terrabyte"
    document.getElementById("label5").innerHTML = "Petabyte"
    document.getElementById("label6").innerHTML = "Exabyte"
    document.getElementById("label7").innerHTML = "Zettabyte"
    document.getElementById("label8").innerHTML = "Yottabyte"
}

function convertKilobyte (x){

    var bcon = kilobyteTobyte(x);
    var mcon = kilobyteToMegabyte(x);
    var gcon = kilobyteToGigabyte(x);
    var tcon = kilobyteToTerrabyte(x);
    var pcon = kilobyteToPetabyte(x);
    var econ = kilobyteToExabyte(x);
    var zcon = kilobyteToZettabyte(x);
    var ycon = kilobyteToYottabyte(x);

    document.getElementById("convert1").value = bcon
    document.getElementById("convert2").value = mcon
    document.getElementById("convert3").value = gcon
    document.getElementById("convert4").value = tcon
    document.getElementById("convert5").value = pcon
    document.getElementById("convert6").value = econ
    document.getElementById("convert7").value = zcon
    document.getElementById("convert8").value = ycon

    document.getElementById("label1").innerHTML = "Byte"
    document.getElementById("label2").innerHTML = "Megabyte"
    document.getElementById("label3").innerHTML = "Gigabyte"
    document.getElementById("label4").innerHTML = "Terrabyte"
    document.getElementById("label5").innerHTML = "Petabyte"
    document.getElementById("label6").innerHTML = "Exabyte"
    document.getElementById("label7").innerHTML = "Zettabyte"
    document.getElementById("label8").innerHTML = "Yottabyte"
}

function convertMegabyte (x){

    var bcon = megabyteToByte(x);
    var kcon = megabyteToKilobyte(x);
    var gcon = megabyteToGigabyte(x);
    var tcon = megabyteToTerrabyte(x);
    var pcon = megabyteToPetabyte(x);
    var econ = megabyteToExabyte(x);
    var zcon = megabyteToZettabyte(x);
    var ycon = megabyteToYottabyte(x);

    document.getElementById("convert1").value = bcon
    document.getElementById("convert2").value = kcon
    document.getElementById("convert3").value = gcon
    document.getElementById("convert4").value = tcon
    document.getElementById("convert5").value = pcon
    document.getElementById("convert6").value = econ
    document.getElementById("convert7").value = zcon
    document.getElementById("convert8").value = ycon

    document.getElementById("label1").innerHTML = "Byte"
    document.getElementById("label2").innerHTML = "Kilobyte"
    document.getElementById("label3").innerHTML = "Gigabyte"
    document.getElementById("label4").innerHTML = "Terrabyte"
    document.getElementById("label5").innerHTML = "Petabyte"
    document.getElementById("label6").innerHTML = "Exabyte"
    document.getElementById("label7").innerHTML = "Zettabyte"
    document.getElementById("label8").innerHTML = "Yottabyte"
}

function convertGigabyte (x){

    var bcon = gigabyteToByte(x);
    var kcon = gigabyteToKilobyte(x);
    var mcon = gigabyteToMegabyte(x);
    var tcon = gigabyteToTerrabyte(x);
    var pcon = gigabyteToPetabyte(x);
    var econ = gigabyteToExabyte(x);
    var zcon = gigabyteToZettabyte(x);
    var ycon = gigabyteToYottabyte(x);

    document.getElementById("convert1").value = bcon
    document.getElementById("convert2").value = kcon
    document.getElementById("convert3").value = mcon
    document.getElementById("convert4").value = tcon
    document.getElementById("convert5").value = pcon
    document.getElementById("convert6").value = econ
    document.getElementById("convert7").value = zcon
    document.getElementById("convert8").value = ycon

    document.getElementById("label1").innerHTML = "Byte"
    document.getElementById("label2").innerHTML = "Kilobyte"
    document.getElementById("label3").innerHTML = "Megabyte"
    document.getElementById("label4").innerHTML = "Terrabyte"
    document.getElementById("label5").innerHTML = "Petabyte"
    document.getElementById("label6").innerHTML = "Exabyte"
    document.getElementById("label7").innerHTML = "Zettabyte"
    document.getElementById("label8").innerHTML = "Yottabyte"
}

function convertTerrabyte (x){

    var bcon = terrabyteToByte(x);
    var kcon = terrabyteToKilobyte(x);
    var mcon = terrabyteToMegabyte(x);
    var gcon = terrabyteToGigabyte(x);
    var pcon = terrabyteToPetabyte(x);
    var econ = terrabyteToExabyte(x);
    var zcon = terrabyteToZettabyte(x);
    var ycon = terrabyteToYottabyte(x);

    document.getElementById("convert1").value = bcon
    document.getElementById("convert2").value = kcon
    document.getElementById("convert3").value = mcon
    document.getElementById("convert4").value = gcon
    document.getElementById("convert5").value = pcon
    document.getElementById("convert6").value = econ
    document.getElementById("convert7").value = zcon
    document.getElementById("convert8").value = ycon

    document.getElementById("label1").innerHTML = "Byte"
    document.getElementById("label2").innerHTML = "Kilobyte"
    document.getElementById("label3").innerHTML = "Megabyte"
    document.getElementById("label4").innerHTML = "Gigabyte"
    document.getElementById("label5").innerHTML = "Petabyte"
    document.getElementById("label6").innerHTML = "Exabyte"
    document.getElementById("label7").innerHTML = "Zettabyte"
    document.getElementById("label8").innerHTML = "Yottabyte"
}

function convertPetabyte (x){

    var bcon = petabyteToByte(x);
    var kcon = petabyteToKilobyte(x);
    var mcon = petabyteToMegabyte(x);
    var gcon = petabyteToGigabyte(x);
    var tcon = petabyteToTerrabyte(x);
    var econ = petabyteToExabyte(x);
    var zcon = petabyteToZettabyte(x);
    var ycon = petabyteToYottabyte(x);

    document.getElementById("convert1").value = bcon
    document.getElementById("convert2").value = kcon
    document.getElementById("convert3").value = mcon
    document.getElementById("convert4").value = gcon
    document.getElementById("convert5").value = tcon
    document.getElementById("convert6").value = econ
    document.getElementById("convert7").value = zcon
    document.getElementById("convert8").value = ycon

    document.getElementById("label1").innerHTML = "Byte"
    document.getElementById("label2").innerHTML = "Kilobyte"
    document.getElementById("label3").innerHTML = "Megabyte"
    document.getElementById("label4").innerHTML = "Gigabyte"
    document.getElementById("label5").innerHTML = "Terrabyte"
    document.getElementById("label6").innerHTML = "Exabyte"
    document.getElementById("label7").innerHTML = "Zettabyte"
    document.getElementById("label8").innerHTML = "Yottabyte"
}

function convertExabyte (x){

    var bcon = exabyteToByte(x);
    var kcon = exabyteToKilobyte(x);
    var mcon = exabyteToMegabyte(x);
    var gcon = exabyteToGigabyte(x);
    var tcon = exabyteToTerrabyte(x);
    var pcon = exabyteToPetabyte(x);
    var zcon = exabyteToZettabyte(x);
    var ycon = exabyteToYottabyte(x);

    document.getElementById("convert1").value = bcon
    document.getElementById("convert2").value = kcon
    document.getElementById("convert3").value = mcon
    document.getElementById("convert4").value = gcon
    document.getElementById("convert5").value = tcon
    document.getElementById("convert6").value = pcon
    document.getElementById("convert7").value = zcon
    document.getElementById("convert8").value = ycon

    document.getElementById("label1").innerHTML = "Byte"
    document.getElementById("label2").innerHTML = "Kilobyte"
    document.getElementById("label3").innerHTML = "Megabyte"
    document.getElementById("label4").innerHTML = "Gigabyte"
    document.getElementById("label5").innerHTML = "Terrabyte"
    document.getElementById("label6").innerHTML = "Petabyte"
    document.getElementById("label7").innerHTML = "Zettabyte"
    document.getElementById("label8").innerHTML = "Yottabyte"
}

function convertZettabyte (x){

    var bcon = zettabyteToByte(x);
    var kcon = zettabyteToKilobyte(x);
    var mcon = zettabyteToMegabyte(x);
    var gcon = zettabyteToGigabyte(x);
    var tcon = zettabyteToTerrabyte(x);
    var pcon = zettabyteToPetabyte(x);
    var econ = zettabyteToExabyte(x);
    var ycon = zettabyteToYottabyte(x);

    document.getElementById("convert1").value = bcon
    document.getElementById("convert2").value = kcon
    document.getElementById("convert3").value = mcon
    document.getElementById("convert4").value = gcon
    document.getElementById("convert5").value = tcon
    document.getElementById("convert6").value = pcon
    document.getElementById("convert7").value = econ
    document.getElementById("convert8").value = ycon

    document.getElementById("label1").innerHTML = "Byte"
    document.getElementById("label2").innerHTML = "Kilobyte"
    document.getElementById("label3").innerHTML = "Megabyte"
    document.getElementById("label4").innerHTML = "Gigabyte"
    document.getElementById("label5").innerHTML = "Terrabyte"
    document.getElementById("label6").innerHTML = "Petabyte"
    document.getElementById("label7").innerHTML = "Exabyte"
    document.getElementById("label8").innerHTML = "Yottabyte"
}

function convertYottabyte (x){

    var bcon = yottabyteToByte(x);
    var kcon = yottabyteToKilobyte(x);
    var mcon = yottabyteToMegabyte(x);
    var gcon = yottabyteToGigabyte(x);
    var tcon = yottabyteToTerrabyte(x);
    var pcon = yottabyteToPetabyte(x);
    var econ = yottabyteToExabyte(x);
    var zcon = yottabyteToZettabyte(x);

    document.getElementById("convert1").value = bcon
    document.getElementById("convert2").value = kcon
    document.getElementById("convert3").value = mcon
    document.getElementById("convert4").value = gcon
    document.getElementById("convert5").value = tcon
    document.getElementById("convert6").value = pcon
    document.getElementById("convert7").value = econ
    document.getElementById("convert8").value = zcon

    document.getElementById("label1").innerHTML = "Byte"
    document.getElementById("label2").innerHTML = "Kilobyte"
    document.getElementById("label3").innerHTML = "Megabyte"
    document.getElementById("label4").innerHTML = "Gigabyte"
    document.getElementById("label5").innerHTML = "Terrabyte"
    document.getElementById("label6").innerHTML = "Petabyte"
    document.getElementById("label7").innerHTML = "Exabyte"
    document.getElementById("label8").innerHTML = "Zettabyte"
}

function getInput() {
    var userInput = document.getElementById('input').value;
    console.log(userInput)
}

function click(clicked) {

    if (clicked == "byte"){
        console.log("success")
    }

    var wasClicked = clicked;
    return wasClicked;
}
