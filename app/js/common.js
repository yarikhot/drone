
$(document).ready(function () {
    $(window).on( "load",function() {
        $('.loader').fadeOut();
        $('.pre').delay(400).fadeOut('slow');
    });
    $('.toggle-mnu').click(function () {
        $(this).toggleClass('on');
        $('.hidden_bar').slideToggle();
        return false;
    });

    $('.mouse-icon').click(function () {
        $('html, body').animate({
            scrollTop: $('.s_form').offset().top
        }, 800);
    });

    $('#mail-link').on('click', function () {
        var send_form = document.getElementById('form-mail');
        if (send_form.checkValidity() === false) {
            alert('Write in the field!');
            return;
        }
    });

    $('#form-mail').submit(function () {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: formNm.serialize(),
            success: function (data) {
                // Вывод текста результата отправки
                $(formNm).html(data);
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html(error);
            }
        });
        return false;
    });
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 13
    });

    var infoWindow = new google.maps.InfoWindow({map: map});

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var marker = new google.maps.Marker({
                position: pos,
                map: map
            });

            marker = new google.maps.Marker({
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP,
                position: pos
            });


            infoWindow.setPosition(pos);
            infoWindow.setContent('Ваше місцезнаходження.');
                map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });

    } else {

        handleLocationError(false, infoWindow, map.getCenter());
    }

});

    




