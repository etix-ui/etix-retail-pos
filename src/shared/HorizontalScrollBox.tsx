import React from "react";
import Flickity from "react-flickity-component";
import "../shared/HorizontalScrollBox.css";

interface Props {
  children: React.ReactNode;
}

export function HorizontalScrollBox(props: Props) {
  return (
    //@ts-ignore
    <Flickity
      options={{
        initialIndex: 0,
        cellAlign: "left",
      }}
    >
      {props.children}
    </Flickity>
  );
}
