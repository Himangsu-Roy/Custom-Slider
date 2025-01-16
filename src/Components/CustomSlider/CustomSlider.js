import { Swiper, SwiperSlide } from "swiper/react";
import { RichText } from "@wordpress/block-editor";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";
import React, { useState } from "react";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCards,
  EffectCreative,
  Autoplay,
  delay,
} from "swiper/modules";

export default function CustomSlider({ attributes, setAttributes }) {
  const {
    images,
    selectTag,
    fontSize,
    textContentAlignment,
    indicator,
    desLineHeight,
    desLetterSpacing,
    slideEffects,
    isAutoplay,
    delay,
    showNavigation,
    showPagination,
  } = attributes;

  const { effect } = slideEffects;

  // {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // }

  return (
    <>
      <Swiper
        effect={effect} //effect
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        loop={true}
        pagination={
          showPagination ? { clickable: true, dynamicBullets: true } : false
        }
        navigation={showNavigation ? true : false}
        autoplay={
          isAutoplay
            ? {
                delay: delay,
                disableOnInteraction: false,
              }
            : false
        }
        modules={[
          EffectCoverflow,
          Navigation,
          Pagination,
          EffectCards,
          EffectCube,
          EffectFade,
          EffectFlip,
          EffectCreative,
          Autoplay,
        ]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide className="slide" key={index}>
              <div className="slide-wrapper">
                <img className="slide-image" src={image.url} alt={image.alt} />
                <div className="slide-content">
                  <RichText
                    className="slide-title"
                    tagName={selectTag}
                    value={image.title}
                    onChange={(newTitle) => {
                      const newImages = [...images];
                      newImages[index].title = newTitle;
                      setAttributes({ images: newImages });
                    }}
                    placeholder="Write Slide Title"
                  />
                  <RichText
                    style={{
                      fontSize: `${fontSize}`,
                      lineHeight: `${desLineHeight}`,
                      letterSpacing: `${desLetterSpacing}`,
                    }}
                    tagName="p"
                    className="slide-description"
                    value={image.description}
                    onChange={(newDescription) => {
                      const newImages = [...images];
                      newImages[index].description = newDescription;
                      setAttributes({ images: newImages });
                    }}
                    placeholder="Write Slide Description"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
