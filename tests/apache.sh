#!/bin/bash

# Run 500 GET requests with page=1 parameter
ab -n 500 -c 10 "http://localhost:3000/links?page=1"

# Run 1 POST request with user_id and url parameters in the request body
ab -n 1 -c 1 -p 'payload.json' -T application/json -H "Host: localhost:3000" -v 4 "http://localhost:3000/links"

read -n 1 -s -r -p "Press any key to continue or q to quit..." response
while [ "$response" != "q" ]
do
    read -n 1 -s -r -p "Press any key to continue or q to quit..." response
done
