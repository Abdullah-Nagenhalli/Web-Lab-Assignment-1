// jQuery validation and dynamic feedback handler
$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form reload
        
        let userName = $('#name').val().trim();
        let userEmail = $('#email').val().trim();
        let userMessage = $('#message').val().trim();
        
        if(userName === "" || userEmail === "" || userMessage === "") {
            $('#responseMessage').css('color', '#d9534f').text('Please fill in all fields before submitting.');
            return;
        }
        
        // Simulate successful processing with a neat jQuery animation effect
        $('#responseMessage')
            .hide()
            .css('color', '#28a745')
            .text('Thank you, ' + userName + '! Your message has been successfully transmitted.')
            .fadeIn(800);
            
        // Reset the form inputs
        $('#contactForm')[0].reset();
    });
});