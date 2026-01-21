<script setup lang="ts">
const { colorMode } = useColorMode();

const roles = [
  "Fullstack Developer",
  "Backend Developer",
  "Frontend Developer",
  "Tech Enthusiast",
];
const currentRole = ref(0);
const displayText = ref("");
const isDeleting = ref(false);

let typeTimer: ReturnType<typeof setTimeout>;

const typeEffect = () => {
  const fullText = roles[currentRole.value];

  if (!isDeleting.value) {
    displayText.value = fullText.substring(0, displayText.value.length + 1);

    if (displayText.value === fullText) {
      setTimeout(() => {
        isDeleting.value = true;
        typeEffect();
      }, 2000);
      return;
    }
  } else {
    displayText.value = fullText.substring(0, displayText.value.length - 1);

    if (displayText.value === "") {
      isDeleting.value = false;
      currentRole.value = (currentRole.value + 1) % roles.length;
    }
  }

  typeTimer = setTimeout(typeEffect, isDeleting.value ? 50 : 100);
};

onMounted(() => {
  typeEffect();
});

onUnmounted(() => {
  if (typeTimer) clearTimeout(typeTimer);
});

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- Background gradient -->
    <div :class="[
      'absolute inset-0 transition-colors duration-300',
      colorMode === 'dark'
        ? 'bg-gradient-to-br from-light-950 via-light-900 to-primary-950/30'
        : 'bg-gradient-to-br from-white via-primary-50/50 to-primary-100/30'
    ]" />

    <!-- Animated background shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div :class="[
        'absolute top-1/4 -left-20 w-72 h-72 rounded-full blur-3xl animate-float',
        colorMode === 'dark' ? 'bg-primary-500/10' : 'bg-primary-200/30'
      ]" />
      <div :class="[
        'absolute bottom-1/4 -right-20 w-96 h-96 rounded-full blur-3xl animate-float animation-delay-300',
        colorMode === 'dark' ? 'bg-primary-600/10' : 'bg-primary-300/20'
      ]" />
      <div :class="[
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl',
        colorMode === 'dark' ? 'bg-primary-600/5' : 'bg-primary-100/30'
      ]" />
    </div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-50 hero-grid-pattern" />

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Greeting -->
        <p class="text-primary-600 font-medium mb-4 animate-fade-in-down">
          👋 Hello, I'm
        </p>

        <!-- Name -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span :class="colorMode === 'dark' ? 'text-white' : 'text-light-900'">Hadi</span>
          <span class="gradient-text"> Nurhidayat</span>
        </h1>

        <!-- Typing effect -->
        <div class="h-12 md:h-16 flex items-center justify-center mb-8">
          <span :class="[
            'text-xl md:text-3xl font-light',
            colorMode === 'dark' ? 'text-light-300' : 'text-light-600'
          ]">
            I'm a
            <span class="text-primary-600 font-medium">{{ displayText }}</span>
            <span class="animate-blink border-r-2 border-primary-500 ml-1" />
          </span>
        </div>

        <!-- Description -->
        <p :class="[
          'text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200',
          colorMode === 'dark' ? 'text-light-400' : 'text-light-600'
        ]">
          With <span class="text-primary-600 font-semibold">4+ years</span> of
          experience building scalable, high-performance web applications using
          modern technologies.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <a href="#contact" @click.prevent="scrollToSection('#contact')" class="btn-primary flex items-center gap-2">
            <span>Contact Me</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="/resume.pdf" download="Resume_Hadi_Nurhidayat.pdf" class="btn-secondary flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <a href="#about" @click.prevent="scrollToSection('#about')" :class="[
      'absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center transition-colors animate-bounce',
      colorMode === 'dark'
        ? 'text-light-400 hover:text-primary-400'
        : 'text-light-500 hover:text-primary-600'
    ]">
      <span class="text-xs mb-1">Scroll</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  </section>
</template>

<style scoped>
.hero-grid-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
