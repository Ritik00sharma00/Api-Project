const task = require('../model/user.cjs');

exports.printAlltask = async (req, res) => {
    try {
        const tasks = await task.find();
        res.json(tasks);
    } catch (err) {
        res.status(401).json({
            message: err.message
        });
    }

    exports.taskbyId = async (req, res) => {
        try {
            const tasks = await task.findByid(req.params.user);
            res.json(tasks);
        } catch (err) {
            res.status(500).json({message: err.message});
            res.status(500).json({
                message: 'Server Error'
            });
        }
    }

    exports.createTask = async(req, res) => {
        try
        {
            const ntask=new task(req.body);
            const savedtask= ntask.save();
            res.status(201).json(savedtask);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    
    }

    exports.updateUser= async (req, res) => {
        try {
            const updatedTask = await task.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedTask);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    exports.deleteUser= async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }


}