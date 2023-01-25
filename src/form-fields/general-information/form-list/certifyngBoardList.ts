const certifyingBoardList = [
    {
        id: '1',
        label: 'Academy of Certified Social Workers',
        addressLine1: '750 First Street NE',
        addressLine2: 'Suite 700',
        city: 'Washington',
        zipCode: '20002',
        telephoneNumber: '2024088600',
        state: { id: '1', label: 'DC' }
    },
    {
        id: '2',
        label: 'ACNM Certification Council',
        addressLine1: '849 International Drive',
        addressLine2: 'Suite 205',
        city: 'Linthicum',
        zipCode: '21090',
        telephoneNumber: '(410) 694-94…',
        state: { id: '2', label: 'MD' }
    },
    {
        id: '3',
        label: 'American Academy of Ambulatory Care Nursing',
        addressLine1: 'East Holly Avenue',
        addressLine2: 'Box 56',
        city: 'Pitman',
        zipCode: '8071',
        telephoneNumber: '8002626877',
        state: { id: '3', label: 'NJ' }
    },
    {
        id: '4',
        label: 'American Academy of Anesthesiologist Assista…',
        addressLine1: '2209 Dickens Road',
        addressLine2: '',
        city: 'Richmond',
        zipCode: '23230',
        telephoneNumber: '8045656353',
        state: { id: '4', label: 'VA' }
    },
    {
        id: '5',
        label: 'American Academy of Audiology',
        addressLine1: '11730 Plaza America Dr…',
        addressLine2: 'Suite 300',
        city: 'Reston',
        zipCode: '20190',
        telephoneNumber: '8002222336',
        state: { id: '5', label: 'VA' }
    },
    {
        id: '6',
        label: 'American Academy of Experts in Traumatic Stre…',
        addressLine1: '8 Arlington Street',
        addressLine2: '',
        city: 'Melville',
        zipCode: '11747',
        telephoneNumber: '6315432217',
        state: { id: '6', label: 'NY' }
    },
    {
        id: '7',
        label: 'American Academy of Health Providers in the A…',
        addressLine1: '314 West Superior Street',
        addressLine2: 'Suite 508',
        city: 'Duluth',
        zipCode: '55802',
        telephoneNumber: '2187223940',
        state: { id: '7', label: 'MN' }
    },
    {
        id: '8',
        label: 'American Academy of Medical Acupuncture',
        addressLine1: '1970 E. Grand Avenue',
        addressLine2: 'Suite 330',
        city: 'El Segundo',
        zipCode: '90245',
        telephoneNumber: '3103640193',
        state: { id: '8', label: 'CA' }
    },
    {
        id: '9',
        label: 'American Academy of Nurse Practitioners',
        addressLine1: 'P.O. Box 12846',
        addressLine2: '',
        city: 'Austin',
        zipCode: '78711',
        telephoneNumber: '5124424262',
        state: { id: '9', label: 'TX' }
    },
    {
        id: '10',
        label: 'American Academy of Nursing',
        addressLine1: '888 17th Street NW',
        addressLine2: 'Suite 800',
        city: 'Washington',
        zipCode: '20006',
        telephoneNumber: '2027771170',
        state: { id: '10', label: 'DC' }
    },
    {
        id: '11',
        label: 'American Academy of Optometry',
        addressLine1: '6110 Executive Bouleva…',
        addressLine2: 'Suite 506',
        city: 'Rockville',
        zipCode: '20852',
        telephoneNumber: '3019841441',
        state: { id: '11', label: 'MD' }
    },
    {
        id: '12',
        label: 'American Academy of Physician Assistants',
        addressLine1: '950 North Washington S…',
        addressLine2: '',
        city: 'Alexandria',
        zipCode: '22314',
        telephoneNumber: '7038362272',
        state: { id: '12', label: 'VA' }
    },
    {
        id: '13',
        label: 'American Association for Marriage and Family T…',
        addressLine1: '112 South Alfred Street',
        addressLine2: '',
        city: 'Alexandria',
        zipCode: '22314',
        telephoneNumber: '7038389808',
        state: { id: '13', label: 'VA' }
    },
    {
        id: '14',
        label: 'American Association of Critical Care Nurses',
        addressLine1: '101 Columbia',
        addressLine2: '',
        city: 'Aliso Viejo',
        zipCode: '92656',
        telephoneNumber: '9493622050',
        state: { id: '14', label: 'CA' }
    },
    {
        id: '15',
        label: 'American Association of Nurse Anesthetists',
        addressLine1: '222 S. Prospect Avenue',
        addressLine2: '',
        city: 'Park Ridge',
        zipCode: '60068',
        telephoneNumber: '8476927050',
        state: { id: '15', label: 'IL' }
    },
    {
        id: '16',
        label: 'American Association of Pastoral Counselors',
        addressLine1: '9504A Lee Highway',
        addressLine2: '',
        city: 'Fairfax',
        zipCode: '22031',
        telephoneNumber: '7033856967',
        state: { id: '16', label: 'VA' }
    },
    {
        id: '17',
        label: 'American Association of Sex Educators, Couns…',
        addressLine1: 'P.O. Box 1960',
        addressLine2: '',
        city: 'Ashland',
        zipCode: '23005',
        telephoneNumber: '8047520056',
        state: { id: '17', label: 'VA' }
    },
    {
        id: '18',
        label: 'American Board Medical Psychotherapists',
        addressLine1: '',
        addressLine2: '',
        city: '',
        zipCode: '',
        telephoneNumber: '',
        state: { id: '18', label: 'NU…' }
    },
    {
        id: '19',
        label: 'American Board of Examiners in Clinical Social…',
        addressLine1: '27 Congress Street',
        addressLine2: 'Suite 501',
        city: 'Salem',
        zipCode: '1970',
        telephoneNumber: '8006945285',
        state: { id: '19', label: 'MA' }
    },
    {
        id: '20',
        label: 'American Board of Medical Psychotherapists &…',
        addressLine1: '',
        addressLine2: '',
        city: '',
        zipCode: '',
        telephoneNumber: '',
        state: { id: '20', label: 'NU…' }
    },
    {
        id: '21',
        label: 'American Board of Nursing Specialties',
        addressLine1: '610 Thornill Lane',
        addressLine2: '',
        city: 'Aurora',
        zipCode: '44202',
        telephoneNumber: '3309959172',
        state: { id: '21', label: 'OH' }
    },
    {
        id: '22',
        label: 'American Board of Nutrition',
        addressLine1: '6855 Browtonw Road',
        addressLine2: '',
        city: 'Front Royal',
        zipCode: '22630',
        telephoneNumber: '5406358844',
        state: { id: '22', label: 'VA' }
    },
    {
        id: '23',
        label: 'American Board of Physical Therapy Specialties',
        addressLine1: '1111 North Fairfax Street',
        addressLine2: '',
        city: 'Alexandria',
        zipCode: '22314',
        telephoneNumber: '7035842782',
        state: { id: '23', label: 'VA' }
    },
    {
        id: '24',
        label: 'American Board of Professional Psychology',
        addressLine1: '600 Market Street',
        addressLine2: 'Suite 300',
        city: 'Chapel Hill',
        zipCode: '27516',
        telephoneNumber: '9195378031',
        state: { id: '24', label: 'NC' }
    },
    {
        id: '25',
        label: 'American Naturopath Certification Board',
        addressLine1: '101 East Broadway',
        addressLine2: 'Suite 415',
        city: 'Missoula',
        zipCode: '59802',
        telephoneNumber: '4065436154',
        state: { id: '25', label: 'MT' }
    },
    {
        id: '26',
        label: 'American Nurses Credentialing Center',
        addressLine1: '8515 Georgia Avenue',
        addressLine2: 'Suite 400',
        city: 'Silver Spri…',
        zipCode: '20910',
        telephoneNumber: '8002842378',
        state: { id: '26', label: 'MD' }
    },
    {
        id: '27',
        label: 'American Psychological Association',
        addressLine1: '750 First Street NE',
        addressLine2: '',
        city: 'Washington',
        zipCode: '20002',
        telephoneNumber: '2023365500',
        state: { id: '27', label: 'DC' }
    },
    {
        id: '28',
        label: 'American Psychological Society',
        addressLine1: '1133 15th Street NW',
        addressLine2: 'Suite 10…',
        city: 'Washington',
        zipCode: '20005',
        telephoneNumber: '2022939300',
        state: { id: '28', label: 'DC' }
    },
    {
        id: '29',
        label: 'American Psychotherapy Association',
        addressLine1: '2750 E. Sunshine Street',
        addressLine2: '',
        city: 'Springfield',
        zipCode: '65804',
        telephoneNumber: '4178230173',
        state: { id: '29', label: 'MO' }
    },
    {
        id: '30',
        label: 'American Society of Addiction Medicine',
        addressLine1: '4601 N Park Aveneu',
        addressLine2: 'Upper A…',
        city: 'Chevy Ch…',
        zipCode: '20815',
        telephoneNumber: '3016563920',
        state: { id: '30', label: 'MD' }
    },
    {
        id: '31',
        label: 'American Speech-Language-Hearing Associati…',
        addressLine1: '2200 Research Boulevard',
        addressLine2: '',
        city: 'Rockville',
        zipCode: '20850',
        telephoneNumber: '8006388255',
        state: { id: '31', label: 'MD' }
    },
    {
        id: '32',
        label: 'Biofeedback Certification Institute of America',
        addressLine1: '10200 W 44th Avenue',
        addressLine2: 'Suite 310',
        city: 'Wheat Rid…',
        zipCode: '80033',
        telephoneNumber: '3034202902',
        state: { id: '32', label: 'CO' }
    },
    {
        id: '33',
        label: 'Board of Pharmaceutical Specialties',
        addressLine1: '2215 Constitution Avenu…',
        addressLine2: '',
        city: 'Washington',
        zipCode: '20037',
        telephoneNumber: '2024297591',
        state: { id: '33', label: 'DC' }
    },
    {
        id: '34',
        label: 'Commission on Dietetic Registration',
        addressLine1: '120 South Riverside Pla…',
        addressLine2: 'Suite 20…',
        city: 'Chicago',
        zipCode: '60606',
        telephoneNumber: '3128990040',
        state: { id: '34', label: 'IL' }
    },
    {
        id: '35',
        label: 'Employee Assistance Professionals Association',
        addressLine1: '4350 North Fairfax Drive',
        addressLine2: 'Suite 410',
        city: 'Arlington',
        zipCode: '22203',
        telephoneNumber: '7033871000',
        state: { id: '35', label: 'VA' }
    },
    {
        id: '36',
        label: 'National Association for the Advancement of Ps…',
        addressLine1: '80 Eigth Avenue',
        addressLine2: 'Suite 15…',
        city: 'New York',
        zipCode: '10011',
        telephoneNumber: '2127410515',
        state: { id: '36', label: 'NY' }
    },
    {
        id: '37',
        label: 'National Association of Boards of Pharmacy',
        addressLine1: '1600 Feehanville Drive',
        addressLine2: '',
        city: 'Mount Pro…',
        zipCode: '60056',
        telephoneNumber: '8473914406',
        state: { id: '37', label: 'IL' }
    },
    {
        id: '38',
        label: 'National Association of Nurse Anesthetists',
        addressLine1: '222 S. Prospect Avenue',
        addressLine2: '',
        city: 'Park Ridge',
        zipCode: '60068',
        telephoneNumber: '8476927050',
        state: { id: '38', label: 'IL' }
    },
    {
        id: '39',
        label: 'National Association of School Psychologists',
        addressLine1: '4340 East West Highway',
        addressLine2: 'Suite 402',
        city: 'Bethesda',
        zipCode: '20814',
        telephoneNumber: '3016570270',
        state: { id: '39', label: 'MD' }
    },
    {
        id: '40',
        label: 'National Association of Social Workers',
        addressLine1: '750 First Street NE',
        addressLine2: 'Suite 700',
        city: 'Washington',
        zipCode: '20002',
        telephoneNumber: '2024088600',
        state: { id: '40', label: 'DC' }
    },
    {
        id: '41',
        label: 'National Board for Certification in Occupational…',
        addressLine1: '12 S. Summit Avenue',
        addressLine2: 'Suite 100',
        city: 'Gaithersb…',
        zipCode: '20877',
        telephoneNumber: '3019907979',
        state: { id: '41', label: 'MD' }
    },
    {
        id: '42',
        label: 'National Board for Certification of Orthopaedic…',
        addressLine1: '8365 Keystone Crossing',
        addressLine2: 'Suite 107',
        city: 'Indianapolis',
        zipCode: '46240',
        telephoneNumber: '8002802390',
        state: { id: '42', label: 'IN' }
    },
    {
        id: '43',
        label: 'National Board for Certified Clinical Hypnothera…',
        addressLine1: '1110 Fidler Lane',
        addressLine2: 'Suite 12…',
        city: 'Silver Spri…',
        zipCode: '20910',
        telephoneNumber: '3015880123',
        state: { id: '43', label: 'MD' }
    },
    {
        id: '44',
        label: 'National Board for Certified Counselors',
        addressLine1: '3 Terrace Way',
        addressLine2: '',
        city: 'Greensboro',
        zipCode: '27403',
        telephoneNumber: '3365470607',
        state: { id: '44', label: 'NC' }
    },
    {
        id: '45',
        label: 'National Board for Respiratory Care',
        addressLine1: '18000 W. 105th Street',
        addressLine2: '',
        city: 'Olathe',
        zipCode: '66061',
        telephoneNumber: '9138954900',
        state: { id: '45', label: 'KS' }
    },
    {
        id: '46',
        label: 'National Board of Addiction Examiners',
        addressLine1: '',
        addressLine2: '',
        city: '',
        zipCode: '',
        telephoneNumber: '',
        state: { id: '46', label: 'NU…' }
    },
    {
        id: '47',
        label: 'National Board of Cognitive Behavioral Therapi…',
        addressLine1: '203 Three Springs Drive',
        addressLine2: 'Suite 4',
        city: 'Weirton',
        zipCode: '26062',
        telephoneNumber: '8008531135',
        state: { id: '47', label: 'WV' }
    },
    {
        id: '48',
        label: 'National Board of Examiners in Optometry',
        addressLine1: '200 S College Street',
        addressLine2: '#1920',
        city: 'Charlotte',
        zipCode: '28202',
        telephoneNumber: '7043329565',
        state: { id: '48', label: 'NC' }
    },
    {
        id: '49',
        label: 'National Certification Board for Therapeutic Mas…',
        addressLine1: '1901 South Meyers Road',
        addressLine2: 'Suite 240',
        city: 'Oakbrook…',
        zipCode: '60181',
        telephoneNumber: '6306278000',
        state: { id: '49', label: 'IL' }
    },
    {
        id: '50',
        label: 'National Certification Commission for Acupunct…',
        addressLine1: '76 South Laura Street',
        addressLine2: 'Suite 12…',
        city: 'Jacksonvil…',
        zipCode: '32202',
        telephoneNumber: '9045981005',
        state: { id: '50', label: 'FL' }
    },
    {
        id: '51',
        label: 'National Institute for Standards in Pharmacist C…',
        addressLine1: '2215 Constitution Avenu…',
        addressLine2: '',
        city: 'Washington',
        zipCode: '20037',
        telephoneNumber: '2024294112',
        state: { id: '51', label: 'DC' }
    },
    {
        id: '52',
        label: 'American Board of Addiction Medicine',
        addressLine1: '4601 N. Park Avenue',
        addressLine2: 'Upper…',
        city: 'Chevy Ch…',
        zipCode: '20815',
        telephoneNumber: '3016563920',
        state: { id: '52', label: 'MD' }
    },
    {
        id: '53',
        label: 'American Board of Allergy & Immunology',
        addressLine1: '111 S. Independence M…',
        addressLine2: 'Suite 701',
        city: 'Philadelph…',
        zipCode: '19106',
        telephoneNumber: '2155929466',
        state: { id: '53', label: 'PA' }
    },
    {
        id: '54',
        label: 'American Board of Anesthesiology',
        addressLine1: '4208 Six Forks Road',
        addressLine2: 'Suite 900',
        city: 'Raleigh',
        zipCode: '27609',
        telephoneNumber: '9197452200',
        state: { id: '54', label: 'NC' }
    },
    {
        id: '55',
        label: 'American Board of Colon & Rectal Surgery',
        addressLine1: '20600 Eureka Road',
        addressLine2: 'Suite 600',
        city: 'Taylor',
        zipCode: '48180',
        telephoneNumber: '7342829400',
        state: { id: '55', label: 'MI' }
    },
    {
        id: '56',
        label: 'American Board of Dermatology',
        addressLine1: 'Henry Ford Health Syste…',
        addressLine2: '1 Ford…',
        city: 'Detroit',
        zipCode: '48202',
        telephoneNumber: '3138741088',
        state: { id: '56', label: 'MI' }
    },
    {
        id: '57',
        label: 'American Board of Emergency Medicine',
        addressLine1: '3000 Coolidge Road',
        addressLine2: '',
        city: 'East Lansi…',
        zipCode: '48823',
        telephoneNumber: '5173324800',
        state: { id: '57', label: 'MI' }
    },
    {
        id: '58',
        label: 'American Board of Endodontics',
        addressLine1: '211 E. Chicago Avenue',
        addressLine2: 'Suite 11…',
        city: 'Chicago',
        zipCode: '60611',
        telephoneNumber: '3122667310',
        state: { id: '58', label: 'IL' }
    },
    {
        id: '59',
        label: 'American Board of Family Medicine',
        addressLine1: '1648 McGrathiana Park…',
        addressLine2: '5th Floor',
        city: 'Lexington',
        zipCode: '40511',
        telephoneNumber: '8592695626',
        state: { id: '59', label: 'KY' }
    },
    {
        id: '60',
        label: 'American Board of Internal Medicine',
        addressLine1: '510 Walnut Street',
        addressLine2: 'Suite 17…',
        city: 'Philadelph…',
        zipCode: '19106',
        telephoneNumber: '2154463500',
        state: { id: '60', label: 'PA' }
    },
    {
        id: '61',
        label: 'American Board of Medical Genetics',
        addressLine1: '9650 Rockville Pike',
        addressLine2: '',
        city: 'Bethesda',
        zipCode: '20814',
        telephoneNumber: '3016347315',
        state: { id: '61', label: 'MD' }
    },
    {
        id: '62',
        label: 'American Board of Medical Specialists in Podiat…',
        addressLine1: '1350 Broadway',
        addressLine2: 'Suite 17…',
        city: 'New York',
        zipCode: '10018',
        telephoneNumber: '2123560690',
        state: { id: '62', label: 'NY' }
    },
    {
        id: '63',
        label: 'American Board of Neurological Surgery',
        addressLine1: '6550 Fannin Street',
        addressLine2: 'Suite 21…',
        city: 'Houston',
        zipCode: '77030',
        telephoneNumber: '7134416015',
        state: { id: '63', label: 'TX' }
    },
    {
        id: '64',
        label: 'American Board of Nuclear Medicine',
        addressLine1: '4555 Forest Park Boulev…',
        addressLine2: 'Suite 119',
        city: 'St. Louis',
        zipCode: '63108',
        telephoneNumber: '3143672225',
        state: { id: '64', label: 'MO' }
    },
    {
        id: '65',
        label: 'American Board of Obstetrics & Gynecology',
        addressLine1: '2915 Vine Street',
        addressLine2: 'Suite 300',
        city: 'Dallas',
        zipCode: '75204',
        telephoneNumber: '2148711619',
        state: { id: '65', label: 'TX' }
    },
    {
        id: '66',
        label: 'American Board of Occupational Medicine',
        addressLine1: '',
        addressLine2: '',
        city: '',
        zipCode: '',
        telephoneNumber: '',
        state: { id: '66', label: 'NU…' }
    },
    {
        id: '67',
        label: 'American Board of Ophthalmology',
        addressLine1: '111 Presidential Blvde.',
        addressLine2: 'Suite 241',
        city: 'Bala Cynw…',
        zipCode: '19004',
        telephoneNumber: '6106641175',
        state: { id: '67', label: 'PA' }
    },
    {
        id: '68',
        label: 'American Board of Oral & Maxillofacial Pathology',
        addressLine1: 'P.O. Box 25915',
        addressLine2: '',
        city: 'Tampa',
        zipCode: '33622',
        telephoneNumber: '8132862444',
        state: { id: '68', label: 'FL' }
    },
    {
        id: '69',
        label: 'American Board of Orthodontics',
        addressLine1: '401 N. Lindbergh Blvd.',
        addressLine2: 'Suite 308',
        city: 'St. Louis',
        zipCode: '62141',
        telephoneNumber: '3144326130',
        state: { id: '69', label: 'MO' }
    },
    {
        id: '70',
        label: 'American Board of Orthopaedic Surgery',
        addressLine1: '400 Silver Cedar Court',
        addressLine2: '',
        city: 'Chapel Hill',
        zipCode: '27514',
        telephoneNumber: '9199297103',
        state: { id: '70', label: 'NC' }
    },
    {
        id: '71',
        label: 'American Board of Otolaryngology',
        addressLine1: '5615 Kirby Drive #600',
        addressLine2: '',
        city: 'Houston',
        zipCode: '77005',
        telephoneNumber: '7138500399',
        state: { id: '71', label: 'TX' }
    },
    {
        id: '72',
        label: 'American Board of Pathology',
        addressLine1: '4830 Kennedy Blvd.',
        addressLine2: 'Suite 690',
        city: 'Tampa',
        zipCode: '33609',
        telephoneNumber: '8132862444',
        state: { id: '72', label: 'FL' }
    },
    {
        id: '73',
        label: 'American Board of Pediatric Dentistry',
        addressLine1: '325 E. Washington Street',
        addressLine2: 'Suite 208',
        city: 'Iowa City',
        zipCode: '52240',
        telephoneNumber: '3193418488',
        state: { id: '73', label: 'IA' }
    },
    {
        id: '74',
        label: 'American Board of Pediatrics',
        addressLine1: '111 Silver Cedar Court',
        addressLine2: '',
        city: 'Chapel Hill',
        zipCode: '27514',
        telephoneNumber: '9199290461',
        state: { id: '74', label: 'NC' }
    },
    {
        id: '75',
        label: 'American Board of Periodontology',
        addressLine1: '4157 Mountain Road',
        addressLine2: 'PBN 249',
        city: 'Pasadena',
        zipCode: '21122',
        telephoneNumber: '4104373749',
        state: { id: '75', label: 'MD' }
    },
    {
        id: '76',
        label: 'American Board of Physical Medicine & Rehabil…',
        addressLine1: '3015 Allegro Park Lane…',
        addressLine2: '',
        city: 'Rochester',
        zipCode: '55902',
        telephoneNumber: '5072821776',
        state: { id: '76', label: 'MN' }
    },
    {
        id: '77',
        label: 'American Board of Plastic Surgery',
        addressLine1: '"Seven Penn Center, Su…',
        addressLine2: '1635 M…',
        city: 'Philadelph…',
        zipCode: '19103',
        telephoneNumber: '2155879322',
        state: { id: '77', label: 'PA' }
    },
    {
        id: '78',
        label: 'American Board of Podiatric Orthopedics and Pr…',
        addressLine1: '3812 Sepulveda Boulev…',
        addressLine2: 'Suite 530',
        city: 'Torrance',
        zipCode: '90505',
        telephoneNumber: '3103750700',
        state: { id: '78', label: 'CA' }
    },
    {
        id: '79',
        label: 'American Board of Podiatric Surgery',
        addressLine1: '445 Fillmore Street',
        addressLine2: '',
        city: 'San Franc…',
        zipCode: '94117',
        telephoneNumber: '4155537800',
        state: { id: '79', label: 'CA' }
    },
    {
        id: '80',
        label: 'American Board of Preventive Medicine',
        addressLine1: '111 West Jackson Boule…',
        addressLine2: 'Suite 11…',
        city: 'Chicago',
        zipCode: '60604',
        telephoneNumber: '3129392276',
        state: { id: '80', label: 'IL' }
    },
    {
        id: '81',
        label: 'American Board of Prosthodontics',
        addressLine1: 'P.O. Box 271894',
        addressLine2: '',
        city: 'West Hartf…',
        zipCode: '6127',
        telephoneNumber: '8606792649',
        state: { id: '81', label: 'CT' }
    },
    {
        id: '82',
        label: 'American Board of Psychiatry & Neurology',
        addressLine1: '2150 E. Lake Cook Road',
        addressLine2: 'Suite 900',
        city: 'Buffalo Gr…',
        zipCode: '60089',
        telephoneNumber: '8472296500',
        state: { id: '82', label: 'IL' }
    },
    {
        id: '83',
        label: 'American Board of Public Health Dentistry',
        addressLine1: '',
        addressLine2: '',
        city: '',
        zipCode: '',
        telephoneNumber: '',
        state: { id: '83', label: 'NU…' }
    },
    {
        id: '84',
        label: 'American Board of Radiology',
        addressLine1: '5441 East Williams Blvd.',
        addressLine2: 'Suite 200',
        city: 'Tucson',
        zipCode: '85711',
        telephoneNumber: '5207902900',
        state: { id: '84', label: 'AZ' }
    },
    {
        id: '85',
        label: 'American Board of Surgery',
        addressLine1: '1617 John F. Kennedy B…',
        addressLine2: 'Suite 860',
        city: 'Philadelph…',
        zipCode: '19103',
        telephoneNumber: '2155684000',
        state: { id: '85', label: 'PA' }
    },
    {
        id: '86',
        label: 'American Board of Thoracic Surgery',
        addressLine1: '633 N. St Clair Street',
        addressLine2: 'Suite 23…',
        city: 'Chicago',
        zipCode: '60611',
        telephoneNumber: '3122025900',
        state: { id: '86', label: 'IL' }
    },
    {
        id: '87',
        label: 'American Board of Urology',
        addressLine1: '2216 Ivy Road',
        addressLine2: 'Suite 210',
        city: 'Charlottes…',
        zipCode: '22903',
        telephoneNumber: '4349790059',
        state: { id: '87', label: 'VA' }
    },
    {
        id: '88',
        label: 'American Council of Certified Podiatric Surgeon…',
        addressLine1: '"6421 Inkster Road, Ste…',
        addressLine2: '',
        city: 'Bloomfield…',
        zipCode: '48301',
        telephoneNumber: '2488557740',
        state: { id: '88', label: 'MI' }
    },
    {
        id: '89',
        label: 'American Osteopathic Board of Anesthesiology',
        addressLine1: '2260 E. Saginaw Street',
        addressLine2: 'Suite B',
        city: 'East Lansi…',
        zipCode: '48823',
        telephoneNumber: '5173390919',
        state: { id: '89', label: 'MI' }
    },
    {
        id: '90',
        label: 'American Osteopathic Board of Dermatology',
        addressLine1: '1501 East Illinois Street',
        addressLine2: 'P.O. Bo…',
        city: 'Kirksville',
        zipCode: '63501',
        telephoneNumber: '6606652184',
        state: { id: '90', label: 'MO' }
    },
    {
        id: '91',
        label: 'American Osteopathic Board of Emergency Me…',
        addressLine1: '142 E. Ontario Street',
        addressLine2: '',
        city: 'Chicago',
        zipCode: '60611',
        telephoneNumber: '3123351065',
        state: { id: '91', label: 'IL' }
    },
    {
        id: '92',
        label: 'American Osteopathic Board of Family Practice',
        addressLine1: '',
        addressLine2: '',
        city: '',
        zipCode: '',
        telephoneNumber: '',
        state: { id: '92', label: 'NU…' }
    },
    {
        id: '93',
        label: 'American Osteopathic Board of Internal Medicine',
        addressLine1: '1111 W. 17th Street',
        addressLine2: '',
        city: 'Tulsa',
        zipCode: '74107',
        telephoneNumber: '9185618287',
        state: { id: '93', label: 'OK' }
    },
    {
        id: '94',
        label: 'American Osteopathic Board of Neurology and…',
        addressLine1: '2730 S Val Vista Drive',
        addressLine2: '#146',
        city: 'Gilbert',
        zipCode: '85296',
        telephoneNumber: '4806503206',
        state: { id: '94', label: 'AZ' }
    },
    {
        id: '95',
        label: 'American Osteopathic Board of Neuromuskulos…',
        addressLine1: '3500 DePauw Blvd.',
        addressLine2: 'Suite 10…',
        city: 'Indianapolis',
        zipCode: '46268',
        telephoneNumber: '3178791881',
        state: { id: '95', label: 'IN' }
    },
    {
        id: '96',
        label: 'American Osteopathic Board of Nuclear Medicine',
        addressLine1: '142 East Ontario Street',
        addressLine2: '',
        city: 'Chicago',
        zipCode: '60611',
        telephoneNumber: '3122028227',
        state: { id: '96', label: 'IL' }
    },
    {
        id: '97',
        label: 'American Osteopathic Board of Obstetrics and…',
        addressLine1: '1010 Dixie Highway',
        addressLine2: 'Suite 313',
        city: 'Chicago H…',
        zipCode: '60411',
        telephoneNumber: '7087552490',
        state: { id: '97', label: 'IL' }
    },
    {
        id: '98',
        label: 'American Osteopathic Board of Ophthalmology…',
        addressLine1: 'P.O. Box 24810',
        addressLine2: '',
        city: 'Huber Hei…',
        zipCode: '45424',
        telephoneNumber: '9372359794',
        state: { id: '98', label: 'OH' }
    },
    {
        id: '99',
        label: 'American Osteopathic Board of Orthopedic Sur…',
        addressLine1: '800 Military Street',
        addressLine2: 'Suite 307',
        city: 'Port Huron',
        zipCode: '48060',
        telephoneNumber: '8779826267',
        state: { id: '99', label: 'MI' }
    },
    {
        id: '100',
        label: 'American Osteopathic Board of Pathology',
        addressLine1: '142 East Ontario Street',
        addressLine2: 'Floor 4',
        city: 'Chicago',
        zipCode: '60611',
        telephoneNumber: '8006211773',
        state: { id: '100', label: 'IL' }
    },
    {
        id: '101',
        label: 'American Osteopathic Board of Pediatrics',
        addressLine1: '142 East Ontario Street',
        addressLine2: 'Floor 4',
        city: 'Chicago',
        zipCode: '60611',
        telephoneNumber: '8006211773',
        state: { id: '101', label: 'IL' }
    },
    {
        id: '102',
        label: 'American Osteopathic Board of Preventive Medi…',
        addressLine1: '142 East Ontario Street',
        addressLine2: 'Floor 4',
        city: 'Chicago',
        zipCode: '60611',
        telephoneNumber: '8006211773',
        state: { id: '102', label: 'IL' }
    },
    {
        id: '103',
        label: 'American Osteopathic Board of Proctology',
        addressLine1: '2209 John R. Wooden D…',
        addressLine2: '',
        city: 'Martinsville',
        zipCode: '46151',
        telephoneNumber: '7653423686',
        state: { id: '103', label: 'IN' }
    },
    {
        id: '104',
        label: 'American Osteopathic Board of Radiology',
        addressLine1: '119 East Second Street',
        addressLine2: '',
        city: 'Milan',
        zipCode: '63556',
        telephoneNumber: '6602653494',
        state: { id: '104', label: 'MO' }
    },
    {
        id: '105',
        label: 'American Osteopathic Board of Rehabilitation M…',
        addressLine1: '142 East Ontario Street',
        addressLine2: 'Floor 4',
        city: 'Chicago',
        zipCode: '60611',
        telephoneNumber: '8006211773',
        state: { id: '105', label: 'IL' }
    },
    {
        id: '106',
        label: 'American Osteopathic Board of Surgery',
        addressLine1: '4764 Fishburg Road',
        addressLine2: 'Suite F',
        city: 'Huber Hei…',
        zipCode: '45424',
        telephoneNumber: '9372359786',
        state: { id: '106', label: 'OH' }
    },
    {
        id: '107',
        label: 'American Board of Clinical Pharmacology',
        addressLine1: 'P.O. Box 40278',
        addressLine2: '',
        city: 'San Anton…',
        zipCode: '78229',
        telephoneNumber: '2105678505',
        state: { id: '107', label: 'TX' }
    },
    {
        id: '108',
        label: 'American Board of General Dentistry',
        addressLine1: 'P.O. Box 7613',
        addressLine2: '',
        city: 'Seminole',
        zipCode: '33775',
        telephoneNumber: '5618095491',
        state: { id: '108', label: 'FL' }
    },
    {
        id: '109',
        label: 'American Board of Hospital Medicine',
        addressLine1: '',
        addressLine2: '',
        city: '',
        zipCode: '',
        telephoneNumber: '',
        state: { id: '109', label: 'NU…' }
    },
    {
        id: '110',
        label: 'American Board of Maxillofacial Radiology',
        addressLine1: '',
        addressLine2: '',
        city: '',
        zipCode: '',
        telephoneNumber: '',
        state: { id: '110', label: 'NU…' }
    },
    {
        id: '111',
        label: 'American Board of Oral and Maxillofacial Surge…',
        addressLine1: '625 North Michigan Ave…',
        addressLine2: 'Suite 18…',
        city: 'Chicago',
        zipCode: '60611',
        telephoneNumber: '3126428584',
        state: { id: '111', label: 'IL' }
    },
    {
        id: '112',
        label: 'American Board of Phlebology',
        addressLine1: '12100 Sunset Hills Road',
        addressLine2: 'Suite 130',
        city: 'Reston',
        zipCode: '20190',
        telephoneNumber: '7032344077',
        state: { id: '112', label: 'VA' }
    },
    {
        id: '113',
        label: 'National Board of Surgical Technology and Sur…',
        addressLine1: '6 West Dry Creek Circle',
        addressLine2: 'Suite 100',
        city: 'Littleton',
        zipCode: '80120',
        telephoneNumber: '8007070057',
        state: { id: '113', label: 'CO' }
    },
    {
        id: '115',
        label: 'Michigan Certification Board for Addiction Profe…',
        addressLine1: '',
        addressLine2: '',
        city: '',
        zipCode: '',
        telephoneNumber: '',
        state: { id: '115', label: 'NU…' }
    }
];

export default certifyingBoardList;
