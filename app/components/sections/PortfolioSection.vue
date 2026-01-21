<script setup lang="ts">
const { colorMode } = useColorMode();
const { isVisible, sectionRef } = useScrollReveal();

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Vendor Management System",
    description:
      "Re-engineered VMS covering modules such as Vendor, Purchase Order, Shipment Plan, User Request, and Inbound Purchasing with role matrix system for authorization.",
    image: "🏢",
    tech: ["Nuxt.js", "Spring Boot", "PostgreSQL"],
    category: "Enterprise",
    year: "2025",
  },
  {
    title: "Halo JKP Module",
    description:
      "Internal module for BPJS Ketenagakerjaan to handle JKP (Jaminan Kehilangan Pekerjaan) inquiries and processing.",
    image: "📞",
    tech: ["Vue.js", "Node.js", "MySQL"],
    category: "Internal App",
    year: "2024",
  },
  {
    title: "CRM Machine Monitoring",
    description:
      "System to monitor CRM machine activities including cash remaining, device status, ticket creation for errors, and SLA calculation for vendors.",
    image: "🖥️",
    tech: ["React.js", "Next.js", "PostgreSQL"],
    category: "Monitoring",
    year: "2023",
  },
  {
    title: "DPension Platform",
    description:
      "Pension management website with face recognition feature for user attendance verification.",
    image: "👤",
    tech: ["Next.js", "Node.js", "Face API"],
    category: "Internal",
    year: "2023",
  },
  {
    title: "Employee Overtime System",
    description:
      "Web application for employee overtime requests with automatic calculation of overtime pay and detailed reporting.",
    image: "⏰",
    tech: ["Laravel", "Vue.js", "MySQL"],
    category: "HR System",
    year: "2022",
  },
  {
    title: "STT Bandung Website",
    description:
      "Campus main website rebuilt using modern frontend framework with repository pattern architecture.",
    image: "🎓",
    tech: ["Nuxt.js", "Laravel", "MySQL"],
    category: "Education",
    year: "2022",
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];
const activeCategory = ref("All");

const filteredProjects = computed(() => {
  if (activeCategory.value === "All") return projects;
  return projects.filter((p) => p.category === activeCategory.value);
});
</script>

<template>
  <section id="portfolio" ref="sectionRef" class="py-16 md:py-24 relative overflow-hidden">
    <!-- Background -->
    <div :class="[
      'absolute inset-0 -z-10 transition-colors duration-300',
      colorMode === 'dark'
        ? 'bg-gradient-to-b from-light-950 via-light-900/50 to-light-950'
        : 'bg-gradient-to-b from-white via-primary-50/30 to-white'
    ]" />

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12" :class="isVisible ? 'animate-fade-in-up' : 'opacity-0'">
        <p class="text-primary-600 font-medium mb-2">My Work</p>
        <h2 class="section-heading">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <p class="section-subheading mx-auto mt-4">
          A selection of projects I've worked on throughout my career
        </p>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-12" :class="isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'
        ">
        <button v-for="category in categories" :key="category" @click="activeCategory = category" :class="[
          'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
          activeCategory === category
            ? 'bg-primary-500 text-white'
            : colorMode === 'dark'
              ? 'bg-light-800/50 text-light-300 hover:bg-light-700 hover:text-white'
              : 'bg-light-100 text-light-600 hover:bg-primary-50 hover:text-primary-600',
        ]">
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TransitionGroup enter-active-class="transition-all duration-500" enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100" leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-90"
          move-class="transition-all duration-500">
          <div v-for="(project, index) in filteredProjects" :key="project.title"
            class="glass-card group overflow-hidden flex flex-col h-full"
            :class="isVisible ? 'animate-fade-in-up' : 'opacity-0'"
            :style="{ animationDelay: `${(index + 1) * 100}ms` }">
            <!-- Project Image/Icon -->
            <div :class="[
              'h-48 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden',
              colorMode === 'dark'
                ? 'bg-gradient-to-br from-primary-600/20 to-primary-700/20'
                : 'bg-gradient-to-br from-primary-100 to-primary-200'
            ]">
              <span class="text-6xl group-hover:scale-110 transition-transform duration-300">
                {{ project.image }}
              </span>
              <div
                class="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 transition-colors duration-300" />
              <div :class="[
                'absolute top-3 right-3 px-2 py-1 backdrop-blur-sm rounded-md text-xs font-medium text-primary-600',
                colorMode === 'dark' ? 'bg-light-900/80' : 'bg-white/80'
              ]">
                {{ project.year }}
              </div>
              <div :class="[
                'absolute top-3 left-3 px-2 py-1 backdrop-blur-sm rounded-md text-xs font-medium text-primary-600',
                colorMode === 'dark' ? 'bg-light-900/80' : 'bg-white/80'
              ]">
                {{ project.category }}
              </div>
            </div>

            <!-- Title -->
            <h3 :class="[
              'text-xl font-bold mt-3 mb-2 transition-colors',
              colorMode === 'dark'
                ? 'text-white group-hover:text-primary-400'
                : 'text-light-900 group-hover:text-primary-600'
            ]">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p :class="[
              'text-sm mb-4 line-clamp-3',
              colorMode === 'dark' ? 'text-light-400' : 'text-light-500'
            ]">
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div :class="[
              'flex flex-wrap gap-2 mt-auto pt-4 border-t',
              colorMode === 'dark' ? 'border-light-700/50' : 'border-light-200'
            ]">
              <span v-for="tech in project.tech" :key="tech" :class="[
                'text-xs px-2 py-1 rounded-md',
                colorMode === 'dark'
                  ? 'bg-light-800 text-light-300'
                  : 'bg-primary-50 text-primary-600'
              ]">
                {{ tech }}
              </span>
            </div>
          </div>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>
