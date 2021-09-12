import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-vendor-pro-edit-card',
  templateUrl: './vendor-pro-edit-card.component.html',
  styleUrls: ['./vendor-pro-edit-card.component.css']
})
export class VendorProEditCardComponent implements OnInit {

  isCollapsed: any = true;
  istwoCollapsed: any = true;
  isthirdCollapsed: any = true;
  islastCollapsed: any = true;

  bsModalRef: BsModalRef;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalWithComponent() {
    this.bsModalRef.content.closeBtnName = 'Close';
  
}

}
