export const cardHtml = `
    <h2 class="form__title">Registrar Entrega</h2>
    <form id="deliveryForm" class="form__container grid cols-2">
      <div class="form__item">
        <label>CEP Origem</label>
        <input id="originCep" required>
        <div class="error" id="cepError"></div>
      </div>
      <div class="form__item">
        <label>Rua</label>
        <input id="street" class="readonly" readonly>
      </div>
      <div class="form__item">
        <label>Cidade</label>
        <input id="city" class="readonly" readonly>
      </div>
      <div class="form__item">
        <label>Estado</label>
        <input id="cepState" class="readonly" readonly>
      </div>
      <div class="form__item">
        <label>Filial Destino</label>
        <select id="destBranch" required></select>
      </div>
      <div class="form__item">
        <label>Prazo</label>
        <input id="deadline" type="date" required>
      </div>
      <div 
        class="form__item is--grid-col">
        <label>Descrição</label>
        <textarea id="description" rows="3" required></textarea>
      </div>
      <div class="form__item row">
        <button type="button" class="btn" id="saveDelivery">Registrar</button>
        <button type="button" class="btn btn-danger" id="clearDeliveries">Limpar</button>
      </div>
    </form>
`;