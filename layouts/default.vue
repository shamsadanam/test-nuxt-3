<template>
  <header>
    <ul class="d-flex gap-3 justify-content-center mb-5 mt-3">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/scroll">Scroll</NuxtLink>
      </li>
    </ul>
  </header>

  <main>
    <slot />
  </main>
</template>

<script setup></script>
