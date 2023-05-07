import React, { useEffect, useState } from 'react'
import ella from '../../../assets/ella.jpg'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

import './check.css'


const index = () => {

    return (
        <div>

            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "row" }}>


                <div className="card mb-4" style={{ width: "40%", marginLeft: "auto" }}>
                    <div className="card-header">Order Details</div>
                    <div className="card-body">
                       
                        <h4 className="postcard__title red">A Journey Through the Trip Planner of Ella and Nuwara Eliya</h4>
                        <div className="postcard__subtitle small">
                            <time dateTime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                <i className="fas fa-calendar-alt mr-2" style={{ marginLeft: "20px" }}><LocationOnOutlinedIcon /></i>Badulla
                                <i className="fas fa-calendar-alt mr-2" style={{ marginLeft: "20px" }}><Person2OutlinedIcon /></i>Per person based
                            </time>
                        </div>
                        <div style={{ marginLeft: "25%", marginRight: "auto", marginTop: "10px" }}>

                            <img
                                alt="profile-user"
                                width="250px"
                                height="250px"
                                src={ella}
                                style={{ cursor: "pointer" }}
                            />


                        </div>

                        <div class="col-md-6" style={{width:"35rem",marginTop:"20px"}}>
                            <h4>Summary</h4>

                            <div class="card" >

                                <div class="d-flex justify-content-between p-3" style={{marginTop:"20px"}}>

                                    <div class="d-flex flex-column">

                                        <span>Trip package price<i class="fa fa-caret-down"></i></span>
                                       
                                    </div>

                                    <div class="mt-1">
                                    <span>$229.00</span>
                                    </div>

                                </div>

                                <div class="p-3">
                                    <div class="d-flex justify-content-between" style={{marginTop:"-20px"}}>

                                        <span style={{fontSize:"14px"}}>Quntity <i class="fa fa-clock-o"></i></span>
                                        <span style={{fontSize:"14px"}}>2</span>

                                    </div>


                                </div>
                                <div class="p-3">
                                    <div class="d-flex justify-content-between" style={{marginTop:"-20px"}}>

                                        <span style={{fontSize:"14px"}}>SubTotal(229.00 x 2) <i class="fa fa-clock-o"></i></span>
                                        <span style={{fontSize:"14px"}}>$458.00</span>

                                    </div>


                                </div>
                                <div class="p-3">
                                    <div class="d-flex justify-content-between" style={{marginTop:"-20px"}}>

                                        <span style={{fontSize:"14px"}}>Tax <i class="fa fa-clock-o"></i></span>
                                        <span style={{fontSize:"14px"}}>15%</span>

                                    </div>


                                </div>

                                <hr class="mt-0 line" />


                                <div class="p-3 d-flex justify-content-between">

                                    <div class="d-flex flex-column">

                                        <span style={{fontWeight:"600"}}>Total Amount You have to pay</span>
                                       

                                    </div>
                                    <span style={{fontWeight:"600"}}>$529.00</span>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-4" style={{ width: "40%", marginLeft: "2rem", marginRight: "auto" }}>
                    <div className="card-body">
                        <form >
                            <h2 style={{ marginTop: "20px", marginBottom: "20px" }}><center>Payment Information</center></h2>
                            <p>Cardholder Name</p>
                            <input type="text" class="inputbox" name="name" required />
                            <p>Card Number</p>
                            <input type="number" class="inputbox" name="card_number" id="card_number" required />

                            <p>Card Type</p>
                            <select class="inputbox" name="card_type" id="card_type" required>
                                <option value="">--Select a Card Type--</option>
                                <option value="Visa">Visa</option>
                                <option value="RuPay">RuPay</option>
                                <option value="MasterCard">MasterCard</option>
                            </select>
                            <div class="expcvv">

                                <p class="expcvv_text">Expiry</p>
                                <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

                                <p class="expcvv_text2">CVV</p>
                                <input type="password" class="inputbox" name="cvv" id="cvv" required />
                            </div>
                            <p></p>
                            <button type="submit" class="button">Pay $526.00</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default index