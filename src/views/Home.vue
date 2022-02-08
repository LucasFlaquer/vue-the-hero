<template>
  <div class="bg-background">
    <div
      :class="[
        'flex',
        'w-full',
        'h-screen',
        'items-center',
        'justify-between max-w-6xl mx-auto',
      ]"
    >
      <div class="flex-grow">
        <img src="../assets/hero-logo.svg" alt="Logo" />
        <form action="" class="max-w-sm mt-20" @submit.prevent="handleLogon">
          <h1 class="text-3xl font-default font-500 mb-4">Faça seu logon</h1>
          <input
            class="h-14 px-2 py-2 rounded-lg w-full"
            type="text"
            placeholder="Sua ID"
            v-model="value"
          />
          <button
            class="mt-3 bg-redHero text-background font-bold p-4 rounded-lg w-full"
          >
            Entrar
          </button>
          <a href="" class="block mt-4 font-500 font-default">
            <log-in-icon
              size="1.5x"
              class="inline-block text-redHero mr-3 align-bottom"
            />
            Não tenho cadastro
          </a>
        </form>
      </div>
      <img src="../assets/heroes.svg" alt="heroes" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { LogInIcon } from '@zhuowenli/vue-feather-icons';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { TOAST_SYMBOLS } from '../plugins/ToastPlugin';
import { injectStrict } from '../utils/injectStrict';

interface LogInProps {
  ong: {
    name: string;
    code: string;
  };
}

const router = useRouter();

const notifySuccess = injectStrict(TOAST_SYMBOLS.SUCCESS);
const notifyError = injectStrict(TOAST_SYMBOLS.ERROR);
const value = ref('');
async function handleLogon() {
  try {
    const { data } = await axios.post<LogInProps>('/api/logon', {
      id: value.value,
    });
    const { ong } = data;
    localStorage.setItem('code', ong.code);
    localStorage.setItem('name', ong.name);
    notifySuccess('Logon realizado com sucesso');
    router.push({ name: 'cases' });
  } catch (error) {
    console.error(error);
    notifyError('Erro ao realizar o logon');
  }
}
</script>
