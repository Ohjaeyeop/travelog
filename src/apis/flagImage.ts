import { CountryCode } from "../data/countryCodes";

export default async function flagImage(state: CountryCode) {
  const serviceKey =
    "Os0BvUN73dbFsXA8O3jtA4bPKaxXGxoW7C88n6DpgNyVrssis9u3RLTGl7yxRCJimPkKY0yCD9dUeK4M8vK1BA%3D%3D";
  const url =
    "http://apis.data.go.kr/1262000/CountryFlagService2/getCountryFlagList2";
  await fetch(
    `${url}/serviceKey=${serviceKey}/returnType=JSON/numOfRows=10/cond[country_iso_alp2::EQ]=${state}/pageNo=10`
  ).then((res) => console.log(res));
}
