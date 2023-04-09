<template>
  <nav class="footer">
    <ul>
      <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Footer",
};
</script>