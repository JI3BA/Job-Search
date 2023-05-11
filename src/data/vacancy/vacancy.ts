import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const vacancy = createApi({
    reducerPath: 'vacancy/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/'
    }),
    endpoints: build => ({
        vacancy: build.query<any, string>({
            query: () => ({
                url: ``,
                headers: {
                    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
                    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
                }
            })
        })
    })
})

export const {useVacancyQuery} = vacancy