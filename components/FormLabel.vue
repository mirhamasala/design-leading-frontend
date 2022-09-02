<script setup>
const props = defineProps({
  for: { type: String, required: true, default: "email" },
});
</script>

<template>
  <label :for="props.for" class="block text-sm font-medium text-cyan-700"
    ><slot>Email</slot></label
  >
</template>
