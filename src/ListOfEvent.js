import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const eventDetail = [{
    id: 1,
    eventName: "surat-delhi",
    date: '28-05-2024',
    time: "5:25",
    venue: 'surat',
    availability: 25
},
{
    id: 2,
    eventName: "surat-gandhinagar",
    date: "29-05-2024",
    time: "6:00",
    venue: 'surat',
    availability: 15
},
{
    id: 3,
    eventName: "surat-vadodara",
    date: "29-05-2024",
    time: "4:30",
    venue: 'surat',
    availability: 8
},
{
    id: 4,
    eventName: "amreli-delhi",
    date: "28-05-2024",
    time: "2:00",
    venue: 'amreli',
    availability: 14
},
{
    id: 5,
    eventName: "mumbey-surat",
    date: "28-05-2024",
    time: "3:25",
    venue: 'mumbey',
    availability: 3
}

]

const ListOfEvent = () => {
    const [eventListData, setEventListData] = useState([])
    const navigat =useNavigate()
    useEffect(() => {
        const data = localStorage.getItem('eventData')
        const eventList = JSON.parse(data)

        if (eventList?.length > 0) {
            setEventListData(eventList)
        } else {
            setEventListData(eventDetail)
            localStorage.setItem('eventData', JSON.stringify(eventDetail))
        }
    }, [])
    return <>
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

                {
                    eventListData?.map((data) => {
                      return  <tr>
                            <th scope="row">{data.id}</th>
                            <td>{data.eventName}</td>
                            <td>{data.date}</td>
                            <td>{data.time}</td>
                            <td>{data.venue}</td>
                            <td>{data.availability}</td>
                            <td><button onClick={()=>{navigat(`/viewEvent/${data.id}`)}}>View Detail</button></td>
                            <td><button onClick={()=>{navigat(`/bookingForm/${data.id}`)}}>Booking Ticket</button></td>


                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
}

export default ListOfEvent