<script setup>
const props = defineProps({
  id: { type: String, required: true, default: "email" },
  name: { type: String, required: true, default: "email" },
  placeholder: { type: String },
  type: { type: String, default: "text" },
});
</script>

<template>
  <input
    :id="props.id"
    :name="props.name"
    :type="props.type"
    :placeholder="props.placeholder"
    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
  />
</template>
