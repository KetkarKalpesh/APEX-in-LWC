import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountClassLwc.getAccounts';

export default class AccountDataComponent extends LightningElement {
    accountList = []

    @wire(getAccounts)
    accounts

    @wire(getAccounts)
    retriveAccounts({error, data}){
        if(data){
            this.accountList = data.map(item=>{
            let newType = item.type === 'Customer - Channel' ? 'Channel':
            item.type === 'Customer - Direct' ? 'Direct':'----'
            return {...item, newType}
        })
        }
    
       if(error){
        console.log(error)
       } 
    }
}