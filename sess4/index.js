// // theory
// // init
// let person = {
//     name: "John", // attribute / property
//     age: 29,    // attribute / propertys
// }

// console.log(person)

// // create 
// person.arr = [1,2,3,4]
// console.log(person)

// // person.person = person
// console.log(person)

// // read
//     // string notation
// console.log(person["age"]) // 29

//     // dot notation
// console.log(person.age) // 29


// // update
// person.age += 1;
// console.log(person)

// // delete
// delete person.age
// console.log(person)

// practise

{
    let movie = {
        title: "The dark knight rise",
        year : 2021,
        rate : 8.4
    }

    // log 
    console.log(movie.title, movie.year, movie.rate)
    console.log(movie["title"], movie["year"], movie["rate"])

    // log non existing prop
    x = movie.nonProp
    if (!x)
        // nonProp not exists
        console.log(x, 1)
    else 
        console.log(x, 0)


    let prop;
    prop = prompt("What do you wanna know?")

    while (prop != "exit")
    {   
        prop_v = movie[prop]
        if (prop_v) {
            console.log(prop_v)
        } else {
            console.log(prop + " not existed!")
        }

        prop = prompt("What do you wanna know?")

    }

    // update
    movie.rate = 8.7
    movie.rate += .5
    
    prop = prompt("What do you wanna change?")
    while (prop != "exit")
    {   
        prop_v = movie[prop]
        if (prop_v) {
            movie[prop] = prompt("Value")
            console.log(movie)
        } else {
            console.log(prop + " not existed!")
        }

        prop = prompt("What do you wanna change?")

    }


    prop = prompt("What do you wanna change / create?")
    while (prop != "exit")
    {   
        prop_v = movie[prop]
        if (prop_v) {
            movie[prop] = prompt("Value")
            console.log(movie)
        } else {
            movie[prop] = prompt("new value")
            console.log(movie)
        }

        prop = prompt("What do you wanna change?")

    }
}

{
    let m1 = {
        title: "Shawshank redemption",
        rate : 9.2,
        year : 1990
    }

    let m2 = {
        title: "Fight club",
        rate : 9.4,
        year : 1995
    }

    let m3 = {
        title: "Mall cop",
        rate : 5.4,
        year : 1995
    }

    let movies = [m1, m2, m3];


    // log all
    for (let i = 0; i < movies.length; i++)
    {
        console.log("=========================")
        f(movies[i])
    }    

    // log first
    console.log("=========================")
    f(movies[0])

    // log last 
    console.log("=========================")
    f(movies[movies.length - 1])

    // increase last movie rate by .7
    console.log("=========================")
    lastMovie = movies[movies.length - 1]
    lastMovie.rate += .7
    console.log(lastMovie)



    

}

{
    //object contain array
    let movie = {
        title: "Lord of the ring",
        year : 1993,
        rate : 10,
        characters : ["Sauron", "Gandalf", "Sam"]
    }

    console.log("========================")
    console.log(movie.title)
    console.log("year: ", movie.year)
    console.log("rate: ", movie.rate)
    console.log("casts: ", movie.characters.join(", "))
}


function f(m){
    console.log("title:", m.title)
    console.log("year:" , m.year)
    console.log("rate:" , m.rate)
}

