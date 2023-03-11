Swal.fire({
  icon: 'info',
  title: 'Dalam Pengembangan',
  color: 'white',
  footer: '<a href="https://www.tiktok.com/@eki_zulfar" style="color:white; text-decoration:none; margin-right: 5%;">Tiktok: ekizr_ </a> <a href="https://www.instagram.com/ekizr_/" style="color:white; text-decoration:none;">IG: ekizr_</a>'
})

function tampilkanJam() {
  var date = new Date(); 
  var jam = date.getHours(); 
  var menit = date.getMinutes(); 
  var detik = date.getSeconds(); 
  var ampm = jam >= 12 ? "PM" : "AM"; 
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

  document.getElementById("jam").innerHTML = jam + ":" + menit;

  document.getElementById("bawah-jam").innerHTML =
    thisDay + ", " + day + " " + months[month];
}

tampilkanJam(); 

setInterval(tampilkanJam, 1000); 

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