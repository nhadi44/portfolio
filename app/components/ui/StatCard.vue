<script setup lang="ts">
const { colorMode } = useColorMode();

defineProps<{
  value: string;
  label: string;
}>();
</script>

<template>
  <div class="glass-card text-center !p-4">
    <div class="text-2xl md:text-3xl font-bold text-primary-600">
      {{ value }}
    </div>
    <div :class="[
      'text-sm',
      colorMode === 'dark' ? 'text-light-400' : 'text-light-500'
    ]">{{ label }}</div>
  </div>
</template>
