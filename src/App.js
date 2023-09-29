import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial"

const App = () => {
  // let reviews=data.review;
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] items-center justify-center bg-gray-200">
      <div className="text-center">
      <h1 className="text-4xl font-bold">Our Testimonials</h1>
      <div className="bg-violet-400 w-1/5 mt-1 h-[4px] mx-auto"></div>
      <Testimonial reviews={reviews}/>
      </div>
    </div>
  )
};

export default App;
