describe("Calculator", function(){
   it("Calculator is defined", function(){
     expect(Calculator).toBeDefined();  
   });
   
   describe("addition", function(){
      it("can add 1 and 1", function(){
        expect(Calculator.add(1,1)).toEqual(2);  
      }); 
      
      it("can add 2 and 2", function(){
        expect(Calculator.add(2,2)).toEqual(4);  
      }); 
   });
    describe("subtraction", function(){
        it("is defined", function(){
           expect(Calculator.subtract).toBeDefined(); 
        }); 
       it("1 -1 is 0", function(){
           expect(Calculator.subtract(1,1)).toEqual(0);
       }); 
       
       it("10 - 3 is 7", function(){
           expect(Calculator.subtract(10,3)).toEqual(7);
       }); 
    }); 
   
});