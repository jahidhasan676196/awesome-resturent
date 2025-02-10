import React from 'react';
import Cover from '../components/Cover';
import contractImg from '../assets/contact/banner.jpg'
import Title from '../components/Title';
import LocationSection from '../components/LocationSection';
import ContractForm from '../components/ContractForm';

const ContractPage = () => {
    return (
        <div>
            <Cover coverImg={contractImg} title='CONTACT US' description='Would you like to try a dish?'></Cover>
            <Title subHeading='---Visit Us---' Heading='OUR LOCATION'></Title>
            <LocationSection></LocationSection>
            <ContractForm></ContractForm>
        </div>
    );
};

export default ContractPage;