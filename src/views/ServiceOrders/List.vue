<template>
  <div id="service-orders-list">
    <i-container fluid style="height: 100vh">
      <i-row center middle style="height: 100%">
        <i-column xs="10" sm="10" md="10">
          <i-card>
            <template #header>
              <h3>Ordens de serviço</h3>
            </template>
            <i-table hover responsive>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Cliente</th>
                      <th>Prestador de serviço</th>
                      <th>Categoria</th>
                      <th>Subcategoria</th>
                      <th>Descrição do serviço</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>João</td>
                      <td>Marcos</td>
                      <td>Assitência Técnica Eletrônicos</td>
                      <td>Tvs/Monitores</td>
                      <td>Minha Tv não quer ligar mais, não está acendendo o led vermelho</td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Janaina</td>
                      <td>Jeferson</td>
                      <td>Assitência Técnica Linha Branca</td>
                      <td>Ar Condicionada</td>
                      <td>O ar condicionado aqui de casa não está gelando</td>
                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>Diego</td>
                      <td>Odair</td>
                      <td>Serviços Gerais</td>
                      <td>Chaveiro</td>
                      <td>Minha chave quebrou dentro da fechadura</td>
                  </tr>
              </tbody>
            </i-table>
          </i-card>
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script>
export default {
  name: 'OrderOfServiceListView',
};
</script>
