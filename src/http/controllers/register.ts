import { FastifyReply, FastifyRequest } from "fastify"
import { z } from "zod"

import { RegisterUseCase } from "@/use-cases/register"
import { PrismaUsersRepository } from "@/repositories/prisma-users-repository"

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.email(),
        password: z.string().min(6)
    })

    const { email, name, password } = registerBodySchema.parse(request.body)

    try {
        const usersRepository = new PrismaUsersRepository()
        const { execute } = new RegisterUseCase(usersRepository)

        await execute({ email, name, password })
    } catch (err) {
        return reply.status(409).send({
            // message: err?.message
            message: "Email already registered."
        })
    }

    return reply.status(201).send()
}