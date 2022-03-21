import app from "./src/app";
import { PrismaClient } from "@prisma/client";

// Trying Prisma. Querying
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Alice",
      lastname: "Rey",
    },
  });

  const allUsers = await prisma.user.findMany({});
  console.dir(allUsers, { depth: null });
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
//////////////////////////////////////

app.listen(3001, function () {
  console.log("App is listening on port 3001!");
});
