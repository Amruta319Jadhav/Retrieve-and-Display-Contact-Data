import { LightningElement, wire,track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRST_NAME from'@salesforce/schema/Contact.FirstName';
import LAST_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';

export default class ContactList extends LightningElement {
    @track columns = [
        { label: 'First Name', fieldName: FIRST_NAME.fieldApiName,type: 'text' },
        { label: 'Last Name', fieldName: LAST_NAME.fieldApiName,type: 'text' },
        { label: 'Email', fieldName: CONTACT_EMAIL.fieldApiName,type: 'email' }
     ];
 
    @wire(getContacts) contacts;
    
}