<template>
  <div class="h-full min-h-screen mx-auto flex justify-center items-center">
    <div
      :class="[
        'max-w-[1120px]',
        'mx-auto',
        'shadow-2xl',
        'flex',
        'justify-between',
        'p-24',
      ]"
    >
      <div class="basis-2/5">
        <img src="../assets/hero-logo-small.svg" alt="Logo" />
        <main-title class="mt-16 mb-8">Cadastrar novo caso</main-title>
        <p class="text-lg text-texts mb-20">
          Descreva o caso detalhadamente para encontrar um herói para resolver
          isso.
        </p>
        <router-link
          :to="{ name: 'cases' }"
          class="block mt-4 font-500 font-default"
        >
          <arrow-left-icon
            size="1.5x"
            class="font-bold inline-block text-redHero mr-3 align-bottom"
          />
          <strong>Voltar para home</strong>
        </router-link>
      </div>
      <form class="basis-3/6">
        <input
          class="h-14 px-2 py-2 rounded-lg w-full mb-2"
          type="text"
          placeholder="Título do caso"
        />
        <textarea
          class="px-2 py-2 rounded-lg w-full mb-2"
          type="text"
          rows="5"
          placeholder="Descrição"
        />
        <input
          class="h-14 px-2 py-2 rounded-lg w-full mb-2"
          type="text"
          placeholder="Valor em reais"
        />
        <div class="flex items-center justify-between">
          <button
            :class="[
              'group',
              'border',
              'text-center',
              'p-4',
              'rounded-lg',
              'border-gray',
              'border',
              'hover:bg-texts',
              'hover:text-background',
              'group-transition-colors',
              'duration-200',
              'basis-1/3',
            ]"
          >
            cancelar
          </button>
          <button
            class="bg-redHero ml-4 text-background font-bold p-4 rounded-lg grow"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowLeftIcon } from '@zhuowenli/vue-feather-icons';
import MainTitle from '../components/MainTitle.vue';
</script>
