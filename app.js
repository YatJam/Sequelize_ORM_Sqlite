const express = require('express')
const { sequelize, HigherGroup, MainGroup } = require('./models')

const app = express()
app.use(express.json())

app.post('/highergroup', async(req, res) => {
    const { name } = req.body

    try{
        const higherGroup = await HigherGroup.create({ name })

        return res.json(higherGroup)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.get('/highergroups', async (req, res) => {
    try {
        const higherGroups = await HigherGroup.findAll()

        return res.json(higherGroups)
    } catch(err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
    }
})

app.get('/highergroups/:id', async (req, res) => {
    const id = req.params.id
    try {
        const higherGroup = await HigherGroup.findOne({
            where: { id },
        })

        return res.json(higherGroup)
    } catch(err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
    }
})

app.post('/maingroup', async (req, res) => {
    const { name, higherGroupId } = req.body

    try {
        const higherGroup = await HigherGroup.findOne({ where: { id: higherGroupId }})

        const mainGroup = await MainGroup.create({ name, higherGroupId: higherGroup.id })

        return res.json(mainGroup)
    } catch(err) {
        console.log(err)
        return res.status(500).json({err})
    }
})

app.listen({ port: 5000 }, async () => {
    console.log('Server up on http://localhost:5000')
    await sequelize.authenticate()
    console.log('Database Connected!')
})