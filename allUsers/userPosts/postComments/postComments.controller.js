const postCommentsController = function ($routeParams, $scope, myService) {
  //istruzioni
  this.arrayComments = [];

  this.getPostComments = async (id) => {
    const commentsList = await myService.getComments(id);
    this.arrayComments = commentsList;
    $scope.$apply();
    //console.log(this.arrayComments);
  }

  this.$onInit = () => {
    this.getPostComments($routeParams.id); //???
    //console.log(this.getPostComments($routeParams.id));
    //console.log(this.arrayComments);
  }
}