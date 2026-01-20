<script setup lang="ts">
defineProps<{
  tech: string;
  variant?: "default" | "muted";
}>();
</script>

<template>
  <span
    :class="[
      'text-xs px-2 py-1 rounded-md',
      variant === 'muted' ? 'bg-dark-800 text-dark-300' : 'tech-tag',
    ]"
  >
    {{ tech }}
  </span>
</template>
