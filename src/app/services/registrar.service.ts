import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Registar } from './../interfaces/registrar.interfaces';


@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private afs:AngularFirestore) {
     this.registarCollection=afs.collection<Registar>('registro');
  this.registar=this.registarCollection.valueChanges();
}
private registarCollection: AngularFirestoreCollection<Registar>;
 private registar:Observable<Registar[]>;
 public selectregistar:Registar={
   id:null
};
private registroDoc:AngularFirestoreDocument<Registar>;
private registro:Observable<Registar>;

 getRegistar(){
   return this.registar=this.registarCollection.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action=>{
       const data=action.payload.doc.data() as Registar;
       data.id=action.payload.doc.id;
       return data;
     });
   }));
 }

 updateRegistar(registar:Registar): void{
   let id=registar.id;
   this.registroDoc=this.afs.doc<Registar>(`registro/${id}`);
  this.registroDoc.update(registar);
 }

 deleteRegistar(id:string): void{
   this.registroDoc=this.afs.doc<Registar>(`registro/${id}`);
   this.registroDoc.delete();

 }

 addRegistro(registro:any){
   registro.tipo ="pesaje";
   registro.fecha = new Date().getTime();
return this.registarCollection.add(registro);
 }
}



