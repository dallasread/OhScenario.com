window.scenario = window.Scenario.create('#scenario', {
    steps: {
        0: {
            action: 'visit',
            target: 'http://dallasread.com'
        }
    }
});

$(document).on('submit', '.intro-content', function() {
    var website = $('#website').val();

    if (!website.length) {
        alert('Please enter a valid website.');
        return;
    }

    $('#features').show();
    $('h2#website').text( website );
    $('body').scrollTop( $('#features').offset().top );
    return false;
});

var rawParams = (window.location.search + '').replace(/\?/, '').split('&'),
    params = {},
    param;

for (var i = 0; i < rawParams.length; i++) {
    param = rawParams[i].split('=');
    params[param[0]] = param[1] || true;
}

if (params.website) {
    $('#website').val( params.website );
    $('.intro-content').trigger('submit');
    window.scenario.run();
}

$(document).on('click', '.save, .sign-up', function() {
    $('#sign-up').show();
    return false;
});

$(document).on('submit', '#sign-up', function() {
    alert('SEND TO REMETRIC');
    window.location = '/thanks/';
    return false;
});
