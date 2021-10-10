function cauchuyen() {
    document.getElementById('menu_cauchuyen').style.visibility = 'visible';
    document.getElementById('li_1').style.borderBottom = '3px solid #339966';
}
function hide_cauchuyen() {
    document.getElementById('menu_cauchuyen').style.visibility = 'hidden';
    document.getElementById('li_1').style.borderBottom = 'none';
}
function sanpham() {
    document.getElementById('menu_sanpham').style.visibility = 'visible';
    document.getElementById('li_2').style.borderBottom = '3px solid #339966';
}
function hide_sanpham() {
    document.getElementById('menu_sanpham').style.visibility = 'hidden';
    document.getElementById('li_2').style.borderBottom = 'none';
}
function phattrien() {
    document.getElementById('menu_phattrien').style.visibility = 'visible';
    document.getElementById('li_3').style.borderBottom = '3px solid #339966';
}
function hide_phattrien() {
    document.getElementById('menu_phattrien').style.visibility = 'hidden';
    document.getElementById('li_3').style.borderBottom = 'none';
}
function caitien() {
    document.getElementById('menu_caitien').style.visibility = 'visible';
    document.getElementById('li_4').style.borderBottom = '3px solid #339966';
}
function hide_caitien() {
    document.getElementById('menu_caitien').style.visibility = 'hidden';
    document.getElementById('li_4').style.borderBottom = 'none';
}
function vungnguyenlieu() {
    document.getElementById('menu_vungnguyenlieu').style.visibility = 'visible';
    document.getElementById('li_5').style.borderBottom = '3px solid #339966';
}
function hide_vungnguyenlieu() {
    document.getElementById('menu_vungnguyenlieu').style.visibility = 'hidden';
    document.getElementById('li_5').style.borderBottom = 'none';
}
function truyenthong() {
    document.getElementById('menu_truyenthong').style.visibility = 'visible';
    document.getElementById('li_6').style.borderBottom = '3px solid #339966';
}
function hide_truyenthong() {
    document.getElementById('menu_truyenthong').style.visibility = 'hidden';
    document.getElementById('li_6').style.borderBottom = 'none';
}
function nav() {
    var sideNav = document.getElementById("nav");
    var menu = document.getElementById("menu");
    if (sideNav.style.left == "-9999px") {
        sideNav.style.left = "0";
    } else {
        sideNav.style.left = "-9999px";
    }
}
function show_cauchuyen() {
    if(document.getElementById('cauchuyen').style.display == 'none') {
        document.getElementById('hr_cauchuyen').style.display = 'unset';
        document.getElementById('cauchuyen').style.display = 'unset';
    } else { 
        document.getElementById('hr_cauchuyen').style.display = 'none';
        document.getElementById('cauchuyen').style.display = 'none';
    }
} 
function show_sanpham() {
    if(document.getElementById('sanpham').style.display == 'none') {
        document.getElementById('sanpham').style.display = 'unset';
        document.getElementById('hr_sanpham').style.display = 'unset';
    } else { 
        document.getElementById('sanpham').style.display = 'none';
        document.getElementById('hr_sanpham').style.display = 'none';
    }
}
function show_ptbenvung() {
    if(document.getElementById('ptbenvung').style.display == 'none') {
        document.getElementById('hr_ptbenvung').style.display = 'unset';
        document.getElementById('ptbenvung').style.display = 'unset';
    } else { 
        document.getElementById('hr_ptbenvung').style.display = 'none';
        document.getElementById('ptbenvung').style.display = 'none';
    }
} 
function show_doimoi() {
    if(document.getElementById('doimoi').style.display == 'none') {
        document.getElementById('hr_doimoi').style.display = 'unset';
        document.getElementById('doimoi').style.display = 'unset';
    } else { 
        document.getElementById('hr_doimoi').style.display = 'none';
        document.getElementById('doimoi').style.display = 'none';
    }
}
function show_nguyenlieu() {
    if(document.getElementById('nguyenlieu').style.display == 'none') {
        document.getElementById('hr_nguyenlieu').style.display = 'unset';
        document.getElementById('nguyenlieu').style.display = 'unset';
    } else { 
        document.getElementById('hr_nguyenlieu').style.display = 'none';
        document.getElementById('nguyenlieu').style.display = 'none';
    }
} 
function show_truyenthong() {
    if(document.getElementById('truyenthong').style.display == 'none') {
        document.getElementById('hr_truyenthong').style.display = 'unset';
        document.getElementById('truyenthong').style.display = 'unset';
    } else { 
        document.getElementById('hr_truyenthong').style.display = 'none';
        document.getElementById('truyenthong').style.display = 'none';
    }
}

window.onresize = function(){
    var x = $(window).width();
    if(x <= 767.5){
        document.getElementById('banner_large').src = "image/banner_thaythe.png";
    }
    else {
        document.getElementById('banner_large').src = "image/banner.png";
    }
};

/* window.addEventListener('resize', function(event){
    var x = screen.width;
    if(x <= 767.5){
        document.getElementById('banner_large').src = "image/banner_thaythe.png";
    }
}); */
