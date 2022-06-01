const express = require('express')
const router = express.Router()

// Getting all subscribers
router.get('/', (req, res) => {
  res.send('Hello World')
})
// Get one subscriber
router.get('/:id', (req, res) => {

})
// Creating subscriber
router.post('/', (req, res) => {

})
// Update one subscriber
router.patch('/:id', (req, res) => {

})
// Delete subscriber
router.delete('/:id', (req, res) => {

})

module.exports = router

