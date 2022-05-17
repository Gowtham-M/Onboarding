import { Injectable } from '@angular/core';
import { Address, Bank } from './entities/bank';
import { User } from './entities/user';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  // ****
  static currentUser:any
  // static currentUser: User | null = null
  getCurrentUser() { return DbService.currentUser }
  setCurrentUser(user: any) { DbService.currentUser = user }

  

  getUser(username: string) {
    // return this.users.find(user => user.username == username)
  }

  getUsers(){
    // return this.users
  }

  addUser(user: User) {
    // this.users.push(user)
  }

  banks:  Bank[] = [
    new Bank('DEUTDEFFXXX', 'DEUTSCHE BANK AG', 'Deutsche Bank Frankfurt F',
    new Address(['TAUNUSANLAGE 12'], 'FRANKFURT AM MAIN', 'HESSE', 60262, 'GERMANY', 'DE'), ['EUR'], ['X'], 'Pending')
  ]

  getBanksBy(status: string): Bank[] {
    return this.banks.filter(bank => bank.status == status)
  }

  approveBank(bic: string) {
    let index = this.banks.findIndex(bank => bank.bic == bic)
    this.banks[index].status = 'Approved'
  }

  getBank(bic: string) {
    return this.banks.find(bank => bank.bic == bic)
  }

  getBankRef(bic: string) {
    return this.banks.find(bank => bank.bic == bic)
  }
}
