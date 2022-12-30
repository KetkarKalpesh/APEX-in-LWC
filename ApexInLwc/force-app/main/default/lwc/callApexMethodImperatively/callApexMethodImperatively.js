import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountClassLwc.getAccounts';

export default class CallApexMethodImperatively extends LightningElement {
    accounts

    handleClick(){
        getAccounts().then(result=>{
            this.accounts = result
        }).catch(error=>{
            console.log(error)
        })
    }
}