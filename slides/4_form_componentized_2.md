# Form Split Into Components II

<div class="flex gap-10 items-start">

<!-- ./components/LoginForm.vue -->
<LoginForm />

<div class="flex-1">

```html {3|7|4|8|10|2-5|6-9|all}
<FormLayout>
  <FormField>
    <FormLabel />
    <FormInput />
  </FormField>
  <FormField>
    <FormLabel />
    <FormInput />
  </FormField>
  <FormSubmitButton />
</FormLayout>
```

</div>

</div>
