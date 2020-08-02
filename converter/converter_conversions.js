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


// beginning of bit conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function bitToByte (x){
  var conversion = x / 8;
  return conversion;
}

function bitToNibble(x) {
  var conversion = x / 4;
  return conversion;
}

function bitToKilobyte (x){

    var conversion = (x / 8) / Math.pow(2, 10);
    
    return conversion;
}

function bitToMegabyte (x){

    var conversion = (x / 8) / Math.pow(2, 20);
    return conversion;
}

function bitToGigabyte (x){

    var conversion = (x / 8) / Math.pow(2, 30);
    return conversion;
}

function bitToTerrabyte (x){

    var conversion = (x / 8) / Math.pow(2, 40);
    return conversion;
}

function bitToPetabyte (x){

    var conversion = (x / 8) / Math.pow(2, 50);
    return conversion;
}

function bitToExabyte (x){

    var conversion = (x / 8) / Math.pow(2, 60);
    return conversion;
}

function bitToZettabyte (x){

    var conversion = (x / 8) / Math.pow(2, 70);
    return conversion;
}

function bitToYottabyte (x){

    var conversion = (x / 8) / Math.pow(2, 80);
    return conversion;
}

// beginning of nibble conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function nibbleToBit(x) {
  var conversion = x * 4;
  return conversion;
}

function nibbleToByte (x){
  var conversion = x / 2;
  return conversion;
}

function nibbleToKilobyte (x){

    var conversion = (x / 4) / Math.pow(2, 10);
    
    return conversion;
}

function nibbleToMegabyte (x){

    var conversion = (x / 4) / Math.pow(2, 20);
    return conversion;
}

function nibbleToGigabyte (x){

    var conversion = (x / 4) / Math.pow(2, 30);
    return conversion;
}

function nibbleToTerrabyte (x){

    var conversion = (x / 4) / Math.pow(2, 40);
    return conversion;
}

function nibbleToPetabyte (x){

    var conversion = (x / 4) / Math.pow(2, 50);
    return conversion;
}

function nibbleToExabyte (x){

    var conversion = (x / 4) / Math.pow(2, 60);
    return conversion;
}

function nibbleToZettabyte (x){

    var conversion = (x / 4) / Math.pow(2, 70);
    return conversion;
}

function nibbleToYottabyte (x){

    var conversion = (x / 4) / Math.pow(2, 80);
    return conversion;
}


// beginning of byte conversion functions
///////////////////////////////////////////
///////////////////////////////////////////

function byteToBit(x) {
  var conversion = x * 8;
  return conversion;
}

function byteToNibble(x) {
  var conversion = x * 2;
  return conversion;
}

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

function kilobyteToBit(x) {
  var conversion = x * Math.pow(2, 10) * 8;
  return conversion;
}

function kilobyteToNibble(x) {
  var conversion = x * Math.pow(2, 10) * 2;
  return conversion;
}

function kilobyteToByte (x){

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

function megabyteToBit(x) {
  var conversion = x * Math.pow(2, 20) * 8;
  return conversion;
}

function megabyteToNibble(x) {
  var conversion = x * Math.pow(2, 20) * 2;
  return conversion;
}

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

function gigabyteToBit(x) {
  var conversion = x * Math.pow(2, 30) * 8;
  return conversion;
}

function gigabyteToNibble(x) {
  var conversion = x * Math.pow(2, 30) * 2;
  return conversion;
}

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

function terrabyteToBit(x) {
  var conversion = x * Math.pow(2, 40) * 8;
  return conversion;
}

function terrabyteToNibble(x) {
  var conversion = x * Math.pow(2, 40) * 2;
  return conversion;
}

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

function petabyteToBit(x) {
  var conversion = x * Math.pow(2, 50) * 8;
  return conversion;
}

function petabyteToNibble(x) {
  var conversion = x * Math.pow(2, 50) * 2;
  return conversion;
}

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

function exabyteToBit(x) {
  var conversion = x * Math.pow(2, 60) * 8;
  return conversion;
}

function exabyteToNibble(x) {
  var conversion = x * Math.pow(2, 60) * 2;
  return conversion;
}

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

function zettabyteToBit(x) {
  var conversion = x * Math.pow(2, 70) * 8;
  return conversion;
}

function zettabyteToNibble(x) {
  var conversion = x * Math.pow(2, 70) * 2;
  return conversion;
}

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

function yottabyteToBit(x) {
  var conversion = x * Math.pow(2, 80) * 8;
  return conversion;
}

function yottabyteToNibble(x) {
  var conversion = x * Math.pow(2, 80) * 2;
  return conversion;
}

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

function convertBit(x) {

    var ncon = bitToNibble(x)
    var bcon = bitToByte(x);
    var kcon = bitToKilobyte(x);
    var mcon = bitToMegabyte(x);
    var gcon = bitToGigabyte(x);
    var tcon = bitToTerrabyte(x);
    var pcon = bitToPetabyte(x);
    var econ = bitToExabyte(x);
    var zcon = bitToZettabyte(x);
    var ycon = bitToYottabyte(x);

    document.getElementById("conversion-bit").innerHTML = document.getElementById("input").value;
    document.getElementById("conversion-nibble").innerHTML = ncon;
    document.getElementById("conversion-byte").innerHTML = bcon;
    document.getElementById("conversion-kilobyte").innerHTML = kcon;
    document.getElementById("conversion-megabyte").innerHTML = mcon;
    document.getElementById("conversion-gigabyte").innerHTML = gcon;
    document.getElementById("conversion-terrabyte").innerHTML = tcon;
    document.getElementById("conversion-petabyte").innerHTML = pcon;
    document.getElementById("conversion-exabyte").innerHTML = econ;
    document.getElementById("conversion-zettabyte").innerHTML = zcon;
    document.getElementById("conversion-yottabyte").innerHTML = ycon;
}

function convertNibble(x) {

    var bicon = nibbleToBit(x);
    var bcon = nibbleToByte(x);
    var kcon = nibbleToKilobyte(x);
    var mcon = nibbleToMegabyte(x);
    var gcon = nibbleToGigabyte(x);
    var tcon = nibbleToTerrabyte(x);
    var pcon = nibbleToPetabyte(x);
    var econ = nibbleToExabyte(x);
    var zcon = nibbleToZettabyte(x);
    var ycon = nibbleToYottabyte(x);

    document.getElementById("conversion-bit").innerHTML = bicon;
    document.getElementById("conversion-nibble").innerHTML = document.getElementById("input").value;
    document.getElementById("conversion-byte").innerHTML = bcon;
    document.getElementById("conversion-kilobyte").innerHTML = kcon;
    document.getElementById("conversion-megabyte").innerHTML = mcon;
    document.getElementById("conversion-gigabyte").innerHTML = gcon;
    document.getElementById("conversion-terrabyte").innerHTML = tcon;
    document.getElementById("conversion-petabyte").innerHTML = pcon;
    document.getElementById("conversion-exabyte").innerHTML = econ;
    document.getElementById("conversion-zettabyte").innerHTML = zcon;
    document.getElementById("conversion-yottabyte").innerHTML = ycon;
}

function convertByte(x) {

    var bicon = byteToBit(x);
    var ncon = byteToNibble(x);
    var kcon = byteToKilobyte(x);
    var mcon = byteToMegabyte(x);
    var gcon = byteToGigabyte(x);
    var tcon = byteToTerrabyte(x);
    var pcon = byteToPetabyte(x);
    var econ = byteToExabyte(x);
    var zcon = byteToZettabyte(x);
    var ycon = byteToYottabyte(x);



    document.getElementById("conversion-bit").innerHTML = bicon;
    document.getElementById("conversion-nibble").innerHTML = ncon;
    document.getElementById("conversion-byte").innerHTML = document.getElementById("input").value
    document.getElementById("conversion-kilobyte").innerHTML = kcon;
    document.getElementById("conversion-megabyte").innerHTML = mcon;
    document.getElementById("conversion-gigabyte").innerHTML = gcon;
    document.getElementById("conversion-terrabyte").innerHTML = tcon;
    document.getElementById("conversion-petabyte").innerHTML = pcon;
    document.getElementById("conversion-exabyte").innerHTML = econ;
    document.getElementById("conversion-zettabyte").innerHTML = zcon;
    document.getElementById("conversion-yottabyte").innerHTML = ycon;
}

function convertKilobyte (x){

    var bicon = kilobyteToBit(x);
    var ncon = kilobyteToNibble(x);
    var bcon = kilobyteToByte(x);
    var mcon = kilobyteToMegabyte(x);
    var gcon = kilobyteToGigabyte(x);
    var tcon = kilobyteToTerrabyte(x);
    var pcon = kilobyteToPetabyte(x);
    var econ = kilobyteToExabyte(x);
    var zcon = kilobyteToZettabyte(x);
    var ycon = kilobyteToYottabyte(x);

    document.getElementById("conversion-bit").innerHTML = bicon;
    document.getElementById("conversion-nibble").innerHTML = ncon;
    document.getElementById("conversion-byte").innerHTML = bcon;
    document.getElementById("conversion-kilobyte").innerHTML = document.getElementById("input").value
    document.getElementById("conversion-megabyte").innerHTML = mcon;
    document.getElementById("conversion-gigabyte").innerHTML = gcon;
    document.getElementById("conversion-terrabyte").innerHTML = tcon;
    document.getElementById("conversion-petabyte").innerHTML = pcon;
    document.getElementById("conversion-exabyte").innerHTML = econ;
    document.getElementById("conversion-zettabyte").innerHTML = zcon; 
    document.getElementById("conversion-yottabyte").innerHTML = ycon;
}

function convertMegabyte (x){

    var bicon = megabyteToBit(x);
    var ncon = megabyteToNibble(x);
    var bcon = megabyteToByte(x);
    var kcon = megabyteToKilobyte(x);
    var gcon = megabyteToGigabyte(x);
    var tcon = megabyteToTerrabyte(x);
    var pcon = megabyteToPetabyte(x);
    var econ = megabyteToExabyte(x);
    var zcon = megabyteToZettabyte(x);
    var ycon = megabyteToYottabyte(x);

   document.getElementById("conversion-bit").innerHTML = bicon;
    document.getElementById("conversion-nibble").innerHTML = ncon;
    document.getElementById("conversion-byte").innerHTML = bcon;
    document.getElementById("conversion-kilobyte").innerHTML = kcon;
    document.getElementById("conversion-megabyte").innerHTML = document.getElementById("input").value
    document.getElementById("conversion-gigabyte").innerHTML = gcon;
    document.getElementById("conversion-terrabyte").innerHTML = tcon;
    document.getElementById("conversion-petabyte").innerHTML = pcon;
    document.getElementById("conversion-exabyte").innerHTML = econ;
    document.getElementById("conversion-zettabyte").innerHTML = zcon;
    document.getElementById("conversion-yottabyte").innerHTML = ycon;
}

function convertGigabyte (x){

    var bicon = gigabyteToBit(x);
    var ncon = gigabyteToNibble(x);
    var bcon = gigabyteToByte(x);
    var kcon = gigabyteToKilobyte(x);
    var mcon = gigabyteToMegabyte(x);
    var tcon = gigabyteToTerrabyte(x);
    var pcon = gigabyteToPetabyte(x);
    var econ = gigabyteToExabyte(x);
    var zcon = gigabyteToZettabyte(x);
    var ycon = gigabyteToYottabyte(x);

    document.getElementById("conversion-bit").innerHTML = bicon;
    document.getElementById("conversion-nibble").innerHTML = ncon;
    document.getElementById("conversion-byte").innerHTML = bcon;
    document.getElementById("conversion-kilobyte").innerHTML = kcon;
    document.getElementById("conversion-megabyte").innerHTML = mcon;
    document.getElementById("conversion-gigabyte").innerHTML = document.getElementById("input").value
    document.getElementById("conversion-terrabyte").innerHTML = tcon;
    document.getElementById("conversion-petabyte").innerHTML = pcon;
    document.getElementById("conversion-exabyte").innerHTML = econ;
    document.getElementById("conversion-zettabyte").innerHTML = zcon;  
    document.getElementById("conversion-yottabyte").innerHTML = ycon;
}

function convertTerrabyte (x){

    var bicon = terrabyteToBit(x);
    var ncon = terrabyteToNibble(x);
    var bcon = terrabyteToByte(x);
    var kcon = terrabyteToKilobyte(x);
    var mcon = terrabyteToMegabyte(x);
    var gcon = terrabyteToGigabyte(x);
    var pcon = terrabyteToPetabyte(x);
    var econ = terrabyteToExabyte(x);
    var zcon = terrabyteToZettabyte(x);
    var ycon = terrabyteToYottabyte(x);

    document.getElementById("conversion-bit").innerHTML = bicon;
    document.getElementById("conversion-nibble").innerHTML = ncon;
    document.getElementById("conversion-byte").innerHTML = bcon;
    document.getElementById("conversion-kilobyte").innerHTML = kcon;
    document.getElementById("conversion-megabyte").innerHTML = mcon;
    document.getElementById("conversion-gigabyte").innerHTML = gcon;
    document.getElementById("conversion-terrabyte").innerHTML = document.getElementById("input").value
    document.getElementById("conversion-petabyte").innerHTML = pcon;
    document.getElementById("conversion-exabyte").innerHTML = econ;
    document.getElementById("conversion-zettabyte").innerHTML = zcon;
    document.getElementById("conversion-yottabyte").innerHTML = ycon;
}

function convertPetabyte (x){

    var bicon = petabyteToBit(x);
    var ncon = petabyteToNibble(x);
    var bcon = petabyteToByte(x);
    var kcon = petabyteToKilobyte(x);
    var mcon = petabyteToMegabyte(x);
    var gcon = petabyteToGigabyte(x);
    var tcon = petabyteToTerrabyte(x);
    var econ = petabyteToExabyte(x);
    var zcon = petabyteToZettabyte(x);
    var ycon = petabyteToYottabyte(x);

    document.getElementById("conversion-bit").innerHTML = bicon;
    document.getElementById("conversion-nibble").innerHTML = ncon;
    document.getElementById("conversion-byte").innerHTML = bcon;
    document.getElementById("conversion-kilobyte").innerHTML = kcon;
    document.getElementById("conversion-megabyte").innerHTML = mcon;
    document.getElementById("conversion-gigabyte").innerHTML = gcon;
    document.getElementById("conversion-terrabyte").innerHTML = tcon;
    document.getElementById("conversion-petabyte").innerHTML = document.getElementById("input").value
    document.getElementById("conversion-exabyte").innerHTML = econ;
    document.getElementById("conversion-zettabyte").innerHTML = zcon;
    document.getElementById("conversion-yottabyte").innerHTML = ycon;
}

function convertExabyte (x){

    var bicon = exabyteToBit(x);
    var ncon = exabyteToNibble(x);
    var bcon = exabyteToByte(x);
    var kcon = exabyteToKilobyte(x);
    var mcon = exabyteToMegabyte(x);
    var gcon = exabyteToGigabyte(x);
    var tcon = exabyteToTerrabyte(x);
    var pcon = exabyteToPetabyte(x);
    var zcon = exabyteToZettabyte(x);
    var ycon = exabyteToYottabyte(x);

    document.getElementById("conversion-bit").innerHTML = bicon;
    document.getElementById("conversion-nibble").innerHTML = ncon;
    document.getElementById("conversion-byte").innerHTML = bcon;
    document.getElementById("conversion-kilobyte").innerHTML = kcon;
    document.getElementById("conversion-megabyte").innerHTML = mcon;
    document.getElementById("conversion-gigabyte").innerHTML = gcon;
    document.getElementById("conversion-terrabyte").innerHTML = tcon;
    document.getElementById("conversion-petabyte").innerHTML = pcon;
    document.getElementById("conversion-exabyte").innerHTML = document.getElementById("input").value
    document.getElementById("conversion-zettabyte").innerHTML = zcon;
    document.getElementById("conversion-yottabyte").innerHTML = ycon;
}

function convertZettabyte (x){

    var bicon = zettabyteToBit(x);
    var ncon = zettabyteToNibble(x);
    var bcon = zettabyteToByte(x);
    var kcon = zettabyteToKilobyte(x);
    var mcon = zettabyteToMegabyte(x);
    var gcon = zettabyteToGigabyte(x);
    var tcon = zettabyteToTerrabyte(x);
    var pcon = zettabyteToPetabyte(x);
    var econ = zettabyteToExabyte(x);
    var ycon = zettabyteToYottabyte(x);

    document.getElementById("conversion-bit").innerHTML = bicon;
    document.getElementById("conversion-nibble").innerHTML = ncon;
    document.getElementById("conversion-byte").innerHTML = bcon;
    document.getElementById("conversion-kilobyte").innerHTML = kcon;
    document.getElementById("conversion-megabyte").innerHTML = mcon;
    document.getElementById("conversion-gigabyte").innerHTML = gcon;
    document.getElementById("conversion-terrabyte").innerHTML = tcon;
    document.getElementById("conversion-petabyte").innerHTML = pcon;
    document.getElementById("conversion-exabyte").innerHTML = econ;
    document.getElementById("conversion-zettabyte").innerHTML = document.getElementById("input").value
    document.getElementById("conversion-yottabyte").innerHTML = ycon;
}

function convertYottabyte (x){

    var bicon = yottabyteToBit(x);
    var ncon = yottabyteToNibble(x);
    var bcon = yottabyteToByte(x);
    var kcon = yottabyteToKilobyte(x);
    var mcon = yottabyteToMegabyte(x);
    var gcon = yottabyteToGigabyte(x);
    var tcon = yottabyteToTerrabyte(x);
    var pcon = yottabyteToPetabyte(x);
    var econ = yottabyteToExabyte(x);
    var zcon = yottabyteToZettabyte(x);

    document.getElementById("conversion-bit").innerHTML = bicon;
    document.getElementById("conversion-nibble").innerHTML = ncon;
    document.getElementById("conversion-byte").innerHTML = bcon;
    document.getElementById("conversion-kilobyte").innerHTML = kcon;
    document.getElementById("conversion-megabyte").innerHTML = mcon;
    document.getElementById("conversion-gigabyte").innerHTML = gcon;
    document.getElementById("conversion-terrabyte").innerHTML = tcon;
    document.getElementById("conversion-petabyte").innerHTML = pcon;
    document.getElementById("conversion-exabyte").innerHTML = econ;
    document.getElementById("conversion-zettabyte").innerHTML = zcon;
    document.getElementById("conversion-yottabyte").innerHTML = document.getElementById("input").value
}

var userInput = document.getElementById('input').value;

function getInput() {
    var userInput = document.getElementById('input').value;
    console.log(userInput)
}

function bclick(clicked) {

    console.log(clicked)

    var userInput = document.getElementById('input').value

    if (clicked == "bit") {

       convertBit(userInput);
    }
    
    if (clicked == "niible") {

      convertNibble(userInput);
    }

    if (clicked == "byte"){

        convertByte(userInput)
    }

    if (clicked == "kilobyte"){

        convertKilobyte(userInput)
    }

    if (clicked == "megabyte"){

        convertMegabyte(userInput)
    }

    if (clicked == "gigabyte") {
        
        convertGigabyte(userInput)
    }

    if (clicked == "terrabyte"){

        convertTerrabyte(userInput)
    }

    if (clicked == "petabyte"){

        convertPetabyte(userInput)  
    }

    if (clicked == "exabyte"){

        convertExabyte(userInput)
    }

    if (clicked == "zettabyte"){

        convertZettabyte(userInput)   
    }

    if (clicked == "yottabyte"){

        convertYottabyte(userInput) 
    }
}

$("#bit").hover(function () {
  var userInput = document.getElementById("input").value;
  convertBit(userInput);
  changeColor(this.id);
});

$("#nibble").hover(function () {
  var userInput = document.getElementById("input").value;
  convertNibble(userInput);
  changeColor(this.id);
});

$("#byte").hover(function() {
    var userInput = document.getElementById('input').value
    convertByte(userInput)
    changeColor(this.id)
})

$("#kilobyte").hover(function() {
    var userInput = document.getElementById('input').value
    convertKilobyte(userInput)
    changeColor(this.id)
})

$("#megabyte").hover(function() {
    var userInput = document.getElementById('input').value
    convertMegabyte(userInput)
    changeColor(this.id)
})

$("#gigabyte").hover(function() {
    var userInput = document.getElementById('input').value
    convertGigabyte(userInput)
    changeColor(this.id)
})

$("#terrabyte").hover(function() {
    var userInput = document.getElementById('input').value
    convertTerrabyte(userInput)
    changeColor(this.id)
})

$("#petabyte").hover(function() {
    var userInput = document.getElementById('input').value
    convertPetabyte(userInput)
    changeColor(this.id)
})

$("#exabyte").hover(function() {
    var userInput = document.getElementById('input').value
    convertExabyte(userInput)
    changeColor(this.id)
})

$("#zettabyte").hover(function() {
    var userInput = document.getElementById('input').value
    convertZettabyte(userInput)
    changeColor(this.id)
})

$("#yottabyte").hover(function() {
    var userInput = document.getElementById('input').value
    convertYottabyte(userInput)
    changeColor(this.id)
})
