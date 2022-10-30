import { SlCallEnd  } from "react-icons/sl";
import { FaFacebook , FaLine } from "react-icons/fa";

function Footer(){
    return(
        <div className=" bg-gray-100 p-5 h-70 ">
            <div className=" h-3/4 flex   justify-between items-center ">
                <div>
                    <div>
                        尋找我們
                    </div>
                    <div>
                        <img src="https://picsum.photos/90/60" />
                    </div>
                </div>


                <div>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                        <tr>
                            <td>聯絡我們</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>電話</td>
                            <td>04-22259123</td>
                        </tr>
                        <tr>
                            <td>地址</td>
                            <td>台中市中區自由路二段六號十樓之２</td>
                        </tr>
                        <tr>
                            <td>E-Mail</td>
                            <td>ray.10315332@gmail.com</td>
                        </tr>  
                        </tbody>                                                                      
                    </table>
                </div>

                
             
        


                <div>
                    <div className="flex justify-between items-center gap-1">
                        <div className="w-10 h-10 rounded-full bg-blue-600  text-white flex justify-center items-center ">
                            <FaFacebook />
                        </div>
                        <div className="w-10 h-10 rounded-full font-bold  bg-green-600 text-white flex justify-center items-center ">
                            LINE
                        </div>
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex justify-center items-center ">
                            <SlCallEnd />
                        </div>                                                                      
                    </div>
                    <div className=" mt-5">
                        <select className=" border-2 rounded  p-1">
                            <option>目前語系：繁體中文</option>
                            <option>英文</option>
                        </select>
                    </div>
                </div>


            </div>


            <div className=" h-1/4 text-gray-400">
                COPYRIGHT 2022 台中基督種子教會介紹網站 | 個人參與六角學院JS直播班 Side Project，並非真實網站
            </div>
        </div>
    );
}
export default Footer;