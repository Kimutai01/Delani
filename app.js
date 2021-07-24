$(document).ready(function(){
    $('#icon1').click(function(){
        $('#icon1').hide()
    })
    $('#icon1').click(function(){
        $('.para1').toggle()
    })
    $('.para1').click(function(){
        $('.para1').hide()
        $('#icon1').show()
    })

    $('#icon2').click(function(){
        $('#icon2').hide()
    })
    $('#icon2').click(function(){
        $('.para2').toggle()
    })
    $('.para2').click(function(){
        $('.para2').hide()
        $('#icon2').show()
    })

    $('#icon3').click(function(){
        $('#icon3').hide()
    })
    $('#icon3').click(function(){
        $('.para3').toggle()
    })
    $('.para3').click(function(){
        $('.para3').hide()
        $('#icon3').show()
    })

});