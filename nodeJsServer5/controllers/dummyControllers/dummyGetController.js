const dummyGetController = (req, res) => {
    return res.json({
        success: true,
        marks: 90,
        grdes: `A`
    })
}

module.exports = dummyGetController