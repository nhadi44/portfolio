<script setup lang="ts">
defineProps<{
  variant?: "default" | "primary" | "subtle";
}>();
</script>

<template>
  <div
    class="absolute inset-0 -z-10"
    :class="{
      'bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950':
        variant === 'default' || !variant,
      'bg-gradient-to-b from-dark-950 via-primary-950/10 to-dark-950':
        variant === 'primary',
      'bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950/30':
        variant === 'subtle',
    }"
  />
</template>
