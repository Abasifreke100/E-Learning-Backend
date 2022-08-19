import { Repository } from "typeorm";
import { User } from "./User.model";

export class userRepo extends Repository <User>{}