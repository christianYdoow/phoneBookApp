import { Component } from '@angular/core';
import { IContact } from 'src/app/models/IContact';
import { CONTACTS } from 'src/app/mock-data/sampleContact';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  contacts=CONTACTS;


  
  

}
