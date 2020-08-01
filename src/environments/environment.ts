// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: "http://localhost:3000/api",
  // apiUrl: "https://mean-pizza-shop.herokuapp.com/api",
  firebase: {
    apiKey: "AIzaSyBYH4rIan768DG4fLTYQQOJ0CRvEygM1mI",
    authDomain: "mean-stack-pizza.firebaseapp.com",
    databaseURL: "https://mean-stack-pizza.firebaseio.com",
    projectId: "mean-stack-pizza",
    storageBucket: "mean-stack-pizza.appspot.com",
    messagingSenderId: "69081065393",
    appId: "1:69081065393:web:2b0e24167d639cbd4dbf90",
    measurementId: "G-401KD6J65F"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
