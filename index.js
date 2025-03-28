

$(document).ready(function () {

    $(".container-div").fadeOut();
    $(".container-div").fadeIn(4000);

    $('.d1-cp1').each(function () {
        $(this).prop('d1-cp1', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + '+');
            }
        });
    });

    $("#img1").fadeOut();
    $("#img2").fadeOut();
    $("#img1").fadeIn(1000, function () {
        $("#img2").fadeIn(900)
    });

    $(".card1").css({ left: '25%' });
    $(".card1").animate({ left: '0%' }, 3000);

    $(".card2").css({ right: '25%' });
    $(".card2").animate({ right: '0%' }, 3000);

    $(".submit-overlay").hide();
    $(".table1-btn1").click(function () {
        $(".submit-overlay").show(function () {
            $(".submit-overlay").fadeIn()
            $(".submit-overlay").css({ 'z-index': '1' })
        });
    });

    // $(".close-submit-btn").on("click", function (event) {
    //     event.preventDefault(); // Prevent default form submission behavior

    //     // Perform form submission tasks, like sending data via AJAX (optional)
    //     console.log("Form submitted!"); // For testing

    //     // Hide/close the form after submission
    //     $(this).hide();
    // });

    $(".close-submit-btn").click(function () {
        $(".submit-overlay").hide();
    });

    $('.close-submit-btn').click(function (event) {
        // event.preventDefault(); // Prevent form submission or any default button action

        let isValid = true;
        let name = $('.submit-input[placeholder="Name"]').val();
        let phone = $('.submit-input[placeholder="Phone Number"]').val();
        let membership = $('.submit-input[placeholder="Menbership"]').val();
        let email = $('.submit-input[placeholder="Email"]').val();
        let isExistingMember = $('input[name="choice-radio"]:checked').val();

        // Validation
        if (!name) {
            isValid = false;
            alert("Name is required.");
        } else if (!phone.match(/^\d{10}$/)) { // Check if phone number is 10 digits
            isValid = false;
            alert("Please enter a valid 10-digit phone number.");
        } else if (!membership) {
            isValid = false;
            alert("Membership is required.");
        } else if (!email || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) { // Validate email
            isValid = false;
            alert("Please enter a valid email address.");
        } else if (!isExistingMember) {
            isValid = false;
            alert("Please select if you are an existing member.");
        }

        if (isValid) {
            alert("Form is valid and ready to submit!");
            // You can proceed to send data via AJAX or handle form submission
        }
    });





});