import { SlArrowLeft,SlArrowRight } from "react-icons/sl";
function SchTable(){
    return(
        <div className=" mt-5 bg-gray-100 mb-10 w-full  flex flex-col justify-center items-center">
            <div className=" mt-5 flex  justify-between items-center gap-1">
                <h3 className=" font-bold ">種子教會近期行事曆</h3>
            </div>
            <hr />
            <div className="flex w-full p-2 mx-2 justify-around items-center gap-1">
                <div className=" rounded-full w-10 f-10 bg-blue-600 font-bold text-white flex justify-center items-center p-2">
                     <SlArrowLeft />
                </div>
                <div className=" font-bold ">
                    Oct.
                </div>
                <div className=" rounded-full w-10 f-10 bg-blue-600 font-bold text-white flex justify-center items-center p-2">
                    <SlArrowRight/>
                </div>                                
            </div>
            <hr/>
            <div className="w-full p-2 flex justify-center items-center">
                <table className="w-full border-collapse border border-slate-500 text-center align-middle">
                    <thead>

                    
                        <tr className="border-slate-500  border border-slate-600  bg-slate-800 font-bold text-white">
                            <td >Sun</td>
                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                        </tr>
                    </thead>
                    <tbody>


                    
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>17</td>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <td>21</td>
                        <td>22</td>
                    </tr>                                                            
                    <tr>
                        <td>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                    </tr>  
                    <tr>
                        <td>30</td>
                        <td>31</td>
 
                    </tr>        
                    </tbody>                      
                </table>
            </div>

            <div className=" w-full gap-2 flex justify-end items-center ">
                <div className="flex justify-center items-center gap-2">
                    <img src="logo192.png" className=" w-5 h-5" />
                    <div>週日固定為主日聚會</div>
                </div>
                |
                <div className="flex justify-center items-center gap-2">
                    <img src="logo192.png" className=" w-5 h-5" />
                    週三為禱告聚會
                </div>                
            </div>



        </div>
    )
}

export default SchTable;