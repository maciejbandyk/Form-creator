import { DocumentList } from '../../classes/DocumentList';
const mainContainer = document.getElementById('main');
const documents = new DocumentList();
if (documents.getLength() === 0) {
    mainContainer.append('You don\'t have any saved documents yet');
} else {
    documents.render(mainContainer);
}
