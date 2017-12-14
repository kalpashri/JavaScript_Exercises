function Product( id, name, price, colors ){
    'use strict'
        console.log( typeof(id));
        console.log( typeof(name));
       if(typeof id !== 'number')
            throw new Error('invalid type for id.expecting a number,please try again!!');
       else
             this.id = id; 

        if(typeof name !== 'string')
            throw new Error('invalid type for name.expecting a string,please try again!!');
        else
            this.name = name;

        if(typeof price !== 'number')
            throw new Error('invalid type for price.expecting a number,please try again!!');
        else
            this.price = price;
    
    var lengthOfColorsArray = colors.length;

    for(var i=0; i<lengthOfColorsArray; i++){
        if(typeof colors[i] !== 'string')
            throw new Error('invalid type for colors.expecting an array of Strings,please try again!!');
        else
            this.colors = colors[i];
    }
}

try{
        var product1 = new Product(2, 'IPhone-7', 5000, ['zade black', 'shiny silver', 'snow white', 'glittery gold'] );
        console.log ( product1 );
    }catch ( errObject ){
        console.log ( errObject );
    }

try{
        var product2 = new Product(3, 'IPhone-7', 5000, ['zade black', 'shiny silver', 'snow white', 4] );
        console.log ( product3 );
    }catch ( errObject ){
        console.log ( errObject );
    }    

 
try{
        var product2 = new Product(3, IPhone-7, 5000, ['zade black', 'shiny silver', 'snow white'] );
        console.log ( product2 );
    }catch ( errObject ){
        console.log ( errObject );
    }

// it's throwing IPhone-7 is not defined,where as I was expecting invalid type for name.
//expecting a string,please try again!!,please explain this behavior.  



    




