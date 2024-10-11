const randomName = () => {
  const firstNames = ["John", "Jane", "Alex", "Emily", "Michael", "Sarah"];
  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
  ];
  return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }`;
};

const randomPhoneNumber = () => {
  const prefix = ["033", "090", "050", "055"];
  return `${prefix[Math.floor(Math.random() * prefix.length)]}${Math.floor(
    Math.random() * 1000000
  )
    .toString()
    .padStart(6, "0")}`;
};

const randomStatus = () => {
  return Math.random() > 0.5 ? "Активный" : "Черный список";
};

const randomSales = () => {
  return Math.random() > 0.5 ? "Есть продажи" : "Нет продаж";
};

const randomReturns = () => {
  return Math.random() > 0.5 ? "Да" : "Нет";
};

const randomGender = () => {
  return Math.random() > 0.5 ? "Мужчина" : "Женщина";
};

const randomRegion = () => {
  const regions = ["Baku", "Sumgait", "Lenkaran", "Ganja", "Sheki"];
  return regions[Math.floor(Math.random() * regions.length)];
};

const randomPosition = () => {
  const positions = ["Менеджер", "Кассир", "Аналитик", "Директор", "Продавец"];
  return positions[Math.floor(Math.random() * positions.length)];
};

const randomReject = () => {
  return Math.random() > 0.5 ? "Есть отказы" : "Нет отказов";
};

const randomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toISOString().split("T")[0];
};

export const generateRandomCustomers = (count) => {
  const customers = [];

  for (let i = 0; i < count; i++) {
    const customer = {
      id: i + 1,
      name: randomName(),
      number: randomPhoneNumber(),
      status: randomStatus(),
      sales: randomSales(),
      returns: randomReturns(),
      registrationDate: randomDate(),
      position: randomPosition(),
      reject: randomReject(),
      gender: randomGender(),
      region: randomRegion(),
    };

    customers.push(customer);
  }

  return customers;
};
