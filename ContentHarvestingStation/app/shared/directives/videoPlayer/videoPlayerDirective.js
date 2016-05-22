ttxDirectives.directive('ttxVideoPlayer', function ()
{
    return {
        restrict: 'E',
        templateUrl: 'app/shared/directives/videoPlayer/videoPlayerTemplate.html',
        scope: {
            video: '=video'
        },
    };
});