contentHarvestingStation.config(['$sceDelegateProvider', function($sceDelegateProvider) {
    // For more details go to https://docs.angularjs.org/api/ng/service/$sce
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'http://www.sample-videos.com/**'
    ]);
}]);