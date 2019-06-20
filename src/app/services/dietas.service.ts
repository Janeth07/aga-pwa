import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Dietas} from '../interfaces/dietas.interface';

@Injectable({
  providedIn: 'root'
})
export class DietasService {

  constructor(private afs:AngularFirestore) {
    this.dietasCollection=afs.collection<Dietas>('dietas');
    this.dietas=this.dietasCollection.valueChanges();
   }

   private dietasCollection: AngularFirestoreCollection<Dietas>;
   private dietas:Observable<Dietas[]>;
   public selectDieta:Dietas={
     id:null
   };
   private dietaDoc:AngularFirestoreDocument<Dietas>;
   private dieta:Observable<Dietas>;

   getDietas(){
     return this.dietas=this.dietasCollection.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action=>{
         const data=action.payload.doc.data() as Dietas;
         data.id=action.payload.doc.id;
         return data;
       });
     }));
   }

   updateDietas(dieta:Dietas): void{
     let id=dieta.id;
     this.dietaDoc=this.afs.doc<Dietas>(`dietas/${id}`);
    this.dietaDoc.update(dieta);
   }

   deleteDieta(id:string): void{
     this.dietaDoc=this.afs.doc<Dietas>(`dietas/${id}`);
     this.dietaDoc.delete();

   }

   addDieta(dieta:any){
return this.dietasCollection.add(dieta);
   }
}
