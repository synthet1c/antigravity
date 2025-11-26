import React from "react";
import { ColorBox } from "./colorBox";
import { figma } from "@figma/code-connect";

figma.connect(
    ColorBox,
    "https://www.figma.com/design/YOUR_FILE_KEY/YOUR_FILE_NAME?node-id=YOUR_NODE_ID",
    {
        props: {
            background: figma.string("background"),
            name: figma.string("name"),
            dark: figma.boolean("dark"),
        },
        example: (props) => <ColorBox {...props} />,
    }
);
