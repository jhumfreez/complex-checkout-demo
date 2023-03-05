import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { mockPurchasePlans } from '../shared/mocks/deal.mock';
import { PurchasePlanView } from '../shared/types/view-models/deal.model';
import { getValue } from '../shared/utilities'

@Component({
  selector: 'app-start-checkout',
  templateUrl: './start-checkout.component.html',
  styleUrls: ['./start-checkout.component.scss'],
})
export class StartCheckoutComponent implements OnInit {
  taxId: string;
  purchasePlans: PurchasePlanView[] = mockPurchasePlans;
  getValue = getValue;
  constructor() {
    this.taxId = '';
  }
  
  ngOnInit() {}

  onTaxIdChanged(taxId: string) {
    console.log(taxId);
    this.taxId = taxId;
  }
}
