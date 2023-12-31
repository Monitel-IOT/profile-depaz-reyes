import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  await prisma.article.create({
		data: {
			title: "Post title test 3",
			body: "This is a simple description of the article test 3.",
			imageUrl: "",
		}
	})
	const allArticles = await prisma.article.findMany();
  console.log(allArticles);
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })