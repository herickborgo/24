<template>
  <div id="login">
    <i-container fluid style="height: 100vh">
      <i-row center middle style="height: 100%">
        <i-column xs="10" sm="10" md="6" lg="5" xl="4">
          <i-form @submit="onSubmit($event)">
            <i-card>
              <template #header>
                24Help
              </template>
              <i-form-group>
                <i-form-label>Email</i-form-label>
                <i-input
                  id="email"
                  v-model="payload.email"
                  type="email"
                  required
                ></i-input>
              </i-form-group>
              <i-form-group>
                <i-form-label>Senha</i-form-label>
                <i-input
                  id="password"
                  v-model="payload.password"
                  type="password"
                  required
                ></i-input>
              </i-form-group>
              <template #footer>
                <i-row between>
                  <i-column xs="12" sm="12" md="6">
                    <i-button
                      variant="primary"
                      @click="recoveryPassword()"
                      color="transparent"
                      block
                    >
                      <span style="font-size:.8rem">Recuperar Senha</span>
                    </i-button>
                  </i-column>
                  <i-column xs="12" sm="12" md="6">
                    <i-button
                      type="submit"
                      variant="primary"
                      @click="onSubmit($event)"
                      color="success"
                      block
                    >
                      Entrar
                    </i-button>
                  </i-column>
                </i-row>
              </template>
            </i-card>
          </i-form>
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script>
export default {
  name: 'LoginView',

  data: () => ({
    payload: {
      email: '',
      password: '',
    },
  }),

  methods: {
    onSubmit(event) {
      event.preventDefault();

      this.$router.push({ name: 'ServiceOrders' });
    },
    recoveryPassword() {
      this.$router.push({ name: 'RecoveryPassword' });
    },
  },
};
</script>
