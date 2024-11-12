import React from "react";

const Current = ({ currentWeather, location }) => {
    return (

        <div className="container " >
            <h4 className="text-center  m-4"><b>Current Weather of {location.name},{location.region}</b></h4>

            <div className="row">
                {/* col-4 */}
                <div className="col-12 mb-4	">
                    <div class="card align-items-center rounded-5" style={{boxShadow:'3px 8px 8px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(45, 25, 55, 0.3)' ,cursor: "pointer" ,height:'100lvm'}}>

                        <div class="d-flex flex-row align-items-center  ">
                            <div class="p-2"><img src={currentWeather.condition.icon} class="card-img" style={{ width: "90px", height: "90lvm", }} alt="..." /></div>
                            <div class="p-2"><h4>{currentWeather.condition.text}</h4></div>
                        </div>
                    </div>

                </div>
                {/* col-1 */}
                <div className="col-3 mt-3">

                    <div class="card align-items-center rounded-5  " style={{boxShadow:'3px 3px 8px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(45, 25, 55, 0.3)' ,cursor: "pointer",height:'100lvm'}}  >
                        <div class="card-body">
                            <h5 class="card-title">Temperature: <b>{currentWeather.temp_c}c</b></h5>
                        </div>
                    </div>




                </div>
                {/* col-2 */}
                <div className="col-3 mt-3">

                    <div class="card align-items-center rounded-5" style={{boxShadow:'3px 3px 8px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(45, 25, 55, 0.3)' ,cursor: "pointer",height:'100lvm'}}>
                        <div class="card-body">
                            <h5 class="card-title">Fahrenheit: <b>{currentWeather.temp_f}f</b></h5>
                        </div>
                    </div>

                </div>
                {/* col-4 */}
                <div className="col-3 mt-3" >

                    <div class="card align-items-center rounded-5" style={{boxShadow:'3px 3px 8px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(45, 25, 55, 0.3)' ,cursor: "pointer",height:'100lvm'}}>
                        <div class="card-body">
                            <h5 class="card-title">Humidity: <b>{currentWeather.humidity}c</b></h5>
                        </div>
                    </div>


                </div>
                {/* col-4 */}

                <div className=" col-3  mt-3 " >

                    <div class="card align-items-center rounded-5 " style={{boxShadow:'3px 3px 8px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(45, 25, 55, 0.3)' ,cursor: "pointer",height:'100lvm'}}>
                        <div class="card-body">
                            <h5 class="card-title">Wind KPH: <b>{currentWeather.wind_kph}</b></h5>
                        </div>
                    </div>





                </div>
                {/* {col-5} */}
                <div className=" col-3  mt-3 "  >

                    <div class="card align-items-center rounded-5 " style={{boxShadow:'3px 3px 8px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(45, 25, 55, 0.3)' ,cursor: "pointer", height:'100lvm'}}>
                        <div class="card-body">
                            <h5 class="card-title">WindDirection: <b>{currentWeather.wind_dir}</b></h5>
                        </div>
                    </div>



                </div>
                {/* {col-6} */}
                <div className=" col-3   mt-3 ">

                    <div class="card align-items-center rounded-5" style={{boxShadow:'3px 3px 8px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(45, 25, 55, 0.3)' ,cursor: "pointer"}}>
                        <div class="card-body" >
                            <h5 class="card-title " >WindChill: <b>{currentWeather.windchill_c}c</b></h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
export default Current;