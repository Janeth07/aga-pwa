import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Corrales, CategoriaAnimal} from '../interfaces/corrales.interface';


@Injectable({
  providedIn: 'root'
})
export class CorralesService {

  constructor(private afs:AngularFirestore) {
   this.corralesCollection=afs.collection<Corrales>('corrales');
    this.corrales=this.corralesCollection.valueChanges();
   }
  public length:number;
 private corralesCollection: AngularFirestoreCollection<Corrales>;
   private corrales:Observable<Corrales[]>;
   public selectCorral:Corrales={
     id:null
   };
   private corralDoc:AngularFirestoreDocument<Corrales>;
   private corral:Observable<Corrales>;

   getCorrales(){
     return this.corrales=this.corralesCollection.snapshotChanges()
     .pipe(map(changes => {
       this.length=changes.length;
       return changes.map(action=>{
         const data=action.payload.doc.data() as Corrales;
         data.id=action.payload.doc.id;         
         return data;
       });
     }));
   }

   updateCorrales(corral:Corrales,categorias:CategoriaAnimal): void{

     let id=corral.id;
     corral.aloja=categorias;
     this.corralDoc=this.afs.doc<Corrales>(`corrales/${id}`);
    this.corralDoc.update(corral);
   }

   deleteCorral(id:string): void{
     this.corralDoc=this.afs.doc<Corrales>(`corrales/${id}`);
     this.corralDoc.delete();
   }

   addCorral(corral:Corrales,categorias:CategoriaAnimal){     
     corral.aloja=categorias;
     return this.corralesCollection.add(corral);
   }
}
