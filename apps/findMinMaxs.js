module.exports ={


  
  findMinMax: function(list_container){
    //initialize largest number to 0
    var largest_number = 0;
    
    //find the first smallest element in an array using the first element and second element
    var smallest_number;
    smallest_number = list_container[0];

    

    //initialize array of minimum and maximum to an empty array

    var array_of_minimum_and_maximum = [];

    
    // loop over the Array
    var counter;
    for(counter=0; counter<=list_container.length; counter++) {
      if(list_container[counter]>=largest_number) {
        largest_number = list_container[counter];
        
      } 
    }
    

    
    var counter2;
    for(counter2=0; counter2<=list_container.length; counter2++) {
      if(list_container[counter2]<=smallest_number) {
        smallest_number = list_container[counter2];
        
      } 
    }
    if (smallest_number==largest_number){
      
      array_of_minimum_and_maximum.push(smallest_number)
      
    }
    else{
      array_of_minimum_and_maximum.push(smallest_number);
      array_of_minimum_and_maximum.push(largest_number);
    }
    return array_of_minimum_and_maximum;

  }  

}



