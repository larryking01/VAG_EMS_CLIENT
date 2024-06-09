import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers'





const EmploymentStartDatePicker = ( ) => {


    return (
        <LocalizationProvider dateAdapter={ AdapterDayjs }>
            <DatePicker/>
        </LocalizationProvider>
    )

}


export default EmploymentStartDatePicker