import { z } from "zod";
import { CreateCard } from "./schema";
import { ActionState } from "@/lib/create-safe-action";
import { List } from "@prisma/client";

export type InputType = z.infer<typeof CreateCard>;
export type ReturnType = ActionState<InputType, List>;
