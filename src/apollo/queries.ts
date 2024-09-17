import { gql } from "@/__generated__/";

const GET_PROFILE = gql(`
    query MyProfile {
        myProfile {
            id
            email
            password
            name
            role
            avatar
            creationAt
            updatedAt

}
  }
`);

export { GET_PROFILE };
