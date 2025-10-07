export const cardHtml = `
    <h2 class="form__title">Entregas Pendentes</h2>
    <div class="pending-select">
        <label>Responsável</label>
        <select id="loginZoom"></select>
    </div>
    <table 
        class="table" 
        id="pendingTable">
        <thead>
            <tr>
                <th class="table__item is--id">ID</th>
                <th class="table__item is--origin">Origem</th>
                <th class="table__item is--dest">Destino</th>
                <th class="table__item is--time">Prazo</th>
                <th class="table__item is--description">Descrição</th>
                <th class="table__item is--status">Status</th>
                <th class="table__item is--action is--center">Ação</th>
            </tr>
        </thead>
      <tbody></tbody>
    </table>
`;