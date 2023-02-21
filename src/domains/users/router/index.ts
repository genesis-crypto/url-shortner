import { Router } from "express"
import { makeGetOneUser, makeGetManyUser } from '../controllers'

const users_path = '/users'

const route = Router()
const getOneUser = makeGetOneUser()
const getManyUser = makeGetManyUser()

route.get('/', getManyUser.handle)
route.get('/:uuid', getOneUser.handle)

export { route, users_path }