// event pada saat klik
$('.page-scroll').on('click', function(e) {

    //ambil isi href
    var tujuan =  $(this).attr('href');
    // tangkap elemen 
    var elemenTujuan = $(tujuan);


    //pindahkan scroll
    $('body').animate({
        scrollTop: elemenTujuan.offset().top - 50

    }, 1000, 'easeInOutExpo');



       e.preventDefault();


});