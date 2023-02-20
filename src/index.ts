import path from 'path'
import * as dotenv from 'dotenv'
import { app } from './shared/configs/http'

const env_path = path.join(__dirname, '.env')
dotenv.config({path: env_path})
console.log(env_path)

app.listen(3000, async () => {
    console.log('server running on 3000')
})