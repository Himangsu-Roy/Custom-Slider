// import { getColorsCSS } from "../../../../Components/utils/getCSS";

const Style = ({ attributes, id }) => {
  const {
    colors,
    fontSize,
    textContentAlignment,
    titleColor,
    descriptionColor,
    descriptionFontStyle,
    descriptionFontWeight,
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

  const mainSl = `#${id}`;

  const blockSl = `${mainSl} .bBlocksCustomSlider`;
  const swiperSl = `${blockSl} .mySwiper`;
  const swiperWrapperSl = `${swiperSl} .swiper-wrapper`;
  const swiperSlideSl = `${swiperWrapperSl} .swiper-slide`;
  const slideWrapperSl = `${swiperSlideSl} .slide-wrapper`;
  const descriptionSl = `${slideWrapperSl} .slide-content .slide-description`;
  const descriptionFontSize = `#${id}.slide-description`;
  const slideContent = `${slideWrapperSl} .slide-content`;

  // ${blockSl} p{
  // 		${getColorsCSS(colors)}
  // 	}
  console.log(translateX, translateY, "transform");

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
        ${descriptionFontSize}{
          font-size: ${fontSize}px;
        }

        ${slideContent} {
        text-align: center;
        }
        
        .slide-content{
          text-align: ${textContentAlignment};

          bottom: ${bottom};
          left: ${left};
          width: ${width};
          height: ${height};
          padding: ${padding};
          color: ${color};
          max-height: ${maxHeight};
          display: ${display};
          flex-direction: ${flexDirection};
          justify-content: ${justifyContent};
          transform: translate(${translateX}%, ${translateY}%);
          background-color: rgba(${red}, ${green}, ${blue}, ${alpha});
          

        }

        .slide-wrapper img{

        }

        .slide-title {
         color: ${titleColor};
        }

        .slide-description {
         color: ${descriptionColor};
         font-style: ${descriptionFontStyle};
         font-weight: ${descriptionFontWeight};
         line-height: ${desLineHeight};
         letter-spacing: ${desLetterSpacing};
         text-transform: ${desTextTrasform};
        }

        .swiper-button-prev{
        }



	`,
      }}
    />
  );
};
export default Style;
