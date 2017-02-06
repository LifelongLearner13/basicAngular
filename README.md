# Basic Angular
Coding Assessment for WatchTower Security

Submission by: Sierra Gregg

## Installation

Built with Node v7.2.0 and NPM v3.10.9

1. Clone repo `git clone https://github.com/LifelongLearner13/basicAngular.git`
2. Navigate inside project folder and install dependencies by typing the following into a bash terminal `cd basicAngular && npm install`.
3. To view the angular app in a browser run `npm start`. The website will be visible at [http://localhost:4200/home](http://localhost:4200/home). Please note their are problems with the web version, see the Discussion section for explanation.
4. To see the Electron app run `npm run electron`.

## Discussion

This was my first app built with Angular 2, Typescript, and Electron.  Components, services, and modules were generated using the Angular cli.

The main content of the app is handled by the bike feature module. There are two components, StaticBikeListComponent and LiveBikeListComponent. StaticBikeListComponent uses the BasicService to pull information from the data.ts file. LiveBikeListComponent uses the HttpService to pull data from [https://feeds.citibikenyc.com/stations/stations.json](https://feeds.citibikenyc.com/stations/stations.json). Both components display the Citi Bike information in a table. I did remove/combine some fields in the display table to increase readability. I utilized Angular's router to provide basic navigation between the two components.

HttpService will throw a CORS related error when the angular code is viewed in the browser. I think the feeds.citibikenyc.com server is not setup to handle CORS. Without access to the server, solutions to the problem are limited. One possible solution would be to setup a proxy and feed requests through it, meaning I could attach the appropriate headers. As a temporary, testing only solution, I utilized the [Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) Chrome extension.

I used [Bootstrap 4](https://v4-alpha.getbootstrap.com/) to add minimal styles to the app.

Since I had limited time to complete the project, I did not add tests beyond the ones generated by the angular cli tool.

## Learning / Reference Resources

I utilized the following resources while building this project.

* ["Angular 2: Getting Started"](https://app.pluralsight.com/library/courses/angular-2-getting-started-update) course on Pluralsight with its accompanying [git repo](https://github.com/DeborahK/Angular2-GettingStarted)
* [Angular 2 From Theory to Practice](https://codecraft.tv/courses/ng2/) by Asim Hussain
* [Package an Angular CLI Application into Electron](Package an Angular CLI Application into Electron) by Bruno D'Auria
* [Angular Official Documentation](https://angular.io/)
* Countless [StackOverflow](http://stackoverflow.com/) answers
* The project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.
