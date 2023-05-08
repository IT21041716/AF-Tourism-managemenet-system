import React, { useState } from 'react';
import Header from './header';
import { motion,useCycle  } from 'framer-motion';
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { faEdit,faHandPointer,faStar  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Button } from 'react-bootstrap';
import './assest/css/userProfile.css'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardFooter
  } from 'mdb-react-ui-kit';
 

const colors = ["white", "#eee3e7", "#ead5dc", "#eec9d2", "#f4b6c2", "#f6abb6","pink","#f6abb6","#f4b6c2","#eec9d2","#ead5dc","#eee3e7"];

export default function UserProfile() {

    const [color, cycleColor] = useCycle(...colors);
    const {id} = useParams();

      const [user_id,setUserId] = useState('');
      const [userName,setUserName] = useState('');
      const [birthday,setBirthday] = useState('');
      const [country,setCountry] = useState('');
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
      const [gender,setGender] = useState('');
      const [tel_no,setTelNo] = useState('');
      const [badge,setBadge] = useState('');
      const [showModal, setShowModal] = useState(false);

      const [posts,setPosts] = useState([]);

      const handleShowModal = () => setShowModal(true);
      const handleCloseModal = () => setShowModal(false);

      const getPost = () => {
        console.log("hi")
        axios.get(`http://localhost:5000/userPost/post/${id}`).then((res)=>{
            console.log(res.data.posts);
            setPosts(res.data.posts);
        }).catch((err)=>{
            alert(err.message);
        })
        }

        useEffect(() => getPost(), []);

    useEffect(() => {
        const timer = setInterval(() => {
          cycleColor();
        }, 1000);
        return () => clearInterval(timer);
      }, [cycleColor]);

      

      const getUser = () => {
        console.log("hi")
        axios.get(`http://localhost:5000/user/user/${id}`).then((res)=>{

            setUserId(res.data.user.user_id);
            setUserName(res.data.user.userName);
            setBirthday(res.data.user.birthday);
            setCountry(res.data.user.country);
            setEmail(res.data.user.email);
            setPassword(res.data.user.password);
            setGender(res.data.user.gender);
            setTelNo(res.data.user.tel_no);
            setBadge(res.data.user.badge)
           
        }).catch((err)=>{
            alert(err.message);
        })
        }

        useEffect(() => getUser(), []);

        const buttonVariants = {
            hover: {
              scale: 1.03,
              transition: {
                duration: 0.3,
              },
            },
          };
        
          const buttonStyles = {
            backgroundColor: 'blue',
            border: 'none',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            borderRadius: '8px',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
            transition: 'background-color 0.3s',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          };
        
          const iconStyles = {
            marginRight: '5px',
          };
        

  return (
    <>
        <Header/>
        
        <center>
        <motion.div
            style={{
                width: "96%",
                border: "2px solid white",
                borderRadius: "20px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
                backgroundColor:"white",
            }}
            >
            <div style={{ position: "relative" }}>
            <img src="https://th.bing.com/th/id/R.e246989a2c6af5458b9eb6747f104418?rik=pVgGC6lJ4Y34cA&pid=ImgRaw&r=0" style={{ height: "500px", width: "98%", marginTop:'10px', borderRadius:'20px' }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="right-angle" style={{backgroundColor:'white', marginRight:'850px', height:'500px', marginTop:'10px', borderBottomLeftRadius:'20px', borderTopLeftRadius:'20px',opacity: 0.5

        }}>
            <style>
                {`
                .right-angle::after {
                content: "";
                position: absolute;
                top: 10px;
                right: 760px;
                width: 1px;
                height: 20px;
                border-left: 92px solid white ;
                border-top: 500px solid transparent;
                opacity: 0.8
                }
                `}
            </style>
            <div className="right-angle"></div>
           <br/>
            <motion.h1
                style={{ 
                    fontSize: "30px", 
                    fontWeight: "bold",  
                    padding: "20px", 
                    fontStyle: "italic",
                    textShadow: "2px 2px white",
                    color: "black",
                    transition: "color 0.10s ease",
                    fontFamily:'Myanmar Text'
                }}
                >
                <br/>Hello {userName} ! <br/>
                <span style={{ color: 'black'}}>Welcome to Your Profile </span>
                {/* <span style={{ color: 'black', }}> Your Profile</span> */}
                </motion.h1> 
                {
                badge == "Silver" ? 
                <div style={{ backgroundColor: "#ffd700",fontFamily:'Comic Sans MS', display: "flex", justifyContent: "center", alignItems: "center", fontSize: "17px", fontWeight: "bold", color: "#333" }}>
                <span>{badge} Profile <br/></span>
                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faHandPointer} />
                </div> : 
                badge == "Gold" ?
                <div>
                    <div style={{ alignItems: "center", color:'#D4AF37'}}><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
                <div style={{ alignItems: "center", fontSize: "26px", fontWeight: "bold", color: "black" , fontFamily:'Comic Sans MS'}}>
                <span>{badge}en Profile</span>
                </div>  </div>
                
                :
                badge == "Platinum" ?
                <div style={{ backgroundColor: "#ffd700", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "17px", fontWeight: "bold", color: "#333" }}>
                <span >{badge} Profile</span><br/>
                <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                </div> : null
            } <br/>
                <Button style={{marginLeft:'12px',  backgroundColor:'#800000', borderColor:'black'}} onClick={handleShowModal}>View Your Profile <FontAwesomeIcon icon={faHandPointer} /></Button>
                <br/>
                <a href='' style={{fontFamily:'MV Boli', color:'black', textDecoration: 'none'}}> <br/>Get Your Certificate<br/><br/></a>

                </div>

            </div>
            </div>
            
                    <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Personal Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <center >
                    <div className="profile-details">
                        <h5 className="profile-details__title">Name - </h5>
                        <p className="profile-details__value">{userName}</p>
                    </div>
                    <div className="profile-details">
                        <h5 className="profile-details__title">Birthday - </h5>
                        <p className="profile-details__value">{birthday}</p>
                    </div>
                    <div className="profile-details">
                        <h5 className="profile-details__title">Country - </h5>
                        <p className="profile-details__value">{country}</p>
                    </div>
                    <div className="profile-details">
                        <h5 className="profile-details__title">Email - </h5>
                        <p className="profile-details__value">{email}</p>
                    </div>
                    <div className="profile-details">
                        <h5 className="profile-details__title">Gender - </h5>
                        <p className="profile-details__value">{gender}</p>
                    </div>
                    <div className="profile-details">
                        <h5 className="profile-details__title">Tel No - </h5>
                        <p className="profile-details__value">{tel_no}</p>
                    </div>
                    </center>
                    <div className="edit-button-container">
                    <motion.button 
                        type="submit" 
                        className="edit-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Edit
                    </motion.button>
                    </div> 

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                        </Button>
                    </Modal.Footer>
                    </Modal>
            
            

             <br/> <br/>
           <h2 style={{fontFamily:'Rockwell', fontSize:'40px'}}>Your Status</h2>

         <MDBRow className='row-cols-1 row-cols-md-2 g-4 no-border'>
        {posts.map(post => (
            <MDBCol > 
            <MDBCard style={{ border: "none" }}>
            <button className="btn btn-block mb-2" 
                         style={{  backgroundColor:'#800000', borderColor:'black', borderRadius: "20px", color: "white", fontWeight: "bold", textShadow: "2px 2px 4px rgba(0,0,0,0.4)", transition: "all 0.3s ease", width:'20%' }}
                          >Edit <FontAwesomeIcon icon={faEdit} />
                          </button>
            <img src="https://i2.wp.com/otarafoundation.com/wp-content/uploads/2018/09/40656179_10155906804512183_7160866786412331008_n.jpg?fit=960%2C640&ssl=1" style={{borderRadius:'10px'}}/>
            <MDBCardBody >
            
                <MDBCardTitle style={{ fontSize: "25px" }}>{post.post_title}</MDBCardTitle>
                <MDBCardText style={{ fontSize: "16px" }}>
                    {post.post_description}
                </MDBCardText>
                <MDBCardText style={{ fontSize: "14px" }}>
                    Location - {post.post_location}
                </MDBCardText>
                <MDBCardText style={{ fontSize: "14px" }}>
                    Remark - {post.post_remark}
                </MDBCardText>
                <MDBCardFooter style={{borderRadius:'10px'}}>
                <small className='text-muted' style={{ fontSize: "10px" }}>{post.post_date}</small>
                </MDBCardFooter>
            </MDBCardBody>
            </MDBCard>
            </MDBCol>
        ))}
           
        </MDBRow>
        </motion.div>
        

        </center>
        
    </>
  );
}