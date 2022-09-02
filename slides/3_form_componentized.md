---
clicks: 6
title: Form Split Into Components I
---

# Form Split Into Components I

<div class="flex gap-10 items-start">

<!-- ./components/LoginForm.vue -->
<LoginForm v-click="1" />

<div class="grid gap-2 flex-1">
  <div v-click="2">

  ```html
    <!-- 1. FormLabel -->
    <FormLabel />
  ```

  </div>

  <div v-click="3">

  ```html
    <!-- 2. FormInput -->
    <FormInput />
  ```

  </div>

  <div v-click="4">

  ```html
    <!-- 3. FormSubmitButton -->
    <FormSubmitButton />
  ```

  </div>

  <div v-click="5">

  ```html
    <!-- 4. FormField -->
    <FormField />
  ```

  </div>

  <div v-click="6">

  ```html
    <!-- 5. FormLayout -->
    <FormLayout />
  ```

  </div>
</div>

</div>

<!--

<FormLabel />
<FormInput />
<FormSubmitButton />
<FormField />
<FormLayout />

-->
