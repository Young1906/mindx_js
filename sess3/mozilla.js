{
    // Add your code here
    let myArray = ["Batman","Begin","Dark Knight Rise"];
    // Don't edit the code below here!

    section.innerHTML = ' ';
    let para1 = document.createElement('p');
    para1.textContent = `Array: ${ myArray }`;

    section.appendChild(para1);
        
}

{
    // Add your code here

    let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
    let myArray = myString.split("+")
    let arrayLength = myArray.length;
    let lastItem = myArray[myArray.length - 1]

    // Don't edit the code below here!

    section.innerHTML = ' ';
    let para1 = document.createElement('p');
    para1.textContent = `Array: ${ myArray }`;

    let para2 = document.createElement('p');
    para2.textContent = `The length of the array is ${ arrayLength }.`;

    let para3 = document.createElement('p');
    para3.textContent = `The last item in the array is "${ lastItem }".`;

    section.appendChild(para1);
    section.appendChild(para2);
    section.appendChild(para3);
        
}

{
    let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

    // Add your code here
    myArray.pop()
    myArray.push("Item 1");
    myArray.push("Item 2");
    
    
    for (let i = 0; i < myArray.length; i++){
    myArray[i] += " ("+i+") ";
    }
    
    myString = myArray.join(" - ");
    
    // Don't edit the code below here!
    
    section.innerHTML = ' ';
    
    let para1 = document.createElement('p');
    para1.textContent = myString;
    
    section.appendChild(para1);
        
}