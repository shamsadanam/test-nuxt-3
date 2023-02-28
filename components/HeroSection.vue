<template>
  <!-- hero-section -->
  <div class="hero">
    <div class="container--slider">
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectFade]"
        :slides-per-view="2"
        :effect="'fade'"
        :speed="1000"
        :loop="true"
        :navigation="true"
        class="text-center"
      >
        <SwiperSlide class="swiper-slide">
          <div
            class="hero__slide"
            :style="`background-image: linear-gradient(
                  to right,
                  rgba(51, 51, 51, 0.3),
                  rgba(51, 51, 51, 0.3)
                ),
                url('/images/hero-bg-3.jpg')`"
          >
            <div class="container">
              <h1 class="hero__title">The Title 1</h1>
              <p class="hero__subtitle">The sub</p>
              <NuxtLink to="/about" class="qbtn qbtn--hero">
                Learn More
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div
            class="hero__slide"
            :style="`background-image: linear-gradient(
                  to right,
                  rgba(51, 51, 51, 0.3),
                  rgba(51, 51, 51, 0.3)
                ),
                url('/images/hero-bg-2.jpg')`"
          >
            <div class="container">
              <h1 class="hero__title">The Title 1</h1>
              <p class="hero__subtitle">The sub</p>
              <NuxtLink to="/about" class="qbtn qbtn--hero">
                Learn More
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide class="swiper-slide">
          <div
            class="hero__slide"
            :style="`background-image: linear-gradient(
                  to right,
                  rgba(51, 51, 51, 0.3),
                  rgba(51, 51, 51, 0.3)
                ),
                url('/images/hero-bg-1.jpg')`"
          >
            <div class="container">
              <h1 class="hero__title">The Title 1</h1>
              <p class="hero__subtitle">The sub</p>
              <NuxtLink to="/about" class="qbtn qbtn--hero">
                Learn More
              </NuxtLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
// <div class="swiper-button-next"></div>
//   <div class="swiper-button-prev"></div>
</script>

<style lang="scss">
.hero {
  color: $clr-white;

  &__slide {
    position: relative;
    width: 100%;
    // min-height: 50rem;
    min-height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    backdrop-filter: blur(2px);
  }
  &__title {
    margin-bottom: 2.4rem;
    font-size: 6rem;
    font-weight: 700;
    text-shadow: $clr-black 1px 1px 0.5rem;

    @include respondMax(991px) {
      max-width: 15ch;
      margin: 0 auto 2.4rem;
    }
    @include respondMax(575px) {
      font-size: 30px;
    }
  }
  &__subtitle {
    max-width: 63ch;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 3.6rem;
    margin: 0 auto 3.6rem;

    text-shadow: $clr-black 1px 1px 0.5rem;

    @include respondMax(991px) {
      max-width: 50ch;
    }
    @include respondMax(575px) {
      font-size: 14px;
      max-width: 30ch;
    }
  }
  .container--slider {
    @include respondMax(575px) {
      padding: 0;
    }
    & .swiper-button-next,
    .swiper-button-prev {
      --container-size: calc(980px / 2);
      --arrow-pos: calc(50% - var(--container-size));
      --arrow-translate-x: 100%;
      -arrow-translate-y: 100%;

      top: 50%;
      transform: translate(0);
      background: rgba(246, 250, 241, 0.5);
      border-radius: 50%;
      color: #1c1b1f;
      z-index: 99;

      &:hover {
        background: darken(rgba(246, 250, 241, 0.5), 5%);
      }
      &:after {
        font-size: 15px;
        font-weight: bold;
      }
      @include respondMin(1441px) {
        --container-size: calc(1320px / 2);
      }

      @include respondMax(1100px) {
        top: 100%;
        --arrow-pos: 50%;
      }
    }
    & .swiper-button-prev {
      left: var(--arrow-pos);
      transform: translateX(calc(-1 * var(--arrow-translate-x)));

      @include respondMax(1100px) {
        transform: translate(calc(-100% - 5px), -100%);
      }
    }
    & .swiper-button-next {
      right: var(--arrow-pos);
      transform: translateX(var(--arrow-translate-x));
      @include respondMax(1100px) {
        transform: translate(calc(100% + 5px), -100%);
      }
    }
  }
  &--product-list {
    @include respondMax(767px) {
      display: none;
    }
  }
}
</style>
