import { LocStorage } from './classes/LocStorage';
import { App } from "./classes/App";
import { TableComponents } from "./classes/TableComponents";

export let app = new App();
//app.renderDocument(app.TestFormm);
const newFormButton = document.querySelector('button.new');
const tableContainer: HTMLElement = document.querySelector('.table tbody');
const a = new TableComponents();
const asdasd = new LocStorage();
const forms = asdasd.getForms()
forms.forEach((element, index) => {
    a.render(tableContainer, element, index+1);
});

newFormButton.addEventListener('click', () => {
    window.location.href = "new-form.html";
})
