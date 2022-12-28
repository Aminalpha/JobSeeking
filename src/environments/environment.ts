// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrlApi: "https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api",
  headers:{
  'X-RapidAPI-Key': 'c2daaa4e23msh6e95697c68eb0dcp142acdjsn8f8234cac6fe',
  'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
