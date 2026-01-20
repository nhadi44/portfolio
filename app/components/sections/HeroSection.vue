<script setup lang="ts">
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
  <section
    id="home"
    class="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950/30"
    />

    <!-- Animated background shapes -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"
      />
      <div
        class="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float animation-delay-300"
      />
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-3xl"
      />
    </div>

    <!-- Grid pattern overlay -->
    <div
      class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50"
    />

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Greeting -->
        <p class="text-primary-400 font-medium mb-4 animate-fade-in-down">
          👋 Hello, I'm
        </p>

        <!-- Name -->
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
        >
          <span class="text-white">Hadi</span>
          <span class="gradient-text"> Nurhidayat</span>
        </h1>

        <!-- Typing effect -->
        <div class="h-12 md:h-16 flex items-center justify-center mb-8">
          <span class="text-xl md:text-3xl text-dark-300 font-light">
            I'm a
            <span class="text-primary-400 font-medium">{{ displayText }}</span>
            <span class="animate-blink border-r-2 border-primary-400 ml-1" />
          </span>
        </div>

        <!-- Description -->
        <p
          class="text-dark-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200"
        >
          With <span class="text-primary-400 font-semibold">4+ years</span> of
          experience building scalable, high-performance web applications using
          modern technologies.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400"
        >
          <a
            href="#contact"
            @click.prevent="scrollToSection('#contact')"
            class="btn-primary flex items-center gap-2"
          >
            <span>Contact Me</span>
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            download="Resume_Hadi_Nurhidayat.pdf"
            class="btn-secondary flex items-center gap-2"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Scroll indicator - positioned at very bottom of section -->
    <a
      href="#about"
      @click.prevent="scrollToSection('#about')"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-dark-400 hover:text-primary-400 transition-colors animate-bounce"
    >
      <span class="text-xs mb-1">Scroll</span>
      <svg
        class="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </a>
  </section>
</template>
