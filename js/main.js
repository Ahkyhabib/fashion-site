
//The side nav bar for mobile
//Show contact form  
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.show_form').on('click', function(){
        $('#form_hide').fadeIn(200);
        $('.hide_card').hide();
    })
    //Show about card, and hide all other cards
    $('.about_card').on('click', function(){
        event.preventDefault();
        $('.hide_card_2').fadeIn(200);
        $('.hide_card, .hide_card_3, .form_hide').hide();
    })
    //Show product card, and hide all other cards
    $('.products_card').on('click', function(){
        event.preventDefault();
        $('.hide_card_3').fadeIn(200);
        $('.hide_card, .hide_card_2, .form_hide').hide();
    })
    //Show cantact card, and hide all other cards
    $('.contact_card').on('click', function(){
        event.preventDefault();
        $('#form_hide').fadeIn(200);
        $('.hide_card, .hide_card_2, .hide_card_3').hide();
    })
    
    //Hire contact form, and show thank you form
    $('.display_form').on('click', function(){
        $('.slide_down').hide();
        $('.thankyou_card').fadeIn(200);
    }) 

    //Hide thank you card
    $('.about_card, .products_card, .contact_card').on('click', function(){
        $('.thankyou_card').hide();
    })
  });