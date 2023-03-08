function tampilkanJam() {
  var date = new Date(); // buat objek Date
  var jam = date.getHours(); // ambil nilai jam dari objek Date
  var menit = date.getMinutes(); // ambil nilai menit dari objek Date
  var detik = date.getSeconds(); // ambil nilai detik dari objek Date
  var ampm = jam >= 12 ? "PM" : "AM"; // menentukan AM atau PM
  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  var myDays = [
    "Minggu",
    "Senin",
    "Sel",
    "Rabu",
    "Kamis",
    "Jum&#39;at",
    "Sabtu",
  ];

  var day = date.getDate();
  var month = date.getMonth();
  var thisDay = date.getDay(),
    thisDay = myDays[thisDay];

  if (jam > 24) {
    jam -= 12;
  }

  if (jam < 10) {
    jam = "0" + jam;
  }

 
  if (menit < 10) {
    menit = '0' + menit;
  }


  // tampilkan waktu jam pada elemen HTML
  document.getElementById("jam").innerHTML = jam + ":" + menit;

  document.getElementById("bawah-jam").innerHTML =
    thisDay + ", " + day + " " + months[month];
}

tampilkanJam(); // panggil fungsi untuk menampilkan waktu jam pertama kali

setInterval(tampilkanJam, 1000); // panggil fungsi setiap 1 detik untuk memperbarui waktu jam

function getSpeed() {
  var xhr = new XMLHttpRequest();
  var startTime, endTime, speed;
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      endTime = new Date().getTime();
      var size = parseFloat(xhr.getResponseHeader("Content-Length")) / 1024;
      speed = (size / ((endTime - startTime) / 1000)).toFixed(1);
      document.getElementById("speed").innerHTML = speed;
    }
  };
  startTime = new Date().getTime();
  xhr.open("GET", "index.html", true);
  xhr.send();
}
setInterval(getSpeed, 1000);
function wifi() {
  wifi = document.getElementById("wifi");
  wifi.src = "img-wifi/wifi-1.svg";
}
setInterval(wifi, 1000);

function cant(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    color: 'white',
    text: 'sorry cant be opened, now only whatsapp can be opened',
  })
}