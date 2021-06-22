// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

  const rootPath = 'https://localhost:44322'

export const environment = {
  production: false,
  getCategoriesUrl: `${rootPath}/Categories/paged-list`,
  getCategoryByIdUrl: `${rootPath}/Categories`,
  getPostsUrl: `${rootPath}/Posts`,
  getPostByIdUrl: `${rootPath}/Posts`,
  getPostCategory: `${rootPath}/Posts`,
  putCategory: `${rootPath}/Categories`,
  putPost: `${rootPath}/Posts`,
  getCategoriesOfPostUrl: `${rootPath}/Posts`,
  postCategoriesOfPostUrl: `${rootPath}/Posts`,
  deleteCategory: `${rootPath}/Categories`,
  postCategory: `${rootPath}/Categories`,
  postUser: `${rootPath}`,
  postPosts: `${rootPath}/Posts`,
  getUsers: `${rootPath}/Users?`,
  putUser: `${rootPath}/Users`,
  getRoles: `${rootPath}/Roles`,
  putRole: `${rootPath}/Roles`,
  getCategoriesListUrl: `${rootPath}/Categories/list`,
  authFireBase: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCLmxLsuUid3YmplX7AE9uAqsLyh2MR8gc',
  getComments: `${rootPath}/Posts`,
  authPostUrl: `${rootPath}/Users/login`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
