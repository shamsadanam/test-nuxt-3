<template>
  <header>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
    </ul>
  </header>

  <div>
    <slot />
  </div>
</template>

<script setup></script>
