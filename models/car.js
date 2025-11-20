const DataTypes = require("sequelize");
const db = require("../database");

const Samochod = db.define("Samochod", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  marka: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  szczegolyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Szczegoly = db.define("Szczegoly", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  iloscDrzwi: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rokProdukcji: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  przebieg: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nadwozie: {
    type: DataTypes.ENUM(
      "sedan",
      "kombi",
      "hatchback",
      "coupe",
      "van",
      "minivan",
      "suv"
    ),
    allowNull: false,
  },
  silnikId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const SilnikSzczegoly = db.define("SilnikSzczegoly", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  pojemnosc: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  mocSilnika: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rodzaj: {
    type: DataTypes.ENUM("elektryczny", "spalinowy"),
    allowNull: false,
  },
  paliwo: {
    type: DataTypes.ENUM("Pb", "ON", "Pb+LPG"),
    allowNull: false,
  },
});

Szczegoly.belongsTo(SilnikSzczegoly, {foreignKey: "silnikId"})

module.exports = {Samochod, Szczegoly, SilnikSzczegoly}
