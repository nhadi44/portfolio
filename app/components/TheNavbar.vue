<script setup lang="ts">
const { colorMode } = useColorMode();
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const isNavVisible = ref(true);
const activeSection = ref("home");
const lastScrollY = ref(0);

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const scrollToSection = (href: string) => {
  isMenuOpen.value = false;
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Always show navbar at top (hero section)
    if (currentScrollY < 100) {
      isNavVisible.value = true;
      isScrolled.value = false;
    } else {
      isScrolled.value = true;

      // Scroll down = show navbar, scroll up = hide navbar
      if (currentScrollY > lastScrollY.value) {
        // Scrolling down
        isNavVisible.value = true;
      } else {
        // Scrolling up
        isNavVisible.value = false;
      }
    }

    lastScrollY.value = currentScrollY;

    // Update active section based on scroll position
    const sections = navItems.map((item) => item.href.substring(1));
    for (const sectionId of sections.reverse()) {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          activeSection.value = sectionId;
          break;
        }
      }
    }
  });
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-nav py-3' : 'py-5 bg-transparent',
      isNavVisible ? 'translate-y-0' : '-translate-y-full',
    ]"
  >
    <div class="container mx-auto px-4 md:px-8">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a
          href="#home"
          @click.prevent="scrollToSection('#home')"
          class="text-xl md:text-2xl font-bold gradient-text"
        >
          Hadi<span :class="colorMode === 'dark' ? 'text-white' : 'text-primary-800'">.</span>dev
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click.prevent="scrollToSection(item.href)"
            :class="[
              'text-sm font-medium transition-all duration-200 relative',
              activeSection === item.href.substring(1)
                ? 'text-primary-600 dark:text-primary-400'
                : colorMode === 'dark' 
                  ? 'text-light-300 hover:text-white' 
                  : 'text-light-600 hover:text-primary-600',
            ]"
          >
            {{ item.name }}
            <span
              v-if="activeSection === item.href.substring(1)"
              class="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
            />
          </a>
        </div>

        <!-- Right side: Color toggle + CTA -->
        <div class="hidden md:flex items-center gap-3">
          <UiColorModeToggle />
          <a
            href="#contact"
            @click.prevent="scrollToSection('#contact')"
            class="btn-primary text-sm"
          >
            Let's Talk
          </a>
        </div>

        <!-- Mobile: Color toggle + Menu Button -->
        <div class="flex md:hidden items-center gap-2">
          <UiColorModeToggle />
          <button
            @click="isMenuOpen = !isMenuOpen"
            :class="[
              'p-2 transition-colors',
              colorMode === 'dark' 
                ? 'text-light-300 hover:text-white' 
                : 'text-light-600 hover:text-primary-600'
            ]"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!isMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMenuOpen" class="md:hidden mt-4 glass rounded-xl p-4">
          <div class="flex flex-col gap-2">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              @click.prevent="scrollToSection(item.href)"
              :class="[
                'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                activeSection === item.href.substring(1)
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-500/20 dark:text-primary-400'
                  : colorMode === 'dark'
                    ? 'text-light-300 hover:bg-light-800 hover:text-white'
                    : 'text-light-600 hover:bg-light-100 hover:text-primary-600',
              ]"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
