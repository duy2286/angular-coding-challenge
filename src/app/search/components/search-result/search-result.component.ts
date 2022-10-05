import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ImageModel} from '../../../models/image';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent implements OnInit {
  @Input() listImages: ImageModel[] = [];
  modalRef?: BsModalRef;
  config = {
    animated: true
  };
  constructor(public modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<any>, item: ImageModel) {
    this.modalRef = this.modalService.show(template, {initialState: item});
  }
}
