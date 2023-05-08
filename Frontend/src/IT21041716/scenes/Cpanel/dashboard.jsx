import React, { useState } from 'react'
import DashHeader from '../../component/DashHeader'
import { Box, Typography, Button } from "@mui/material";
import srilanka from '../../../assets/srilanka.jpg'
import propic from '../../../assets/isuru.png'
import Masonry from "react-responsive-masonry"
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import './dash.css'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';


const dashboard = () => {



  const images = [


    'https://images.unsplash.com/photo-1569670380606-fd47201d42da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHNyaSUyMGxhbmthbiUyMHZpbGxhcyUyMHdpdGglMjBuYXRodXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1569670380685-169d7737183d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHNyaSUyMGxhbmthbiUyMHZpbGxhcyUyMHdpdGglMjBuYXRodXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1640662112183-a2ad45c4cd30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHNyaSUyMGxhbmthbiUyMHZpbGxhcyUyMHdpdGglMjBuYXRodXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1569668444080-c3cd3fd2a259?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHNyaSUyMGxhbmthbiUyMHZpbGxhcyUyMHdpdGglMjBuYXRodXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1639401672398-73bb6dad0d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHNyaSUyMGxhbmthbiUyMHZpbGxhcyUyMHdpdGglMjBuYXRodXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1569670380686-85f045c172cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzl8fHNyaSUyMGxhbmthbiUyMHZpbGxhcyUyMHdpdGglMjBuYXRodXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1582610191340-fa501e6e5040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGElMjBzcmklMjBsYW5rYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1582609955288-ee637f993957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGElMjBzcmklMjBsYW5rYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1621626806480-53591486f446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dmlsbGElMjBzcmklMjBsYW5rYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1582610402980-6a09126b5844?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGElMjBzcmklMjBsYW5rYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1561426802-392f5b6290cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNyaSUyMGxhbmthfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

  ];

  const [data, setData] = useState({ image: '', i: 0 })
  const viewImage = (image, i) => {
    setData({ image, i })
    document.body.style.overflow = 'hidden'
    window.scrollTo(0, 0);
  }

  const closeImage = () => {
    setData({ image: '', i: 0 })
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
  }
  return (

    <>

      {
        data.image &&
        <div style={{
          width: '80%',
          height: '80vh',
          backgroundColor: 'black',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: "10%",
          marginRight: "10%",
          zIndex: '2'

        }}>
          <button style={{ position: 'absolute', top: 0, right: 0 }} onClick={() => closeImage()}><CloseIcon /></button>
          <img src={data.image} style={{ width: 'auto', maxWidth: "90%", maxHeight: '90%', objectFit: 'cover' }} />
        </div>
      }
      <Box
        style={{
          backgroundImage: `url(${srilanka})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: '400px',
          backgroundPosition: 'center center',
          filter: 'brightness(50%)',
        }}
      />

      <Box display='flex' justifyContent="space-between" alignItems="center" position="relative" zIndex='1' marginTop='-100px' paddingLeft='100px'>
        <DashHeader title='DASHBOARD' subtitle='Welcome to your dashboard' />
      </Box>
      <Box
        width="30rem"
        height="38rem"
        backgroundColor="#f5f5f5"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="50%"
        left="35%"
        transform="translate(-50%, -50%)"


      >
        <Box display="flex" justifyContent="center" alignItems="center" marginTop='-580px'>

          <img
            alt="profile-user"
            width="200px"
            height="200px"
            src={propic}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />


        </Box>
        <Typography
          variant='h3'
          style={{
            marginTop: '-350px',
            textAlign: 'center',
            position: 'absolute',
            fontSize: '32px',
            color: 'black',
            textShadow: '2px 2px 4px #000000',
          }}
        >
          Isuru chamod
        </Typography>
        <Typography
          variant='h2'
          style={{
            marginTop: '-300px',
            textAlign: 'center',
            position: 'absolute',
            fontSize: '18px',
            color: '#3da58a',

          }}
        >
          Marketing Assistant
        </Typography>

        <Typography style={{ marginTop: '-200px', textAlign: 'left', position: 'absolute', fontSize: '15px', color: '#black', fontWeight: "600" }}>Email : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>sithanga1231@gmail.com</p> </Typography>
        <Typography style={{ marginTop: '-160px', textAlign: 'left', position: 'absolute', fontSize: '15px', color: '#black', fontWeight: "600" }}>Contact Number :<p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>0763223349</p></Typography>
        <Typography style={{ marginTop: '-120px', textAlign: 'left', position: 'absolute', fontSize: '15px', color: '#black', fontWeight: "600" }}>Address : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>399/c gamunumawatha,palanwatta,pannipitiya</p></Typography>
        <Typography style={{ marginTop: '-80px', textAlign: 'left', position: 'absolute', fontSize: '15px', color: '#black', fontWeight: "600" }}>Company : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>SMS Logistics</p></Typography>
        <Typography style={{ marginTop: '-40px', textAlign: 'left', position: 'absolute', fontSize: '15px', color: '#black', fontWeight: "600" }}>Company Email : <p style={{ fontWeight: "400", display: 'inline-block', marginLeft: '5px' }}>sms.support@gmail.com</p></Typography>


      </Box>
      <Divider variant="middle" style={{ marginTop: "5.6rem", width: "26rem", marginLeft: "34rem", height: '1px', backgroundColor: '#a2a1a1' }} />
      <Divider variant="middle" style={{ marginTop: "8rem", width: "26rem", marginLeft: "34rem", height: '1px', backgroundColor: '#a2a1a1' }} />
      <Box
        width="25rem"
        height="25rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="82%"
        left="37.5%"
        transform="translate(-50%, -50%)"
      >
        <Typography color="black" fontSize='12px' fontWeight='400' textAlign='center' >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        </Typography>

      </Box>

      <div style={{ marginTop: "21rem", display: "flex", flexDirection: "row" }}>
        <div className="card mb-4" style={{ width: "45rem", marginLeft: "5rem" }}>
          <div className="card-header">Account Details</div>
          <div className="card-body">
            <form>

              <div className="mb-3">
                <label className="small mb-1" for="inputUsername">Your Organization Name</label>
                <input className="form-control" id="inputUsername" type="text" placeholder="Enter your Organization Name"  />
              </div>

              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                  <label className="small mb-1" for="inputFirstName">Organization Email</label>
                  <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your organization email"  />
                </div>

                <div className="col-md-6">
                  <label className="small mb-1" for="inputLastName">Organization Contact Number</label>
                  <input className="form-control" id="inputLastName" type="text" placeholder="Enter your Organization contact number"  />
                </div>
              </div>

              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                  <label className="small mb-1" for="inputOrgName">Organization Address</label>
                  <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization address"  />
                </div>

                <div className="col-md-6">
                  <label className="small mb-1" for="inputLocation">Personal Name</label>
                  <input className="form-control" id="inputLocation" type="text" placeholder="Enter your personal name" />
                </div>
              </div>

              <div className="mb-3">
                <label className="small mb-1" for="inputEmailAddress">Personal Email</label>
                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your personal email address" />
              </div>

              <div className="row gx-3 mb-3">

                <div className="col-md-6">
                  <label className="small mb-1" for="inputPhone">Personal Contact Number </label>
                  <input className="form-control" id="inputPhone" type="tel" placeholder="Enter your personal contact number"  />
                </div>

                <div className="col-md-6">
                  <label className="small mb-1" for="inputBirthday">Personal Email</label>
                  <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your personal email"/>
                </div>
              </div>

              <button className="btn btn-primary" style={{ backgroundColor: "#3da58a", borderStyle: "none" }} type="button">Save changes</button>
            </form>
          </div>
        </div>

        <div className="card mb-4" style={{ width: "35rem", marginLeft: "2rem" }}>
          <div className="card-header">Manage your gallery </div>
          <div className="card-body">
            <p>upload image to the gellery and you can remove existing images also here is the option to manage your gellery.</p>
            <form>
              <label htmlFor="file-upload">
                <input
                  id="file-upload"
                  type="file"
                  style={{ display: 'none' }}

                />
                <Button
                  variant="contained"
                  component="span"
                  startIcon={<CloudUploadOutlinedIcon />}
                  style={{ backgroundColor: "#3da58a", borderStyle: "none" }}
                >
                  Upload image to your gellary
                </Button>
              </label>
              <p style={{ color: "red" }}>Maximum 12 images only</p>
            </form>
            <Box padding='10px' width="400px" marginLeft='auto' marginRight='auto'>
              <Masonry columnsCount={3} gutter="10px">
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
      </div >


      <div className="card mb-4" style={{ width: "1300px", marginLeft: "auto", marginRight: 'auto', padding: "10px 10px 10px 10px" }}>
        <div className="card-header">Your gallery</div>
        <div className="card-body">

          <Masonry columnsCount={3} gutter="10px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
          <div style={{marginTop:"20px"}}>
            <h3><center>You are in end of the gellery..!</center></h3>
          </div>
        </div>
      </div>






    </>

  )
}

export default dashboard