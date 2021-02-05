'use strict';
const fs = require('fs');
const path = require('path');//解析需要遍历的文件夹
const filePath = path.resolve('./app/public/file');

const fileDisplay = async (filePath, list) => {
    console.log('dddddd', filePath)
    //根据文件路径读取文件，返回文件列表
    var readDir = fs.readdirSync(filePath);

    readDir.forEach(async filename => {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        var info = fs.statSync(filedir)

        if (info.isFile()) {
            var content = fs.readFileSync(filedir, 'utf-8');
            // 后缀 path.extname(filedir)
            // 文件名 path.basename(filedir)
            if (!path.basename(filedir).startsWith('.')) {
                list.push(filedir)
            }

        }
        if (info.isDirectory()) {
            await fileDisplay(filedir, list);
        }
    })
}


module.exports = app => {
    class FileManageService extends app.Service {
        // 主页模块接口获取
        async list(data) {
            let fileList = []
            await fileDisplay(filePath, fileList);

            // 获取服务ip
            return {
                fileList,
                host: this.ctx.request.header.host
            }
        }

        async add(data) {
            const { fileName, fileContent, fileType } = data
            fs.writeFile('./app/public/file/' + fileName + '.' + fileType, fileContent, function (err) {
                if (err) {
                    return console.log(err);
                } else {
                    return ''
                }
            });
        }

        async del(data) {
            const { filename} = data
            console.log(filename,'1')
            fs.unlinkSync('./app/public/file/'+filename);
            return ''
        }
    }
    return FileManageService;
};
