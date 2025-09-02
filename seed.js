
const { PrismaClient } = require('@prisma/client'); const prisma = new PrismaClient();
async function main(){
  const listings=[
    { title:"Appartement lumineux à Steinfort", price:695000, location:"Steinfort, Luxembourg", municipality:"Steinfort", canton:"Capellen", type:"APARTMENT",
      beds:2, baths:1, area:92, floor:2, parking:1, energyRating:"B",
      thumbnail:"/images/sample1.jpg", images:["/images/sample1.jpg","/images/sample1b.jpg"],
      description:"Bel appartement 2 chambres, proche des commodités.", features:["Balcon","Parking","Proche commodités","Transports"], latitude:49.661, longitude:5.918 },
    { title:"Maison individuelle avec jardin à Arlon", price:875000, location:"Arlon, Belgique", municipality:"Arlon", canton:"—", type:"HOUSE",
      beds:4, baths:2, area:180, floor:0, parking:2, energyRating:"C",
      thumbnail:"/images/sample2.jpg", images:["/images/sample2.jpg","/images/sample2b.jpg"],
      description:"Maison 4 chambres libre de 4 côtés, grand jardin.", features:["Garage double","Jardin","Libre 4 façades","Calme"], latitude:49.683, longitude:5.816 },
    { title:"Penthouse moderne à Luxembourg-ville", price:1390000, location:"Luxembourg-ville, Luxembourg", municipality:"Luxembourg", canton:"Luxembourg", type:"PENTHOUSE",
      beds:3, baths:2, area:135, floor:6, parking:2, energyRating:"A",
      thumbnail:"/images/sample3.jpg", images:["/images/sample3.jpg","/images/sample3b.jpg"],
      description:"Penthouse de standing avec terrasse panoramique.", features:["Terrasse","Vue dégagée","Ascenseur","Cave"], latitude:49.611, longitude:6.131 }
  ];
  for (const data of listings){ await prisma.listing.upsert({ where:{ title:data.title }, update:{}, create:data }); }
  console.log("Seed data inserted.");
}
main().catch(e=>{console.error(e);process.exit(1)}).finally(async()=>{await prisma.$disconnect()})
