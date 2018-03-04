const express = require('express')
const router = express.Router()

const UserModel = require('../models/users')

router.get('/:name', function (req, res, next) {
    const name = req.params.name

    UserModel.getUserByName(name).then(function (user) {
        res.send({ data: user, status: true })
    }).catch(next)
})

// POST /posts/add 注册一个用户
router.post('/add', function (req, res, next) {
    const name = req.fields.name
    const password = req.fields.password
    const phone = req.fields.phone
    const email = req.fields.email
    const logoUrl = req.fields.logoUrl
    const createtime = req.fields.createtime

    // 校验参数
    try {
        if (!name.length) {
            res.send({ error: '请填写用户名', status: false })
        }
        if (password.length < 6) {
            res.send({ error: '密码至少 6 个字符', status: false })
        }
    } catch (e) {
        res.send({ error: e.message, status: false })
    }

    let user = {
        name: name,
        password: password,
        phone: phone,
        email: email,
        logoUrl: logoUrl,
        createtime: createtime
    }

    UserModel.create(user)
        .then(function (result) {
            // 此 user 是插入 mongodb 后的值，包含 id
            let user = result.ops[0]
            res.send({ data: user, status: true })
        })
        .catch(next)
})

module.exports = router