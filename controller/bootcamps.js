//@desc     Get all bootcamps
//@route    '/api/v1/bootcamps'
//@access    Public
exports.getBootCamps = (req,res, next)=> {
    res.status(200).json({
        success:true, 
        msg: `This route to get all bootcamps`
    });
}

//@desc     Get single bootcamp
//@route 'api/v1/bootcamps/:id
//@access  Public

exports.getBootCamp =(req, res, next)=>{
    res.status(200).json({
        success: true,
        msg:`This returns single bootcamp ${req.params.id}`
    })
}


//@desc  create bootcamp
//@route  'api/v1/bootcamps
//@access  Private

exports.createBootCamp =(req, res, next) =>{
    res.status(200).json({
        success:true,
        msg:`Create bootcamp`
    })
}

//@desc  update bootcamp
//@route  'api/v1/bootcamps/:id
//@access  Private

exports.updateBootCamp =(req, res, next) =>{
    res.status(200).json({
        success:true,
        msg:`Update bootcamp ${req.params.id}`
    })
}

//@desc  delete bootcamp
//@route  'api/v1/bootcamps/:id
//@access  Private

exports.deleteBootCamp =(req, res, next) =>{
    res.status(200).json({
        success:true,
        msg:`delete bootcamp ${req.params.id}`
    })
}

