import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../app.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ui-modals', // tslint:disable-line
  templateUrl: './modals.component.html',
  styleUrls: ['../../../vendor/libs/ngx-sweetalert2/ngx-sweetalert2.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalsComponent {
  isIE10 = false;

  constructor(private appService: AppService, private modalService: NgbModal) {
    this.appService.pageTitle = 'Modals - UI elements';
    this.isIE10 = this.appService.isIE10;
  }

  //
  // Bootstrap Modals
  //

  open(content, options = {}) {
    this.modalService.open(content, options).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  //
  // ngx-sweetalert2
  //

  checkboxValidation(result) {
    return new Promise(function(resolve, reject) {
      if (result) {
        resolve();
      } else {
        reject('You need to agree with T&C');
      }
    });
  }
}
