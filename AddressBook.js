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
        set firstname(firstname){ this._firstname = firstname; }

        get lastname() { return this._lastname; }
        set lastname(lastname){ this._lastname = lastname; }

        get address(){ return this._address; }
        set address(address){ this._address = address; }

        get city(){ return this._city; }
        set city(city){ this._city = city; }

        get state(){ return this._state; }
        set state(state){ this._state = state; }

        get zip(){ return this._zip; }
        set zip(zip){ return this._zip = zip; }

        get phone(){ return this._phone; }
        set phone(phone){ this._phone = phone; }

        get email(){ return this._email; }
        set email(email){ this._email = email; }

        //method
        toString(){
            return "FirstName=" + this.firstname + ", LastName='" + this.lastname + ", Address=" + this.address + ", "+
                   "City=" + this.city + ", State=" + this.state + ", Zip=" + this.zip + ", Phone=" + this.phone + ", EmailID=" +this.email;
        }
    }

    console.log(".......................Welcome to AddressBook Program!!!!.......................");
    let addressBookData = new AddressBookContacts("Alex", "Mark", "1st-cross", "Mumbai", "Maharashtra", 400076, 998866, "alex@abc.com");
    console.log(addressBookData.toString());
}