$(document).ready(function(){
    offersSlider =  $(".offersSlider");
   offersSlider.owlCarousel({
        items: 3,

        // responsive:{
        //     0:{
        //         items:1
        //     },
        //     600:{
        //         items:2,
        //         margin: 200,
        //     },
        //     1000:{
        //         items:3
        //     }
        // }
    });

    // $('.offersSlider__prev').click(function(){
    //     offersSlider.trigger('prev.owl.carousel');

    // });
    // $('.offersSlider__next').click(function(){
    //     offersSlider.trigger('next.owl.carousel');
 
    // })
  });




//   function initMap() {
//     var coordinates = {lat: 50.393845297988904, lng: 30.49167711582683},
    
//         map_1 = new google.maps.Map(document.getElementById('map'), {
//             center: coordinates,
//             zoom: 15,
//         });
//         marker = new google.maps.Marker({
//           position: coordinates,
//           map: map_1,
//           animation: google.maps.Animation.BOUNCE
//       });
// }
// map_1();

function initMap() {
  var coordinates = {lat: 50.393845297988904, lng: 30.49167711582683},
  
      map_2 = new google.maps.Map(document.getElementById('map2'), {
          center: coordinates,
          zoom: 15,
      });
      marker = new google.maps.Marker({
        position: coordinates,
        map: map_2,
        animation: google.maps.Animation.BOUNCE
    });
}
map_2();