import { Component, Input,OnInit } from '@angular/core';
import { CONTACTS } from 'src/app/mock-data/sampleContact';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // contacts=CONTACTS;

  //  contact!: IContact;

  contacts?:IContact[];

  constructor(private contactService : ContactService){

  }

  ngOnInit(): void {
      this.getList();
  }

  getList():void{
    this.contactService.getContactList().subscribe(contacts=>this.contacts=contacts)
  }

  deleteContactById(contactId: number | undefined): void {
    if (contactId !== undefined) {
      this.contactService.deleteContactById(contactId).subscribe({
        next: () => {
          // Remove the contact from the contacts array
          const index = this.contacts!.findIndex(contact => contact.id === contactId);
          if (index !== -1) {
            this.contacts!.splice(index, 1);
          }
        },
        error: error => console.log(error)
      });
    }
  }
  



  // deleteContact(contactId:number |undefined){
  //   if (contactId !== undefined) {
  //     const index = this.contacts.findIndex(contact => contact.id === contactId);
  //     if (index !== -1) {
  //       this.contacts.splice(index, 1);
  //     }
  //   }
  // }
}
