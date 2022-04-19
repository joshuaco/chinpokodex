class Chinpokomon {
  constructor(name, life, attack) {
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.image = new Image();

    this.image.src = images[this.name];
    this.image.alt = this.name;
  }
  talk() {
    alert(`${this.name.toLowerCase()}!!`);
  }
  show() {
    document.body.appendChild(this.image);
    document.write(`
    <p><strong>${this.name}</strong></p>
    <p>Life: ${this.life}</p>
    <p>Attack: ${this.attack}</p>
    <hr />
    `)
  }
}
