import express from 'express'
import {getContact, getContacts, deleteContact, createContact, updateContact} from '../controllers/contactsController.js'


const router = express.Router()

router.get('/contacts', getContacts )
router.get('/contacts/:id', getContact)
router.post('/contacts', createContact)
router.delete('/contacts/:id', deleteContact)
router.put('/contacts/:id', updateContact)

export default router
