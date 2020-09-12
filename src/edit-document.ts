import { App } from './classes/App';
import { DocumentList } from './classes/DocumentList';
import { Router } from "./classes/Router";

const id = Router.getParam();
const listOfDocuments = new DocumentList();
const requestedDocument = listOfDocuments.getDocument(id);
const app = new App();
app.renderDocumentToEdit(requestedDocument);

