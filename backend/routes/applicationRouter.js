import express from 'express'
import {postApplication,jobSeekerDeleteApplication,jobseekerGetAllApplications,employerGetAllApplications} from "../controllers/applicationController.js"
import {isAuthorized }from "../middleware/auth.js"
const router=express.Router();

router.get("/employer/getall",isAuthorized,employerGetAllApplications);
router.get("/jobseeker/getall",isAuthorized,jobseekerGetAllApplications);
router.delete("/delete/:id",isAuthorized,jobSeekerDeleteApplication);
router.post("/post",isAuthorized,postApplication)

export default router;