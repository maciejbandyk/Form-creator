import { LocStorage } from './LocStorage';
import { IComponent } from "../interfaces/icomponent";

export class TableComponents implements IComponent {

    constructor() {
      this.localStorage = new LocStorage();
    }

    localStorage: LocStorage;

    public render(container: HTMLElement, name: string, num: number): void {
        container.appendChild(this.newTableRowElement(name, num));
    }

    private newTableRowElement(name: string, num: number) {
        const tr = document.createElement('tr');
        const th = this.tableTh(num);
        const tdName = this.nameTd(name);
        const tdDate = this.dateTd(name);    
        const tdActions = this.actionsTd(name);
        tr.append(th,tdName, tdDate, tdActions);
        return tr;
    }

    private tableTh(num: number) {
        const th = document.createElement('th');
        th.setAttribute('scope', 'row');
        th.innerHTML = num.toString();
        return th;
    }

    private nameTd(name: string) {
        const slicedName = name.slice(0,-14);
        const validName = slicedName.substring(2);
        const td = document.createElement('td');
        td.innerHTML = validName;
        return td;
    }

    private dateTd(name: string) {
        const td = document.createElement('td');
        const fullDate = new Date(parseInt(name.slice(-13)));
        const year = fullDate.getFullYear();
        const month = fullDate.getMonth() + 1;
        const day = fullDate.getDate();
        td.innerHTML = `${day}-${month}-${year}`;
        return td;
    }

    private actionsTd(name: string) {
        const td = document.createElement('td');
        const fillButton = this.newButton('FILL', ['btn', 'btn-info']);
        fillButton.addEventListener('click', () => {
            window.location.href = `../form/form.html?id=${name}`;
        })
        const deleteButton = this.newButton('DELETE', ['btn', 'btn-danger']);
        deleteButton.addEventListener('click', () => {
            td.parentElement.remove();
            this.localStorage.removeDocument(name);
        })
        td.append(fillButton, deleteButton);
        return td;

    }

    private newButton(text: string, classes: string[] = ['btn']) {
        const newButton = document.createElement('button');
        classes.forEach(element => {
            newButton.classList.add(element);
        });
        newButton.innerHTML = text;
        return newButton;
    }

}