import { Component } from '@angular/core';
import { CONTACTS } from 'src/app/mock-data/sampleContact';
import { IContact } from 'src/app/models/IContact';
import { Location } from '@angular/common';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})



export class AddContactComponent {


  newContact: IContact = {
    id: undefined,
    name: '',
    email: '',
    image: '',
    number: '',
    address: ''
  };

  constructor(private contactService: ContactService, private location: Location){
  }

  addNewContact(): void {
    this.contactService.addContact(this.newContact).subscribe(() => {
      this.location.back();
    });
  }


  updateImage(): void {
    const img = new Image();
    img.onload = () => {
      this.newContact.image = img.src;
    };
    img.onerror = () => {
      this.newContact.image = 'https://via.placeholder.com/150';
    };
    img.src = this.newContact.image;
  }
}
