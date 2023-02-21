import path from 'path'
import * as dotenv from 'dotenv'
import { app } from './shared/configs/http'
import { route, users_path } from './domains/users/router'

const env_path = path.join(__dirname, '.env')
dotenv.config({ path: env_path })

app.use(users_path, route)

app.listen(3000, async () => {
    console.log('server running on 3000')
})