import { RedisClientType, createClient } from 'redis'

class Cache {
    private static instance: RedisClientType

    private constructor() { }

    public static getInstance(): RedisClientType {
        if (!Cache.instance)
            Cache.instance = createClient()
        

        return Cache.instance
    }
}

export { Cache }