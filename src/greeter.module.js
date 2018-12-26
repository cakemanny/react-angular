import angular from "angular";
import { GreeterComponent } from "./greeter.component";
import { ReactModule } from "./react.module";

export const GreeterModule = angular
  .module("greeter", [ReactModule])
  .component("greeter", GreeterComponent).name;
