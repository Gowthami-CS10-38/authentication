const express = require('express')
const router = express.Router()
const { registerUser,loginUser,existingUser } = require('../controllers/userController')
const{protect} = require('../middleware/authenticate')


router.post('/', registerUser)
router.post('/Login', loginUser)
router.get('/existing', protect , existingUser)

module.exports = router