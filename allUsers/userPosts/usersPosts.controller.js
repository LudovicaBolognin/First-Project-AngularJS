const usersPostsController = function ($scope, myService, $routeParams, $location) {

  this.datauser = null;
  this.dataPosts = null;

  this.getSelectedUser = async (id) => {
  const user = await myService.getUser(id);
  this.datauser = user;
  $scope.$apply();
  }

  this.getPosts = async (id) => {
    const posts = await myService.getPostsUser(id);
    this.dataPosts = posts;
    $scope.$apply();
  }

  this.onClick = () => {
    this.getPosts($routeParams.id);
  }
   
  /*this.goToComments = (userid, param2) => {
    userid = $routeParams.id;
    $location.path(`/main/${userid}/posts/${param2}/comments`)
  }*/

  this.$onInit = () => {
    this.getSelectedUser($routeParams.id);
  }
}