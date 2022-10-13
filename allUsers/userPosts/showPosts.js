(function (angular) {
  "use strict";
  angular.module("UsersPostsApp")
    .component("showPosts", {
      templateUrl: "allUsers/userPosts/showPosts.html",
      controller: showPostsController,
      bindings: {
        datauser: "<",
        post: "<"
      }
    })
})(window.angular);