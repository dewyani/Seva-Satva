const express = require('express')
const router = express.Router()

const {
    addGrievance ,
    allGrievance ,
    resolveGrievance ,
} = require("../controller/Grievance")

router.route('/addGrievance').post(addGrievance)
router.route('/allGrievance').get(allGrievance)
router.route('/resolveGrievance/:id').post(resolveGrievance)

module.exports = router