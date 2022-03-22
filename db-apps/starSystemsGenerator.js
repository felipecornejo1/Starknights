const db = require('../database/models')

let systems = "Sigma Ovanbula;Remarius;Picon Dikaradon;Taxton Haaridian;Ichdania;Super Hedos Space;Bell Region;Delta Kuonine;Warorox 242;Exoenella Cluster;Chandra Space;Ichgolia Region;Betum;Deiru Sularnia Zone;Intangolia Wuncania Supercluster"

let array = systems.split(';')

array.forEach(i => {db.SolarSystems.create({
    name: i
})})