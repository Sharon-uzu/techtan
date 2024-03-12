import React from 'react'
import { MdOnDeviceTraining } from "react-icons/md";
import { BsClipboardDataFill } from "react-icons/bs";
import { SiInternetarchive } from "react-icons/si";
import { MdBackupTable } from "react-icons/md";


const Serve = () => {
  return (
    <div>
        <div className="serves">
            <h3>Services</h3>

            <div>
                <MdOnDeviceTraining className='s-i'/>
                <p>Training</p>
            </div>

            <div>
                <BsClipboardDataFill className='s-i'/>
                <p>Data Storage</p>
            </div>

            <div>
                <SiInternetarchive className='s-i'/>
                <p>Internet</p>
            </div>


            <div>
                <MdBackupTable className='s-i'/>
                <p>BackUp</p>
            </div>

        </div>
    </div>
  )
}

export default Serve