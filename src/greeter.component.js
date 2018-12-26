/*
 * This is an angular component that wraps the react Greeter component
 */
import Greeter from "./Greeter";

export const GreeterComponent = {
  bindings: {
    name: "<"
  },
  controller: GreeterController,
  template: `
    <react-component
      component="$ctrl.reactComponent"
      name="$ctrl.name"
    />
  `
};
GreeterController.$inject = [];
function GreeterController() {
  this.$onInit = function $onInit() {
    this.reactComponent = Greeter;
  };
}
