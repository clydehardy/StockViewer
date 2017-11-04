(function(){
  var app = angular.module("stockViewer");
  
  var MainController = function($scope,stockService){
    $scope.search = function(stockcode) {
      $scope.stockcode = stockcode;
      stockService.getStockData(stockcode).then(onChartData, onError);
    };

    var onChartData = function(data){
      var cdata = [];
      for (var i = 0; i < data.length; i++){
        cdata.push(new Array((new Date(data[i][0].replace(/-/g,'/'))).getTime()/1000,data[i][1]));
      }
      $scope.chartdata = cdata;
    };

    var onError = function(reason){
      $scope.chartdata = "Could not retrieve the chart data";
    }
  };
  
  app.controller("MainController",MainController);
}());