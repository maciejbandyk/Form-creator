import { DocumentList } from './classes/DocumentList';
const forms = new DocumentList();
if (forms.getLength() === 0) {
    document.body.append('You don\'t have any saved documents yet');
} else {
forms.render(document.body);
}