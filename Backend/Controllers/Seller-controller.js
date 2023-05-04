import seller from '../Models/Seller-model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

let refreshtokens = [];

export const sellerSignup = async (req, res) => {
  console.log(req.body)
  try {
    let file = 'N/A'
    if (req.file) {
      file = req.file.filename
    }
    const existSeller = await seller.findOne({ Company_email: req.body.Company_email });
    if (existSeller) {
      res.status(400).json({
        message: "Email already registered..!"
      })
    } else if (!existSeller) {
      const prefix = 'SID'
      const Seller_ID = (prefix + Date.now());

      const Hash_password = await bcrypt.hash(req.body.Password, 10);
      const newSeller = new seller({
        Seller_ID: Seller_ID,
        Company_name: req.body.Company_name,
        Company_email: req.body.Company_email,
        Company_contact_no: req.body.Company_contact_no,
        Company_address: req.body.Company_address,
        Personal_name: req.body.Personal_name,
        Personal_contact_no: req.body.Personal_contact_no,
        Personal_address: req.body.Personal_address,
        Personal_email: req.body.Personal_email,
        Hash_password: Hash_password,
        ProfilePicture: file,
        Description: "Type somthing here...",
        ImagesCom: "N/A"

      })
      const newAcct = await newSeller.save()
      if (newAcct) {
        res.status(201).json({
          message: "Registration successfull..!",
          payload: newAcct
        })
      } else {
        res.status(401).json({
          message: "Somthing Went Wrong In Account Creating..!"
        })
      }
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Somthing Went Wrong..!",
      error: error
    })
  }
}

export const login = async (req, res) => {
  try {
    const registeredSeller = await seller.findOne({ Company_email: req.body.Company_email })
    if (registeredSeller) {
      const enteredpwd = req.body.Password;
      const dbpwd = registeredSeller.Hash_password;

      const chkpwd = await bcrypt.compare(enteredpwd, dbpwd)

      if (chkpwd) {
        const token = jwt.sign({ Company_email: req.body.Company_email }, process.env.JWT_TOKEN_KEY, { expiresIn: '20s' })
        const refreshtoken = jwt.sign({ Company_email: req.body.Company_email }, process.env.REFRESH_TOKEN_KEY, { expiresIn: '40s' })

        refreshtokens.push(refreshtoken)
        res.status(200).json({
          message: 'Login sucessfull..!',
          token,
          refreshtoken,
          payload: registeredSeller
        })
      } else {
        res.status(401).json({
          message: "Incorrect password..!"
        })

      }
    } else if (!registeredSeller) {
      res.status(404).json({
        message: "Seller not registered..!"
      })

    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Server error..!",
      error: error
    })
  }

}

export const tokenRefresh = (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken == null) {
    res.status(401).json({
      message: "Unauthorized..!"
    })
  } else if (!refreshtokens.includes(refreshToken)) {
    res.status(403).json({
      message: "Forbidden..!"
    })
  } else {
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (err, user) => {
      if (err) {
        res.status(403).json({
          message: "Forbidden..!"
        })
      } else {
        const token = jwt.sign({ Company_email: req.body.Company_email }, process.env.JWT_TOKEN_KEY, { expiresIn: "20s" });
        res.status(201).json({
          message: "Session Extended..!",
          token
        })
      }
    })
  }
}

export const Signout = (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;
    refreshtokens = refreshtokens.filter(token => token !== refreshToken);
    res.status(200).json({
      message: "Signout successful!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
      error: error,
    });
  }
}

export const updateSeller = async (req, res) => {
  console.log(req.body)
  try {

    const id = { Seller_ID: req.body.Seller_ID }
    const Hash_password = await bcrypt.hash(req.body.Password, 10);

    const updateSeller = {
      Company_name: req.body.Company_name,
      Company_email: req.body.Company_email,
      Company_contact_no: req.body.Company_contact_no,
      Company_address: req.body.Company_address,
      Personal_name: req.body.Personal_name,
      Personal_contact_no: req.body.Personal_contact_no,
      Personal_address: req.body.Personal_address,
      Personal_email: req.body.Personal_email,
      Hash_password: Hash_password,
      Description: req.body.Description,

    }

    const update = await seller.findOneAndUpdate(id, updateSeller, { new: true })
    if (update) {
      res.status(201).json({
        message: "Detailes updated..!",
        payload: update
      })
    } else {
      res.status(400).json({
        message: "Update failed..!",
        error: error
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

export const updateDP = async (req, res) => {
  try {
    const id = { Seller_ID: req.body.Seller_ID }
    let file = 'N/A'
    if (req.file) {
      file = req.file.filename
    }
    const newDP = {
      ProfilePicture: file,
    }

    const updates = await seller.findOneAndUpdate(id, newDP, { new: true });
    if (updates) {
      res.status(201).json({
        message: "Profile picture updated..!",
        payload: updates
      })
    } else {
      res.status(400).json({
        message: "Profile picture Update failed..!",
        error: error
      })
    }

  } catch (error) {
    res.status(500).json({
      message: "Somthing Went Wrong..!",
    })
  }
}

export const uploadImages = async (req, res) => {
  try {
    let file = 'N/A'
    if (req.file) {
      file = req.file.filename
    }

    const id = { Seller_ID: req.body.Seller_ID }
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
      ImagesCom: images
    }
    console.log(newImages)
    const updateimgs = await seller.findOneAndUpdate(id, newImages, { new: true });
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

export const deleteSeller = async (req, res) => {
  console.log(req.body.Seller_ID)
  try {
    let id = req.body.Seller_ID
    const success = await seller.findOneAndDelete({ Seller_ID: id })

    if (success) {
      res.status(200).json({
        message: "deleted..!"
      })
    } else {
      res.status(400).json({
        message: "error..!"
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "server Error..!"
    })
  }
}