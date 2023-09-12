import { useRef } from "react";
function HomePage() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody={email:enteredEmail,text:enteredFeedback}

    fetch('/api/feedback',{
      method:'POST',
      body:JSON.stringify(reqBody),
      headers:{
        'content-Type':'application/json'
      }
    })
    .then((Response)=>Response.json())
    .then((data)=>console.log(data));

  }
  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea row="5" type="text" id="feedback" ref={feedbackInputRef} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default HomePage;
