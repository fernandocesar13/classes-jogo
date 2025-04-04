//definir classes de um heroi

class Hero{
    constructor(name, age, className){
        this.name = name;
        this.age = age;
        this.className = className;
    }
    Attack(){
        let attack = " "
        if(this.className == "mago" ){
            attack = "magia"
    }else if(this.className == "guerreiro"){
            attack = "espada"
    } else if(this.className == "monge"){
            attack = "artes marciais"
    } else if(this.className == "ninja"){
        attack = "shuriken"
    }   
    return attack;

   
    
}
        toString(){
            console.log(`o heroi ${this.name} tem ${this.age} anos e é um ${this.className}, ele atacou usando ${this.Attack()}`)
    }

}

//definindo classes
const hero1 = new Hero("Lucas", 48, "mago")
const hero2 = new Hero("Pedro", 25, "guerreiro")
const hero3 = new Hero("João", 30, "monge")
const hero4 = new Hero("Fernando", 20, "ninja")

hero1.toString()
hero2.toString()   
hero3.toString()
hero4.toString()