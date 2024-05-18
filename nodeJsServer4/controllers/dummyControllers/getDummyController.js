const getDummyController = (req, res) => {
    return res.json({
        userName: "xyz",
        rollNo: 123
    })
}

module.exports = {
    getDummyController
}