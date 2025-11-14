const DataTypes = require("sequelize");
const db = require("../database");

const Uzytkownik = db.define("Uzytkownik", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imie: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  nazwisko: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  telefon: {
    type: DataTypes.STRING(14),
    allowNull: false,
    unique: true,
  },
  adresId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Adres = db.define("Adres", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ulica: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  miasto: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  nrDomu: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  nrMieszkania: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});

module.exports = Uzytkownik;
