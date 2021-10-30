import * as React from "react";

export const renderer = (props) => {
  React.useEffect(() => {
    props.action("play");
  }, [props.story]);
  const Content = props.story.originalContent;
  return <Content {...props} />;
};

export const tester = (story) => {
  return {
    condition: !!story.content,
    priority: 2,
  };
};

export default {
  renderer,
  tester,
};
