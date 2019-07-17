import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Ganaderos } from './../interfaces/ganaderos.interface';

@Injectable({
  providedIn: 'root'
})
export class GanaderosService {

  constructor(private afs:AngularFirestore) { 
    this.ganaderosCollection=afs.collection<Ganaderos>('ganaderos');
    this.ganaderos=this.ganaderosCollection.valueChanges();
  }
  private ganaderosCollection: AngularFirestoreCollection<Ganaderos>;
   private ganaderos:Observable<Ganaderos[]>;
   public selectGanadero:Ganaderos={
     id:null
};
private ganaderoDoc:AngularFirestoreDocument<Ganaderos>;
private ganadero:Observable<Ganaderos>;

   getGanaderos(){
     return this.ganaderos=this.ganaderosCollection.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action=>{
         const data=action.payload.doc.data() as Ganaderos;
         data.id=action.payload.doc.id;
         return data;
       });
     }));
   }

   updateGanaderos(ganaderos:Ganaderos): void{
     let id=ganaderos.id;
     this.ganaderoDoc=this.afs.doc<Ganaderos>(`ganaderos/${id}`);
    this.ganaderoDoc.update(ganaderos);
   }

   deleteGanaderos(id:string): void{
     this.ganaderoDoc=this.afs.doc<Ganaderos>(`ganaderos/${id}`);
     this.ganaderoDoc.delete();

   }

   addGanaderos(ganaderos:any){
return this.ganaderosCollection.add(ganaderos);
   }
}

