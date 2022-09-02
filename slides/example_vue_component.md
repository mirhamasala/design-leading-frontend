# Example of Vue Component

```html
<script setup>
const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, default: "text" },
});
</script>

<template>
  <input
    :id="props.id"
    :name="props.name"
    :type="props.type"
    :placeholder="props.placeholder"
    class:"form-input"
  />
</template>
```
