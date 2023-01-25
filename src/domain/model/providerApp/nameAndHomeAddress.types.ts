import { createInterface } from 'readline';

export interface OtherNames {
    uid: string;
    nameType: string;
    dateStartedUsing: string;
    dateStoppedUsing: string;
    currentlyInUse: true;
    otherFirstName: string;
    otherMiddleName: string;
    otherLastName: string;
    otherSuffix: string;
}

export interface NameAndHomeAddressType {
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    degreeTitles: string;
    statesOfPractice: string[];
    primaryPractitionerType: string;
    otherNames: OtherNames[];
    addressSearch: 'Rosario, La Union, Ilocos Region, 2506, Philippines';
    defaultCountry: '';
    addressLine1: '  Road 2 Purok 5';
    addressLine2: 'Cataguingtingan';
    city: 'Rosario';
    country: 'Philippines';
    county: '';
    state: 'La Union';
    zipCode: '2506';
    telephoneNumber: '09271693073';
    faxNumber: '982';
    unlistedNumber: true;
    mobileNumber: '09271693073';
    pageNumber: '092701';
    ext: '1212';
    emailAddress: 'johnDoe@email.com';
}
