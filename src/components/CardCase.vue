<template>
  <div class="p-8 relative bg-white rounded-lg">
    <h3 class="mb-4 font-bold text-sm">Caso:</h3>
    <p class="mb-8 text-lg">Cadelinha atropelada</p>
    <h3 class="mb-4 font-bold text-sm">Descrição</h3>
    <p class="mb-8 text-lg">
      A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que
      passar por uma cirurgia às pressas.
    </p>
    <h3 class="mb-4 font-bold text-sm">Valor:</h3>
    <p class="mb-0 text-lg">R$ 120,00 reais</p>
    <button class="absolute top-5 right-5">
      <Trash2Icon
        class="text-lightGray hover:text-redHero transition-colors duration-200"
        size="1.5x"
      />
    </button>
  </div>
</template>
<script setup>
import { Trash2Icon } from '@zhuowenli/vue-feather-icons';
</script>
<style scoped>
p {
  color: #737380;
}
</style>
