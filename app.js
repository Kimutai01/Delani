$(document).ready(function () {
    $('#icon1').click(function () {
        $('#icon1').hide()
    })
    $('#icon1').click(function () {
        $('.para1').toggle()
    })
    $('.para1').click(function () {
        $('.para1').hide()
        $('#icon1').show()
    })

    $('#icon2').click(function () {
        $('#icon2').hide()
    })
    $('#icon2').click(function () {
        $('.para2').toggle()
    })
    $('.para2').click(function () {
        $('.para2').hide()
        $('#icon2').show()
    })

    $('#icon3').click(function () {
        $('#icon3').hide()
    })
    $('#icon3').click(function () {
        $('.para3').toggle()
    })
    $('.para3').click(function () {
        $('.para3').hide()
        $('#icon3').show()
    })
    $('.work1 img').hover(function () {
        $('.work1 img').css("transform", "scale(0.98)");
    })
    $('.work1 img').hover(function () {
        $('.card1').toggle()
    })

    $('.work2 img').hover(function () {
        $('.card2').toggle()
    })

    $('.work3 img').hover(function () {
        $('.card3').toggle()
    })

    $('.work4 img').hover(function () {
        $('.card4').toggle()
    })

    $('.work5 img').hover(function () {
        $('.card5').toggle()
    })

    $('.work6 img').hover(function () {
        $('.card6').toggle()
    })

    $('.work7 img').hover(function () {
        $('.card7').toggle()
    })

    $('.work8 img').hover(function () {
        $('.card8').toggle()
    })

});


function nam() {
    let theName = document.getElementById('name').value
    let theEmail = document.getElementById('email').value
    let message = document.getElementById('comments').value
    if (theName == '' && message == '' && theEmail == '') {
        swal({
            title: "error!",
            text: "Please enter name, message and email",
            icon: "error",
        });
    } else if (theName == '' && message == '') {
        swal({
            title: "error!",
            text: "Please enter name and message",
            icon: "error",
        });
    } else if (message == '' && theEmail == '') {
        swal({
            title: "error!",
            text: "Please enter, email and message",
            icon: "error",
        });
    } else if (theName == '' && theEmail == '') {
        swal({
            title: "error!",
            text: "Please enter name and email",
            icon: "error",
        });
    } else if (theName == '') {
        swal({
            title: "error!",
            text: "Please enter name",
            icon: "error",
        });
    } else if (message == '') {
        swal({
            title: "error!",
            text: "Please enter  message",
            icon: "error",
        });
    } else if (theEmail == '') {
        swal({
            title: "error!",
            text: "Please enter email",
            icon: "error",
        });
    } else {
        swal({
            title: "Success!",
            text: theName +' ' +' we have recieved your message.Thank you for reaching out to us.**',
            icon: "success",
        });
    }
}




