const mongoose=require('mongoose')
require('dotenv').config();
//Importer notre modele
const PersonModel=require('./personSchema.js')
//Connectons mongodb atlas et nodejs
const uri = process.env.MONGO_URI;
mongoose.connect(uri,{useNewUrlParser:true ,useUnifiedTopology: true }).then(()=>{
    console.log('server is connected!')
}).catch((error)=>{console.log(error)})
//Creons notre premiere instance
const salimata=new PersonModel({
   name:'Salimata Diaw',
   age:23,
   favoriteFoods:['Pizza','Cake']
})
salimata.save()
//Creons plusieurs records
PersonModel.create([
    {name:'Ndeye Oumy Diop',age:26,favoriteFoods:['Lait','Mangue','Mbaxalou Saloum']},
    {name:'Boubacar Diaw',age:60,favoriteFoods:['Arachide','Coca']},
    {name:'Souleymane Bachir Diaw',age:30,favoriteFoods:['Attiekei','Dibi']},
    {name:'Mously Dior Diaw',age:24,favoriteFoods:['Salade','Jus Bissap']},
])
//Trouvons toutes les personnes ayant diaw dans leur noms
PersonModel.find({name:/Diaw/})
//Trouvons la personne qui aime la mangue 
PersonModel.findOne({favoriteFoods:'Mangue'})
//Trouvons la personne qui a l'id 
PersonModel.findById('6408d36017fa761f6ed745e6')
//
PersonModel.findById('6408f299c61ff725fb171a34').then((person) => {
  person.favoriteFoods.push('Hamburger');
  person.save();
  })
  //
  PersonModel.findOneAndUpdate({name:'Boubacar Diaw'},{age:20},{new:true}).then((updatedPerson) => {
    if (updatedPerson === null) {
      console.log('No document found with the filter');
    } else {
      console.log(updatedPerson);
    }
  })
  .catch((err) => {
    console.error(err);
  });
  
  PersonModel.findByIdAndRemove('6408dc9fb6b3deca9c025d0d')
 
  //
  PersonModel.deleteMany({name:/Diaw/}).then((err)=>{
    if (err) {
      console.error(err);
    } else {
      console.log('Person deleted successfully');
    }
  })
  //
  PersonModel.find({favoriteFoods:'Mangue'}).sort({name:1}).limit(2).select({age:0}).exec()

