import { GetOneUser } from "./get-one-user"
import { GetManyUser } from "./get-many-user"

function makeGetOneUser() {
    return new GetOneUser()
}

function makeGetManyUser() {
    return new GetManyUser()
}

export { makeGetOneUser, makeGetManyUser }