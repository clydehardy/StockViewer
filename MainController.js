(function(){
  var app = angular.module("stockViewer");
  
  var MainController = function($scope,stockService){
    $scope.search = function(stockcode) {
      $scope.stockcode = stockcode;
      $scope.chartdata = stockService.getStockData(stockcode);
    };
  };
  
  app.controller("MainController",MainController);
}());