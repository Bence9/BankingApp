import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BankTransferDTO, UserDTO } from '../../models';
import { UserService } from '../app/services/user-service.service';
import { TransactionService } from '../app/services/transaction.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css'
})
export class TransactionFormComponent implements OnInit {

  formBuilder = inject(FormBuilder);

  userService = inject(UserService);

  transactionService = inject(TransactionService);

  users: UserDTO[] = [];

  transactionForm = this.formBuilder.group<BankTransferDTO>({
    id: 0,
    amount: 0,
    timestamp: '',
    source: null,
    destination: null
  });

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => this.users = users);
  }

  createTransaction(){
    const transaction = this.transactionForm.value as BankTransferDTO;
    console.log('IN', transaction);

    this.transactionService.create(transaction).subscribe(transactionAdded =>{
      console.log('OUT', transactionAdded);
    });
  }
}
