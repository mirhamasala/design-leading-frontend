<script setup />

<template>
  <form
    @submit.prevent
    class="grid gap-6 w-sm border-1 border-slate-700 rounded-md p-4"
  >
    <div class="grid gap-3"><slot /></div>
    <slot name="footer" />
  </form>
</template>
