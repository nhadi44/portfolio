export function useScrollReveal(threshold = 0.1) {
  const isVisible = ref(false);
  const sectionRef = ref<HTMLElement | null>(null);

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true;
          }
        });
      },
      { threshold }
    );

    if (sectionRef.value) {
      observer.observe(sectionRef.value);
    }
  });

  return {
    isVisible,
    sectionRef,
  };
}
