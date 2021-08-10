// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aFHTma5a2mQLN8unP5zrW8
// Component: e8QGMoWap5
import * as React from "react";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { Input } from "antd"; // plasmic-import: hyDBr7CPJK/codeComponent
import MySlider from "../../MySlider"; // plasmic-import: 1DTknJ06MB/component
import MyButton from "../../MyButton"; // plasmic-import: O4yp26B4kR/component
import { DatePicker } from "antd"; // plasmic-import: gX56ITh79B/codeComponent
import { Slider } from "antd"; // plasmic-import: w5SxoI8nlE/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_plasmic_project.module.css"; // plasmic-import: aFHTma5a2mQLN8unP5zrW8/projectcss
import * as sty from "./PlasmicHomepage.module.css"; // plasmic-import: e8QGMoWap5/css

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  input?: p.Flex<typeof Input>;
  mySlider?: p.Flex<typeof MySlider>;
  myButton?: p.Flex<typeof MyButton>;
  datePicker?: p.Flex<typeof DatePicker>;
  slider?: p.Flex<typeof Slider>;
};

export interface DefaultHomepageProps {
  className?: string;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  dataFetches?: PlasmicHomepage__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      {}
      {}

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__sg0H
            )}
          >
            {"Welcome to my first page."}
          </div>

          <div className={classNames(defaultcss.all, sty.freeBox__qsBkd)}>
            <div className={classNames(defaultcss.all, sty.freeBox__jaN6P)}>
              <Input
                data-plasmic-name={"input"}
                data-plasmic-override={overrides.input}
                className={classNames("__wab_instance", sty.input)}
              />
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox___9C0UU)}>
              <MySlider
                data-plasmic-name={"mySlider"}
                data-plasmic-override={overrides.mySlider}
                className={classNames("__wab_instance", sty.mySlider)}
                name={"slider" as const}
              />
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__kmFbu)}>
              <MyButton
                data-plasmic-name={"myButton"}
                data-plasmic-override={overrides.myButton}
                className={classNames("__wab_instance", sty.myButton)}
              />
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__tSoQ)}>
              <DatePicker
                data-plasmic-name={"datePicker"}
                data-plasmic-override={overrides.datePicker}
                className={classNames("__wab_instance", sty.datePicker)}
              />
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__npRi)}>
              <Slider
                data-plasmic-name={"slider"}
                data-plasmic-override={overrides.slider}
                className={classNames("__wab_instance", sty.slider)}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "input", "mySlider", "myButton", "datePicker", "slider"],
  input: ["input"],
  mySlider: ["mySlider"],
  myButton: ["myButton"],
  datePicker: ["datePicker"],
  slider: ["slider"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  input: typeof Input;
  mySlider: typeof MySlider;
  myButton: typeof MyButton;
  datePicker: typeof DatePicker;
  slider: typeof Slider;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicHomepage__Fetches;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    input: makeNodeComponent("input"),
    mySlider: makeNodeComponent("mySlider"),
    myButton: makeNodeComponent("myButton"),
    datePicker: makeNodeComponent("datePicker"),
    slider: makeNodeComponent("slider"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
