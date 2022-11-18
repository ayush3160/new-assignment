import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ShowRating() {
  const [result, setResult] = useState({});

  const { id } = useParams();
  
  useEffect(() => {
    fetch("/api/getRating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id}),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setResult(data[0])
      });
  },[]);

  return (
    <>
        <h1>Id:- {result._id}</h1>
        <h1>Rating:- {result.rating}</h1>
        <h1>Comment:- {result.comment}</h1>
        <h1>Time:- {result.time}</h1>
    </>
  );
}
