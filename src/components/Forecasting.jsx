import React from 'react';

const Forecast = ({ forecastWeather, location }) => {
    return (
        <div>
            <div className="container" >
                <h4 className="text-center m-5"><b>Forecast Weather of {location.name},{location.region}</b></h4>
                {forecastWeather.forecastday.map((data, index) => {
                    return (

                        <div className="accordion accordion-flush mt-3 border rounded " id="accordionFlushExample">
                            <div className="accordion-item">

                                <h2 className="accordion-header"style={{boxShadow:'3px 3px 8px rgba(0, 0, 0, 0.8), -3px -3px 5px rgba(45, 25, 55, 0.3)' ,cursor: "pointer"}}>

                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="flush-collapseOne">

                                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar w-75"></div>
                                        </div>


                                        {/* accordion inside text details */}

                                        <div class="d-flex flex-row align-items-center ">
                                            <div class="p-1 m-3"></div>
                                            <div class="p-3 bg-info border border-info border-start-0 rounded">
                                                {data.date}
                                            </div>
                                            
                                            <div class="p-1 m-3"><h6>Max temp:</h6>{data.day.maxtemp_c} </div>
                                            <div class="p-3 bg-info border border-info border-start-0 rounded"><img src={data.day.condition.icon} /></div>
                                            <div class="p-1 m-3"><b>{data.day.condition.text}</b></div>
                                            
                                        </div>
                                    </button>
                                </h2>

                                <div id={`${index}`}
                                    className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        {data.hour.map((data) => {
                                            return (
                                                <>

                                                    <div className='container m-2'>
                                                        {/* <h6 className='dateDetail text-align-center p-1'> dat:{data.time} maxtemp: {data.temp_c}c</h6> */}
                                                        <h6 className='dateDetail text-align-center p-1' style={{width:'100lvm', margin:'3px', border:'4px', textAlign:'center'}}>{data.time}  MaxTemp: <b>{data.temp_c}c</b></h6>
                                                       
                                                       


                                                    </div>

                                                    <div
                                                        className="progress" role="progressbar" aria-label="Default Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" >
                                                        <div className="progress-bar progress-bar-striped"
                                                            style={{ width: `${data.temp_c}%` }}>
                                                        </div>
                                                    </div>
                                                </>



                                            );
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>
        </div >
    )
}
export default Forecast;