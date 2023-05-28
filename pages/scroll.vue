<template>
  <div class="container">
    <div class="py-5 text-center">
      <button @click="addAnimation">Add Animation</button>
    </div>
    <div class="row g-5 overflow-hidden">
      <div v-for="index in 15" class="col-md-4">
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
  </div>
</template>

<script setup>
//  :style="`animation-delay: ${index * 100}ms`"
const card = ref(null);

const addAnimation = () => {
  card.value.forEach((item) => (item.style.animationPlayState = "running"));
  console.log();
};
</script>
