<script setup>
import Button from "./FormSubmitButton.vue";
import FormInput from "./FormInput.vue";
import FormLabel from "./FormLabel.vue";
import FormField from "./FormField.vue";
import FormLayout from "./FormLayout.vue";
</script>

<template>
  <FormLayout>
    <FormField>
      <template v-slot:label>
        <FormLabel for="email">Email</FormLabel>
      </template>
      <template v-slot:input>
        <FormInput id="email" name="email" />
      </template>
    </FormField>
    <FormField>
      <template v-slot:label>
        <FormLabel for="password">Password</FormLabel>
      </template>
      <template v-slot:input>
        <FormInput id="password" name="password" />
      </template>
    </FormField>
    <template v-slot:footer>
      <Button>Login</Button>
    </template>
  </FormLayout>
</template>
