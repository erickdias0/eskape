    $(document).ready(function(){
        $('#carousel').slick({
        autoplay:true
        })
    })
    $('.burger-menu').on('click', function(e){
        $('nav').slideToggle()
        $('nav').addClass('open-menu')
        
        
    })
    
    $(document).on("click", function (event) {
        
        if ($(event.target).closest("header").length === 0 && $('nav').hasClass('open-menu') )   {

        
            
            $('nav').removeClass('open-menu')
            $('nav').slideUp()
            
        }
    })
    
    $('.nav-link').on("click", function () {
        $('nav').removeClass('open-menu')
        $('nav').slideUp()
        let str =     $(this).find('a')[0].id
        const roll = '#'+str
        
        
        
            $('html').animate({
                scrollTop: $(roll).offset().top
            }, 1000)
        
    })

    $('.vehicle-list button').click(function (){
        const roll = $('#contact-us')

        $('#veh').val( $(this).parent().find('h3').text())

        $('html').animate({
            scrollTop: roll.offset().top
        }, 1000
        
        )}
        
    )
