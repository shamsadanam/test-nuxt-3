<script setup>
//  :style="`animation-delay: ${index * 100}ms`"
const card = ref(null);
const section = ref(null);

const addAnimation = () => {
  card.value.forEach((item) => (item.style.animationPlayState = "running"));
};

const getRandomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

onMounted(() => {
  let deviceHeight = document.documentElement.clientHeight;

  let options = {
    rootMargin: `-180px`,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      // entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
      if (entry.isIntersecting) {
        entry.target.querySelector("h1").classList.add("show");
        console.log("intersected");
        console.log(`${entry.target.querySelector("h1").innerHTML}`);
      }
    });
  }, options);

  let targets = document.querySelectorAll(".section");
  targets.forEach((target) => {
    observer.observe(target);
  });

  // targets.forEach((item) => {});
});
</script>

<template>
  <div class="container section-container">
    <div class="py-5 text-center">
      <button @click="addAnimation">Add Animation</button>
    </div>
    <div class="row g-5 overflow-hidden d-none" id="target">
      <div v-for="index in 15" class="col-md-4" data-scroll>
        <div
          :key="index"
          ref="card"
          class="animate__fadeInUp"
          :style="`animation-delay: ${index * 100}ms`"
        >
          <img
            class="w-100 object-fit-cover mb-3"
            style="max-height: 100px"
            src="/images/placeholder.png"
            alt="placeholder"
          />
          <h1 class="mb-3">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem tenetur laudantium est.
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="section p-5 mb-5" ref="section">
        <h1 class="text-center">Section 1</h1>
        <client-only>
          <p>{{ getRandomColor() }}</p>
        </client-only>
      </div>
      <div class="section p-5 mb-5" ref="section">
        <h1 class="text-center">Section 2</h1>
        <client-only>
          <p>{{ getRandomColor() }}</p>
        </client-only>
      </div>
      <div class="section p-5 mb-5" ref="section">
        <h1 class="text-center">Section 3</h1>
        <client-only>
          <p>{{ getRandomColor() }}</p>
        </client-only>
      </div>
      <div class="section p-5 mb-5" ref="section">
        <h1 class="text-center">Section 4</h1>
        <client-only>
          <p>{{ getRandomColor() }}</p>
        </client-only>
      </div>
      <div class="section p-5 mb-5" ref="section">
        <h1 class="text-center">Section 5</h1>
        <client-only>
          <p>{{ getRandomColor() }}</p>
        </client-only>
      </div>
      <div class="section p-5 mb-5" ref="section">
        <h1 class="text-center">Section 6</h1>
        <client-only>
          <p>{{ getRandomColor() }}</p>
        </client-only>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.section-container {
  counter-reset: section;
}
.section {
  min-height: 400px;

  h1 {
    translate: 100px;
    opacity: 0;
    transition: all 0.2s ease-in;

    // &::after {
    //   counter-increment: section;
    //   content: " " counter(section);
    // }
    &.show {
      translate: 0;
      opacity: 1;
    }
  }
}
</style>
