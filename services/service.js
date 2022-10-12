  // ``
  // Url dell'utente: https://jsonplaceholder.typicode.com/users/1
  //url post di un utente: https://jsonplaceholder.typicode.com/posts?userId=2
  //url di un post: https://jsonplaceholder.typicode.com/posts/3
  //url commenti di un post: https://jsonplaceholder.typicode.com/posts/3/comments

(function (angular) {
    angular.module("UsersPostsApp")
        .service("myService", ["$http", function ($http) {
            this.getAllUsers = async function getAll() {
                const resp = await $http({
                  method: "GET",
                  url: "https://jsonplaceholder.typicode.com/users"
                });
                return resp.data;
            };

            this.getUser = async function getSingleUser(id) {
              const resp = await $http({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/users/" + id
              });
              return resp.data;
            };

            this.getPostsUser = async function getPosts(id) {
              const resp = await $http({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/posts?userId=" + id
              });
              return resp.data;
            };

            this.getComments = async function getPostComments(id) {
              const resp = await $http({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/posts/" + id + "/comments"
              });
              return resp.data;
            }


        }]);

})(window.angular);
