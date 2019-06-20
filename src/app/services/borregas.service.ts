import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Borregas} from '../interfaces/borregas.interface';

@Injectable({
  providedIn: 'root'
})
export class BorregasService {

  constructor(private afs:AngularFirestore) {
    this.borregasCollection=afs.collection<Borregas>('borregas');
    this.borregas=this.borregasCollection.valueChanges();
   }

   private borregasCollection: AngularFirestoreCollection<Borregas>;
   private borregas:Observable<Borregas[]>;
   public selectBorrega:Borregas={
     id:null
   };
   private borregaDoc:AngularFirestoreDocument<Borregas>;
   private borrega:Observable<Borregas>;

   getBorregas(){
     return this.borregas=this.borregasCollection.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action=>{
         const data=action.payload.doc.data() as Borregas;
         data.id=action.payload.doc.id;
         return data;
       });
     }));
   }

   updateBorregas(borrega:Borregas): void{
     let id=borrega.id;
     this.borregaDoc=this.afs.doc<Borregas>(`borregas/${id}`);
    this.borregaDoc.update(borrega);
   }

   deleteBorrega(id:string): void{
     this.borregaDoc=this.afs.doc<Borregas>(`borregas/${id}`);
     this.borregaDoc.delete();

   }

   addBorrega(borrega:any){
return this.borregasCollection.add(borrega);
   }
}
