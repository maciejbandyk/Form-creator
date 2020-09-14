import { LocStorage } from '../../classes/LocStorage';
import { TableComponents } from "../../classes/TableComponents";

const newFormButton = document.querySelector('button.new');
const tableContainer: HTMLElement = document.querySelector('.table tbody');
const tableComponentsHandler = new TableComponents();
const localStorage = new LocStorage();
const forms = localStorage.getForms()
forms.forEach((element, index) => {
    tableComponentsHandler.render(tableContainer, element, index+1);
});

newFormButton.addEventListener('click', () => {
    window.location.href = "../new-form/new-form.html";
})
