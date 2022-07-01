$(function () {

    window.p1 = [
        [],[],[],
        [],[],[],
        [],[],[],
    ];
    var player1 = prompt('Player 1:');
    player1 = player1 === '' 
        ? 'Player 1' 
        : player1.replace(' ', '');           
     
    $('.players1-turn').prop('hidden', false);
    $('#player1').html(player1 + '<i class="fa fa-close ml-1" id="sirax"></i>');
    $('#player1').addClass('text-danger');

    window.p2 = [
        [],[],[],
        [],[],[],
        [],[],[],
    ];
    var player2 = prompt('Player 2:');
    player2 = player2 === '' 
        ? 'Player 2' 
        : player2.replace(' ', '');    
    $('.players2-turn').prop('hidden', false);
    $('#player2').html(player2  + ' <span id="sirao">O</span>');
    $('#player2').addClass('text-warning');
    // x ve o için Yanma Sönme css

    $('#p1Tablo').text(player1);
    $('#p2Tablo').text(player2);

    const divleriIsaretle = () => {   
        $(".box").each( function(index, element) {           
            $(element).attr('data-key',`b${index + 1}`)            
        });
    }
    divleriIsaretle();

    $('#res').click( function () {  
        //restart();
        window.location.reload();
    });

    function restart() {     

        /*
        window.p1 = [ [],[],[], [],[],[], [],[],[] ];

        window.p2 = [ [],[],[], [],[],[], [],[],[] ];

        $(".box").each(function(index, element) {           
            $(element).removeAttr('data-click');                    
            $(element).removeClass();            
            $(element).addClass('box');
            $(element).find('i').removeClass();
        });

        window.sayac = 0;
        */
        return window.location.reload();
    }

     function isaretciTemizle() {        
        $(".box").each( function(index, element) {
            if ( !$(this).data('click') ) { 
                if ( window.sayac % 2 == 1 ) {
                    $(element).find('i').delay(1500).removeClass('fa fa-opera');                    
                } else {
                    $(element).find('i').delay(1500).removeClass('fa fa-times');
                }                
            }
        });
    }

    function p1kontrolEt() {
        let p1D = window.p1;
        if ( p1D[0][0] == 1 && p1D[1][0] == 1 && p1D[2][0] == 1 ) {
            //alert('Kazanan: ' + $('#player1').text());
            $('#p1W').text( parseInt( $('#p1W').text() ) + 1 );
            restart();
        }
        if ( p1D[3][0] == 1 && p1D[4][0] == 1 && p1D[5][0] == 1 ) {
            //alert('Kazanan: ' + $('#player1').text());
            $('#p1W').text( parseInt( $('#p1W').text() ) + 1 );
            restart();
        }
        if ( p1D[6][0] == 1 && p1D[7][0] == 1 && p1D[8][0] == 1 ) {
            //alert('Kazanan: ' + $('#player1').text());
            $('#p1W').text( parseInt( $('#p1W').text() ) + 1 );
            restart();
        }

        if ( p1D[0][0] == 1 && p1D[3][0] == 1 && p1D[6][0] == 1 ) {
            //alert('Kazanan: ' + $('#player1').text());
            $('#p1W').text( parseInt( $('#p1W').text() ) + 1 );
            restart();
        }
        if ( p1D[1][0] == 1 && p1D[4][0] == 1 && p1D[7][0] == 1 ) {
            //alert('Kazanan: ' + $('#player1').text());
            $('#p1W').text( parseInt( $('#p1W').text() ) + 1 );
            restart();
        }
        if ( p1D[2][0] == 1 && p1D[5][0] == 1 && p1D[8][0] == 1 ) {
            //alert('Kazanan: ' + $('#player1').text());
            $('#p1W').text( parseInt( $('#p1W').text() ) + 1 );
            restart();
        }


        if ( p1D[0][0] == 1 && p1D[4][0] == 1 && p1D[8][0] == 1 ) {
            $('#p1W').text( parseInt( $('#p1W').text() ) + 1 );
            //alert('Kazanan: ' + $('#player1').text());
            restart();
        }
        if ( p1D[2][0] == 1 && p1D[4][0] == 1 && p1D[6][0] == 1 ) {
            $('#p1W').text( parseInt( $('#p1W').text() ) + 1 );
            //alert('Kazanan: ' + $('#player1').text());
            restart();
        }
    }
    function p2kontrolEt() {
        let p2D = window.p2;
        if ( p2D[0][0] == 0 && p2D[1][0] == 0 && p2D[2][0] == 0 ) {
            //alert('Kazanan: ' + $('#player2').text().replace('O', '') );
            $('#p2W').text( parseInt( $('#p2W').text() ) + 1 );
            restart();
        }
        if ( p2D[3][0] == 0 && p2D[4][0] == 0 && p2D[5][0] == 0 ) {
            //alert('Kazanan: ' + $('#player2').text().replace('O', '') );
            $('#p2W').text( parseInt( $('#p2W').text() ) + 1 );
            restart();
        }
        if ( p2D[6][0] == 0 && p2D[7][0] == 0 && p2D[8][0] == 0 ) {
            //alert('Kazanan: ' + $('#player2').text().replace('O', '') );
            $('#p2W').text( parseInt( $('#p2W').text() ) + 1 );
            restart();
        }
        if ( p2D[0][0] == 0 && p2D[3][0] == 0 && p2D[6][0] == 0 ) {
            //alert('Kazanan: ' + $('#player2').text().replace('O', '') );
            $('#p2W').text( parseInt( $('#p2W').text() ) + 1 );
            restart();
        }
        if ( p2D[1][0] == 0 && p2D[4][0] == 0 && p2D[7][0] == 0 ) {
            //alert('Kazanan: ' + $('#player2').text().replace('O', '') );
            $('#p2W').text( parseInt( $('#p2W').text() ) + 1 );
            restart();
        }
        if ( p2D[2][0] == 0 && p2D[5][0] == 0 && p2D[8][0] == 0 ) {
            //alert('Kazanan: ' + $('#player2').text().replace('O', '') );
            $('#p2W').text( parseInt( $('#p2W').text() ) + 1 );
            restart();
        }
        if ( p2D[0][0] == 0 && p2D[4][0] == 0 && p2D[8][0] == 0 ) {
            //alert('Kazanan: ' + $('#player2').text().replace('O', '') );
            $('#p2W').text( parseInt( $('#p2W').text() ) + 1 );
            restart();
        }
        if ( p2D[2][0] == 0 && p2D[4][0] == 0 && p2D[6][0] == 0 ) {
            //alert('Kazanan: ' + $('#player2').text().replace('O', '') );
            $('#p2W').text( parseInt( $('#p2W').text() ) + 1 );
            restart();
        }
    }

    $(document).on('mouseleave', '.box', function() {
        isaretciTemizle();       
    });

    window.sayac = 0;
    $('.players2-turn').css('border-color','transparent');
    $(document).on('click', '.box', function(index, element) {       
        var stat = $(this).attr('data-click') ? true : false;
        if ( !stat ) {            
            if ( window.sayac % 2 == 0 ) {
                $('.players1-turn').removeAttr('style');
                $('.players2-turn').css('border-color','orange');
                $('.players1-turn').css('border-color','transparent');
                $(this).addClass('bg-danger');
            } else {
                $('.players2-turn').removeAttr('style');
                $('.players1-turn').css('border-color','red');
                $('.players2-turn').css('border-color','transparent'); 
                $(this).addClass('bg-warning'); 
            }
            if ( window.sayac == 8 ) {
                $('.players1-turn').removeAttr('style');
                $('.players2-turn').removeAttr('style');
            }
            $(this).attr('data-click','noclick');           
            window.sayac ++;
        }        
        if ( this.dataset.click ) {
            $(this).attr('data-click','noclick');
            return 0;
        }              
        if ( window.sayac % 2 == 1 ) {
            $(this).find('i').removeClass().addClass('fa fa-opera').css('opacity','1');                     
            return 0;
        }         
        $(this).find('i').removeClass().addClass('fa fa-times').css('opacity','1');
    });

    $(document).on('mouseenter', '.box', function() {
       var isClick = this.dataset.click;
        if ( isClick ) {
            return;
        }       
        if ( window.sayac % 2 == 1 ) {
            $(this).find('i').addClass('fa fa-opera');
            return;
        }
        $(this).find('i').addClass('fa fa-times');            
    });    
    
    $('.box').click( function() { // document   
        if ( !!this.dataset.click ) {
            return 0;
        } 
        if ( window.sayac == 9 ) {
            alert('Beraberlik');
            restart();
        }
        if ( window.sayac % 2 == 1) {   // O  window.p2

            if ( this.dataset.key == 'b1' ) {
                window.p2[0][0] = 0;
            }
            if ( this.dataset.key == 'b2' ) {
                window.p2[1][0] = 0;
            }
            if ( this.dataset.key == 'b3' ) {
                window.p2[2][0] = 0;
            }

            if ( this.dataset.key == 'b4' ) {
                window.p2[3][0] = 0;
            }
            if ( this.dataset.key == 'b5' ) {
                window.p2[4][0] = 0;
            }
            if ( this.dataset.key == 'b6' ) {
                window.p2[5][0] = 0;
            }

            if ( this.dataset.key == 'b7' ) {
                window.p2[6][0] = 0;
            }
            if ( this.dataset.key == 'b8' ) {
                window.p2[7][0] = 0;
            }
            if ( this.dataset.key == 'b9' ) {
                window.p2[8][0] = 0;
            }             
            p2kontrolEt();
            
        } else { // X window.p1 

            if ( this.dataset.key == 'b1' ) {
                window.p1[0][0] = 1;
            }
            if ( this.dataset.key == 'b2' ) {
                window.p1[1][0] = 1;
            }
            if ( this.dataset.key == 'b3' ) {
                window.p1[2][0] = 1;
            }

            if ( this.dataset.key == 'b4' ) {
                window.p1[3][0] = 1;
            }
            if ( this.dataset.key == 'b5' ) {
                window.p1[4][0] = 1;
            }
            if ( this.dataset.key == 'b6' ) {
                window.p1[5][0] = 1;
            }

            if ( this.dataset.key == 'b7' ) {
                window.p1[6][0] = 1;
            }
            if ( this.dataset.key == 'b8' ) {
                window.p1[7][0] = 1;
            }
            if ( this.dataset.key == 'b9' ) {
                window.p1[8][0] = 1;
            }
            p1kontrolEt();           
        }
    });

    $('#sifirla').click( function(){
        return window.location.reload();
    });

});
