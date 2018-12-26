import React from "react";
import ReactDOM from "react-dom";

export const ReactDirective = function() {
  function link(scope, element, attrs, controller, transcludeFn) {
    console.log({ scope, element, attrs, controller, transcludeFn });

    let component;
    const attrValues = {};

    Object.keys(attrs).forEach(key => {
      if (!key.startsWith("$") && key != "component") {
        attrValues[key] = undefined;
      }
    });

    function remount() {
      if (component) {
        const mountPoint = element[0];
        ReactDOM.render(React.createElement(component, attrValues), mountPoint);
      }
    }

    Object.keys(attrValues).forEach(key => {
      const prop = attrs[key];
      scope.$watch(prop, function(value) {
        console.log("$watch", { key, prop, value });
        attrValues[key] = value;
        remount();
      });
    });

    scope.$watch(attrs.component, function(value) {
      console.log("$watch", { key: "component", prop: attrs.component, value });
      component = value;
      remount();
    });
  }

  return {
    link: link
  };
};
