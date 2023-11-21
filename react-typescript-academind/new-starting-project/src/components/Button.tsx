import { CommponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & CommponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & CommponentPropsWithoutRef<"a">;

function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "anchor") return <a {...props}>Button</a>;

  return <button {...props}>Button</button>;
}

export default Button;
