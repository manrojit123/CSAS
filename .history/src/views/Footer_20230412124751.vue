import {Collab1} from "./../assets/collab1.png";

<template>
  <nav class="footer p-4 mt-4">
    <h2 class="title text-center">Collaboration</h2>
    <ul>
      <li>
        <a href=""><img src="./../assets/collab1.png" alt="" /></a>
      </li>
      <li>
        <a href=""><img src="./../assets/collab2.png" alt="" /></a>
      </li>
      <li>
        <a href=""><img src="./../assets/collab3.png" alt="" /></a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer {
  background: #fdfaf6;
}
.footer img {
  height: 85px;
}
</style>