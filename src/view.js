import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import BlockName from "./Components/Frontend/BlockName";
import CustomSlider from "./Components/CustomSlider/CustomSlider";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-b-blocks-custom-slider"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    console.log(attributes, "attributes");

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />
        <CustomSlider attributes={attributes} />
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
