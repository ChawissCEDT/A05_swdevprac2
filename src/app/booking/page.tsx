import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function Booking() {
  return (
    <main className="w-full flex flex-col items-center pt-10 space-y-4 pb-20">
      <div className="text-3xl font-bold text-gray-800 tracking-wide">
        New Booking
      </div>

      <div className="w-[600px] space-y-10 bg-white p-10 rounded-xl shadow-md">
        <TextField variant="standard" label="Name-Lastname" fullWidth />

        <TextField variant="standard" label="Contact-Number" fullWidth />

        <FormControl variant="standard" fullWidth>
          <InputLabel>Select Venue</InputLabel>
          <Select id="venue" name="venue">
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
        <DateReserve />
        <button
          name="Book Venue"
          className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg"
        >
          Book Venue
        </button>
      </div>
    </main>
  );
}
