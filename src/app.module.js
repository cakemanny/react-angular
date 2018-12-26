import angular from "angular";
import { AppComponent } from "./app.component";
import { GreeterModule } from "./greeter.module";

export const AppModule = angular
  .module("app", [GreeterModule])
  .component("app", AppComponent).name;
