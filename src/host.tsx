import * as React from "react";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import { Button as regButton, DatePicker, Input, Slider } from "antd";

registerComponent(Input, {
    name: "Input",
    props: {
        disabled: "boolean",
        vertical: "boolean",
        placeholder: "string"
    },
    importPath: "antd",
});

registerComponent(Slider, {
    name: "Slider",
    props: {
        disabled: "boolean",
        range: "boolean",
        vertical: "boolean",
    },
    importPath: "antd",
});

registerComponent(DatePicker, {
    name: "DatePicker",
    props: {
        disabled: "boolean",
        vertical: "boolean",
        placeholder: "string"
    },
    importPath: "antd",
});

registerComponent(regButton, {
    name: "regButton",
    props: {
        disabled: "boolean",
        vertical: "boolean",
    },
    importPath: "antd",
});

function Host() {
    return (
        <PlasmicCanvasHost />
    );
}

export default Host;
