import { useEffect, useState } from "react"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"

const EventDetailVeiw = () => {
    const [eventDetail, setEventDetail] = useState({})
    const eventId = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const data = localStorage.getItem('eventData')
        const eventList = JSON.parse(data)
        const event = eventList.find((item) => {
            return item.id == eventId.id
        })
        setEventDetail(event)
    }, [])
    return <>
    <button onClick={()=>{navigate('/listOfEvent')}}>Go List Of Event</button>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Event Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Venue</th>
                    <th scope="col">Availability</th>

                </tr>
            </thead>
            <tbody>

                <tr>
                            <th scope="row">{eventDetail.id}</th>
                            <td>{eventDetail.eventName}</td>
                            <td>{eventDetail.date}</td>
                            <td>{eventDetail.time}</td>
                            <td>{eventDetail.venue}</td>
                            <td>{eventDetail.availability}</td>

                        </tr>
                   
            </tbody>
        </table>
    </>
}

export default EventDetailVeiw