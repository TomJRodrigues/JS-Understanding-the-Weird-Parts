var g = G$('John', 'Doe');

$('#login').click(function() {
    
    var loginGrtr = G$('Tom', 'Rodrigues');
    
    $('#logindiv').hide();
    
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});