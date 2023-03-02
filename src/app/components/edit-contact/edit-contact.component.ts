import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CONTACTS } from 'src/app/mock-data/sampleContact';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  
  contactId:number |undefined;
  contact!: IContact ;
  
  constructor(private activatedRoute: ActivatedRoute,private location: Location,private contactService: ContactService) { }

  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe(paramMap=>{
    this.contactId = Number(paramMap.get('contactId'));
    });
    if(this.contactId){
    this.contactService.getContactById(this.contactId).subscribe(
    (contact) => {
    this.contact = contact;
    },
    (error) => console.log(error)
    );
    }
    }

    onSubmit(): void {
      if (this.contactId) {
      this.contactService.updateContactById( this.contact).subscribe(
      () => {
      this.location.back();
      },
      (error) => console.log(error)
      );
      }
      }
      

}
