/*
Developer Name : Amruta Jadhav
Created On : 03/08/2023
Last Modified On : 07/08/2023
Description : To retrieve contact records
*/
public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [ SELECT Id, FirstName,LastName,Email FROM Contact WITH SECURITY_ENFORCED];
    }
}