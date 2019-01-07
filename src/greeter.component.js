/*
 * This is an angular component that wraps the react Greeter component
 */
import Greeter from "./Greeter";
import { createComponent } from "./componentCreator";

export const GreeterComponent = createComponent(Greeter, ["name"]);
