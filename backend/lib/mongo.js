const config = require('config-lite')(__dirname)
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
mongolass.connect(config.mongodb)

exports.User = mongolass.model('User', {
    name: { type: 'string', required: true },
    password: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    email: { type: 'string', required: true },
    logoUrl: { type: 'string', required: true },
    createtime: { type: 'string', required: true }
})
exports.User.index({ name: 1 }, { unique: true }).exec()// 根据用户名找到用户，用户名全局唯一

const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')

// 根据 id 生成创建时间 createtime
mongolass.plugin('addCreateTime', {
    afterFind: function (results) {
        results.forEach(function (item) {
            item.createtime = moment(objectIdToTimestamp(item.id)).format('YYYY-MM-DD HH:mm')
        })
        return results
    },
    afterFindOne: function (result) {
        if (result) {
            result.createtime = moment(objectIdToTimestamp(result.id)).format('YYYY-MM-DD HH:mm')
        }
        return result
    }
})