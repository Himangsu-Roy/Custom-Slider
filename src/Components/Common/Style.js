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

    titleFontWeight,
    titleFontStyle,
    titleLineHeight,
    titleLetterSpacing,
    titleTextTrasform,
    slideWidth,
    slideHeight,
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

  const mainSl = `#${id}`;

  const blockSl = `${mainSl} .bBlocksCustomSlider`;
  const swiperSl = `${blockSl} .mySwiper`;
  const swiperWrapperSl = `${swiperSl} .swiper-wrapper`;
  const swiperSlideSl = `${blockSl} .swiper-slide`;
  const slideWrapperSl = `${swiperSlideSl} .slide-wrapper`;
  const descriptionSl = `${slideWrapperSl} .slide-content .slide-description`;
  const descriptionFontSize = `#${id}.slide-description`;
  const slideContent = `${slideWrapperSl} .slide-content`;

  // ${blockSl} p{
  // 		${getColorsCSS(colors)}
  // 	}

  //  transform: translate(${translateX}%, ${translateY}%);
  console.log(slideWidth, "slide width from style");

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        .bBlocksCustomSlider{
          width: ${slideWidth}px;
          height: ${slideHeight}px;
        }
        .wp-block-b-blocks-custom-slider{
          width: ${slideWidth}px;
          height: ${slideHeight}px;
        }

       .slide-wrapper{
          width: ${slideWidth}px;
          height: ${slideHeight}px;
          position: relative;
        }
        .mySwiper{
          width: ${slideWidth}px;
          height: ${slideHeight}px;
        }

        .slide-image{
          width: ${slideWidth}px;
          height: ${slideHeight}px;
          width: 100%;
          height: auto;
          display: block;
        }

        ${descriptionFontSize}{
          font-size: ${fontSize}px;
        }

        ${slideContent} {
         text-align: center;
        }

        .swiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
          width: ${slideWidth}px;
          height: ${slideHeight}px;
        }

        .slide {
          position: relative;
          overflow: hidden;
         
        }
        
        .slide-content{
          position: absolute;
          text-align: ${textContentAlignment};
          bottom: 0%;
          
          left: ${left};
          width: ${width};
          height: ${height};
          padding: ${padding};
          box-sizing: border-box;
          overflow: auto;
          color: ${color};
          max-height: ${maxHeight};
          display: ${display};
          flex-direction: ${flexDirection};
          justify-content: ${justifyContent};
         
          background-color: rgba(${red}, ${green}, ${blue}, ${alpha});
          transform: translate(${translateX}%, ${translateY}%);
          
        }

        

        .slide-content h2,
        .slide-content p {
          margin: 0;
          padding: 0;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        ${swiperSlideSl}{
          background-position: center;
          background-size: cover;
          width: ${width};
          height: ${height};
        }

        .slide-wrapper img{
          display: block;
          width: 100%;
        }

        .slide-title {
         color: ${titleColor};
         font-style: ${titleFontStyle};
         font-weight: ${titleFontWeight};
         line-height: ${titleLineHeight};
         letter-spacing: ${titleLetterSpacing};
         text-transform: ${titleTextTrasform};
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
