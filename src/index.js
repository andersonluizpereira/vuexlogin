/*
O arquivo root index.js inicializa o aplicativo tutorial
 vue + vuex renderizando o componente App no elemento #app
  div definido no arquivo html do índice principal acima.

O aplicativo tutorial usa um backend falso / simulado 
que armazena dados no armazenamento local do navegador,
 para alternar para uma API de backend real basta remover
  o código de backend falso abaixo do comentário // setup backend falso.
*/

import Vue from 'vue';
import VeeValidate from 'vee-validate';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

Vue.use(VeeValidate);

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});