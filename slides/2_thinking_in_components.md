---
clicks: 7
layout: two-cols
---

# Thinking in Components

<!-- ./components/LoginForm.vue -->
<LoginForm v-click="1" />

::right::

<h2 v-click="2" class="mb-4">Creating Components</h2>

<v-clicks>

1. Draw boxes around every component (and subcomponent).
2. Give them all names.

</v-clicks>

<p v-click="5">How do you know what should be its own component?</p>

<v-clicks>

- One such technique is the _single responsibility principle_, that is, a component should ideally only do one thing.
- If it [a component] ends up growing, it should be decomposed into smaller subcomponents.

</v-clicks>

<span v-click="3" class="text-xs">Source: [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)</span>
