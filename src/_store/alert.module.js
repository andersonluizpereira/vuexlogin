/*
O módulo de alerta vuex é responsável pela seção de alerta do armazenamento
 de estado centralizado, ele contém ações e mutações para definir uma mensagem
  de alerta de erro ou sucesso e para limpar o alerta.

Neste módulo, cada ação de alerta apenas confirma uma única mutação, de forma
 que seria possível cometer as mutações diretamente de seus componentes vue e
  se livrar das ações. No entanto, eu prefiro despachar ações de todos os lugares
   para consistência, em vez de despachar ações para algumas coisas e cometer 
   mutações para outras. Desta forma, também fornece um pouco mais de flexibilidade
    se você decidir expandir uma ação para fazer mais do que apenas cometer uma 
    mutação.
*/

const state = {
    type: null,
    message: null
};

const actions = {
    success({ commit }, message) {
        commit('success', message);
    },
    error({ commit }, message) {
        commit('error', message);
    },
    clear({ commit }, message) {
        commit('success', message);
    }
};

const mutations = {
    success(state, message) {
        state.type = 'alert-success';
        state.message = message;
    },
    error(state, message) {
        state.type = 'alert-danger';
        state.message = message;
    },
    clear(state) {
        state.type = null;
        state.message = null;
    }
};

export const alert = {
    namespaced: true,
    state,
    actions,
    mutations
};