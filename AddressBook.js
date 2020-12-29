{
    class AddressBookContacts{
        //constructor
        constructor(...params){
            this.firstname = params[0];
            this.lastname = params[1];
            this.address = params[2];
            this.city = params[3];
            this.state = params[4];
            this.zip = params[5];
            this.phone = params[6];
            this.email = params[7];
        }

        //getter and setters
        get firstname() { return this._firstname; }
        set firstname(firstname) {
            let firstnameRegex = RegExp('^[A-Z][A-Z a-z]{3,25}$');
            if(firstnameRegex.test(firstname)){
                this._firstname = firstname;
            }else{
                throw 'FirstName is Incorrect';
            }
        }

        get lastname() { return this._lastname; }
        set lastname(lastname){
            let lastnameRegex = RegExp('^[A-Z][A-Z a-z]{3,25}$');
            if(lastnameRegex.test(lastname)){
                this._lastname = lastname;
            }else{
                throw 'LastName is Incorrect';
            }
        }

        get address(){ return this._address; }
        set address(address){
            if(address.length >= 4){
                this._address = address;
            }else{
                throw 'Address is Incorrect';
            }
        }

        get city(){ return this._city; }
        set city(city){
            if(city.length >= 4){
                this._city = city;
            }else{
                throw 'City is Incorrect';
            }
        }

        get state(){ return this._state; }
        set state(state){
            if(state.length >= 4){
                this._state = state;
            }else{
                throw 'State is Incorrect';
            }
        }

        get zip(){ return this._zip; }
        set zip(zip){
            let ZipRegex = RegExp('^[1-9]{1}[0-9]{5}$');
            if(ZipRegex.test(zip)){
                this._zip = zip;
            }else{
                throw 'ZipCode is Incorrect';
            }
        }

        get phone(){ return this._phone; }
        set phone(phone){
            let phoneRegex = RegExp('^[0-9]{2} [0-9]{10}$');
            if(phoneRegex.test(phone)){
                this._phone = phone;
            }else{
                throw 'Phone number is Incorrect';
            }
        }

        get email(){ return this._email; }
        set email(email){
            let emailRegex = RegExp( "^[a-zA-Z0-9]+[_+-.]?[a-zA-Z0-9]*[a-zA-Z0-9]@[a-zA-Z0-9]+([.][a-zA-Z]{2,4})([.][a-zA-Z]{2,4})?$");
            if(emailRegex.test(email)){
                this._email = email;
            }else{
                throw 'Email ID is Incorrect';
            }
        }

        //method
        toString(){
            return "FirstName=" + this.firstname + ", LastName='" + this.lastname + ", Address=" + this.address + ", "+
                   "City=" + this.city + ", State=" + this.state + ", Zip=" + this.zip + ", Phone=" + this.phone + ", EmailID=" +this.email;
        }
    }

    console.log(".......................Welcome to AddressBook Program!!!!.......................");
    console.log("UC2 - Adding contact details in addressBook Array");
    let addressBookArray = new Array();
    try{
        addressBookArray.push(
            new AddressBookContacts("Alex", "Rexbell", "1st-cross", "Mumbai", "maharashtra", 400076, "91 9894118421", "alex@abc.com")
        );
        addressBookArray.push(
            new AddressBookContacts("Tommy", "Catty", "2nd-cross", "bangalore", "karnataka", 123456, "91 9988776654", "tommy@abc.com")
        );
        addressBookArray.push(
            new AddressBookContacts("Murali", "Hello", "3rd-cross", "chennai", "tamilnadu", 620019, "91 9597231495", "murali@abc.com")
        );
        addressBookArray.push(
            new AddressBookContacts("Priya", "Shankar", "4th-cross", "mumbai", "maharashtra", 456789, "91 9876543212", "priya@abc.com")
        );
    }catch(e){
        console.error(e);
    }
    console.log(addressBookArray.toString());

    //UC3 Find contact and edit details
    console.log("UC3 - Find contact and edit details");
    function findContact(firstName){
        let contactObject;
        addressBookArray.forEach((c) => {
            if(c.firstname == firstName){
                contactObject = c;
            }
        });
        return contactObject;
    }

    function editContactDetails(contact, editedValue, attribute){
        try {
            switch (attribute) {
              case "firstname":
                contact.firstName = editedValue;
                break;
              case "lastname":
                contact.lastname = editedValue;
                break;
              case "address":
                contact.address = editedValue;
                break;
              case "city":
                contact.city = editedValue;
                break;
              case "state":
                contact.state = editedValue;
                break;
              case "zip":
                contact.zip = editedValue;
                break;
              case "phone":
                contact.phone = editedValue;
                break;
              case "email":
                contact.email = editedValue;
                break;
              default:
                break;
            }
        }catch(e){
            console.error("Editing contacts details cannot be done");
        }
    }
    let newContact = findContact("Murali");
    editContactDetails(newContact, "Karthick", "lastname");
    console.log(newContact.toString());

    //UC5 - find Contact and delete
    console.log("UC5 - Find contact and edit details");
    function deleteContact(firstName) {
        let contact = findContact(firstName);
        addressBookArray.splice(addressBookArray.indexOf(contact), 1);
    }
      
    deleteContact("Tommy");
    console.log(addressBookArray);

    //UC6 - count entries from addressBook
    console.log("UC6 - Count entries from addressBook");
    let countEntries = addressBookArray.reduce((count) => count += 1, 0);
    console.log(countEntries);
}