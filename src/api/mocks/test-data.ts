import _ from 'lodash';

export const testData = {
  projects: [
    {
      id: 1,
      name: "P1",
      description: "D1",
      title: "T1",
      treesPlanted: "TP1",
      hectaresRestored: "HR1",
      yearSince: 2022,
      imageUrl: "url 1",
      tag: []
    },
    {
      id: 2,
      name: "P2",
      description: "D2",
      title: "T2",
      treesPlanted: "TP2",
      hectaresRestored: "HR2",
      yearSince: 2023,
      imageUrl: "url 2",
      tag: []
    },
  ],
  tags: [
    {
      id: 1,
      title: "t1",
      subtitle: "s1"
    },
    {
      id: 2,
      title: "t2",
      subtitle: "s2"
    },
  ],
  reports: [
    {
      month: "September",
      year: 2020
    },
    {
      month: "December",
      year: 2020
    },
  ],
  queries: _.range(1, _.random(10, 100)).map(id => ({id, url: `url${id}`, snippet: `snippet${id}`, name: `name${id}`}))
}
