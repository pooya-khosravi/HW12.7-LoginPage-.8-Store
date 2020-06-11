$(document).ready(function () {
    
    /**
     * click on submit button and check condition
     * first check unvalid inputs
     * second send a req to server
     * third check use and pas
     * and get response and show result
     */
    $("#loginButton").click(function () {
        //first check unvalid inputs
        if($("#customUsername").val() === "" && $("#customPassword").val() === "" )
        {
            $(".invalid-feedback").css("display","block");
        }
        else if($("#customUsername").val() === "" && $("#customPassword").val() !== "")
        {
            $("#userFeedBack").css("display","block");
        }
        else if($("#customUsername").val() !== "" && $("#customPassword").val() === "")
        {
            $("#passFeedBack").css("display","block");
        }
        else
        {
            /**
             * second send req
             * create object of use and pas for send
             */
            let myRequest = new myReqObject( $("#customUsername").val(), $("#customPassword").val() );// create obj
            //send use and pass for check
            $.ajax({
                type: "POST",
                url: "login/submit",
                data: myRequest,
                success: function (resSubmit) {
                    if(resSubmit === "true")
                    {
                        $("#p1").html(".ورود موفقیت آمیز بود");
                        $("#p1").css("color","green");
                    }
                    else
                    {
                        $("#p1").html(".کاربری با این مشخصات وجود ندارد");
                        $("#p1").css("color","red");
                    }
                }
            });
        }
    });

    //check input display for hide massage 
    $("#customUsername").keydown(function () { 
        if($("#userFeedBack").css("display") === "block")
        {
            $("#userFeedBack").css("display","none");
        }
    });

    $("#customPassword").keydown(function () { 
        if($("#passFeedBack").css("display") === "block")
        {
            $("#passFeedBack").css("display","none");
        }
    });

});

//constructor of use and pass request
function myReqObject(userName, password) {
    this.user = userName;
    this.pass = password;
}