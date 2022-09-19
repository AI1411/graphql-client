import type {NextPage} from 'next'
import {useQuery} from "@apollo/client";

import {GetUserDocument, GetUserQuery, ListUsersQuery} from "../graphql/dist/client";
import {ListUsersDocument} from "../graphql/dist/client";

const Home: NextPage = () => {
  const {data} = useQuery<GetUserQuery>(GetUserDocument, {
    variables: {
      id: "1"
    }
  });
  const {data: listUsersData} = useQuery<ListUsersQuery>(ListUsersDocument);
  return (
    <div style={{margin: "0 auto", width: "1000px"}}>
      <h1>id:{data?.user.id}</h1>
      <p>{data?.user.name}</p>
      <p>id:{data?.user.email}</p>

      <div>
        {listUsersData?.users.map((user) => (
          <div key={user.id}>
            <h1>id:{user.id}</h1>
            <p>{user.name}</p>
            <p>id:{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
