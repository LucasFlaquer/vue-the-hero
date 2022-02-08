<template>
  <div class="container h-full max-w-6xl mx-auto">
    <header class="flex items-start justify-between pt-6 mb-20">
      <div class="flex items-center">
        <img src="../assets/hero-logo-small.svg" alt="Logo" />
        <p class="ml-12 font-default font-normal text-xl text-mainTitle">
          Bem vinda, APAD
        </p>
      </div>
      <div class="basis-1/3 flex">
        <DefaultButton> Cadastrar novo caso </DefaultButton>
        <button
          class="group ml-6 border text-center p-4 rounded-lg border-grayborder hover:bg-redHero group-transition-colors duration-200"
        >
          <power-icon
            size="1.5x"
            class="inline-block text-redHero align-bottom group-hover:text-white"
          />
        </button>
      </div>
    </header>
    <main>
      <MainTitle class="mb-6">Casos Cadastrados</MainTitle>
      <section class="grid grid-cols-2 gap-8 pb-20">
        <CardCase v-for="index in 10" :key="index" />
      </section>
    </main>
  </div>
</template>
<script setup>
import { PowerIcon } from '@zhuowenli/vue-feather-icons';
import MainTitle from '../components/MainTitle.vue';
import DefaultButton from '../components/DefaultButton.vue';
import CardCase from '../components/CardCase.vue';
</script>
