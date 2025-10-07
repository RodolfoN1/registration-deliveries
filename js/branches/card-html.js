export const cardHtml = `
    <h2 class="form__title">Pré-cadastro de Filial</h2>
    <form id="branchForm" class="form__container grid cols-2">
        <div class="form__item">
            <label>Código</label>
            <input id="branchCode" required>
        </div>
        <div class="form__item">
            <label>Nome</label>
            <input id="branchName" required>
        </div>
        <div class="form__item">
            <label>Endereço</label>
            <input id="branchAddress" required>
        </div>
        <div class="form__item two-fields">
            <div>
                <label>Responsável</label>
                <input id="branchResponse" required>
            </div>
            <div>
                <label>Zoom (user)</label>
                <input id="branchZoom" required>
            </div>
        </div>
        <div class="form__item row">
            <button 
                type="button" 
                class="btn" 
                id="saveBranch"
            >
                Salvar
            </button>
            <button 
                type="button" 
                class="btn btn-danger" 
                id="clearBranches"
            >
                Limpar
            </button>
        </div>
    </form>
    <table class="table" id="branchesTable">
        <thead>
            <tr>
                <th class="table__item is--code">Código</th>
                <th class="table__item is--name">Nome</th>
                <th class="table__item is--address">Endereço</th>
                <th class="table__item is--response">Responsável</th>
                <th class="table__item is--zoom">Zoom (user)</th>
                <th class="table__item is--acion is--center">Ações</th>
            </tr>
        </thead>
      <tbody></tbody>
    </table>
`