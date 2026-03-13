'use client'
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DateReserve() {
    return (
        <div className="bg-slate-100 rounded-lg space-y-2 w-full px-10 py-5 flex flex-col">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" />
            </LocalizationProvider>
        </div>
    );
}