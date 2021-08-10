
import * as React from "react";
import {
  PlasmicMyButton,
  DefaultMyButtonProps
} from "./plasmic/plasmic_project/PlasmicMyButton";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { Button } from 'antd';

interface MyButtonProps extends DefaultMyButtonProps { }

function MyButton_(props: MyButtonProps, ref: HTMLElementRefOf<"div">) {




  return <Button type="primary" onClick={() => alert("Hello World")}>Primary Button</Button>
}

const MyButton = React.forwardRef(MyButton_);
export default MyButton;
