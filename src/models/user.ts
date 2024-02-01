import { DataTypes, Model } from "sequelize";
import db from "@config/database";

export enum StatusUserActive {
  NonActive = "0",
  Active = "1",
}

interface IUserAksesAttributes {
  id: number;
  nama: string;
  email: string;
  status: StatusUserActive;
  address: string;
  created_at: string;
  updated_at: string;
}

export type UserOutput = Required<IUserAksesAttributes>;

class Users
  extends Model<IUserAksesAttributes>
  implements IUserAksesAttributes
{
  public id!: number;
  public nama!: string;
  public email!: string;
  public status!: StatusUserActive;
  public address!: string;
  public created_at!: string;
  public updated_at!: string;
}

Users.init(
  {
    id: {
      type: DataTypes.STRING(100),
      primaryKey: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("0", "1"),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "users",
    modelName: "Users",
    underscored: true,
    timestamps: false,
  }
);

export default Users;