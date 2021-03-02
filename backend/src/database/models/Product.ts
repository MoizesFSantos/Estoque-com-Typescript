
import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize("postgres://root:postgres@localhost:5432/estoque");

// We need to declare an interface for our model that is basically what our class would be
interface ProductInstance extends Model {
  ID: number;
  Produto: string;
  Valor: number;
  Quantidade:number;
  created_at:Date;
  Updated_at:Date;
}

const ProductModel = sequelize.define<ProductInstance>(
  "Produto", {
  ID: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
  },
  Produto: {
    type: DataTypes.STRING,
    allowNull:false,
  },
  Valor: {
    type: DataTypes.REAL,
    allowNull:false,
  },
  Quantidade:{
    type:DataTypes.INTEGER,
    allowNull:false,
  },
});
async function doStuff() {
  const instance = await ProductModel.findByPk(1, {
    rejectOnEmpty: true,
  });
  return instance;
}
