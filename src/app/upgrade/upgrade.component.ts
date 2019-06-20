import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CorralesService} from '../services/corrales.service';
import {Corrales} from '../interfaces/corrales.interface';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {

  constructor(public corralesService: CorralesService) { }
@ViewChild ('btnClose') btnClose : ElementRef;
public corrales=[];
public corral='';

  ngOnInit() {
    this.corralesService.getCorrales().subscribe(corrales => {
     console.log('CORRALES', corrales);
     this.corrales=corrales;
    })
  }

  saveCorral(corralForm:NgForm): void{
    if(corralForm.value.id==null){
      this.corralesService.addCorral(corralForm.value);
    }
    else{
      this.corralesService.updateCorrales(corralForm.value);
    }
    corralForm.resetForm();
    alert('Corral registrado con exito');
  }

  onDeleteCorral(id:string){
    console.log('DELETE CORRAL', id);
    const confirmacion= confirm ('¿Deseas eliminar el registro?');
    if(confirmacion){
      this.corralesService.deleteCorral(id);
    }
  }

  onPreUpdateCorral(corral:Corrales){
    this.corralesService.selectCorral=Object.assign({},corral);
  }
  
}
