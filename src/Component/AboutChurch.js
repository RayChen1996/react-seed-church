import { AiFillInfoCircle , AiFillMessage } from 'react-icons/ai'
import { GiPositionMarker } from 'react-icons/gi'
function AboutChurch(){
    return(
        <div className=" w-full bg-gray-100 ">
            <div className="title text-lg pb-3 pt-2 font-bold ">
                <h2>關於種子教會</h2>
            </div>
            <hr />

            <div className="funcOption flex justify-center items-center p-2">
                <div className=" w-1/3   p-5">
                    <div className="icon w-full mb-5 flex justify-center items-center ">
                        <div className="  rounded-full ">
                            <AiFillMessage className=' w-20 h-20' />
                        </div>
                    </div>
                    <div className="caption ">
                        最新消息
                    </div>
                </div>
                <div className=" w-1/3  p-5">
                    <div className="icon mb-5 w-full flex justify-center items-center">
                        <div className="  rounded-full ">
                            <AiFillInfoCircle className=' w-20 h-20' />
                        </div>
                    </div>
                    <div className="caption ">
                        講者資訊
                    </div>
                </div>

 
                <div className=" w-1/3  p-5">
                    <div className="icon w-full mb-5 flex justify-center items-center">
                        <div className="  rounded-full ">
                            <GiPositionMarker className=' w-20 h-20' />
                        </div>
                    </div>
                    <div className="caption ">
                        教會活動
                    </div>
                </div> 


        
                             
            </div>


        </div>
    );
}

export default AboutChurch;