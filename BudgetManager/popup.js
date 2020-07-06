$(function(){

     //anytime we open the popup , we get the total value already displayed
    chrome.storage.sync.get('total',function(nameWhateverYouWant){
        $('#total').text(nameWhateverYouWant.total);
    })


    // when user clicks on submit button
    $('#spendAmount').click(function(){
        //create chrome storage to check if total already exists in the chrome storage, we use chrome API
        chrome.storage.sync.get('total' , function(nameWhateverYouWant){
            var newTotal = 0;

            if(nameWhateverYouWant.total){
                //if total already exists then add it with newTotal 
                //to make it a int use parseInt
                newTotal += parseInt(nameWhateverYouWant.total);
            }
            //otherwise newTotal remains 0

            var amount = $('#amount').val();
            if(amount){
                //we will add what user has entered in the popup
                //so newTotal will be updated with amount
                newTotal += parseInt(amount);
            }
            //set total as newTotal back in chrome storage 
            chrome.storage.sync.set({'total' : newTotal});
            //update our UI
            $('#total').text(newTotal);
            //clear out input box
            $('#amount').val('');
        });
    });
});