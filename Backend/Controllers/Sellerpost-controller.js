import sellerPost from '../Models/SellerPost-model.js'

export const addNewPost = async (req, res) => {
    console.log(req.body)

    try {
        let file = 'N/A'
        if (req.file) {
            file = req.file.filename
        }

        const prefix = 'TID'
        const tripID = (prefix + Date.now());
   

        const data = req.body
        const post = new sellerPost({
            Trip_ID : tripID,
            Seller_ID: data.Seller_ID,
            Trip_Name:data.Trip_Name,
            No_Of_Days: data.No_Of_Days,
            Price:data.Price,
            Accomodation:data.Accomodation,
            Meals:data.Meals,
            Transport:data.Transport,
            About_Trip:data.About_Trip,
            What_will_You_Do:data.What_will_You_Do,
            Thumbnail:file,
            Images:null,
            Destinations:data.Destinations,
            Activities:data.Activities

        })

        const newpost = await post.save()
        if(newpost){
            res.status(201).json({
                message: "Data adding successfull..!",
                payload: newpost
            })
        }else {
            res.status(401).json({
              message: "Somthing Went Wrong In data adding..!"
            })
          }



    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Somthing Went Wrong..!",
            error: error
        })
    }
}

export const uploadImages = async (req, res) => {
    try {
      let file = 'N/A'
      if (req.file) {
        file = req.file.filename
      }
  
      const id = { Trip_ID: req.body.Trip_ID }
      let images = []
  
      if (req.files.length > 0) {
        images = req.files.map(file => {
          return {
            img: file.filename
  
          }
        }
  
        )
      }
  
      const newImages = {
        Images: images
      }
      console.log(newImages)
      const updateimgs = await sellerPost.findOneAndUpdate(id, newImages, { new: true });
      console.log("methanin pahala response eka")
      console.log(updateimgs)
      if (updateimgs) {
        res.status(201).json({
          message: "Images updated..!",
          payload: updateimgs
        })
      } else {
        res.status(400).json({
          message: "Images Update failed..!",
          error: error
        })
      }
  
    } catch (error) {
      res.status(500).json({
        message: "Somthing Went Wrong..!",
      })
    }
  }