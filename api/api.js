exports.inputdata = async function(req, res) {
    try {  
        res.json(
            {
                'foo': "bar",
                "id":192,
                age:"NEME"
            }
            );
    } catch (err) {  
        res.status(500)  
        res.send(err.message)  
    } 
};