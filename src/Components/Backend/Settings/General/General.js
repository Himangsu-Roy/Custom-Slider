import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  SelectControl,
  __experimentalInputControl as InputControl,
  Button,
  __experimentalSpacer as Spacer,
} from "@wordpress/components";
import { MediaUpload } from "@wordpress/block-editor";
import { purposeTypeOptions } from "../../../../utils/options";
import { updateData } from "../../../../utils/functions";

const General = ({ attributes, setAttributes }) => {
  const { images } = attributes;

  // Duplicate Handler
  function handleDuplicate(image, index) {
    console.log(index, "image index");

    const newItems = [
      ...images.slice(0, index + 1),
      image,
      ...images.slice(index + 1),
    ];
    setAttributes({ images: newItems });
  }

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Slides", "b-blocks")}
        initialOpen={false}
      >
        {images.length > 0 &&
          images.map((image, index) => {
            return (
              <>
                <PanelBody
                  className="bPlPanelBody"
                  title={__(`Slide ${index + 1}`, "b-blocks")}
                  initialOpen={false}
                >
                  {/* Slide Image URL Input */}
                  <div className="image-input">
                    <InputControl
                      label="Slide Image"
                      labelPosition="top"
                      value={image?.url}
                      type="url"
                      isPressEnterToChange
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
                          // style={{ marginTop: "10px" }}
                        >
                          {__("Select Image", "b-blocks")}
                        </Button>
                      )}
                    />
                  </div>

                  {/* Slide Image Alt Input */}
                  <InputControl
                    label="Slide Image Alt"
                    labelPosition="top"
                    value={image?.alt}
                    isPressEnterToChange
                    onChange={(newAlt) => {
                      const newImages = [...images];
                      newImages[index].alt = newAlt;
                      setAttributes({ images: newImages });
                    }}
                  />

                  {/* Slide Image Title Input */}
                  <InputControl
                    label="Slide Image Title"
                    labelPosition="top"
                    value={image?.title}
                    isPressEnterToChange
                    onChange={(newTitle) => {
                      const newImages = [...images];
                      newImages[index].title = newTitle;
                      setAttributes({ images: newImages });
                    }}
                  />

                  <Spacer />
                  {/* Duplicate Button */}
                  <Button
                    variant="secondary"
                    onClick={() => handleDuplicate(image, index)}
                  >
                    Duplicate
                  </Button>

                  {/* Slider Remove Button */}
                  <Button
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
                </PanelBody>
              </>
            );
          })}
        {/* Add New Slide Button */}
        <Button
          variant="primary"
          onClick={() => {
            const newItems = [...images];
            newItems.push({
              url: "https://swiperjs.com/demos/images/nature-1.jpg",
              alt: "Image 1",
              title: "Image 1",
              description: "Image 1 Description",
            });
            setAttributes({
              images: newItems,
            });
          }}
        >
          {__("Add New Slide", "b-blocks")}
        </Button>
      </PanelBody>
    </>
  );
};

export default General;
