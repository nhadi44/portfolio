<script setup lang="ts">
const { colorMode } = useColorMode();
const { isVisible, sectionRef } = useScrollReveal();

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    company: "Paramatech",
    role: "Fullstack Developer",
    period: "Apr 2025 - Present",
    location: "Jakarta, Indonesia",
    description:
      "Assigned as Full-Stack Developer at PT Eigerindo Multi Produk Industri.",
    highlights: [
      "Re-engineered the Vendor Management System covering Vendor, Purchase Order, Shipment Plan, User Request, and Inbound Purchasing modules",
      "Built role matrix system for user authorization and permission control",
      "Developed packing feature for mobile B2C application using Kotlin",
      "Implemented Size Grid Quantity module using Laravel and Nuxt.js",
    ],
    tech: ["Nuxt.js", "Spring Boot", "PostgreSQL", "Kotlin", "Laravel"],
  },
  {
    company: "BPJS Ketenagakerjaan",
    role: "Fullstack Developer",
    period: "Oct 2023 - Apr 2025",
    location: "Jakarta, Indonesia",
    description:
      "Worked on internal applications for social security programs.",
    highlights: [
      'Created the "Halo JKP" module within internal application',
      'Developed the "Notification CMS" module',
      "Conducted maintenance on web contact center",
    ],
    tech: ["Vue.js", "Node.js", "MySQL"],
  },
  {
    company: "Indocyber Global Teknologi",
    role: "Fullstack Developer",
    period: "Oct 2023 - Apr 2025",
    location: "Jakarta, Indonesia",
    description:
      "IT Solutions provider for digital transformation and IT infrastructure.",
    highlights: [
      "Placement at client: BPJS Ketenagakerjaan",
      "Developed enterprise-level applications",
    ],
    tech: ["Vue.js", "Node.js", "MySQL"],
  },
  {
    company: "PT. Bringin Inti Teknologi",
    role: "Frontend Developer",
    period: "Oct 2022 - Oct 2023",
    location: "Jakarta, Indonesia",
    description:
      "IT Solutions provider for Bank Rakyat Indonesia subsidiaries.",
    highlights: [
      "Developed CRM machine monitoring system for PT Bank Rakyat Indonesia",
      "Added discount feature to Homespot ID application",
      "Maintained DPension website with face recognition feature for attendance",
      "Maintained internal website of PT. Brilian Indah Gemilang",
    ],
    tech: ["React.js", "Next.js", "Node.js", "PostgreSQL"],
  },
  {
    company: "PT. Sinarmetrindo Perkasa",
    role: "Fullstack Developer",
    period: "Jul 2022 - Oct 2022",
    location: "Jakarta, Indonesia",
    description: "Creates high-quality switchboards and automation systems.",
    highlights: [
      "Created web-based application for employee overtime requests",
      "Implemented automatic overtime pay calculation",
      "Created API to list employee data from HR database",
    ],
    tech: ["Laravel", "Vue.js", "MySQL"],
  },
  {
    company: "STT Bandung",
    role: "Frontend Developer",
    period: "Sep 2021 - Jun 2022",
    location: "Bandung, Indonesia",
    description: "Sekolah Tinggi Teknologi Bandung campus development.",
    highlights: [
      "Rebuilt main campus website using Nuxt.js with repository pattern",
      "Assisted in academic system application development using Laravel",
    ],
    tech: ["Nuxt.js", "Laravel", "MySQL"],
  },
  {
    company: "PT. Lippo Life Assurance",
    role: "IT Officer",
    period: "Aug 2020 - Aug 2021",
    location: "Jakarta, Indonesia",
    description: "Life insurance company providing various insurance programs.",
    highlights: [
      "Assisted users in resolving computer device issues",
      "Performed maintenance on internal applications",
      "Extracted data from database for operations division",
      "Maintained database including backup and restore activities",
    ],
    tech: ["SQL", "Windows Server", "Database Management"],
  },
];

const activeIndex = ref<number | null>(null);

const toggleExpand = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <section
    id="experience"
    ref="sectionRef"
    class="py-20 md:py-32 relative overflow-hidden"
  >
    <!-- Background -->
    <div
      :class="[
        'absolute inset-0 -z-10 transition-colors duration-300',
        colorMode === 'dark'
          ? 'bg-gradient-to-b from-light-950 via-primary-950/10 to-light-950'
          : 'bg-gradient-to-b from-white via-primary-50/20 to-white'
      ]"
    />

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        :class="isVisible ? 'animate-fade-in-up' : 'opacity-0'"
      >
        <p class="text-primary-600 font-medium mb-2">What I've Done</p>
        <h2 class="section-heading">
          Work <span class="gradient-text">Experience</span>
        </h2>
        <p class="section-subheading mx-auto mt-4">
          My professional journey over the past 4+ years
        </p>
      </div>

      <!-- Timeline -->
      <div class="max-w-4xl mx-auto relative">
        <!-- Timeline line -->
        <div
          class="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 transform md:-translate-x-1/2"
        />

        <!-- Experience items -->
        <div class="space-y-8">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.company"
            :class="[
              'relative pl-8 md:pl-0',
              index % 2 === 0
                ? 'md:pr-[calc(50%+2rem)]'
                : 'md:pl-[calc(50%+2rem)]',
              isVisible ? 'animate-fade-in-up' : 'opacity-0',
            ]"
            :style="{ animationDelay: `${index * 100}ms` }"
          >
            <!-- Timeline dot -->
            <div
              :class="[
                'absolute w-4 h-4 bg-primary-500 rounded-full border-4 z-10 shadow-md',
                'left-0 md:left-1/2 top-6 transform md:-translate-x-1/2 -translate-x-1/2',
                colorMode === 'dark' ? 'border-light-900' : 'border-white'
              ]"
            />

            <!-- Card -->
            <div
              class="glass-card cursor-pointer group"
              @click="toggleExpand(index)"
            >
              <!-- Header -->
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1">
                  <h3
                    :class="[
                      'text-lg font-bold transition-colors',
                      colorMode === 'dark' 
                        ? 'text-white group-hover:text-primary-400' 
                        : 'text-light-900 group-hover:text-primary-600'
                    ]"
                  >
                    {{ exp.role }}
                  </h3>
                  <p class="text-primary-600 font-medium">{{ exp.company }}</p>
                  <div
                    :class="[
                      'flex flex-wrap items-center gap-2 mt-2 text-sm',
                      colorMode === 'dark' ? 'text-light-400' : 'text-light-500'
                    ]"
                  >
                    <span class="flex items-center gap-1">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {{ exp.period }}
                    </span>
                    <span>•</span>
                    <span class="flex items-center gap-1">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {{ exp.location }}
                    </span>
                  </div>
                </div>

                <!-- Expand icon -->
                <button
                  :class="[
                    'p-2 transition-colors',
                    colorMode === 'dark' 
                      ? 'text-light-400 hover:text-primary-400' 
                      : 'text-light-500 hover:text-primary-600'
                  ]"
                >
                  <svg
                    class="w-5 h-5 transition-transform duration-300"
                    :class="{ 'rotate-180': activeIndex === index }"
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
                </button>
              </div>

              <!-- Expandable content -->
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0"
              >
                <div v-if="activeIndex === index" class="overflow-hidden">
                  <div :class="[
                    'pt-4 mt-4 border-t',
                    colorMode === 'dark' ? 'border-light-700' : 'border-light-200'
                  ]">
                    <p :class="[
                      'mb-4',
                      colorMode === 'dark' ? 'text-light-300' : 'text-light-600'
                    ]">{{ exp.description }}</p>

                    <!-- Highlights -->
                    <ul class="space-y-2 mb-4">
                      <li
                        v-for="highlight in exp.highlights"
                        :key="highlight"
                        :class="[
                          'flex items-start gap-2 text-sm',
                          colorMode === 'dark' ? 'text-light-300' : 'text-light-600'
                        ]"
                      >
                        <svg
                          class="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {{ highlight }}
                      </li>
                    </ul>

                    <!-- Tech stack -->
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tech in exp.tech"
                        :key="tech"
                        class="tech-tag"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
