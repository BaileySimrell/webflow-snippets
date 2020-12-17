function roundHalf(num) { return Math.round(num*2)/2; }
function calculateAverageRating(){
    
    var ratingsCount = $('.review-star-rating-hidden').length;

    var ratingsOnPage = [];
    $('.review-star-rating-hidden').each(function(){
        ratingsOnPage.push(parseInt(this.innerHTML));
    });

    var sumOfRatings = ratingsOnPage.reduce(function(a, b){
        return a + b;
    }, 0);

    var averageRating = (sumOfRatings / ratingsCount);

    averageRating = roundHalf(averageRating);

    if (averageRating == 1){
        $("#star-1").css("display", "block");
        $("#star-outline-1").css("display", "block");
        $("#star-outline-2").css("display", "block");
        $("#star-outline-3").css("display", "block");
        $("#star-outline-4").css("display", "block");
        console.log('Average rating for this item is: ' + averageRating + '.');
    } else if (averageRating == 1.5){
        $("#star-1").css("display", "block");
        $("#star-half").css("display", "block");
        $("#star-outline-1").css("display", "block");
        $("#star-outline-2").css("display", "block");
        $("#star-outline-3").css("display", "block");
        console.log('Average rating for this item is: ' + averageRating + '.');
    } else if (averageRating == 2){
        $("#star-1").css("display", "block");
        $("#star-2").css("display", "block");
        $("#star-outline-1").css("display", "block");
        $("#star-outline-2").css("display", "block");
        $("#star-outline-3").css("display", "block");
        console.log('Average rating for this item is: ' + averageRating + '.');
    } else if (averageRating == 2.5){
        $("#star-1").css("display", "block");
        $("#star-2").css("display", "block");
        $("#star-half").css("display", "block");
        $("#star-outline-1").css("display", "block");
        $("#star-outline-2").css("display", "block");
        console.log('Average rating for this item is: ' + averageRating + '.');
    } else if (averageRating == 3){
        $("#star-1").css("display", "block");
        $("#star-2").css("display", "block");
        $("#star-3").css("display", "block");
        $("#star-outline-1").css("display", "block");
        $("#star-outline-2").css("display", "block");
        console.log('Average rating for this item is: ' + averageRating + '.');
    } else if (averageRating == 3.5){
        $("#star-1").css("display", "block");
        $("#star-2").css("display", "block");
        $("#star-3").css("display", "block");
        $("#star-half").css("display", "block");
        $("#star-outline-1").css("display", "block");
        console.log('Average rating for this item is: ' + averageRating + '.');
    } else if (averageRating == 4){
        $("#star-1").css("display", "block");
        $("#star-2").css("display", "block");
        $("#star-3").css("display", "block");
        $("#star-outline-1").css("display", "block");
        console.log('Average rating for this item is: ' + averageRating + '.');
    } else if (averageRating == 4.5){
        $("#star-1").css("display", "block");
        $("#star-2").css("display", "block");
        $("#star-3").css("display", "block");
        $("#star-4").css("display", "block");
        $("#star-half").css("display", "block");
        console.log('Average rating for this item is: ' + averageRating + '.');
    } else if (averageRating == 5){
        $("#star-1").css("display", "block");
        $("#star-2").css("display", "block");
        $("#star-3").css("display", "block");
        console.log('Average rating for this item is: ' + averageRating + '.');
    }

}
calculateAverageRating();