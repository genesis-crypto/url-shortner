import path from 'path'
import * as dotenv from 'dotenv'
import { app } from './shared/configs/http'
import { route as userRouter, users_path } from './domains/users/router'
import { route as linkRouter, links_path } from './domains/links/router'

const env_path = path.join(__dirname, '.env')
dotenv.config({ path: env_path })

app.use(users_path, userRouter)
app.use(links_path, linkRouter)

app.listen(3000, async () => {
    console.log('server running on 3000')
})