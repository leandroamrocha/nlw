import fastify from "fastify";
import { z } from "zod";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { PrismaClient } from "@prisma/client";
import { generateSlug } from "./utils/generateSlug";
import { createEvent } from "./routes/create-events";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { registerForEvent } from "./routes/register-for-event";
import { getEvent } from "./routes/get-events";
import { checkIn } from "./routes/check-in";

export const app = fastify();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running on port 3333!");
});
