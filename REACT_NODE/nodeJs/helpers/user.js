const { userModel } = require('../schemas/userSchemas');
const { INTERNAL_ERROR, ERROR_NAME } = require('../constants')

const addUser = (req, res) => {
    console.log(req.body)
    try{
        let newUser = new userModel(req.body);
        newUser.save().then((err, data) => {
            if(err) {
                console.log(err);
            }
            res.send('Success');
        }).catch(e => {
            res.status(INTERNAL_ERROR).send(ERROR_NAME);
        });
    } catch(e) {
        res.status(INTERNAL_ERROR).send(ERROR_NAME)
    }
}

const getList = (req, res) => {
    try{
        userModel.find({},{_id: 0 , __v: 0 }, function (err, userDetails) {
            if (err) 
                return console.error(err);
                console.log(userDetails);
                res.send(userDetails)
    })
    }
    catch(e) {
        res.status(INTERNAL_ERROR).send(ERROR_NAME)
    }
}

const deleteUser = (req, res) => {
    try{
        console.log(req.params.userName)
        userModel.deleteOne({userName:req.params.userName}, (err,data) => {
            err && console.log("err", err)
            err ? res.status(500).send(ERROR_NAME) : res.send("user removed")
        } )
    }
    catch(e) {
        res.status(INTERNAL_ERROR).send(ERROR_NAME)
    }
}

const deleteAllUser = (req, res) => {
    try{
        userModel.deleteMany({}, (err, data ) => {
            err && console.log("err", err)
            err ? res.status(500).send(ERROR_NAME) : res.send("datas removed")
        })
    }
    catch(e) {
        res.status(INTERNAL_ERROR).send(ERROR_NAME)
    }
}

const getUserList = (req, res) => {
    try{
        userModel.find({},{_id: 0 , __v: 0 }, function (err, userDetails) {
            if (err) 
                return console.error(err);
                console.log(userDetails);
                res.send(userDetails)
    })
    }
    catch(e) {
        res.status(INTERNAL_ERROR).send(ERROR_NAME)
    }
}

module.exports = {
    addUser,
    getList,
    deleteUser,
    deleteAllUser,
    getUserList
}