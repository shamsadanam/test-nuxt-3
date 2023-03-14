<template>
  <div class="hero">
    <div class="container--slider">
      <Swiper
        :modules="[
          SwiperAutoplay,
          SwiperNavigation,
          SwiperEffectFade,
          SwiperPagination,
        ]"
        :slides-per-view="1"
        :speed="1000"
        :loop="true"
        :navigation="true"
        :pagination="true"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
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
                url('/images/hero-bg.jpg')`"
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
//need this comment to overwrrite swiper css
</style>
