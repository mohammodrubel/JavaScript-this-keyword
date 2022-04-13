const person = {
    fastName:'Fardin',
    lastName:'Tazbeed',
    id:2345,
    fullName:function(){
        return this.fastName + ' ' + this.lastName
    }
}

// example 2 

const persons = {
    fastName:'Fardin',
    lastName:'Tazbeed',
    id:2345,
    fullName:function(){
        return this.fastName + ' ' + this.lastName
    },
    getFullName:function (){
        return this.fullName()
    }
}

console.log(person.fullName())
console.log(persons.getFullName())
// console.log(this) // window defult represent this

// example 3 
const personOne = {
    fullName:function(){
        return this.fastName + '  '+ this.lastName
    }
}

const personTwo = {
    fastName:'Mohammod',
    lastName:'Rubel'
}

console.log(personOne.fullName.call(personTwo))




function myFunc (){
    const dates = document.getElementById('demo').innerHTML= Date()
    return dates
}

