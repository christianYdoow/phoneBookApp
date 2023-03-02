import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONTACTS } from 'src/app/mock-data/sampleContact';
import { IContact } from 'src/app/models/IContact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  public contact: IContact | undefined;
  public contactId: number | undefined;

  constructor(private activatedRoute: ActivatedRoute,private contactService: ContactService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
    this.contactId = Number(paramMap.get('contactId'));
    this.contactService.getContactById(this.contactId).subscribe({
    next: contact => this.contact = contact,
    error: error => console.log(error)
    });
    });
    }
  }

