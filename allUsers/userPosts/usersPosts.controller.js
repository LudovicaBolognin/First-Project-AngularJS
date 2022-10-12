const usersPostsController = function ($scope, myService, $routeParams, $location) {

  //this.hide = true;
  this.dataUser = null;
  this.dataPosts = null;
  //let onLoading = true;

  this.getSelectedUser = async (id) => {
  const user = await myService.getUser(id);
  console.log(user);
  this.dataUser = user;
  //this.hide = false;
  }

  this.getPosts = async (id) => {
    const posts = await myService.getPostsUser(id);
    console.log(posts);
    this.dataPosts = posts;
    console.log(this.dataPosts);
  }

  this.onClick = () => {
    this.getPosts($routeParams.id); // perché ignora???
    console.log(this.getPosts($routeParams.id));
  }
   
  this.goToComments = (userid, param2) => {
    userid = $routeParams.id;
    $location.path(`/main/${userid}/posts/${param2}/comments`)
  }
  
  /*$scope.hasDataUser = () => {
    return !!this.dataUser;
  }*/

  this.$onInit = () => {
    console.log(this);
    this.getSelectedUser($routeParams.id); //???
    console.log(this.getSelectedUser($routeParams.id));
  }
}