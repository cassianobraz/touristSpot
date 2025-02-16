<template>
  <footer class="w-full bg-gray-800 text-white py-4 text-center bottom-0 left-0 right-0 mt-20">
    <p>&copy; {{ currentYear }}. Todos os direitos reservados a <a href="https://github.com/cassianobraz"
        class="hover:underline hover:text-blue-500 text-blue-200">Cassiano</a>
    </p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>