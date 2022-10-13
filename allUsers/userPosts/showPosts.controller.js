const showPostsController = function ($scope, myService, $location, $routeParams) {

  this.goToComments = (userid, param2) => {
    userid = $routeParams.id;
    $location.path(`/main/${userid}/posts/${param2}/comments`)
  }

}