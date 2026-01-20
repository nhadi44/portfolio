<script setup lang="ts">
defineProps<{
  subtitle: string;
  title: string;
  highlightedWord: string;
  description?: string;
  isVisible?: boolean;
}>();
</script>

<template>
  <div
    class="text-center mb-16"
    :class="isVisible !== false ? 'animate-fade-in-up' : 'opacity-0'"
  >
    <p class="text-primary-400 font-medium mb-2">{{ subtitle }}</p>
    <h2 class="section-heading">
      {{ title }} <span class="gradient-text">{{ highlightedWord }}</span>
    </h2>
    <p v-if="description" class="section-subheading mx-auto mt-4">
      {{ description }}
    </p>
  </div>
</template>
