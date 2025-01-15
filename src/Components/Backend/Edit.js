import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import { prefix } from "../../utils/data";
import CustomSlider from "../CustomSlider/CustomSlider";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { purposeType } = attributes;
  const id = `${prefix}-${clientId}`;

  console.log(attributes, "Attributes");

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()} id={id}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className={prefix}>
          <CustomSlider attributes={attributes} setAttributes={setAttributes} />
        </div>
      </div>
    </>
  );
};
export default Edit;
