import { gql } from "@/__generated__/";

const GET_PROFILE = gql(`
  {
    myProfile {
      id
      name
      avatar
    }
  }
`);

export { GET_PROFILE };
