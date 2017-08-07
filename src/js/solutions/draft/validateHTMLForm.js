function solution() {
    // write your code in JavaScript (Node.js 6.4.0)
    //
    // you can access DOM Tree using DOM Object Model:
    //    document.getElementById
    // or using jQuery:
    //    $('some_tag')
    //
    // you can write to stdout for debugging purposes, e.g.
    // console.log('this is a debug message');
        let type = "";
        let validity = null;
        let firstName = $('#first_name').val();
        let lastName = $('#last_name').val();
        let email = $('#email').val();
        let companyName = $('#company_name').val();
        let phone = $('#phone').val();
        let permittedChar = ["a","b","c","d","e","f","g","h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9",".","@"];
        let phoneChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, " ", "-"];
        let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        if ($('#type-person').prop('checked', true)){
            type = "person";
        } else if ($('#type-company').prop('checked', true)){
            type = "company";
        }
        console.log(type);
        
        if (type === "person"){
            // check first name 
            if(firstName === ""){
                return false;
            }
            // check last name
            if(lastName === ""){
                return false;
            }
            // check email
            let atCount = 0;
            if (email.length > 64){
                return false;
                }
            for (let i = 0; i < email.length; i++){
                if(permittedChar.indexOf(email[i]) < 0){
                    return false;
                }
                if (email[i] == "@"){
                    atCount += 1;
                }
            }
              console.log(atCount);
            if (atCount !== 1){
                return false;
                }
           
        } else if (type === "company"){
            
            // check company_name
            if (company_name == ""){
                return false;
                }
            // check phone
            let digitCount = 0;
            for (let i = 0; i < phone.length; i ++){
                if (phoneChar.indexOf(phone[i] < 0)){
                    return false;
                }
                if (number.indexOf(phone[i] >= 0)){
                    digitCount += 1;    
                }
            } 
            if (digitCount < 6){
                return false;
            }
        }
    
    return true;
}