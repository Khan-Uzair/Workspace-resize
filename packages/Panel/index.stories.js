import React from "react";
import {Panel} from "./src";

export default { title: "Panel" };
export const planePanel = () => (
  <Panel width={200} isPanelOpen={true}>
   
    
    This content is scrollable.
    <p/>
    There are many ways to apply contextual overrides to a component's styling.
    That being said, it rarely is easy without rigging up a well-known targeting
    CSS selector paradigm and then making them accessible for use in
    interpolations. styled-components solves this use case cleanly via the
    "component selector" pattern. Whenever a component is created or wrapped by
    the styled() factory function, it is also assigned a stable CSS class for
    use in targeting. This allows for extremely powerful composition patterns
    without having to fuss around with naming and avoiding selector collisions.
   
    styled-components optionally supports writing CSS as JavaScript objects
    instead of strings. This is particularly useful when you have existing style
    objects and want to gradually move to styled-components.
  </Panel>
);

