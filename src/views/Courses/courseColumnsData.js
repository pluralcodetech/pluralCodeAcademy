import moment from "moment";

export const COLUMNS = [
    {
        Header : 'Image',
        accessors : 'image'
    },
    {
        Header : 'Discount Price',
        accessors : 'discountprice'
    },
    {
        Header : 'Price',
        accessors : 'price'
    },
    {
        Header : 'Start Date',
        accessors : <h6>{moment("start_date").format('MMMM Do YYYY, h:mm:ss a')}</h6>,
    },
    {
        Header : 'End Date',
        accessors : <h6>{moment("end_date").format('MMMM Do YYYY, h:mm:ss a')}</h6>
    },
    {
        Header : 'Status',
        accessors : 'status'
    },
    {
        Header : 'Create Comunity',
        accessors : 'createComunity'
    },
    {
        Header : 'View More',
        accessors : <button>Click here...</button>
    },
]