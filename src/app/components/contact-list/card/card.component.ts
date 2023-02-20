import { Component, Input } from '@angular/core';
import { CONTACTS } from 'src/app/mock-data/sampleContact';
import { IContact } from 'src/app/models/IContact';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  contacts=CONTACTS;

   contact!: IContact;


  deleteContact(contactId:number |undefined){
    if (contactId !== undefined) {
      const index = this.contacts.findIndex(contact => contact.id === contactId);
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    }
  }
}
