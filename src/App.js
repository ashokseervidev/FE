//https://www.patterns.dev/posts/render-props-pattern

import React, { useState } from "react";
import ToDo from "./Pattrens/RenderPattren/ToDo";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ToDo />
      </div>
    );
  }
}
