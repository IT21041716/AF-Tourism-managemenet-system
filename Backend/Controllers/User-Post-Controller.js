import Post from '../Models/User-Post-model.js'


export const addPost = async (req, res) => {
  console.log(req.body)
 try{
  let file = 'N/A'
  if (req.file) {
    file = req.file.filename
  }
      const prefix = 'PID'
      const POST_ID = (prefix + Date.now())
      console.log(POST_ID)

      const newPost = new Post({
        post_id: POST_ID,
        user_id: req.body.user_id,
        post_title: req.body.post_title,
        post_description: req.body.post_description,
        post_date: req.body.post_date,
        post_location: req.body.post_location,
        post_remark:req.body.post_remark,
        post_image: {
          data: fs.readFileSync('UploadUserPostImages/' + req.file.filename),
          contentType:"image/png"
        }

      });

      console.log(newPost);
      const newAcct = await newPost.save();
      if (newAcct) {
  
        res.status(201).json({
          message: "Post Created Sucessfull..!",
          payload: newAcct
        })
      } else {

        res.status(400).json({
          message: "Somthing Went Wrong In Post Creating..!"
        })
      } 
  } catch (error) {
    res.status(500).json({
      message: "Somthing Went Wrong..!",
      error: error
    })
  }
}

export const getAllPost = async (req, res) => {
  try {
    const allPost = await Post.find();
    if (allPost) {
      res.status(200).json({
        message: "Fetched Successfull..!",
        payload: allPost
      })
    }
  }catch(error){
    console.log(error)
  }
}

export const getOnePost = async (req, res) => {
  try {
    let post_id = req.params.post_id;
    const post = await Post.findById(post_id);
    if (post) {
      res.status(200).json({post
      })
    }
  }catch(error){
    console.log(error)
  }
}


export const updatePost =  (async(req,res)=>{

    let file = 'N/A'
    if (req.file) {
        file = req.file.filename
    }

    let post_id = req.params.post_id;

    const post_title = req.body.post_title;
    const post_description = req.body.post_description;
    const post_date = req.body.post_date;
    const post_location = req.body.post_location;
    const post_remark = req.body.post_remark;
    const post_image = file;
   
    const updatePost = {
        post_title,
        post_description,
        post_date,
        post_location,
        post_remark,
        post_image
    }
    console.log(updatePost);
    const update = await Post.findByIdAndUpdate(post_id, updatePost).then(() => {
        res.status(200).send({status: "Report Updated"})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status: "Error with updation data"});
    })

    
})

export const deletePost = (async (req,res) =>{
     let post_id = req.params.post_id;

     await Post.findByIdAndDelete(post_id).then(() => {
        res.status(200).send({status: "Post deleted"});
     }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
     })
})
