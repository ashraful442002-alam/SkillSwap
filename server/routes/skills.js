import express from 'express';
import { ObjectId } from 'mongodb';
import { database } from '../db.js';

const router = express.Router();

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skillsCollection = database.collection('skills');
    const result = await skillsCollection.find().toArray();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
router.get('/test', (req, res) => {
  console.log(' TEST ROUTE HIT');
  res.send('Test Route Working');
});

// Get single skill by id
router.get('/:id', async (req, res) => {
  console.log(' GET /skills/:id hit');

  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({
        message: 'Invalid skill id',
      });
    }

    const skillsCollection = database.collection('skills');

    const result = await skillsCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!result) {
      return res.status(404).send({
        message: 'Skill not found',
      });
    }

    res.send(result);
  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: 'Server Error',
    });
  }
});

// Add skill
router.post('/', async (req, res) => {
  try {
    const skillsCollection = database.collection('skills');

    const result = await skillsCollection.insertOne(req.body);

    res.status(201).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Update skill
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({
        message: 'Invalid skill id',
      });
    }

    const skillsCollection = database.collection('skills');

    const result = await skillsCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: req.body },
    );

    if (result.matchedCount === 0) {
      return res.status(404).send({
        message: 'Skill not found',
      });
    }

    res.send({
      success: true,
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: 'Server Error',
    });
  }
});

// Delete skill
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send({
        message: 'Invalid skill id',
      });
    }

    const skillsCollection = database.collection('skills');

    const result = await skillsCollection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).send({
        message: 'Skill not found',
      });
    }

    res.send({
      success: true,
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: 'Server Error',
    });
  }
});

export default router;
