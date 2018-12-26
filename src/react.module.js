import angular from "angular";
import { ReactDirective } from "./react.directive";

export const ReactModule = angular
  .module("react", [])
  .directive("reactComponent", ReactDirective).name;
