import { FC } from 'react'
import { useAuthQuery } from '../data/authorization/authorization';
import { useVacancyQuery } from '../data/vacancy/vacancy';
import { Loader, Text } from '@mantine/core';

const Main: FC = () => {
    useAuthQuery({login: 'sergei.stralenia@gmail.com',
    password: 'paralect123',
    client_id: 2356,
    client_secret: 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    hr: 0});

    const {data, isLoading} = useVacancyQuery('')
    
    console.log(data)
    return(
        <>
         {/* {isLoading ? <Loader />
                    :
                    data.objects.map((item: any, index: number) => {
                        return(
                            <Text key={index}>{item.profession}</Text>
                        )
                    })} */}
        </>
    )
}

export default Main