
$(document).ready(function(){
    $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".card").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    let visits = localStorage.getItem('visits') || 0;
    visits++;
    localStorage.setItem('visits', visits);
    document.getElementById("visitorCount").innerText = visits;

    $("#registerForm").submit(function(e){
        alert("Registration submitted successfully!");
    });

    $("#bookingForm").submit(function(e){
        alert("Booking request submitted!");
    });
});
