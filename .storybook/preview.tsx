import { useState, useMemo } from "react";
import { withPerformance } from "storybook-addon-performance";
// import { light, dark, midnight, pale, dawn, bee, cool } from "./themes";

import "./style.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const withVechai = (StoryFn: Function) => {
  return (
      <div
        id="story-wrapper"
        className="h-full space-y-4"
      >
        <StoryFn />
      </div>
  );
};

export const decorators = [withVechai, withPerformance];
