import { GetManyLinks } from './get-many-link'
import { GetOneLink } from './get-one-link'
import { PostLink } from './post-link'
import { PatchLink } from './patch-link'
import { DeleteLink } from './delete-link'
import { RedirectLink } from './redirect-link'

function makeGetManyLinks() {
    return new GetManyLinks()
}

function makeGetOneLink() {
    return new GetOneLink()
}

function makePostLink() {
    return new PostLink()
}

function makePatchLink() {
    return new PatchLink()
}

function makeDeleteLink() {
    return new DeleteLink()
}

function makeRedirectLink() {
    return new RedirectLink()
}

export { makeGetManyLinks, makeGetOneLink, makePostLink, makePatchLink, makeDeleteLink, makeRedirectLink }