$(document).ready(function () {
    $('#safetyContent > li').each(function(index){
        $(this).attr('data-index',index);
    });
    $('#safetyVideoWrap > video').each(function(index){
        $(this).attr('data-index',index);
    });
    $('#safetyTab > li').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){
        var safetyTab = $(this).attr('data-index');
         $('#safetyContent > li[data-index=' + safetyTab + ']').css('display','block');
         $('#safetyContent > li[data-index!=' + safetyTab + ']').css('display','none');
         $('#safetyVideoWrap > video[data-index=' + safetyTab + ']').css('display','block');
         $('#safetyVideoWrap > video[data-index!=' + safetyTab + ']').css('display','none');
         $('#safetyTab > li[data-index=' + safetyTab + ']').addClass('safetyOn');
         $('#safetyTab > li[data-index!=' + safetyTab + ']').removeClass('safetyOn');
    });

  });