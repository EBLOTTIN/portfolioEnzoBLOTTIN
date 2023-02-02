const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    super({ table: "images" });
  }

  insert(image) {
    return this.connection.query(`insert into ${this.table} SET ?`, [image]);
  }

  update(image) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      image,
      image.id,
    ]);
  }

  findByChemin(chemin) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE chemin=?`, [
      chemin,
    ]);
  }
}

module.exports = ImageManager;
