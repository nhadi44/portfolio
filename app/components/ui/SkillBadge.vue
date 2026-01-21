<script setup lang="ts">
const { colorMode } = useColorMode();

defineProps<{
  icon: string;
  name: string;
}>();
</script>

<template>
  <div class="glass-card !p-3 !px-4 flex items-center gap-2 cursor-default hover:scale-105 transition-transform">
    <span class="text-lg">{{ icon }}</span>
    <span :class="[
      'text-sm font-medium',
      colorMode === 'dark' ? 'text-light-200' : 'text-light-700'
    ]">{{ name }}</span>
  </div>
</template>
