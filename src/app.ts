import fastify from "fastify"

import { appRoutes } from "./http/routes";
import { z, ZodError } from "zod";
import { env } from "./env";

export const app = fastify()

app.register(appRoutes)

app.setErrorHandler((error, _request, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({ message: "Validation error.", issues: z.treeifyError(error) })
    }

    const isNotProd = env.NODE_ENV !== 'prod'
    if (isNotProd) {
        console.error(error)
    } else {
        // TODO: Log to an external tool e.g. Datadog, Sentry, New Relic
    }

    return reply.status(500).send({ message: "Internal Server Error" })
})