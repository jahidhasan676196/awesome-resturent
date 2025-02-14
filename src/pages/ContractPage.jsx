import React from 'react';

import contractImg from '../assets/contact/banner.jpg'

import LocationSection from '../components/LocationSection';
import ContractForm from '../components/ContractForm';
import { Helmet } from 'react-helmet-async';
import Cover from '../sharedComponent/Cover';
import Title from '../sharedComponent/Title';

const ContractPage = () => {
    return (
        <div>
            <Helmet>
                <title>Bisto boss | Contract</title>
            </Helmet>
            <Cover coverImg={contractImg} title='CONTACT US' description='Would you like to try a dish?'></Cover>
            <Title subHeading='---Visit Us---' Heading='OUR LOCATION'></Title>
            <LocationSection></LocationSection>
            <ContractForm></ContractForm>
        </div>
    );
};

export default ContractPage;