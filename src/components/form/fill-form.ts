import { App } from '../../classes/App';
import { Router } from '../../classes/Router';
import { FormList } from '../../classes/FormList';

const appHandler = new App();
const id = Router.getParam();
const listOfDocuments = new FormList();
const requestedDocument = listOfDocuments.getDocument(id);
appHandler.renderDocumentToEdit(requestedDocument);