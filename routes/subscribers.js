const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// Getting all subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get one subscriber
router.get('/:id', getSubscriber, (req, res) => {
  res.send(res.subscriber.name)
})

// Creating subscriber
router.post('/', async (req, res) => {
  const subscriber = new Subscriber ({
    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel
  })
  try {
    const newSubscriber = await subscriber.save()
    res.status(201).json(newSubscriber)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Update one subscriber
router.patch('/:id', (req, res) => {

})

// Delete subscriber
router.delete('/:id', (req, res) => {

})

async function getSubscriber(req, res, next){
  let subscriber
  try {
    subscriber = await Subscriber.findById(req.params.id)
    if(subscriber == null){
      return res.status(404).json({ message: 'Cannot find subscriber' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.subscriber = subscriber
  next()
}

module.exports = router

