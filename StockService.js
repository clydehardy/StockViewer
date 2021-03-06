(function(){
  
  var stockService = function($http){
    
    
    var getStockData = function(stockcode){
      return $http.get("https://www.quandl.com/api/v3/datasets/WIKI/"+ stockcode + ".json?start_date=2017-01-01&end_date=2017-11-01&column_index=1&api_key=VZob1kKriQgPHgqg4ds7")
                  .then(function(response){
                    return response.data.dataset.data;
                  });
    };  
    
    return {
      getStockData: getStockData
    };
    
  };
                    
  
  var module = angular.module("stockViewer");
  module.service('stockService',stockService);
}());