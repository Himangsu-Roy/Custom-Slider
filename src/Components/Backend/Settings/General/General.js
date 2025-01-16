import { useState } from "react";
import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  SelectControl,
  __experimentalInputControl as InputControl,
  Button,
  __experimentalSpacer as Spacer,
  TextareaControl,
  FontSizePicker,
  ToggleControl,
  __experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";
import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const {
    images,
    selectTag,
    fontSize,
    textContentAlignment,
    indicator,
    isAutoplay,
    delay,
    showNavigation,
    showPagination,
  } = attributes;
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(delay, "delay number");

  // Duplicate Handler
  function handleDuplicate(image, index) {
    console.log(index, "image index");

    const newItems = [
      ...images.slice(0, index + 1),
      { ...image },
      ...images.slice(index + 1),
    ];
    setAttributes({ images: newItems });
  }

  const fontSizes = [
    {
      name: __("Small"),
      slug: "small",
      size: 12,
    },
    {
      name: __("Big"),
      slug: "big",
      size: 26,
    },
  ];
  const fallbackFontSize = 16;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Slides", "b-blocks")}
        initialOpen={true}
      >
        {images.length > 0 &&
          images.map((image, index) => {
            // setCurrentIndex(index);
            return (
              <>
                <PanelBody
                  className="bPlPanelBody"
                  title={__(`Slide ${index + 1}`, "b-blocks")}
                  initialOpen={false}
                >
                  {/* Slide Image URL Input */}
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                    // className="image-input"
                  >
                    <InputControl
                      label="Slide Image"
                      labelPosition="top"
                      value={image?.url}
                      type="url"
                      onChange={(newImage) => {
                        const newImages = [...images];
                        newImages[index].url = newImage;
                        setAttributes({ images: newImages });
                      }}
                    />
                    <MediaUpload
                      onSelect={(newImage) => {
                        const newImages = [...images];
                        newImages[index].url = newImage?.sizes?.full?.url;
                        setAttributes({ images: newImages });
                      }}
                      allowedTypes={["image"]}
                      value={image?.url}
                      render={({ open }) => (
                        <Button
                          variant="secondary"
                          onClick={open}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {__("Upload Image", "b-blocks")}
                        </Button>
                      )}
                    />
                  </div>
                  <Spacer />

                  {/* Slide Image Alt Input */}
                  {/* <InputControl
                    label="Image Alt"
                    labelPosition="top"
                    value={image?.alt}
                    onChange={(newAlt) => {
                      const newImages = [...images];
                      newImages[index].alt = newAlt;
                      setAttributes({ images: newImages });
                    }}
                  /> */}

                  {/* Slide Image Title Input */}
                  <InputControl
                    label="Image Title"
                    labelPosition="top"
                    value={image?.title}
                    onChange={(newTitle) => {
                      const newImages = [...images];
                      newImages[index].title = newTitle;
                      setAttributes({ images: newImages });
                    }}
                    placeholder="Write Slide Title"
                  />

                  <TextareaControl
                    label="Image Description"
                    labelPosition="top"
                    value={image?.description}
                    onChange={(newDescription) => {
                      const newImages = [...images];
                      newImages[index].description = newDescription;
                      setAttributes({ images: newImages });
                    }}
                    placeholder="Write Slide Description"
                  />

                  {/* Slide Image Title Input */}
                  <SelectControl
                    label={__("Select Title Tag", "b-blocks")}
                    value={selectTag}
                    options={[
                      { label: "H1", value: "h1" },
                      { label: "H2", value: "h2" },
                      { label: "H3", value: "h3" },
                      { label: "H4", value: "h4" },
                      { label: "H5", value: "h5" },
                      { label: "H6", value: "h6" },
                    ]}
                    onChange={(newHeading) =>
                      setAttributes({ selectTag: newHeading })
                    }
                  />

                  {/* Font Size Picker */}
                  <p>{__("Description Font Size", "b-blocks")}</p>
                  <FontSizePicker
                    __next40pxDefaultSize
                    fontSizes={fontSizes}
                    value={fontSize}
                    fallbackFontSize={fallbackFontSize}
                    onChange={(newFontSize) => {
                      setAttributes({ fontSize: newFontSize });
                    }}
                  />

                  {/* Content Alignment */}
                  <SelectControl
                    label={__("Content Alignment", "b-blocks")}
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

                  <Spacer />

                  <div style={{ width: "100%", display: "flex", gap: "4px" }}>
                    {/* Duplicate Button */}
                    <Button
                      style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      variant="secondary"
                      onClick={() => handleDuplicate(image, index)}
                    >
                      Duplicate
                    </Button>

                    {/* Slider Remove Button */}
                    <Button
                      style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      variant="primary"
                      onClick={() => {
                        const newItems = images.filter((_, i) => i !== index);
                        setAttributes({
                          images: newItems,
                        });
                      }}
                    >
                      {__("Remove", "b-blocks")}
                    </Button>
                  </div>
                </PanelBody>
              </>
            );
          })}

        {/* Add New Slide Button */}
        <Spacer />
        <Button
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
          className="slide-addBtn"
          variant="primary"
          onClick={() => {
            const newItems = [...images];
            const newIndex = images.length + 1;
            newItems.push({
              url: "https://plus.unsplash.com/premium_photo-1668091148044-056cd744e64a?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              title: `Slide Title ${newIndex}`,
              description: `Slide ${newIndex} Description`,
            });
            setAttributes({
              images: newItems,
            });
          }}
        >
          {__("Add New Slide", "b-blocks")}
        </Button>
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Slider Options", "b-blocks")}
        initialOpen={false}
      >
        <ToggleControl
          label="Autoplay"
          help={isAutoplay ? "Autoplay On" : "Autoplay Off"}
          checked={isAutoplay}
          onChange={(value) => {
            setAttributes({ isAutoplay: value });
          }}
        />

        {isAutoplay && (
          <NumberControl
            label={__("Autoplay delay", "b-blocks")}
            onChange={(value) => {
              setAttributes({ delay: value });
            }}
            // isDragEnabled
            // isShiftStepEnabled
            // shiftStep={10}
            // step={10}
            value={delay}
          />
        )}

        <Spacer />

        {/* Show Navigation */}
        <ToggleControl
          label="Show Navigation"
          help={showNavigation ? "Navigation On" : "Navigation Off"}
          checked={showNavigation}
          onChange={(value) => {
            setAttributes({ showNavigation: value });
          }}
        />

        {showNavigation && (
          <div style={{ display: "flex" }} className="button-group">
            <Button>
              <span className="dashicons dashicons-arrow-right"></span>
            </Button>
            <Button>
              <span className="dashicons dashicons-arrow-right-alt"></span>
            </Button>
            <Button>
              <span className="dashicons dashicons-arrow-right-alt2"></span>
            </Button>
          </div>
        )}

        <Spacer />

        {/* Show Pagination */}
        <ToggleControl
          label="Show Pagination"
          help={showPagination ? "Pagination On" : "Pagination Off"}
          checked={showPagination}
          onChange={(value) => {
            setAttributes({ showPagination: value });
          }}
        />

        {/* <ToggleControl
          label="Page Indicator"
          help={
            indicator ? "Pagination Indicator On" : "Pagination Indicator Off"
          }
          checked={indicator}
          onChange={(newIndicator) => {
            setAttributes({ indicator: newIndicator });
          }}
        /> */}
      </PanelBody>
    </>
  );
};

export default General;
