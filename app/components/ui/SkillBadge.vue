<script setup lang="ts">
defineProps<{
  icon: string;
  name: string;
}>();
</script>

<template>
  <div
    class="glass-card !p-3 !px-4 flex items-center gap-2 cursor-default hover:scale-105 transition-transform"
  >
    <span class="text-lg">{{ icon }}</span>
    <span class="text-sm font-medium text-dark-200">{{ name }}</span>
  </div>
</template>
