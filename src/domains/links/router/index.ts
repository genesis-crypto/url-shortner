import { Router } from 'express'
import { makeGetManyLinks, makeGetOneLink, makePostLink, makePatchLink, makeDeleteLink, makeRedirectLink } from '../controllers'

const links_path = '/links'

const route = Router()

const getManyLinks = makeGetManyLinks()
const getOneLink = makeGetOneLink()
const postLink = makePostLink()
const patchLink = makePatchLink()
const deleteLink = makeDeleteLink()
const redirectLink = makeRedirectLink()

route.route('/')
    .get(getManyLinks.handle)
    .post(postLink.handle)

route.route('/:uuid')
    .get(getOneLink.handle)
    .patch(patchLink.handle)
    .delete(deleteLink.handle)

route.route('/redirect/:hash')
    .get(redirectLink.handle)

export { route, links_path }