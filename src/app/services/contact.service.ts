import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { IContact } from '../models/IContact';
import { CONTACTS } from '../mock-data/sampleContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  lists=CONTACTS;
  

  constructor() { }

  getContactList():Observable<IContact[]>{
    return of(this.lists);
  }

  getContactById(id:number):Observable<IContact>{
    const item=this.lists.find(i=>i.id === id);
    if (item) {
      return of(item);
    } else {
      return of({ id: undefined, name: '', email: '',image:'',number:'',address:''});
    }
  }
  addContact(item:IContact):Observable<IContact>{
    item.id=this.lists.length+1;
    this.lists.push(item);
    return of(item);
  }

  updateContactById(item:IContact):Observable<IContact>{
    const index=this.lists.findIndex(i=>i.id ===item.id);
    if(index>=0){
      this.lists[index]=item;
      return of(item);
    }
    throw new Error('item with id ${item.id}not found');
  }

  deleteContactById(id:number):Observable<IContact>{
    const index=this.lists.findIndex(i=>i.id===id);
    if (index >= 0) {
      const item = this.lists[index];
      this.lists.splice(index, 1);
      return of(item);
    }
    throw new Error('item with id ${item.id}not found');
  }
}



