const images = [];
const collection = [];
const route = "./assets/";

images["Zapato"] = route + "shoe.png";
images["Lambtron"] = route + "lambtron.png";
images["Roidrat"] = route + "roidrat.png";
images["Velocirapstar"] = route + "velocirapstar.png";

collection.push(new Chinpokomon("Lambtron", 80, 65));
collection.push(new Chinpokomon("Roidrat", 90, 70));
collection.push(new Chinpokomon("Velocirapstar", 85, 95));
collection.push(new Chinpokomon("Zapato", 50, 80));

for (let chinpoko of collection) {
  chinpoko.show();
}
