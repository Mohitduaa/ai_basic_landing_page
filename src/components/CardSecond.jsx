import React from 'react'

const CardSecond = () => {
  return (
    <div className="mx-4 flex flex-col lg:flex-row justify-center items-start gap-10">
      <div className="w-full sm:w-80 md:w-96 lg:w-[500px]">
        <img className="w-full rounded-xl mb-2" src="images/art.jpg" alt="images" />
        <h1 className="text-2xl font-bold">Fyntl AI engine can fetch insights from data</h1>
        <p className="text-xl font-medium text-gray-500">Your business data is sitting on ERP, mails, spreadsheets and sometimes on Whatsapp, that is unused. Fyntl AI engine that can fetch you with live reports, insights, feedback. This will not only help you in making data driven decisions but give you an extra edge over competitors.</p>
      </div>
      <div className="w-full sm:w-80 md:w-96 lg:w-[500px]">
        <img className="w-full rounded-xl mb-2" src="images/art.jpg" alt="images" />
        <h1 className="text-2xl font-bold">One Single prompt for all!</h1>
        <p className="text-xl font-medium text-gray-500">Our AI technology is developed in such a way that you can control and manage your business through messages. It's so simple and easy. With support of 150+ languages and reach in 100+ countries, it's the right time to adopt AI for your business.</p>
      </div>
    </div>
  )
}

export default CardSecond;
