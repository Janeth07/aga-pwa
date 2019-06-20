import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;
import {DietasService} from '../services/dietas.service';
import {Dietas} from '../interfaces/dietas.interface';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public dietasService: DietasService) { }
  @ViewChild ('btnClose') btnClose : ElementRef;
  public dietas=[];
  public dieta='';
  


  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      const color = Math.floor((Math.random() * 4) + 1);

      $.notify({
          icon: "notifications",
          message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."

      },{
          type: type[color],
          timer: 4000,
          placement: {
              from: from,
              align: align
          },
          template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
            '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
            '<i class="material-icons" data-notify="icon">notifications</i> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
              '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
          '</div>'
      });
  }



  ngOnInit() {
    this.dietasService.getDietas().subscribe(dietas => {
      console.log('DIETAS', dietas);
      this.dietas=dietas;
     })
   }
 
   saveDietas(dietaForm:NgForm): void{
     if(dietaForm.value.id==null){
       this.dietasService.addDieta(dietaForm.value);
     }
     else{
       this.dietasService.updateDietas(dietaForm.value);
     }
     dietaForm.resetForm();
     alert('Dieta registrada con exito');
   }
 
   onDeleteDieta(id:string){
     console.log('DELETE DIETA', id);
     const confirmacion= confirm ('¿Deseas eliminar el registro?');
     if(confirmacion){
       this.dietasService.deleteDieta(id);
     }
   }
 
   onPreUpdateDieta(dieta:Dietas){
     this.dietasService.selectDieta=Object.assign({},dieta);
   }

}
