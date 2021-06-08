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
  getCategoriesOfPostUrl: "https://localhost:44322/Posts"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
