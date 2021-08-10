import { Slider } from 'antd';
import * as React from "react";
import {
  PlasmicMySlider,
  DefaultMySliderProps
} from "./plasmic/plasmic_project/PlasmicMySlider";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import 'antd/dist/antd.css';

interface MySliderProps extends DefaultMySliderProps { }

function MySlider_(props: MySliderProps, ref: HTMLElementRefOf<"div">) {

  return <Slider defaultValue={30} tooltipVisible />;
}

const MySlider = React.forwardRef(MySlider_);
export default MySlider;
