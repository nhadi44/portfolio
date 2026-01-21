<script setup lang="ts">
const { initColorMode, colorMode } = useColorMode();

onMounted(() => {
  initColorMode();
});
</script>

<template>
  <div 
    class="min-h-screen transition-colors duration-300"
    :class="colorMode === 'dark' ? 'bg-light-950' : 'bg-white'"
  >
    <TheNavbar />
    <main>
      <SectionsHeroSection />
      <SectionsAboutSection />
      <SectionsExperienceSection />
      <SectionsPortfolioSection />
      <SectionsContactSection />
    </main>
    <TheFooter />
  </div>
</template>
