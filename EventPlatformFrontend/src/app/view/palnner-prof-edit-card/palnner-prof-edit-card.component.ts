import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PlannerService} from '../../service/planner.service';
import {DataExchangeService} from "../../service/dataExchange.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-palnner-prof-edit-card',
  templateUrl: './palnner-prof-edit-card.component.html',
  styleUrls: ['./palnner-prof-edit-card.component.css']
})
export class PalnnerProfEditCardComponent implements OnInit {

  isCollapsed: any = true;
  istwoCollapsed: any = true;
  isthirdCollapsed: any = true;
  islastCollapsed: any = true;

  bsModalRef: BsModalRef;
  modalRef: BsModalRef;

  plannerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    quote: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(300)]),
    address: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    telephone: new FormControl('', [Validators.required, Validators.maxLength(13)]),
    facebook: new FormControl(''),
    instagram: new FormControl(''),
    linkedin: new FormControl(''),
  });


  constructor(private modalService: BsModalService, private plannerService: PlannerService,
              private dataExchangeService: DataExchangeService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  send: SendModel = {
    user_id: '',
    p_name: '',
    quote: '',
    about: '',
    address: '',
    tel_number: '',
    fb_link: '',
    inst_link: '',
    linked_link: '',
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalWithComponent() {
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  getErrorMessage() {
    if (this.plannerForm.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.plannerForm.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  assignValuesForTheSendModel(planner) {
    console.log(planner.value.name);
    console.log(planner.value.quote);
    console.log(planner.value.description);
    console.log(this.dataExchangeService.userId, 'hello');
    this.send.user_id = this.dataExchangeService.userId;
    this.send.p_name = planner.value.name;
    this.send.quote = planner.value.quote;
    this.send.about = planner.value.description;
    this.send.tel_number = planner.value.telephone;
    this.send.address = planner.value.address;
    this.send.fb_link = planner.value.facebook;
    this.send.inst_link = planner.value.instagram;
    this.send.linked_link = planner.value.linkedin;
  }

  savePlanner(plannerForm): void {
    console.log(plannerForm);
    this.assignValuesForTheSendModel(plannerForm);
    console.log('prof save', this.send);
    if (plannerForm.valid) {
        this.plannerService.savePlanner(this.send).subscribe(
          data => {
            console.log('success!');
            console.log(data);
            if (data != null) {
              this.dataExchangeService.planner = data;
              console.log(this.dataExchangeService.planner);
              this.modalRef.hide();
              this.router.navigateByUrl('/plannerprofile');
            } else {
              console.log('planner name already taken!');
              this.openSnackBar('Profile name already taken!');
            }
          },
          error => {
            console.log('error:');
          }
        );
    }
  }

  openSnackBar(message) {
    this.snackBar.open(message, 'Cancel', {
      duration: 800,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }



}

export class SendModel {
  user_id: any;
  p_name: any;
  quote: any;
  about: any;
  address: any;
  tel_number: any;
  fb_link: any;
  inst_link: any;
  linked_link: any;
}
