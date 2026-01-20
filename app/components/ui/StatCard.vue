<script setup lang="ts">
defineProps<{
  value: string;
  label: string;
}>();
</script>

<template>
  <div class="glass-card text-center !p-4">
    <div class="text-2xl md:text-3xl font-bold text-primary-400">
      {{ value }}
    </div>
    <div class="text-sm text-dark-400">{{ label }}</div>
  </div>
</template>
