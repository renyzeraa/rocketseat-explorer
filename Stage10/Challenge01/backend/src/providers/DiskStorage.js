const fs = require('fs')
const path = require('path')
const uploadConfig = require('../config/upload')

class DiskStorage {
  async saveFile(file) {
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    ) // rename(função) mudar o arquivo de lugar
    return file
  }

  async deleteFile(file) {
    //função para deletar img
    const filepath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)

    try {
      //tratativa de erros, para manipular arquivos
      await fs.promises.stat(filepath)
    } catch (error) {
      return
    }

    await fs.promises.unlink(filepath)
  }
}

module.exports = DiskStorage
