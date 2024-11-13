import React from 'react';
import { motion } from 'framer-motion';

const Cards = (props) => {
  return (
    <>
      {props.data.map((item, index) => {
        return (
          <motion.div 
            key={index}
            className={`mx-4 flex flex-col ${item.css} justify-center items-start gap-20 mb-[120px]`}
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, delay: index * 0.3 }} 
            viewport={{ once: true, amount: 0.2 }} 
          >
            <div>
              <img className='w-[500px] md:h-[350px] rounded-md' src={item.img} alt="hj" />
            </div>
            <div className="mx-4">
              <h1 className='w-[300px] md:w-[450px] text-xl md:text-4xl leading-15 font-bold mb-3'>{item.heading}</h1>
              <p className='text-sm w-[300px] md:text-xl font-medium md:w-[370px] leading-7 text-gray-600'>{item.para}</p>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Cards;
