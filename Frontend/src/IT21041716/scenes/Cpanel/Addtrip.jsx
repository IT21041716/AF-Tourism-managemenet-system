import React from 'react'
import sigiriya from '../../../assets/sigiria.jpg'
import DashHeader from '../../component/DashHeader'
import { Box, Typography, Button } from "@mui/material";



const AddTrip = () => {


  return (
    <div>

      <div
        style={{
          backgroundImage: `url(${sigiriya})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '400px',
          backgroundPosition: 'center center',
          filter: 'brightness(50%)',

        }}
      />

      <Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
        <DashHeader title='New Trips' subtitle='Welcome to your Trips Manager Dashboard' />
      </Box>

      <div style={{ marginTop: "2rem", display: "flex", flexDirection: "row" }}>
        <div className="card mb-4" style={{ width: "45rem", marginLeft: "5rem" }}>
          <div className="card-header">Add new Trip plan</div>
          <div className="card-body">
            <form>

              <div className="mb-3">
                <label className="small mb-1" for="inputUsername">Name for Trip</label>
                <input className="form-control" id="inputUsername" type="text" placeholder="Enter your Organization Name" />
              </div>

              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                  <label className="small mb-1" for="inputFirstName">No of Days</label>
                  <input className="form-control" id="inputFirstName" type="text" placeholder="number of days"  />
                </div>

                <div className="col-md-6">
                  <label className="small mb-1" for="inputLastName">Price Per Person</label>
                  <input className="form-control" id="inputLastName" type="text" placeholder="Price per person"  />
                </div>
              </div>

              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Activities</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Activities" />
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Meals</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Meals" />
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Accomodation</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Accomodation"/>
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Transport</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Transport" />
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">What you Will Do</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Type somthing here"/>
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">About the Trip</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Type somthing here"/>
              </div>
              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Destinations</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Destinations"/>
              </div>


              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                  <label className="small mb-1" for="inputEmailAddress">Thumbnail</label>
                  <input className="form-control" id="inputEmailAddress" type="file" />
                </div>
              </div>

              <button className="btn btn-primary" style={{ backgroundColor: "#3da58a", borderStyle: "none" }} type="button">Save changes</button>
            </form>
          </div>
        </div>

        <div className="card mb-4" style={{ width: "35rem", marginLeft: "2rem" }}>
          <div className="card-header">Blog appearance</div>
          <div className="card-body">
          <div className="col-md-6">
                  <label className="small mb-1" for="inputEmailAddress">Other Images upload here.....</label>
                  <input className="form-control" id="inputEmailAddress" type="file" />
                </div>
                <button className="btn btn-primary" style={{ backgroundColor: "#3da58a", borderStyle: "none" ,marginTop:"20px"}} type="button">Save changes</button>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC,</p>


          </div>
        </div>
      </div >
    
    </div>
  )
}

export default AddTrip