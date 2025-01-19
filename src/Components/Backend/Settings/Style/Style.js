import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  ColorPalette,
  ColorPicker,
  SelectControl,
  FontSizePicker,
  __experimentalUnitControl as UnitControl,
  AlignmentMatrixControl,
  RangeControl,
  __experimentalDivider as Divider,
  __experimentalSpacer as Spacer,
  __experimentalBoxControl as BoxControl,
  __experimentalToolsPanelItem as ToolsPanelItem,
} from "@wordpress/components";
// import { ColorsControl } from "../../../../../../Components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
  const [margin, setMargin] = useState();

  const {
    colors,
    titleColor,
    descriptionColor,
    descriptionFontWeight,
    descriptionFontStyle,
    desLineHeight,
    desLetterSpacing,
    desTextTrasform,
    slideContentLayout,
    translateX,
    translateY,
    red,
    green,
    blue,
    alpha,
    slideEffects,
    titleFontWeight,
    titleFontStyle,
    titleLineHeight,
    titleLetterSpacing,
    titleTextTrasform,
    textContentAlignment,
    titleMargin,
    titlePadding,
    desMargin,
    desPadding,
  } = attributes;
  const {
    background,
    bottom,
    color,
    display,
    flexDirection,
    height,
    justifyContent,
    left,
    maxHeight,
    padding,
    width,
    alignItems,
  } = slideContentLayout;

  const { effect } = slideEffects;

  const resetAll = () => {
    // setHeight(undefined);
    // setWidth(undefined);
    // setPadding(undefined);
    setMargin(undefined);
  };

  return (
    <>
      {/* Title Styles */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Title", "b-blocks")}
        initialOpen={false}
      >
        <p>Color</p>
        <ColorPicker
          color={"#f00"}
          onChange={(color) => {
            setAttributes({ titleColor: color });
          }}
        />

        {/* Title Font Weight */}
        <SelectControl
          label={__("Font Weight", "b-blocks")}
          value={titleFontWeight}
          options={[
            { label: "Normal", value: "normal" },
            { label: "Bold", value: "bold" },
            { label: "Lighter", value: "lighter" },
          ]}
          onChange={(newTitleFontWeight) => {
            setAttributes({ titleFontWeight: newTitleFontWeight });
          }}
        />

        {/* Title Font Style */}
        <SelectControl
          label={__("Font Style", "b-blocks")}
          value={titleFontStyle}
          options={[
            { label: "Normal", value: "normal" },
            { label: "Italic", value: "italic" },
            { label: "Oblique", value: "oblique" },
          ]}
          onChange={(newTitleFontStyle) => {
            setAttributes({ titleFontStyle: newTitleFontStyle });
          }}
        />

        {/* Title Line Height */}
        <RangeControl
          label="Line Height"
          value={titleLineHeight}
          onChange={(value) => setAttributes({ titleLineHeight: value })}
          min={1}
          max={100}
        />

        {/*Title Letter Spacing */}
        <UnitControl
          onChange={(value) => {
            setAttributes({ titleLetterSpacing: value });
          }}
          label="Letter Spacing"
          value={titleLetterSpacing}
        />

        <Spacer />

        {/* Title Text Transform */}
        <SelectControl
          label={__("Text Transform", "b-blocks")}
          value={titleTextTrasform}
          options={[
            { label: "None", value: "none" },
            { label: "Uppercase", value: "uppercase" },
            { label: "Lowercase", value: "lowercase" },
            { label: "Capitalize", value: "capitalize" },
          ]}
          onChange={(newTextTransform) => {
            setAttributes({ titleTextTrasform: newTextTransform });
          }}
        />

        <Spacer />

        {/* Title Padding */}
        <BoxControl
          label="Padding"
          values={{
            top: "50px",
            left: "10%",
            right: "10%",
            bottom: "50px",
          }}
          onChange={(nextValues) => console.log(nextValues)}
        />

        <Spacer />

        {/* Title Margin */}
        <BoxControl
          label="Margin"
          values={{
            ...titleMargin,
          }}
          onChange={(nextValues) =>
            setAttributes({ ...titleMargin, titleMargin })
          }
        />

        {/*  */}
        <ToolsPanelItem
          hasValue={() => !!titleMargin}
          label={__("Margin")}
          onDeselect={() => setMargin(undefined)}
        >
          <BoxControl
            __next40pxDefaultSize
            label={__("Margin")}
            onChange={setMargin}
            values={titleMargin}
            allowReset={false}
          />
        </ToolsPanelItem>
      </PanelBody>

      {/* Description Styles */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Description", "b-blocks")}
        initialOpen={false}
      >
        {/*Description Color */}
        <p>Color</p>
        <ColorPicker
          color={"#f00"}
          onChange={(color) => {
            setAttributes({ descriptionColor: color });
          }}
        />

        {/* Description Font Weight */}
        <SelectControl
          label={__("Font Weight", "b-blocks")}
          value={descriptionFontWeight}
          options={[
            { label: "Normal", value: "normal" },
            { label: "Bold", value: "bold" },
            { label: "Lighter", value: "lighter" },
          ]}
          onChange={(newdescriptionFontWeight) => {
            setAttributes({ descriptionFontWeight: newdescriptionFontWeight });
          }}
        />

        {/* Description Font Style */}
        <SelectControl
          label={__("Font Style", "b-blocks")}
          value={descriptionFontStyle}
          options={[
            { label: "Normal", value: "normal" },
            { label: "Italic", value: "italic" },
            { label: "Oblique", value: "oblique" },
          ]}
          onChange={(newdescriptionFontStyle) => {
            setAttributes({ descriptionFontStyle: newdescriptionFontStyle });
          }}
        />

        {/* Description Line Height */}
        <RangeControl
          label="Line Height"
          value={desLineHeight}
          onChange={(value) => setAttributes({ desLineHeight: value })}
          min={1}
          max={100}
        />

        {/*Description Letter Spacing */}
        <UnitControl
          onChange={(value) => {
            setAttributes({ desLetterSpacing: value });
          }}
          label="Letter Spacing"
          value={desLetterSpacing}
        />

        {/* Description Text Transform */}
        <SelectControl
          label={__("Text Transform", "b-blocks")}
          value={desTextTrasform}
          options={[
            { label: "None", value: "none" },
            { label: "Uppercase", value: "uppercase" },
            { label: "Lowercase", value: "lowercase" },
            { label: "Capitalize", value: "capitalize" },
          ]}
          onChange={(newTextTransform) => {
            setAttributes({ desTextTrasform: newTextTransform });
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Slide Effects", "b-blocks")}
        initialOpen={false}
      >
        {/* Slide Effects */}
        <SelectControl
          // label={__("Slide Effects", "b-blocks")}
          value={effect}
          options={[
            { label: "None", value: "none" },
            { label: "Fade", value: "fade" },
            { label: "Cube", value: "cube" },
            { label: "Coverflow", value: "coverflow" },
            { label: "Flip", value: "flip" },
            { label: "Cards", value: "cards" },
            { label: "Creative", value: "creative" },
          ]}
          onChange={(newEffect) => {
            setAttributes({
              slideEffects: {
                ...slideEffects,
                effect: newEffect,
              },
            });
          }}
        />
      </PanelBody>

      {/* Slide Overlay Layout */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Overlay Content Layout", "b-blocks")}
        initialOpen={false}
      >
        {/* Top to Bottom */}
        {/* <UnitControl
          onChange={(value) => {
            setAttributes({
              slideContentLayout: {
                ...slideContentLayout,
                bottom: value,
              },
            });
          }}
          label="Align Top to Bottom"
          value={bottom}
          help={"Use percentance"}
        /> */}

        {/* Overlay Width */}
        <UnitControl
          onChange={(value) => {
            setAttributes({
              slideContentLayout: {
                ...slideContentLayout,
                width: value,
              },
            });
          }}
          label="Background Overlay Width"
          value={width}
          help={"It is recommended to use percentages."}
          max={100}
          min={0}
        />

        <Spacer />

        {/* Overlay Height */}
        <UnitControl
          onChange={(value) => {
            setAttributes({
              slideContentLayout: {
                ...slideContentLayout,
                height: value,
              },
            });
          }}
          label="Background Overlay Height"
          value={height}
          help={"It is recommended to use percentages."}
        />

        <Spacer />

        {/* Overlay Max Height */}
        <UnitControl
          onChange={(value) => {
            setAttributes({
              slideContentLayout: {
                ...slideContentLayout,
                maxHeight: value,
              },
            });
          }}
          label="Background Overlay Max Height"
          value={maxHeight}
          help={"It is recommended to use percentages."}
        />

        <Spacer />

        <Divider />

        {/* Overlay positioning */}
        <RangeControl
          label="Overlay Horizontal Position"
          value={translateX}
          onChange={(value) =>
            setAttributes({
              translateX: value,
            })
          }
          min={-100}
          max={100}
        />
        <RangeControl
          label="Overlay Vertical Position"
          value={translateY}
          onChange={(value) =>
            setAttributes({
              translateY: value,
            })
          }
          min={-100}
          max={100}
        />

        <Divider />

        {/* Overlay Color */}
        <p>Overlay Color</p>
        <RangeControl
          label="Red"
          value={red}
          onChange={(value) => setAttributes({ red: value })}
          min={0}
          max={255}
        />
        <RangeControl
          label="Green"
          value={green}
          onChange={(value) => setAttributes({ green: value })}
          min={0}
          max={255}
        />
        <RangeControl
          label="Blue"
          value={blue}
          onChange={(value) => setAttributes({ blue: value })}
          min={0}
          max={255}
        />
        <RangeControl
          label="Opacity"
          value={alpha}
          onChange={(value) => setAttributes({ alpha: value })}
          min={0}
          max={1}
          step={0.1}
        />

        {/* Background Image Alignment */}
        {/* <AlignmentMatrixControl
          label={__("Change matrix alignment")}
          value={""}
          onChange={(nextAlign) => {
            setAttributes({
              slideContentLayout: {
                ...slideContentLayout,
                alignItems: nextAlign,
              },
            });
          }}
        /> */}

        <Divider />

        {/* Content Horizontal Alignment */}
        <SelectControl
          label={__("Text Content Horizontal Alignment", "b-blocks")}
          value={textContentAlignment}
          options={[
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ]}
          onChange={(newAlign) => {
            setAttributes({ textContentAlignment: newAlign });
          }}
        />

        {/* Text Content Vertical Alignment */}
        <SelectControl
          label={__("Text Content Vertical Alignment", "b-blocks")}
          value={justifyContent}
          options={[
            { label: "Top", value: "start" },
            { label: "Center", value: "center" },
            { label: "Bottom", value: "end" },
          ]}
          onChange={(newAlignment) => {
            setAttributes({
              slideContentLayout: {
                ...slideContentLayout,
                justifyContent: newAlignment,
              },
            });
          }}
        />
      </PanelBody>
    </>
  );
};

export default Style;
