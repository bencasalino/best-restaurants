bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope){
    $scope.restaurants = [];
    $scope.addRestaurant = function(){
        $scope.restaurants.push({ name: $scope.restaurantName, cuisine: $scope.restaurantCuisine, location: $scope.restaurantLocation, minPrice: $scope.restaurantMinPrice, maxPrice: $scope.restaurantMaxPrice });
        $scope.restaurantName = null;
        $scope.restaurantCuisine = null;
        $scope.restaurantLocation = null;
        $scope.restaurantMinPrice = null;
        $scope.restaurantMaxPrice = null;
};
    $scope.deleteResaurant = function(restaurant){
        var index = $scope.restaurants.indexOf(restaurant);
        $scope.restaurants.splice(index, 1);
    };
    $scope.greaterThan = function(property, value){
        return function(item){
            return item[property] >= value;
        }
    }
    $scope.lessThan = function(value){
        return function(item){
            return (item.maxPrice <= value);
        }
    }
    $scope.searchRestaurant = function(){
        if(name != null || location != null || cuisine != null) {
            return 'query';
        } else {
            return 'lessThan(query.maxPrice)';
        }
    }
});
