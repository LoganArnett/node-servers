import { Router } from 'express';
import { User } from '../models';
const router = Router();

/** Get ALL Users */
router.get('/', (req, res) => {
    User.find((err, users) => {
        if (err) return next(err);
        res.json(users);
    });
});

/** Get User by id */
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

/** Create User */
router.post('/', (req, res) => {
    User.create(req.body, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

/** Update User by id */
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

/** Delete User by id */
router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) return next(err);
        res.json({});
    });
});

export default router;