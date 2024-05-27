import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListOfEvent from '../src/ListOfEvent'
import EventDetailVeiw from '../src/EventDetailVeiw'
import BookingForm from '../src/BookingForm'
const Routing =()=>{
return <>
<BrowserRouter>
      <Routes>
          <Route index element={<ListOfEvent />} />
          <Route path="listOfEvent" element={<ListOfEvent />} />
          <Route path="viewEvent/:id" element={<EventDetailVeiw />} />
          <Route path="bookingForm/:id" element={<BookingForm />} />
      </Routes>
    </BrowserRouter>
</>
}

export default Routing