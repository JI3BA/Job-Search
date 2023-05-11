import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IAuthor } from '../../models/IAuthor'

export const authorization = createApi({
    reducerPath: 'autorize/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/'
    }),
    endpoints: build => ({
        auth: build.query<any, IAuthor>({
            query: ({login, password, client_id, client_secret, hr}: IAuthor) => ({
                url: ``,
                params:{
                    login: login,
                    password: password,
                    client_id: client_id,
                    client_secret: client_secret,
                    hr: hr
                },
                headers: {
                    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
                }
            })
        })
    })
})

export const {useAuthQuery} = authorization