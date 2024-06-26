import EventsList from "../components/EventsList";

import { useLoaderData, json } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }
  const events = data.events;
  return <>{<EventsList events={events} />}</>;
}

export default EventsPage;

export async function EventsLoader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "Could not fetch the event details" };
    // throw new Response(JSON.stringify({ message: "Could not fetch Events." }), {
    //   status: 500,
    // });
    return json(
      { message: "Could not fetch Events." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
