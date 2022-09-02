<script setup>
const props = defineProps({
  type: {
    default: "submit",
  },
});
</script>

<template>
  <button
    :type="props.type"
    class="inline-flex justify-center rounded-md border border-transparent bg-cyan-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
  >
    <slot>Login</slot>
  </button>
</template>
