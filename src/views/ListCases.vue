<template>
  <div class="container h-full min-h-screen max-w-6xl mx-auto">
    <header class="flex items-start justify-between pt-6 mb-20">
      <div class="flex items-center">
        <img src="../assets/hero-logo-small.svg" alt="Logo" />
        <p class="ml-12 font-default font-normal text-xl text-mainTitle">
          Bem vinda, {{ ongName }}
        </p>
      </div>
      <div class="basis-1/3 flex">
        <DefaultButton @click="createCase"> Cadastrar novo caso </DefaultButton>
        <button
          :class="[
            'group',
            'ml-6',
            'border',
            'text-center',
            'p-4 rounded-lg border-grayborder hover:bg-redHero group-transition-colors duration-200',
          ]"
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
        <CardCase v-for="item in ongCases" :key="item.id" :case="item" />
      </section>
    </main>
  </div>
</template>
<script setup lang="ts">
import { PowerIcon } from '@zhuowenli/vue-feather-icons';
import { onMounted, Ref, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import MainTitle from '../components/MainTitle.vue';
import DefaultButton from '../components/DefaultButton.vue';
import CardCase from '../components/CardCase.vue';
import { injectStrict } from '../utils/injectStrict';
import { TOAST_SYMBOLS } from '../plugins/ToastPlugin';
import { ICase } from '../types/cases';

const ongName = ref('');
const ongCode = ref('');
// eslint-disable-next-line prettier/prettier
const ongCases = ref([]) as Ref<ICase[]>;
const router = useRouter();
const notifySuccess = injectStrict(TOAST_SYMBOLS.SUCCESS);
const notifyError = injectStrict(TOAST_SYMBOLS.ERROR);

onMounted(async () => {
  const name = localStorage.getItem('name');
  const code = localStorage.getItem('code') || '';
  if (!name) {
    notifyError('Oops parece que sua sessão expirou. Faça logon novamente');
    router.push('/');
    return;
  }
  notifySuccess(`Bem vinda, ${name}`);
  ongName.value = name;
  ongCode.value = code;

  const { data } = await axios.get(`/api/ongs/${code}`);
  ongCases.value = [...data.cases];
});
function createCase() {
  router.push({ name: 'cases-create' });
}
</script>
