$("#timeTo").val("00:00");
$("#timeFrom").val("23:59")


for (let i = 0; i < 60; i++) {
    if(i <10){
       $(".scolling-time a").text("0"+i);   
    }else{
        $(".scolling-time a").text(i);   
    }

  
    $(".scolling-time a").after()
  }


$(".scolling-time .hh").on("click", function(){
     $(this).each(function(){
        $(".hh").removeClass("active-hh");
    });
    $(this).addClass("active-hh");
    console.log( $("#timeTo").val());
    var hh = $("#timeTo").val().split(":");
    var numberHH = $(this ).text();
    $("#timeTo").val(numberHH+":"+hh[1]);
    (".active-hh").scrollTop = 0;
});

$(".mm").on("click", function(){
    $(this).each(function(){
        $(".mm").removeClass("active-logoCustomer");
    });
    var mm = $("#timeTo").val().split(":");
    var numberMM = $(this ).text();
    $("#timeTo").val(mm[0]+":"+numberMM);
});


