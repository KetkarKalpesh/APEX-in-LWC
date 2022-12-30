import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountClassLwc.findAccounts';

export default class ApexImperativeWithParameters extends LightningElement {
    searchKey=''
    accounts

    handleChange(event){
        this.searchKey = event.target.value
        this.timer = setTimeout(() => {
            this.callApex()
        }, 2000)
    }

    callApex(){
        findAccounts({keyValue : this.searchKey})
        .then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.error(error)
        }) 
    }
}