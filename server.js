import express from 'express';
import { body, param, validationResult } from 'express-validator';
import connectDatabase from './config/db.js';
import Task from './models/Task.js';

const app = express();

connectDatabase();

app.use(express.json());


app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.post(
    '/api/tasks',
    body('title').notEmpty().withMessage('Title is required'), 
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { title } = req.body;
            const newTask = new Task({ title });
            await newTask.save();
            res.json(newTask);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

app.put(
    '/api/tasks/:id',
    param('id').isMongoId().withMessage('Invalid task ID'), 
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const task = await Task.findById(req.params.id);
            if (!task) {
                return res.status(404).json({ msg: 'Task not found' });
            }

            task.completed = !task.completed;
            await task.save();
            res.json(task);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

app.delete(
    '/api/tasks/:id',
    param('id').isMongoId().withMessage('Invalid task ID'), 
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const task = await Task.findById(req.params.id);
            if (!task) {
                return res.status(404).json({ msg: 'Task not found' });
            }

            await task.remove();
            res.json({ msg: 'Task removed' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

app.get('/', (req, res) => 
    res.send('HTTP GET request sent to root API endpoint')
);

app.listen(3000, () => console.log('Server is running on port 3000'));