$(document).ready(function(){
    $('#open_modal').click(function(){
        $('#modal_to_open').css(
            {
                'display':'block'
            }

        );
    });
    $('#close_modal').click(function(){
        $('#modal_to_open').css(
            {
                'display':'none'
            }
        )

    });

    //send main with ajax

   /* $('#send_email').click(function(e){
        e.preventDefault();
        var data = {
            email:$('#email').val(),
            name:$('#name').val(),
            objet:$('#firstname').val(),
            message:$('#message').val()
        };
        //ajax
        $.ajax({
            url:"mail.php",
            type: 'POST',
            data: data,
            success:function(data){
                $('#js_alert_success').css({'display' : 'block'});
                setTimeout(function(){
                    $('#js_alert_success').css({'display': 'none'});
                    $('#email').val("");
                    $('#name').val("");
                    $('#firstname').val("");
                    $('#message').val("")
                },3000);
            },
            erro: function(data){
                $('#js_alert_danger').css({'display' : 'block'});
                setTimeout(function(){
                    $('#js_alert_danger').css({'display': 'none'});
                    $('#email').val("");
                    $('#name').val("");
                    $('#firstname').val("");
                    $('#message').val("")
                },3000);
            }

                      
        });
    
    });*/
});

