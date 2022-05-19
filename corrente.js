class Corrente {
    constructor(bodyA,bodyB) {
        var ultimoelo=bodyA.body.bodies.length-2
        this.link=Constraint.create({ 
            bodyA:bodyA.body.bodies[ultimoelo],
            pointA:{x:0,y:0 },
            bodyB:bodyB,    
            pointB:{x:0,y:0 },
            length:-10,
            stiffness:0.5
        })
        World.add(world,this.link)
    }
    desligar(){
        World.remove(world,this.link)
    }
 } 