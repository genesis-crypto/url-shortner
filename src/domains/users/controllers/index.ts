import { GetOneUser } from './get-one-user'
import { GetManyUser } from './get-many-user'
import { PostUser } from './post-user'
import { DeleteUser } from './delete-user'
import { PatchUser } from './patch-user'

function makeGetOneUser() {
    return new GetOneUser()
}

function makeGetManyUser() {
    return new GetManyUser()
}

function makePostUser() {
    return new PostUser()
}

function makePatchUser() {
    return new PatchUser()
}

function makeDeleteUser() {
    return new DeleteUser()
}

export { makeGetOneUser, makeGetManyUser, makePostUser, makePatchUser, makeDeleteUser }