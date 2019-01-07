export function createComponent(reactComponent, props) {
  // Maybe a nice-to-have would be derive props from propTypes...
  if (!props) {
    props = [];
  }

  function controller() {
    this.reactComponent = reactComponent;
  }

  const bindings = {};
  props.forEach(prop => {
    bindings[prop] = "<";
  });

  const templateBindings = props
    .map(prop => `${prop}="$ctrl.${prop}"`)
    .join(" ");
  const template = `
    <react-component
      component="$ctrl.reactComponent"
      ${templateBindings}
    />
  `;

  return {
    bindings,
    controller,
    template
  };
}
