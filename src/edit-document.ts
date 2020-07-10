import { LocStorage } from './classes/LocStorage';
import { DocumentList } from './classes/DocumentList';
import { Router } from "./classes/Router";
import { App } from './classes/App';

const id = Router.getParam();
const docList = new DocumentList();
const ab = docList.getDocument(id);
const doc = new App();
doc.renderDocumentToEdit(ab);

