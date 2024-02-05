const taskref = require('../model/user.js');

exports.printAlltaskref = async (req, res) => {
    try {
        const taskrefs = await taskref.find({}); 
        res.json(taskrefs);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};


    exports.taskrefbyId = async (req, res) => {
        try {
            const taskrefs = await taskref.find({id:req.params.id});
            res.json(taskrefs);
        } catch (err) {
            res.status(500).json({message: err.message});
            res.status(500).json({
                message: 'Server Error'
            });
        }
    }
    exports.createtaskref = async (req, res) => {
        try {
             const { task, uniqueNumber} = req.body;
    
            const newTask = new taskref({
                task,
                uniqueNumber
            });
            const savedTask = await newTask.save();
    
            res.status(201).json(savedTask);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
    

    exports.updatetaskref = async (req, res) => {
        try {
            const { task, uniqueNumber, description, Date, Time, employeeName,priority} = req.body;
    
            await taskref.updateOne(
                { id: req.params.id },
                { $set: { task, uniqueNumber, description, Date, Time, employeeName,priority } }
            );
    
            res.status(200).json({ message: 'Task updated successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
    

    exports.deleteUser= async (req, res) => {
        try {
            await taskref.findByIdAndDelete(req.params.id);
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

 