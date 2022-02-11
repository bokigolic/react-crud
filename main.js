let accountsTableBody = document.querySelector("#accounts-table-body");
let accountsViewBtn = document.querySelector('[href="account-view"]');
let addaccountsViewBtn = document.querySelector('[href="add-accounts-view"]');
let accountsView = document.querySelector('#account-view')

addaccountsViewBtn.addEventListener("click")

createAccountsTable();

function createAccountsTable() {
  let htmlAccounts = '';
  for (let i = 0; i < db.length; i++) {
    const account = db[i];
    htmlAccounts += `
    <tr>
      <td>${account.id}</td>
      <td>${account.name}</td>
      <td>${account.lastname}</td>
      <td>${account.email}</td>
      <td>${account.phone}</td>
    </tr>
    `
  }
  accountsTableBody.innerHTML = htmlAccounts;
}