public with sharing class AccountClassLwc {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){
    return [SELECT Id, Name, Type, Industry FROM Account WHERE TYPE !=Null LIMIT 5];
   }

   @AuraEnabled(cacheable=true)
   public static list<Account> filterAccountType(string type){
    return [SELECT Id, Name, Type, Industry FROM Account WHERE Type =: type LIMIT 5];
   }

   @AuraEnabled(cacheable=true)
   public static list<Account> findAccounts(string keyValue){
      string key = '%' + keyValue + '%';
      return [SELECT Id, Name, Type, Industry FROM Account WHERE Name LIKE : key LIMIT 5];
   }
}
