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
} from "@wordpress/components";
// import { ColorsControl } from "../../../../../../Components";
import { ColorsControl } from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes }) => {
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
  console.log(effect, "effect");

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
      </PanelBody>

      {/* Description Styles */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Description", "b-blocks")}
        initialOpen={false}
      >
        {/* Description Color */}
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

        {/* Line Height */}
        {/* <UnitControl
          onChange={(value) => {
            setAttributes({ desLineHeight: value });
          }}
          label="Line Height"
          value={desLineHeight}
        /> */}

        <RangeControl
          label="Line Height"
          value={desLineHeight}
          onChange={(value) => setAttributes({ desLineHeight: value })}
          min={1}
          max={100}
        />

        {/* Letter Spacing */}
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

      {/* Slide Layout */}
      <PanelBody
        className="bPlPanelBody"
        title={__("Overlay Content Layout", "b-blocks")}
        initialOpen={false}
      >
        {/* Top to Bottom */}
        <UnitControl
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
        />

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
          help={"Use percentance"}
        />

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
          help={"Use percentance"}
        />

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
          help={"Use percentance"}
        />

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
          label="Alpha (Opacity)"
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

        <RangeControl
          label="Translate X (%)"
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
          label="Translate Y (%)"
          value={translateY}
          onChange={(value) =>
            setAttributes({
              translateY: value,
            })
          }
          min={-100}
          max={100}
        />

        {/* Text Content Alignment */}
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
