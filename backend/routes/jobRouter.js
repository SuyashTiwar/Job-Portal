import express from 'express'
import{getSingleJob,deleteJob, getAllJobs,getmyJobs,postJob,updateJob} from '../controllers/jobController.js'

import {isAuthorized } from "../middleware/auth.js"

const router=express.Router();

router.get('/getAll',getAllJobs);
router.post("/post",isAuthorized,postJob);
router.get("/getmyjobs",isAuthorized,getmyJobs);
router.put("/update/:id",isAuthorized,updateJob);
router.delete("/delete/:id",isAuthorized,deleteJob)
router.get("/:id",isAuthorized,getSingleJob)
export default router;