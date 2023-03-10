var button1 = document.getElementById("com-tab");
var button2 = document.getElementById("chat-tab");
var button3 = document.getElementById("status-tab");
var button4 = document.getElementById("panggilan-tab");
var badge = document.getElementById("badgespan");

button2.style.color = "var(--green)";
button2.style.borderBottom = "2.7px solid var(--green)";

badge.style.color = "#1F2C32";
badge.style.background = "var(--green)";

button1.addEventListener("click", function () {
  button1.style.color = "var(--green)";
  button1.style.borderBottom = "2.5px solid var(--green)";
  badge.style.background = "var(--pudar)";

  button2.style.color = "";
  button3.style.color = "";
  button4.style.color = "";
  button3.style.border = "";
  button2.style.border = "";
  button4.style.border = "";
});


button2.addEventListener("click", function () {
  button2.style.color = "var(--green)";
  button2.style.borderBottom = "2.5px solid var(--green)";
  badge.style.background = "var(--green)";

  button1.style.color = "";
  button3.style.color = "";
  button4.style.color = "";

  button3.style.border = "";
  button4.style.border = "";
  button1.style.border = "";
});

button3.addEventListener("click", function () {
  button3.style.color = "var(--green)";
  button3.style.borderBottom = "2.5px solid var(--green)";
  badge.style.background = "var(--pudar)";

  button4.style.border = "";
  button2.style.border = "";
  button1.style.border = "";
  button2.style.color = "";
  button4.style.color = "";
  button1.style.color = "";
});

button4.addEventListener("click", function () {
  button4.style.color = "var(--green)";
  button4.style.borderBottom = "2.5px solid var(--green)";
  badge.style.background = "var(--pudar)";

  button3.style.border = "";
  button2.style.border = "";
  button1.style.border = "";
  button3.style.color = "";
  button2.style.color = "";
  button1.style.color = "";
});

// arrow
function arrow_1() {
  document.getElementById("arrow").src = "gambar-arrow/arrow-red.svg";
  document.getElementById("arrow").hidden = "";
}

function arrow_2() {
  document.getElementById("arrow").src = "gambar-arrow/arrow-green-up.svg";
  document.getElementById("arrow").hidden = "";
}

function arrow_3() {
  document.getElementById("arrow").src = "gambar-arrow/arrow-green.svg";
  document.getElementById("arrow").hidden = "";
}
//

// arrow
function arrow1_1() {
  document.getElementById("arrow1").src = "gambar-arrow/arrow-red.svg";
  document.getElementById("arrow1").hidden = "";
}

function arrow1_2() {
  document.getElementById("arrow1").src = "gambar-arrow/arrow-green-up.svg";
  document.getElementById("arrow1").hidden = "";
}

function arrow1_3() {
  document.getElementById("arrow1").src = "gambar-arrow/arrow-green.svg";
  document.getElementById("arrow1").hidden = "";
}
//

// area check

// kesatu
function tanda() {
  document.getElementById("tanda-ceklis").src = "";
  document.getElementById("tanda-ceklis").hidden = "hidden";
}

function tanda1() {
  document.getElementById("tanda-ceklis").src = "img-check/checkb.svg";
  document.getElementById("tanda-ceklis").hidden = "";
}

function tanda2() {
  document.getElementById("tanda-ceklis").src = "img-check/check1.svg";
  document.getElementById("tanda-ceklis").hidden = "";
}

function tanda3() {
  document.getElementById("tanda-ceklis").src = "img-check/check.svg";
  document.getElementById("tanda-ceklis").hidden = "";
}
//----

// kedua
function tanda_1() {
  document.getElementById("tanda-ceklis1").src = "";
  document.getElementById("tanda-ceklis1").hidden = "hidden";
}

function tanda1_1() {
  document.getElementById("tanda-ceklis1").src = "img-check/checkb.svg";
  document.getElementById("tanda-ceklis1").hidden = "";
}

function tanda2_1() {
  document.getElementById("tanda-ceklis1").src = "img-check/check1.svg";
  document.getElementById("tanda-ceklis1").hidden = "";
}

function tanda3_1() {
  document.getElementById("tanda-ceklis1").src = "img-check/check.svg";
  document.getElementById("tanda-ceklis1").hidden = "";
}
//---------

// ketiga
function tanda_2() {
  document.getElementById("tanda-ceklis2").src = "";
  document.getElementById("tanda-ceklis2").hidden = "hidden";
}

function tanda1_2() {
  document.getElementById("tanda-ceklis2").src = "img-check/checkb.svg";
  document.getElementById("tanda-ceklis2").hidden = "";
}

function tanda2_2() {
  document.getElementById("tanda-ceklis2").src = "img-check/check1.svg";
  document.getElementById("tanda-ceklis2").hidden = "";
}

function tanda3_2() {
  document.getElementById("tanda-ceklis2").src = "img-check/check.svg";
  document.getElementById("tanda-ceklis2").hidden = "";
}
// -------

// keempat
function tanda_3() {
  document.getElementById("tanda-ceklis3").src = "";
  document.getElementById("tanda-ceklis3").hidden = "hidden";
}

function tanda1_3() {
  document.getElementById("tanda-ceklis3").src = "img-check/checkb.svg";
  document.getElementById("tanda-ceklis2").hidden = "";
}

function tanda2_3() {
  document.getElementById("tanda-ceklis3").src = "img-check/check1.svg";
  document.getElementById("tanda-ceklis3").hidden = "";
}

function tanda3_3() {
  document.getElementById("tanda-ceklis3").src = "img-check/check.svg";
  document.getElementById("tanda-ceklis3").hidden = "";
}
// -------

// kelima
function tanda_4() {
  document.getElementById("tanda-ceklis4").src = "";
  document.getElementById("tanda-ceklis4").hidden = "hidden";
}

function tanda1_4() {
  document.getElementById("tanda-ceklis4").src = "img-check/checkb.svg";
  document.getElementById("tanda-ceklis4").hidden = "";
}

function tanda2_4() {
  document.getElementById("tanda-ceklis4").src = "img-check/check1.svg";
  document.getElementById("tanda-ceklis4").hidden = "";
}

function tanda3_4() {
  document.getElementById("tanda-ceklis4").src = "img-check/check.svg";
  document.getElementById("tanda-ceklis4").hidden = "";
}
// -------

// keenam
function tanda_5() {
  document.getElementById("tanda-ceklis5").src = "";
  document.getElementById("tanda-ceklis5").hidden = "hidden";
}

function tanda1_5() {
  document.getElementById("tanda-ceklis5").src = "img-check/checkb.svg";
  document.getElementById("tanda-ceklis5").hidden = "";
}

function tanda2_5() {
  document.getElementById("tanda-ceklis5").src = "img-check/check1.svg";
  document.getElementById("tanda-ceklis5").hidden = "";
}

function tanda3_5() {
  document.getElementById("tanda-ceklis5").src = "img-check/check.svg";
  document.getElementById("tanda-ceklis5").hidden = "";
}
// -------

// ketujuh
function tanda_6() {
  document.getElementById("tanda-ceklis6").src = "";
  document.getElementById("tanda-ceklis6").hidden = "hidden";
}

function tanda1_6() {
  document.getElementById("tanda-ceklis6").src = "img-check/checkb.svg";
  document.getElementById("tanda-ceklis6").hidden = "";
}

function tanda2_6() {
  document.getElementById("tanda-ceklis6").src = "img-check/check1.svg";
  document.getElementById("tanda-ceklis6").hidden = "";
}

function tanda3_6() {
  document.getElementById("tanda-ceklis6").src = "img-check/check.svg";
  document.getElementById("tanda-ceklis6").hidden = "";
}
// -------

// kelapan
function tanda_7() {
  document.getElementById("tanda-ceklis7").src = "";
  document.getElementById("tanda-ceklis7").hidden = "hidden";
}

function tanda1_7() {
  document.getElementById("tanda-ceklis7").src = "img-check/checkb.svg";
  document.getElementById("tanda-ceklis7").hidden = "";
}

function tanda2_7() {
  document.getElementById("tanda-ceklis7").src = "img-check/check1.svg";
  document.getElementById("tanda-ceklis7").hidden = "";
}

function tanda3_7() {
  document.getElementById("tanda-ceklis7").src = "img-check/check.svg";
  document.getElementById("tanda-ceklis7").hidden = "";
}
// -------

// kesembelan
function tanda_8() {
  document.getElementById("tanda-ceklis8").src = "";
  document.getElementById("tanda-ceklis8").hidden = "hidden";
}

function tanda1_8() {
  document.getElementById("tanda-ceklis8").src = "img-check/checkb.svg";
  document.getElementById("tanda-ceklis8").hidden = "";
}

function tanda2_8() {
  document.getElementById("tanda-ceklis8").src = "img-check/check1.svg";
  document.getElementById("tanda-ceklis8").hidden = "";
}

function tanda3_8() {
  document.getElementById("tanda-ceklis8").src = "img-check/check.svg";
  document.getElementById("tanda-ceklis8").hidden = "";
}
// -------

// kesepuluh
function tanda_9() {
  document.getElementById("tanda-ceklis9").src = "";
  document.getElementById("tanda-ceklis9").hidden = "hidden";
}

function tanda1_9() {
  document.getElementById("tanda-ceklis9").src = "img-check/checkb.svg";
  document.getElementById("tanda-ceklis9").hidden = "";
}

function tanda2_9() {
  document.getElementById("tanda-ceklis9").src = "img-check/check1.svg";
  document.getElementById("tanda-ceklis9").hidden = "";
}

function tanda3_9() {
  document.getElementById("tanda-ceklis9").src = "img-check/check.svg";
  document.getElementById("tanda-ceklis9").hidden = "";
}
// -------

// area get id gambar

const profile1 = document.getElementById("profile1");
const profile2 = document.getElementById("profile2");
const profile3 = document.getElementById("profile3");
const profile4 = document.getElementById("profile4");
const profile5 = document.getElementById("profile5");
const profile6 = document.getElementById("profile6");
const profile7 = document.getElementById("profile7");
const profile8 = document.getElementById("profile8");
const profile9 = document.getElementById("profile9");
const profile10 = document.getElementById("profile10");
const panggilan = document.getElementById("profile-panggilan");
const panggilan1 = document.getElementById("profile-panggilan1");
const statuss = document.getElementById("status-saya");
const profile_saya = document.getElementById("dalam_status1");

// ------------

// get id profile input
const profileInput1 = document.getElementById("profileInput1");
const profileInput2 = document.getElementById("profileInput2");
const profileInput3 = document.getElementById("profileInput3");
const profileInput4 = document.getElementById("profileInput4");
const profileInput5 = document.getElementById("profileInput5");
const profileInput6 = document.getElementById("profileInput6");
const profileInput7 = document.getElementById("profileInput7");
const profileInput8 = document.getElementById("profileInput8");
const profileInput9 = document.getElementById("profileInput9");
const profileInput10 = document.getElementById("profileInput10");
const profileInputp = document.getElementById("profileInputp");
const profileInputp1 = document.getElementById("profileInputp1");
const input_status = document.getElementById("inputstatus");
const input_status1 = document.getElementById("inputstatus1");
const input_profile_saya = document.getElementById("input-profile-saya");

profile_saya.addEventListener("click", function () {
  input_profile_saya.click();
});

panggilan.addEventListener("click", function () {
  profileInputp.click();
});

panggilan1.addEventListener("click", function () {
  profileInputp1.click();
});

profile1.addEventListener("click", function () {
  profileInput1.click();
});
profile2.addEventListener("click", function () {
  profileInput2.click();
});
profile3.addEventListener("click", function () {
  profileInput3.click();
});
profile4.addEventListener("click", function () {
  profileInput4.click();
});
profile5.addEventListener("click", function () {
  profileInput5.click();
});
profile6.addEventListener("click", function () {
  profileInput6.click();
});
profile7.addEventListener("click", function () {
  profileInput7.click();
});
profile8.addEventListener("click", function () {
  profileInput8.click();
});
profile9.addEventListener("click", function () {
  profileInput9.click();
});
profile10.addEventListener("click", function () {
  profileInput10.click();
});

input_profile_saya.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile_saya.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

// image
input_status.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    statuss.src = dataURL;
    document.getElementById("bg-status-saya").src = dataURL;
    document.getElementById("bg-status-saya1").style.display = "none";
  };
  reader.readAsDataURL(event.target.files[0]);
});

//video
input_status1.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    statuss.src = dataURL;
    document.getElementById("bg-status-saya1").src = dataURL;
    document.getElementById("bg-status-saya").style.display = "none";
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInputp.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    panggilan.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInputp1.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    panggilan1.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInput1.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile1.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInput2.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile2.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInput3.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile3.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInput4.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile4.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInput5.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile5.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInput6.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile6.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInput7.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile7.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInput8.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile8.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInput9.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile9.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

profileInput10.addEventListener("change", function (event) {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    profile10.src = dataURL;
  };
  reader.readAsDataURL(event.target.files[0]);
});

function alertv2() {
  Swal.fire("Soon V2", "", "info");
}

const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const komunitas = document.getElementById("komunitas");
const kelola = document.getElementById("kelola");
const mulai_komunitas = document.getElementById("mulai_komunitas");
const bulet_pen = document.getElementById("bulet3");
const comfilter = document.getElementById("comfilter");
const bulet_plus = document.getElementById("bulet-plus");
const shadow_bottom = document.getElementById("myTab");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-brightness-high-fill");
  if (this.classList.toggle("bi-moon")) {
    body.style.background = "#111B21";
    body.style.transition = "1s";
    document.documentElement.style.setProperty("--grey", "#8696A0");
    document.documentElement.style.setProperty("--grey1", "#8696A0");
    document.documentElement.style.setProperty("--white", "#E9EDEF");
    document.documentElement.style.setProperty("--bgdark", "#202C33");
    document.documentElement.style.setProperty("--pudar", "#8696A0");
    document.documentElement.style.setProperty("--green", "#00A884");
    document.getElementById("badgespan").style.color = "var(--bgdark)";
    document.getElementById("badgespan-chat").style.color = "var(--bgdark)";
    document.getElementById("badgespan-chat").style.fontWeight = "600";
    shadow_bottom.style.boxShadow = "0px 5px 5px -5px rgba(0, 0, 0, 0.222)";
    komunitas.style.color = "white";
    kelola.style.color = "#8696A0";
    mulai_komunitas.style.color = "black";
    bulet_pen.style.backgroundColor = "#233138";
    bulet_pen.style.backgroundImage = 'url("img/pen.svg")';
    comfilter.style.filter = "brightness(1)";
    bulet_plus.style.borderColor = "var(--bgdark)";
  } else {
    body.style.background = "#FFFFFF";
    body.style.transition = "1s";
    document.documentElement.style.setProperty("--grey", "#FFFFFF");
    document.documentElement.style.setProperty("--grey1", "#667781");
    document.documentElement.style.setProperty("--white", "#111B21");
    document.documentElement.style.setProperty("--bgdark", "#008069");
    document.documentElement.style.setProperty("--pudar", "#B3D9D2");
    document.documentElement.style.setProperty("--green", "white");
    document.getElementById("badgespan").style.color = "#008069";
    document.getElementById("badgespan-chat").style.color = "white";
    document.getElementById("badgespan-chat").style.fontWeight = "400";
    shadow_bottom.style.boxShadow = "0 4px 3.9px -2px rgba(0, 0, 0, 0.5)";

    komunitas.style.color = "black";
    kelola.style.color = "#484b4d";
    mulai_komunitas.style.color = "white";
    bulet_pen.style.backgroundColor = "#d9e0e3";
    bulet_pen.style.backgroundImage = 'url("img/pen light.svg")';

    comfilter.style.filter = "brightness(1.4)";
    bulet_plus.style.borderColor = "white";
  }
});

const toggleFullscreenButton = document.getElementById("toggleFullscreen");

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

toggleFullscreenButton.addEventListener("click", toggleFullscreen);

//status
var btn = document.getElementById("open-status");
var isi_status = document.getElementById("isi_status");
var bg_status = document.getElementById("bg-status-upload");
var pesanStatus = document.getElementById('pesan_status');

function open_status() {
  bg_status.src = "";
  bg_status.style.display = "none";
  dalam_status.src = "img/e.jpg";
  isi_status.style.backgroundImage = "url(img/kucing.jpeg)";
  isi_status.style.display = "block";
  pesanStatus.innerHTML = "Turu masbro";
  document.getElementById("nama-dalam-status").placeholder = "eki";
  setTimeout(function () {
    isi_status.style.display = "none";
  }, 5000);
}

function open_status1() {
  bg_status.src = "";
  bg_status.style.display = "none";
  dalam_status.src = "img/z.jpg";
  isi_status.style.backgroundImage = "url(img/kucing.jpg)";
  pesanStatus.innerHTML = "Malas masbro";
  document.getElementById("nama-dalam-status").placeholder = "zulfar";
  isi_status.style.display = "block";
  setTimeout(function () {
    isi_status.style.display = "none";
  }, 5000);
}

function open_status_saya() {
  isi_status1.style.display = "block";
  setTimeout(function () {
    isi_status.style.display = "none";
  }, 5000);
}

function out_status() {
  setTimeout(function () {
    isi_status.style.display = "none";
    isi_status1.style.display = "none";
  });
}

const Modal_status = document.getElementById("staticBackdrop-status");
const status_open = document.getElementById("status-saya");

function ilang_buttonPlus() {
  bulet_plus.style.display = "none";
  Modal_status.id = "";
  status_open.onclick = open_status_saya;
  status_open.style.border = "2px solid var(--grey)";
  status_open.style.padding = "0.1em";
}

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
  xhr.open("GET", "whatsapp.html", true);
  xhr.send();
}
setInterval(getSpeed, 1000);
function wifi() {
  wifi = document.getElementById("wifi");
  wifi.src = "img-wifi/wifi-1.svg";
}
setInterval(wifi, 1000);

function tampilkanJam() {
  var waktu = new Date(); 
  var jam = waktu.getHours(); 
  var menit = waktu.getMinutes();  
  var detik = waktu.getSeconds();  
  var hari = waktu.getDay();
  var ampm = jam >= 12 ? "PM" : "AM"; 

  if (jam > 24) {
    jam -= 12;
  }

  if (jam < 10) {
    jam = "0" + jam;
  }

  if (menit < 10) {
    menit = "0" + menit;
  }

  if (detik < 10) {
    detik = "0" + detik;
  }
  document.getElementById("jam").innerHTML = jam + ":" + menit;
}

tampilkanJam(); 

setInterval(tampilkanJam, 1000); 
