import { faker } from '@faker-js/faker';

export const useFaker = (count) => {
  
  let data = [];

  for (let i = 0; i < count; i++) {
    data.push({
      name: faker.animal.bird(),
      email: faker.internet.email(),
      bgColor: faker.color.rgb(),
    });
  }
  
  return data;
}

