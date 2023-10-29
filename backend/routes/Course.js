const express = require('express')
const router = express.Router()

const {
    addCourse,
    setAllPref,
    allotCourse , 
    allAvilableCourse , 
    allCourse , 
    selectedCourse
} = require("../controller/Course")

router.route('/addCourse').post(addCourse) 
router.route('/setAllPref').post(setAllPref)
router.route('/allotCourse').post(allotCourse)
router.route('/allAvilableCourse').get(allAvilableCourse)
router.route('/allCourse').get(allCourse)
router.route('/selectedCourse/:id').get(selectedCourse)

module.exports = router