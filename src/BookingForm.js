import { useEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {

    const [ticketData, setTicketData] = useState({
        name: '',
        numberOfTicket: 0
    })
    const [isavailableTicketLess, setIsavailableTicketLess] = useState(false)
    const [isLessTicket,setIsLessTicket]=useState(false)
    const eventId = useParams()
    const navigate = useNavigate()

    const changeValue = (e) => {
        const ticketDetail = { ...ticketData }
        ticketDetail[e.target.id] = e.target.value
        if(isLessTicket == true && ticketDetail.numberOfTicket){
            setIsLessTicket(false)
        }
        setTicketData(ticketDetail)
    }

    const saveTicket = () => {
        if (ticketData.numberOfTicket > 0) {
            const data = localStorage.getItem('eventData')
            const eventList = JSON.parse(data)
            let isNotAvailable = false
            const eventData = eventList.map((item) => {
                if (item?.id == eventId?.id) {
                    if (item.availability > ticketData.numberOfTicket) {
                        isNotAvailable = false
                        setIsavailableTicketLess(false)
                        item['availability'] = item.availability - ticketData.numberOfTicket
                    } else {
                        isNotAvailable = true
                        setIsavailableTicketLess(true)
                    }
                    return item
                } else {
                    return item
                }
            })
            localStorage.setItem('eventData', JSON.stringify(eventData))
            if (isNotAvailable == false) {
                navigate('/listOfEvent')
            }
        }else{
            setIsLessTicket(true)
        }
    }
    return <>
    <button onClick={()=>{navigate('/listOfEvent')}}>Go List Of Event</button>

        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e) => { changeValue(e) }} />
        </div>
        <div className="form-group">
            <label>Number Of Ticket</label>
            <input type="number" className="form-control" id="numberOfTicket" placeholder="Number Of Ticket" onChange={(e) => { changeValue(e) }} />
        </div>
        {
            isLessTicket == true && <p>Please Enter More Then Zero Ticket</p>
        }
        {
            isavailableTicketLess == true && <p>Ticket is Not Availble</p>
        }
        <button className="btn btn-primary" onClick={() => { saveTicket() }}>Save</button>
    </>
}

export default BookingForm