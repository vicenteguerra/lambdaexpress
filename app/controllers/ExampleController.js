let ExampleController = function(){
    this.index = index;
};

let index = async function (req, res) {
    /*
        Your awesome code
     */
    return res.json({
        success: true
    })
};

module.exports = new ExampleController();
