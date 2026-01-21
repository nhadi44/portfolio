<script setup lang="ts">
const { colorMode } = useColorMode();
const { isVisible, sectionRef } = useScrollReveal(0.2);

const skills = [
  { name: "JavaScript", icon: "🟨" },
  { name: "Vue.js", icon: "💚" },
  { name: "Nuxt.js", icon: "💚" },
  { name: "React.js", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Laravel", icon: "🔴" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🐬" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "📦" },
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "7+", label: "Companies" },
  { value: "10+", label: "Projects" },
];
</script>

<template>
  <section id="about" ref="sectionRef" class="py-20 md:py-32 relative overflow-hidden">
    <!-- Background -->
    <div :class="[
      'absolute inset-0 -z-10 transition-colors duration-300',
      colorMode === 'dark'
        ? 'bg-gradient-to-b from-light-950 via-light-900/50 to-light-950'
        : 'bg-gradient-to-b from-white via-primary-50/30 to-white'
    ]" />

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" :class="isVisible ? 'animate-fade-in-up' : 'opacity-0'">
        <p class="text-primary-600 font-medium mb-2">Get To Know</p>
        <h2 class="section-heading">
          About <span class="gradient-text">Me</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Image/Avatar -->
        <div class="flex justify-center lg:justify-end" :class="isVisible
            ? 'animate-fade-in-right animation-delay-200'
            : 'opacity-0'
          ">
          <div class="relative">
            <!-- Gradient border -->
            <div
              class="absolute -inset-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-3xl blur opacity-20" />

            <!-- Image container -->
            <div class="relative glass-card p-2 rounded-3xl">
              <div :class="[
                'w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden',
                colorMode === 'dark'
                  ? 'bg-gradient-to-br from-primary-600/20 to-primary-700/20'
                  : 'bg-gradient-to-br from-primary-100 to-primary-200'
              ]">
                <img src="/profile.png" alt="Hadi Nurhidayat" class="w-full h-full object-cover object-top" />
              </div>
            </div>

            <!-- Floating badges -->
            <div class="absolute -top-4 -right-4 glass-card !p-3 rounded-xl animate-float">
              <span class="text-2xl">🚀</span>
            </div>
            <div class="absolute -bottom-4 -left-4 glass-card !p-3 rounded-xl animate-float animation-delay-500">
              <span class="text-2xl">💻</span>
            </div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="space-y-6" :class="isVisible ? 'animate-fade-in-left animation-delay-300' : 'opacity-0'
          ">
          <h3 :class="[
            'text-2xl md:text-3xl font-bold',
            colorMode === 'dark' ? 'text-white' : 'text-light-900'
          ]">
            Fullstack Developer based in
            <span class="text-primary-600">Bandung, Indonesia</span>
          </h3>

          <div :class="[
            'space-y-4 text-lg leading-relaxed',
            colorMode === 'dark' ? 'text-light-300' : 'text-light-600'
          ]">
            <p>
              I'm a passionate
              <span :class="colorMode === 'dark' ? 'text-white font-medium' : 'text-light-800 font-medium'">Fullstack
                Developer</span>
              with over
              <span class="text-primary-600 font-semibold">4 years</span> of
              experience designing and developing scalable, high-performance web
              applications.
            </p>
            <p>
              I specialize in building RESTful APIs, designing clean and
              maintainable backend architectures, and developing modern,
              responsive front-end interfaces using technologies like
              <span class="text-primary-600">Next.js</span>,
              <span class="text-primary-600">Node.js</span>,
              <span class="text-primary-600">Laravel</span>,
              <span class="text-primary-600">Nuxt.js</span>, and
              <span class="text-primary-600">Spring Boot</span>.
            </p>
            <p>
              I graduated from
              <span :class="colorMode === 'dark' ? 'text-white font-medium' : 'text-light-800 font-medium'">Universitas
                Teknologi Bandung</span>
              with a Bachelor's degree in Information Engineering (GPA:
              3.20/4.00).
            </p>
          </div>

          <!-- Stats cards -->
          <div class="grid grid-cols-3 gap-4 pt-4">
            <UiStatCard v-for="stat in stats" :key="stat.label" :value="stat.value" :label="stat.label" />
          </div>
        </div>
      </div>

      <!-- Skills section -->
      <div class="mt-20" :class="isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'
        ">
        <h3 :class="[
          'text-xl font-semibold text-center mb-8',
          colorMode === 'dark' ? 'text-light-200' : 'text-light-700'
        ]">
          Tech Stack & Tools
        </h3>
        <div class="flex flex-wrap justify-center gap-3">
          <UiSkillBadge v-for="(skill, index) in skills" :key="skill.name" :icon="skill.icon" :name="skill.name"
            :style="{ animationDelay: `${index * 50}ms` }" />
        </div>
      </div>
    </div>
  </section>
</template>
