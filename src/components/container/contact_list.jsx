import React from 'react';
import PropTypes from 'prop-types';
import ContactComponent from '../pure/contact';
import { Contact } from '../../models/contact.class';


const ContactList = () => {

    const defaultContact = new Contact("Cristian", "Moreno", "cristian@gmail.com", false)
    return (
        <div>
            <ContactComponent contact={defaultContact} />
        </div>
    );
};


ContactList.propTypes = {

};


export default ContactList;
