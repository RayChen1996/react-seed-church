import {BsImageAlt} from 'react-icons/bs'
function HistoryCard(){
    return(
        <div className=' mt-5 '>
            <div className=' mb-4'>
                <div className=' font-bold text-lg'>
                    種子教會成長歷程
                </div>
            </div>
            <div>
                
            </div>
            <div className=" flex justify-between items-center gap-1">
                
                <div className=" border-black p-2 rounded flex flex-col justify-between items-center gap-1">
                    <div>
                         <BsImageAlt className='w-60 h-60 ' />
                    </div>
                    <div>
                        1988~2015
                    </div>
                    <div>
                        成立教會以來，已經有30年頭，無數次受洗，神帶領我們往前
                    </div>
                    <div className=" text-gray-400 text-sm">
                        在台中中區公園路1號聖誕活動剪影
                    </div>
                </div>

                <div>
                    
                </div>


                <div className=" flex flex-col justify-between items-center gap-1">
                    <div >
                        <BsImageAlt className='w-60 h-60 ' />
                    </div>
                    <div>
                        2015~2017
                    </div>
                    <div>
                        教會雖然經歷這次搬遷，但神仍然看顧念我們找到可租用地方，感謝補習班借助場地
                    </div>
                    <div className=" text-gray-400 text-sm">
                        台中中區三民路一段170號暫時地方聚會
                    </div>                    
                </div>

                <div>
                    
                </div>

                <div className=" flex flex-col justify-between items-center gap-1">
                    <div>
                        <BsImageAlt className='w-60 h-60 ' />
                    </div>
                    <div>
                        2015~2017
                    </div>
                    <div>
                        教會雖然經歷這次搬遷，但神仍然看顧念我們找到可租用地方，感謝補習班借助場地
                    </div>
                    <div className=" text-gray-400 text-sm">
                        台中中區三民路一段170號暫時地方聚會
                    </div>                    
                </div>


            </div>







        </div>
    );
}

export default HistoryCard;