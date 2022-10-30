function DailyBanner(){
    return(
        <div className=" w-full  h-100 bg-white p-2 align-middle ">
            <div className="DailyImgURL w-full h-20">
                每日經文
            </div>

            <div className="DailyImgURL w-full h-60 flex flex-col justify-start p-5 items-center font-bold text-xl">
                <div className=" w-full  flex justify-start">
                    <div>
                      流淚撒種的，必歡呼收割。         
                    </div>
                   
                </div>
                <br />
                <div className=" text-sm w-full  text-gray-400 flex justify-end items-end">
                    <div className=" w-full flex justify-end">
                      取自 詩篇126:5    
                    </div>
                    
                </div>                
            </div>


            <div className="scrollbar ">
                <ul  className="flex  justify-center items-center gap-2">
                    <li className=" w-5 h-5 rounded-full bg-gray-500 border-black"></li>
                    <li className=" w-5 h-5 rounded-full bg-gray-400 border-black"></li>
                    <li className=" w-5 h-5 rounded-full bg-gray-400 border-black"></li>
                </ul>
            </div>
        </div>
    )
}

export default DailyBanner;