contentHarvestingStation.config(['$routeProvider',
  function ($routeProvider)
  {
      $routeProvider.
        when('/videoTagging', {
            templateUrl: 'app/components/videoTagging/videoTaggingTemplate.html',
            controller: 'videoTaggingController'
        }).
        otherwise({
            redirectTo: '/videoTagging'
        });
  }]);