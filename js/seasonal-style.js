$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

        season = season.toLowerCase();

        switch(season){
            case "spring":
                $("#logo").attr("src","images/spring.gif");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("html").css("background-color","green");
                $("h3").text("Too hot for a full jacket, too cold for short sleeves, try our sleeves jacket!");
            break;

            case "summer":
                $("#logo").attr("src","images/summer.gif");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("html").css("background-color","#EBA52B");
                $("h3").text("Thrive with a sun kissed tan, and easy breezy lien button ups!");
            break;

            case "fall":
                $("#logo").attr("src","images/fall.gif");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("html").css("background-color","#A81124");
                $("h3").text("It's only 4:30! Where did the sun go? Fall into out signautre jackets!");
            break;

            case "winter":
                $("#logo").attr("src","images/winter.gif");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("html").css("background-color","#005393");
                $("h3").text("Who called Mr.Frosty? Burr! Bundle up with our long puffer jackets and brave the cold!");
            break;

            case "default":
                $("#logo").attr("src","images/four-seasons.gif");
                $("#wear").attr("src","images/300x400.png");
                $("html").css("background-color","#ccc");
                $("h3").text("Outfiter for ALL Seasons!");
            break;

            default:
                alert("no case matches");
        } 

    });
});


