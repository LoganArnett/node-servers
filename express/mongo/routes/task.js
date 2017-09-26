import { Router } from 'express';
import { Task } from '../models';
const router = Router();

/** Get ALL Tasks */
router.get('/', (req, res) => {
    Task.find((err, tasks) => {
        if (err) return next(err);
        res.json(tasks);
    });
});

/** Get Task by id */
router.get('/:id', (req, res) => {
    Task.findById(req.params.id, (err, task) => {
        if (err) return next(err);
        res.json(task);
    });
});

export default router;