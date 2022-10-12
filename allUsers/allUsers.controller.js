const allUsersController = function ($scope, myService, $location) {

  console.log(this);
  this.myFunction= () => {
    console.log("prova di myFunction");
  };
  this.arrayUsers = ["1", "2", "3"];


  this.getarrayList = async () => {

    const arrayList = await myService.getAllUsers();
    this.arrayUsers = arrayList;
    $scope.$apply();
    //return this.arrayUsers;
  };

  this.$onInit = () => {

    this.getarrayList();
    //console.log(this.getarrayList());

  };

  //click sull'utente
  this.goToUserDetails = (item) => {
    this.selectedUser = item;
    $location.path(`/main/${item.id}/posts`);
  };
}
