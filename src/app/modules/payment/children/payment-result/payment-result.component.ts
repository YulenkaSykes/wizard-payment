import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-result',
  templateUrl: './payment-result.component.html',
  styleUrls: ['./payment-result.component.scss']
})
export class PaymentResultComponent {

  constructor(private router: Router) {
  }

  viewResult(): void {
    this.router.navigate(['/'])
  }
}
