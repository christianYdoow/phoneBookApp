import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CONTACTS } from 'src/app/mock-data/sampleContact';
import { IContact } from 'src/app/models/IContact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  
  contactId:string | null=null;
  contact!: IContact ;
  
  constructor(private activatedRoute: ActivatedRoute,private location: Location) { }

  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.contactId = paramMap.get('contactId');
    });
    if(this.contactId){
     this.contact=CONTACTS.find(c=>c.id===Number(this.contactId)) as IContact;
    }
  }

  onSubmit(): void {
    this.location.back();
  }

 






  
}
