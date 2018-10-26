$(document).foundation();

$(document).ready(function() {

    // Profile Menu
    $('.menu').on('click',function(){
        $(this).find('.profile-menu').toggleClass('open');
        $('.profile-nav').toggleClass('open');
    });


    // Profile Status
    var $profile_status = $('.profile-status');

    $('.profile-status-container').on('mouseover', function(){
        $profile_status.addClass('open');
    });

    $('.profile-status-container').on('mouseleave', function(){
        $profile_status.removeClass('open');
    });

    // Search Button
    $('.search-button').on('click', function(){
        $('#full-screen-search').addClass('open');
    });


    // Close Button
    $('.close-button').on('click', function(){
        $('#full-screen-search').removeClass('open');
    });

});