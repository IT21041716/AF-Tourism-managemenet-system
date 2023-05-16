import React, { useEffect, useState } from 'react'
import DashHeader from '../../component/DashHeader'
import galle from '../../../assets/galle.jpg'
import ella from '../../../assets/ella.jpg'
import propic from '../../../assets/isuru.png'
import { Box, Typography, Button, Grid } from "@mui/material";
import Masonry from "react-responsive-masonry"
import './dash.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import EmojiTransportationOutlinedIcon from '@mui/icons-material/EmojiTransportationOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import DownhillSkiingOutlinedIcon from '@mui/icons-material/DownhillSkiingOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import './cssfiles/card.css'
import { MDBBtn, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBCardFooter } from 'mdb-react-ui-kit';

const TripPlans = () => {

  const images = [


    'https://images.unsplash.com/photo-1609681980718-340e7f4b11d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNyaSUyMGxhbmthfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1552055568-e9943cd2a08f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNyaSUyMGxhbmthfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1561150018-8bb356679537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c3JpJTIwbGFua2F8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1586008481877-7dd7c8236d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNyaSUyMGxhbmthfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1580889240912-c39ecefd3d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHNyaSUyMGxhbmthfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  ];

  const [viewMore, setViewMore] = useState(false);

  const DataModelShow = (e) => {
    setViewMore(true);


  }

  const DataModelClose = () => {
    setViewMore(false);

  }

  const DisplayViewModel = () => {
    return (
      <MDBModal show={viewMore} setShow={setViewMore} tabIndex='-1'>
        <MDBModalDialog centered className="modal-dialog modal-dialog" style={{ maxWidth: '1000px' }}>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn className='btn-close' color='none' onClick={DataModelClose}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div>
                <h3 style={{ marginLeft: "20px", fontFamily: "Lato" }}>A Journey Through the Trip Planner of Ella and Nuwara Eliya </h3>
              </div>

              <div style={{ marginTop: "2rem", display: "flex", flexDirection: "row" }}>
                <div className="card mb-4" style={{ width: "65%", marginLeft: "0.7rem" }}>

                  <div className="card-body">
                    <Box padding='10px' marginLeft='auto' marginRight='auto'>
                      <Masonry columnsCount={2} gutter="2px">
                        {images.map((image, i) => (
                          <img
                            key={i}
                            src={image}
                            style={{ width: "100%", display: "block", cursor: "pointer" }}
                            onClick={() => viewImage(image, i)}
                          />
                        ))}
                      </Masonry>
                    </Box>
                  </div>
                </div>

                <div className="card mb-4" style={{ width: "35%", marginLeft: "0.5rem" }}>

                  <div className="card-body">

                    <div>
                      <Box display="flex" justifyContent="center" alignItems="center" marginTop="30px" >

                        <img
                          alt="profile-user"
                          width="120px"
                          height="120px"
                          src={propic}
                          style={{ cursor: "pointer", borderRadius: "50%" }}
                        />


                      </Box>
                      <h4 style={{ textAlign: "center", fontFamily: "roboto" }}>
                        Isuru chamod
                      </h4>
                      <h5 style={{ textAlign: "center", fontFamily: "roboto", color: "#3da58a", fontSize: "14px", marginTop: "-10px" }}>
                        Job title or somthing
                      </h5>

                      <div style={{ borderStyle: "solid", borderWidth: "2px", padding: "10px,10px,10px,10px", marginTop: "30px" }}>
                        <Typography style={{ fontSize: '13px', color: '#black', fontWeight: "600" }}>Email : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>sithanga1231@gmail.com</p> </Typography>
                        <Typography style={{ fontSize: '13px', color: '#black', fontWeight: "600" }}>Contact Number :<p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>0763223349</p></Typography>
                        <Typography style={{ fontSize: '13px', color: '#black', fontWeight: "600" }}>Address : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>399/c gamunumawatha,palanwatta,pannipitiya</p></Typography>
                        <Typography style={{ fontSize: '13px', color: '#black', fontWeight: "600" }}>Company : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>SMS Logistics</p></Typography>
                        <Typography style={{ fontSize: '13px', color: '#black', fontWeight: "600" }}>Company Email : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>sms.support@gmail.com</p></Typography>
                      </div>
                    </div>

                    <p style={{ fontSize: "13px", marginTop: "20px", color: "gray" }}>If you want to make any changes in this post you can change clicking below button..!</p>
                    <center><Button style={{ backgroundColor: "green", color: "white", marginTop: "20px" }}><ManageHistoryOutlinedIcon /> Change Post</Button>  </center>
                  </div>
                </div>
              </div >

              <div className="card mb-4">
                <div className="card-body">

                  <div>
                    <h5 style={{ marginLeft: "20px", fontFamily: "Lato" }}>Description of the Trip..!</h5>
                    <div style={{width:"800px",marginLeft:"auto",marginRight:"auto"}}>
                      <p style={{textAlign:"justify",fontSize:"12px"}}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                      </p>
                    </div>

                    <div>
                      <ul>
                        <li style={{fontSize:"14px", fontWeight:"500",marginTop:"10px"}}><EmojiTransportationOutlinedIcon/> Transport will be provided while the whole trip days.</li>
                        <li style={{fontSize:"14px", fontWeight:"500" ,marginTop:"10px"}}><HotelOutlinedIcon/> Accomodations will be provided while the whole trip days.</li>
                        <li style={{fontSize:"14px", fontWeight:"500",marginTop:"10px"}}><FastfoodOutlinedIcon/> Breakfast and evening snack will be provide and you can request lunch, dinner also (additional charges include).</li>
                        <li style={{fontSize:"14px", fontWeight:"500" ,marginTop:"10px"}}><CalendarMonthOutlinedIcon/> 1 Day.</li>
                        <li style={{fontSize:"14px", fontWeight:"500" ,marginTop:"10px"}}><DownhillSkiingOutlinedIcon/> Activities.</li>
                          <ul>
                            <li style={{fontSize:"13px", fontWeight:"500" ,marginTop:"10px"}}>Wild safari..</li>
                            <li style={{fontSize:"13px", fontWeight:"500" ,marginTop:"10px"}}>Hicking..</li>
                            <li style={{fontSize:"13px", fontWeight:"500" ,marginTop:"10px"}}>Boat safari..</li>
                          </ul>
                        <li style={{fontSize:"14px", fontWeight:"500" ,marginTop:"10px"}}><PlaceOutlinedIcon/> Destinations.</li>
                          <ul>
                            <li style={{fontSize:"13px", fontWeight:"500" ,marginTop:"10px"}}>Ella rock..</li>
                            <li style={{fontSize:"13px", fontWeight:"500" ,marginTop:"10px"}}>Nuwaraeliya..</li>
                            <li style={{fontSize:"13px", fontWeight:"500" ,marginTop:"10px"}}>Badulla..</li>
                            <li style={{fontSize:"13px", fontWeight:"500" ,marginTop:"10px"}}>Gregory Lake..</li>
                            <li style={{fontSize:"13px", fontWeight:"500" ,marginTop:"10px"}}>Knuckels..</li>
                            <li style={{fontSize:"13px", fontWeight:"500" ,marginTop:"10px"}}>Waterfalls..</li>
                          </ul>
                      </ul>

                    </div>

                    <h5 style={{ marginLeft: "20px", fontFamily: "Lato" }}>What you will do..!</h5>
                    <div style={{width:"800px",marginLeft:"auto",marginRight:"auto",marginBottom:"30px"}}>
                      <p style={{textAlign:"justify",fontSize:"12px"}}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                      </p>
                    </div>
                  </div>

                  *************************************************************Thank You*************************************************************
                </div>
              </div>



            </MDBModalBody>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal" onClick={DataModelClose}>Close</button>
            </div>

          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    )
  }










  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${galle})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '400px',
          backgroundPosition: 'center center',
          filter: 'brightness(50%)',

        }}
      />

      <Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
        <DashHeader title='Your Trips' subtitle='Welcome to your Trips Dashboard' />
      </Box>


      <section className="light">
        <div className="container py-2">
          <div className="h1 text-center text-dark" id="pageHeaderTitle">LISTED POSTS</div>

          <article className="postcard light red">
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src={ella} alt="Image Title" />
            </a>
            <div className="postcard__text t-dark">
              <h1 className="postcard__title red"><a href="#">A Journey Through the Trip Planner of Ella and Nuwara Eliya</a></h1>
              <div className="postcard__subtitle small">
                <time dateTime="2020-05-25 12:00:00">
                  <i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                  <i className="fas fa-calendar-alt mr-2" style={{ marginLeft: "20px" }}><LocationOnOutlinedIcon /></i>Badulla
                  <i className="fas fa-calendar-alt mr-2" style={{ marginLeft: "20px" }}><Person2OutlinedIcon /></i>Per person based
                </time>
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
              <div>
                Price
                <AttachMoneyOutlinedIcon />119.00
              </div>

              <ul className="postcard__tagbox">
                <Button style={{ backgroundColor: '#d48600', borderWidth: '3px', marginRight: "5px", color: "black" }} onClick={(e) => { DataModelShow() }} >View more...</Button>
                <Button style={{ backgroundColor: 'red', borderWidth: '3px', marginRight: "5px", color: "white" }}  ><DeleteOutlineOutlinedIcon />Delete</Button>
              </ul>
            </div>
          </article>

        </div>
      </section>


      {DisplayViewModel()}




    </div>
  )
}

export default TripPlans