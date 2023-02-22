import { Router } from "express"
import { makeGetOneUser, makeGetManyUser, makePostUser, makePatchUser, makeDeleteUser } from '../controllers'

const users_path = '/users'

const route = Router()
const getOneUser = makeGetOneUser()
const getManyUser = makeGetManyUser()
const postUser = makePostUser()
const patchUser = makePatchUser()
const deleteUser = makeDeleteUser()

route.route('/')
    .get(getManyUser.handle)
    .post(postUser.handle)

route.route('/:uuid')
    .get(getOneUser.handle)
    .patch(patchUser.handle)
    .delete(deleteUser.handle)

export { route, users_path }