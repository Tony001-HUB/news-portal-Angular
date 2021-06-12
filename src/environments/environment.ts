// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getCategoriesUrl: "https://localhost:44322/Categories",
  getCategoryByIdUrl: "https://localhost:44322/Categories",
  getPostsUrl: "https://localhost:44322/Posts",
  getPostByIdUrl: "https://localhost:44322/Posts",
  getPostCategory: "https://localhost:44322/Posts",
  putCategory: "https://localhost:44322/Categories",
  putPost: "https://localhost:44322/Posts",
  getCategoriesOfPostUrl: "https://localhost:44322/Posts",
  postCategoriesOfPostUrl: "https://localhost:44322/Posts",
  deleteCategory: "https://localhost:44322/Categories",
  postCategory: "https://localhost:44322/Categories",
  postUser: "https://localhost:44322",
  postPosts: "https://localhost:44322/Posts",
  getUsers: "https://localhost:44322/Users?",
  putUser: "https://localhost:44322/Users"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
