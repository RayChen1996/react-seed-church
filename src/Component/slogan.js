function Slogan(){
    return(
        <div className=" w-full  h-100 bg-gray-100 p-2 align-middle ">
            <div className="DailyImgURL w-full h-60 flex justify-start  p-5 mt-4 items-center ">
                
                <div className=" text-green-500 text-5xl  font-bold ">
                  進入豐盛，進入神所為您預備的命定      
                </div>                
            </div>

            <div className=" w-full  flex justify-end items-center p-5 gap-2  ">
                <div className=" font-bold ">
                  台中基督種子教會可以提供您？    
                </div>
                <div>
                    <select className=" p-2 w-50">
                        <option>參加主日</option>
                        <option>啟發課程</option>
                        <option>主日奉獻</option>
                        <option>主日學課程</option>
                        <option>代禱奉獻</option>
                        <option>會友登入</option>
                        <option>管理者登入</option>
                    </select>



                </div>
                
            </div>

            <div className="scrollbar ">
                <ul  className="flex  justify-center items-center gap-2">
                    <li className=" w-5 h-5 rounded-full  bg-gray-600 border-black"></li>
                    <li className=" w-5 h-5 rounded-full bg-gray-400 border-black"></li>
                    <li className=" w-5 h-5 rounded-full bg-gray-400 border-black"></li>
                </ul>
            </div>
        </div>
    )
}

export default Slogan;