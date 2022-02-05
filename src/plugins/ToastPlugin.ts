import { inject, InjectionKey, Plugin } from 'vue';
import { useToast, TYPE } from 'vue-toastification';
import { ToastOptions } from 'vue-toastification/dist/types/types';

interface Inotify {
  (message: string): void;
}
export type ToastPlugin = InjectionKey<Inotify>;
interface toastTypes {
  SUCCESS: ToastPlugin;
  ERROR: ToastPlugin;
}

export const TOAST_SYMBOLS: toastTypes = {
  SUCCESS: Symbol('notifySuccess'),
  ERROR: Symbol('notifyError'),
};

export const toastPlugin: Plugin = {
  install(app) {
    const toast = useToast();
    function notifySuccess(message: string) {
      const toastOptions: ToastOptions = { type: TYPE.SUCCESS };
      toast(message, toastOptions);
    }
    function notifyError(message: string) {
      const toastOptions: ToastOptions = { type: TYPE.ERROR };
      toast(message, toastOptions);
    }
    function notify(message: string, toastOptions: ToastOptions) {
      toast(message, toastOptions);
    }
    app.provide(TOAST_SYMBOLS.SUCCESS, notifySuccess);
    app.provide(TOAST_SYMBOLS.ERROR, notifyError);
    app.provide('notify', notify);
  },
};

export function useToastSuccess(message: string) {
  const toast = inject(TOAST_SYMBOLS.SUCCESS);
  if (!toast) throw new Error('method not found');
  toast(message);
}
export function useToastError(message: string) {
  const toast = inject(TOAST_SYMBOLS.ERROR);
  if (!toast) throw new Error('method not found');
  toast(message);
}
