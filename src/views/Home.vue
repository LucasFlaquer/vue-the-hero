<template>
  <div class="bg-background">
    <div
      class="flex w-full h-screen items-center justify-between max-w-6xl mx-auto"
    >
      <div class="">
        <!-- <figure class="self-start"> -->
        <img src="../assets/hero-logo.svg" alt="Logo" />
        <!-- </figure> -->
        <div class="max-w-2xl mt-20">
          <form action="">
            <h1 class="text-3xl font-default font-500 mb-4">Faça seu logon</h1>
            <input
              class="h-14 px-2 py-2 rounded-lg w-full"
              type="text"
              placeholder="Sua ID"
            />
            <button
              class="mt-3 bg-redHero text-background font-bold p-4 rounded-lg w-full"
            >
              Entrar
            </button>
            <a href="" class="block mt-4 font-500">
              <log-in-icon
                size="1.5x"
                class="inline-block text-redHero mr-3 align-bottom"
              />
              Não tenho cadastro
            </a>
          </form>
        </div>
      </div>
      <img src="../assets/heroes.svg" alt="heroes" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { LogInIcon } from '@zhuowenli/vue-feather-icons';
</script>
