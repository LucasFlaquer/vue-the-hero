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
      <form class="basis-3/6" @submit.prevent="createCase">
        <input
          class="h-14 px-2 py-2 rounded-lg w-full mb-2"
          type="text"
          placeholder="Título do caso"
          v-model="title"
        />
        <textarea
          class="px-2 py-2 rounded-lg w-full mb-2"
          type="text"
          rows="5"
          placeholder="Descrição"
          v-model="description"
        />
        <input
          class="h-14 px-2 py-2 rounded-lg w-full mb-2"
          type="text"
          placeholder="Valor em reais"
          v-model="ammount"
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
            @click.prevent="goBack"
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
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import MainTitle from '../components/MainTitle.vue';

const title = ref('');
const description = ref('');
const ammount = ref<number | null>(null);
const router = useRouter();
function goBack() {
  router.go(-1);
}
// eslint-disable-next-line no-undef
function createCase() {
  console.log(title.value);
}
</script>
