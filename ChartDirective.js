(function(){
    var app = angular.module("stockViewer");
    app.directive('highstockchart', function(){
      return {
        restrict: 'C',
        replace: true,
        scope: false,
        //template: '<div id="container" >not working</div>',
        link: function (scope, element, attrs) {
          console.log(3);
          var chart = new Highcharts.stockChart({
            chart: {
              renderTo: 'highstockchart'
            },
            title: {
              text: scope.stockcode + ' from Angular Service'
            },
            series: [{
              name: scope.stockcode,
              data: scope.chartdata,
              tooltip: {
                valueDecimals: 2
              }
            }]
          });
          scope.$watch("chartdata", function (newValue) {
            chart.title.text = scope.stockcode;
            chart.series[0].setData(scope.chartdata, true);
          }, true);
      }};
    });
  }());