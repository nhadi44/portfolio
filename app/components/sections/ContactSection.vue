<script setup lang="ts">
const { colorMode } = useColorMode();
const { isVisible, sectionRef } = useScrollReveal();

const contactInfo = [
  {
    icon: "email",
    label: "Email",
    value: "hadinurhidayat97@gmail.com",
    href: "mailto:hadinurhidayat97@gmail.com",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+62 823 1042 1496",
    href: "tel:+6282310421496",
  },
  {
    icon: "location",
    label: "Location",
    value: "Bandung, Indonesia",
    href: "#",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "hadinurhidayat",
    href: "https://www.linkedin.com/in/hadinurhidayat/",
  },
];

const form = reactive({ name: "", email: "", message: "" });
const isSubmitting = ref(false);
const submitStatus = ref<"idle" | "success" | "error">("idle");

import emailjs from "@emailjs/browser";

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    const config = useRuntimeConfig();
    const SERVICE_ID = config.public.emailjsServiceId;
    const TEMPLATE_ID = config.public.emailjsTemplateId;
    const PUBLIC_KEY = config.public.emailjsPublicKey;

    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        title: "Portfolio Contact Form",
        name: form.name,
        email: form.email,
        message: form.message,
        time: new Date().toLocaleString(),
      },
      PUBLIC_KEY,
    );

    if (result.status === 200) {
      submitStatus.value = "success";
      form.name = "";
      form.email = "";
      form.message = "";
    }
  } catch (error) {
    console.log(
      "EmailJS sending failed or not configured, falling back to mailto:",
      error,
    );

    const subject = `Portfolio Contact from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:hadinurhidayat97@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    submitStatus.value = "success";
    form.name = "";
    form.email = "";
    form.message = "";
  } finally {
    isSubmitting.value = false;
    setTimeout(() => {
      submitStatus.value = "idle";
    }, 5000);
  }
};
</script>

<template>
  <section id="contact" ref="sectionRef" class="py-16 md:py-24 relative overflow-hidden">
    <!-- Background -->
    <div :class="[
      'absolute inset-0 -z-10 transition-colors duration-300',
      colorMode === 'dark'
        ? 'bg-gradient-to-b from-light-950 via-primary-950/10 to-light-950'
        : 'bg-gradient-to-b from-white via-primary-50/20 to-light-50'
    ]" />

    <div class="container mx-auto px-4 md:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16" :class="isVisible ? 'animate-fade-in-up' : 'opacity-0'">
        <p class="text-primary-600 font-medium mb-2">Get In Touch</p>
        <h2 class="section-heading">
          Contact <span class="gradient-text">Me</span>
        </h2>
        <p class="section-subheading mx-auto mt-4">
          Have a project in mind? Feel free to reach out!
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <!-- Left: Contact Info -->
        <div class="space-y-6" :class="isVisible
            ? 'animate-fade-in-right animation-delay-200'
            : 'opacity-0'
          ">
          <h3 :class="[
            'text-2xl font-bold mb-6',
            colorMode === 'dark' ? 'text-white' : 'text-light-900'
          ]">
            Let's work together
          </h3>
          <p :class="[
            'text-lg mb-8',
            colorMode === 'dark' ? 'text-light-300' : 'text-light-600'
          ]">
            I'm always open to discussing new projects, creative ideas, or
            opportunities.
          </p>
          <div class="grid sm:grid-cols-2 gap-4">
            <a v-for="info in contactInfo" :key="info.label" :href="info.href"
              :target="info.href.startsWith('http') ? '_blank' : '_self'"
              class="glass-card flex items-center gap-3 group overflow-hidden">
              <div :class="[
                'w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-colors',
                colorMode === 'dark'
                  ? 'bg-primary-500/10 group-hover:bg-primary-500/20'
                  : 'bg-primary-50 group-hover:bg-primary-100'
              ]">
                <!-- Email -->
                <svg v-if="info.icon === 'email'" class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <!-- Phone -->
                <svg v-else-if="info.icon === 'phone'" class="w-5 h-5 text-primary-600" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <!-- Location -->
                <svg v-else-if="info.icon === 'location'" class="w-5 h-5 text-primary-600" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <!-- LinkedIn -->
                <svg v-else-if="info.icon === 'linkedin'" class="w-5 h-5 text-primary-600" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <p :class="[
                  'text-xs',
                  colorMode === 'dark' ? 'text-light-400' : 'text-light-500'
                ]">{{ info.label }}</p>
                <p :class="[
                  'text-sm font-medium transition-colors truncate',
                  colorMode === 'dark'
                    ? 'text-white group-hover:text-primary-400'
                    : 'text-light-800 group-hover:text-primary-600'
                ]">
                  {{ info.value }}
                </p>
              </div>
            </a>
          </div>
        </div>

        <!-- Right: Contact Form -->
        <div class="glass-card" :class="isVisible ? 'animate-fade-in-left animation-delay-300' : 'opacity-0'
          ">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" :class="[
                'block text-sm font-medium mb-2',
                colorMode === 'dark' ? 'text-light-200' : 'text-light-700'
              ]">Your Name</label>
              <input id="name" v-model="form.name" type="text" required placeholder="John Doe" :class="[
                'w-full px-4 py-3 rounded-xl transition-colors focus:outline-none focus:ring-1',
                colorMode === 'dark'
                  ? 'bg-light-800/50 border border-light-700 text-white placeholder-light-500 focus:border-primary-500 focus:ring-primary-500'
                  : 'bg-light-50 border border-light-200 text-light-800 placeholder-light-400 focus:border-primary-400 focus:ring-primary-400'
              ]" />
            </div>
            <div>
              <label for="email" :class="[
                'block text-sm font-medium mb-2',
                colorMode === 'dark' ? 'text-light-200' : 'text-light-700'
              ]">Your Email</label>
              <input id="email" v-model="form.email" type="email" required placeholder="john@example.com" :class="[
                'w-full px-4 py-3 rounded-xl transition-colors focus:outline-none focus:ring-1',
                colorMode === 'dark'
                  ? 'bg-light-800/50 border border-light-700 text-white placeholder-light-500 focus:border-primary-500 focus:ring-primary-500'
                  : 'bg-light-50 border border-light-200 text-light-800 placeholder-light-400 focus:border-primary-400 focus:ring-primary-400'
              ]" />
            </div>
            <div>
              <label for="message" :class="[
                'block text-sm font-medium mb-2',
                colorMode === 'dark' ? 'text-light-200' : 'text-light-700'
              ]">Message</label>
              <textarea id="message" v-model="form.message" required rows="5"
                placeholder="Hello, I'd like to discuss..." :class="[
                  'w-full px-4 py-3 rounded-xl transition-colors resize-none focus:outline-none focus:ring-1',
                  colorMode === 'dark'
                    ? 'bg-light-800/50 border border-light-700 text-white placeholder-light-500 focus:border-primary-500 focus:ring-primary-500'
                    : 'bg-light-50 border border-light-200 text-light-800 placeholder-light-400 focus:border-primary-400 focus:ring-primary-400'
                ]" />
            </div>
            <button type="submit" :disabled="isSubmitting"
              class="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
              <template v-if="isSubmitting">
                <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Sending...</span>
              </template>
              <template v-else-if="submitStatus === 'success'">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Message Sent!</span>
              </template>
              <template v-else>
                <span>Send Message</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </template>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
