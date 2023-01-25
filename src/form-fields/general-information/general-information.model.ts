export interface GeneralInformationInterface {
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    degreeTitles: string;
    statesOfPractice: string;
    primaryPractitionerType: string;
    otherNames: [OtherNamesInterface];
    defaultCountry: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    state: string;
    zipCode: string;
    telephoneNumber: string;
    faxNumber: string;
    unlistedNumber: boolean;
    mobileNumber: string;
    pageNumber: string;
    ext: string;
    emailAddress: string;
}

export interface OtherNamesInterface {
    nameType: string;
    dateStartedUsing: Date;
    dateStoppedUsing: Date;
    currentlyInUse: boolean;
    otherFirstName: string;
    otherMiddleName: string;
    otherLastName: string;
    otherSuffix: string;
}
