import React from 'react';

const Cards = (props) => {
  return (
    <>
      {props.data.map((item, index) => {
        return (
          <div key={index} className={`mx-4 flex flex-col   ${item.css} justify-center items-start gap-20 mb-[120px]`}>
            <div>
              <img className='w-[500px] md:h-[350px] rounded-md' src={item.img} alt="hj" />
            </div>
            <div className="mx-4">
              <h1 className='w-[300px] md:w-[450px] text-xl md:text-4xl leading-15 font-bold mb-3'>{item.heading}</h1>
              <p className='text-sm w-[300px] md:text-xl font-medium  md:w-[370px] leading-7 text-gray-600'>{item.para}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
