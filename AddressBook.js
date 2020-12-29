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
            let phoneRegex = RegExp('[91 ]{3}[789]{1}\\d{9}');
            if(phoneRegex.test(phone)){
                this._phone = phone;
            }else{
                throw 'Phone number is Incorrect';
            }
        }

        get email(){ return this._email; }
        set email(email){
            let emailRegex = RegExp('^[a-zA-Z]+([._+-]{0,1}[a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}+(?:\\.[a-z]{2,}){0,1}$');
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
    try{
        let addressBookData = new AddressBookContacts("Alex", "Mark", "1st-cross", "Mumbai", "Maharashtra", 400076, 998866, "alex@abc.com");
        console.log(addressBookData.toString());
    }catch(e){
        console.error(e);
    }
}