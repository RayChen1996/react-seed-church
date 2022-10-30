import {AiFillEdit } from 'react-icons/ai';
function NameCard(){
    return(
        <div className=" w-full  p-5 bg-white flex flex-col justify-center items-center ">

            <div className=' w-3/6'>
                <div className="  font-bold mb-5">
                    <h2>歡迎加入種子大家庭！誠摯邀請您！</h2>
                </div>
                <hr/>


                <div className=" rounded-md shadow-md shadow-sm  p-5 border-b-gray-900 rounded flex flex-col justify-center items-center w-full  h-100">
                    
                    <div className=" mb-3">
                        <h4>留名卡</h4>    
                    </div>
                    {/* <hr /> */}
                    <div className=" flex  gap-2 w-full justify-between items-center">
                        {/* <img src="logo512.png" alt="edit"  className="w-20 h-20" /> */}
                        <AiFillEdit  className=' w-20  h-20  text-gray-500  '/>
                        <input type='text' placeholder="如何稱呼您" className="p-2 bg-slate-500" />
                        <input type='text' placeholder="填寫任一聯絡方式LINE或手機" className="p-2 bg-slate-500" />    
                        <div className=" bg-blue-800 font-bold text-white rounded flex justify-center items-center  p-2">
                            <input type='submit' value='送出'    />
                        </div>
                    </div>
                    
                </div>                
            </div>
            
            
            




        </div>
    )
}

export default NameCard;