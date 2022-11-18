import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Home() {

    let navigate = useNavigate()

  const [rating, setRating] = useState(0);

  const [comment, setComment] = useState("");

    const handleSubmit = () => {
        console.log(rating,comment)

        fetch('/api/create',{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({rating,comment})
        }).then((res) => {
            return(
                res.json()
            )
        }).then((data) => {
            navigate(`/rating/${data.id}`)
        })
    }

  return (
    <>
      <div class="card mx-auto" style={{ width: "50%", marginTop: "10%" }}>
        <div class="card-body">
          <h2 class="card-title">Comment Box</h2>
          <h4>Rating</h4>
          {[...Array(5)].map((x, i) => {
            if (i + 1 <= rating) {
              return (
                <button
                  class="bg-light fa fa-star checked"
                  style={{ border: "none" }}
                  onClick={() => {
                    setRating(i + 1);
                  }}
                ></button>
              );
            } else {
              return (
                <button
                  class="bg-light fa fa-star"
                  style={{ border: "none" }}
                  onClick={() => {
                    setRating(i + 1);
                  }}
                ></button>
              );
            }
          })}
          <br />
          {rating > 0 && (
            <div className="my-4">
              <label>Comment</label>
              <textarea
                className="mx-4"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
            </div>
          )}

          <button className="btn btn-outline-primary mx-auto" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
}
