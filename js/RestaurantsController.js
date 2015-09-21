bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope){
    $scope.restaurants = [];
    $scope.addRestaurant = function(){
        $scope.restaurants.push({ name: $scope.restaurantName });
        $scope.restaurantName = null;
    };
    $scope.deleteResaurant = function(restaurant){
        var index = $scope.restaurants.indexOf(restaurant);
        $scope.restaurants.splice(index, 1);
    };
});
