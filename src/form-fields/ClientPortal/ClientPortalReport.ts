export interface ClientPortalReportFieldsProps {
    size: number;
    inputType: string;
    name: string;
    label: string;
    required: boolean;
    options?: string;
}

const ClientPortalReportFields = [
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'clientName',
        label: 'Client Name',
        required: false,
        options: 'clientNameList'
    },
    {
        size: 6,
        inputType: 'autoCompleteSingle',
        name: 'reportType',
        label: 'Report Type',
        required: false,
        options: 'reportTypeList'
    },
    {
        size: 6,
        inputType: 'date',
        name: 'fromReportDate',
        label: 'From Report Date',
        required: false
    },
    {
        size: 6,
        inputType: 'date',
        name: 'toReportDate',
        label: 'To Report Date',
        required: false
    }
];

export default ClientPortalReportFields;
