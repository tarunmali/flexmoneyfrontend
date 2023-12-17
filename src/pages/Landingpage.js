const Landingpage = () =>{
    return (
        // <div className="about">
        //     <h1>Landingpage</h1>
        // </div>
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        {/* <Head>
          <title>Mock Coding Interview Round</title>
        </Head> */}
        <h1 className="text-3xl font-bold mb-8">Yup Yoga: The new way of life!!</h1>
        <div className="flex flex-row items-center">
        <div className="flex gap-10">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-48">
                Select Month
            </button>



            <button className="bg-blue-500 text-white px-4 py-2 rounded w-48">
                Select Year
          </button>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8 mb-4">Mock coding interview round</h2>
        <div className="flex flex-row justify-between w-full">
          <button className="px-4 py-2 bg-gray-300 rounded-md">
            {"<"}
          </button>
          <span className="text-lg font-bold">December 2023</span>
          <button className="px-4 py-2 bg-gray-300 rounded-md">
            {">"}
          </button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="text-center px-4 py-2 text-gray-500">Slot 1</div>
          <div className="text-center px-4 py-2 text-gray-500">Slot 2</div>
          <div className="text-center px-4 py-2 text-gray-500">Slot 3</div>
          <div className="text-center px-4 py-2 text-gray-500">Slot 4</div>
     
          {/* <div
            className={`text-center px-4 py-2 cursor-pointer ${
              selectedDate === "2023-12-04" ? "bg-blue-100" : "text-gray-500"
            }`}
            onClick={() => handleClick("2023-12-04")}
          >
            4
          </div> */}
          {/* ... rest of calendar days ... */}
          {/* <div
            className={`text-center px-4 py-2 cursor-pointer ${
              selectedDate === "2023-12-25" ? "bg-blue-100" : "text-gray-500"
            }`}
            onClick={() => handleClick("2023-12-25")}
          >
            25
          </div> */}
        </div>
        <p className="text-gray-500 mt-8">
          Web conferencing details provided upon confirmation.
        </p>
        <div className="mt-4">
          <p className="text-lg font-bold">Hi. If you would like to schedule a mock</p>
          <p className="text-lg font-bold">Interview with me, you can schedule it on this</p>
          <p className="text-lg font-bold">link. You will have to spare atleast an hour time.</p>
          <p className="text-lg font-bold">Usually the mock interview will have coding</p>
        </div>
        </div>
    )
}

export default Landingpage;