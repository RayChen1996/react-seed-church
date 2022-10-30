function Header(){
    return(

        <div className=" flex justify-between items-center fixed w-full mb-10 bg-white p-3">

            <div className="flex justify-start  items-start gap-3">
                
                <div className=" w-10">
                <img src="logo.png" />    
                </div>
                <div>
                    <span className="font-bold text-lg"><strong>台中基督</strong></span>
                    <br/>
                    <span className="text-sm font-bold">種子教會</span>
                    
                </div>

            </div>

            
            <div className=" flex justify-items-end items-center gap-4">
                
                <div className="  ">
                    <input type='text' placeholder='搜尋' className=" bg-gray-100  rounded p-2 " />
                </div>

                <div className="rounded text-white bg-blue-700 p-2">
                    管理者登入
                </div>
                <div className="rounded text-white bg-red-700 p-2">
                    加入我們
                </div>


            </div>

            

        </div>

    );
}

export default Header;