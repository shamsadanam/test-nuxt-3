<script setup>
import { faker } from "@faker-js/faker";
import { useFaker } from "~/composables/useFaker";

const data = useFaker(2);
</script>

<template>
  <div class="container">
    <client-only>
      <div
        v-for="item in data"
        class="row align-items center box p-5 mb-5 g-5"
        :style="{ backgroundColor: item.bgColor }"
      >
        <div class="col-md-6 d-flex justify-content-center flex-column">
          <h1 class="animate__animated animate__bounce">{{ item.name }}</h1>
          <p>
            {{ item.email }}
          </p>
        </div>
        <div class="col-md-6">
          <figure class="h-100">
            <picture>
              <source
                media="(min-width:650px)"
                srcset="/images/hero-bg-3.jpg"
              />
              <source
                media="(min-width:465px)"
                srcset="/images/hero-bg-2.jpg"
              />
              <img
                src="/images/placeholder.png"
                alt="hero-bg"
                class="img-cover"
              />
            </picture>
          </figure>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style lang="scss">
.box {
  min-height: 400px;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  h1 {
    margin-bottom: 1rem;
  }
}
</style>
