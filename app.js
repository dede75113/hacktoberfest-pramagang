$(function(){

    $('.box div').addClass('bg-secondary');
    // $('.box').addClass('d-none');
    
    $('#coba_klik').on('click', function(){
        $('.box').hide();
    });
    
    $('#coba_tampil').on('click', function(){
        $('.box').addClass('d-flex');
    });
    

    
});