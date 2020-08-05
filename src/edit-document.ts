import { app } from './index';
import { DocumentList } from './classes/DocumentList';
import { Router } from "./classes/Router";

const id = Router.getParam();
const listOfDocuments = new DocumentList();
const requestedDocument = listOfDocuments.getDocument(id);
app.renderDocumentToEdit(requestedDocument);

