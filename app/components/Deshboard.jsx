import React from 'react'

function Boxes () {
  return(
<>
        <div className="flex  min-h-full w-full gap-10">

          <div className=" flex flex-col h-25 w-48 bg-blue-100 rounded-xl p-5 ">
            <h3 className="font-bold ">Total Employees</h3>
            <div className="flex justify-between ">
              <h3 className="font-bold">(89)</h3>
              
              <span className="material-symbols-outlined">group</span>
          
              </div>
              </div>
              
              {/*!second box */}
              
          <div className=" flex flex-col h-25 w-48 bg-green-100 rounded-xl p-5 ">
            <h3 className="font-bold ">Present Today</h3>
            <div className="flex justify-between ">
              <h3 className="font-bold">(80)</h3>
              
              <span className="material-symbols-outlined">calendar_check</span>
          
              </div>
          </div>
          
          
                        {/*!third box */}
              
       <div className=" flex flex-col h-25 w-48 bg-yellow-100 rounded-xl p-5 ">
            <h3 className="font-bold ">On Leave</h3>
            <div className="flex justify-between ">
              <h3 className="font-bold">(9)</h3>
              
              <span className="material-symbols-outlined">assignment_late</span>
          
              </div>
          </div>
          
          
            {/*!fourth box */}
              
          <div className=" flex flex-col h-25 w-48 bg-red-100 rounded-xl p-5 ">
            <h3 className="font-bold ">Late</h3>
            <div className="flex justify-between ">
              <h3 className="font-bold">(1)</h3>
              
              <span className="material-symbols-outlined">schedule</span>
          
              </div>
          </div>
 </div>
</>
    )
}
  export default Boxes;