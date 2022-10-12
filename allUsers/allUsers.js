//The $location service has methods which return information about the location of the current web page:
(function(angular) {
    "use strict";
    angular.module("UsersPostsApp")
      .component("allUsers", {
          templateUrl: "allUsers/allUsers.html",
          controller: allUsersController
      })
})(window.angular);