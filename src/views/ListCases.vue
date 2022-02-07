<template>
  <div class="container h-screen max-w-6xl mx-auto">
    <header class="flex items-start justify-between pt-6 mb-20">
      <div class="flex items-center">
        <img src="../assets/hero-logo-small.svg" alt="Logo" />
        <p class="ml-12 font-default font-normal text-xl text-mainTitle">
          Bem vinda, APAD
        </p>
      </div>
      <div class="flex">
        <DefaultButton> Cadastrar novo caso </DefaultButton>
        <button class="ml-6 border-2 text-center p-3 h-14 w-14 rounded-sm">
          <power-icon
            size="1.5x"
            class="inline-block text-redHero align-bottom"
          />
        </button>
      </div>
    </header>
    <main>
      <MainTitle class="mb-6">Casos Cadastrados</MainTitle>
      <section>saa casos</section>
    </main>
  </div>
</template>
<script setup>
import { PowerIcon } from '@zhuowenli/vue-feather-icons';
import MainTitle from '../components/MainTitle.vue';
import DefaultButton from '../components/DefaultButton.vue';
</script>
